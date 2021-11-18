import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn  } from "typeorm";
import { v4 as uuid } from 'uuid';
import { Activy } from './Activy';

@Entity("course_units")
class CourseUnit {
    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(() => Activy, (activy: Activy) => activy.course_unit)
    activies: Activy[];
}

export { CourseUnit };
