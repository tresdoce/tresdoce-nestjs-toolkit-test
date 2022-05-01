import { Injectable } from '@nestjs/common';

@Injectable()
export class GreetingService {
  getHello(): string {
    console.log("this is a log")
    return '¡Hello from the new package mextest!';
  }
}
