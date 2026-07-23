import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly http = inject(HttpClient);

  get<T>(
    url: string,
    params?: HttpParams,
  ): Observable<ApiResponse<T>> {
    return this.http.get<ApiResponse<T>>(
      url,

      {
        params,
      },
    );
  }

  post<T>(
    url: string,

    body: unknown,
  ): Observable<ApiResponse<T>> {
    return this.http.post<ApiResponse<T>>(
      url,

      body,
    );
  }

  put<T>(
    url: string,

    body: unknown,
  ): Observable<ApiResponse<T>> {
    return this.http.put<ApiResponse<T>>(
      url,

      body,
    );
  }

  patch<T>(
    url: string,

    body: unknown,
  ): Observable<ApiResponse<T>> {
    return this.http.patch<ApiResponse<T>>(
      url,

      body,
    );
  }

  delete<T>(url: string): Observable<ApiResponse<T>> {
    return this.http.delete<ApiResponse<T>>(url);
  }
}
