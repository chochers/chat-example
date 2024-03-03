import { IsNotEmpty } from "class-validator";

export class MessageDTO{
    
    @IsNotEmpty()
    message: string
}