import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $("#mNav").show();
  }

}
