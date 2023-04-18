import { Injectable } from '@nestjs/common';

@Injectable()
export class GreetingService {
  sayHello(): string {
    //return
    return '¡Hello from the new package mextest!';
  }
}
