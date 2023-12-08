import { inject,Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { Observable } from 'rxjs';

// export const authGuard: CanActivateFn = (route, state) => {
//   const router = inject(Router)
//   const authService = inject(AuthService)

@Injectable({
  providedIn: 'root'
})

  export class LoggedinGuard  {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): boolean {
        if (this.authService.isLoggedIn()) {
            // this.router.navigate(['dashboard']); 
            return true;
        }
        else {
            alert('Please authenticate yourself!')
            this.router.navigate(['login'])
            return false
          }
        // return true;
    }
}

  // if(authService.isLoggedIn()){
  //   return true;
  // } else {
  //   alert('access denied')
  //   router.navigate(['login'])
  //   return false
  // }
// };

// export const IsLoggedInGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean => {
//   return inject(LoggedinGuard).canActivate(route, state)
// }
