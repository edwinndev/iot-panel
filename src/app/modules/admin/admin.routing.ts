import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DevicesComponent } from './devices/devices.component';
import { LogsComponent } from './logs/logs.component';
import { SettingsComponent } from './settings/settings.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { TopicsComponent } from './topics/topics.component';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'dashboard',
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'devices',
                component: DevicesComponent
            },
            {
                path: 'subscriptions',
                component: SubscriptionsComponent
            },
            {
                path: 'topics',
                component: TopicsComponent
            },
            {
                path: 'logs',
                component: LogsComponent
            },
            {
                path: 'settings',
                component: SettingsComponent
            },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
