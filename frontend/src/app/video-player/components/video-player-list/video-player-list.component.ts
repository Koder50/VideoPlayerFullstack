import {Component, EventEmitter, Input, OnInit, Output,OnChanges} from '@angular/core';
import {VideoPlayer} from '../../models/video-player.interface';
import {VideoPlayerHistorical} from '../../../video-player-historical/models/video-player-historical.interface';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatLabel} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {NgModel} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {Store} from '@ngrx/store';
import {AppState} from 'src/app/state/app.state';
import {VideoPlayerActions} from '../../state/video-player.actions';
import {VideoPlayerHistoricalActions} from '../../../video-player-historical/state/video-player-historical.actions';
import {Subscription} from 'rxjs';
import {selectVideoPlayersHistorical} from '../../../video-player-historical/state/video-player-historical.selectors';
import {filter} from 'rxjs/operators';
import {pipe} from 'rxjs';

@Component({
  selector: 'app-video-player-list',
  templateUrl: './video-player-list.component.html',
  styleUrls: ['./video-player-list.component.scss']
})
export class VideoPlayerListComponent implements OnInit {
  @Input() videoPlayers: Array<VideoPlayer> = [];
  @Input() videoPlayersHistorical: Array<VideoPlayerHistorical> = [];
  videoPlayersHistorical$ = this.store.select(selectVideoPlayersHistorical());
  vid: HTMLVideoElement;
  vid2: HTMLVideoElement;
  i: number = 1;
  searchTerm: string="";
  subscription: Subscription=Subscription.EMPTY;
  constructor( private store: Store<AppState>) { }
  ngOnInit(): void {}
  addToVideosHistory(sourceAll: VideoPlayer,source: string,sourceName: string,videoPlayersHistorical: VideoPlayerHistorical[]): void {
      let i=0;
      for(let v of this.videoPlayersHistorical) if(v.urlName==sourceAll.urlName && v.nameAbbr==sourceAll.nameAbbr) i++;
      if(i==0) {
          this.store.dispatch({type: VideoPlayerHistoricalActions.GET_VIDEO_PLAYER_HISTORICAL_LIST});
          this.assignVideoPlayersHistorical();
          if(this.videoPlayersHistorical.length==2) this.deleteVideoPlayersHistoricalElement(i);
          let vP: VideoPlayerHistorical={
              id: sourceAll.id,
              urlName: source,
              nameAbbr: sourceName,
              createdAt: new Date(Date.UTC(new Date().getUTCFullYear(), new Date().getUTCMonth(),new Date().getUTCDate(), new Date().getUTCHours(),new Date().getUTCMinutes(), new Date().getUTCSeconds())).toISOString().replace("T"," "),
              watchedUser: localStorage.getItem('userEmail') ? localStorage.getItem('userEmail') : "nobody",
          }
          this.store.dispatch({type: VideoPlayerHistoricalActions.ADD_VIDEO_PLAYER_HISTORICAL_API, payload: vP});
          this.store.dispatch({type: VideoPlayerHistoricalActions.GET_VIDEO_PLAYER_HISTORICAL_LIST});
          this.assignVideoPlayersHistorical();
      }
    }
    assignVideoPlayersHistorical() {
        this.subscription= this.videoPlayersHistorical$.subscribe((data:Array<VideoPlayerHistorical>) =>{
        this.videoPlayersHistorical = data;
      });
    }
    deleteVideoPlayersHistoricalElement(i: number) {
        for(let j=0; j<this.videoPlayersHistorical.length;j++) {
          if(this.videoPlayersHistorical[j].watchedUser==localStorage.getItem("userEmail")) {
            this.store.dispatch({type: VideoPlayerHistoricalActions.REMOVE_VIDEO_PLAYER_HISTORICAL_API, payload: this.videoPlayersHistorical[j].id});
            this.videoPlayersHistorical=this.videoPlayersHistorical.filter(v=>v.id!=this.videoPlayersHistorical[j].id);
            this.store.dispatch({type: VideoPlayerHistoricalActions.GET_VIDEO_PLAYER_HISTORICAL_LIST});
            j=this.videoPlayersHistorical.length;
            if(i!=0) this.deleteVideoPlayersHistoricalElement(0);
          }
        }
    }
}
