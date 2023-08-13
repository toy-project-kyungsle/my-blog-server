import { Get, Controller } from '@nestjs/common';
import {} from '@nestjs/common';
import { BoardType } from './board.type';
import { BoardService } from './board.service';

@Controller('board')
export class BoardController {
    constructor(private boardService: BoardService) {}

    @Get('/')
    async getAllBoards(): Promise<BoardType[]> {
        return await this.boardService.getAllBoards();
    }
}
