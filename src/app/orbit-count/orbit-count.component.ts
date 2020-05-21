import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-count',
  templateUrl: './orbit-count.component.html',
  styleUrls: ['./orbit-count.component.css']
})
export class OrbitCountComponent implements OnInit {
  @Input() satellites: Satellite[];
  
  constructor() { }

  ngOnInit() {
  }

  getCount(row: string): number {
    let debris: Satellite[] = this.satellites.filter(hits => hits['type'].toLowerCase() === row.toLowerCase());
    return debris.length;
  }

}
