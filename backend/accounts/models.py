from django.db import models
from django.contrib.auth.models import AbstractUser

from .managers import CustomUserManager
# Create your models here.
class CustomUser(AbstractUser):

    first_name = models.CharField(('First name'), max_length=20)
    last_name = models.CharField(('Last name'), max_length=20)

    email = models.EmailField(('Email address'), unique=True)

    previous_ratings = models.JSONField(('Form rating'), default=dict, blank=True)

    username = None

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()