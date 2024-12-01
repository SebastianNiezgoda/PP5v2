import { Component } from '@angular/core';
import { Supplier } from '../../models/supplier';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-form',
  standalone:false,
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.scss'
})
export class CustomerFormComponent {

  testVaiable:Supplier=new Supplier('sasas')

}
