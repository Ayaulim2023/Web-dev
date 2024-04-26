from rest_framework import serializers
from .models import *
from django.contrib.auth.models import User

class CategorySerializers(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()

    def create(self, validated_data):
        return Category.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.id = validated_data.get('id', instance.name)
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance


class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photos
        fields = ['id', 'name', 'description', 'image','dateOfSubmission', 'category']


class RatingSerializers(serializers.Serializer):
    likes = serializers.IntegerField()

    def create(self, validated_data):
        return Category.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.likes = validated_data.get('likes', instance.name)
        instance.save()
        return instance


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['user','photo','comment']

