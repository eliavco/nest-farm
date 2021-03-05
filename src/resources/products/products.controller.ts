import { ProductService } from './../../services/product/product.service';
import { Product } from 'models/product.model';
import { Controller, Get, Param, Render } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
	constructor(private readonly productsService: ProductsService,
		private readonly productService: ProductService,) { }
	
	@Get(':id')
	@Render('product')
	getProduct(@Param('id') id: string): Product {
		return this.productService.getProduct(+id);
	}
}
