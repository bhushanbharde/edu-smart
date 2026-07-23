import { HttpInterceptorFn } from '@angular/common/http';

import { inject } from '@angular/core';
import { AuthStore } from '../state/auth.store';

export const authInterceptor: HttpInterceptorFn = (
  request,

  next,
) => {
  const authStore = inject(AuthStore);

  const token = authStore.token();

  if (!token) {
    return next(request);
  }

  const cloned = request.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });

  return next(cloned);
};
