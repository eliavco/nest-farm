import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ProductService } from './../../services/product/product.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, ProductService]
})
export class ProductsModule {}
