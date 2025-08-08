import { createAction, props } from '@ngrx/store';
import { VideoPlayer } from '../models/video-player.interface';




export enum VideoPlayerActions {
  GET_VIDEO_PLAYER_LIST = '[Video-Player] Get Video-Player list',
  SET_VIDEO_PLAYER_LIST = '[Video-Player] Set Video-Player list',
  ADD_VIDEO_PLAYER_API = '[Video-Player] Add Video-Player (API)',
  ADD_VIDEO_PLAYER_STATE = '[Video-Player] Add Video-Player (STATE)',
  MODIFY_VIDEO_PLAYER_API = '[Video-Player] Modify Video-Player (API)',
  MODIFY_VIDEO_PLAYER_STATE = '[Video-Player] Modify Video-Player (STATE)',
  REMOVE_VIDEO_PLAYER_API = '[Video-Player] Remove Video-Player (API)',
  REMOVE_VIDEO_PLAYER_STATE = '[Video-Player] Remove Video-Player (STATE)',
  REMOVE_ALL_VIDEO_PLAYER_API = '[Video-Player] Remove All Video-Player (API)',
  REMOVE_ALL_VIDEO_PLAYER_STATE = '[Video-Player] Remove ALL Video-Player (STATE)',
}

export const getVideoPlayerList = createAction(
  VideoPlayerActions.GET_VIDEO_PLAYER_LIST,
);

export const setVideoPlayerList = createAction(
VideoPlayerActions.SET_VIDEO_PLAYER_LIST,
props<{ videoPlayers: Array<VideoPlayer> }>(),
);

 
export const addVideoPlayerState = createAction(
  VideoPlayerActions.ADD_VIDEO_PLAYER_STATE,
  props<{ videoPlayer: VideoPlayer }>()
);

export const modifyVideoPlayerState = createAction(
    VideoPlayerActions.MODIFY_VIDEO_PLAYER_STATE,
    props<{ videoPlayer: VideoPlayer }>()
);
 
export const removeVideoPlayerState = createAction(
    VideoPlayerActions.REMOVE_VIDEO_PLAYER_STATE,
  props<{ videoPlayerId: string }>()
);

export const removeAllVideoPlayerState = createAction(
  VideoPlayerActions.REMOVE_ALL_VIDEO_PLAYER_STATE
);