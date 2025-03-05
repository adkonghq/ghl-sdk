export type RecurringInterval = 'day' | 'week' | 'month' | 'year';

export type RecurringData = {
  interval: RecurringInterval /** The interval of the recurring product */;
  intervalCount: number /** The number of intervals between each recurring product */;
};

export type MembershipOffer = {
  _id: string /** The ID of the membership offer */;
  label: string /** The label of the membership offer */;
  value: number /** The value of the membership offer */;
};

export type InternalSource = 'agency_plan' | 'funnel' | 'membership';

export type PriceMeta = {
  source: string /** The source of the price */;
  stripePriceId: string /** The Stripe price ID */;
  internalSource: InternalSource /** The internal source of the price */;
};

export type PriceType = 'one_time' | 'recurring';

export type ProductSearchParams = {
  locationId: string /** The unique identifier for the location */;
  limit?: number;
  offset?: number;
  search?: string;
};

export type ProductPriceSearchParams = {
  locationId: string /** The unique identifier for the location */;
  ids?: string; // Comma separated
  limit?: number;
  offset?: number;
};

export type ProductPriceDto = {
  locationId: string /** The unique identifier for the location */;
  name: string /** The name of the price */;
  type: PriceType /** The type of the price */;
  currency: string /** The currency of the price */;
  amount: number /** The amount of the price */;
  recurring?: RecurringData /** The recurring details of the price (if type is recurring) */;
  description?: string /** A brief description of the price */;
  membershipOffers?: MembershipOffer[] /** An array of membership offers associated with the price */;
  trialPeriod?: number /** The trial period duration in days (if applicable) */;
  totalCycles?: number /** The total number of billing cycles for the price */;
  setupFee?: number /** The setup fee for the price */;
  variantOptionIds?: string[] /** An array of variant option IDs associated with the price */;
  compareAtPrice?: number /** The compare at price for the price */;
  userId?: string /** The unique identifier of the user who created the price */;
  meta?: PriceMeta /** Additional metadata associated with the price */;
  trackInventory?: boolean /** Need to track inventory stock quantity */;
  availableQuantity?: number /** Available inventory stock quantity */;
  allowOutOfStockPurchases?: boolean /** Continue selling when out of stock */;
};

export type ProductPrice = {
  _id: string /** The unique identifier for the price */;
  membershipOffers?: MembershipOffer[] /** An array of membership offers associated with the price */;
  variantOptionIds?: string[] /** An array of variant option IDs associated with the price */;
  locationId: string /** The unique identifier for the location */;
  product?: string /** The unique identifier for the associated product */;
  userId?: string /** The unique identifier for the user */;
  name: string /** The name of the price */;
  type: PriceType /** The type of the price */;
  currency: string /** The currency code for the price */;
  amount: number /** The amount of the price */;
  recurring?: RecurringData /** The recurring details of the price (if type is recurring) */;
  createdAt?: string /** The creation timestamp of the price (2023-11-20T10:23:38.645Z) */;
  updatedAt?: string /** The last update timestamp of the price (2023-11-20T10:23:38.645Z) */;
  compareAtPrice?: number /** The compare at price for the price */;
  trackInventory?: boolean /** Need to track inventory stock quantity */;
  availableQuantity?: number /** Available inventory stock quantity */;
  allowOutOfStockPurchases?: boolean /** Continue selling when out of stock */;
};

export type ListProductPricesResponse = {
  prices: ProductPrice[] /** An array of prices */;
  total: number /** The total number of prices */;
};

export type ProductVariantOption = {
  id: string /** The unique identifier of the variant option */;
  name: string /** The name of the variant option */;
};

export type ProductVariant = {
  id: string /** The unique identifier of the variant */;
  name: string /** The name of the variant */;
  options: ProductVariantOption[] /** An array of variant options associated with the variant */;
};

export type ProductMedia = {
  id: string /** The unique identifier for the media */;
  title: string /** The title of the media file */;
  url: string /** The URL where the media file is stored */;
  type: 'image' | 'video' /** The type of the media file */;
  isFeatured?: boolean /** Indicates whether the media is featured */;
};

export type ProductType = 'DIGITAL' | 'PHYSICAL' | 'SERVICE';

export type Product = {
  _id: string /** The unique identifier for the product */;
  description?: string /** The description of the product */;
  variants: ProductVariant[] /** An array of variants for the product */;
  medias: ProductMedia[] /** An array of medias for the product */;
  locationId: string /** The unique identifier for the location */;
  name: string /** The name of the product */;
  productType: ProductType /** The type of the product */;
  availableInStore?: boolean /** Indicates whether the product is available in-store */;
  userId?: string /** The unique identifier for the user who created the product */;
  createdAt: string /** The creation timestamp of the product (2023-11-20T10:23:36.515Z) */;
  updatedAt: string /** The last update timestamp of the product (2024-01-23T09:57:04.846Z) */;
  statementDescriptor?: string /** The statement descriptor for the product */;
  image?: string /** The URL for the product image */;
};

export type ProductsDeleteResponse = {
  status: boolean /** The status of the request */;
};

export type ProductDto = {
  locationId: string /** The unique identifier for the location */;
  name: string /** The name of the product */;
  description?: string /** The description of the product */;
  productType: ProductType /** The type of the product */;
  image?: string /** The URL for the product image */;
  statementDescriptor?: string /** The statement descriptor for the product */;
  availableInStore?: boolean /** Indicates whether the product is available in-store */;
  medias?: ProductMedia[] /** An array of medias for the product */;
  variants: ProductVariant[] /** An array of variants for the product */;
};

export type ListProductStats = {
  total: number /** The total number of products */;
};

export type ListProductsResponse = {
  products: Product[] /** An array of products */;
  total: ListProductStats[] /** The stats for the product list */;
};
