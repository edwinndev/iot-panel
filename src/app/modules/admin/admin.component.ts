import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginResponse } from '@data/interfaces/api.login';
import navegations, { SidebarNavigation } from '@data/interfaces/local.navegation';
import { AuthService } from '@data/services/auth.service';

@Component({
  selector: 'mmj-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  public items : SidebarNavigation[] = navegations
  
  constructor(private authService: AuthService, private router : Router) {}
  
  public get auth() {
    return this.authService.auth
  }
  
  public logout() : void {
    this.router.navigate(['/'])
    this.authService.logout()
  }
}
