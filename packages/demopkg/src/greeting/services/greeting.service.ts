import { Injectable } from '@nestjs/common';
// this is a services
@Injectable()
export class GreetingService {
  getHello(): string {
    return '¡Hello from the new package demopkg!';
  }
}
