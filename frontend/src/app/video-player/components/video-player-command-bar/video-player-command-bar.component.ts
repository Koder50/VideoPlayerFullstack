import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommandBarActions } from '../../enums/command-bar-actions.enum';

@Component({
  selector: 'app-video-player-command-bar',
  templateUrl: './video-player-command-bar.component.html',
  styleUrls: ['./video-player-command-bar.component.scss']
})
export class VideoPlayerCommandBarComponent implements OnInit {
  @Output() action = new EventEmitter<CommandBarActions>()
  constructor() { }

  ngOnInit(): void {
  }

  emitAction(action: CommandBarActions) {
    this.action.emit(action);
  }

}
