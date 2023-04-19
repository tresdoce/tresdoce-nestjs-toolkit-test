import { Injectable } from '@nestjs/common';

@Injectable()
export class GreetingService {
  sayHello(): string {
    //change msg
    return '¡Hello from the new package mex test!';
  }
}
