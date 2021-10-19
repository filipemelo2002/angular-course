import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {

  constructor() { }

  getCursos() {
    return ['Java', 'Javascript', 'Spring Boot'];
  }
}
