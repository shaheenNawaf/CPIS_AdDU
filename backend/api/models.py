# BASICALLY WHERE TABLES ARE MADE

# How to make table:
# 1. make a model class
# 2. create a serializer class serializers.py to parse the information going in and out of database
# 3. create a views class in views.py to handle crud
# 4. create a path in the urls.py

from django.db import models
from django.contrib.auth.models import User

class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    description = models.TextField()

    def __str__(self):
        return self.title
