from rest_framework import viewsets, permissions
from . import serializers, models


class DatasetViewSet(viewsets.ModelViewSet):
    queryset = models.Dataset.objects.all()
    serializer_class = serializers.DatasetSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class PaperViewSet(viewsets.ModelViewSet):
    queryset = models.Paper.objects.all()
    serializer_class = serializers.PaperSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class MetricViewSet(viewsets.ModelViewSet):
    queryset = models.Metric.objects.all()
    serializer_class = serializers.MetricSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
