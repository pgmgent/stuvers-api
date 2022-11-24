import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Santa } from './entities/santa.entity';
import { CreateSantaInput } from './dto/create-santa.input';

@Injectable()
export class SantaService {
  constructor(
    @InjectRepository(Santa) private santaRepository: Repository<Santa>,
  ) {}

  create(createSantaInput: CreateSantaInput): Promise<Santa> {
    const newSanta = this.santaRepository.create(createSantaInput);
    return this.santaRepository.save(newSanta);
  }

  findAll(): Promise<Santa[]> {
    return this.santaRepository.find();
  }
}
