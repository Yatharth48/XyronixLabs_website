from rest_framework.decorators import api_view
from rest_framework.response import Response
from server.mongodb import get_db

@api_view(['GET'])
def sample_api(request):
    data = {
        "message": "Hello from Django with DRF!"
    }
    return Response(data)

@api_view(['GET'])
def home(request):
    db = get_db()
    collection = db['home_collection']
    data = collection.find_one({}, {'_id': 0})  # Exclude the '_id' field from the response
    return Response(data)

@api_view(['GET'])
def about_us(request):
    db = get_db()
    collection = db['about_us_collection']
    data = collection.find_one({}, {'_id': 0})  # Exclude the '_id' field from the response
    return Response(data)

@api_view(['GET'])
def products(request):
    db = get_db()
    collection = db['products_collection']
    data = collection.find_one({}, {'_id': 0})  # Exclude the '_id' field from the response
    return Response(data)

@api_view(['GET'])
def services(request):
    db = get_db()
    collection = db['services_collection']
    data = collection.find_one({}, {'_id': 0})  # Exclude the '_id' field from the response
    return Response(data)

@api_view(['GET'])
def research(request):
    db = get_db()
    collection = db['research_collection']
    data = collection.find_one({}, {'_id': 0})  # Exclude the '_id' field from the response
    return Response(data)

@api_view(['GET'])
def gallery(request):
    db = get_db()
    collection = db['gallery_collection']
    data = collection.find_one({}, {'_id': 0})  # Exclude the '_id' field from the response
    return Response(data)

@api_view(['GET'])
def contact_us(request):
    db = get_db()
    collection = db['contact_us_collection']
    data = collection.find_one({}, {'_id': 0})  # Exclude the '_id' field from the response
    return Response(data)

@api_view(['GET'])
def signin(request):
    db = get_db()
    collection = db['signin_collection']
    data = collection.find_one({}, {'_id': 0})  # Exclude the '_id' field from the response
    return Response(data)

@api_view(['GET'])
def signup(request):
    db = get_db()
    collection = db['signup_collection']
    data = collection.find_one({}, {'_id': 0})  # Exclude the '_id' field from the response
    return Response(data)