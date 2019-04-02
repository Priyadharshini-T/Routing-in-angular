import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'RoutingExample';
 
}
export class AuthGuard implements CanActivate {
  path: import("@angular/router").ActivatedRouteSnapshot[];
  route: import("@angular/router").ActivatedRouteSnapshot;
  canActivate() {
    console.log("Needs permission");
    return false;
  }
}
@Injectable()
export class OnlyLoggedInUsers implements CanActivate
{
  path: import("@angular/router").ActivatedRouteSnapshot[];  route: import("@angular/router").ActivatedRouteSnapshot;
  constructor(private userservice : UserService)
  {

  }
canActivate()
{
if(this.userservice.IsLoggedIn())
{
  console.log("Logged in");
  return true;
}
else{
  window.alert("Not Logged In");
  return false;
}
}
  
}