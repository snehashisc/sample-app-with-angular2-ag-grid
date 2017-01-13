import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: `user.component.html`,
    providers: [PostsService],
    inputs:['parentValue']
      
})
export class UserComponent{ 
posts:Post[];
isDataAvailed:boolean;
parentValue: string;


 constructor(private postsService: PostsService){
   
    this.postsService.getPosts().subscribe(posts => {
        this.posts = posts;
        this.bindGridData();
    });
          
  }
    
    
  bindGridData() {
   var gridDiv = document.getElementById('myGrid');
                
   var  gridOptions = {
       columnDefs: [
         /*{headerName: 'RequestType', field: 'RequestType'},
        {headerName: 'Account#', field: 'Account'},
        {headerName: 'SubmittedBy', field: 'SubmittedBy'},
        {headerName: 'Created DateTime#', field: 'CreatedOn'},
        {headerName: 'Status', field: 'Status'}*/
        {headerName: 'Title', field: 'title'},{headerName: 'Body', field: 'body'}
          ]
    };  
     new agGrid.Grid(gridDiv, gridOptions);
     gridOptions.api.setRowData(this.posts);     
 }
 
  
}

interface Post{
    id: number;
    title: string;
    body: string;
}


