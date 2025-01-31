# filepath: /c:/Users/adity/OneDrive/Desktop/work/web6.0/server/api/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('sample/', views.sample_api),
]