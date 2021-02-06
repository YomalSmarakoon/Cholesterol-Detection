import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-user-detail-form',
  templateUrl: './user-detail-form.component.html',
  styleUrls: ['./user-detail-form.component.scss']
})
export class UserDetailFormComponent implements OnInit{
  toppings = new FormControl();
  eatings = new FormControl();

  toppingList: string[] = ['Daily', 'Once a week', 'Once a month', 'Never', 'Other'];

  eatingList: string[] = ['Fast food', 'Home made food', 'Junk food', 'Street food', 'Sweets'];

  constructor(){}

  ngOnInit(): void {
  }

}
