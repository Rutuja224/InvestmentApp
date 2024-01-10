import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DbService } from '../db.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  user:any={};
  rate:any=12;
  result:any;
  users:any[]=[];
  day:any;
 
  constructor(private DbService:DbService){}
  ngOnInit(): void {
    
    this.DbService.getdata().subscribe((x)=>this.users=x)
}
  // days(){
  
  //   let d1= new Date(this.user.startdate)
  //   let dm1 = d1.getTime()
  //   let d2= new Date(this.user.enddate)
  //   let dm2 = d2.getTime()
  //   this.day= (1+(dm2-dm1)/(1000*60*60*24));
  //   // console.log(this.day)
  // }
  calculateDays(startdate: string, enddate: string): number {
    let d1 = new Date(startdate);
    let dm1 = d1.getTime();
    let d2 = new Date(enddate);
    let dm2 = d2.getTime();
    return 1 + (dm2 - dm1) / (1000 * 60 * 60 * 24);
  }


  mydata(){
  this.DbService.postdata(this.user).subscribe((x)=>this.ngOnInit())
  this.user={};
 

  }
  

  calculate() {
    if (this.user.amount && this.user.startdate && this.user.enddate ) {

      this.user.result = (((this.user.amount * this.rate * this.calculateDays(this.user.startdate, this.user.enddate)) / 36600) + this.user.amount).toFixed(2);
      
    }

    
      
    }

     calculate1(){
  
      if(this.user.result && this.user.startdate && this.user.enddate ){
        this.user.amount = (this.user.result - ((this.user.result * this.rate * this.calculateDays(this.user.startdate, this.user.enddate)) / 36600)).toFixed(2);
  
      }
      
     }
    
    
  
  
}
    





  


