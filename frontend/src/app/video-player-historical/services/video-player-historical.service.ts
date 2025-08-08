import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError,filter,map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { VideoPlayerHistorical } from '../models/video-player-historical.interface';

@Injectable({
  providedIn: 'root'
})
export class VideoPlayerHistoricalService {

  constructor(private http: HttpClient) { }

  getVideoPlayersHistorical(): Observable<VideoPlayerHistorical[]> {
      return this.http.get<VideoPlayerHistorical[]>(`${environment.apiURL}/video-players-historical`).pipe(
        tap((data: VideoPlayerHistorical[]) => data),
        catchError(err => throwError(() => err))
     )
    }


  getVideoPlayerHistorical(id: string): Observable<VideoPlayerHistorical> {
    return this.http.get<VideoPlayerHistorical>(`${environment.apiURL}/video-players-historical/${id}`).pipe(
       tap((data: VideoPlayerHistorical) => data),
       catchError(err => throwError(() => err))
    )
   }

  addVideoPlayerHistorical(videoPlayerHistorical: VideoPlayerHistorical) : Observable<VideoPlayerHistorical> {
    return this.http.post<VideoPlayerHistorical>(`${environment.apiURL}/video-players-historical`, videoPlayerHistorical).pipe(
      tap((data: VideoPlayerHistorical) => data),
      catchError(err => throwError(() => err))
   )
  }

  updateVideoPlayerHistorical(id:string, videoPlayerHistorical: VideoPlayerHistorical) : Observable<VideoPlayerHistorical> {
    return this.http.put<VideoPlayerHistorical>(`${environment.apiURL}/video-players-historical/${id}`, videoPlayerHistorical).pipe(
      catchError(err => throwError(() => err))
   )
  }

   deleteVideoPlayerHistorical(id:string) : Observable<VideoPlayerHistorical> {
    return this.http.delete<VideoPlayerHistorical>(`${environment.apiURL}/video-players-historical/${id}`).pipe(
      catchError(err => throwError(() => err))
   )
  }
}