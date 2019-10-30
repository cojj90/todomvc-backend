import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class TodoNote {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  id: number
  @CreateDateColumn()
  createdAt: string
  @UpdateDateColumn()
  updatedAt: string
  @Column({ type: 'national varchar', length: 255 })
  note: string
  @Column({ type: 'boolean', default: false })
  isCompleted: boolean
  @Column({ type: 'boolean', default: false })
  isCleared: boolean
}
