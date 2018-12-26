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
    if(formValues.search == "posts"){
    this.searchService.GetAllTags(formValues.SearchString).subscribe((data:Array<Object>)=>{

      console.log(formValues.SearchString);
      console.log(formValues.search);
      console.log(formValues);
      console.log("post me hi hai");
      console.log(data);
      this.users=data;
    })
  }
  else{
    this.searchService.GetAllUsers(formValues.SearchString).subscribe((data:Array<Object>)=>{

      console.log(formValues.SearchString);
      console.log(formValues.search);
      console.log(formValues);
      console.log("people me hi hai");
      console.log(data);
      this.users=data;
    })
  }
}


  public Follow(UsertoFollowID:string){
    var ID=localStorage.getItem('ID');
    this.apiservice.userToFollow(ID,UsertoFollowID).subscribe(data=>{
      window.location.reload();
      this.route.navigate['./Following']
    });
    }
    
}
