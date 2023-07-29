export interface LoginFormDto {
  email: string;
  password: string;
}

export interface LoginResposneDto {
  token: string;
}

export interface RegisterFormDto extends LoginFormDto {
  fullName: string;
}

export interface RegisterResponseDto extends LoginResposneDto {}

export interface User {
  id: number;
  email: string;
  fullName: string;
}
