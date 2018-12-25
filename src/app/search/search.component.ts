import { Component, OnInit } from '@angular/core';
import {SearchService} from './search.service'
import{ApiService} from '../api.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 
  constructor(private searchService:SearchService, private apiservice:ApiService,private route:Router) { }

  public users:Array<Object>;
  ngOnInit() {
    
  }

  
  SearchUser(formValues){
    
    this.searchService.GetAllUsers(formValues.SearchString).subscribe((data:Array<Object>)=>{
      console.log(formValues.SearchString);
      console.log(data);
      this.users=data;
    })
  }

  public Follow(usertoFollowID){
    var ID=localStorage.getItem('ID');
    this.apiservice.userToFollow(ID,usertoFollowID).subscribe(data=>{
      window.location.reload();
      this.route.navigate['./Following']
    });
    }
    
}
