"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from users import views

# router = routers.DefaultRouter()
# router.register(r'users', views.user_detail)
# router.register(r'statistics', views.statistics_detail)
# router.register(r'rpg', views.rpg_detail)

urlpatterns = [
    path('admin/', admin.site.urls), 
    path('api/users/', views.users_list),      
    path('api/users/<int:pk>', views.user_detail),      
    path('api/statistics/', views.statistics_list),      
    path('api/statistics/<int:pk>', views.statistics_detail),      
    path('api/rpg/', views.rpg_list),      
    path('api/rpg/<int:pk>', views.rpg_detail),      
    ]
