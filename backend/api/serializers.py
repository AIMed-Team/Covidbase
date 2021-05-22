from django.db.models import fields
from rest_framework.serializers import ModelSerializer
from . import models as apimodels


class DatasetSerializer(ModelSerializer):
    class Meta:
        model = apimodels.Dataset
        fields = '__all__'
