import { HttpInterceptorFn } from '@angular/common/http';

import { inject } from '@angular/core';

import { finalize } from 'rxjs';
import { UiStore } from '../state/ui.store';

export const loadingInterceptor: HttpInterceptorFn = (
  request,

  next,
) => {
  const ui = inject(UiStore);

  ui.showLoader();

  return next(request).pipe(
    finalize(() => {
      ui.hideLoader();
    }),
  );
};
