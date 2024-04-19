import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company, Vacancy } from './models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  base_url = 'http://127.0.0.1:8000'

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.base_url}/api/companies`);
  }

  // getVacanciesByCompany(companyId: number): Observable<Vacancy[]> {
  //   const url = `${this.base_url}?company=${companyId}`;
  //   return this.http.get<Vacancy[]>(url);
  // }
}
