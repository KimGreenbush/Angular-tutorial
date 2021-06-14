import {Component, OnInit} from '@angular/core'
import { CoursesService } from './courses.service'

@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li>
                {{courses}}
            </li>
        <ul>
        <!-- data binding with [] -->
        <input [value]="courses" />
        <!-- event binding with () -->
        <button (click)="do($event)">Add {{count}}</button>
        `
})
export class CoursesComponent implements OnInit{
    title: string
    courses: string
    count: number

    // Dependency injection: by passing "service" with the class type as a param, the CoursesService stays decoupled vs using the "new" keyword and creating an instance inside the constructor which would tightly couple it and could cause issues if the constructor of CoursesService ever changed. The dependency of CoursesService is /injected/ vs built into the constructor
    // MUST use access modifier to signal that the property is implicity set from the param, i.e. "service" as an instance/property doesn't exist without the access modifier
    constructor(private service: CoursesService) {
        this.title = 'List of courses'
        this.courses = ""
        this.count = 0
    }

    ngOnInit() {
        this.getPokeFromService()
    }

    getPokeFromService() {
        console.log(this.service)
        let bulbasaur = this.service.getPokes()
        console.log(bulbasaur)
        bulbasaur.subscribe(poke => {
            console.log(poke)
            // this.courses = poke.name
        })
        this.courses = "bulbasaur"
    }

    do(e: any) {
        console.log(e)
        this.count++
    }
}