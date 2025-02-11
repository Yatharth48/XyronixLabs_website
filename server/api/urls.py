from django.urls import path
from . import views

urlpatterns = [
    path('sample/', views.sample_api),
    path('home/', views.home, name='home'),
    path('about-us/', views.about_us, name='about_us'),
    path('products/', views.products, name='products'),
    path('services/', views.services, name='services'),
    path('research/', views.research, name='research'),
    path('gallery/', views.gallery, name='gallery'),
    path('contact-us/', views.contact_us, name='contact_us'),
    path('signin/', views.signin, name='signin'),
    path('signup/', views.signup, name='signup'),
]