from rest_framework import authentication
from users.models import DFHTFYKJ
from .serializers import DFHTFYKJSerializer
from rest_framework import viewsets


class DFHTFYKJViewSet(viewsets.ModelViewSet):
    serializer_class = DFHTFYKJSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = DFHTFYKJ.objects.all()
