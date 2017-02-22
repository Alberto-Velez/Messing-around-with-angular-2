import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {DemoService} from './demo.service';

@Component({
  selector: 'addpost',
  template: `
  <form   (ngSubmit)="doPost()">

 <div class="form-group">
   <label for="call_post">Title</label>

   <input type="text" name="call_post" id="username" >

   </div>

      <br>
        <div class="form-group">

       <label for="category">Category:</label>
       <input type="text" name="category" >

        </div>

        <div class="form-group">
             <label class="control-label" for="password">Password</label>
             <input type="text" name="password"  >

                        </div>


        <label for="comment">Comments:</label>

     <textarea ngControl="comment" [(ngModel)] ="comment"> </textarea><br>
</div>

<div class="form-group">
<button type="submit" class="btn btn-primary">Register</button>
</div>
  </form>`,
})

export class addnewPost{


    posts:string;


  call_post:string;
  comment:string;
  category:string;





    constructor(  private _demoService: DemoService) {
      // Synchronous validators are passed in as the second




    }


      doPost() {

        this._demoService.post(this.comment, this.call_post, this.category);

      }




}
