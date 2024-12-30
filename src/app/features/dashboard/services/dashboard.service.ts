import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  // private apiUrl = environment.URL_BASE_FASTIFY || 'http://localhost:3000/api';
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users`);
  }
}
