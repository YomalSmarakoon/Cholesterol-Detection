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
  suggestion: any[] = [{}];
  exercise: any[] = [{}];

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
          this.message = "Tips for a Healthy Life";

           this.suggestion = [{name:"Eat vegitable salads",image:"salad.jfif"}, {name:"Add carrots to your daily meal" ,image:"carrot.jfif"},{name:"Eat karapincha to burn oil",image:"karapincha.jfif"}];
           this.exercise = [{name: "Walk at least 1km", image:"walk.jfif"},{name: "Run at least 30 minutes per day", image:"run.jfif"},{name: "Do 10 pushups per day", image:"pushups.jfif"}]

           console.log(this.suggestion)

        }else if(this.output.pred == "the patient has ABOVE NORMAL levels of cholesterol [2]"){
          this.message = "Tips to Lower Cholesterol";

          this.suggestion = [{name:"Avoid Oily Foods",image:"oilfood.jfif"}, {name:"Have a diet for Starchy Foods" ,image:"starchyfood.jfif"},{name:"Include these to your daily meal",image:"goodfood.jfif"}];
          this.exercise = [{name: "Go for a Jog daily", image:"jogging.jpg"},{name: "Avoid Smoking", image:"smoking.jpg"},{name: "Do some Yoga", image:"yoga.jpg"}]

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
