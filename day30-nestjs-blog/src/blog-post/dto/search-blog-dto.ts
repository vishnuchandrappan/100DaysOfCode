import { IsNotEmpty, IsOptional } from 'class-validator';

export class SearchBlogDto {
  @IsNotEmpty()
  @IsOptional()
  key: string;
}
