# filepath: /c:/Users/adity/OneDrive/Desktop/work/web6.0/server/api/views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import SampleSerializer

@api_view(['GET'])
def sample_api(request):
    data = {
        "message": "Hello from Django with DRF!"
    }
    serializer = SampleSerializer(data)
    return Response(serializer.data)