from django.urls import path
from . import views

urlpatterns = [
    path('products', views.list_products, name='list_products'),
     path("products/<int:product_id>", views.getProductDetail, name="product-detail"),
    path("categories/", views.getCategories, name="categories"),
    path("categories/<int:category_id>", views.getCategory, name="category"),
    path("categories/<int:category_id>/products", views.getProductsByCategory,
         name="prodsByCategory")
]