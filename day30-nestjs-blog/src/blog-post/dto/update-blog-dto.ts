import { IsNotEmpty, IsOptional } from "class-validator";

export class UpdateBlogDto {
  @IsNotEmpty()
  @IsOptional()
  title: string;

  @IsNotEmpty()
  @IsOptional()
  body: string;

  @IsNotEmpty()
  @IsOptional()
  image: string;
}