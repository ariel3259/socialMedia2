import { ValidatorOptions } from 'class-validator';
import { ValidationError } from 'sequelize';

export default interface ValidationPipeOptions extends ValidatorOptions{
  transform?: boolean;
  disableErrorMessage?: boolean;
  exceptionFactory?: (errors: ValidationError[]) => any;
}