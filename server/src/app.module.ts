import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { RoutingModule } from './routing.module';

@Module({
  imports: [UserModule, DatabaseModule, AuthModule, RoutingModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
