import { getRepository } from "typeorm";
import { Activy } from "../models/Activy";

interface ActivyData {
    name: string;
    activy_date: string;
    grade: number;
    courseUnitId: string;
}

class CreateActivyService {
//    public async execute(data: ActivyData) {
//        const { name, activy_date, grade, courseUnitId } = data;
//        const activyRepository = getRepository(Activy);
//        const checkActivyToCourseUnitExists = await activyRepository.findOne({ name, courseUnitId });
//        if (checkActivyToCourseUnitExists) {
//            return {
//                error: "Activy to Course already exists!"
//            }
//        }
    async execute({name,activy_date,grade, courseUnitId}:ActivyData) {

        const activyRepository = getRepository(Activy);

        const activy = activyRepository.create({
                name,
                activy_date,
                grade,
                courseUnitId
            }
        );

        await activyRepository.save(activy);

        return activy;


    }
}

export { CreateActivyService };