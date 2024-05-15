# BASICALLY WHERE TABLES ARE MADE

# How to make table:
# 1. make a model class
# 2. create a serializer class serializers.py to parse the information going in and out of database
# 3. create a views class in views.py to handle crud
# 4. create a path in the urls.py
# DONT FORGET TO IMPORT FOR EACH STEPS
# CREATEMIGRATION THEN MIGRATE IF DONE (COMMAND LINE)

from django.db import models
from django.contrib.auth.models import User

# Product 
class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    description = models.TextField()

# Inventory System
class Inventory(models.Model):
    stock = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)

