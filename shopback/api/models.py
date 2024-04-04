from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=200, default="")
    price = models.FloatField(default=0.0)
    category = models.IntegerField(default=1)
    description = models.TextField()
    count = models.IntegerField(default=0)
    is_active = models.BooleanField(default=False)

    def __str__(self):
        return self.name
    
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
        }

class Category(models.Model):
    name = models.CharField(max_length=255, default="")

    def __str__(self):
        return self.name
    
    def to_json(self):
        return {
            "id": self.id,
            "name": self.name
        }
