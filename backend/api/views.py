# handle CRUD here

from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, ProductSerializer, OrderSerializer, OrderItemSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Product, Order

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

# ORDER SYSTEM
class OrderCreateView(generics.CreateAPIView):
    serializer_class = OrderSerializer
    permission_classes = [AllowAny]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class OrderListView(generics.ListAPIView):
    serializer_class = OrderSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return Order.objects.filter(user=self.request.user)