from django.shortcuts import redirect, render
from .models import *
from django.http import JsonResponse,Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, generics
from .serializers import *
from rest_framework.decorators import api_view
from rest_framework.generics import ListAPIView

class listCategories(APIView):
    def get(self, request):
        companies = Category.objects.all()
        serializer = CategorySerializers(companies, many=True)
        return Response(serializer.data)
    
    def post(self,request):
        serializer = CategorySerializers(data=request.data)
        if serializer.is_valid():
            category = serializer.save()
            # Fetch the newly created category with its ID
            new_category = Category.objects.get(pk=category.id)
            serializer = CategorySerializers(new_category)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class listPhotos(generics.ListCreateAPIView):
    queryset = Photos.objects.all()
    serializer_class = PhotoSerializer

@api_view(['GET', 'PUT', 'DELETE'])
def getCategoryDetail(request, category_id):
    try:
        category = Category.objects.get(pk = category_id)
    except Category.DoesNotExist:
        raise Http404("No such company!")
    
    if request.method == 'GET':
        serializer = CategorySerializers(category)
        return Response(serializer.data)
    
    if request.method == 'PUT':
        serializer = CategorySerializers(category, data= request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    if request.method == 'DELETE':
        category.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'PUT', 'DELETE'])
def getPhotosDetail(request, photo_id):
    try:
        photo = Photos.objects.get(pk = photo_id)
    except Photos.DoesNotExist:
        raise Http404("No such company!")
    
    if request.method == 'GET':
        serializer = PhotoSerializer(photo)
        return Response(serializer.data)
    
    if request.method == 'PUT':
        serializer = PhotoSerializer(photo, data= request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    if request.method == 'DELETE':
        photo.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST'])
def getPhotosByCategoryId(request, category_id):
    try:
        categoryy = Category.objects.get(pk=category_id)
    except Category.DoesNotExist:
        raise Http404("No such company!")

    if request.method == 'GET':
        vacancies = Photos.objects.filter(category=categoryy)
        serializer = PhotoSerializer(vacancies, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = PhotoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(category=categoryy)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
