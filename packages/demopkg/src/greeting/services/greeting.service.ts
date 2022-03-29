import { Injectable } from '@nestjs/common';

@Injectable()
export class GreetingService {
  getHello(): string {
    console.log('msg');
    return '¡Hello from the new package demopkg!';
  }
}
