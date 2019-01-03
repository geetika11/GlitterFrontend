import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlaygroundService {

  constructor(private http:HttpClient) {}


    composeTweet(UserID:String,Message:String) {
      const newTweetObject = Object.assign({}, {UserID,Message});
      return this.http.post(`${environment.apiUrl}/user/newTweet`, newTweetObject);
    }

    getAllTweets(userId:String){

      //const TweetsObject = Object.assign({}, {userId});
      return this.http.get(`${environment.apiUrl}/user/playground/${userId}`);
    }

    deleteTweet(UserID:String,TweetID:String){
     
      return this.http.delete(`${environment.apiUrl}/user/deletetweet/${UserID}/${TweetID}`);
    }

    editTweet(UserID:String,Message:String,TweetID:String){
      const EditTweetObject = Object.assign({}, {UserID,Message,TweetID});
      return this.http.put(`${environment.apiUrl}/user/updatetweet`,EditTweetObject)
    }
   
}
