import { GhlClient } from '../ghl.client';
import {
  ListProductPricesResponse,
  ListProductsResponse,
  Product,
  ProductDto,
  ProductPrice,
  ProductPriceDto,
  ProductPriceSearchParams,
  ProductsDeleteResponse,
  ProductSearchParams,
} from './products.types';

export class ProductsClient extends GhlClient {
  constructor(accessToken: string) {
    super(accessToken);
  }

  public async findById(
    productId: string,
    locationId: string,
  ): Promise<Product> {
    return this.get<Product>(`/products/${productId}`, {
      params: { locationId },
    });
  }

  public async remove(
    productId: string,
    locationId: string,
  ): Promise<ProductsDeleteResponse> {
    return this.delete<ProductsDeleteResponse>(`/products/${productId}`, {
      params: { locationId },
    });
  }

  public async update(productId: string, dto: ProductDto): Promise<Product> {
    return this.put<Product>(`/products/${productId}`, dto);
  }

  public async create(dto: ProductDto): Promise<Product> {
    return this.post<Product>('/products/', dto);
  }

  public async find(
    params: ProductSearchParams,
  ): Promise<ListProductsResponse> {
    return this.get<ListProductsResponse>('/products/', { params });
  }

  public async createPrice(
    productId: string,
    dto: ProductPriceDto,
  ): Promise<ProductPrice> {
    return this.post<ProductPrice>(`/products/${productId}/price`, dto);
  }

  public async findPrices(
    productId: string,
    params: ProductPriceSearchParams,
  ): Promise<ListProductPricesResponse> {
    return this.get<ListProductPricesResponse>(`/products/${productId}/price`, {
      params,
    });
  }

  public async findPriceById(
    productId: string,
    priceId: string,
    locationId: string,
  ): Promise<ProductPrice> {
    return this.get<ProductPrice>(`/products/${productId}/price/${priceId}`, {
      params: { locationId },
    });
  }

  public async updatePrice(
    productId: string,
    priceId: string,
    dto: ProductPriceDto,
  ): Promise<ProductPrice> {
    return this.put<ProductPrice>(
      `/products/${productId}/price/${priceId}`,
      dto,
    );
  }

  public async removePrice(
    productId: string,
    priceId: string,
    locationId: string,
  ): Promise<ProductsDeleteResponse> {
    return this.delete<ProductsDeleteResponse>(
      `/products/${productId}/price/${priceId}`,
      { params: { locationId } },
    );
  }
}
