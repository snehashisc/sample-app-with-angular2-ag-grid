import { Component, ViewChild } from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: `user.component.html`,
    providers: [PostsService]
      
})
export class UserComponent{ 
posts:Post[];
private gridOptions: GridOptions;

 constructor(private postsService: PostsService){
   
    this.postsService.getPosts().subscribe(posts => {
        this.posts = posts;
        this.bindGridData();
    });
        this.gridOptions = <GridOptions>{};  
        
  }
    
    
  bindGridData() {
   var gridDiv = document.getElementById('myGrid');            
   this.gridOptions = {
       columnDefs: [
        {headerName: 'RequestType', field: 'req'},
        {headerName: 'RequestType', field: 'RequestType'},
        {headerName: 'AccountNumber', field: 'AccountNumber'},
        {headerName: 'SubmittedBy', field: 'SubmittedBy'},
        {headerName: 'Created DateTime#', field: 'CreatedOn'},
        {headerName: 'Status', field: 'Status'},
        {headerName: '', field: '',cellRenderer:agMenuBind,suppressFilter: true}
        ],
        enableSorting: true,
        enableFilter:true,
        onCellClicked: function(event) { onSelectionChanged(event) }, 
        currentObj:this

    };  
     new agGrid.Grid(gridDiv, this.gridOptions);
     this.gridOptions.context = {
            myService: this;
        } 
     var that = this;
   jsonload(function (data) {
   loginType();
  
   setTimeout(function() {
    if(flag == false) {
   that.gridOptions.api.sizeColumnsToFit(); 
			that.gridOptions.api.setRowData(data);
            }
            
   },1000);
   
		});
 }
 
 
 function onSelectionChanged(e) {
 console.log(e);
   
    var reqId = e.data.req;
    if(e.event.target.className == 'glyphicon glyphicon-trash'){
    var reqId = e.data.req;
    
    } else {
    var reqId = e.data.req;
    if(e.event.target.className == 'glyphicon glyphicon-download') {
    e.context.myService.postsService.getDownloadData(reqId)
        .subscribe(blob => {
    var downloadUrl= URL.createObjectURL(blob);
    window.open(downloadUrl);
    });
    }
    
    }
    
  }
    

 var flag;
 function loginType() {
var xhr = new XMLHttpRequest();
		xhr.open('GET', './app/components/loginuser.json' );
		xhr.responseType = 'json';
		
		xhr.onload =  function() {
			if(this.response[0].RequestType == 'HO' || this.response[0].RequestType == 'NO' ) { 
            flag = false;
				
			}	
		};
		
		xhr.onerror =  function () {
			console.log('loading data error');
		}
		xhr.send();

}


 function agMenuBind(params){
 //console.log(params.context);
return `<button class="glyphicon glyphicon-download"></button>    <span class="glyphicon glyphicon-trash"></span>`
}

  function  jsonload(callback) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', './app/components/db.json' );
		xhr.responseType = 'json';
		
		xhr.onload =  function() {
			if(this.status == '200') { // onload called even on 404 etc so check the status
				callback(this.response);
				
			}	
		};
		
		xhr.onerror =  function () {
			console.log('loading data error');
		}
		xhr.send();
	}
 
}

interface Post{
    id: number;
    title: string;
    body: string;
}


