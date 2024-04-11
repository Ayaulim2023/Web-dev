from .models import Product,Category
from django.http import JsonResponse,Http404

def list_products(request):
    quertset = Product.objects.all()
    products = []
    for product in quertset:
        products.append(product.to_json())

    return JsonResponse(products, safe=False)



def getProductDetail(request, product_id):
    try:
        product = Product.objects.get(pk=product_id)
    except Product.DoesNotExist:
        raise Http404("No object with such id")
    return JsonResponse({"product": product.to_json()})


def getCategories(request):
    categories = Category.objects.all()
    categories = [category.to_json() for category in categories]
    return JsonResponse({"categories": categories})


def getCategory(request, category_id):
    try:
        category = Category.objects.get(pk=category_id)
    except Category.DoesNotExist:
        raise Http404("No such category")
    return JsonResponse({"category": category.to_json()})


def getProductsByCategory(request, category_id):
    try:
        category = Category.objects.get(pk=category_id)
        products = Product.objects.filter(category=category.id)
        products = [product.to_json() for product in products]
    except Category.DoesNotExist:
        raise Http404("No such category")
    return JsonResponse({"products": products})

def greeting(request):
    return JsonResponse({'message': 'Welcome to the Shop API!'})

# Create your views here.
