import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, forkJoin } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { VideoPlayer } from '../models/video-player.interface';
import { VideoPlayerService } from '../services/video-player.service';
import { VideoPlayerActions } from './video-player.actions';

 
@Injectable()
export class VideoPlayerEffects {

  // get list of video players in the external API
  // set retrieved video player list in the state
  getVideoPlayers$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(VideoPlayerActions.GET_VIDEO_PLAYER_LIST),
        mergeMap(() => this.videoPlayerService.getVideoPlayers()
          .pipe(
            map(videoPlayers => ({ type: VideoPlayerActions.SET_VIDEO_PLAYER_LIST, videoPlayers})),
            catchError(() => EMPTY)
          ))
        )
    }, {dispatch: true}
  );
  
  // add video-players in the database
  addVideoPlayer$ = createEffect(() =>{
    return this.actions$.pipe(
        ofType(VideoPlayerActions.ADD_VIDEO_PLAYER_API),
        mergeMap((data: {type: string, payload: VideoPlayer}) => this.videoPlayerService.addVideoPlayer(data.payload)
          .pipe(
            map(videoPlayers => ({ type: VideoPlayerActions.ADD_VIDEO_PLAYER_STATE, videoPlayer: data.payload })),
            tap(() =>  this.router.navigate(["video-players"])),
            catchError(() => EMPTY)
          ))
        )
    }, {dispatch: true})

   modifyVideoPlayer$ = createEffect(() =>{
    return this.actions$.pipe(
        ofType(VideoPlayerActions.MODIFY_VIDEO_PLAYER_API),
        mergeMap((data: {type: string, payload: VideoPlayer}) => this.videoPlayerService.updateVideoPlayer(data.payload.id, data.payload)
          .pipe(
            map(videoPlayers => ({ type: VideoPlayerActions.MODIFY_VIDEO_PLAYER_STATE, videoPlayer: data.payload })),
            tap(() =>  this.router.navigate(["video-players"])),
            catchError(() => EMPTY)
          ))
        )
    }, {dispatch: true})

  // remove video-players in the database
  removeVideoPlayer$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(VideoPlayerActions.REMOVE_VIDEO_PLAYER_API),
        mergeMap((data: { payload: string}) => this.videoPlayerService.deleteVideoPlayer(data.payload)
          .pipe(
            map(() => ({ type: VideoPlayerActions.REMOVE_VIDEO_PLAYER_STATE, videoPlayerId: data.payload })),
            catchError(() => EMPTY)
          ))
        )
    }, {dispatch: true}
  );
  // remove all video-players in the database
  removeAllVideoPlayer$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(VideoPlayerActions.REMOVE_ALL_VIDEO_PLAYER_API),
        mergeMap((data: {type: string, payload: string[]}) => 
        forkJoin([...data.payload.map((id) => this.videoPlayerService.deleteVideoPlayer(id))])
          .pipe(
            map(() => ({ type: VideoPlayerActions.REMOVE_ALL_VIDEO_PLAYER_STATE })),
            catchError(() => EMPTY)
          ))
        )
    }, {dispatch: true}
  );
 
  constructor(
    private actions$: Actions,
    private videoPlayerService: VideoPlayerService,
    private router: Router
  ) {}

}