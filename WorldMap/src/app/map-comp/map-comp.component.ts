import { Component, OnInit, EventEmitter, Output,} from '@angular/core';
import { MapInfoComponent } from '../map-info/map-info.component';

@Component({
  selector: 'app-map-comp',
  standalone: true,
  imports: [MapInfoComponent],
  templateUrl: './map-comp.component.html',
  styleUrl: './map-comp.component.css'
})

//Part F
export class MapCompComponent implements OnInit{
  @Output() onSvgClick = new EventEmitter<string>();

  countryCode: string = '';

  
  constructor () {}

  ngOnInit() {}

  setInfo(event: MouseEvent) {
    const target = event.target as SVGElement;
    if(target.tagName.toLowerCase()==='path'){
      this.countryCode = target.id;
      this.onSvgClick.emit(this.countryCode);
    }
  }
    

}
