import { Component, OnInit } from '@angular/core';
import { PlaygroundService } from './playground.service'
import { Router } from '@angular/router'
import { _document } from '@angular/platform-browser/src/browser';
import{ApiService} from '../api.service';


@Component({
  selector: 'app-play-ground',
  templateUrl: './play-ground.component.html',
  styleUrls: ['./play-ground.component.css']
})
export class PlayGroundComponent implements OnInit {
  errorList: string[] = [];
  showValidationMessages: Boolean;
  public selected: Array<Object>;



  constructor(private playgroundService: PlaygroundService, private apiservice:ApiService,private router:Router) { }
  public ID:String;
  public loggedIn:boolean;
  
  ngOnInit() {
    this.ID=localStorage.getItem('ID');
    if(this.ID!=null){
      this.loggedIn=true;
    }
    else
    this.loggedIn=false;
    
    console.log(this.ID);
    
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementById("close");

    // When the user clicks the button, open the modal 
    btn.onclick = function () {
      modal.style.display = "block";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
    span.onclick = function () {
      modal.style.display = "none";
    }
    var id = localStorage.getItem('ID').toString();

    this.playgroundService.getAllTweets(id).subscribe((data: Array<Object>) => {
      console.log(data);
      this.selected = data;
      console.log(this.selected);
      //this.saveTweets(data);
    });
    
  
  }

  newTweet(formValues) {
    var id = localStorage.getItem('ID').toString();
    
    console.log(formValues.message);
    this.playgroundService.composeTweet(id, formValues.Message)
      .subscribe(

        (data) => {
         
        },
        (error) => {
          this.errorList = [];
          const errorMessage = error['error']['message'];
          this.errorList.push(`${errorMessage}`);
        }
      )
      window.location.reload();
      this.router.navigate(['/Play-Ground']);
  }

 

  
  editTweet(formValues) {

    console.log(formValues);
    var id = localStorage.getItem('ID').toString();
    var TweetID=this.UpdatedMessageID;
    console.log(formValues.UpdatedMessage);
    console.log(TweetID);
      console.log(id);
    this.playgroundService.editTweet(id, formValues.UpdatedMessage, TweetID).subscribe((status: Object) => {
      window.location.reload();
      this.router.navigate(['/Play-Ground']);
    });
  }
  deleteTweet(TweetID:String){
    var id=localStorage.getItem('ID').toString(); 
    this.playgroundService.deleteTweet(id,TweetID) .subscribe(

      (data) => {
        window.location.reload();
        this.router.navigate(['/Play-Ground']);
          });
  }

  LikeTweet(TweetID:String){
    var id=localStorage.getItem('ID').toString(); 
    this.apiservice.LikeTweet(id,TweetID) .subscribe(

      (data) => {
        window.location.reload();
        this.router.navigate(['/Play-Ground']);
          });
  }


  DislikeTweet(TweetID:String){
    var id=localStorage.getItem('ID').toString(); 
    this.apiservice.DislikeTweet(id,TweetID) .subscribe(

      (data) => {
        window.location.reload();
        this.router.navigate(['/Play-Ground']);
          });
  }

  public UpdatedMessageID;


  openPopup(tweet) {
    var modal = document.getElementById('myModal2');
    // Get the button that opens the modal
    console.log(modal);

    var span = document.getElementById("close2");

    var UpdatedMessageID= document.getElementById("UpdatedMessageID") as HTMLInputElement;
     UpdatedMessageID.value=tweet.TweetID;
    
    this.UpdatedMessageID=tweet.TweetID;
    
    var UpdatedMessage=document.getElementById("UpdatedMessage") as HTMLInputElement;
    UpdatedMessage.value=tweet.Message;
    //console.log(tweet.Message);
    // When the user clicks the button, open the modal 

    modal.style.display = "block";

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };

    span.onclick = function () {

      modal.style.display = "none";
    }
  }
}


