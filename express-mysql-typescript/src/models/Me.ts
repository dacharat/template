import {
  Table,
  Column,
  Model,
  CreatedAt,
  PrimaryKey,
  AutoIncrement,
  UpdatedAt,
} from 'sequelize-typescript'

@Table
export default class Me extends Model<Me> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number

  @Column
  username!: string

  @CreatedAt
  createdAt!: Date

  @UpdatedAt
  updatedAt!: Date
}
