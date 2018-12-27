import { Component, OnInit } from '@angular/core';
import{FollowersService} from './followers.service'

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  public users:Array<Object>;
  constructor(private followersService:FollowersService) { }
  public ID:String;
  public loggedIn:boolean;
  ngOnInit() {
    this.ID=localStorage.getItem('ID');
    if(this.ID!=null){
      this.loggedIn=true;
    }
    else
    this.loggedIn=false;  
    this.followersService.getFollowers(this.ID).subscribe((data: Array<Object>) => {
      console.log(data);
      this.users = data;
      console.log(this.users);
  });
}

}
