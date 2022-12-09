// // generate token function use jwt
// 'use strict';
// import jwt from 'jsonwebtoken';
// import User from '../models/user';

// const SECRET_KEY = '4hj4Vf369zjk8HbR';

// export const genToken = (data: any) => {
//   const token = jwt.sign(data, SECRET_KEY, { expiresIn: '1d' });
//   return token;
// };

// // decode token function use jwt

// export const decodeToken = (token: string): User | null => {
//   const data = jwt.verify(token, SECRET_KEY);

//   if (!data || typeof data === 'string' || !data['id']) {
//     return null;
//   }

//   const user = new User(data.id, data.name, data.email);

//   return user;
// };

// export const checkValidToken = (token: string) => {
//   try {
//     const decode = decodeToken(token);
//     return decode;
//   } catch (error) {
//     return null;
//   }
// };
