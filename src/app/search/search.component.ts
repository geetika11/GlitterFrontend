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
  public tweets:Array<Object>;
  public ID:String;
  public loggedIn:boolean;
  

  ngOnInit() {
    this.ID=localStorage.getItem('ID');
    if(this.ID!=null){
      this.loggedIn=true;
    }
    else
    this.loggedIn=false;
  }

  
  SearchUser(formValues){
    if(formValues.search == "posts"){
      this.ID=localStorage.getItem('ID');
    this.searchService.GetAllTags(formValues.SearchString,this.ID).subscribe((data:Array<Object>)=>{

      console.log(formValues.SearchString);
      console.log(formValues.search);
      console.log(formValues);
      console.log("post me hi hai");
      console.log(data);
      this.tweets=data;
      this.users=null;
    })
  }
  else{
    this.ID=localStorage.getItem('ID');
    this.searchService.GetAllUsers(formValues.SearchString,this.ID).subscribe((data:Array<Object>)=>{

      console.log(formValues.SearchString);
      console.log(formValues.search);
      console.log(formValues);
      console.log("people me hi hai");
      console.log(data);
      this.users=data;
      this.tweets=null;
    })
  }
}


  public Follow(UsertoFollowID:string){
    var ID=localStorage.getItem('ID');
    this.apiservice.userToFollow(ID,UsertoFollowID).subscribe(data=>{
      window.location.reload();
      this.route.navigate['./Search']
    });
    }

    public unFollow(usertounfollowID){
      var ID=localStorage.getItem('ID');
      this.apiservice.userToUnfollow(ID,usertounfollowID).subscribe(data=>{
        window.location.reload();
        this.route.navigate['./Search']
      });
      }
    
}
