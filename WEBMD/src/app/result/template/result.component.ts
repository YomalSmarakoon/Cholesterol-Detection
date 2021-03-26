import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TutorialService } from '../../services/tutorial.service';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  output: any;


  constructor(private services: TutorialService, private router: Router) { 
  }

  ngOnInit(): void {
  }

  content = this.services.getAll()
  .subscribe(
    response => {
      if(response)
        this.output = response;
        console.log(this.output);
    },
    error => {
      console.log(error);
    }
  )

}
