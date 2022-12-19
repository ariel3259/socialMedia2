import { Module } from '@nestjs/common';
import EncoderService from './encoder.service';

const utilsServices = [EncoderService];

@Module({
  providers: utilsServices,
  exports: utilsServices,
})
export class UtilsModule {}
