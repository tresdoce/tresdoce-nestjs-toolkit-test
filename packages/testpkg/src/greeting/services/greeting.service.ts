import { Injectable } from '@nestjs/common';

@Injectable()
export class GreetingService {
  getHello(): string {
    // add comment
    return '¡Hello from the new package testpkg!';
  }
}
