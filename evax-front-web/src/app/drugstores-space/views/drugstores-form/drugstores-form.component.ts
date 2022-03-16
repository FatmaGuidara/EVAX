import { Component, OnInit } from '@angular/core';
import { DrugstoreFormService } from '../../controllers/drugstore-form.service';
import { Drugstore } from '../../models/Drugstore.model';

@Component({
  selector: 'app-drugstores-form',
  templateUrl: './drugstores-form.component.html',
  styleUrls: ['./drugstores-form.component.css']
})
export class DrugstoresFormComponent implements OnInit {
  drugstore: Drugstore = {
    drugstoreName: '',
    state: '',
    drugstorePhone: 0,
    category: '',
    drugstoreAddress: '',
    cin: 0,
    firstName: '',
    lastName: '',
    pharmacistPhone: 0,
    email: '',
    fax: 0
  }
  constructor(private drugstoreFormService : DrugstoreFormService) { }
  ngOnInit(): void {
  }

  addDrugstore(){
    console.log('a');
    this.drugstoreFormService.createDrugstore(this.drugstore);
    console.log('b');
    this.clearState();
  }

  clearState(){
    this.drugstore = {
      drugstoreName: '',
      state: '',
      drugstorePhone: 0,
      category: '',
      drugstoreAddress: '',
      cin: 0,
      firstName: '',
      lastName: '',
      pharmacistPhone: 0,
      email: '',
      fax: 0
    }
  }

}
