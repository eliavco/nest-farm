import { Controller, Get, Render, Req, Request } from '@nestjs/common';
import { Product } from 'models/product.model';
import { AppService } from './app.service';
import { ProductService } from './services/product/product.service';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService,
		private readonly productService: ProductService,) { }

	@Get()
	@Render('overview')
	getHello(@Req() request: Request): { products: Product[]; } {
		const injections = { products: this.productService.getProducts() };
		return injections;
  }
}
