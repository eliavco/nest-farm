import { Injectable } from '@nestjs/common';
import { Product } from 'models/product.model';
import * as productsFile from './../../dev-data/data.json';

@Injectable()
export class ProductService {
	getProducts(): Product[] {
		const products = productsFile as Product[];
		products.forEach(obj => {
			if (!obj.organic) { obj.organicString = 'not-organic'; } else { obj.organicString = ''; }
		});
		return products;
	}

	getProduct(id: number): Product {
		return this.getProducts().filter(el => el.id === id)[0];
	}
}
