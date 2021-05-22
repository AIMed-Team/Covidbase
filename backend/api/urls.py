from django.urls import path
from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter

from . import api


router = DefaultRouter()
router.register(r'dataset', api.DatasetViewSet, basename='dataset')

urlpatterns = router.urls
