import { Injectable } from '@nestjs/common';
// this is a service
@Injectable()
export class GreetingService {
  getHello(): string {
    return '¡Hello from the new package testpkg!';
  }
}
