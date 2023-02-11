import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DevicesComponent } from './devices/devices.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { TopicsComponent } from './topics/topics.component';
import { LogsComponent } from './logs/logs.component';
import { SettingsComponent } from './settings/settings.component';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin.routing';
import { SwitchRoundComponent } from './components/switch-round/switch-round.component';
import { SwitchSquareComponent } from './components/switch-square/switch-square.component';
import { GaugeComponent } from './components/gauge/gauge.component';
import { GaugesModule } from '@progress/kendo-angular-gauges';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { FilesComponent } from './files/files.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DevicesComponent,
    SubscriptionsComponent,
    TopicsComponent,
    LogsComponent,
    SettingsComponent,
    AdminComponent,

    SwitchRoundComponent,
    SwitchSquareComponent,
    GaugeComponent,
    FilesComponent,
  ],
  imports: [
    SharedModule,
    AdminRoutingModule,
    InputsModule,
    GaugesModule,
  ]
})
export class AdminModule { }
