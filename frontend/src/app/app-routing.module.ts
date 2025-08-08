import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { ListComponent } from './video-player/pages/list/list.component';

const routes: Routes = [
   {
     path: "",
     redirectTo: "login",
     pathMatch: "full",
   },
   {
     path: "login",
     loadChildren: () =>
     import("./auth/auth.module").then((m) => m.AuthModule),

   },
  {
    path: "video-players",
    loadChildren: () =>
      import("./video-player/video-player.module").then((m) => m.VideoPlayerModule),
      canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
