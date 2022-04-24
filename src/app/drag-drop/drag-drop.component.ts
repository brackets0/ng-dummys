import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent implements OnInit {
  Movies = [
    'Blade Runner',
    'Cool Hand Luke',
    'Heat',
    'Juice',
    'The Far Side of the World',
    'Morituri',
    'Napoleon Dynamite',
    'Pulp Fiction'
  ];
  constructor() { }

  ngOnInit() {
  }
  drop(event: CdkDragDrop<string[]>) {
    console.log('event', event);
    console.log(event.previousIndex, event.currentIndex);
  }
}