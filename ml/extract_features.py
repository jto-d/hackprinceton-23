import cv2 as cv
import numpy as np

# capture video
video = cv.VideoCapture("videos/good press 1.mp4")

# image from video
img_rgb = cv.imread('assets/test.png')
assert img_rgb is not None, "file could not be read, check with os.path.exists()"
img_gray = cv.cvtColor(img_rgb, cv.COLOR_BGR2GRAY)


# load template file
template = cv.imread('assets/barbell.png', cv.IMREAD_GRAYSCALE)
assert template is not None, "file could not be found"
w, h = template.shape[::-1]

res = cv.matchTemplate(img_gray, template,cv.TM_CCOEFF_NORMED)
threshold = 0.8
loc = np.where ( res >= threshold)
for pt in zip(*loc[::-1]):
    cv.rectangle(img_rgb, pt, (pt[0] + w, pt[1] + h), (0,0,255), 2)

cv.imwrite('res.png', img_rgb)