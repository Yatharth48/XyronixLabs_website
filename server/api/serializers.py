# filepath: /c:/Users/adity/OneDrive/Desktop/work/web6.0/server/api/serializers.py
from rest_framework import serializers

class SampleSerializer(serializers.Serializer):
    message = serializers.CharField(max_length=200)