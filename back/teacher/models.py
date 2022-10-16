from email.policy import default
from pydoc import describe
from unicodedata import decimal
from django.db import models

class Teacher(models.Model):
    
    name = models.CharField(max_length=100, null=False, blank=False)
    value = models.DecimalField(
        max_digits=9, decimal_places=2, null=False, blank=False,
    )
    description = models.TextField(null=False, blank=False)
    photo = models.URLField(max_length=255, null=False, blank=False)
    
    def __str__(self):
        return self.name


class Aula(models.Model):
    name = models.CharField(max_length=100, null=False, blank=False)
    email = models.EmailField(max_length=250, null=False, blank=False, default=None)
    teacher = models.ForeignKey(
        to=Teacher,
        on_delete=models.CASCADE,
        related_name='aula',
        null=False,
        blank=False,
    )