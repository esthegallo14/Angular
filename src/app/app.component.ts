import { Component, OnInit, Input } from '@angular/core';

interface Tarjeta{
  titulo: string;
  subtitulo: string;
  image: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Aplicacion-web';
  public ArregloTarjetas: Tarjeta[]=[]
  ngOnInit(): void {
    
  this.ArregloTarjetas =[
    {titulo: "Video 1", subtitulo: "Subtitulo Video 1", image:"https://media.istockphoto.com/id/511061090/photo/business-office-building-in-london-england.jpg?s=612x612&w=0&k=20&c=nYAn4JKoCqO1hMTjZiND1PAIWoABuy1BwH1MhaEoG6w="},
    {titulo: "Video 2", subtitulo: "Subtitulo Video 2", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/800px-Empire_State_Building_%28aerial_view%29.jpg"},
    {titulo: "Video 3", subtitulo: "Subtitulo Video 3", image:"https://cdn.britannica.com/73/114973-050-2DC46083/Midtown-Manhattan-Empire-State-Building-New-York.jpg"}
   ]  
  }
}
