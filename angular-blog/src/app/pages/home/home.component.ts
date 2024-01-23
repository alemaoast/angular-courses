import { Component, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: Item[] = [];

  ngOnInit(): void {
    this.getDataFake();
  }

  getDataFake(): void {
    this.data = dataFake.map(value => {
      const item: Item = {
        Id: value.id,
        PhotoCover: value.photoCover,
        Title: value.title,
        Description: value.description
      };
      return item;
    })
  }

}

type Item = {
  Id: number,
  PhotoCover?: string,
  Title?: string,
  Description?: string
};
