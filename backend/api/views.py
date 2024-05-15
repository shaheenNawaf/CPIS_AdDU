# handle CRUD here

from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserSerializer, ProductSerializer 
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Product
from django.shortcuts import get_object_or_404

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
    
class ProductCreate(generics.CreateAPIView):
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]

class ProductDetail(APIView):
    def delete(self, request, pk):
        try:
            product = Product.objects.get(pk=pk)
            product.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Product.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
class ProductUpdateView(generics.UpdateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]

class ProductListView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [AllowAny] 
    
class ProductDetailView(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]

class ProductUpdateStockIn(APIView):
    permission_classes = [AllowAny]

    def post(self, request, pk):
        product = get_object_or_404(Product, pk=pk)
        stock_in_quantity = request.data.get('stock_in_quantity')

        try:
            # Update the stock
            product.stock += int(stock_in_quantity)
            product.save()
            serializer = ProductSerializer(product)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except ValueError:
            return Response({'error': 'Invalid quantity'}, status=status.HTTP_400_BAD_REQUEST)
        
class ProductUpdateStockOut(APIView):
    permission_classes = [AllowAny]

    def post(self, request, pk):
        product = get_object_or_404(Product, pk=pk)
        stock_in_quantity = request.data.get('stock_in_quantity')

        try:
            # Update the stock
            product.stock -= int(stock_in_quantity)
            product.save()
            serializer = ProductSerializer(product)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except ValueError:
            return Response({'error': 'Invalid quantity'}, status=status.HTTP_400_BAD_REQUEST)
