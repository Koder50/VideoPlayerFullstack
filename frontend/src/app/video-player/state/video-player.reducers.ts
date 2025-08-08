import { createReducer, on } from '@ngrx/store';
import { VideoPlayer } from '../models/video-player.interface';
import { addVideoPlayerState, modifyVideoPlayerState, removeAllVideoPlayerState, removeVideoPlayerState, setVideoPlayerList } from './video-player.actions';

export interface VideoPlayerState {
    videoPlayers: Array<VideoPlayer>;
}

export const initialState: VideoPlayerState = {
    videoPlayers: []
}

export const videoPlayerReducer = createReducer(
  initialState,
  on(setVideoPlayerList, (state, { videoPlayers }) => { return {...state, videoPlayers}}),
  on(removeVideoPlayerState, (state, { videoPlayerId }) => {
    return {...state, videoPlayers: state.videoPlayers.filter(data => data.id != videoPlayerId)}
  }),
  on(addVideoPlayerState, (state, {videoPlayer}) => {
    return {...state, videoPlayers: [...state.videoPlayers, videoPlayer]}
  }),
  on(modifyVideoPlayerState, (state, {videoPlayer}) => {
    return {...state, videoPlayers: state.videoPlayers.map(data => data.id === videoPlayer.id ? videoPlayer : data)}
  }),
  on(removeAllVideoPlayerState, (state) => {
    return {...state, videoPlayers: []}
  }),
  );
