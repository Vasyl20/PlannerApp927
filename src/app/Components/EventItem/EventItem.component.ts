import { FormStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { EventModel } from '../models/event.models';

@Component({
  selector: 'EventItem',
  templateUrl: './EventItem.component.html',
  styleUrls: ['./EventItem.component.css']
})
export class EventItemComponent implements OnInit {

  constructor() { }

   @Input() myEvent!: EventModel;
   isPriority: boolean = false;
   isPriorityEye: boolean = false;
   
  ngOnInit() {
  }

  changePriority():void {
     this.isPriority = !this.isPriority;
  }

  changePriorityEye():void {
    this.isPriorityEye = !this.isPriorityEye;
  }

}
