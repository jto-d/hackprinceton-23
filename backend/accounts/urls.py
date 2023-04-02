from django.urls import path

from .views import UserLoginView, UserProfileView, UserSignupView, UserVideoView, UserScoreView

app_name = 'accounts'

"""
Responsible for routing through the accounts application
"""

urlpatterns = [
    path("register/", UserSignupView.as_view(), name="register"),
    path('login/', UserLoginView.as_view(), name='login'),
    path('profile/', UserProfileView.as_view(), name='profile'),
    path('videosubmission/', UserVideoView.as_view(), name='videosubmission'),
    path('score/', UserScoreView.as_view(), name="score")
]