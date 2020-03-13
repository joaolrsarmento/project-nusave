
from django.shortcuts import render
from rest_framework import viewsets          
from .serializers import UserSerializer, StatisticsUserSerializer, RPGUserSerializer  
from .models import NuUser, StatisticsNuUser, RPGNuUser

class UserView(viewsets.ModelViewSet):       
    serializer_class = UserSerializer          
    queryset = NuUser.objects.all() 

class StatisticsUserView(viewsets.ModelViewSet):
    serializer_class = StatisticsUserSerializer
    queryset = StatisticsNuUser.objects.all()

class RPGUserView(viewsets.ModelViewSet):
    serializer_class = RPGUserSerializer
    queryset = RPGNuUser.objects.all()
    