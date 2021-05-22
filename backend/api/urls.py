from django.urls import path
from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter

from . import views


router = DefaultRouter()

urlpatterns = router.urls
