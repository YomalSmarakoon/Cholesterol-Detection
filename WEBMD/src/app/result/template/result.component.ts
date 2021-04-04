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
  result:any;
  message: any;
  image: any;
  suggestion = [{}];
  exercise = [{}];

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
        if(this.output.pred == "the patient has NORMAL levels of cholesterol [1]"){
          this.message = "Make Your Life Healthy";

           this.suggestion = [{name:"Eat vegitable salads",image:"salad.jfif"}, {name:"Add carrots to your daily meal" ,image:"carrot.jfif"},{name:"Eat karapincha to burn oil",image:"karapincha.jfif"}];
           this.exercise = [{name: "Walk at least 1km", image:"walk.jfif"},{name: "Run at least 30 minutes per day", image:"run.jfif"},{name: "Do 10 pushups per day", image:"pushups.jfif"}]

           console.log(this.suggestion)

        }
    },
    error => {
      console.log(error);
    }
  )
  habits = this.services.gethabits()
  .subscribe(
    response => {
      if(response)
      this.result = response;
      console.log(this.result);
    },
    error => {
      console.log(error);
    }
  )

}
