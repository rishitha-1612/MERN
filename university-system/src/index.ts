import express from "express";

import type {
  Request,
  Response
} from "express";

import {

  InMemoryCourseRepository

} from "./repositories/InMemoryCourseRepository";

import {

  CourseService

} from "./services/CourseService";

const app = express();

app.use(express.json());

const repo =
  new InMemoryCourseRepository();

const service =
  new CourseService(repo);


// GET all courses

app.get(

  "/courses",

  async (
    req: Request,
    res: Response
  ) => {

    const courses =
      await repo.findAll();

    res.json(courses);
  }
);


// ENROLL

app.post(

  "/courses/:id/enroll",

  async (
    req: Request,
    res: Response
  ) => {

    try {

      const result =

        await service.enroll(

          String(req.params.id),

          req.body.studentId
        );

      res.json(result);

    } catch (e: any) {

      res.status(400).json({

        error: e.message
      });
    }
  }
);


// GET student courses

app.get(

  "/students/:id/courses",

  async (
    req: Request,
    res: Response
  ) => {

    const courses =

      await service
        .getStudentCourses(

          String(req.params.id)
        );

    res.json(courses);
  }
);


// DELETE course

app.delete(

  "/courses/:id",

  async (
    req: Request,
    res: Response
  ) => {

    const result =

      await service
        .deleteCourse(

          String(req.params.id)
        );

    res.json(result);
  }
);


app.listen(

  3000,

  () => {

    console.log(
      "Server running on port 3000"
    );
  }
);