import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError,filter,map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { VideoPlayer } from '../models/video-player.interface';

@Injectable({
  providedIn: 'root'
})
export class VideoPlayerService {

  constructor(private http: HttpClient) { }

  getVideoPlayers(): Observable<VideoPlayer[]> {
      return this.http.get<VideoPlayer[]>(`${environment.apiURL}/video-players`).pipe(
        tap((data: VideoPlayer[]) => data),
        catchError(err => throwError(() => err))
     )
    }


  getVideoPlayer(id: string): Observable<VideoPlayer> {
    return this.http.get<VideoPlayer>(`${environment.apiURL}/video-players/${id}`).pipe(
       tap((data: VideoPlayer) => data),
       catchError(err => throwError(() => err))
    )
   }

  addVideoPlayer(videoPlayer: VideoPlayer) : Observable<VideoPlayer> {
    return this.http.post<VideoPlayer>(`${environment.apiURL}/video-players`, videoPlayer).pipe(
      tap((data: VideoPlayer) => data),
      catchError(err => throwError(() => err))
   )
  }

  updateVideoPlayer(id:string, videoPlayer: VideoPlayer) : Observable<VideoPlayer> {
    return this.http.put<VideoPlayer>(`${environment.apiURL}/video-players/${id}`, videoPlayer).pipe(
      catchError(err => throwError(() => err))
   )
  }

   deleteVideoPlayer(id:string) : Observable<VideoPlayer> {
    return this.http.delete<VideoPlayer>(`${environment.apiURL}/video-players/${id}`).pipe(
      catchError(err => throwError(() => err))
   )
  }
}