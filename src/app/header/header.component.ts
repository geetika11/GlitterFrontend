import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public loggedIn;
public Username;
  constructor(private route:Router) { 
    
  }

  ngOnInit() {
    this.loggedIn=localStorage.getItem('ID');
    this.Username=localStorage.getItem('Username');
  }

  logout(){
    console.log(this.loggedIn);
    localStorage.removeItem('ID');
    localStorage.removeItem('Username');
  //  window.location.reload();
    this.loggedIn=localStorage.getItem('ID');
    this.Username=localStorage.getItem('Username');
   // this.route.navigate['../login']

  }
}
