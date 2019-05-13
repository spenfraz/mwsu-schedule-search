import { Component } from '@angular/core';

import { ScheduleService } from './services/schedule.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [ScheduleService]
})
export class AppComponent  {  }
