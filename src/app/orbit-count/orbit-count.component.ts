import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-count',
  templateUrl: './orbit-count.component.html',
  styleUrls: ['./orbit-count.component.css']
})
export class OrbitCountComponent implements OnInit {
  @Input() satellites: Satellite[];
  
  // types: string[] = ['Space Debris','Communication','Probe','Positioning','Space Station','Telescope'];
  types: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  getCount(row: string): number {
    let debris: Satellite[] = this.satellites.filter(hits => hits['type'].toLowerCase() === row.toLowerCase());
    return debris.length;
  }

  getTypes(): boolean {
    for(let i = 0; i < this.satellites.length; i++) {
      if(!this.types.includes(this.satellites[i]['type'])) {
        this.types.push(this.satellites[i]['type']);
      }
    }
    console.log(this.types);
    return true;
  }

}
