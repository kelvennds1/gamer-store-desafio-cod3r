import { Controller, Get } from '@nestjs/common';
import { Product, products } from 'src/core';
@Controller('products')
export class ProductController {
    @Get()
    getProducts(): Product[] {
        return products  
    }
}
