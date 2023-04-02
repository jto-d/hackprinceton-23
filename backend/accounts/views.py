from django.shortcuts import render
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate

import os

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


        f = open('name.txt', 'w')
        f.write(request.data['first_name'])
        f.close()


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

    def get(self, request, format=None):


        f = open('name.txt', 'r')
        name = f.read()
        print(name)

        f = open('../ml/score.txt', 'r')
        prev_score = f.read()

        # return Response({user.first_name, user.previous_ratings}, status=status.HTTP_200_OK)


        serializer = UserProfileSerializer(request.user)
        print("successful get request")

        return Response({"name": name, "score": prev_score}, status=status.HTTP_200_OK)

class UserVideoView(APIView):
    renderer_classes = [UserRenderer]

    def post(self, request, format=None):
        filename = request.data['file'].split('.')[0]

        f = open('user.txt', 'w')
        
        f.write(filename)
        f.close()
        

        return Response({"data": "true"}, status=status.HTTP_200_OK)

class UserScoreView(APIView):
    renderer_classes = [UserRenderer]

    def get(self, request, format=None):

        f = open('user.txt', 'r')
        name = f.read()

        fi = open(os.path.join(name, 'score.txt'), 'r')
        score = fi.read()
        print(score)

        return Response({"score": score[:4], "name": name}, status=status.HTTP_200_OK)