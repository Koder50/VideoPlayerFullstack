import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { VideoPlayerHistorical } from '../models/video-player-historical.interface';
import { VideoPlayerHistoricalState } from './video-player-historical.reducers';


export const selectVideoPlayerHistoricalState = createFeatureSelector<VideoPlayerHistoricalState>('videoPlayerHistoricalState')

export const selectVideoPlayersHistorical = () => createSelector(
    selectVideoPlayerHistoricalState,
    (state: VideoPlayerHistoricalState) => state.videoPlayersHistorical
)
export const selectVideoPlayerHistorical = (id: string) => createSelector(
    selectVideoPlayerHistoricalState,
    (state: VideoPlayerHistoricalState) => state.videoPlayersHistorical.find(d => d.id === id)
)