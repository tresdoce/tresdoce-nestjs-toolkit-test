import { Injectable } from '@nestjs/common';

@Injectable()
export class GreetingService {
  getHello(): string {
    // sarasa
    return '¡Hello from the new package testpkg!';
  }
}
