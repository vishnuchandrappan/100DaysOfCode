import { IsNotEmpty, IsOptional } from "class-validator";


export class EditCommentDto {

  @IsNotEmpty()
  @IsOptional()
  body: string;

}