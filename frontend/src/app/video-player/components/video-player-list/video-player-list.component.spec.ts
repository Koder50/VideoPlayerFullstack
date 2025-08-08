import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPlayerListComponent } from './video-player-list.component';

describe('VideoPlayerListComponent', () => {
  let component: VideoPlayerListComponent;
  let fixture: ComponentFixture<VideoPlayerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoPlayerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPlayerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
