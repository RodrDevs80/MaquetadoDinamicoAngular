import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
@Component({
  selector: 'app-skills-hs',
  templateUrl: './skills-hs.component.html',
  styleUrls: ['./skills-hs.component.css']
})
export class SkillsHSComponent implements OnInit {

  habilidadesList:any;
  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data=>{
      console.log(data);
     this.habilidadesList=data.skills;
    })
  }

}
