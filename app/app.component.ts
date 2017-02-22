
import {DemoService} from './demo.service';
import {Component,Pipe} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {HomeComponent} from "./home";
import {aboutComponent} from './about'
import {RouteConfig,  ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {addPost} from "./addpost";


@Component({
  selector: 'demo-app',
  providers: [ROUTER_PROVIDERS],
 templateUrl: `app/appviews/main.html`,
 styleUrls: [`app/appviews/main.css`],
  directives: [ROUTER_DIRECTIVES, addPost]
})
@RouteConfig([
  {path: '/',        component: HomeComponent, as: 'Home'},
  {
    path: '/about',
    name: 'About',
    component: aboutComponent,

  }
])


export class AppComponent {


  public posts;
  public comment;
  public books;
  public movies;
  public call_post;
  public del;
  public cat;

constructor(private _demoService: DemoService) { }

  ngOnInit() {


        this.getPost();
        this.getCategory();


  }


  getPost() {
    this._demoService.getPost().subscribe(
      // the first argument is a function which runs on success
      data => { this.posts = data},
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading ')
    );
  }

  getCategory() {
    this._demoService.getCategory().subscribe(
      // the first argument is a function which runs on success
      data => { this.cat = data},
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading ')
    );
  }
  clicked(_id){
      this._demoService.clicked(_id);
  }


}
