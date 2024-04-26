from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User


class Category(models.Model):
    id = models.IntegerField(auto_created=True,primary_key=True)
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name
    
    def to_json(self):
        return{
            "id":self.id,
            "name": self.name
        }

class Photos(models.Model):
    # id = models.IntegerField(auto_created=True,primary_key=True)
    name = models.CharField(max_length=255)
    description = models.TextField()
    dateOfSubmission = timezone.now()
    image = models.ImageField(upload_to='photos/',null=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
    

    def to_json(self):
        return{
            # "id":self.id,
            "name": self.name,
            "description": self.description,
            "dateOfSubmission": self.dateOfSubmission,
            "image": self.image.url if self.image else None,
            "category": self.category.to_json() 
        }
    
class Rating(models.Model):
    user: models.ForeignKey(User, on_delete=models.CASCADE)
    photo: models.ForeignKey(Photos,on_delete=models.CASCADE)
    likes: models.IntegerField(default=0)

    def __str__(self):
        return self.likes
    

    def to_json(self):
        return{
            "likes":self.likes
        }

class Comment(models.Model):
    user: models.ForeignKey(User, on_delete=models.CASCADE)
    photo: models.ForeignKey(Photos,on_delete=models.CASCADE)
    comment: models.TextField()

    def __str__(self):
        return self.likes
    

    def to_json(self):
        return{
            "comment":self.likes
        }


