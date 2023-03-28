import { hashSync, getRounds } from 'bcryptjs'
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeUpdate,
  BeforeInsert,
  OneToMany,
} from 'typeorm'
import Contact from './contactEntity'

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ length: 50 })
  name: string

  @Column({ length: 50, unique: true })
  email: string

  @Column({ length: 120 })
  password: string

  @Column({
    type: 'boolean',
    default: false,
  })
  isAdm: boolean

  @Column({
    length: 400,
    nullable: true,
    default:
      'https://argumentumpericias.com.br/biblioteca/2019/09/sem-imagem-avatar.png',
  })
  imageProfile: string

  @Column()
  phone: string

  @Column({ default: true })
  isActive: boolean

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @OneToMany(() => Contact, Contacts => Contacts.user)
  contacts: Contact[]

  @BeforeUpdate()
  @BeforeInsert()
  hashPassword() {
    const isEncrypted = getRounds(this.password)
    if (!isEncrypted) {
      this.password = hashSync(this.password, 10)
    }
  }
}
export default User
