import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { ZodValidationPipe } from 'nestjs-zod';
import { TaskUserModule } from './modules/tasks/TaskUser.module';
import { AuthModule } from './modules/auth/Auth.module';
import { UserModule } from './modules/users/User.module';
import { NotificationModule } from './modules/notification/notification.module';

@Module({
  imports: [UserModule, AuthModule, TaskUserModule, NotificationModule],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
  ],
})
export class AppModule {}
