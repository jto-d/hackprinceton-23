import cv2
import numpy as np

image = cv2.imread("pictures/trainingpic.jpeg")

lower_color = np.array([30, 50, 50])
upper_color = np.array([90, 255, 255])

kernel = np.ones((5, 5), np.uint8)

hsv_image = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)

mask = cv2.inRange(hsv_image, lower_color, upper_color)

mask = cv2.erode(mask, kernel, iterations=1)
mask = cv2.dilate(mask, kernel, iterations=1)

contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

min_area = 125

for contour in contours:
    if cv2.contourArea(contour) > min_area:  # Set a minimum area to filter out noise
        (x, y, w, h) = cv2.boundingRect(contour)
        center_x = int(x + w / 2)
        center_y = int(y + h / 2)
        cv2.circle(image, (center_x, center_y), radius=15, color=(255, 255, 255), thickness=-1)

cv2.imshow("Bench Press Bar Path", image)
cv2.waitKey(0)
cv2.destroyAllWindows()
