import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {DemoService} from './demo.service';

@Component({
  selector: 'add-post',
  template: `
  <form (ngSubmit)="doPost()">

   Title

   <input type="text" name="call_post" id="username" [(ngModel)] ="call_post" >



      <br>


       Category:
       <input type="text" name="category" [(ngModel)] ="category" >




        Comments:

     <textarea  [(ngModel)] ="comment"> </textarea><br>



  <button type="submit" class="btn btn-primary">Register</button>

  </form>`,
})

export class addPost{

  posts:string;


 public call_post;
public comment;
public category;





  constructor(  private _demoService: DemoService) {
    // Synchronous validators are passed in as the second




  }


    doPost() {

      this._demoService.post(this.comment, this.call_post, this.category);

    }



}
