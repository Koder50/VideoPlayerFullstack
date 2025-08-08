import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { VideoPlayer } from '../models/video-player.interface';
import { VideoPlayerState } from './video-player.reducers';


export const selectVideoPlayerState = createFeatureSelector<VideoPlayerState>('videoPlayerState')

export const selectVideoPlayers = () => createSelector(
    selectVideoPlayerState,
    (state: VideoPlayerState) => state.videoPlayers
)
export const selectVideoPlayer = (id: string) => createSelector(
    selectVideoPlayerState,
    (state: VideoPlayerState) => state.videoPlayers.find(d => d.id === id)
)