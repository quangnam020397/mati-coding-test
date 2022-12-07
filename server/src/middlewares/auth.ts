import { decodeToken } from '../services';

export const authenticate = async (req: any, res: any, next: any) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      throw new Error('Token not found');
    }

    const data = decodeToken(token);

    if (!data || !data.id) {
      return res.status(401).send('invalid token');
    }

    req.user = data;

    next();
  } catch (error) {
    return res.status(500).send('server errors\n' + error);
  }
};
