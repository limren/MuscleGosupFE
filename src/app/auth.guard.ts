import { inject, Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth/auth.service';
import { catchError, firstValueFrom, map, of, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
class PermissionsService {
  canActivate() {
    const authService = inject(AuthService);
    const router = inject(Router);
    return authService.isLoggedIn().pipe(
      map((status) => {
        console.log('status : ', status);
        if (status) {
          return true;
        }
        return router.createUrlTree(['/login']);
      })
    );
  }
}

export const authGuard: CanActivateFn = (route, state) => {
  return inject(PermissionsService).canActivate();
};
