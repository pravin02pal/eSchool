import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent implements OnInit {
  ngOnInit() {
    alasql("CREATE TABLE student (id number AUTOINCREMENT, name string, email string, dob string, city string)");
    alasql('INSERT INTO student SELECT * FROM ?',[[
	  {
	    "name": "Madrid",
	    "email": "madrid@yopmail.com",
	    "dob": "01/02/2016",
	    "city": "indore"
	  },
	  {
	    "name": "Hari",
	    "email": "hari@yopmail.com",
	    "dob": "11/05/2016",
	    "city": "pithampur"
	  },
	  {
	    "name": "Jhon",
	    "email": "jhon@yopmail.com",
	    "dob": "25/27/2016",
	    "city": "dhar"
	  }  
	]]);
  }
}
