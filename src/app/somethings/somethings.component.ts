import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-somethings',
  templateUrl: './somethings.component.html',
  styleUrls: ['./somethings.component.scss'],
})
export class SomethingsComponent implements OnInit {
  public name = 'Nguyễn Đại'
  constructor() {}

  ngOnInit() {}
}
