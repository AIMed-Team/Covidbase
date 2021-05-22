from django.db import models


class Dataset(models.Model):
    name = models.CharField(max_length=100)
    url = models.URLField(blank=False, null=False, max_length=256)


