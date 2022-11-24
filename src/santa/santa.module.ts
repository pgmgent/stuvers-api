import { Module } from '@nestjs/common';
import { SantaService } from './santa.service';
import { SantaResolver } from './santa.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Santa } from './entities/santa.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Santa])],
  providers: [SantaResolver, SantaService],
  exports: [SantaService],
})
export class SantaModule {}
