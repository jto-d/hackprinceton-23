from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.
class CustomUser(AbstractUser):

    first_name = models.CharField(('First name'), max_length=20)
    last_name = models.CharField(('Last name'), max_length=20)

    email = models.EmailField(('Email address'), unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []