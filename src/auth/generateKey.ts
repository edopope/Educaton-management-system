import * as crypto from 'crypto';

 export const GenerateJwtSecret = (): string => {
    return crypto.randomBytes(32).toString('hex');
 }