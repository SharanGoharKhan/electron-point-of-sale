import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, startWith } from 'rxjs/operators';
import { interval, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getStats(name) {
    return interval(5000)
      .pipe(
        startWith(0),
        // tslint:disable-next-line:max-line-length
        switchMap(() => this.http.get('https://www.googleapis.com/youtube/v3/channels?part=statistics,snippet&id=' + name + '&key=AIzaSyD_bCkraxsJcg_E9b1L3-65hsk-_bXBqio')),
        map(res => res)
      );
  }
}
