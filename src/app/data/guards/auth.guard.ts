import { Injectable } from '@angular/core';
import { 
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@data/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private router : Router) {}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (this.authService.auth.token) {
      return true;
    }
    return false;
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | boolean {
    if (this.authService.auth.token) {
      return true;
    }
    this.router.navigate(['/login'])
    return false;
  }
}
