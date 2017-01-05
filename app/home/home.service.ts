import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HomeService {

  constructor(private http: Http) {}

  createSchema() {
    alasql("CREATE TABLE student (name string, email string, dob string, city string)");
  }

  insertData() {
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

  getData() {
    return alasql('SELECT * FROM student');
  }

}
