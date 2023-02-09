import { Component } from '@angular/core';
import { AlticeService } from './services/altice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Altice Recruitment';
  result = 0;
  choosenNumber = 0;
  inputNumber = 0;
  
  constructor(private service: AlticeService){

  }

   getInfo(n:number):number{
      this.service.getAlticciNumber(n).subscribe((n: number)=>{
        this.result = n;
      })
      this.choosenNumber = n;
      return this.result;
      
  }
}
