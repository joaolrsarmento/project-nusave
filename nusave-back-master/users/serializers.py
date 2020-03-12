from rest_framework import serializers
from .models import NuUser, StatisticsNuUser

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = NuUser
        fields = '__all__'


class StatisticsUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = StatisticsNuUser
        fields = '__all__'
