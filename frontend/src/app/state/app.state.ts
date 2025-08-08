import { VideoPlayerState } from "../video-player/state/video-player.reducers";
import { AuthState } from "../auth/state/auth.reducers";

export interface AppState {
    videoPlayerState: VideoPlayerState,
    authState: AuthState
}