from django.db import models

# Create your models here.
class ProductPrice(models.Model):
    price = models.FloatField()
    count = models.IntegerField(default=0)

