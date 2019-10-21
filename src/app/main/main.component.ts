import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  shouldBeHidden = false;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.getIsHidden().subscribe(status => {
      this.shouldBeHidden = status;
    });
  }

}
