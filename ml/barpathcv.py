import cv2
import numpy as np
import statistics

video = cv2.VideoCapture("demo_videos/jacqueredgood.mp4")

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

output_filename = "output_videos/output_video.mp4"
fps = int(video.get(cv2.CAP_PROP_FPS))
size = (width, height)
fourcc = cv2.VideoWriter_fourcc(*"mp4v")  # Codec for mp4 format

out_video = cv2.VideoWriter(output_filename, fourcc, fps, size)

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
            first_contour = False
            (x, y, w, h) = cv2.boundingRect(contour)
            center_x = int(x + w / 2)
            center_y = int(y + h / 2)
            cv2.circle(bar_path, (center_x, center_y), radius=10, color=(0, 0, 0), thickness=-1)

            
            contour_x = center_x
            contour_y = center_y
            contour_coords.append((contour_x, contour_y))
            

            if first_frame:
                first_center_x = center_x
                first_center_y = center_y
                # cv2.circle(bar_path, (first_center_x, first_center_y), radius = 50, color=(255,255,255), thickness = 10)
                first_frame = False
        

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
    cv2.polylines(tracked_ascent_image, [tracked_ascent_points_array], isClosed=False, color = (255, 255, 255, 255), thickness=15)

    

    # ctesting = np.zeros((height, width, 3), dtype=np.uint8)
    # ctestingarray = np.array(contour_coords, dtype=np.int32).reshape(-1, 1, 2)
    # cv2.polylines(ctesting, [ctestingarray], isClosed=False, color=(255, 255, 255), thickness=30)

    file = open('differences.txt', 'r')
    lines = file.readlines()
    file.close()

    points = [(first_center_x + 30, first_center_y)]

    for line in lines:
        points.append((points[-1][0] + int(line.split(',')[0]),
                        points[-1][1] + int(line.split(',')[1])))

    
    points_descent = points[:40]
    points_ascent = points[40:]

    # Creating images to store ideal path drawing
    ideal_path_descent = np.zeros((height, width, 3), dtype=np.uint8)
    ideal_path_ascent = np.zeros((height, width, 3), dtype=np.uint8)

    # Convert the points list to a numpy array with the shape (number_of_points, 1, 2)
    points_array_descent = np.array(points_descent, dtype=np.int32).reshape(-1, 1, 2)
    points_array_ascent = np.array(points_ascent, dtype=np.int32).reshape(-1, 1, 2)

    

    # Draw the curve on the ideal_path image using cv2.polylines
    cv2.polylines(ideal_path_descent, [points_array_descent], isClosed=False, color=(0, 255, 0), thickness=10)

    cv2.polylines(ideal_path_ascent, [points_array_ascent], isClosed=False, color=(0, 255, 0), thickness=10)

    cumulative_frame = cv2.addWeighted(frame, 1, bar_path, 1, 0)

    traced_frame_1 = cv2.addWeighted(cumulative_frame, 1, tracked_descent_image, 1, 0)
    traced_frame_2 = cv2.addWeighted(traced_frame_1, 1, tracked_ascent_image, 1, 0)
    traced_frame_3 = cv2.addWeighted(traced_frame_2, 1, ideal_path_descent, 1, 0)
    traced_frame_4 = cv2.addWeighted(traced_frame_3, 1, ideal_path_ascent, 1, 0)

    #traced_frame_test = cv2.addWeighted(traced_frame_2, 1, ctesting, 1, 0)

    # cv2.circle(traced_frame, (first_center_x+129, first_center_y+331), radius=15, color=(255,0,0), thickness=10)

    out_video.write(traced_frame_4)
    cv2.imshow("Bench Press Bar Path", traced_frame_4)  
    
    key = cv2.waitKey(30) & 0xFF
    if key == ord("q"):
        break
video.release()
out_video.release()
cv2.destroyAllWindows()

# print("number of frames = " + str(numframes))
# print("number of descent points = " + str(len(tracked_descent_points)))
# print(tracked_descent_points)
# print("")
# print("Lowest = " + str(lowest))
# print("")
# print("number of ascent points = " + str(len(tracked_ascent_points)))
# print(tracked_ascent_points)

# now we calculate deviations from "proportional points" ! :)))))

n = 9

step_descend_ideal = len(points_descent) / 9
step_descend_tracked = len(tracked_descent_points) / 9

step_ascend_ideal = len(points_ascent) / 9
step_ascend_tracked = len(tracked_ascent_points) / 9

descend_differences = []
ascend_differences = []

descent_ideal_indices = []
descent_tracked_indices = []

#populate descent deviations

for i in range(n):
    index1 = int(i * step_descend_ideal)
    index2 = int(i * step_descend_tracked)
    descent_ideal_indices.append(index1)
    descent_tracked_indices.append(index2)

    diff = abs(points_descent[index1][0] - tracked_descent_points[index2][0])

    descend_differences.append(diff)

#populate ascent deviations

for i in range(n):
    index1 = int(i * step_ascend_ideal)
    index2 = int(i * step_ascend_tracked)

    diff = abs(points_ascent[index1][0] - tracked_ascent_points[index2][0])

    ascend_differences.append(diff)

descent_xmean = statistics.mean(descend_differences)
ascent_xmean = statistics.mean(ascend_differences)

# print("Ideal descent indices")
# print(descent_ideal_indices)
# print("Tracked descent indices")
# print(descent_tracked_indices)

# print("Printing Descent Differences")
# print(descend_differences)
print("Descent Mean X-Deviation = " + str(descent_xmean))


# print("Printing Ascent Differences")
# print(ascend_differences)
print("Ascent Mean X-Deviation = " + str(ascent_xmean))

aggregated_deviation = statistics.mean((descent_xmean, ascent_xmean))

final_score = 0

if aggregated_deviation > 130:
    final_score = 0
else:
    final_score = (130 - aggregated_deviation)

print("Aggregated Mean Deviation = " + str(aggregated_deviation))
print("Final Score = " + str(final_score))
