import { createReducer, on } from '@ngrx/store';
import { VideoPlayerHistorical } from '../models/video-player-historical.interface';
import { addVideoPlayerHistoricalState, modifyVideoPlayerHistoricalState, removeAllVideoPlayerHistoricalState, removeVideoPlayerHistoricalState, setVideoPlayerHistoricalList } from './video-player-historical.actions';

export interface VideoPlayerHistoricalState {
    videoPlayersHistorical: Array<VideoPlayerHistorical>;
}

export const initialState: VideoPlayerHistoricalState = {
    videoPlayersHistorical: []
}

export const videoPlayerHistoricalReducer = createReducer(
  initialState,
  on(setVideoPlayerHistoricalList, (state, { videoPlayersHistorical }) => { return {...state, videoPlayersHistorical}}),
  on(removeVideoPlayerHistoricalState, (state, { videoPlayerHistoricalId }) => {
    return {...state, videoPlayersHistorical: state.videoPlayersHistorical.filter(data => data.id != videoPlayerHistoricalId)}
  }),
  on(addVideoPlayerHistoricalState, (state, {videoPlayerHistorical}) => {
    return {...state, videoPlayersHistorical: [...state.videoPlayersHistorical, videoPlayerHistorical]}
  }),
  on(modifyVideoPlayerHistoricalState, (state, {videoPlayerHistorical}) => {
    return {...state, videoPlayersHistorical: state.videoPlayersHistorical.map(data => data.id === videoPlayerHistorical.id ? videoPlayerHistorical : data)}
  }),
  on(removeAllVideoPlayerHistoricalState, (state) => {
    return {...state, videoPlayersHistorical: []}
  }),
  );
