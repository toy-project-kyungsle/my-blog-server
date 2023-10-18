import { Module } from '@nestjs/common';
import { CertController } from './cert.controller';

@Module({
    controllers: [CertController],
})
export class CertModule {}
