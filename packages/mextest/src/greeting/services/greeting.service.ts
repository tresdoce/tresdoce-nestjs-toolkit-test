import { Injectable } from '@nestjs/common';

@Injectable()
export class GreetingService {
  sayHello(): string {
    // add comments
    return '¡Hello from the new package mextest!';
  }
}
