from rest_framework import viewsets, permissions
from . import serializers, models


class DatasetViewSet(viewsets.ModelViewSet):
    queryset = models.Dataset.objects.all()
    serializer_class = serializers.DatasetSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
