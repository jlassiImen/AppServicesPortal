import { Style, Icon } from 'ol/style';
import { Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MeteoService } from '../services/meteoServices/meteo.service';
import * as places from 'places.js';
import { environment } from '../../environments/environment';

declare var ol: any;

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css']
})
export class TransportComponent implements OnInit {
  @Input() q: string;
  @ViewChild('fromAdrress') qElementRef: ElementRef;
  @ViewChild('destinationAdrress') qElementRef2: ElementRef;

  private algoliaFromAddressConfig: any;
  private algoliaToAddressConfig: any;
  fromAddress = ' ';

  map: any;


  rideForm: FormGroup;


  usePosition = false;


  constructor(public router: Router, private fb: FormBuilder, public meteo: MeteoService) { }

  ngOnInit() {
  
    this.algoliaFromAddressConfig = places({
      apiKey: environment.autoCompleteToken,
      appId: environment.autoCompleteAppId,
      indexName: 'instant_search',
      routing: true,
      container: this.qElementRef.nativeElement,
    });

    this.algoliaToAddressConfig = places({
      apiKey: environment.autoCompleteToken,
      appId: environment.autoCompleteAppId,
      indexName: 'instant_search',
      routing: true,
      container: this.qElementRef2.nativeElement,
    });

    this.createRideForms();
    this.meteo.detectLocation(position => this.initMap(position));
  }

  initMap(position) {
    console.log(position.longitude + ' , ' + position.latitude);
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([position.longitude, position.latitude]),
        zoom: 20
      })
    });

    const layer = new ol.layer.Vector({
      source: new ol.source.Vector({
          features: [
              new ol.Feature({
                style: new ol.style.Style({
                  image: new ol.style.Icon({
                  anchor: [0.5, 0.5],
                  anchorXUnits: "fraction",
                  anchorYUnits: "fraction",
                  src: "https://upload.wikimedia.org/wikipedia/commons/e/ec/RedDot.svg"
                  })
                  }),
                  geometry: new ol.geom.Point(ol.proj.fromLonLat([+(position.longitude), +(position.latitude)] ))
              })
          ]
      }),
      zIndex: 999
  });
  this.map.addLayer(layer);


  }
  detectUsePosition(e) {
    const marked = e.target.checked;
    console.log('xxxxxxxx   ' + marked);
    if (marked) {
      this.fromAddress = 'cccccccccccc';
    }
    else {
      this.fromAddress = '';
    }
  }
  createRideForms() {
    this.rideForm = this.fb.group({
      fromAddress: new FormControl('', Validators.compose([
        Validators.required
      ])),
      toAddress: new FormControl('', Validators.compose([
        Validators.required
      ]))
    })
  }

  onSubmitRideForm(value) {
  
  }
}
