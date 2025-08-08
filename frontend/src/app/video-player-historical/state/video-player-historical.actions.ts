import { createAction, props } from '@ngrx/store';
import { VideoPlayerHistorical } from '../models/video-player-historical.interface';




export enum VideoPlayerHistoricalActions {
  GET_VIDEO_PLAYER_HISTORICAL_LIST = '[Video-Player] Get Video-Player-Historical list',
  SET_VIDEO_PLAYER_HISTORICAL_LIST = '[Video-Player] Set Video-Player-Historical list',
  ADD_VIDEO_PLAYER_HISTORICAL_API = '[Video-Player] Add Video-Player-Historical (API)',
  ADD_VIDEO_PLAYER_HISTORICAL_STATE = '[Video-Player] Add Video-Player-Historical (STATE)',
  MODIFY_VIDEO_PLAYER_HISTORICAL_API = '[Video-Player] Modify Video-Player-Historical (API)',
  MODIFY_VIDEO_PLAYER_HISTORICAL_STATE = '[Video-Player] Modify Video-Player-Historical (STATE)',
  REMOVE_VIDEO_PLAYER_HISTORICAL_API = '[Video-Player] Remove Video-Player-Historical (API)',
  REMOVE_VIDEO_PLAYER_HISTORICAL_STATE = '[Video-Player] Remove Video-Player-Historical (STATE)',
  REMOVE_ALL_VIDEO_PLAYER_HISTORICAL_API = '[Video-Player] Remove All Video-Player-Historical (API)',
  REMOVE_ALL_VIDEO_PLAYER_HISTORICAL_STATE = '[Video-Player] Remove ALL Video-Player-Historical (STATE)',
}

export const getVideoPlayerHistoricalList = createAction(
  VideoPlayerHistoricalActions.GET_VIDEO_PLAYER_HISTORICAL_LIST,
);

export const setVideoPlayerHistoricalList = createAction(
VideoPlayerHistoricalActions.SET_VIDEO_PLAYER_HISTORICAL_LIST,
props<{ videoPlayersHistorical: Array<VideoPlayerHistorical> }>(),
);

 
export const addVideoPlayerHistoricalState = createAction(
  VideoPlayerHistoricalActions.ADD_VIDEO_PLAYER_HISTORICAL_STATE,
  props<{ videoPlayerHistorical: VideoPlayerHistorical }>()
);

export const modifyVideoPlayerHistoricalState = createAction(
    VideoPlayerHistoricalActions.MODIFY_VIDEO_PLAYER_HISTORICAL_STATE,
    props<{ videoPlayerHistorical: VideoPlayerHistorical }>()
);
 
export const removeVideoPlayerHistoricalState = createAction(
    VideoPlayerHistoricalActions.REMOVE_VIDEO_PLAYER_HISTORICAL_STATE,
  props<{ videoPlayerHistoricalId: string }>()
);

export const removeAllVideoPlayerHistoricalState = createAction(
  VideoPlayerHistoricalActions.REMOVE_ALL_VIDEO_PLAYER_HISTORICAL_STATE
);