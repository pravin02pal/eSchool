import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HomeService {

  constructor(private http: Http) {}

  getData() {
    return alasql('SELECT * FROM student');
  }

}
