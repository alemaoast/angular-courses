import { Component, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake'

type Item = {
  Id: number,
  PhotoCover?: string,
  Title?: string,
  Description?: string,
  ShowIn?: string[]
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dataBigCard: Item[] = [];
  dataSmallCard: Item[] = [];

  ngOnInit(): void {
    this.getDataFake();
  }

  getDataFake(): void {
    this.dataBigCard = this.filterFakeData("big-card");
    this.dataSmallCard = this.filterFakeData("small-card");
  }

  filterFakeData(showIn: string): Item[] {
    return dataFake.filter(value => value.showIn.find(i => i == showIn)).map(value => {
      const item: Item = {
        Id: value.id,
        PhotoCover: value.photoCover,
        Title: value.title,
        Description: value.description,
        ShowIn: value.showIn
      };
      return item;
    });
  }

}
