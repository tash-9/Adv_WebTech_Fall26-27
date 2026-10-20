import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
} from "class-validator";

export class CreateEmployeeDto {
  @IsString()
  @IsNotEmpty()
  name: string = "";

  @IsEmail()
  email: string = "";

  @IsString()
  @IsNotEmpty()
  phone: string = "";

  @IsString()
  @IsNotEmpty()
  password: string = "";

  @IsInt()
  @Min(0)
  age: number = 0;

  @IsInt()
  @Min(0)
  yearsOfWorking: number = 0;
}

export class UpdateEmployeeDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  phone?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  password?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  age?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  yearsOfWorking?: number;
}
