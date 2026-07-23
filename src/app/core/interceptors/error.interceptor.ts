import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';

import { catchError, throwError } from 'rxjs';

import { inject } from '@angular/core';
import { UiStore } from '../state/ui.store';


export const errorInterceptor: HttpInterceptorFn = (
  request,

  next,
) => {
  const ui = inject(UiStore);

  return next(request).pipe(
    catchError((error: HttpErrorResponse) => {
      switch (error.status) {
        case 401:
          ui.showSnackbar('Unauthorized');

          break;

        case 403:
          ui.showSnackbar('Access denied');

          break;

        case 404:
          ui.showSnackbar('Resource not found');

          break;

        case 500:
          ui.showSnackbar('Server error');

          break;

        default:
          ui.showSnackbar('Unexpected error');
      }

      return throwError(() => error);
    }),
  );
};
