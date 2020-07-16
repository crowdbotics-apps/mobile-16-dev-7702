from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import DFHTFYKJViewSet

router = DefaultRouter()
router.register("dfhtfykj", DFHTFYKJViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
