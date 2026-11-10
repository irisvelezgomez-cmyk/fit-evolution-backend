import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { PlanModule } from './plans/plan.module';
import { ChatModule } from './chat/chat.module';
import { LogModule } from './logs/log.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'fit_evolution.sqlite',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    PlanModule,
    ChatModule,
    LogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}