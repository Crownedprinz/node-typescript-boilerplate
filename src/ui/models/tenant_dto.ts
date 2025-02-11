import { IsNotEmpty, MaxLength, IsString, IsBoolean } from "class-validator";
import { Expose } from "class-transformer";

import { MAX_NAME_LENGTH } from "../../domain/model/user";
import { BaseCreateDto, BaseReadDto } from "./base_dto";

export class CreateTenantInput extends BaseCreateDto {
    @MaxLength(MAX_NAME_LENGTH)
    @IsNotEmpty()
    @IsString()
    name: string;
    @MaxLength(MAX_NAME_LENGTH)
    @IsNotEmpty()
    description: string;
}
export class TenantDto extends BaseReadDto {
    @MaxLength(MAX_NAME_LENGTH)
    @IsNotEmpty()
    @IsString()
    @Expose()
    name: string;
    @MaxLength(MAX_NAME_LENGTH)
    @IsNotEmpty()
    @Expose()
    description: string;
    @IsBoolean()
    @Expose()
    isActive: boolean;
}
