import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPlayerCommandBarComponent } from './components/video-player-command-bar/video-player-command-bar.component';
import { VideoPlayerListComponent } from './components/video-player-list/video-player-list.component';
import { VideoPlayerRoutingModule } from './video-player-routing.module';
import { ListComponent } from './pages/list/list.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { videoPlayerReducer } from './state/video-player.reducers';
import { EffectsModule } from '@ngrx/effects';
import { VideoPlayerEffects } from './state/video-player.effects';
import { HttpClientModule } from '@angular/common/http';
import {MatSortModule} from '@angular/material/sort';
import { videoPlayerHistoricalReducer } from '../video-player-historical/state/video-player-historical.reducers';
import { VideoPlayerHistoricalEffects } from '../video-player-historical/state/video-player-historical.effects';

@NgModule({
  declarations: [
    VideoPlayerListComponent,
    VideoPlayerCommandBarComponent,
    ListComponent
  ],
  imports: [
    FormsModule,
    MatSortModule,
    CommonModule,
    VideoPlayerRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    StoreModule.forFeature('videoPlayerState', videoPlayerReducer),
    EffectsModule.forFeature([VideoPlayerEffects]),
    StoreModule.forFeature('videoPlayerHistoricalState', videoPlayerHistoricalReducer),
        EffectsModule.forFeature([VideoPlayerHistoricalEffects])
  ]
})
export class VideoPlayerModule { }
