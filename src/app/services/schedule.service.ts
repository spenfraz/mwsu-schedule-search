import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class ScheduleService{
	
	constructor(private _http: Http){
		console.log('MWSU Schedule Service Ready...');
	}
	
	getSections(){
		return this._http.get('http://localhost:5000/sections')
			.map(res => res.json());
	}

        getSectionsBy(searchType: string, searchStr: string) {
                return this._http.get('http://localhost:5000/sections?limit=100&find=' + searchType + '-' + searchStr)
                        .map(res => res.json());
        }

        getTeachersBy(courseCode: string) {
                return this._http.get('http://localhost:5000/instructors?courseCode=' + courseCode)
                        .map(res => res.json());
        }

        getDepartments() {
                return this._http.get('http://localhost:5000/departments?fields=fullname-abbrev&limit=100')
                        .map(res => res.json());
        }

        getCourseCodes(dept_abbrev: string) {
                return this._http.get('http://localhost:5000/sections?fields=courseID-title&find=department-'+ dept_abbrev +'&limit=100')
                        .map(res => res.json());
        }

}
