import { getRepository } from "typeorm";
import { CourseUnit } from "../models/CourseUnit";

interface CourseUnitData {
  name: string;
  description: string;
}

class CreateCourseUnitService {
  public async execute(data: CourseUnitData) {
    const { name, description } = data;

    const courseUnitRespository = getRepository(CourseUnit);

    const checkCourseUnitExists = await courseUnitRespository.findOne({ name });

    if (checkCourseUnitExists) {
      return {
        error: "Course Unit already exist"
      }
    }

    const courseUnit = courseUnitRespository.create({
      name,
      description
    });

    await courseUnitRespository.save(courseUnit);

    return courseUnit;
  }
}

export { CreateCourseUnitService };