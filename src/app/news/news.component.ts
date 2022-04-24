import { Component, OnInit } from '@angular/core';
// import * as xml2js from 'xml2js';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  RssData: any;
  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit() {
  }

  getDataDiff(e: any) {
    console.log(e)
  }

}