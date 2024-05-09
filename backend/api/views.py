# handle CRUD here

from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, ProductSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Product

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
    
class ProductCreate(generics.CreateAPIView):
    serializer_class = ProductSerializer
    # change to IsAuthenticated 
    permission_classes = [AllowAny]

class ProductListView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    # change to IsAuthenticated 
    permission_classes = [AllowAny] 
