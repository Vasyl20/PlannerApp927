import { Injectable } from '@angular/core';
import { EventModel } from '../Components/models/event.models';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private events:EventModel[] = [
    new EventModel("Andrii Birthday", "...", "01/01/2021" , "https://repository-images.githubusercontent.com/24195339/87018c00-694b-11e9-8b5f-c34826306d36"),
    new EventModel("Demo project", "...",  "26/08/2021", "https://pbs.twimg.com/profile_images/378800000510187783/97a55ed8628f62210ef2991dac1e09dd_400x400.jpeg"),
    new EventModel("Word with homework","...",  "23/11/2021", "https://previews.123rf.com/images/enterline/enterline1707/enterline170700327/82358188-the-word-homework-concept-and-theme-painted-in-black-ink-on-a-watercolor-wash-background-.jpg"),
    new EventModel("Study in IT","...",  "11/05/2021", "https://tickikids.ams3.cdn.digitaloceanspaces.com/z1.cache/gallery/organizations/3640/icon_social_601ba940d30202.15333795.jpg")
    
  ]
  
  getEvents():EventModel[]{
    return this.events;
  }

constructor() { }

}
