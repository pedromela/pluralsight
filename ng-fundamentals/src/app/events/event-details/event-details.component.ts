import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IEvent } from "../shared/event.model";
import { EventService } from "../shared/event.service";

@Component({
    selector: 'event-details',
    templateUrl: './event-details.component.html',
    styleUrls: ['./event-details.component.css'] 
})
export class EventDetailsComponent {
    event: IEvent
    constructor(private eventService: EventService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    }
}