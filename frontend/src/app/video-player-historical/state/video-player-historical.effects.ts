import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, forkJoin } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { VideoPlayerHistorical } from '../models/video-player-historical.interface';
import { VideoPlayerHistoricalService } from '../services/video-player-historical.service';
import { VideoPlayerHistoricalActions } from './video-player-historical.actions';

 
@Injectable()
export class VideoPlayerHistoricalEffects {

  // get list of video players historical in the external API
  // set retrieved video player historical list in the state
  getVideoPlayersHistorical$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(VideoPlayerHistoricalActions.GET_VIDEO_PLAYER_HISTORICAL_LIST),
        mergeMap(() => this.videoPlayerHistoricalService.getVideoPlayersHistorical()
          .pipe(
            map(videoPlayersHistorical=>videoPlayersHistorical.filter(videoPlayerHistorical=>videoPlayerHistorical.watchedUser==localStorage.getItem("userEmail"))),
            map(videoPlayersHistorical => ({ type: VideoPlayerHistoricalActions.SET_VIDEO_PLAYER_HISTORICAL_LIST, videoPlayersHistorical})),
            catchError(() => EMPTY)
          ))
        )
    }, {dispatch: true}
  );
  
  // add video-players-historical in the database
  addVideoPlayerHistorical$ = createEffect(() =>{
    return this.actions$.pipe(
        ofType(VideoPlayerHistoricalActions.ADD_VIDEO_PLAYER_HISTORICAL_API),
        mergeMap((data: {type: string, payload: VideoPlayerHistorical}) => this.videoPlayerHistoricalService.addVideoPlayerHistorical(data.payload)
          .pipe(
            map(videoPlayersHistorical => ({ type: VideoPlayerHistoricalActions.ADD_VIDEO_PLAYER_HISTORICAL_STATE, videoPlayerHistorical: data.payload })),
            tap(() =>  this.router.navigate(["video-players"])),
            catchError(() => EMPTY)
          ))
        )
    }, {dispatch: true})

   modifyVideoPlayerHistorical$ = createEffect(() =>{
    return this.actions$.pipe(
        ofType(VideoPlayerHistoricalActions.MODIFY_VIDEO_PLAYER_HISTORICAL_API),
        mergeMap((data: {type: string, payload: VideoPlayerHistorical}) => this.videoPlayerHistoricalService.updateVideoPlayerHistorical(data.payload.id, data.payload)
          .pipe(
            map(videoPlayersHistorical => ({ type: VideoPlayerHistoricalActions.MODIFY_VIDEO_PLAYER_HISTORICAL_STATE, videoPlayerHistorical: data.payload })),
            tap(() =>  this.router.navigate(["video-players"])),
            catchError(() => EMPTY)
          ))
        )
    }, {dispatch: true})

  // remove video-players in the database
  removeVideoPlayerHistorical$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(VideoPlayerHistoricalActions.REMOVE_VIDEO_PLAYER_HISTORICAL_API),
        mergeMap((data: { payload: string}) => this.videoPlayerHistoricalService.deleteVideoPlayerHistorical(data.payload)
          .pipe(
            map(() => ({ type: VideoPlayerHistoricalActions.REMOVE_VIDEO_PLAYER_HISTORICAL_STATE, videoPlayerHistoricalId: data.payload })),
            catchError(() => EMPTY)
          ))
        )
    }, {dispatch: true}
  );
  // remove all video-players in the database
  removeAllVideoPlayerHistorical$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(VideoPlayerHistoricalActions.REMOVE_ALL_VIDEO_PLAYER_HISTORICAL_API),
        mergeMap((data: {type: string, payload: string[]}) => 
        forkJoin([...data.payload.map((id) => this.videoPlayerHistoricalService.deleteVideoPlayerHistorical(id))])
          .pipe(
            map(() => ({ type: VideoPlayerHistoricalActions.REMOVE_ALL_VIDEO_PLAYER_HISTORICAL_STATE })),
            catchError(() => EMPTY)
          ))
        )
    }, {dispatch: true}
  );
 
  constructor(
    private actions$: Actions,
    private videoPlayerHistoricalService: VideoPlayerHistoricalService,
    private router: Router
  ) {}

}