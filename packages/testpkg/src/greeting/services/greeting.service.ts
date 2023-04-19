import { Injectable } from '@nestjs/common';

@Injectable()
export class GreetingService {
  // sras
  getHello(): string {
    return '¡Hello from the new package testpkg!';
  }
}
