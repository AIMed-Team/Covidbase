from rest_framework.routers import DefaultRouter

from . import api


router = DefaultRouter()
router.register(r'dataset', api.DatasetViewSet, basename='dataset')
router.register(r'paper', api.PaperViewSet, basename='paper')
router.register(r'metric', api.MetricViewSet, basename='metric')

urlpatterns = router.urls
