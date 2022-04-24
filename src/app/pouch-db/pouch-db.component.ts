import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import PouchDB from 'pouchdb';

@Component({
  selector: 'app-pouch-db',
  templateUrl: './pouch-db.component.html',
  styleUrls: ['./pouch-db.component.css']
})
export class PouchDBComponent implements OnInit {
  pouchdb: any;
  constructor(private formBuilder: FormBuilder) {
    this.pouchdb = new PouchDB("pouchform");
  }

  ngOnInit() {
  }

}