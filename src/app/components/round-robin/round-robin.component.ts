import { Component, Input, OnInit } from '@angular/core';
import { Division } from 'src/models/Division';
import { CommonFunctions } from 'src/shared/commonFunctions';

@Component({
  selector: 'app-round-robin',
  templateUrl: './round-robin.component.html',
  styleUrls: ['./round-robin.component.scss'],
})
export class RoundRobinComponent implements OnInit {
  @Input() divisions: Division[] = [];

  constructor(public commonFunctions: CommonFunctions) { }

  ngOnInit() {
  }

}
