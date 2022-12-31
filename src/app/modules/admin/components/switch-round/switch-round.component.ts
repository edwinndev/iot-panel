import { Component, Input } from '@angular/core';
import { SwitchService } from '@data/services/switch.service';

@Component({
  selector: 'mmj-switch-round',
  templateUrl: './switch-round.component.html',
  styleUrls: ['./switch-round.component.css']
})
export class SwitchRoundComponent {
  @Input() public name : string = 'Device';

  constructor(private switchService : SwitchService) { }

  public onCheckboxChange(e : any) {
    this.switchService.update(this.name, e.target.checked).subscribe(data => {})
  }

}
