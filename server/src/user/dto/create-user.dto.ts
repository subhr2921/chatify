import { IsString, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly username: string;

  @IsString()
  @IsOptional()
  readonly email: string;

  @IsString()
  readonly password: string;
}
