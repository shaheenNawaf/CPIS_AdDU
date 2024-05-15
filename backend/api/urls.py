# THIS IS WHERE PATHS ARE HANDLED

from django.urls import path
from . import views

urlpatterns = [ 
    path("products/create", views.ProductCreate.as_view(), name="product-create"),
    path("products/list", views.ProductListView.as_view(), name="product-list"),
    path("order/create", views.OrderCreateView.as_view(), name="order-create"),
    path("order/list", views.OrderListView.as_view(), name="order-list"),
]