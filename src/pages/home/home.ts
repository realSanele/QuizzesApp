import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  category: number;
  maxCategory = 3;
  maxQuestion = 15;
  question : number;
  userTotal: number;

  //
  relationship: string;
  year: string;
  num_nations: string;
  women_first_won: string;
  most_goal_record: string;
  rugby_first_wCup: string;
  two_countries: string;
  saFirstWon: string;
  africanHost: string;
  rugbyBestWon: string;
  cricketHost2019: string;
  cricketPlayers: string;
  decisionsMaker: string;
  saAndZim: string;
  num_innings:string;

  answersList: string[] = ['Brazil','1930','24','USA','Just Fontaine','1987','True', '1995', 'South Africa','New Zealand','True','Eleven','Umpire', '2003','Four'];
  

  constructor(public navCtrl: NavController) {
    this.category = 1;
    this.question = 1;
    this.userTotal = 0;
  }

  next(){
    this.checkAnsw();
    if(this.question < this.maxQuestion){
      this.question +=1;
      if(this.question == 6 || this.question == 11){
        this.category += 1;
      }

      
    }else if(this.question == this.maxQuestion){
      this.category = 4;
    }
    
  }

  checkAnsw(){
    if(this.question == 1){
      if(this.relationship == this.answersList[this.question-1]){
        this.userTotal +=1;
      }
    }else if(this.question == 2){
      if(this.year == this.answersList[this.question-1]){
        this.userTotal +=1;
      }
    }else if(this.question == 3){
      if(this.num_nations == this.answersList[this.question-1]){
        this.userTotal +=1;
      }
    }else if(this.question == 4){
      if(this.women_first_won == this.answersList[this.question-1]){
        this.userTotal +=1;
      }
    }else if(this.question == 5){
      if(this.most_goal_record == this.answersList[this.question-1]){
        this.userTotal +=1;
      }
    }else if(this.question == 6){
      if(this.rugby_first_wCup == this.answersList[this.question-1]){
        this.userTotal +=1;
      }
    }else if(this.question == 7){
      if(this.two_countries == this.answersList[this.question-1]){
        this.userTotal +=1;
      }
    }else if(this.question == 8){
      if(this.saFirstWon == this.answersList[this.question-1]){
        this.userTotal +=1;
      }
    }else if(this.question == 9){
      if(this.africanHost == this.answersList[this.question-1]){
        this.userTotal +=1;
      }
    }else if(this.question == 10){
      if(this.rugbyBestWon == this.answersList[this.question-1]){
        this.userTotal +=1;
      }
    }else if(this.question == 11){
      if(this.cricketHost2019 == this.answersList[this.question-1]){
        this.userTotal +=1;
      }
    }else if(this.question == 12){
      if(this.cricketPlayers == this.answersList[this.question-1]){
        this.userTotal +=1;
      }
    }else if(this.question == 13){
      if(this.decisionsMaker == this.answersList[this.question-1]){
        this.userTotal +=1;
      }
    }else if(this.question == 14){
      if(this.saAndZim == this.answersList[this.question-1]){
        this.userTotal +=1;
      }
    }else if(this.question == 15){
      if(this.num_innings == this.answersList[this.question-1]){
        this.userTotal +=1;
      }
    }
  }

  startAgain(){
    this.question = 1;
    this.category = 1;
    this.userTotal = 0;
  }

}
