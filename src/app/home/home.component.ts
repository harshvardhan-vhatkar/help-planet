import { Component } from '@angular/core';
import { Organisations } from '../Organisations';
import { OrganisationsService } from '../organisations.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  mail:string="";



  flag:boolean=false;

  orgData: Organisations[]=[];

  constructor(private organisationsService: OrganisationsService){}
  dispOrg(){
    this.orgData=this.organisationsService.readOrgArr();
    this.flag=true;
  }

  hideOrg(){
    this.flag=false;
  }

  strFontSize:string="20";

  nData:number=16;

  currDate:Date= new Date();
}
