import cv2
import numpy as np

video = cv2.VideoCapture("videos/jacqueredgood.mp4")

ret, frame = video.read()

# Create a list to store the points of the curve
curve = []
num_points_drawn = 0

# Define the MouseCallback function to record the mouse events
def draw_curve(event, x, y, flags, param):    

    global num_points_drawn

    if event == cv2.EVENT_LBUTTONDOWN:
        curve.append((x, y))
        num_points_drawn += 1

# Set the MouseCallback function for the frame
cv2.namedWindow("Frame")
cv2.setMouseCallback("Frame", draw_curve)

# Draw the curve as it is being created
while True:
    cv2.imshow("Frame", frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
    if len(curve) > 1:
        cv2.polylines(frame, [np.array(curve)], False, (0, 0, 255), thickness=2)

# Find the coordinates of the points along the curve within the frame
for i in curve:
    if 0 <= i[0] < frame.shape[1] and 0 <= i[1] < frame.shape[0]:
        print("Point on curve: ({}, {})".format(i[0], i[1]))

# Find the differences in values between consecutive points
differences = []
for i in range(1, len(curve)):
    diff_x = curve[i][0] - curve[i-1][0]
    diff_y = curve[i][1] - curve[i-1][1]
    differences.append((diff_x, diff_y))


# Print the differences in values between consecutive points
print("Differences in values between consecutive points:")
for diff in differences:
    print("({}, {})".format(diff[0], diff[1]))

print("Number of points: " + str(num_points_drawn))
# Display the final image with the curve
cv2.imshow("Frame", frame)
cv2.waitKey(0)
cv2.destroyAllWindows()
