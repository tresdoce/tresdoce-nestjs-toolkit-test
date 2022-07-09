import { Injectable } from '@nestjs/common';

@Injectable()
export class GreetingService {
  getHello(): string {
    console.log('custom pkg return msg');
    return '¡Hello from the new package custompkg!';
  }
}
