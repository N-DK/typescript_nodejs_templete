import dotenv from 'dotenv';

dotenv.config();

export const DEVELOPMENT = process.env.NODE_ENV === 'development';
export const TEST = process.env.NODE_ENV === 'test';

export const PORT = process.env.PORT || 3000;
export const HOSTNAME = process.env.HOSTNAME || 'localhost';

export const SERVER = {
    PORT,
    HOSTNAME,
};
