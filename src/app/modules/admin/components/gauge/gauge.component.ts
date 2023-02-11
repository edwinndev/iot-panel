import { Component, Input } from '@angular/core';
import { ThermometerService } from '@data/services/thermometer.service';

@Component({
  selector: 'mmj-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.css']
})
export class GaugeComponent {
  @Input() public name : string = 'T0'
  public value : number = 0
  private timer! : NodeJS.Timeout

  constructor(private thService : ThermometerService) {}

  private onSend(): void {
    this.value = Math.random() * 10;
    /* this.thService.getThermometerData(this.name).subscribe({
      next: (response) => {
        if (response.ok) this.value = response.data.value
        else this.value = 0
      },
      error: (e) => console.error(e),
    }); */
  }

  public onValueChange(e : any) {
    if (e.target.checked) {
      this.timer = setInterval(() => this.onSend(), 4000);
    } else {
      clearInterval(this.timer)
      this.value = 0
    }
  }

}
