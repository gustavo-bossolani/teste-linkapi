import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn,
  UpdateDateColumn,
} from 'typeorm';

interface IClient {
  nome: string;
  email: string;
  fone: string;
}

interface IItem {
  codigo: string;
  descricao: string;
  quantidade: string;
  valorUnidade: string;
}

@Entity('orders')
export default class Order {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  data: string;

  @Column()
  totalVenda: string;

  @Column()
  cliente: IClient;

  @Column({ default: [] })
  itens: IItem[];

  @Column()
  numeroPedido: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
