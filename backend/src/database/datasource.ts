import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '3424',
  database: 'tallermecanicanest',
  synchronize: false, 
  entities: [__dirname + '/../**/*.entity{.ts,.js}'], 
  migrations: [__dirname + '/migrations/*{.ts,.js}'], 
});


AppDataSource.initialize()
  .then(() => {
    console.log('Conexión a la base de datos establecida!');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });
