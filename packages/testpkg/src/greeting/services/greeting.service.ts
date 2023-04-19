import { Injectable } from '@nestjs/common';

@Injectable()
export class GreetingService {
  getHello(): string {
    //some comment
    //another
    //another
    return '¡Hello from the new package testpkg!';
  }
}
