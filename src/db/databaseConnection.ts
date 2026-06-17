import mongoose from 'mongoose';
import { DB_NAME } from '../constants';

const connectToDatabase = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      '✅ Connected to the database successfully',
      connectionInstance.connection.host
    );
    console.log(
      '📝 Connected to the database successfully',
      connectionInstance.connection.name
    );
    // return connectionInstance;
  } catch (error) {
    console.error('Error connecting to the database:', error);
    // process.exit(1);
    throw error;
  }
};

export default connectToDatabase;
