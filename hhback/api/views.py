from django.shortcuts import render
from .models import Company,Vacancy
from django.http import JsonResponse,Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, generics
from .serializers import CompanySerializers, VacancySerializer
# from rest_framework.renderers import JSONRenderer
from rest_framework.decorators import api_view
from rest_framework.generics import ListAPIView


class list_company(APIView):
    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializers(companies, many=True)
        return Response(serializer.data)
    
    def post(self,request):
        serializer = CompanySerializers(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status= status.HTTP_400_BAD_REQUEST)
    # queryset = Company.objects.all()
    # companies = []
    # for company in queryset:
    #     companies.append(company.to_json())
    # return JsonResponse(companies, safe= False)

class list_vacancies(generics.ListCreateAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer
# class list_vacancies(APIView):
#     def get(self, request):
#         vacancies = Vacancy.objects.all()
#         serializer = VacancySerializer(vacancies, many=True)
#         return Response(vacancies.data)
    
#     def post(self, request):
#         serializer = VacancySerializer(data= request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status= status.HTTP_201_CREATED)
#         return Response(serializer.errors, status= status.HTTP_400_BAD_REQUEST)
    # queryset= Vacancy.objects.all()
    # vacancies = []
    # for vacancy in queryset:
    #     vacancies.append(vacancy.to_json())
    # return JsonResponse(vacancies, safe=False)

@api_view(['GET', 'PUT', 'DELETE'])
def getCompanyDetail(request, company_id):
    try:
        company = Company.objects.get(pk = company_id)
    except Company.DoesNotExist:
        raise Http404("No such company!")
    
    if request.method == 'GET':
        serializer = CompanySerializers(company)
        return Response(serializer.data)
    
    if request.method == 'PUT':
        serializer = CompanySerializers(company, data= request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    if request.method == 'DELETE':
        company.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'PUT', 'DELETE'])
def getVacanciesDetail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(pk = vacancy_id)
    except Vacancy.DoesNotExist:
        raise Http404("No such company!")
    
    if request.method == 'GET':
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)
    
    if request.method == 'PUT':
        serializer = VacancySerializer(vacancy, data= request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    if request.method == 'DELETE':
        vacancy.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST'])
def getVacanciesByCompanyId(request, company_id):
    try:
        company = Company.objects.get(pk=company_id)
    except Company.DoesNotExist:
        raise Http404("No such company!")

    if request.method == 'GET':
        vacancies = Vacancy.objects.filter(company=company)
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(company=company)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class topTenVacancies(ListAPIView):
    queryset = Vacancy.objects.order_by('-salary')[:10]  # Ordering by descending salary to get the top 10 vacancies
    serializer_class = VacancySerializer
    pagination_class = None  # Disable pagination

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

