# filepath: /c:/Users/adity/OneDrive/Desktop/work/web6.0/server/api/routing.py
from django.urls import re_path
from . import consumers

websocket_urlpatterns = [
    #re_path(r'ws/files/$', consumers.FileConsumer.as_asgi()),
]