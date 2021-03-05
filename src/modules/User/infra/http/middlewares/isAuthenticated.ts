import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import authJWT from '@config/jwtConfig';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const { authorization } = request.headers;

  if (!authorization) {
    throw new Error('You are not logged into the application.');
  }

  const [, token] = authorization.split(' ');

  try {
    const decoded = jwt.verify(token, authJWT.jwt.secret);

    const { sub } = decoded as TokenPayload;

    request.user = {
      id: sub,
    };

    return next();
  } catch {
    throw new Error('Invalid authentication token');
  }
}
