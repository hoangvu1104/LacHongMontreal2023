import { Component, OnInit } from '@angular/core';
import { StaticVariable } from 'src/shared/staticVariable';

@Component({
  selector: 'app-rules-info',
  templateUrl: './rules-info.page.html',
  styleUrls: ['./rules-info.page.scss'],
})
export class RulesInfoPage implements OnInit {
  imagePath = StaticVariable.ImagesPath + 'Logo.JPG';
  slideOpts = {
    slidesPerView: 1.1,
    spaceBetween: 2,
    loop: true,
    effect: 'flip',
    centeredSlides: true
  }
  constructor() { }

  ngOnInit() {
  }

}
