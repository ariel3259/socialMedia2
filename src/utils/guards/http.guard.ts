import { AuthGuard } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

/*
    El argumento del AuthGuard es el atributo name de la estrategía que se esta usando.
    El nombre se descubre llamando al atributo name de una clase que extienda de PassportStrategy(Strategy)
    cuando se invoca al constructor de la clase padre. 
*/
@Injectable()
export default class HttpGuard extends AuthGuard('basic') {}