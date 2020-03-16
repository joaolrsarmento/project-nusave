
from django.shortcuts import render
from rest_framework import viewsets          
from .serializers import UserSerializer, StatisticsUserSerializer, RPGUserSerializer  
from .models import NuUser, StatisticsNuUser, RPGNuUser
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response


class UserView(viewsets.ModelViewSet):       
    serializer_class = UserSerializer          
    queryset = NuUser.objects.all() 

class StatisticsUserView(viewsets.ModelViewSet):
    serializer_class = StatisticsUserSerializer
    queryset = StatisticsNuUser.objects.all()

class RPGUserView(viewsets.ModelViewSet):
    serializer_class = RPGUserSerializer
    queryset = RPGNuUser.objects.all()

@api_view(['GET', 'POST'])
def users_list(request):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'GET':
        users = NuUser.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def statistics_list(request):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'GET':
        users = StatisticsNuUser.objects.all()
        serializer = StatisticsUserSerializer(users, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = StatisticsUserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def rpg_list(request):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'GET':
        users = RPGNuUser.objects.all()
        serializer = RPGUserSerializer(users, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = RPGUserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def user_detail(request, pk):
    """
    Retrieve, update or delete a code snippet.
    """
    try:
        user = NuUser.objects.get(pk=pk)
    except NuUser.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = UserSerializer(user)
        return Response(serializer.data)

    if request.method == 'PUT':
        serializer = UserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'PUT', 'DELETE'])
def statistics_detail(request, pk):
    """
    Retrieve, update or delete a code snippet.
    """
    try:
        user = StatisticsNuUser.objects.get(pk=pk)
    except StatisticsNuUser.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = StatisticsUserSerializer(user)
        return Response(serializer.data)

    if request.method == 'PUT':
        serializer = UserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'PUT', 'DELETE'])
def rpg_detail(request, pk):
    """
    Retrieve, update or delete a code snippet.
    """
    try:
        user = RPGNuUser.objects.get(pk=pk)
    except RPGNuUser.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = UserSerializer(user)
        return Response(serializer.data)

    if request.method == 'PUT':
        serializer = RPGUserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)