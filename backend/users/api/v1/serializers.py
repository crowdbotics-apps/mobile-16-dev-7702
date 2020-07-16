from rest_framework import serializers
from users.models import DFHTFYKJ


class DFHTFYKJSerializer(serializers.ModelSerializer):
    class Meta:
        model = DFHTFYKJ
        fields = "__all__"
