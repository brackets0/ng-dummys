import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public currentApiResp = new BehaviorSubject<any>({});
  
  constructor(private http: HttpClient) {
    this.getTime()
  }

  sendApiCall(url: any) {
    this.http.get(url.value.url).subscribe(data => this.currentApiResp.next(data));
  }

  getTime() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; 
    let yyyy = today.getFullYear();
    let time = today.getTime();
    let now = `${dd}_${mm}_${yyyy}_${time}`;
    return now;
  }

  save(key = `savedData_${this.getTime()}`) {
    console.log(key)
    //const oldData = JSON.parse(localStorage.getItem(key));
    const oldData = {0: 'https://hub.dummyapis.com/Image?text=Test-1&height=120&width=120', 1: 'https://hub.dummyapis.com/Image?text=Test-2&height=120&width=120', 2: 'https://hub.dummyapis.com/Image?text=Test-3&height=120&width=120', 3: 'https://hub.dummyapis.com/Image?text=Test-4&height=120&width=120', 4: 'https://hub.dummyapis.com/Image?text=Test-5&height=120&width=120', 5: 'https://hub.dummyapis.com/Image?text=Test-6&height=120&width=120', 6: 'https://hub.dummyapis.com/Image?text=Test-7&height=120&width=120', 7: 'https://hub.dummyapis.com/Image?text=Test-8&height=120&width=120', 8: 'https://hub.dummyapis.com/Image?text=Test-9&height=120&width=120', 9: 'https://hub.dummyapis.com/Image?text=Test-10&height=120&width=120'}
    const combiendData = Object.assign(this.currentApiResp.getValue(), oldData);
    console.log(combiendData);
    //localStorage.setItem(key, JSON.stringify(combiendData));
  }
}
