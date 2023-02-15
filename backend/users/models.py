from django.db import models
from django_cryptography.fields import encrypt

class User(models.Model):
    name = models.CharField("Name", max_length=240)
    email = models.EmailField(unique=True)
    registrationDate = models.DateField("Registration Date", auto_now_add=True)
    password = encrypt(models.CharField(max_length=50))

    def __str__(self):
        return self.name