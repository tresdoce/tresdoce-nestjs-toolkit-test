import { Injectable } from '@nestjs/common';

@Injectable()
export class GreetingService {
  sayHello(): string {
    return '¡Hello from the new package mextest!';
  }
}
