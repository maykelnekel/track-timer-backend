import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Timer from "./timers.entitie";


@Entity()
export default class TimerExecutions{

    @PrimaryGeneratedColumn()
    id!: number

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at!: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    updated_at!: Date;

    @Column()
    initial_time!: string;

    @Column()
    final_time!: string;

    @Column()
    total_time!: string;

    @ManyToOne(()=> Timer, (timer)=> timer.executions)
    timer!: Timer
}