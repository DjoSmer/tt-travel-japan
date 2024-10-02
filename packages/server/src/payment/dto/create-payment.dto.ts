import {
  Length,
  MinLength,
  IsEmail,
  IsNotEmpty,
  ValidateIf,
  Matches
} from 'class-validator';

export class CreatePaymentDto {
  @MinLength(3)
  @IsNotEmpty()
  @Matches(/^[a-z]*$/i, {
    message: 'Please use only Latin letters(A-z)'
  })
  firstName: string;
  
  @MinLength(3)
  @IsNotEmpty()
  @Matches(/^[a-z]*$/i, {
    message: 'Please use only Latin letters(A-z)'
  })
  lastName: string;
  
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @Matches(/^[1-9]{1,3} \d{9,13}$/, {
    message: 'Please enter for example "7 1112223344"'
  })
  phone: string;

  @ValidateIf((_, value) => !!value)
  @MinLength(3)
  addressLine1?: string;

  @ValidateIf((_, value) => !!value)
  @MinLength(3)
  addressLine2?: string;

  @ValidateIf((_, value) => !!value)
  @MinLength(3)
  city: string;

  @ValidateIf((_, value) => !!value)
  @Length(2)
  country?: string;

  @ValidateIf((_, value) => !!value)
  @MinLength(3)
  postralCode?: string;

  @ValidateIf((_, value) => !!value)
  @MinLength(2)
  state?: string;
}
