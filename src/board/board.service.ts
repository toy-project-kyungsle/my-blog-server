import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardEntity } from './board.entity';
import { Repository } from 'typeorm';
import { BoardType } from './board.type';

@Injectable()
export class BoardService {
    constructor(
        @InjectRepository(BoardEntity)
        private attendantRepository: Repository<BoardEntity>,
    ) {}

    async getAllBoards(): Promise<BoardType[]> {
        return;
    }
}
