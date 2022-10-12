import mongoose from 'mongoose';

export default function connectDatabase() {
  const {
    MONGODB_USER,
    MONGODB_PASSWORD,
    MONGODB_DATABASE,
    MONGODB_HOST,
    MONGODB_PORT,
  } = process.env;

  return mongoose.connect(
    `mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_DATABASE}?authSource=admin`,
  );
}
