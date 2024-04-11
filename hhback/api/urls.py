from django.urls import path
from . import views

urlpatterns = [
    path('companies/', views.list_company, name = 'list_company'),
    path('vacancies/', views.list_vacancies, name='list_vacancies'),
    path('companies/<int:company_id>/', views.getCompanyDetail, name = 'company_detail'),
    path('vacancies/<int:vacancy_id>/', views.getVacanciesDetail, name = 'vacancy_detail'),
    path('companies/<int:company_id>/vacancies/', views.getVacanciesByCompanyId, name = 'vacancies_by_company'),
    path('vacancies/topten/',views.topTenVacancies,name = 'topten')
]