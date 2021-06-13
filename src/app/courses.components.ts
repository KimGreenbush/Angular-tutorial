import {Component} from '@angular/core'
import { CoursesService } from './courses.service'

@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{course}}
            </li>
        <ul>
        `
})
export class CoursesComponent {
    title = 'List of courses'
    courses

    // Dependency injection: by passing "service" with the class type as a param, the CoursesService stays decoupled vs using the "new" keyword and creating an instance inside the constructor which would tightly couple it and could cause issues if the constructor of CoursesService ever changed. The dependency of CoursesService is /injected/ vs built into the constructor
    constructor(service: CoursesService) {
        this.courses = service.getCourses()
    }
}