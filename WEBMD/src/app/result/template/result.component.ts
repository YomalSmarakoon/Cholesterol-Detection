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
  memo:any;

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
        if(this.output.pred == "the patient has NORMAL levels of cholesterol"){
          this.message = "Tips for a Healthy Life";

           this.suggestion = [{name:"Eat vegitable salads",image:"salad.jfif"}, {name:"Add carrots to your daily meal" ,image:"carrot.jfif"},{name:"Eat karapincha to burn oil",image:"karapincha.jfif"}];
           this.exercise = [{name: "Walk at least 1km", image:"walk.jfif"},{name: "Run at least 30 minutes per day", image:"run.jfif"},{name: "Do 10 pushups per day", image:"pushups.jfif"}]

           this.memo = "If you are not satisfied about the result please visit doctor!!!";

           console.log(this.suggestion)

        }else if(this.output.pred == "the patient has ABOVE NORMAL levels of cholesterol"){
          this.message = "Tips to Lower Cholesterol";

          this.suggestion = [{name:"Avoid Oily Foods",image:"oilfood.jfif"}, {name:"Avoid Starchy Foods" ,image:"starchyfood.jfif"},{name:"Add fruits to daily meals",image:"goodfood.jfif"}];
          this.exercise = [{name: "Go for a Jog daily", image:"jogging.jpg"},{name: "Avoid Smoking", image:"smoking.jpg"},{name: "Do some Yoga", image:"yoga.jpg"}]

          this.memo = "If you are not satisfied about the result please visit doctor!!!";

        }else if (this.output.pred == "the patient has WELL ABOVE NORMAL levels of cholesterol") {
          this.message = "Tips to lower High Cholesterol";

          this.suggestion = [{ name: "Avoid Drugs", image: "drugs.png" }, { name: "Eat karapincha sambal", image: "sambola.jfif" }, { name: "Eat home made meals", image: "homemade.jfif" }];
          this.exercise = [{ name: "Workout on Gym", image: "gym.jpg" }, { name: "Bike to work", image: "bike.jpg" }, { name: "Go for a swim", image: "swimming.jpg" }]

          this.memo = "If you are not satisfied with the result please visit a Doctor!!!";
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

  onSubmit(){
    this.services.delete()
    .subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
    alert("Details Cleared");
  }

}
