import cv2
import numpy as np

video = cv2.VideoCapture("videos/capleredbadgp.mp4")

lower_color1 = np.array([0, 250, 50])
upper_color1 = np.array([10, 255, 255])

lower_color2 = np.array([170, 120, 50])
upper_color2 = np.array([180, 255, 255])

kernel = np.ones((5, 5), np.uint8)

ret, frame = video.read()

height, width, _ = frame.shape
bar_path = np.zeros((height, width, 3), dtype=np.uint8)

first_frame = True
first_center_x = None
first_center_y = None
numframes = 0
contour_coords = []

while True:

    ret, frame = video.read()
    numframes = numframes + 1
    first_contour = True

    if not ret:
        break

    hsv_image = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)

    mask1 = cv2.inRange(hsv_image, lower_color1, upper_color1)
    mask2 = cv2.inRange(hsv_image, lower_color2, upper_color2)

    mask = cv2.bitwise_or(mask1, mask2)

    mask = cv2.erode(mask, kernel, iterations=1)
    mask = cv2.dilate(mask, kernel, iterations=1)

    contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    min_area = 125

    for contour in contours:
        if cv2.contourArea(contour) > min_area and first_contour:  # Set a minimum area to filter out noise
            (x, y, w, h) = cv2.boundingRect(contour)
            center_x = int(x + w / 2)
            center_y = int(y + h / 2)
            cv2.circle(bar_path, (center_x, center_y), radius=10, color=(0, 255, 0), thickness=-1)

            
            contour_x = center_x
            contour_y = center_y
            contour_coords.append((contour_x, contour_y))
            

            if first_frame:
                first_center_x = center_x
                first_center_y = center_y
                # cv2.circle(bar_path, (first_center_x, first_center_y), radius = 50, color=(255,255,255), thickness = 10)
                first_frame = False
        first_contour = False

    lowest = contour_coords[0][1]
    for coord in contour_coords:
        if coord[1] > lowest:
            lowest = coord[1]
    
    index = next(i for i, point in enumerate(contour_coords) if point[1] == lowest)

    tracked_descent_points = contour_coords[:(index + 1)]
    tracked_ascent_points = contour_coords[index:]

    tracked_descent_points_array = np.array(tracked_descent_points, dtype=np.int32).reshape(-1, 1, 2)
    tracked_ascent_points_array = np.array(tracked_ascent_points, dtype=np.int32).reshape(-1, 1, 2)

    tracked_descent_image = np.zeros((height, width, 3), dtype=np.uint8)
    tracked_ascent_image = np.zeros((height, width, 3), dtype=np.uint8)

    cv2.polylines(tracked_descent_image, [tracked_descent_points_array], isClosed=False, color = (255, 255, 255, 255), thickness=15)
    cv2.polylines(tracked_ascent_image, [tracked_ascent_points_array], isClosed=False, color = (255, 255, 0, 255), thickness=15)

    

    # ctesting = np.zeros((height, width, 3), dtype=np.uint8)
    # ctestingarray = np.array(contour_coords, dtype=np.int32).reshape(-1, 1, 2)
    # cv2.polylines(ctesting, [ctestingarray], isClosed=False, color=(255, 255, 255), thickness=30)

    
    points_descent = [
    (first_center_x, first_center_y),
    (first_center_x+14, first_center_y+17),
    (first_center_x+27, first_center_y+41),
    (first_center_x+46, first_center_y+70),
    (first_center_x+65, first_center_y+103),
    (first_center_x+86, first_center_y+147),
    (first_center_x+98, first_center_y+201),
    (first_center_x+112, first_center_y+254),
    (first_center_x+129, first_center_y+331), # bottom pivot
    ]

    points_ascent = [
    (first_center_x+129, first_center_y+331), # bottom pivot
    (first_center_x+101, first_center_y+322),
    (first_center_x+72, first_center_y+292),
    (first_center_x+40, first_center_y+252),
    (first_center_x+29, first_center_y+221),
    (first_center_x+15, first_center_y+191),
    (first_center_x+6, first_center_y+149),
    (first_center_x-5, first_center_y+116),
    (first_center_x-7, first_center_y+94),
    (first_center_x-9, first_center_y+75),
    (first_center_x-10, first_center_y+57),
    (first_center_x-12, first_center_y+37),
    (first_center_x-12, first_center_y+10),
    (first_center_x-9, first_center_y+3),
    (first_center_x-4, first_center_y-5),
    ]

    # Creating images to store ideal path drawing
    ideal_path_descent = np.zeros((height, width, 3), dtype=np.uint8)
    ideal_path_ascent = np.zeros((height, width, 3), dtype=np.uint8)

    # Convert the points list to a numpy array with the shape (number_of_points, 1, 2)
    points_array_descent = np.array(points_descent, dtype=np.int32).reshape(-1, 1, 2)
    points_array_ascent = np.array(points_ascent, dtype=np.int32).reshape(-1, 1, 2)

    

    # Draw the curve on the ideal_path image using cv2.polylines
    cv2.polylines(ideal_path_descent, [points_array_descent], isClosed=False, color=(0 ,0 ,255), thickness=10)

    cv2.polylines(ideal_path_ascent, [points_array_ascent], isClosed=False, color=(255, 0, 0), thickness=10)

    cumulative_frame = cv2.addWeighted(frame, 1, bar_path, 1, 0)

    traced_frame_1 = cv2.addWeighted(cumulative_frame, 1, tracked_descent_image, 1, 0)
    traced_frame_2 = cv2.addWeighted(traced_frame_1, 1, tracked_ascent_image, 1, 0)
    traced_frame_3 = cv2.addWeighted(traced_frame_2, 1, ideal_path_descent, 1, 0)
    traced_frame_4 = cv2.addWeighted(traced_frame_3, 1, ideal_path_ascent, 1, 0)

    #traced_frame_test = cv2.addWeighted(traced_frame_2, 1, ctesting, 1, 0)

    # cv2.circle(traced_frame, (first_center_x+129, first_center_y+331), radius=15, color=(255,0,0), thickness=10)

    cv2.imshow("Bench Press Bar Path", traced_frame_4)    
    
    key = cv2.waitKey(30) & 0xFF
    if key == ord("q"):
        break
video.release()
cv2.destroyAllWindows()

print("number of frames = " + str(numframes))
print("number of descent points = " + str(len(tracked_descent_points)))
print(tracked_descent_points)
print("")
print("Lowest = " + str(lowest))
print("")
print("number of ascent points = " + str(len(tracked_ascent_points)))
print(tracked_ascent_points)
