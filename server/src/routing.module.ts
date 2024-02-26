import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { UserModule } from './modules/user/user.module';
import { UserCommonService } from './common-services/user.service';
import { UserService } from './modules/user/user.service';

export const Routes = [
  {
    path: 'admin',
    children: [
      {
        path: '/',
        module: UserModule,
      },
    ],
  },
];

@Module({
  imports: [RouterModule.register(Routes), UserModule],
  providers: [UserCommonService, UserService],
})
export class RoutingModule {}
