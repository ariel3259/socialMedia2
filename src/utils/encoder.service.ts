import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class EncoderService {
  async encode(text: string): Promise<string> {
    const salt: string = await bcrypt.genSalt(12);
    const encoded: string = await bcrypt.hash(text, salt);
    return encoded;
  }
  async verify(text: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(text, hash);
  }
}
