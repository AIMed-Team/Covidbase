from abc import abstractmethod
from enum import Enum
from django.db import models


class EnumField(Enum):

    @property
    def str_value(self):
        """
        string value of enum
        """
        return self.value

    @classmethod
    def choices(cls):
        return tuple((i.name, i.str_value) for i in cls)


class Dataset(models.Model):
    name = models.CharField(max_length=100)
    url = models.URLField(blank=False, null=False, max_length=256)


class JournalReferenceType(EnumField):
    DOI = 'DOI'
    arXiv = 'arXiv'


class Paper(models.Model):
    title = models.CharField(max_length=256, null=False)
    journal_reference_type = models.CharField(max_length=64, null=False,
                                              default=JournalReferenceType.DOI.str_value,
                                              choices=JournalReferenceType.choices())
    journal_reference_id = models.CharField(max_length=128, null=False)


class Metric(models.Model):
    name = models.CharField(max_length=128)
    value = models.FloatField()
    unit = models.CharField(max_length=32)
    paper = models.ForeignKey(
        Paper, related_name='metrics', on_delete=models.CASCADE)
    dataset = models.ForeignKey(
        Dataset, related_name='metrics', on_delete=models.RESTRICT)
