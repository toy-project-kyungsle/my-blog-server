import {
    Get,
    Controller,
    Param,
    Post,
    Body,
    Delete,
    Put,
} from '@nestjs/common';
import {} from '@nestjs/common';
import { BoardSaveType, BoardType } from './board.type';
import { BoardService } from './board.service';

@Controller('board')
export class BoardController {
    constructor(private boardService: BoardService) {}

    @Post('/')
    async createBoard(@Body() createdBoard: BoardSaveType): Promise<BoardType> {
        return this.boardService.createBoard(createdBoard);
    }

    @Get('/')
    async readAllBoards(): Promise<BoardType[]> {
        return await this.boardService.readAllBoards();
    }

    @Get('/id/:id')
    async readBoardById(@Param('id') id: number): Promise<BoardType> {
        return await this.boardService.readBoardById(id);
    }

    @Get('/type/:type')
    async readBoardsByType(@Param('type') type: string): Promise<BoardType[]> {
        return await this.boardService.readBoardsByType(type);
    }

    @Put('/:id')
    async updateBoardById(
        @Param('id') id: number,
        @Body() newBoard: BoardType,
    ): Promise<BoardType> {
        return this.boardService.updateBoardById(id, newBoard);
    }

    @Delete('/:id')
    async deleteBoardById(@Param('id') id: number): Promise<number> {
        return this.boardService.deleteBoardById(id);
        // return id;
    }

    // 미완성..
    // @Get('/category/:category')
    // async readBoardByCategory(
    //     @Param('category') category: string,
    // ): Promise<BoardType[]> {
    //     return await this.boardService.readBoardByCategory(category);
    // }
}
