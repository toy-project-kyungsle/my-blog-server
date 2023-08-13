import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Board as BoardEntity } from './board.entity';
import { Repository } from 'typeorm';
import { BoardType } from './board.type';

@Injectable()
export class BoardService {
    constructor(
        @InjectRepository(BoardEntity)
        private attendantRepository: Repository<BoardEntity>,
    ) {}

    async getAllBoards(): Promise<BoardType[]> {
        const boards = await this.attendantRepository.find();
        if (!boards) throw new NotFoundException(`보드를 찾을 수 없습니다.`);
        return boards;
    }
}
