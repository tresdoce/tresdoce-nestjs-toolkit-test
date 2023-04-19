import { Injectable } from '@nestjs/common';

@Injectable()
export class GreetingService {
  sayHello(): string {
    // this is a comment
    return '¡Hello from the new package mex test!';
  }
}
