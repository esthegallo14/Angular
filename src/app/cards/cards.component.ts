import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  public image?: string;
  public Titulo: string = "databinding";
  @Input() dataEntrante: any;
  constructor(){}
  ngOnInit(){
  this.image = "https://pbs.twimg.com/media/Fse5CK9XsBsefNa?format=jpg&name=large"
  }
}
