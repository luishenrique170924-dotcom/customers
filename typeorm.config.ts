import { DataSource } from 'typeorm';
import { Product } from './src/products/products.entity';

export default new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'curso',
  entities: [Product],
  migrations: ['dist/migrations/*.js'],
});
