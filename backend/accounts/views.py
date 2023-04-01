from django.shortcuts import render
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import Response, status
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate

from .models import CustomUser
from .renderers import UserRenderer
from .serializers import UserSignupSerializer, UserLoginSerializer, UserProfileSerializer

# Generate Token Manually
def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

# Create your views here.
class UserSignupView(APIView):

    def post(self, request, format=None):
        print(request.data)
        serializer = UserSignupSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        # save the user to the database
        user = serializer.save()

        # store the id of the logged in user
        request.session['logged_user_id'] = user.id

        token = get_tokens_for_user(user)
        return Response({'token':token, 'msg':'Registration Successful'}, status=status.HTTP_201_CREATED)

# Handle login request
class UserLoginView(APIView):
    renderer_classes = [UserRenderer]

    # After submit button pressed, handle the data
    def post(self, request, format=None):
        serializer = UserLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        email = serializer.data.get('email')
        password = serializer.data.get('password')
        
        # Authenticate the user with the email and password given
        user = authenticate(email=email, password=password)
    
       
        # If user logged in
        if user is not None:
            # Store the ID of the logged in user
            request.session['logged_user_id'] = user.id
            print('success')
            token = get_tokens_for_user(user)
            return Response({'token':token, 'msg':'Login Success'}, status=status.HTTP_200_OK)
        else:
            return Response({'error':{'non_field_errors': 'Email or Password is not Valid'}}, status=status.HTTP_404_NOT_FOUND)

class UserProfileView(APIView):
    renderer_classes = [UserRenderer]
    permission_classes = [isAuthenticated]

    def get(self, request, format=None):
        serializer = UserProfileSerializer(request.user)
        print("successful get request")

        return Response(serializer.data, status=status.HTTP_200_OK)


