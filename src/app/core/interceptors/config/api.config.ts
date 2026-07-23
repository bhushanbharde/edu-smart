import { InjectionToken } from '@angular/core';

export interface ApiConfiguration {
  baseUrl: string;
  timeout: number;
}

export const API_CONFIG = new InjectionToken<ApiConfiguration>('API_CONFIG');
