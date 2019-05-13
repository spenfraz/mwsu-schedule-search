import { Component, ViewChild, ElementRef } from '@angular/core';

import { ScheduleService } from '../../services/schedule.service';

@Component({
  moduleId: module.id,
  selector: 'sections',
  templateUrl: 'sections.component.html',
})
export class SectionsComponent{ 
        @ViewChild('searchInput') searchInput: ElementRef;

	sections: Array<Object>;
        instructors: Array<Object> = [];
        departments: Array<Object> = [];
        coursecodes: Array<Object> = [];

        drillDown: number = 0;
        helpInit: number = 0;
	
        searchStr: string = '';
        searchType: string = 'courseID';
        searchTypes = [
            ["courseID","Course Code"],
            ["instructor", "Instructor"],
            ["title", "Title"],
            ["type", "Type"]
        ];
	
	constructor(private _scheduleService: ScheduleService){
		this._scheduleService.getSections().subscribe( sections => {
			this.sections = sections;
                        console.log(sections);
                        this.searchInput.nativeElement.focus();
		});
	}

        searchSections(){
                this._scheduleService.getSectionsBy(this.searchType, this.searchStr).subscribe( sections => {
                        this.sections = sections;
                        if(this.instructors.length > 0) {
                            this.instructors = [];
                        }
                });
        }

        selectChangeHandler(event: any){
                this.searchType = event.target.value;
                this.searchStr = '';
                this.searchInput.nativeElement.focus();
        }

        populateTeachers(event: any){
                this._scheduleService.getTeachersBy(this.searchStr).subscribe( teachers => {
                        this.instructors = teachers;
                });
        }

        populateDepts(event: any){
                this._scheduleService.getDepartments().subscribe( departments => {
                        this.departments = departments;
                        this.helpInit = 1;
                });
        }

        populateCourseCodes(dept_abbrev: string) {
                console.log(dept_abbrev);
        
                this._scheduleService.getCourseCodes(dept_abbrev).subscribe( codes => {
                        
                        this.coursecodes = codes;
                        console.log(this.coursecodes);
                        this.helpInit = 2;
                        
                }); 
        }

        closeHelp(callback: any) {
                this.helpInit = 0;
                this.searchStr = '';
                this.searchType = 'courseID';
        }
     	
}
