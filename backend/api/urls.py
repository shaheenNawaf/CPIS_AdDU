# THIS IS WHERE PATHS ARE HANDLED

from django.urls import path
from . import views

urlpatterns = [ 
    path("products/create", views.ProductCreate.as_view(), name="product-create"),
    path("products/list", views.ProductListView.as_view(), name="product-list"),

    path("products/view/<int:pk>/", views.ProductDetailView.as_view(), name="product-view"),
    path("products/update/<int:pk>/", views.ProductUpdateView.as_view(), name="product-update"),
    path("products/delete/<int:pk>/", views.ProductDetail.as_view(), name="product-detail"),
    path('products/update_stockin/<int:pk>/', views.ProductUpdateStockIn.as_view(), name='update_stock'),
    path('products/update_stockout/<int:pk>/', views.ProductUpdateStockOut.as_view(), name='update_stock'),
    
]