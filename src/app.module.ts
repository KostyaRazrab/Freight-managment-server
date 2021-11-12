import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {ConfigModule} from '@nestjs/config'
import { FreightsModule } from './freights/freights.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({envFilePath: '.env'}),
    MongooseModule.forRoot(
      process.env.DB_URL,
    ),
    FreightsModule,
  ],
})
export class AppModule {}
