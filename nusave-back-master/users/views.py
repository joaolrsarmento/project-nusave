
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
    
@api_view(['PUT', 'DELETE'])
def user_detail(request, pk):
    """
    Retrieve, update or delete a code snippet.
    """
    try:
        user = NuUser.objects.get(pk=pk)
    except NuUser.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = UserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)