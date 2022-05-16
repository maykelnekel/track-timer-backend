import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Timestamp, OneToMany} from 'typeorm'
import TimerExecutions from './timer_executions.entitie';

@Entity('timers')
export default class Timer{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    activity!: string;

    @Column()
    sample!: number;

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

    @OneToMany(() => TimerExecutions, (executions) => executions.timer)
    executions!: TimerExecutions[];

}