import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Board as BoardEntity } from './board.entity';
import { Repository } from 'typeorm';
import { BoardSaveType, BoardType } from './board.type';

@Injectable()
export class BoardService {
    constructor(
        @InjectRepository(BoardEntity)
        private attendantRepository: Repository<BoardEntity>,
    ) {}

    async createBoard(info: BoardSaveType): Promise<BoardType> {
        const board = await this.attendantRepository.save(info);
        if (!board) throw new NotFoundException(`보드를 생성할 수 없습니다.`);
        return board;
    }

    async readAllBoards(): Promise<BoardType[]> {
        const boards = await this.attendantRepository.find();
        if (!boards) throw new NotFoundException(`보드를 찾을 수 없습니다.`);
        return boards;
    }

    async readBoardById(id: number): Promise<BoardType> {
        const board = await this.attendantRepository.findOne({
            where: { id },
        });
        if (!board) throw new NotFoundException(`보드를 찾을 수 없습니다.`);
        return board;
    }

    async readBoardsByType(type: string): Promise<BoardType[]> {
        const board = await this.attendantRepository.find({
            where: { type },
        });
        if (!board) throw new NotFoundException(`보드를 찾을 수 없습니다.`);
        return board;
    }

    async readBoardByCategory(category: string): Promise<BoardType[]> {
        const board = await this.attendantRepository.find({
            where: { category },
        });
        if (!board) throw new NotFoundException(`보드를 찾을 수 없습니다.`);
        return board;
    }
}
