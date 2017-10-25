import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/Http';
import { Observable } from 'rxjs/Rx';

@Injectable()

export class weatherAppService {
    private apiKey: string = '0202655f18f273ec900dd5199063a4b9';
    private domain: string = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=' + this.apiKey;

    constructor(private http: Http) { }

    getWeatherData() {
        return this.http.get(this.domain)
                .map(res => {
                    return res.json();
                }).catch(res => {
                    return Observable.throw(res.json());
                })
    }
}