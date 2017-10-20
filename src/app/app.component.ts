import { Component, NgZone } from '@angular/core';


import { MapsAPILoader } from '@agm/core';
import { } from 'googlemaps';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(
        private mapsAPILoader: MapsAPILoader,
        private ngZone: NgZone,
    ) { }
    title: string = 'My first AGM project';
    lat: number = 51.678418;
    lng: number = 7.809007;
    zoom: number = 8;


    mapClicked($event) {
        var totalMarker: number = this.markers.length;
        // console.log(String.fromCharCode(65 + totalMarker));
        var nextLabel: string = String.fromCharCode(65 + totalMarker)

        console.log(this.markers.length);
        this.markers.push({
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            label: nextLabel
        })
    }

    clickedMarker(label: string, index: number) {
        console.log(`clicked the marker: ${label}`)
    }
    // clickedCircle($event) {
    //     console.log($event);
    // }

    markers: marker[] = [
        {
            lat: 51.673858,
            lng: 7.815982,
            label: 'A',
            draggable: true
        },
        {
            lat: 51.373858,
            lng: 7.215982,
            label: 'B',
            draggable: false
        },
        {
            lat: 51.723858,
            lng: 7.895982,
            label: 'C',
            draggable: true
        }
    ]
}

// just an interface for type safety.
interface marker {
    lat: number;
    lng: number;
    label?: string;
    draggable?: boolean;
}

