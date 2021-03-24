import { Component, OnInit } from '@angular/core';
import {TutorialService } from '../../services/tutorial.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor(private services: TutorialService) { 
    
  }

  ngOnInit(): void {
    this.services.getAll()
    .subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }

}
