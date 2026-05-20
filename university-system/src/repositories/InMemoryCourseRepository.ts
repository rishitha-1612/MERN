import { Course } from "../models/Course";

import { ICourseRepository }

from "./interfaces/ICourseRepository";

export class InMemoryCourseRepository

implements ICourseRepository {

  private courses: Course[] = [

    {
      id: "1",
      name: "Physics",
      capacity: 2,
      students: []
    },

    {
      id: "2",
      name: "Math",
      capacity: 3,
      students: []
    }
  ];

  async findAll(): Promise<Course[]> {

    return this.courses;
  }

  async findById(

    id: string

  ): Promise<Course | null> {

    return (

      this.courses.find(
        c => c.id === id
      ) || null
    );
  }

  async save(
    course: Course
  ): Promise<void> {

    const index =

      this.courses.findIndex(
        c => c.id === course.id
      );

    if (index >= 0) {

      this.courses[index] =
        course;

    } else {

      this.courses.push(
        course
      );
    }
  }

  async enrollStudent(

    courseId: string,

    studentId: string

  ): Promise<void> {

    const course =
      await this.findById(
        courseId
      );

    if (

      course &&

      !course.students.includes(
        studentId
      )
    ) {

      course.students.push(
        studentId
      );

      await this.save(course);
    }
  }

  async findByStudentId(

    studentId: string

  ): Promise<Course[]> {

    return this.courses.filter(

      course =>

        course.students.includes(
          studentId
        )
    );
  }

  async delete(
    courseId: string
  ): Promise<void> {

    this.courses =

      this.courses.filter(
        c => c.id !== courseId
      );
  }
}