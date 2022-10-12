import 'dotenv/config';
import Application from './core/App';
import UserController from './domains/user/user.controller';
import connectDatabase from './infra/database';

connectDatabase()
  .then(() => {
    const app = new Application([new UserController()]);
    app.init();
  })
  .catch(err => {
    console.log(`Error connecting to database: ${err.message}`);
  });
