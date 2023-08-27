import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Board as BoardEntity } from './board.entity';
import { Repository } from 'typeorm';
import { BoardSaveType, BoardType } from './board.type';

@Injectable()
export class BoardService {
    constructor(
        @InjectRepository(BoardEntity)
        private boardRepository: Repository<BoardEntity>,
    ) {}

    // ? CREATE
    async createBoard(info: BoardSaveType): Promise<BoardType> {
        const board = await this.boardRepository.save(info);
        if (!board) throw new NotFoundException(`보드를 생성할 수 없습니다.`);
        return board;
    }

    // ? READ
    async readAllBoards(): Promise<BoardType[]> {
        const boards = await this.boardRepository.find();
        if (!boards) throw new NotFoundException(`보드를 찾을 수 없습니다.`);
        return boards;
    }

    async readBoardById(id: number): Promise<BoardType> {
        const board = await this.boardRepository.findOne({
            where: { id },
        });
        if (!board) throw new NotFoundException(`보드를 찾을 수 없습니다.`);
        return board;
    }

    async readBoardsByType(type: string): Promise<BoardType[]> {
        const board = await this.boardRepository.find({
            where: { type },
        });
        if (!board) throw new NotFoundException(`보드를 찾을 수 없습니다.`);
        return board;
    }

    async readBoardByCategory(category: string): Promise<BoardType[]> {
        const board = await this.boardRepository.find({
            where: { category },
        });
        if (!board) throw new NotFoundException(`보드를 찾을 수 없습니다.`);
        return board;
    }

    // ? UPDATE
    async updateBoardById(
        boardId: number,
        newBoard: BoardType,
    ): Promise<BoardType> {
        const board = await this.boardRepository.findOne({
            where: { id: boardId },
        });

        if (!board) throw new NotFoundException(`보드를 찾을 수 없습니다.`);
        if (!newBoard) return board;

        const putExceptions = ['id', 'createdAt', 'updatedAt'];

        Object.keys(newBoard).forEach((_key) => {
            if (putExceptions.includes(_key)) return;
            board[_key] = newBoard[_key];
        });

        await this.boardRepository.update(boardId, board);

        return board;
    }

    // ? DELETE
    async deleteBoardById(boardId: number): Promise<number> {
        const affectedRowsCnt = (await this.boardRepository.delete(boardId))
            .affected;
        if (affectedRowsCnt === 0)
            throw new NotFoundException(`삭제할 보드를 찾을 수 없습니다.`);
        return HttpStatus.ACCEPTED;
    }
}
