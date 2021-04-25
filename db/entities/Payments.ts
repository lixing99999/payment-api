import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('payments', { schema: 'setel-assessment' })
export class Payments {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'user_id', nullable: true })
  user_id: number | null;

  @Column('integer', { name: 'orderId', nullable: true })
  order_id: number | null;

  @Column('integer', { name: 'created_by', nullable: true })
  created_by: number | null;

  @Column('timestamp', { name: 'created_at', nullable: true })
  created_at: Date | null;

  @Column('integer', { name: 'updated_by', nullable: true })
  updated_by: number | null;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updated_at: Date | null;
}
