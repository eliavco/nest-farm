import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './resources/products/products.module';
import { ProductService } from './services/product/product.service';

@Module({
  imports: [ProductsModule],
  controllers: [AppController],
  providers: [AppService, ProductService],
})
export class AppModule {}
