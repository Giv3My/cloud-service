import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UserEntity } from 'src/users/entities/user.entity';
import { LocalAuthGuard } from './guards/local.guard';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() dto: CreateUserDto) {
    return this.authService.register(dto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiBody({ type: CreateUserDto })
  login(@Req() req: Request) {
    return this.authService.login(req.user as UserEntity);
  }
}
