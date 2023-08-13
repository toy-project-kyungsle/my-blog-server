import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Board as BoardEntity } from 'src/board/board.entity';
// import { Funding } from 'src/funding/funding.entity';

@Injectable()
export class MySqlConfigService implements TypeOrmOptionsFactory {
    constructor(private configService: ConfigService) {}

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            username: this.configService.get<string>('MYSQL_USER'),
            password: this.configService.get<string>('MYSQL_PASSWORD'),
            port: +this.configService.get<number>('MYSQL_PORT'),
            host: this.configService.get<string>('MYSQL_HOST'),
            database: this.configService.get<string>('MYSQL_DATABASE'),
            entities: [BoardEntity],
            autoLoadEntities: true,
        };
    }
}
