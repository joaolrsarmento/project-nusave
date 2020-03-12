
from django.shortcuts import render
from rest_framework import viewsets          
from .serializers import UserSerializer, StatisticsUserSerializer     
from .models import NuUser, StatisticsNuUser          

class UserView(viewsets.ModelViewSet):       
    serializer_class = UserSerializer          
    queryset = NuUser.objects.all() 

class StatisticsUserView(viewsets.ModelViewSet):
    serializer_class = StatisticsUserSerializer
    queryset = StatisticsNuUser.objects.all()