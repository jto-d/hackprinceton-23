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

while True:

    ret, frame = video.read()

    if not ret:
        break

    hsv_image = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)

    mask1 = cv2.inRange(hsv_image, lower_color1, upper_color1)
    mask2 = cv2.inRange(hsv_image, lower_color2, upper_color2)

    mask = cv2.bitwise_or(mask1, mask2)

    mask = cv2.erode(mask, kernel, iterations=1)
    mask = cv2.dilate(mask, kernel, iterations=1)

    contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    min_area = 150

    for contour in contours:
        if cv2.contourArea(contour) > min_area:  # Set a minimum area to filter out noise
            (x, y, w, h) = cv2.boundingRect(contour)
            center_x = int(x + w / 2)
            center_y = int(y + h / 2)
            cv2.circle(bar_path, (center_x, center_y), radius=10, color=(0, 255, 0), thickness=-1)

    cumulative_frame = cv2.addWeighted(frame, 1, bar_path, 1, 0)
    cv2.imshow("Bench Press Bar Path", cumulative_frame)    
    
    key = cv2.waitKey(30) & 0xFF
    if key == ord("q"):
        break
video.release()
cv2.destroyAllWindows()
