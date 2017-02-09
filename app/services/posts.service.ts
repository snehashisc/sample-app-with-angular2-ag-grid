import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class PostsService {
    constructor(private http: Http){
        console.log('PostsService Initialized...');
    }

    getPosts(){
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
            .map(res => res.json());
    }
    
    getDownloadData(value: Observable<Object[]>) {
  return Observable.create(observer => {

        let xhr = new XMLHttpRequest();

        xhr.open('GET', `https://jsonplaceholder.typicode.com/posts`);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.responseType='arraybuffer';

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {

                    var contentType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
                    var blob = new Blob([xhr.response], { type: contentType });
                    observer.next(blob);
                    observer.complete();
                } else {
                    observer.error(xhr.response);
                }
            }
        }
        xhr.send();

    });

}

}