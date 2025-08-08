import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { CommandBarActions } from '../../enums/command-bar-actions.enum';
import { VideoPlayer } from '../../models/video-player.interface';
import { VideoPlayerHistorical } from '../../../video-player-historical/models/video-player-historical.interface';
import { VideoPlayerActions } from '../../state/video-player.actions';
import { VideoPlayerHistoricalActions } from '../../../video-player-historical/state/video-player-historical.actions';
import { selectVideoPlayers } from '../../state/video-player.selectors';
import { selectVideoPlayersHistorical } from '../../../video-player-historical/state/video-player-historical.selectors';
import { Subscription } from 'rxjs';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  // sample data of video player
  videoPlayers: Array<VideoPlayer> = [];
  videoPlayers$ = this.store.select(selectVideoPlayers());
  videoPlayersHistorical: Array<VideoPlayerHistorical> = [];
  videoPlayersHistorical$ = this.store.select(selectVideoPlayersHistorical());
  subscription: Subscription=Subscription.EMPTY;

  constructor(
    private router: Router,
    private store: Store<AppState>
    ) { }

  ngOnInit(): void {
    this.store.dispatch({type: VideoPlayerActions.GET_VIDEO_PLAYER_LIST});
    this.assignVideoPlayers();
    this.store.dispatch({type: VideoPlayerHistoricalActions.GET_VIDEO_PLAYER_HISTORICAL_LIST});
    this.assignVideoPlayersHistorical();
  }
  ngOnDestroy() {
        this.subscription.unsubscribe();
  }
  assignVideoPlayers() {
      this.subscription= this.videoPlayers$.subscribe((data:Array<VideoPlayer>) =>{
      this.videoPlayers = data;
    });
  }
  assignVideoPlayersHistorical() {
        this.subscription= this.videoPlayersHistorical$.subscribe((data:Array<VideoPlayerHistorical>) =>{
        this.videoPlayersHistorical = data;
      });
    }
  executeCommandBarAction(action: CommandBarActions) {
    switch(action) {
      case CommandBarActions.DeleteHistory: {
        this.store.dispatch({type: VideoPlayerHistoricalActions.GET_VIDEO_PLAYER_HISTORICAL_LIST});
        this.assignVideoPlayersHistorical();
        this.deleteVideoPlayersHistoricalElement(1);
        return;
      }
      case CommandBarActions.Logout: {
            localStorage.removeItem('token');
            localStorage.removeItem('userEmail');
            this.router.navigate(['']);
            return;
        }
    default: ""
    }
  }
  deleteVideoPlayersHistoricalElement(i: number) {
    for(let j=0; j<this.videoPlayersHistorical.length;j++) {
      if(this.videoPlayersHistorical[j].watchedUser==localStorage.getItem("userEmail")) {
        this.store.dispatch({type: VideoPlayerHistoricalActions.REMOVE_VIDEO_PLAYER_HISTORICAL_API, payload: this.videoPlayersHistorical[j].id});
        this.videoPlayersHistorical=this.videoPlayersHistorical.filter(v=>v.id!=this.videoPlayersHistorical[j].id);
        this.store.dispatch({type: VideoPlayerHistoricalActions.GET_VIDEO_PLAYER_HISTORICAL_LIST});
        j=this.videoPlayersHistorical.length;
        if(this.videoPlayersHistorical.length!=0) this.deleteVideoPlayersHistoricalElement(1);
      }
    }
  }
}
