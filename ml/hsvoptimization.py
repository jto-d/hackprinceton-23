import cv2
import numpy as np

video = cv2.VideoCapture("videos/billygoodred.mp4")

while True:
    ret, frame = video.read()

    if not ret:
        break

    hsv_image = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)

    # Adjust these values based on your observations
    lower_red1 = np.array([0, 250, 50])
    upper_red1 = np.array([10, 255, 255])

    lower_red2 = np.array([170, 120, 50])
    upper_red2 = np.array([180, 255, 255])

    mask1 = cv2.inRange(hsv_image, lower_red1, upper_red1)
    mask2 = cv2.inRange(hsv_image, lower_red2, upper_red2)
    mask = cv2.bitwise_or(mask1, mask2)

    result = cv2.bitwise_and(frame, frame, mask=mask)

    cv2.imshow("Frame", frame)
    cv2.imshow("Mask", mask)
    cv2.imshow("Result", result)

    key = cv2.waitKey(1000) & 0xFF
    if key == ord("q"):
        break

video.release()
cv2.destroyAllWindows()
