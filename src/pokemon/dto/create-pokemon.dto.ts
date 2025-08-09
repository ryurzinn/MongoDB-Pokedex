import { IsString, IsInt, IsPositive, MinLength, Min } from 'class-validator';

export class CreatePokemonDto {

    // isInt, isPositive, MinLenght 1
    @IsInt()
    @IsPositive()
    @Min(1)
     no: number;

    //  isString, MinLenght
    @IsString()
    @MinLength(1)
     name: string;

}
