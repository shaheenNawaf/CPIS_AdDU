# THIS IS WHERE PATHS ARE HANDLED

from django.urls import path
from . import views

urlpatterns = [ 
    path("products/create", views.ProductCreate.as_view(), name="product-create"),
    path("products/list", views.ProductListView.as_view(), name="product-list"),

    path("products/view/<int:pk>/", views.ProductDetailView.as_view(), name="product-view"),
    path("products/update/<int:pk>/", views.ProductUpdateView.as_view(), name="product-update"),
    path("products/delete/<int:pk>/", views.ProductDetail.as_view(), name="product-detail"),

    path("inventory/stockin", views.StockInView.as_view(), name="stock-in"),
    path("inventory/stockout", views.StockOutView.as_view(), name="stock-out"),
    path("inventory/list", views.InventoryListView.as_view(), name="inventory-list")
]