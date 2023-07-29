import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    default: 'bessvlad45@gmail.com',
  })
  email: string;

  @ApiProperty({
    default: 'Vlad Bessmertnykh',
  })
  fullName: string;

  @ApiProperty({
    default: '12345',
  })
  password: string;
}
