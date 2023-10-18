import {
    Get,
    Controller,
    // Param,
    Post,
    Body,
    // Delete,
    // Put,
} from '@nestjs/common';
import {} from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Controller('cert')
export class CertController {
    @Post('/')
    async certificate(@Body() password) {
        const saltOrRounds = 10;
        const hash = await bcrypt.hash(password, saltOrRounds);
        console.log(hash);
    }

    @Get('/issue')
    async issueToken() {
        // return await this.boardService.readAllBoards();
    }
}
