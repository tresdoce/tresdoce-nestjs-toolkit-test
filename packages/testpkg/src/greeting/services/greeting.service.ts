import { Injectable } from '@nestjs/common';

@Injectable()
export class GreetingService {
  getHello(): string {
    //some comment
    return '¡Hello from the new package testpkg!';
  }
}
