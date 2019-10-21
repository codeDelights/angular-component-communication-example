import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isHidden = false;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.isHidden.next(this.isHidden);
  }

  hideMain() {
    this.isHidden = !this.isHidden;
    this.commonService.isHidden.next(this.isHidden);
  }

}
