import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CollectionModule } from './collection/collection.module';
import { CollectionController } from './collection/collection.controller';
import { CollectionService } from './collection/collection.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true, cache: true }),
    CollectionModule,
  ],
  controllers: [AppController, CollectionController],
  providers: [AppService, CollectionService],
})
export class AppModule {}
