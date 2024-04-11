from django.shortcuts import render
from .models import Company,Vacancy
from django.http import JsonResponse,Http404

def list_company(request):
    quertset = Company.objects.all()
    companies = []
    for company in quertset:
        companies.append(company.to_json())
    return JsonResponse(companies, safe= False)

def list_vacancies(request):
    quertset= Vacancy.objects.all()
    vacancies = []
    for vacancy in quertset:
        vacancies.append(vacancy.to_json())
    return JsonResponse(vacancies, safe=False)

def getCompanyDetail(request, company_id):
    try:
        company = Company.objects.get(pk = company_id)
    except Company.DoesNotExist:
        raise Http404("No such company!")
    return JsonResponse({"company": company.to_json()})

def getVacanciesDetail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(pk = vacancy_id)
    except Vacancy.DoesNotExist:
        raise Http404("No such vacancy!")
    return JsonResponse({"vacancy":vacancy.to_json()})

def getVacanciesByCompanyId(request, company_id):
    try:
        company = Company.objects.get(pk = company_id)
        vacancies = Vacancy.objects.filter(company = company.id)
        vacancies = [vacancy.to_json() for vacancy in vacancies]
    except Company.DoesNotExist:
        raise Http404("No such company!")
    return JsonResponse(vacancies, safe=False)
    

def topTenVacancies(request):
    top_vacancies = Vacancy.objects.order_by('salary')[:10]
    vacancies = [vacancy.to_json() for vacancy in top_vacancies]
    return JsonResponse(vacancies, safe=False)





