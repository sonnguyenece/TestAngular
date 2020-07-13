import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BlogComponent} from "./blog/blog.component";
import {PageNotFoundComponent} from "./pagenotfound/page-not-found.component";
import {BlogDetailComponent} from "./blog-detail/blog-detail.component";
import {BlogEditComponent} from "./blog-edit/blog-edit.component";


const routes: Routes = [
  {
    path: "blog",
    component: BlogComponent
  }, {
    path: "blog/:id",
    component: BlogDetailComponent
  },{
    path: "blog/edit/:id",
    component: BlogEditComponent
  },
  {
    path: "",
    redirectTo: "blog",
    pathMatch: "full"
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
