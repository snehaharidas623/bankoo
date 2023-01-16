import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {
  acno=''
  transaction:any
constructor(private ds:DataService){
  this.acno=this.ds.curentacno
  this.transaction=this.ds.transaction(this.acno)

}
}
