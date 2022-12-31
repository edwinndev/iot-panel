import { Component, Input } from '@angular/core';
import { SwitchService } from '@data/services/switch.service';

@Component({
  selector: 'mmj-switch-square',
  templateUrl: './switch-square.component.html',
  styleUrls: ['./switch-square.component.css']
})
export class SwitchSquareComponent {
  @Input() public name : string = 'Device';

  constructor(private switchService : SwitchService) { }

  public onCheckboxChange(e : any) {
    this.switchService.update(this.name, e.target.checked).subscribe(data => {})
  }
}
