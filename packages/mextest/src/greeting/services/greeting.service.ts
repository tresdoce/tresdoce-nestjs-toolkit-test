import { Injectable } from '@nestjs/common';

@Injectable()
export class GreetingService {
  sayHello(): string {
    //sadsad
    return '¡Hello from the new package mex test!';
  }
}
