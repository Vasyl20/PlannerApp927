import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/core/events.service';
import { EventModel } from '../models/event.models';

@Component({
  selector: 'ListEvents',
  templateUrl: './ListEvents.component.html',
  styleUrls: ['./ListEvents.component.css']
})
export class ListEventsComponent implements OnInit {

  constructor(private eventsService:EventsService) { }


  eventsList!:EventModel[];

  ngOnInit() {
    this.eventsList = this.eventsService.getEvents();
    console.log("Event list component: ", this.eventsService);
  }

}
