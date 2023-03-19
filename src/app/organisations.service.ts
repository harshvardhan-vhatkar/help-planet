import { Injectable } from '@angular/core';
import { Organisations } from './Organisations';

@Injectable({
  providedIn: 'root'
})
export class OrganisationsService {

  constructor() { }


  orgArray: Organisations[]=[
    {orgName:"350.org", orgDescription:"A global grassroots movement to end the use of fossil fuels and build a just, sustainable future for all. Organizes campaigns, demonstrations, and direct actions to pressure governments and corporations to take action on climate change."},
    {orgName:"Climate Reality Project", orgDescription:" A nonprofit organization founded by former Vice President Al Gore to mobilize action on climate change. Offers training and education programs for individuals and organizations to become climate leaders and advocates."},
    {orgName:"Project Drawdown",orgDescription:"A nonprofit organization dedicated to identifying and promoting the most effective solutions to reverse global warming.  Conducts comprehensive research on climate solutions, evaluating their potential impact and feasibility."}
  ]

  readOrgArr(){
    return this.orgArray;
  }
}
