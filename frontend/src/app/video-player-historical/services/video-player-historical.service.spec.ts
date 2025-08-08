import { TestBed } from '@angular/core/testing';

import { VideoPlayerHistoricalService } from './video-player-historical.service';

describe('VideoPlayerHistoricalService', () => {
  let service: VideoPlayerHistoricalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoPlayerHistoricalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
