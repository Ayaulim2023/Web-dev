from django.urls import path
from . import views

urlpatterns = [
    path('photos/', views.listPhotos.as_view(), name='photo-list'),
    path('categories/', views.listCategories.as_view(), name='category-list'),
    path('categories/<int:category_id>/', views.getCategoryDetail, name = 'category_detail'),
    path('photos/<int:photo_id>/', views.getPhotosDetail, name = 'photot_detail'),
    path('categories/<int:category_id>/photos/', views.getPhotosByCategoryId, name = 'photos_by_categories'),
]