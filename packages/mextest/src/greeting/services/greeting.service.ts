import { Injectable } from '@nestjs/common';

@Injectable()
export class GreetingService {
  sayHello(): string {
    //return mesaje
    return '¡Hello from the new package mextest!';
  }
}
