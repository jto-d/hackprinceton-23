from django.urls import path

from .views import UserLoginView, UserProfileView, UserSignupView

app_name = 'accounts'

"""
Responsible for routing through the accounts application
"""

urlpatterns = [
    path("signup/", UserSignupView.as_view(), name="signup"),
    path('login/', UserLoginView.as_view(), name='login'),
    path('profile/', UserProfileView.as_view(), name='profile')
]