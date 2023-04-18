import { Global, Module } from '@nestjs/common';
import { GreetingService } from './services/greeting.service';
// this is a comment
@Global()
@Module({
  providers: [GreetingService],
  exports: [GreetingService],
})
export class GreetingModule {}
