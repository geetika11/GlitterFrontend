import { Component, OnInit } from '@angular/core';
import {SearchService} from './search.service'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 
  constructor(private searchService:SearchService) { }

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

}
