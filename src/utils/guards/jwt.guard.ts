import { ExecutionContext } from '@nestjs/common/interfaces';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

export default class JwtGuard extends AuthGuard('jwt') {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const { url, method } = context.switchToHttp().getRequest();
    if (/login/.test(url) || (/users/.test(url) && method === 'POST'))
      return true;
    else return super.canActivate(context);
  }
}