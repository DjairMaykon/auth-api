import express, { Express, Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import HttpException from './exceptions/HttpException';

class Application {
  private app: Express;

  constructor() {
    this.app = express();

    this.config();
    this.routes();
    this.errorHandling();
  }

  config() {
    this.app.use(helmet());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
    this.app.use(morgan('dev'));
  }

  routes() {
    this.app.get('/', (req, res) => {
      res.status(200).json({
        message: 'Hello, world',
      });
    });
  }

  errorHandling() {
    this.app.use((req, res) => {
      res.status(404).send({ message: 'Resource not found' });
    });

    this.app.use((error: HttpException, req: Request, res: Response) => {
      const status = error.status || 500;
      const message = error.message || 'Something went wrong';
      res.status(status).send({
        message,
      });
    });
  }

  init() {
    this.app.listen(process.env.PORT, () =>
      console.log(`Server listening on port ${process.env.PORT}`),
    );
  }
}

export default Application;
