import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'routing-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  public pageNumber: number;

  constructor(private routeParams: ActivatedRoute) {}

  ngOnInit() {
    this.routeParams.paramMap.subscribe(params => {
      this.pageNumber = Number(params.get('id'));
    });
  }
}
