from rest_framework import serializers
from django.utils.encoding import smart_str, force_bytes, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.contrib.auth.tokens import PasswordResetTokenGenerator

from .models import CustomUser
from .utils import Util


"""
Serializes the data from a frontend request and makes it accessible to the backend
"""

# Create registration request
class UserSignupSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)

    class Meta:
        model = CustomUser
        fields = ['first_name', 'last_name', 'email', 'password', 'password2']
        extra_kwargs={
            'password': {'write_only': True}
        }

    # Make sure the passwords match and email is a .edu email
    def validate(self, attrs):
        # get each of the fields from the request
        email = attrs.get('email')
        password = attrs.get('password')
        password2 = attrs.get('password2')

        # if passwords don't match, raise validation error
        if password != password2:
            raise serializers.ValidationError("Passwords do not match")
        return attrs
    
    # Create a new CustomUser object with the given data
    def create(self, validate_data):
        return CustomUser.objects.create_user(**validate_data)

# Create a login request
class UserLoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=255)

    class Meta:
        model = CustomUser
        fields = ['email', 'password']

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'first_name', 'last_name']