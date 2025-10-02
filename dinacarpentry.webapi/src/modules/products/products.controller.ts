import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly _productsService: ProductsService) {}

  @Get()
  getHello(): string[] {
    return this._productsService.getAll();
  }
}
