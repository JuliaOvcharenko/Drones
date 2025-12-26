
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model ProductInfoBlock
 * 
 */
export type ProductInfoBlock = $Result.DefaultSelection<Prisma.$ProductInfoBlockPayload>
/**
 * Model ProductImage
 * 
 */
export type ProductImage = $Result.DefaultSelection<Prisma.$ProductImagePayload>
/**
 * Model ProductMainImage
 * 
 */
export type ProductMainImage = $Result.DefaultSelection<Prisma.$ProductMainImagePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderProducts
 * 
 */
export type OrderProducts = $Result.DefaultSelection<Prisma.$OrderProductsPayload>
/**
 * Model verificationCode
 * 
 */
export type verificationCode = $Result.DefaultSelection<Prisma.$verificationCodePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Products
 * const products = await prisma.product.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Products
   * const products = await prisma.product.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productInfoBlock`: Exposes CRUD operations for the **ProductInfoBlock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductInfoBlocks
    * const productInfoBlocks = await prisma.productInfoBlock.findMany()
    * ```
    */
  get productInfoBlock(): Prisma.ProductInfoBlockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productImage`: Exposes CRUD operations for the **ProductImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductImages
    * const productImages = await prisma.productImage.findMany()
    * ```
    */
  get productImage(): Prisma.ProductImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productMainImage`: Exposes CRUD operations for the **ProductMainImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductMainImages
    * const productMainImages = await prisma.productMainImage.findMany()
    * ```
    */
  get productMainImage(): Prisma.ProductMainImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderProducts`: Exposes CRUD operations for the **OrderProducts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderProducts
    * const orderProducts = await prisma.orderProducts.findMany()
    * ```
    */
  get orderProducts(): Prisma.OrderProductsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationCode`: Exposes CRUD operations for the **verificationCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationCodes
    * const verificationCodes = await prisma.verificationCode.findMany()
    * ```
    */
  get verificationCode(): Prisma.verificationCodeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.17.0
   * Query Engine version: c0aafc03b8ef6cdced8654b9a817999e02457d6a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Product: 'Product',
    Category: 'Category',
    ProductInfoBlock: 'ProductInfoBlock',
    ProductImage: 'ProductImage',
    ProductMainImage: 'ProductMainImage',
    User: 'User',
    Address: 'Address',
    Order: 'Order',
    OrderProducts: 'OrderProducts',
    verificationCode: 'verificationCode'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "product" | "category" | "productInfoBlock" | "productImage" | "productMainImage" | "user" | "address" | "order" | "orderProducts" | "verificationCode"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      ProductInfoBlock: {
        payload: Prisma.$ProductInfoBlockPayload<ExtArgs>
        fields: Prisma.ProductInfoBlockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductInfoBlockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductInfoBlockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductInfoBlockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductInfoBlockPayload>
          }
          findFirst: {
            args: Prisma.ProductInfoBlockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductInfoBlockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductInfoBlockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductInfoBlockPayload>
          }
          findMany: {
            args: Prisma.ProductInfoBlockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductInfoBlockPayload>[]
          }
          create: {
            args: Prisma.ProductInfoBlockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductInfoBlockPayload>
          }
          createMany: {
            args: Prisma.ProductInfoBlockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductInfoBlockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductInfoBlockPayload>[]
          }
          delete: {
            args: Prisma.ProductInfoBlockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductInfoBlockPayload>
          }
          update: {
            args: Prisma.ProductInfoBlockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductInfoBlockPayload>
          }
          deleteMany: {
            args: Prisma.ProductInfoBlockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductInfoBlockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductInfoBlockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductInfoBlockPayload>[]
          }
          upsert: {
            args: Prisma.ProductInfoBlockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductInfoBlockPayload>
          }
          aggregate: {
            args: Prisma.ProductInfoBlockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductInfoBlock>
          }
          groupBy: {
            args: Prisma.ProductInfoBlockGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductInfoBlockGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductInfoBlockCountArgs<ExtArgs>
            result: $Utils.Optional<ProductInfoBlockCountAggregateOutputType> | number
          }
        }
      }
      ProductImage: {
        payload: Prisma.$ProductImagePayload<ExtArgs>
        fields: Prisma.ProductImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          findFirst: {
            args: Prisma.ProductImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          findMany: {
            args: Prisma.ProductImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>[]
          }
          create: {
            args: Prisma.ProductImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          createMany: {
            args: Prisma.ProductImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>[]
          }
          delete: {
            args: Prisma.ProductImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          update: {
            args: Prisma.ProductImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          deleteMany: {
            args: Prisma.ProductImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>[]
          }
          upsert: {
            args: Prisma.ProductImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          aggregate: {
            args: Prisma.ProductImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductImage>
          }
          groupBy: {
            args: Prisma.ProductImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductImageCountArgs<ExtArgs>
            result: $Utils.Optional<ProductImageCountAggregateOutputType> | number
          }
        }
      }
      ProductMainImage: {
        payload: Prisma.$ProductMainImagePayload<ExtArgs>
        fields: Prisma.ProductMainImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductMainImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMainImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductMainImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMainImagePayload>
          }
          findFirst: {
            args: Prisma.ProductMainImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMainImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductMainImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMainImagePayload>
          }
          findMany: {
            args: Prisma.ProductMainImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMainImagePayload>[]
          }
          create: {
            args: Prisma.ProductMainImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMainImagePayload>
          }
          createMany: {
            args: Prisma.ProductMainImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductMainImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMainImagePayload>[]
          }
          delete: {
            args: Prisma.ProductMainImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMainImagePayload>
          }
          update: {
            args: Prisma.ProductMainImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMainImagePayload>
          }
          deleteMany: {
            args: Prisma.ProductMainImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductMainImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductMainImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMainImagePayload>[]
          }
          upsert: {
            args: Prisma.ProductMainImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMainImagePayload>
          }
          aggregate: {
            args: Prisma.ProductMainImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductMainImage>
          }
          groupBy: {
            args: Prisma.ProductMainImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductMainImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductMainImageCountArgs<ExtArgs>
            result: $Utils.Optional<ProductMainImageCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderProducts: {
        payload: Prisma.$OrderProductsPayload<ExtArgs>
        fields: Prisma.OrderProductsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderProductsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderProductsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductsPayload>
          }
          findFirst: {
            args: Prisma.OrderProductsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderProductsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductsPayload>
          }
          findMany: {
            args: Prisma.OrderProductsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductsPayload>[]
          }
          create: {
            args: Prisma.OrderProductsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductsPayload>
          }
          createMany: {
            args: Prisma.OrderProductsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderProductsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductsPayload>[]
          }
          delete: {
            args: Prisma.OrderProductsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductsPayload>
          }
          update: {
            args: Prisma.OrderProductsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductsPayload>
          }
          deleteMany: {
            args: Prisma.OrderProductsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderProductsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderProductsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductsPayload>[]
          }
          upsert: {
            args: Prisma.OrderProductsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductsPayload>
          }
          aggregate: {
            args: Prisma.OrderProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderProducts>
          }
          groupBy: {
            args: Prisma.OrderProductsGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderProductsCountArgs<ExtArgs>
            result: $Utils.Optional<OrderProductsCountAggregateOutputType> | number
          }
        }
      }
      verificationCode: {
        payload: Prisma.$verificationCodePayload<ExtArgs>
        fields: Prisma.verificationCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.verificationCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.verificationCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationCodePayload>
          }
          findFirst: {
            args: Prisma.verificationCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.verificationCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationCodePayload>
          }
          findMany: {
            args: Prisma.verificationCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationCodePayload>[]
          }
          create: {
            args: Prisma.verificationCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationCodePayload>
          }
          createMany: {
            args: Prisma.verificationCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.verificationCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationCodePayload>[]
          }
          delete: {
            args: Prisma.verificationCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationCodePayload>
          }
          update: {
            args: Prisma.verificationCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationCodePayload>
          }
          deleteMany: {
            args: Prisma.verificationCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.verificationCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.verificationCodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationCodePayload>[]
          }
          upsert: {
            args: Prisma.verificationCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationCodePayload>
          }
          aggregate: {
            args: Prisma.VerificationCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationCode>
          }
          groupBy: {
            args: Prisma.verificationCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.verificationCodeCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCodeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    product?: ProductOmit
    category?: CategoryOmit
    productInfoBlock?: ProductInfoBlockOmit
    productImage?: ProductImageOmit
    productMainImage?: ProductMainImageOmit
    user?: UserOmit
    address?: AddressOmit
    order?: OrderOmit
    orderProducts?: OrderProductsOmit
    verificationCode?: verificationCodeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    infoBlocks: number
    orders: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    infoBlocks?: boolean | ProductCountOutputTypeCountInfoBlocksArgs
    orders?: boolean | ProductCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountInfoBlocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductInfoBlockWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderProductsWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    products: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type ProductInfoBlockCountOutputType
   */

  export type ProductInfoBlockCountOutputType = {
    images: number
  }

  export type ProductInfoBlockCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | ProductInfoBlockCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * ProductInfoBlockCountOutputType without action
   */
  export type ProductInfoBlockCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInfoBlockCountOutputType
     */
    select?: ProductInfoBlockCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductInfoBlockCountOutputType without action
   */
  export type ProductInfoBlockCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductImageWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    orders: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type AddressCountOutputType
   */

  export type AddressCountOutputType = {
    userId: number
  }

  export type AddressCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userId?: boolean | AddressCountOutputTypeCountUserIdArgs
  }

  // Custom InputTypes
  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressCountOutputType
     */
    select?: AddressCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeCountUserIdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    products: number
    categories: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | OrderCountOutputTypeCountProductsArgs
    categories?: boolean | OrderCountOutputTypeCountCategoriesArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderProductsWhereInput
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    price: number | null
    discount: number | null
    countOfProduct: number | null
    categoryId: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    price: number | null
    discount: number | null
    countOfProduct: number | null
    categoryId: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    discount: number | null
    countOfProduct: number | null
    categoryId: number | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    discount: number | null
    countOfProduct: number | null
    categoryId: number | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    price: number
    discount: number
    countOfProduct: number
    categoryId: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    price?: true
    discount?: true
    countOfProduct?: true
    categoryId?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    price?: true
    discount?: true
    countOfProduct?: true
    categoryId?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    discount?: true
    countOfProduct?: true
    categoryId?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    discount?: true
    countOfProduct?: true
    categoryId?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    discount?: true
    countOfProduct?: true
    categoryId?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    name: string
    price: number
    discount: number
    countOfProduct: number
    categoryId: number
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    discount?: boolean
    countOfProduct?: boolean
    categoryId?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    infoBlocks?: boolean | Product$infoBlocksArgs<ExtArgs>
    mainImage?: boolean | Product$mainImageArgs<ExtArgs>
    orders?: boolean | Product$ordersArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    discount?: boolean
    countOfProduct?: boolean
    categoryId?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    discount?: boolean
    countOfProduct?: boolean
    categoryId?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    discount?: boolean
    countOfProduct?: boolean
    categoryId?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "discount" | "countOfProduct" | "categoryId", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    infoBlocks?: boolean | Product$infoBlocksArgs<ExtArgs>
    mainImage?: boolean | Product$mainImageArgs<ExtArgs>
    orders?: boolean | Product$ordersArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      infoBlocks: Prisma.$ProductInfoBlockPayload<ExtArgs>[]
      mainImage: Prisma.$ProductMainImagePayload<ExtArgs> | null
      orders: Prisma.$OrderProductsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      price: number
      discount: number
      countOfProduct: number
      categoryId: number
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    infoBlocks<T extends Product$infoBlocksArgs<ExtArgs> = {}>(args?: Subset<T, Product$infoBlocksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductInfoBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mainImage<T extends Product$mainImageArgs<ExtArgs> = {}>(args?: Subset<T, Product$mainImageArgs<ExtArgs>>): Prisma__ProductMainImageClient<$Result.GetResult<Prisma.$ProductMainImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    orders<T extends Product$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Product$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly name: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Int'>
    readonly discount: FieldRef<"Product", 'Int'>
    readonly countOfProduct: FieldRef<"Product", 'Int'>
    readonly categoryId: FieldRef<"Product", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.infoBlocks
   */
  export type Product$infoBlocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInfoBlock
     */
    select?: ProductInfoBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInfoBlock
     */
    omit?: ProductInfoBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInfoBlockInclude<ExtArgs> | null
    where?: ProductInfoBlockWhereInput
    orderBy?: ProductInfoBlockOrderByWithRelationInput | ProductInfoBlockOrderByWithRelationInput[]
    cursor?: ProductInfoBlockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductInfoBlockScalarFieldEnum | ProductInfoBlockScalarFieldEnum[]
  }

  /**
   * Product.mainImage
   */
  export type Product$mainImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMainImage
     */
    select?: ProductMainImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMainImage
     */
    omit?: ProductMainImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMainImageInclude<ExtArgs> | null
    where?: ProductMainImageWhereInput
  }

  /**
   * Product.orders
   */
  export type Product$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProducts
     */
    select?: OrderProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProducts
     */
    omit?: OrderProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductsInclude<ExtArgs> | null
    where?: OrderProductsWhereInput
    orderBy?: OrderProductsOrderByWithRelationInput | OrderProductsOrderByWithRelationInput[]
    cursor?: OrderProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderProductsScalarFieldEnum | OrderProductsScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
    orderId: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
    orderId: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    orderId: number | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    orderId: number | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    image: number
    orderId: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
    orderId?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
    orderId?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    image?: true
    orderId?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    image?: true
    orderId?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    image?: true
    orderId?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    image: string
    orderId: number | null
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    orderId?: boolean
    products?: boolean | Category$productsArgs<ExtArgs>
    order?: boolean | Category$orderArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    orderId?: boolean
    order?: boolean | Category$orderArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    orderId?: boolean
    order?: boolean | Category$orderArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    image?: boolean
    orderId?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "image" | "orderId", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Category$productsArgs<ExtArgs>
    order?: boolean | Category$orderArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | Category$orderArgs<ExtArgs>
  }
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | Category$orderArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
      order: Prisma.$OrderPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      image: string
      orderId: number | null
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Category$productsArgs<ExtArgs> = {}>(args?: Subset<T, Category$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    order<T extends Category$orderArgs<ExtArgs> = {}>(args?: Subset<T, Category$orderArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly image: FieldRef<"Category", 'String'>
    readonly orderId: FieldRef<"Category", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.products
   */
  export type Category$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Category.order
   */
  export type Category$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model ProductInfoBlock
   */

  export type AggregateProductInfoBlock = {
    _count: ProductInfoBlockCountAggregateOutputType | null
    _avg: ProductInfoBlockAvgAggregateOutputType | null
    _sum: ProductInfoBlockSumAggregateOutputType | null
    _min: ProductInfoBlockMinAggregateOutputType | null
    _max: ProductInfoBlockMaxAggregateOutputType | null
  }

  export type ProductInfoBlockAvgAggregateOutputType = {
    id: number | null
    blockOrder: number | null
    productId: number | null
  }

  export type ProductInfoBlockSumAggregateOutputType = {
    id: number | null
    blockOrder: number | null
    productId: number | null
  }

  export type ProductInfoBlockMinAggregateOutputType = {
    id: number | null
    blockOrder: number | null
    align: string | null
    title: string | null
    content: string | null
    productId: number | null
  }

  export type ProductInfoBlockMaxAggregateOutputType = {
    id: number | null
    blockOrder: number | null
    align: string | null
    title: string | null
    content: string | null
    productId: number | null
  }

  export type ProductInfoBlockCountAggregateOutputType = {
    id: number
    blockOrder: number
    align: number
    title: number
    content: number
    productId: number
    _all: number
  }


  export type ProductInfoBlockAvgAggregateInputType = {
    id?: true
    blockOrder?: true
    productId?: true
  }

  export type ProductInfoBlockSumAggregateInputType = {
    id?: true
    blockOrder?: true
    productId?: true
  }

  export type ProductInfoBlockMinAggregateInputType = {
    id?: true
    blockOrder?: true
    align?: true
    title?: true
    content?: true
    productId?: true
  }

  export type ProductInfoBlockMaxAggregateInputType = {
    id?: true
    blockOrder?: true
    align?: true
    title?: true
    content?: true
    productId?: true
  }

  export type ProductInfoBlockCountAggregateInputType = {
    id?: true
    blockOrder?: true
    align?: true
    title?: true
    content?: true
    productId?: true
    _all?: true
  }

  export type ProductInfoBlockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductInfoBlock to aggregate.
     */
    where?: ProductInfoBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductInfoBlocks to fetch.
     */
    orderBy?: ProductInfoBlockOrderByWithRelationInput | ProductInfoBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductInfoBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductInfoBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductInfoBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductInfoBlocks
    **/
    _count?: true | ProductInfoBlockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductInfoBlockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductInfoBlockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductInfoBlockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductInfoBlockMaxAggregateInputType
  }

  export type GetProductInfoBlockAggregateType<T extends ProductInfoBlockAggregateArgs> = {
        [P in keyof T & keyof AggregateProductInfoBlock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductInfoBlock[P]>
      : GetScalarType<T[P], AggregateProductInfoBlock[P]>
  }




  export type ProductInfoBlockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductInfoBlockWhereInput
    orderBy?: ProductInfoBlockOrderByWithAggregationInput | ProductInfoBlockOrderByWithAggregationInput[]
    by: ProductInfoBlockScalarFieldEnum[] | ProductInfoBlockScalarFieldEnum
    having?: ProductInfoBlockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductInfoBlockCountAggregateInputType | true
    _avg?: ProductInfoBlockAvgAggregateInputType
    _sum?: ProductInfoBlockSumAggregateInputType
    _min?: ProductInfoBlockMinAggregateInputType
    _max?: ProductInfoBlockMaxAggregateInputType
  }

  export type ProductInfoBlockGroupByOutputType = {
    id: number
    blockOrder: number
    align: string
    title: string
    content: string
    productId: number
    _count: ProductInfoBlockCountAggregateOutputType | null
    _avg: ProductInfoBlockAvgAggregateOutputType | null
    _sum: ProductInfoBlockSumAggregateOutputType | null
    _min: ProductInfoBlockMinAggregateOutputType | null
    _max: ProductInfoBlockMaxAggregateOutputType | null
  }

  type GetProductInfoBlockGroupByPayload<T extends ProductInfoBlockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductInfoBlockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductInfoBlockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductInfoBlockGroupByOutputType[P]>
            : GetScalarType<T[P], ProductInfoBlockGroupByOutputType[P]>
        }
      >
    >


  export type ProductInfoBlockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blockOrder?: boolean
    align?: boolean
    title?: boolean
    content?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    images?: boolean | ProductInfoBlock$imagesArgs<ExtArgs>
    _count?: boolean | ProductInfoBlockCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productInfoBlock"]>

  export type ProductInfoBlockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blockOrder?: boolean
    align?: boolean
    title?: boolean
    content?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productInfoBlock"]>

  export type ProductInfoBlockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blockOrder?: boolean
    align?: boolean
    title?: boolean
    content?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productInfoBlock"]>

  export type ProductInfoBlockSelectScalar = {
    id?: boolean
    blockOrder?: boolean
    align?: boolean
    title?: boolean
    content?: boolean
    productId?: boolean
  }

  export type ProductInfoBlockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "blockOrder" | "align" | "title" | "content" | "productId", ExtArgs["result"]["productInfoBlock"]>
  export type ProductInfoBlockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    images?: boolean | ProductInfoBlock$imagesArgs<ExtArgs>
    _count?: boolean | ProductInfoBlockCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductInfoBlockIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductInfoBlockIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductInfoBlockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductInfoBlock"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      images: Prisma.$ProductImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      blockOrder: number
      align: string
      title: string
      content: string
      productId: number
    }, ExtArgs["result"]["productInfoBlock"]>
    composites: {}
  }

  type ProductInfoBlockGetPayload<S extends boolean | null | undefined | ProductInfoBlockDefaultArgs> = $Result.GetResult<Prisma.$ProductInfoBlockPayload, S>

  type ProductInfoBlockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductInfoBlockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductInfoBlockCountAggregateInputType | true
    }

  export interface ProductInfoBlockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductInfoBlock'], meta: { name: 'ProductInfoBlock' } }
    /**
     * Find zero or one ProductInfoBlock that matches the filter.
     * @param {ProductInfoBlockFindUniqueArgs} args - Arguments to find a ProductInfoBlock
     * @example
     * // Get one ProductInfoBlock
     * const productInfoBlock = await prisma.productInfoBlock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductInfoBlockFindUniqueArgs>(args: SelectSubset<T, ProductInfoBlockFindUniqueArgs<ExtArgs>>): Prisma__ProductInfoBlockClient<$Result.GetResult<Prisma.$ProductInfoBlockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductInfoBlock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductInfoBlockFindUniqueOrThrowArgs} args - Arguments to find a ProductInfoBlock
     * @example
     * // Get one ProductInfoBlock
     * const productInfoBlock = await prisma.productInfoBlock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductInfoBlockFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductInfoBlockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductInfoBlockClient<$Result.GetResult<Prisma.$ProductInfoBlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductInfoBlock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductInfoBlockFindFirstArgs} args - Arguments to find a ProductInfoBlock
     * @example
     * // Get one ProductInfoBlock
     * const productInfoBlock = await prisma.productInfoBlock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductInfoBlockFindFirstArgs>(args?: SelectSubset<T, ProductInfoBlockFindFirstArgs<ExtArgs>>): Prisma__ProductInfoBlockClient<$Result.GetResult<Prisma.$ProductInfoBlockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductInfoBlock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductInfoBlockFindFirstOrThrowArgs} args - Arguments to find a ProductInfoBlock
     * @example
     * // Get one ProductInfoBlock
     * const productInfoBlock = await prisma.productInfoBlock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductInfoBlockFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductInfoBlockFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductInfoBlockClient<$Result.GetResult<Prisma.$ProductInfoBlockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductInfoBlocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductInfoBlockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductInfoBlocks
     * const productInfoBlocks = await prisma.productInfoBlock.findMany()
     * 
     * // Get first 10 ProductInfoBlocks
     * const productInfoBlocks = await prisma.productInfoBlock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productInfoBlockWithIdOnly = await prisma.productInfoBlock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductInfoBlockFindManyArgs>(args?: SelectSubset<T, ProductInfoBlockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductInfoBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductInfoBlock.
     * @param {ProductInfoBlockCreateArgs} args - Arguments to create a ProductInfoBlock.
     * @example
     * // Create one ProductInfoBlock
     * const ProductInfoBlock = await prisma.productInfoBlock.create({
     *   data: {
     *     // ... data to create a ProductInfoBlock
     *   }
     * })
     * 
     */
    create<T extends ProductInfoBlockCreateArgs>(args: SelectSubset<T, ProductInfoBlockCreateArgs<ExtArgs>>): Prisma__ProductInfoBlockClient<$Result.GetResult<Prisma.$ProductInfoBlockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductInfoBlocks.
     * @param {ProductInfoBlockCreateManyArgs} args - Arguments to create many ProductInfoBlocks.
     * @example
     * // Create many ProductInfoBlocks
     * const productInfoBlock = await prisma.productInfoBlock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductInfoBlockCreateManyArgs>(args?: SelectSubset<T, ProductInfoBlockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductInfoBlocks and returns the data saved in the database.
     * @param {ProductInfoBlockCreateManyAndReturnArgs} args - Arguments to create many ProductInfoBlocks.
     * @example
     * // Create many ProductInfoBlocks
     * const productInfoBlock = await prisma.productInfoBlock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductInfoBlocks and only return the `id`
     * const productInfoBlockWithIdOnly = await prisma.productInfoBlock.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductInfoBlockCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductInfoBlockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductInfoBlockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductInfoBlock.
     * @param {ProductInfoBlockDeleteArgs} args - Arguments to delete one ProductInfoBlock.
     * @example
     * // Delete one ProductInfoBlock
     * const ProductInfoBlock = await prisma.productInfoBlock.delete({
     *   where: {
     *     // ... filter to delete one ProductInfoBlock
     *   }
     * })
     * 
     */
    delete<T extends ProductInfoBlockDeleteArgs>(args: SelectSubset<T, ProductInfoBlockDeleteArgs<ExtArgs>>): Prisma__ProductInfoBlockClient<$Result.GetResult<Prisma.$ProductInfoBlockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductInfoBlock.
     * @param {ProductInfoBlockUpdateArgs} args - Arguments to update one ProductInfoBlock.
     * @example
     * // Update one ProductInfoBlock
     * const productInfoBlock = await prisma.productInfoBlock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductInfoBlockUpdateArgs>(args: SelectSubset<T, ProductInfoBlockUpdateArgs<ExtArgs>>): Prisma__ProductInfoBlockClient<$Result.GetResult<Prisma.$ProductInfoBlockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductInfoBlocks.
     * @param {ProductInfoBlockDeleteManyArgs} args - Arguments to filter ProductInfoBlocks to delete.
     * @example
     * // Delete a few ProductInfoBlocks
     * const { count } = await prisma.productInfoBlock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductInfoBlockDeleteManyArgs>(args?: SelectSubset<T, ProductInfoBlockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductInfoBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductInfoBlockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductInfoBlocks
     * const productInfoBlock = await prisma.productInfoBlock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductInfoBlockUpdateManyArgs>(args: SelectSubset<T, ProductInfoBlockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductInfoBlocks and returns the data updated in the database.
     * @param {ProductInfoBlockUpdateManyAndReturnArgs} args - Arguments to update many ProductInfoBlocks.
     * @example
     * // Update many ProductInfoBlocks
     * const productInfoBlock = await prisma.productInfoBlock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductInfoBlocks and only return the `id`
     * const productInfoBlockWithIdOnly = await prisma.productInfoBlock.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductInfoBlockUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductInfoBlockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductInfoBlockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductInfoBlock.
     * @param {ProductInfoBlockUpsertArgs} args - Arguments to update or create a ProductInfoBlock.
     * @example
     * // Update or create a ProductInfoBlock
     * const productInfoBlock = await prisma.productInfoBlock.upsert({
     *   create: {
     *     // ... data to create a ProductInfoBlock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductInfoBlock we want to update
     *   }
     * })
     */
    upsert<T extends ProductInfoBlockUpsertArgs>(args: SelectSubset<T, ProductInfoBlockUpsertArgs<ExtArgs>>): Prisma__ProductInfoBlockClient<$Result.GetResult<Prisma.$ProductInfoBlockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductInfoBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductInfoBlockCountArgs} args - Arguments to filter ProductInfoBlocks to count.
     * @example
     * // Count the number of ProductInfoBlocks
     * const count = await prisma.productInfoBlock.count({
     *   where: {
     *     // ... the filter for the ProductInfoBlocks we want to count
     *   }
     * })
    **/
    count<T extends ProductInfoBlockCountArgs>(
      args?: Subset<T, ProductInfoBlockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductInfoBlockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductInfoBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductInfoBlockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductInfoBlockAggregateArgs>(args: Subset<T, ProductInfoBlockAggregateArgs>): Prisma.PrismaPromise<GetProductInfoBlockAggregateType<T>>

    /**
     * Group by ProductInfoBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductInfoBlockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductInfoBlockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductInfoBlockGroupByArgs['orderBy'] }
        : { orderBy?: ProductInfoBlockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductInfoBlockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductInfoBlockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductInfoBlock model
   */
  readonly fields: ProductInfoBlockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductInfoBlock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductInfoBlockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    images<T extends ProductInfoBlock$imagesArgs<ExtArgs> = {}>(args?: Subset<T, ProductInfoBlock$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductInfoBlock model
   */
  interface ProductInfoBlockFieldRefs {
    readonly id: FieldRef<"ProductInfoBlock", 'Int'>
    readonly blockOrder: FieldRef<"ProductInfoBlock", 'Int'>
    readonly align: FieldRef<"ProductInfoBlock", 'String'>
    readonly title: FieldRef<"ProductInfoBlock", 'String'>
    readonly content: FieldRef<"ProductInfoBlock", 'String'>
    readonly productId: FieldRef<"ProductInfoBlock", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProductInfoBlock findUnique
   */
  export type ProductInfoBlockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInfoBlock
     */
    select?: ProductInfoBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInfoBlock
     */
    omit?: ProductInfoBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInfoBlockInclude<ExtArgs> | null
    /**
     * Filter, which ProductInfoBlock to fetch.
     */
    where: ProductInfoBlockWhereUniqueInput
  }

  /**
   * ProductInfoBlock findUniqueOrThrow
   */
  export type ProductInfoBlockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInfoBlock
     */
    select?: ProductInfoBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInfoBlock
     */
    omit?: ProductInfoBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInfoBlockInclude<ExtArgs> | null
    /**
     * Filter, which ProductInfoBlock to fetch.
     */
    where: ProductInfoBlockWhereUniqueInput
  }

  /**
   * ProductInfoBlock findFirst
   */
  export type ProductInfoBlockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInfoBlock
     */
    select?: ProductInfoBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInfoBlock
     */
    omit?: ProductInfoBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInfoBlockInclude<ExtArgs> | null
    /**
     * Filter, which ProductInfoBlock to fetch.
     */
    where?: ProductInfoBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductInfoBlocks to fetch.
     */
    orderBy?: ProductInfoBlockOrderByWithRelationInput | ProductInfoBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductInfoBlocks.
     */
    cursor?: ProductInfoBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductInfoBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductInfoBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductInfoBlocks.
     */
    distinct?: ProductInfoBlockScalarFieldEnum | ProductInfoBlockScalarFieldEnum[]
  }

  /**
   * ProductInfoBlock findFirstOrThrow
   */
  export type ProductInfoBlockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInfoBlock
     */
    select?: ProductInfoBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInfoBlock
     */
    omit?: ProductInfoBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInfoBlockInclude<ExtArgs> | null
    /**
     * Filter, which ProductInfoBlock to fetch.
     */
    where?: ProductInfoBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductInfoBlocks to fetch.
     */
    orderBy?: ProductInfoBlockOrderByWithRelationInput | ProductInfoBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductInfoBlocks.
     */
    cursor?: ProductInfoBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductInfoBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductInfoBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductInfoBlocks.
     */
    distinct?: ProductInfoBlockScalarFieldEnum | ProductInfoBlockScalarFieldEnum[]
  }

  /**
   * ProductInfoBlock findMany
   */
  export type ProductInfoBlockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInfoBlock
     */
    select?: ProductInfoBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInfoBlock
     */
    omit?: ProductInfoBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInfoBlockInclude<ExtArgs> | null
    /**
     * Filter, which ProductInfoBlocks to fetch.
     */
    where?: ProductInfoBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductInfoBlocks to fetch.
     */
    orderBy?: ProductInfoBlockOrderByWithRelationInput | ProductInfoBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductInfoBlocks.
     */
    cursor?: ProductInfoBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductInfoBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductInfoBlocks.
     */
    skip?: number
    distinct?: ProductInfoBlockScalarFieldEnum | ProductInfoBlockScalarFieldEnum[]
  }

  /**
   * ProductInfoBlock create
   */
  export type ProductInfoBlockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInfoBlock
     */
    select?: ProductInfoBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInfoBlock
     */
    omit?: ProductInfoBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInfoBlockInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductInfoBlock.
     */
    data: XOR<ProductInfoBlockCreateInput, ProductInfoBlockUncheckedCreateInput>
  }

  /**
   * ProductInfoBlock createMany
   */
  export type ProductInfoBlockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductInfoBlocks.
     */
    data: ProductInfoBlockCreateManyInput | ProductInfoBlockCreateManyInput[]
  }

  /**
   * ProductInfoBlock createManyAndReturn
   */
  export type ProductInfoBlockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInfoBlock
     */
    select?: ProductInfoBlockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInfoBlock
     */
    omit?: ProductInfoBlockOmit<ExtArgs> | null
    /**
     * The data used to create many ProductInfoBlocks.
     */
    data: ProductInfoBlockCreateManyInput | ProductInfoBlockCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInfoBlockIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductInfoBlock update
   */
  export type ProductInfoBlockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInfoBlock
     */
    select?: ProductInfoBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInfoBlock
     */
    omit?: ProductInfoBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInfoBlockInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductInfoBlock.
     */
    data: XOR<ProductInfoBlockUpdateInput, ProductInfoBlockUncheckedUpdateInput>
    /**
     * Choose, which ProductInfoBlock to update.
     */
    where: ProductInfoBlockWhereUniqueInput
  }

  /**
   * ProductInfoBlock updateMany
   */
  export type ProductInfoBlockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductInfoBlocks.
     */
    data: XOR<ProductInfoBlockUpdateManyMutationInput, ProductInfoBlockUncheckedUpdateManyInput>
    /**
     * Filter which ProductInfoBlocks to update
     */
    where?: ProductInfoBlockWhereInput
    /**
     * Limit how many ProductInfoBlocks to update.
     */
    limit?: number
  }

  /**
   * ProductInfoBlock updateManyAndReturn
   */
  export type ProductInfoBlockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInfoBlock
     */
    select?: ProductInfoBlockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInfoBlock
     */
    omit?: ProductInfoBlockOmit<ExtArgs> | null
    /**
     * The data used to update ProductInfoBlocks.
     */
    data: XOR<ProductInfoBlockUpdateManyMutationInput, ProductInfoBlockUncheckedUpdateManyInput>
    /**
     * Filter which ProductInfoBlocks to update
     */
    where?: ProductInfoBlockWhereInput
    /**
     * Limit how many ProductInfoBlocks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInfoBlockIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductInfoBlock upsert
   */
  export type ProductInfoBlockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInfoBlock
     */
    select?: ProductInfoBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInfoBlock
     */
    omit?: ProductInfoBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInfoBlockInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductInfoBlock to update in case it exists.
     */
    where: ProductInfoBlockWhereUniqueInput
    /**
     * In case the ProductInfoBlock found by the `where` argument doesn't exist, create a new ProductInfoBlock with this data.
     */
    create: XOR<ProductInfoBlockCreateInput, ProductInfoBlockUncheckedCreateInput>
    /**
     * In case the ProductInfoBlock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductInfoBlockUpdateInput, ProductInfoBlockUncheckedUpdateInput>
  }

  /**
   * ProductInfoBlock delete
   */
  export type ProductInfoBlockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInfoBlock
     */
    select?: ProductInfoBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInfoBlock
     */
    omit?: ProductInfoBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInfoBlockInclude<ExtArgs> | null
    /**
     * Filter which ProductInfoBlock to delete.
     */
    where: ProductInfoBlockWhereUniqueInput
  }

  /**
   * ProductInfoBlock deleteMany
   */
  export type ProductInfoBlockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductInfoBlocks to delete
     */
    where?: ProductInfoBlockWhereInput
    /**
     * Limit how many ProductInfoBlocks to delete.
     */
    limit?: number
  }

  /**
   * ProductInfoBlock.images
   */
  export type ProductInfoBlock$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    where?: ProductImageWhereInput
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    cursor?: ProductImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * ProductInfoBlock without action
   */
  export type ProductInfoBlockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInfoBlock
     */
    select?: ProductInfoBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInfoBlock
     */
    omit?: ProductInfoBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInfoBlockInclude<ExtArgs> | null
  }


  /**
   * Model ProductImage
   */

  export type AggregateProductImage = {
    _count: ProductImageCountAggregateOutputType | null
    _avg: ProductImageAvgAggregateOutputType | null
    _sum: ProductImageSumAggregateOutputType | null
    _min: ProductImageMinAggregateOutputType | null
    _max: ProductImageMaxAggregateOutputType | null
  }

  export type ProductImageAvgAggregateOutputType = {
    id: number | null
    imageOrder: number | null
    infoBlockId: number | null
  }

  export type ProductImageSumAggregateOutputType = {
    id: number | null
    imageOrder: number | null
    infoBlockId: number | null
  }

  export type ProductImageMinAggregateOutputType = {
    id: number | null
    image: string | null
    imageOrder: number | null
    infoBlockId: number | null
  }

  export type ProductImageMaxAggregateOutputType = {
    id: number | null
    image: string | null
    imageOrder: number | null
    infoBlockId: number | null
  }

  export type ProductImageCountAggregateOutputType = {
    id: number
    image: number
    imageOrder: number
    infoBlockId: number
    _all: number
  }


  export type ProductImageAvgAggregateInputType = {
    id?: true
    imageOrder?: true
    infoBlockId?: true
  }

  export type ProductImageSumAggregateInputType = {
    id?: true
    imageOrder?: true
    infoBlockId?: true
  }

  export type ProductImageMinAggregateInputType = {
    id?: true
    image?: true
    imageOrder?: true
    infoBlockId?: true
  }

  export type ProductImageMaxAggregateInputType = {
    id?: true
    image?: true
    imageOrder?: true
    infoBlockId?: true
  }

  export type ProductImageCountAggregateInputType = {
    id?: true
    image?: true
    imageOrder?: true
    infoBlockId?: true
    _all?: true
  }

  export type ProductImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductImage to aggregate.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductImages
    **/
    _count?: true | ProductImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductImageMaxAggregateInputType
  }

  export type GetProductImageAggregateType<T extends ProductImageAggregateArgs> = {
        [P in keyof T & keyof AggregateProductImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductImage[P]>
      : GetScalarType<T[P], AggregateProductImage[P]>
  }




  export type ProductImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductImageWhereInput
    orderBy?: ProductImageOrderByWithAggregationInput | ProductImageOrderByWithAggregationInput[]
    by: ProductImageScalarFieldEnum[] | ProductImageScalarFieldEnum
    having?: ProductImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductImageCountAggregateInputType | true
    _avg?: ProductImageAvgAggregateInputType
    _sum?: ProductImageSumAggregateInputType
    _min?: ProductImageMinAggregateInputType
    _max?: ProductImageMaxAggregateInputType
  }

  export type ProductImageGroupByOutputType = {
    id: number
    image: string
    imageOrder: number
    infoBlockId: number
    _count: ProductImageCountAggregateOutputType | null
    _avg: ProductImageAvgAggregateOutputType | null
    _sum: ProductImageSumAggregateOutputType | null
    _min: ProductImageMinAggregateOutputType | null
    _max: ProductImageMaxAggregateOutputType | null
  }

  type GetProductImageGroupByPayload<T extends ProductImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductImageGroupByOutputType[P]>
            : GetScalarType<T[P], ProductImageGroupByOutputType[P]>
        }
      >
    >


  export type ProductImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    imageOrder?: boolean
    infoBlockId?: boolean
    infoBlock?: boolean | ProductInfoBlockDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productImage"]>

  export type ProductImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    imageOrder?: boolean
    infoBlockId?: boolean
    infoBlock?: boolean | ProductInfoBlockDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productImage"]>

  export type ProductImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    imageOrder?: boolean
    infoBlockId?: boolean
    infoBlock?: boolean | ProductInfoBlockDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productImage"]>

  export type ProductImageSelectScalar = {
    id?: boolean
    image?: boolean
    imageOrder?: boolean
    infoBlockId?: boolean
  }

  export type ProductImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "image" | "imageOrder" | "infoBlockId", ExtArgs["result"]["productImage"]>
  export type ProductImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    infoBlock?: boolean | ProductInfoBlockDefaultArgs<ExtArgs>
  }
  export type ProductImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    infoBlock?: boolean | ProductInfoBlockDefaultArgs<ExtArgs>
  }
  export type ProductImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    infoBlock?: boolean | ProductInfoBlockDefaultArgs<ExtArgs>
  }

  export type $ProductImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductImage"
    objects: {
      infoBlock: Prisma.$ProductInfoBlockPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      image: string
      imageOrder: number
      infoBlockId: number
    }, ExtArgs["result"]["productImage"]>
    composites: {}
  }

  type ProductImageGetPayload<S extends boolean | null | undefined | ProductImageDefaultArgs> = $Result.GetResult<Prisma.$ProductImagePayload, S>

  type ProductImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductImageCountAggregateInputType | true
    }

  export interface ProductImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductImage'], meta: { name: 'ProductImage' } }
    /**
     * Find zero or one ProductImage that matches the filter.
     * @param {ProductImageFindUniqueArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductImageFindUniqueArgs>(args: SelectSubset<T, ProductImageFindUniqueArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductImageFindUniqueOrThrowArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageFindFirstArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductImageFindFirstArgs>(args?: SelectSubset<T, ProductImageFindFirstArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageFindFirstOrThrowArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductImages
     * const productImages = await prisma.productImage.findMany()
     * 
     * // Get first 10 ProductImages
     * const productImages = await prisma.productImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productImageWithIdOnly = await prisma.productImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductImageFindManyArgs>(args?: SelectSubset<T, ProductImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductImage.
     * @param {ProductImageCreateArgs} args - Arguments to create a ProductImage.
     * @example
     * // Create one ProductImage
     * const ProductImage = await prisma.productImage.create({
     *   data: {
     *     // ... data to create a ProductImage
     *   }
     * })
     * 
     */
    create<T extends ProductImageCreateArgs>(args: SelectSubset<T, ProductImageCreateArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductImages.
     * @param {ProductImageCreateManyArgs} args - Arguments to create many ProductImages.
     * @example
     * // Create many ProductImages
     * const productImage = await prisma.productImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductImageCreateManyArgs>(args?: SelectSubset<T, ProductImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductImages and returns the data saved in the database.
     * @param {ProductImageCreateManyAndReturnArgs} args - Arguments to create many ProductImages.
     * @example
     * // Create many ProductImages
     * const productImage = await prisma.productImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductImages and only return the `id`
     * const productImageWithIdOnly = await prisma.productImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductImage.
     * @param {ProductImageDeleteArgs} args - Arguments to delete one ProductImage.
     * @example
     * // Delete one ProductImage
     * const ProductImage = await prisma.productImage.delete({
     *   where: {
     *     // ... filter to delete one ProductImage
     *   }
     * })
     * 
     */
    delete<T extends ProductImageDeleteArgs>(args: SelectSubset<T, ProductImageDeleteArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductImage.
     * @param {ProductImageUpdateArgs} args - Arguments to update one ProductImage.
     * @example
     * // Update one ProductImage
     * const productImage = await prisma.productImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductImageUpdateArgs>(args: SelectSubset<T, ProductImageUpdateArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductImages.
     * @param {ProductImageDeleteManyArgs} args - Arguments to filter ProductImages to delete.
     * @example
     * // Delete a few ProductImages
     * const { count } = await prisma.productImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductImageDeleteManyArgs>(args?: SelectSubset<T, ProductImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductImages
     * const productImage = await prisma.productImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductImageUpdateManyArgs>(args: SelectSubset<T, ProductImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductImages and returns the data updated in the database.
     * @param {ProductImageUpdateManyAndReturnArgs} args - Arguments to update many ProductImages.
     * @example
     * // Update many ProductImages
     * const productImage = await prisma.productImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductImages and only return the `id`
     * const productImageWithIdOnly = await prisma.productImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductImage.
     * @param {ProductImageUpsertArgs} args - Arguments to update or create a ProductImage.
     * @example
     * // Update or create a ProductImage
     * const productImage = await prisma.productImage.upsert({
     *   create: {
     *     // ... data to create a ProductImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductImage we want to update
     *   }
     * })
     */
    upsert<T extends ProductImageUpsertArgs>(args: SelectSubset<T, ProductImageUpsertArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageCountArgs} args - Arguments to filter ProductImages to count.
     * @example
     * // Count the number of ProductImages
     * const count = await prisma.productImage.count({
     *   where: {
     *     // ... the filter for the ProductImages we want to count
     *   }
     * })
    **/
    count<T extends ProductImageCountArgs>(
      args?: Subset<T, ProductImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductImageAggregateArgs>(args: Subset<T, ProductImageAggregateArgs>): Prisma.PrismaPromise<GetProductImageAggregateType<T>>

    /**
     * Group by ProductImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductImageGroupByArgs['orderBy'] }
        : { orderBy?: ProductImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductImage model
   */
  readonly fields: ProductImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    infoBlock<T extends ProductInfoBlockDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductInfoBlockDefaultArgs<ExtArgs>>): Prisma__ProductInfoBlockClient<$Result.GetResult<Prisma.$ProductInfoBlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductImage model
   */
  interface ProductImageFieldRefs {
    readonly id: FieldRef<"ProductImage", 'Int'>
    readonly image: FieldRef<"ProductImage", 'String'>
    readonly imageOrder: FieldRef<"ProductImage", 'Int'>
    readonly infoBlockId: FieldRef<"ProductImage", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProductImage findUnique
   */
  export type ProductImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage findUniqueOrThrow
   */
  export type ProductImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage findFirst
   */
  export type ProductImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductImages.
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductImages.
     */
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * ProductImage findFirstOrThrow
   */
  export type ProductImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductImages.
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductImages.
     */
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * ProductImage findMany
   */
  export type ProductImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImages to fetch.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductImages.
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * ProductImage create
   */
  export type ProductImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductImage.
     */
    data: XOR<ProductImageCreateInput, ProductImageUncheckedCreateInput>
  }

  /**
   * ProductImage createMany
   */
  export type ProductImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductImages.
     */
    data: ProductImageCreateManyInput | ProductImageCreateManyInput[]
  }

  /**
   * ProductImage createManyAndReturn
   */
  export type ProductImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * The data used to create many ProductImages.
     */
    data: ProductImageCreateManyInput | ProductImageCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductImage update
   */
  export type ProductImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductImage.
     */
    data: XOR<ProductImageUpdateInput, ProductImageUncheckedUpdateInput>
    /**
     * Choose, which ProductImage to update.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage updateMany
   */
  export type ProductImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductImages.
     */
    data: XOR<ProductImageUpdateManyMutationInput, ProductImageUncheckedUpdateManyInput>
    /**
     * Filter which ProductImages to update
     */
    where?: ProductImageWhereInput
    /**
     * Limit how many ProductImages to update.
     */
    limit?: number
  }

  /**
   * ProductImage updateManyAndReturn
   */
  export type ProductImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * The data used to update ProductImages.
     */
    data: XOR<ProductImageUpdateManyMutationInput, ProductImageUncheckedUpdateManyInput>
    /**
     * Filter which ProductImages to update
     */
    where?: ProductImageWhereInput
    /**
     * Limit how many ProductImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductImage upsert
   */
  export type ProductImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductImage to update in case it exists.
     */
    where: ProductImageWhereUniqueInput
    /**
     * In case the ProductImage found by the `where` argument doesn't exist, create a new ProductImage with this data.
     */
    create: XOR<ProductImageCreateInput, ProductImageUncheckedCreateInput>
    /**
     * In case the ProductImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductImageUpdateInput, ProductImageUncheckedUpdateInput>
  }

  /**
   * ProductImage delete
   */
  export type ProductImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter which ProductImage to delete.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage deleteMany
   */
  export type ProductImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductImages to delete
     */
    where?: ProductImageWhereInput
    /**
     * Limit how many ProductImages to delete.
     */
    limit?: number
  }

  /**
   * ProductImage without action
   */
  export type ProductImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
  }


  /**
   * Model ProductMainImage
   */

  export type AggregateProductMainImage = {
    _count: ProductMainImageCountAggregateOutputType | null
    _avg: ProductMainImageAvgAggregateOutputType | null
    _sum: ProductMainImageSumAggregateOutputType | null
    _min: ProductMainImageMinAggregateOutputType | null
    _max: ProductMainImageMaxAggregateOutputType | null
  }

  export type ProductMainImageAvgAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type ProductMainImageSumAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type ProductMainImageMinAggregateOutputType = {
    id: number | null
    image: string | null
    productId: number | null
  }

  export type ProductMainImageMaxAggregateOutputType = {
    id: number | null
    image: string | null
    productId: number | null
  }

  export type ProductMainImageCountAggregateOutputType = {
    id: number
    image: number
    productId: number
    _all: number
  }


  export type ProductMainImageAvgAggregateInputType = {
    id?: true
    productId?: true
  }

  export type ProductMainImageSumAggregateInputType = {
    id?: true
    productId?: true
  }

  export type ProductMainImageMinAggregateInputType = {
    id?: true
    image?: true
    productId?: true
  }

  export type ProductMainImageMaxAggregateInputType = {
    id?: true
    image?: true
    productId?: true
  }

  export type ProductMainImageCountAggregateInputType = {
    id?: true
    image?: true
    productId?: true
    _all?: true
  }

  export type ProductMainImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductMainImage to aggregate.
     */
    where?: ProductMainImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductMainImages to fetch.
     */
    orderBy?: ProductMainImageOrderByWithRelationInput | ProductMainImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductMainImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductMainImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductMainImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductMainImages
    **/
    _count?: true | ProductMainImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductMainImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductMainImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMainImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMainImageMaxAggregateInputType
  }

  export type GetProductMainImageAggregateType<T extends ProductMainImageAggregateArgs> = {
        [P in keyof T & keyof AggregateProductMainImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductMainImage[P]>
      : GetScalarType<T[P], AggregateProductMainImage[P]>
  }




  export type ProductMainImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductMainImageWhereInput
    orderBy?: ProductMainImageOrderByWithAggregationInput | ProductMainImageOrderByWithAggregationInput[]
    by: ProductMainImageScalarFieldEnum[] | ProductMainImageScalarFieldEnum
    having?: ProductMainImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductMainImageCountAggregateInputType | true
    _avg?: ProductMainImageAvgAggregateInputType
    _sum?: ProductMainImageSumAggregateInputType
    _min?: ProductMainImageMinAggregateInputType
    _max?: ProductMainImageMaxAggregateInputType
  }

  export type ProductMainImageGroupByOutputType = {
    id: number
    image: string
    productId: number
    _count: ProductMainImageCountAggregateOutputType | null
    _avg: ProductMainImageAvgAggregateOutputType | null
    _sum: ProductMainImageSumAggregateOutputType | null
    _min: ProductMainImageMinAggregateOutputType | null
    _max: ProductMainImageMaxAggregateOutputType | null
  }

  type GetProductMainImageGroupByPayload<T extends ProductMainImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductMainImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductMainImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductMainImageGroupByOutputType[P]>
            : GetScalarType<T[P], ProductMainImageGroupByOutputType[P]>
        }
      >
    >


  export type ProductMainImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productMainImage"]>

  export type ProductMainImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productMainImage"]>

  export type ProductMainImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productMainImage"]>

  export type ProductMainImageSelectScalar = {
    id?: boolean
    image?: boolean
    productId?: boolean
  }

  export type ProductMainImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "image" | "productId", ExtArgs["result"]["productMainImage"]>
  export type ProductMainImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductMainImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductMainImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductMainImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductMainImage"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      image: string
      productId: number
    }, ExtArgs["result"]["productMainImage"]>
    composites: {}
  }

  type ProductMainImageGetPayload<S extends boolean | null | undefined | ProductMainImageDefaultArgs> = $Result.GetResult<Prisma.$ProductMainImagePayload, S>

  type ProductMainImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductMainImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductMainImageCountAggregateInputType | true
    }

  export interface ProductMainImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductMainImage'], meta: { name: 'ProductMainImage' } }
    /**
     * Find zero or one ProductMainImage that matches the filter.
     * @param {ProductMainImageFindUniqueArgs} args - Arguments to find a ProductMainImage
     * @example
     * // Get one ProductMainImage
     * const productMainImage = await prisma.productMainImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductMainImageFindUniqueArgs>(args: SelectSubset<T, ProductMainImageFindUniqueArgs<ExtArgs>>): Prisma__ProductMainImageClient<$Result.GetResult<Prisma.$ProductMainImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductMainImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductMainImageFindUniqueOrThrowArgs} args - Arguments to find a ProductMainImage
     * @example
     * // Get one ProductMainImage
     * const productMainImage = await prisma.productMainImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductMainImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductMainImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductMainImageClient<$Result.GetResult<Prisma.$ProductMainImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductMainImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMainImageFindFirstArgs} args - Arguments to find a ProductMainImage
     * @example
     * // Get one ProductMainImage
     * const productMainImage = await prisma.productMainImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductMainImageFindFirstArgs>(args?: SelectSubset<T, ProductMainImageFindFirstArgs<ExtArgs>>): Prisma__ProductMainImageClient<$Result.GetResult<Prisma.$ProductMainImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductMainImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMainImageFindFirstOrThrowArgs} args - Arguments to find a ProductMainImage
     * @example
     * // Get one ProductMainImage
     * const productMainImage = await prisma.productMainImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductMainImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductMainImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductMainImageClient<$Result.GetResult<Prisma.$ProductMainImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductMainImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMainImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductMainImages
     * const productMainImages = await prisma.productMainImage.findMany()
     * 
     * // Get first 10 ProductMainImages
     * const productMainImages = await prisma.productMainImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productMainImageWithIdOnly = await prisma.productMainImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductMainImageFindManyArgs>(args?: SelectSubset<T, ProductMainImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductMainImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductMainImage.
     * @param {ProductMainImageCreateArgs} args - Arguments to create a ProductMainImage.
     * @example
     * // Create one ProductMainImage
     * const ProductMainImage = await prisma.productMainImage.create({
     *   data: {
     *     // ... data to create a ProductMainImage
     *   }
     * })
     * 
     */
    create<T extends ProductMainImageCreateArgs>(args: SelectSubset<T, ProductMainImageCreateArgs<ExtArgs>>): Prisma__ProductMainImageClient<$Result.GetResult<Prisma.$ProductMainImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductMainImages.
     * @param {ProductMainImageCreateManyArgs} args - Arguments to create many ProductMainImages.
     * @example
     * // Create many ProductMainImages
     * const productMainImage = await prisma.productMainImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductMainImageCreateManyArgs>(args?: SelectSubset<T, ProductMainImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductMainImages and returns the data saved in the database.
     * @param {ProductMainImageCreateManyAndReturnArgs} args - Arguments to create many ProductMainImages.
     * @example
     * // Create many ProductMainImages
     * const productMainImage = await prisma.productMainImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductMainImages and only return the `id`
     * const productMainImageWithIdOnly = await prisma.productMainImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductMainImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductMainImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductMainImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductMainImage.
     * @param {ProductMainImageDeleteArgs} args - Arguments to delete one ProductMainImage.
     * @example
     * // Delete one ProductMainImage
     * const ProductMainImage = await prisma.productMainImage.delete({
     *   where: {
     *     // ... filter to delete one ProductMainImage
     *   }
     * })
     * 
     */
    delete<T extends ProductMainImageDeleteArgs>(args: SelectSubset<T, ProductMainImageDeleteArgs<ExtArgs>>): Prisma__ProductMainImageClient<$Result.GetResult<Prisma.$ProductMainImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductMainImage.
     * @param {ProductMainImageUpdateArgs} args - Arguments to update one ProductMainImage.
     * @example
     * // Update one ProductMainImage
     * const productMainImage = await prisma.productMainImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductMainImageUpdateArgs>(args: SelectSubset<T, ProductMainImageUpdateArgs<ExtArgs>>): Prisma__ProductMainImageClient<$Result.GetResult<Prisma.$ProductMainImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductMainImages.
     * @param {ProductMainImageDeleteManyArgs} args - Arguments to filter ProductMainImages to delete.
     * @example
     * // Delete a few ProductMainImages
     * const { count } = await prisma.productMainImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductMainImageDeleteManyArgs>(args?: SelectSubset<T, ProductMainImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductMainImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMainImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductMainImages
     * const productMainImage = await prisma.productMainImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductMainImageUpdateManyArgs>(args: SelectSubset<T, ProductMainImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductMainImages and returns the data updated in the database.
     * @param {ProductMainImageUpdateManyAndReturnArgs} args - Arguments to update many ProductMainImages.
     * @example
     * // Update many ProductMainImages
     * const productMainImage = await prisma.productMainImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductMainImages and only return the `id`
     * const productMainImageWithIdOnly = await prisma.productMainImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductMainImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductMainImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductMainImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductMainImage.
     * @param {ProductMainImageUpsertArgs} args - Arguments to update or create a ProductMainImage.
     * @example
     * // Update or create a ProductMainImage
     * const productMainImage = await prisma.productMainImage.upsert({
     *   create: {
     *     // ... data to create a ProductMainImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductMainImage we want to update
     *   }
     * })
     */
    upsert<T extends ProductMainImageUpsertArgs>(args: SelectSubset<T, ProductMainImageUpsertArgs<ExtArgs>>): Prisma__ProductMainImageClient<$Result.GetResult<Prisma.$ProductMainImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductMainImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMainImageCountArgs} args - Arguments to filter ProductMainImages to count.
     * @example
     * // Count the number of ProductMainImages
     * const count = await prisma.productMainImage.count({
     *   where: {
     *     // ... the filter for the ProductMainImages we want to count
     *   }
     * })
    **/
    count<T extends ProductMainImageCountArgs>(
      args?: Subset<T, ProductMainImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductMainImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductMainImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMainImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductMainImageAggregateArgs>(args: Subset<T, ProductMainImageAggregateArgs>): Prisma.PrismaPromise<GetProductMainImageAggregateType<T>>

    /**
     * Group by ProductMainImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMainImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductMainImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductMainImageGroupByArgs['orderBy'] }
        : { orderBy?: ProductMainImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductMainImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductMainImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductMainImage model
   */
  readonly fields: ProductMainImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductMainImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductMainImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductMainImage model
   */
  interface ProductMainImageFieldRefs {
    readonly id: FieldRef<"ProductMainImage", 'Int'>
    readonly image: FieldRef<"ProductMainImage", 'String'>
    readonly productId: FieldRef<"ProductMainImage", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProductMainImage findUnique
   */
  export type ProductMainImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMainImage
     */
    select?: ProductMainImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMainImage
     */
    omit?: ProductMainImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMainImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductMainImage to fetch.
     */
    where: ProductMainImageWhereUniqueInput
  }

  /**
   * ProductMainImage findUniqueOrThrow
   */
  export type ProductMainImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMainImage
     */
    select?: ProductMainImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMainImage
     */
    omit?: ProductMainImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMainImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductMainImage to fetch.
     */
    where: ProductMainImageWhereUniqueInput
  }

  /**
   * ProductMainImage findFirst
   */
  export type ProductMainImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMainImage
     */
    select?: ProductMainImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMainImage
     */
    omit?: ProductMainImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMainImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductMainImage to fetch.
     */
    where?: ProductMainImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductMainImages to fetch.
     */
    orderBy?: ProductMainImageOrderByWithRelationInput | ProductMainImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductMainImages.
     */
    cursor?: ProductMainImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductMainImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductMainImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductMainImages.
     */
    distinct?: ProductMainImageScalarFieldEnum | ProductMainImageScalarFieldEnum[]
  }

  /**
   * ProductMainImage findFirstOrThrow
   */
  export type ProductMainImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMainImage
     */
    select?: ProductMainImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMainImage
     */
    omit?: ProductMainImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMainImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductMainImage to fetch.
     */
    where?: ProductMainImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductMainImages to fetch.
     */
    orderBy?: ProductMainImageOrderByWithRelationInput | ProductMainImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductMainImages.
     */
    cursor?: ProductMainImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductMainImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductMainImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductMainImages.
     */
    distinct?: ProductMainImageScalarFieldEnum | ProductMainImageScalarFieldEnum[]
  }

  /**
   * ProductMainImage findMany
   */
  export type ProductMainImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMainImage
     */
    select?: ProductMainImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMainImage
     */
    omit?: ProductMainImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMainImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductMainImages to fetch.
     */
    where?: ProductMainImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductMainImages to fetch.
     */
    orderBy?: ProductMainImageOrderByWithRelationInput | ProductMainImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductMainImages.
     */
    cursor?: ProductMainImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductMainImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductMainImages.
     */
    skip?: number
    distinct?: ProductMainImageScalarFieldEnum | ProductMainImageScalarFieldEnum[]
  }

  /**
   * ProductMainImage create
   */
  export type ProductMainImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMainImage
     */
    select?: ProductMainImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMainImage
     */
    omit?: ProductMainImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMainImageInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductMainImage.
     */
    data: XOR<ProductMainImageCreateInput, ProductMainImageUncheckedCreateInput>
  }

  /**
   * ProductMainImage createMany
   */
  export type ProductMainImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductMainImages.
     */
    data: ProductMainImageCreateManyInput | ProductMainImageCreateManyInput[]
  }

  /**
   * ProductMainImage createManyAndReturn
   */
  export type ProductMainImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMainImage
     */
    select?: ProductMainImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMainImage
     */
    omit?: ProductMainImageOmit<ExtArgs> | null
    /**
     * The data used to create many ProductMainImages.
     */
    data: ProductMainImageCreateManyInput | ProductMainImageCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMainImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductMainImage update
   */
  export type ProductMainImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMainImage
     */
    select?: ProductMainImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMainImage
     */
    omit?: ProductMainImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMainImageInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductMainImage.
     */
    data: XOR<ProductMainImageUpdateInput, ProductMainImageUncheckedUpdateInput>
    /**
     * Choose, which ProductMainImage to update.
     */
    where: ProductMainImageWhereUniqueInput
  }

  /**
   * ProductMainImage updateMany
   */
  export type ProductMainImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductMainImages.
     */
    data: XOR<ProductMainImageUpdateManyMutationInput, ProductMainImageUncheckedUpdateManyInput>
    /**
     * Filter which ProductMainImages to update
     */
    where?: ProductMainImageWhereInput
    /**
     * Limit how many ProductMainImages to update.
     */
    limit?: number
  }

  /**
   * ProductMainImage updateManyAndReturn
   */
  export type ProductMainImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMainImage
     */
    select?: ProductMainImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMainImage
     */
    omit?: ProductMainImageOmit<ExtArgs> | null
    /**
     * The data used to update ProductMainImages.
     */
    data: XOR<ProductMainImageUpdateManyMutationInput, ProductMainImageUncheckedUpdateManyInput>
    /**
     * Filter which ProductMainImages to update
     */
    where?: ProductMainImageWhereInput
    /**
     * Limit how many ProductMainImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMainImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductMainImage upsert
   */
  export type ProductMainImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMainImage
     */
    select?: ProductMainImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMainImage
     */
    omit?: ProductMainImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMainImageInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductMainImage to update in case it exists.
     */
    where: ProductMainImageWhereUniqueInput
    /**
     * In case the ProductMainImage found by the `where` argument doesn't exist, create a new ProductMainImage with this data.
     */
    create: XOR<ProductMainImageCreateInput, ProductMainImageUncheckedCreateInput>
    /**
     * In case the ProductMainImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductMainImageUpdateInput, ProductMainImageUncheckedUpdateInput>
  }

  /**
   * ProductMainImage delete
   */
  export type ProductMainImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMainImage
     */
    select?: ProductMainImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMainImage
     */
    omit?: ProductMainImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMainImageInclude<ExtArgs> | null
    /**
     * Filter which ProductMainImage to delete.
     */
    where: ProductMainImageWhereUniqueInput
  }

  /**
   * ProductMainImage deleteMany
   */
  export type ProductMainImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductMainImages to delete
     */
    where?: ProductMainImageWhereInput
    /**
     * Limit how many ProductMainImages to delete.
     */
    limit?: number
  }

  /**
   * ProductMainImage without action
   */
  export type ProductMainImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMainImage
     */
    select?: ProductMainImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMainImage
     */
    omit?: ProductMainImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMainImageInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    addressId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    addressId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    lastname: string | null
    patronymic: string | null
    email: string | null
    birthDate: Date | null
    phoneNumber: string | null
    password: string | null
    addressId: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    lastname: string | null
    patronymic: string | null
    email: string | null
    birthDate: Date | null
    phoneNumber: string | null
    password: string | null
    addressId: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    lastname: number
    patronymic: number
    email: number
    birthDate: number
    phoneNumber: number
    password: number
    addressId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    addressId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    addressId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    lastname?: true
    patronymic?: true
    email?: true
    birthDate?: true
    phoneNumber?: true
    password?: true
    addressId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    lastname?: true
    patronymic?: true
    email?: true
    birthDate?: true
    phoneNumber?: true
    password?: true
    addressId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    lastname?: true
    patronymic?: true
    email?: true
    birthDate?: true
    phoneNumber?: true
    password?: true
    addressId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    lastname: string
    patronymic: string
    email: string
    birthDate: Date
    phoneNumber: string
    password: string
    addressId: number | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    lastname?: boolean
    patronymic?: boolean
    email?: boolean
    birthDate?: boolean
    phoneNumber?: boolean
    password?: boolean
    addressId?: boolean
    address?: boolean | User$addressArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    lastname?: boolean
    patronymic?: boolean
    email?: boolean
    birthDate?: boolean
    phoneNumber?: boolean
    password?: boolean
    addressId?: boolean
    address?: boolean | User$addressArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    lastname?: boolean
    patronymic?: boolean
    email?: boolean
    birthDate?: boolean
    phoneNumber?: boolean
    password?: boolean
    addressId?: boolean
    address?: boolean | User$addressArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    lastname?: boolean
    patronymic?: boolean
    email?: boolean
    birthDate?: boolean
    phoneNumber?: boolean
    password?: boolean
    addressId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "lastname" | "patronymic" | "email" | "birthDate" | "phoneNumber" | "password" | "addressId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | User$addressArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | User$addressArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | User$addressArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      address: Prisma.$AddressPayload<ExtArgs> | null
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      lastname: string
      patronymic: string
      email: string
      birthDate: Date
      phoneNumber: string
      password: string
      addressId: number | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    address<T extends User$addressArgs<ExtArgs> = {}>(args?: Subset<T, User$addressArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly lastname: FieldRef<"User", 'String'>
    readonly patronymic: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly birthDate: FieldRef<"User", 'DateTime'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly addressId: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.address
   */
  export type User$addressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
  }

  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    id: number | null
  }

  export type AddressSumAggregateOutputType = {
    id: number | null
  }

  export type AddressMinAggregateOutputType = {
    id: number | null
    city: string | null
    street: string | null
    house: string | null
    flat: string | null
    entrance: string | null
  }

  export type AddressMaxAggregateOutputType = {
    id: number | null
    city: string | null
    street: string | null
    house: string | null
    flat: string | null
    entrance: string | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    city: number
    street: number
    house: number
    flat: number
    entrance: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    id?: true
  }

  export type AddressSumAggregateInputType = {
    id?: true
  }

  export type AddressMinAggregateInputType = {
    id?: true
    city?: true
    street?: true
    house?: true
    flat?: true
    entrance?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    city?: true
    street?: true
    house?: true
    flat?: true
    entrance?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    city?: true
    street?: true
    house?: true
    flat?: true
    entrance?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: number
    city: string
    street: string
    house: string
    flat: string
    entrance: string
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    city?: boolean
    street?: boolean
    house?: boolean
    flat?: boolean
    entrance?: boolean
    userId?: boolean | Address$userIdArgs<ExtArgs>
    order?: boolean | Address$orderArgs<ExtArgs>
    _count?: boolean | AddressCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    city?: boolean
    street?: boolean
    house?: boolean
    flat?: boolean
    entrance?: boolean
  }, ExtArgs["result"]["address"]>

  export type AddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    city?: boolean
    street?: boolean
    house?: boolean
    flat?: boolean
    entrance?: boolean
  }, ExtArgs["result"]["address"]>

  export type AddressSelectScalar = {
    id?: boolean
    city?: boolean
    street?: boolean
    house?: boolean
    flat?: boolean
    entrance?: boolean
  }

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "city" | "street" | "house" | "flat" | "entrance", ExtArgs["result"]["address"]>
  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userId?: boolean | Address$userIdArgs<ExtArgs>
    order?: boolean | Address$orderArgs<ExtArgs>
    _count?: boolean | AddressCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      userId: Prisma.$UserPayload<ExtArgs>[]
      order: Prisma.$OrderPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      city: string
      street: string
      house: string
      flat: string
      entrance: string
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {AddressCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddressCreateManyAndReturnArgs>(args?: SelectSubset<T, AddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {AddressUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AddressUpdateManyAndReturnArgs>(args: SelectSubset<T, AddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userId<T extends Address$userIdArgs<ExtArgs> = {}>(args?: Subset<T, Address$userIdArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    order<T extends Address$orderArgs<ExtArgs> = {}>(args?: Subset<T, Address$orderArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Address model
   */
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'Int'>
    readonly city: FieldRef<"Address", 'String'>
    readonly street: FieldRef<"Address", 'String'>
    readonly house: FieldRef<"Address", 'String'>
    readonly flat: FieldRef<"Address", 'String'>
    readonly entrance: FieldRef<"Address", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
  }

  /**
   * Address createManyAndReturn
   */
  export type AddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address updateManyAndReturn
   */
  export type AddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number
  }

  /**
   * Address.userId
   */
  export type Address$userIdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Address.order
   */
  export type Address$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    totalDiscount: number | null
    trackingNumber: number | null
    totalPrice: number | null
    countOfProducts: number | null
    userId: number | null
    addressId: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    totalDiscount: number | null
    trackingNumber: number | null
    totalPrice: number | null
    countOfProducts: number | null
    userId: number | null
    addressId: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    username: string | null
    lastname: string | null
    patronymic: string | null
    totalDiscount: number | null
    payment: string | null
    trackingNumber: number | null
    totalPrice: number | null
    countOfProducts: number | null
    orderDate: Date | null
    userId: number | null
    addressId: number | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    username: string | null
    lastname: string | null
    patronymic: string | null
    totalDiscount: number | null
    payment: string | null
    trackingNumber: number | null
    totalPrice: number | null
    countOfProducts: number | null
    orderDate: Date | null
    userId: number | null
    addressId: number | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    username: number
    lastname: number
    patronymic: number
    totalDiscount: number
    payment: number
    trackingNumber: number
    totalPrice: number
    countOfProducts: number
    orderDate: number
    userId: number
    addressId: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    totalDiscount?: true
    trackingNumber?: true
    totalPrice?: true
    countOfProducts?: true
    userId?: true
    addressId?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    totalDiscount?: true
    trackingNumber?: true
    totalPrice?: true
    countOfProducts?: true
    userId?: true
    addressId?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    username?: true
    lastname?: true
    patronymic?: true
    totalDiscount?: true
    payment?: true
    trackingNumber?: true
    totalPrice?: true
    countOfProducts?: true
    orderDate?: true
    userId?: true
    addressId?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    username?: true
    lastname?: true
    patronymic?: true
    totalDiscount?: true
    payment?: true
    trackingNumber?: true
    totalPrice?: true
    countOfProducts?: true
    orderDate?: true
    userId?: true
    addressId?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    username?: true
    lastname?: true
    patronymic?: true
    totalDiscount?: true
    payment?: true
    trackingNumber?: true
    totalPrice?: true
    countOfProducts?: true
    orderDate?: true
    userId?: true
    addressId?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    username: string
    lastname: string
    patronymic: string
    totalDiscount: number
    payment: string
    trackingNumber: number
    totalPrice: number
    countOfProducts: number
    orderDate: Date
    userId: number
    addressId: number
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    lastname?: boolean
    patronymic?: boolean
    totalDiscount?: boolean
    payment?: boolean
    trackingNumber?: boolean
    totalPrice?: boolean
    countOfProducts?: boolean
    orderDate?: boolean
    userId?: boolean
    addressId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    address?: boolean | AddressDefaultArgs<ExtArgs>
    products?: boolean | Order$productsArgs<ExtArgs>
    categories?: boolean | Order$categoriesArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    lastname?: boolean
    patronymic?: boolean
    totalDiscount?: boolean
    payment?: boolean
    trackingNumber?: boolean
    totalPrice?: boolean
    countOfProducts?: boolean
    orderDate?: boolean
    userId?: boolean
    addressId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    address?: boolean | AddressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    lastname?: boolean
    patronymic?: boolean
    totalDiscount?: boolean
    payment?: boolean
    trackingNumber?: boolean
    totalPrice?: boolean
    countOfProducts?: boolean
    orderDate?: boolean
    userId?: boolean
    addressId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    address?: boolean | AddressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    username?: boolean
    lastname?: boolean
    patronymic?: boolean
    totalDiscount?: boolean
    payment?: boolean
    trackingNumber?: boolean
    totalPrice?: boolean
    countOfProducts?: boolean
    orderDate?: boolean
    userId?: boolean
    addressId?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "lastname" | "patronymic" | "totalDiscount" | "payment" | "trackingNumber" | "totalPrice" | "countOfProducts" | "orderDate" | "userId" | "addressId", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    address?: boolean | AddressDefaultArgs<ExtArgs>
    products?: boolean | Order$productsArgs<ExtArgs>
    categories?: boolean | Order$categoriesArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    address?: boolean | AddressDefaultArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    address?: boolean | AddressDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      address: Prisma.$AddressPayload<ExtArgs>
      products: Prisma.$OrderProductsPayload<ExtArgs>[]
      categories: Prisma.$CategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      lastname: string
      patronymic: string
      totalDiscount: number
      payment: string
      trackingNumber: number
      totalPrice: number
      countOfProducts: number
      orderDate: Date
      userId: number
      addressId: number
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    address<T extends AddressDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AddressDefaultArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    products<T extends Order$productsArgs<ExtArgs> = {}>(args?: Subset<T, Order$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories<T extends Order$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Order$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'Int'>
    readonly username: FieldRef<"Order", 'String'>
    readonly lastname: FieldRef<"Order", 'String'>
    readonly patronymic: FieldRef<"Order", 'String'>
    readonly totalDiscount: FieldRef<"Order", 'Int'>
    readonly payment: FieldRef<"Order", 'String'>
    readonly trackingNumber: FieldRef<"Order", 'Int'>
    readonly totalPrice: FieldRef<"Order", 'Int'>
    readonly countOfProducts: FieldRef<"Order", 'Int'>
    readonly orderDate: FieldRef<"Order", 'DateTime'>
    readonly userId: FieldRef<"Order", 'Int'>
    readonly addressId: FieldRef<"Order", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.products
   */
  export type Order$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProducts
     */
    select?: OrderProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProducts
     */
    omit?: OrderProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductsInclude<ExtArgs> | null
    where?: OrderProductsWhereInput
    orderBy?: OrderProductsOrderByWithRelationInput | OrderProductsOrderByWithRelationInput[]
    cursor?: OrderProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderProductsScalarFieldEnum | OrderProductsScalarFieldEnum[]
  }

  /**
   * Order.categories
   */
  export type Order$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model OrderProducts
   */

  export type AggregateOrderProducts = {
    _count: OrderProductsCountAggregateOutputType | null
    _avg: OrderProductsAvgAggregateOutputType | null
    _sum: OrderProductsSumAggregateOutputType | null
    _min: OrderProductsMinAggregateOutputType | null
    _max: OrderProductsMaxAggregateOutputType | null
  }

  export type OrderProductsAvgAggregateOutputType = {
    OrderId: number | null
    productId: number | null
    count_of_product: number | null
    price: number | null
    discount: number | null
  }

  export type OrderProductsSumAggregateOutputType = {
    OrderId: number | null
    productId: number | null
    count_of_product: number | null
    price: number | null
    discount: number | null
  }

  export type OrderProductsMinAggregateOutputType = {
    OrderId: number | null
    productId: number | null
    count_of_product: number | null
    price: number | null
    discount: number | null
  }

  export type OrderProductsMaxAggregateOutputType = {
    OrderId: number | null
    productId: number | null
    count_of_product: number | null
    price: number | null
    discount: number | null
  }

  export type OrderProductsCountAggregateOutputType = {
    OrderId: number
    productId: number
    count_of_product: number
    price: number
    discount: number
    _all: number
  }


  export type OrderProductsAvgAggregateInputType = {
    OrderId?: true
    productId?: true
    count_of_product?: true
    price?: true
    discount?: true
  }

  export type OrderProductsSumAggregateInputType = {
    OrderId?: true
    productId?: true
    count_of_product?: true
    price?: true
    discount?: true
  }

  export type OrderProductsMinAggregateInputType = {
    OrderId?: true
    productId?: true
    count_of_product?: true
    price?: true
    discount?: true
  }

  export type OrderProductsMaxAggregateInputType = {
    OrderId?: true
    productId?: true
    count_of_product?: true
    price?: true
    discount?: true
  }

  export type OrderProductsCountAggregateInputType = {
    OrderId?: true
    productId?: true
    count_of_product?: true
    price?: true
    discount?: true
    _all?: true
  }

  export type OrderProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderProducts to aggregate.
     */
    where?: OrderProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderProducts to fetch.
     */
    orderBy?: OrderProductsOrderByWithRelationInput | OrderProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderProducts
    **/
    _count?: true | OrderProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderProductsMaxAggregateInputType
  }

  export type GetOrderProductsAggregateType<T extends OrderProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderProducts[P]>
      : GetScalarType<T[P], AggregateOrderProducts[P]>
  }




  export type OrderProductsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderProductsWhereInput
    orderBy?: OrderProductsOrderByWithAggregationInput | OrderProductsOrderByWithAggregationInput[]
    by: OrderProductsScalarFieldEnum[] | OrderProductsScalarFieldEnum
    having?: OrderProductsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderProductsCountAggregateInputType | true
    _avg?: OrderProductsAvgAggregateInputType
    _sum?: OrderProductsSumAggregateInputType
    _min?: OrderProductsMinAggregateInputType
    _max?: OrderProductsMaxAggregateInputType
  }

  export type OrderProductsGroupByOutputType = {
    OrderId: number
    productId: number
    count_of_product: number
    price: number
    discount: number
    _count: OrderProductsCountAggregateOutputType | null
    _avg: OrderProductsAvgAggregateOutputType | null
    _sum: OrderProductsSumAggregateOutputType | null
    _min: OrderProductsMinAggregateOutputType | null
    _max: OrderProductsMaxAggregateOutputType | null
  }

  type GetOrderProductsGroupByPayload<T extends OrderProductsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderProductsGroupByOutputType[P]>
            : GetScalarType<T[P], OrderProductsGroupByOutputType[P]>
        }
      >
    >


  export type OrderProductsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    OrderId?: boolean
    productId?: boolean
    count_of_product?: boolean
    price?: boolean
    discount?: boolean
    Order?: boolean | OrderDefaultArgs<ExtArgs>
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderProducts"]>

  export type OrderProductsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    OrderId?: boolean
    productId?: boolean
    count_of_product?: boolean
    price?: boolean
    discount?: boolean
    Order?: boolean | OrderDefaultArgs<ExtArgs>
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderProducts"]>

  export type OrderProductsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    OrderId?: boolean
    productId?: boolean
    count_of_product?: boolean
    price?: boolean
    discount?: boolean
    Order?: boolean | OrderDefaultArgs<ExtArgs>
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderProducts"]>

  export type OrderProductsSelectScalar = {
    OrderId?: boolean
    productId?: boolean
    count_of_product?: boolean
    price?: boolean
    discount?: boolean
  }

  export type OrderProductsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"OrderId" | "productId" | "count_of_product" | "price" | "discount", ExtArgs["result"]["orderProducts"]>
  export type OrderProductsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | OrderDefaultArgs<ExtArgs>
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type OrderProductsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | OrderDefaultArgs<ExtArgs>
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type OrderProductsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | OrderDefaultArgs<ExtArgs>
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $OrderProductsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderProducts"
    objects: {
      Order: Prisma.$OrderPayload<ExtArgs>
      Product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      OrderId: number
      productId: number
      count_of_product: number
      price: number
      discount: number
    }, ExtArgs["result"]["orderProducts"]>
    composites: {}
  }

  type OrderProductsGetPayload<S extends boolean | null | undefined | OrderProductsDefaultArgs> = $Result.GetResult<Prisma.$OrderProductsPayload, S>

  type OrderProductsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderProductsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderProductsCountAggregateInputType | true
    }

  export interface OrderProductsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderProducts'], meta: { name: 'OrderProducts' } }
    /**
     * Find zero or one OrderProducts that matches the filter.
     * @param {OrderProductsFindUniqueArgs} args - Arguments to find a OrderProducts
     * @example
     * // Get one OrderProducts
     * const orderProducts = await prisma.orderProducts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderProductsFindUniqueArgs>(args: SelectSubset<T, OrderProductsFindUniqueArgs<ExtArgs>>): Prisma__OrderProductsClient<$Result.GetResult<Prisma.$OrderProductsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderProducts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderProductsFindUniqueOrThrowArgs} args - Arguments to find a OrderProducts
     * @example
     * // Get one OrderProducts
     * const orderProducts = await prisma.orderProducts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderProductsFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderProductsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderProductsClient<$Result.GetResult<Prisma.$OrderProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderProductsFindFirstArgs} args - Arguments to find a OrderProducts
     * @example
     * // Get one OrderProducts
     * const orderProducts = await prisma.orderProducts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderProductsFindFirstArgs>(args?: SelectSubset<T, OrderProductsFindFirstArgs<ExtArgs>>): Prisma__OrderProductsClient<$Result.GetResult<Prisma.$OrderProductsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderProducts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderProductsFindFirstOrThrowArgs} args - Arguments to find a OrderProducts
     * @example
     * // Get one OrderProducts
     * const orderProducts = await prisma.orderProducts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderProductsFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderProductsFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderProductsClient<$Result.GetResult<Prisma.$OrderProductsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderProductsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderProducts
     * const orderProducts = await prisma.orderProducts.findMany()
     * 
     * // Get first 10 OrderProducts
     * const orderProducts = await prisma.orderProducts.findMany({ take: 10 })
     * 
     * // Only select the `OrderId`
     * const orderProductsWithOrderIdOnly = await prisma.orderProducts.findMany({ select: { OrderId: true } })
     * 
     */
    findMany<T extends OrderProductsFindManyArgs>(args?: SelectSubset<T, OrderProductsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderProducts.
     * @param {OrderProductsCreateArgs} args - Arguments to create a OrderProducts.
     * @example
     * // Create one OrderProducts
     * const OrderProducts = await prisma.orderProducts.create({
     *   data: {
     *     // ... data to create a OrderProducts
     *   }
     * })
     * 
     */
    create<T extends OrderProductsCreateArgs>(args: SelectSubset<T, OrderProductsCreateArgs<ExtArgs>>): Prisma__OrderProductsClient<$Result.GetResult<Prisma.$OrderProductsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderProducts.
     * @param {OrderProductsCreateManyArgs} args - Arguments to create many OrderProducts.
     * @example
     * // Create many OrderProducts
     * const orderProducts = await prisma.orderProducts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderProductsCreateManyArgs>(args?: SelectSubset<T, OrderProductsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderProducts and returns the data saved in the database.
     * @param {OrderProductsCreateManyAndReturnArgs} args - Arguments to create many OrderProducts.
     * @example
     * // Create many OrderProducts
     * const orderProducts = await prisma.orderProducts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderProducts and only return the `OrderId`
     * const orderProductsWithOrderIdOnly = await prisma.orderProducts.createManyAndReturn({
     *   select: { OrderId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderProductsCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderProductsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderProductsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderProducts.
     * @param {OrderProductsDeleteArgs} args - Arguments to delete one OrderProducts.
     * @example
     * // Delete one OrderProducts
     * const OrderProducts = await prisma.orderProducts.delete({
     *   where: {
     *     // ... filter to delete one OrderProducts
     *   }
     * })
     * 
     */
    delete<T extends OrderProductsDeleteArgs>(args: SelectSubset<T, OrderProductsDeleteArgs<ExtArgs>>): Prisma__OrderProductsClient<$Result.GetResult<Prisma.$OrderProductsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderProducts.
     * @param {OrderProductsUpdateArgs} args - Arguments to update one OrderProducts.
     * @example
     * // Update one OrderProducts
     * const orderProducts = await prisma.orderProducts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderProductsUpdateArgs>(args: SelectSubset<T, OrderProductsUpdateArgs<ExtArgs>>): Prisma__OrderProductsClient<$Result.GetResult<Prisma.$OrderProductsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderProducts.
     * @param {OrderProductsDeleteManyArgs} args - Arguments to filter OrderProducts to delete.
     * @example
     * // Delete a few OrderProducts
     * const { count } = await prisma.orderProducts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderProductsDeleteManyArgs>(args?: SelectSubset<T, OrderProductsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderProductsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderProducts
     * const orderProducts = await prisma.orderProducts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderProductsUpdateManyArgs>(args: SelectSubset<T, OrderProductsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderProducts and returns the data updated in the database.
     * @param {OrderProductsUpdateManyAndReturnArgs} args - Arguments to update many OrderProducts.
     * @example
     * // Update many OrderProducts
     * const orderProducts = await prisma.orderProducts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderProducts and only return the `OrderId`
     * const orderProductsWithOrderIdOnly = await prisma.orderProducts.updateManyAndReturn({
     *   select: { OrderId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderProductsUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderProductsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderProductsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderProducts.
     * @param {OrderProductsUpsertArgs} args - Arguments to update or create a OrderProducts.
     * @example
     * // Update or create a OrderProducts
     * const orderProducts = await prisma.orderProducts.upsert({
     *   create: {
     *     // ... data to create a OrderProducts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderProducts we want to update
     *   }
     * })
     */
    upsert<T extends OrderProductsUpsertArgs>(args: SelectSubset<T, OrderProductsUpsertArgs<ExtArgs>>): Prisma__OrderProductsClient<$Result.GetResult<Prisma.$OrderProductsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderProductsCountArgs} args - Arguments to filter OrderProducts to count.
     * @example
     * // Count the number of OrderProducts
     * const count = await prisma.orderProducts.count({
     *   where: {
     *     // ... the filter for the OrderProducts we want to count
     *   }
     * })
    **/
    count<T extends OrderProductsCountArgs>(
      args?: Subset<T, OrderProductsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderProductsAggregateArgs>(args: Subset<T, OrderProductsAggregateArgs>): Prisma.PrismaPromise<GetOrderProductsAggregateType<T>>

    /**
     * Group by OrderProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderProductsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderProductsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderProductsGroupByArgs['orderBy'] }
        : { orderBy?: OrderProductsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderProductsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderProducts model
   */
  readonly fields: OrderProductsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderProducts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderProductsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderProducts model
   */
  interface OrderProductsFieldRefs {
    readonly OrderId: FieldRef<"OrderProducts", 'Int'>
    readonly productId: FieldRef<"OrderProducts", 'Int'>
    readonly count_of_product: FieldRef<"OrderProducts", 'Int'>
    readonly price: FieldRef<"OrderProducts", 'Int'>
    readonly discount: FieldRef<"OrderProducts", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * OrderProducts findUnique
   */
  export type OrderProductsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProducts
     */
    select?: OrderProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProducts
     */
    omit?: OrderProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductsInclude<ExtArgs> | null
    /**
     * Filter, which OrderProducts to fetch.
     */
    where: OrderProductsWhereUniqueInput
  }

  /**
   * OrderProducts findUniqueOrThrow
   */
  export type OrderProductsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProducts
     */
    select?: OrderProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProducts
     */
    omit?: OrderProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductsInclude<ExtArgs> | null
    /**
     * Filter, which OrderProducts to fetch.
     */
    where: OrderProductsWhereUniqueInput
  }

  /**
   * OrderProducts findFirst
   */
  export type OrderProductsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProducts
     */
    select?: OrderProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProducts
     */
    omit?: OrderProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductsInclude<ExtArgs> | null
    /**
     * Filter, which OrderProducts to fetch.
     */
    where?: OrderProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderProducts to fetch.
     */
    orderBy?: OrderProductsOrderByWithRelationInput | OrderProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderProducts.
     */
    cursor?: OrderProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderProducts.
     */
    distinct?: OrderProductsScalarFieldEnum | OrderProductsScalarFieldEnum[]
  }

  /**
   * OrderProducts findFirstOrThrow
   */
  export type OrderProductsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProducts
     */
    select?: OrderProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProducts
     */
    omit?: OrderProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductsInclude<ExtArgs> | null
    /**
     * Filter, which OrderProducts to fetch.
     */
    where?: OrderProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderProducts to fetch.
     */
    orderBy?: OrderProductsOrderByWithRelationInput | OrderProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderProducts.
     */
    cursor?: OrderProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderProducts.
     */
    distinct?: OrderProductsScalarFieldEnum | OrderProductsScalarFieldEnum[]
  }

  /**
   * OrderProducts findMany
   */
  export type OrderProductsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProducts
     */
    select?: OrderProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProducts
     */
    omit?: OrderProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductsInclude<ExtArgs> | null
    /**
     * Filter, which OrderProducts to fetch.
     */
    where?: OrderProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderProducts to fetch.
     */
    orderBy?: OrderProductsOrderByWithRelationInput | OrderProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderProducts.
     */
    cursor?: OrderProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderProducts.
     */
    skip?: number
    distinct?: OrderProductsScalarFieldEnum | OrderProductsScalarFieldEnum[]
  }

  /**
   * OrderProducts create
   */
  export type OrderProductsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProducts
     */
    select?: OrderProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProducts
     */
    omit?: OrderProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductsInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderProducts.
     */
    data: XOR<OrderProductsCreateInput, OrderProductsUncheckedCreateInput>
  }

  /**
   * OrderProducts createMany
   */
  export type OrderProductsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderProducts.
     */
    data: OrderProductsCreateManyInput | OrderProductsCreateManyInput[]
  }

  /**
   * OrderProducts createManyAndReturn
   */
  export type OrderProductsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProducts
     */
    select?: OrderProductsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProducts
     */
    omit?: OrderProductsOmit<ExtArgs> | null
    /**
     * The data used to create many OrderProducts.
     */
    data: OrderProductsCreateManyInput | OrderProductsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderProducts update
   */
  export type OrderProductsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProducts
     */
    select?: OrderProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProducts
     */
    omit?: OrderProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductsInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderProducts.
     */
    data: XOR<OrderProductsUpdateInput, OrderProductsUncheckedUpdateInput>
    /**
     * Choose, which OrderProducts to update.
     */
    where: OrderProductsWhereUniqueInput
  }

  /**
   * OrderProducts updateMany
   */
  export type OrderProductsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderProducts.
     */
    data: XOR<OrderProductsUpdateManyMutationInput, OrderProductsUncheckedUpdateManyInput>
    /**
     * Filter which OrderProducts to update
     */
    where?: OrderProductsWhereInput
    /**
     * Limit how many OrderProducts to update.
     */
    limit?: number
  }

  /**
   * OrderProducts updateManyAndReturn
   */
  export type OrderProductsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProducts
     */
    select?: OrderProductsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProducts
     */
    omit?: OrderProductsOmit<ExtArgs> | null
    /**
     * The data used to update OrderProducts.
     */
    data: XOR<OrderProductsUpdateManyMutationInput, OrderProductsUncheckedUpdateManyInput>
    /**
     * Filter which OrderProducts to update
     */
    where?: OrderProductsWhereInput
    /**
     * Limit how many OrderProducts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderProducts upsert
   */
  export type OrderProductsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProducts
     */
    select?: OrderProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProducts
     */
    omit?: OrderProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductsInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderProducts to update in case it exists.
     */
    where: OrderProductsWhereUniqueInput
    /**
     * In case the OrderProducts found by the `where` argument doesn't exist, create a new OrderProducts with this data.
     */
    create: XOR<OrderProductsCreateInput, OrderProductsUncheckedCreateInput>
    /**
     * In case the OrderProducts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderProductsUpdateInput, OrderProductsUncheckedUpdateInput>
  }

  /**
   * OrderProducts delete
   */
  export type OrderProductsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProducts
     */
    select?: OrderProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProducts
     */
    omit?: OrderProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductsInclude<ExtArgs> | null
    /**
     * Filter which OrderProducts to delete.
     */
    where: OrderProductsWhereUniqueInput
  }

  /**
   * OrderProducts deleteMany
   */
  export type OrderProductsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderProducts to delete
     */
    where?: OrderProductsWhereInput
    /**
     * Limit how many OrderProducts to delete.
     */
    limit?: number
  }

  /**
   * OrderProducts without action
   */
  export type OrderProductsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProducts
     */
    select?: OrderProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProducts
     */
    omit?: OrderProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductsInclude<ExtArgs> | null
  }


  /**
   * Model verificationCode
   */

  export type AggregateVerificationCode = {
    _count: VerificationCodeCountAggregateOutputType | null
    _min: VerificationCodeMinAggregateOutputType | null
    _max: VerificationCodeMaxAggregateOutputType | null
  }

  export type VerificationCodeMinAggregateOutputType = {
    email: string | null
    code: string | null
    expiresAt: Date | null
  }

  export type VerificationCodeMaxAggregateOutputType = {
    email: string | null
    code: string | null
    expiresAt: Date | null
  }

  export type VerificationCodeCountAggregateOutputType = {
    email: number
    code: number
    expiresAt: number
    _all: number
  }


  export type VerificationCodeMinAggregateInputType = {
    email?: true
    code?: true
    expiresAt?: true
  }

  export type VerificationCodeMaxAggregateInputType = {
    email?: true
    code?: true
    expiresAt?: true
  }

  export type VerificationCodeCountAggregateInputType = {
    email?: true
    code?: true
    expiresAt?: true
    _all?: true
  }

  export type VerificationCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which verificationCode to aggregate.
     */
    where?: verificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verificationCodes to fetch.
     */
    orderBy?: verificationCodeOrderByWithRelationInput | verificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: verificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned verificationCodes
    **/
    _count?: true | VerificationCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationCodeMaxAggregateInputType
  }

  export type GetVerificationCodeAggregateType<T extends VerificationCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationCode[P]>
      : GetScalarType<T[P], AggregateVerificationCode[P]>
  }




  export type verificationCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: verificationCodeWhereInput
    orderBy?: verificationCodeOrderByWithAggregationInput | verificationCodeOrderByWithAggregationInput[]
    by: VerificationCodeScalarFieldEnum[] | VerificationCodeScalarFieldEnum
    having?: verificationCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCodeCountAggregateInputType | true
    _min?: VerificationCodeMinAggregateInputType
    _max?: VerificationCodeMaxAggregateInputType
  }

  export type VerificationCodeGroupByOutputType = {
    email: string
    code: string
    expiresAt: Date
    _count: VerificationCodeCountAggregateOutputType | null
    _min: VerificationCodeMinAggregateOutputType | null
    _max: VerificationCodeMaxAggregateOutputType | null
  }

  type GetVerificationCodeGroupByPayload<T extends verificationCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationCodeGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationCodeGroupByOutputType[P]>
        }
      >
    >


  export type verificationCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    code?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["verificationCode"]>

  export type verificationCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    code?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["verificationCode"]>

  export type verificationCodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    code?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["verificationCode"]>

  export type verificationCodeSelectScalar = {
    email?: boolean
    code?: boolean
    expiresAt?: boolean
  }

  export type verificationCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"email" | "code" | "expiresAt", ExtArgs["result"]["verificationCode"]>

  export type $verificationCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "verificationCode"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      email: string
      code: string
      expiresAt: Date
    }, ExtArgs["result"]["verificationCode"]>
    composites: {}
  }

  type verificationCodeGetPayload<S extends boolean | null | undefined | verificationCodeDefaultArgs> = $Result.GetResult<Prisma.$verificationCodePayload, S>

  type verificationCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<verificationCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCodeCountAggregateInputType | true
    }

  export interface verificationCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['verificationCode'], meta: { name: 'verificationCode' } }
    /**
     * Find zero or one VerificationCode that matches the filter.
     * @param {verificationCodeFindUniqueArgs} args - Arguments to find a VerificationCode
     * @example
     * // Get one VerificationCode
     * const verificationCode = await prisma.verificationCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends verificationCodeFindUniqueArgs>(args: SelectSubset<T, verificationCodeFindUniqueArgs<ExtArgs>>): Prisma__verificationCodeClient<$Result.GetResult<Prisma.$verificationCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {verificationCodeFindUniqueOrThrowArgs} args - Arguments to find a VerificationCode
     * @example
     * // Get one VerificationCode
     * const verificationCode = await prisma.verificationCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends verificationCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, verificationCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__verificationCodeClient<$Result.GetResult<Prisma.$verificationCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verificationCodeFindFirstArgs} args - Arguments to find a VerificationCode
     * @example
     * // Get one VerificationCode
     * const verificationCode = await prisma.verificationCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends verificationCodeFindFirstArgs>(args?: SelectSubset<T, verificationCodeFindFirstArgs<ExtArgs>>): Prisma__verificationCodeClient<$Result.GetResult<Prisma.$verificationCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verificationCodeFindFirstOrThrowArgs} args - Arguments to find a VerificationCode
     * @example
     * // Get one VerificationCode
     * const verificationCode = await prisma.verificationCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends verificationCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, verificationCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__verificationCodeClient<$Result.GetResult<Prisma.$verificationCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verificationCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationCodes
     * const verificationCodes = await prisma.verificationCode.findMany()
     * 
     * // Get first 10 VerificationCodes
     * const verificationCodes = await prisma.verificationCode.findMany({ take: 10 })
     * 
     * // Only select the `email`
     * const verificationCodeWithEmailOnly = await prisma.verificationCode.findMany({ select: { email: true } })
     * 
     */
    findMany<T extends verificationCodeFindManyArgs>(args?: SelectSubset<T, verificationCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$verificationCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationCode.
     * @param {verificationCodeCreateArgs} args - Arguments to create a VerificationCode.
     * @example
     * // Create one VerificationCode
     * const VerificationCode = await prisma.verificationCode.create({
     *   data: {
     *     // ... data to create a VerificationCode
     *   }
     * })
     * 
     */
    create<T extends verificationCodeCreateArgs>(args: SelectSubset<T, verificationCodeCreateArgs<ExtArgs>>): Prisma__verificationCodeClient<$Result.GetResult<Prisma.$verificationCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationCodes.
     * @param {verificationCodeCreateManyArgs} args - Arguments to create many VerificationCodes.
     * @example
     * // Create many VerificationCodes
     * const verificationCode = await prisma.verificationCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends verificationCodeCreateManyArgs>(args?: SelectSubset<T, verificationCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationCodes and returns the data saved in the database.
     * @param {verificationCodeCreateManyAndReturnArgs} args - Arguments to create many VerificationCodes.
     * @example
     * // Create many VerificationCodes
     * const verificationCode = await prisma.verificationCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationCodes and only return the `email`
     * const verificationCodeWithEmailOnly = await prisma.verificationCode.createManyAndReturn({
     *   select: { email: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends verificationCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, verificationCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$verificationCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationCode.
     * @param {verificationCodeDeleteArgs} args - Arguments to delete one VerificationCode.
     * @example
     * // Delete one VerificationCode
     * const VerificationCode = await prisma.verificationCode.delete({
     *   where: {
     *     // ... filter to delete one VerificationCode
     *   }
     * })
     * 
     */
    delete<T extends verificationCodeDeleteArgs>(args: SelectSubset<T, verificationCodeDeleteArgs<ExtArgs>>): Prisma__verificationCodeClient<$Result.GetResult<Prisma.$verificationCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationCode.
     * @param {verificationCodeUpdateArgs} args - Arguments to update one VerificationCode.
     * @example
     * // Update one VerificationCode
     * const verificationCode = await prisma.verificationCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends verificationCodeUpdateArgs>(args: SelectSubset<T, verificationCodeUpdateArgs<ExtArgs>>): Prisma__verificationCodeClient<$Result.GetResult<Prisma.$verificationCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationCodes.
     * @param {verificationCodeDeleteManyArgs} args - Arguments to filter VerificationCodes to delete.
     * @example
     * // Delete a few VerificationCodes
     * const { count } = await prisma.verificationCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends verificationCodeDeleteManyArgs>(args?: SelectSubset<T, verificationCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verificationCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationCodes
     * const verificationCode = await prisma.verificationCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends verificationCodeUpdateManyArgs>(args: SelectSubset<T, verificationCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationCodes and returns the data updated in the database.
     * @param {verificationCodeUpdateManyAndReturnArgs} args - Arguments to update many VerificationCodes.
     * @example
     * // Update many VerificationCodes
     * const verificationCode = await prisma.verificationCode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationCodes and only return the `email`
     * const verificationCodeWithEmailOnly = await prisma.verificationCode.updateManyAndReturn({
     *   select: { email: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends verificationCodeUpdateManyAndReturnArgs>(args: SelectSubset<T, verificationCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$verificationCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationCode.
     * @param {verificationCodeUpsertArgs} args - Arguments to update or create a VerificationCode.
     * @example
     * // Update or create a VerificationCode
     * const verificationCode = await prisma.verificationCode.upsert({
     *   create: {
     *     // ... data to create a VerificationCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationCode we want to update
     *   }
     * })
     */
    upsert<T extends verificationCodeUpsertArgs>(args: SelectSubset<T, verificationCodeUpsertArgs<ExtArgs>>): Prisma__verificationCodeClient<$Result.GetResult<Prisma.$verificationCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verificationCodeCountArgs} args - Arguments to filter VerificationCodes to count.
     * @example
     * // Count the number of VerificationCodes
     * const count = await prisma.verificationCode.count({
     *   where: {
     *     // ... the filter for the VerificationCodes we want to count
     *   }
     * })
    **/
    count<T extends verificationCodeCountArgs>(
      args?: Subset<T, verificationCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationCodeAggregateArgs>(args: Subset<T, VerificationCodeAggregateArgs>): Prisma.PrismaPromise<GetVerificationCodeAggregateType<T>>

    /**
     * Group by VerificationCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verificationCodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends verificationCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: verificationCodeGroupByArgs['orderBy'] }
        : { orderBy?: verificationCodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, verificationCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the verificationCode model
   */
  readonly fields: verificationCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for verificationCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__verificationCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the verificationCode model
   */
  interface verificationCodeFieldRefs {
    readonly email: FieldRef<"verificationCode", 'String'>
    readonly code: FieldRef<"verificationCode", 'String'>
    readonly expiresAt: FieldRef<"verificationCode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * verificationCode findUnique
   */
  export type verificationCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verificationCode
     */
    select?: verificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verificationCode
     */
    omit?: verificationCodeOmit<ExtArgs> | null
    /**
     * Filter, which verificationCode to fetch.
     */
    where: verificationCodeWhereUniqueInput
  }

  /**
   * verificationCode findUniqueOrThrow
   */
  export type verificationCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verificationCode
     */
    select?: verificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verificationCode
     */
    omit?: verificationCodeOmit<ExtArgs> | null
    /**
     * Filter, which verificationCode to fetch.
     */
    where: verificationCodeWhereUniqueInput
  }

  /**
   * verificationCode findFirst
   */
  export type verificationCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verificationCode
     */
    select?: verificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verificationCode
     */
    omit?: verificationCodeOmit<ExtArgs> | null
    /**
     * Filter, which verificationCode to fetch.
     */
    where?: verificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verificationCodes to fetch.
     */
    orderBy?: verificationCodeOrderByWithRelationInput | verificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for verificationCodes.
     */
    cursor?: verificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of verificationCodes.
     */
    distinct?: VerificationCodeScalarFieldEnum | VerificationCodeScalarFieldEnum[]
  }

  /**
   * verificationCode findFirstOrThrow
   */
  export type verificationCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verificationCode
     */
    select?: verificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verificationCode
     */
    omit?: verificationCodeOmit<ExtArgs> | null
    /**
     * Filter, which verificationCode to fetch.
     */
    where?: verificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verificationCodes to fetch.
     */
    orderBy?: verificationCodeOrderByWithRelationInput | verificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for verificationCodes.
     */
    cursor?: verificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of verificationCodes.
     */
    distinct?: VerificationCodeScalarFieldEnum | VerificationCodeScalarFieldEnum[]
  }

  /**
   * verificationCode findMany
   */
  export type verificationCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verificationCode
     */
    select?: verificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verificationCode
     */
    omit?: verificationCodeOmit<ExtArgs> | null
    /**
     * Filter, which verificationCodes to fetch.
     */
    where?: verificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verificationCodes to fetch.
     */
    orderBy?: verificationCodeOrderByWithRelationInput | verificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing verificationCodes.
     */
    cursor?: verificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verificationCodes.
     */
    skip?: number
    distinct?: VerificationCodeScalarFieldEnum | VerificationCodeScalarFieldEnum[]
  }

  /**
   * verificationCode create
   */
  export type verificationCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verificationCode
     */
    select?: verificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verificationCode
     */
    omit?: verificationCodeOmit<ExtArgs> | null
    /**
     * The data needed to create a verificationCode.
     */
    data: XOR<verificationCodeCreateInput, verificationCodeUncheckedCreateInput>
  }

  /**
   * verificationCode createMany
   */
  export type verificationCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many verificationCodes.
     */
    data: verificationCodeCreateManyInput | verificationCodeCreateManyInput[]
  }

  /**
   * verificationCode createManyAndReturn
   */
  export type verificationCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verificationCode
     */
    select?: verificationCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the verificationCode
     */
    omit?: verificationCodeOmit<ExtArgs> | null
    /**
     * The data used to create many verificationCodes.
     */
    data: verificationCodeCreateManyInput | verificationCodeCreateManyInput[]
  }

  /**
   * verificationCode update
   */
  export type verificationCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verificationCode
     */
    select?: verificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verificationCode
     */
    omit?: verificationCodeOmit<ExtArgs> | null
    /**
     * The data needed to update a verificationCode.
     */
    data: XOR<verificationCodeUpdateInput, verificationCodeUncheckedUpdateInput>
    /**
     * Choose, which verificationCode to update.
     */
    where: verificationCodeWhereUniqueInput
  }

  /**
   * verificationCode updateMany
   */
  export type verificationCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update verificationCodes.
     */
    data: XOR<verificationCodeUpdateManyMutationInput, verificationCodeUncheckedUpdateManyInput>
    /**
     * Filter which verificationCodes to update
     */
    where?: verificationCodeWhereInput
    /**
     * Limit how many verificationCodes to update.
     */
    limit?: number
  }

  /**
   * verificationCode updateManyAndReturn
   */
  export type verificationCodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verificationCode
     */
    select?: verificationCodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the verificationCode
     */
    omit?: verificationCodeOmit<ExtArgs> | null
    /**
     * The data used to update verificationCodes.
     */
    data: XOR<verificationCodeUpdateManyMutationInput, verificationCodeUncheckedUpdateManyInput>
    /**
     * Filter which verificationCodes to update
     */
    where?: verificationCodeWhereInput
    /**
     * Limit how many verificationCodes to update.
     */
    limit?: number
  }

  /**
   * verificationCode upsert
   */
  export type verificationCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verificationCode
     */
    select?: verificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verificationCode
     */
    omit?: verificationCodeOmit<ExtArgs> | null
    /**
     * The filter to search for the verificationCode to update in case it exists.
     */
    where: verificationCodeWhereUniqueInput
    /**
     * In case the verificationCode found by the `where` argument doesn't exist, create a new verificationCode with this data.
     */
    create: XOR<verificationCodeCreateInput, verificationCodeUncheckedCreateInput>
    /**
     * In case the verificationCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<verificationCodeUpdateInput, verificationCodeUncheckedUpdateInput>
  }

  /**
   * verificationCode delete
   */
  export type verificationCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verificationCode
     */
    select?: verificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verificationCode
     */
    omit?: verificationCodeOmit<ExtArgs> | null
    /**
     * Filter which verificationCode to delete.
     */
    where: verificationCodeWhereUniqueInput
  }

  /**
   * verificationCode deleteMany
   */
  export type verificationCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which verificationCodes to delete
     */
    where?: verificationCodeWhereInput
    /**
     * Limit how many verificationCodes to delete.
     */
    limit?: number
  }

  /**
   * verificationCode without action
   */
  export type verificationCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verificationCode
     */
    select?: verificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verificationCode
     */
    omit?: verificationCodeOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    discount: 'discount',
    countOfProduct: 'countOfProduct',
    categoryId: 'categoryId'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image: 'image',
    orderId: 'orderId'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ProductInfoBlockScalarFieldEnum: {
    id: 'id',
    blockOrder: 'blockOrder',
    align: 'align',
    title: 'title',
    content: 'content',
    productId: 'productId'
  };

  export type ProductInfoBlockScalarFieldEnum = (typeof ProductInfoBlockScalarFieldEnum)[keyof typeof ProductInfoBlockScalarFieldEnum]


  export const ProductImageScalarFieldEnum: {
    id: 'id',
    image: 'image',
    imageOrder: 'imageOrder',
    infoBlockId: 'infoBlockId'
  };

  export type ProductImageScalarFieldEnum = (typeof ProductImageScalarFieldEnum)[keyof typeof ProductImageScalarFieldEnum]


  export const ProductMainImageScalarFieldEnum: {
    id: 'id',
    image: 'image',
    productId: 'productId'
  };

  export type ProductMainImageScalarFieldEnum = (typeof ProductMainImageScalarFieldEnum)[keyof typeof ProductMainImageScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    lastname: 'lastname',
    patronymic: 'patronymic',
    email: 'email',
    birthDate: 'birthDate',
    phoneNumber: 'phoneNumber',
    password: 'password',
    addressId: 'addressId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AddressScalarFieldEnum: {
    id: 'id',
    city: 'city',
    street: 'street',
    house: 'house',
    flat: 'flat',
    entrance: 'entrance'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    username: 'username',
    lastname: 'lastname',
    patronymic: 'patronymic',
    totalDiscount: 'totalDiscount',
    payment: 'payment',
    trackingNumber: 'trackingNumber',
    totalPrice: 'totalPrice',
    countOfProducts: 'countOfProducts',
    orderDate: 'orderDate',
    userId: 'userId',
    addressId: 'addressId'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderProductsScalarFieldEnum: {
    OrderId: 'OrderId',
    productId: 'productId',
    count_of_product: 'count_of_product',
    price: 'price',
    discount: 'discount'
  };

  export type OrderProductsScalarFieldEnum = (typeof OrderProductsScalarFieldEnum)[keyof typeof OrderProductsScalarFieldEnum]


  export const VerificationCodeScalarFieldEnum: {
    email: 'email',
    code: 'code',
    expiresAt: 'expiresAt'
  };

  export type VerificationCodeScalarFieldEnum = (typeof VerificationCodeScalarFieldEnum)[keyof typeof VerificationCodeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    price?: IntFilter<"Product"> | number
    discount?: IntFilter<"Product"> | number
    countOfProduct?: IntFilter<"Product"> | number
    categoryId?: IntFilter<"Product"> | number
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    infoBlocks?: ProductInfoBlockListRelationFilter
    mainImage?: XOR<ProductMainImageNullableScalarRelationFilter, ProductMainImageWhereInput> | null
    orders?: OrderProductsListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    countOfProduct?: SortOrder
    categoryId?: SortOrder
    category?: CategoryOrderByWithRelationInput
    infoBlocks?: ProductInfoBlockOrderByRelationAggregateInput
    mainImage?: ProductMainImageOrderByWithRelationInput
    orders?: OrderProductsOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    price?: IntFilter<"Product"> | number
    discount?: IntFilter<"Product"> | number
    countOfProduct?: IntFilter<"Product"> | number
    categoryId?: IntFilter<"Product"> | number
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    infoBlocks?: ProductInfoBlockListRelationFilter
    mainImage?: XOR<ProductMainImageNullableScalarRelationFilter, ProductMainImageWhereInput> | null
    orders?: OrderProductsListRelationFilter
  }, "id" | "name">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    countOfProduct?: SortOrder
    categoryId?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    name?: StringWithAggregatesFilter<"Product"> | string
    price?: IntWithAggregatesFilter<"Product"> | number
    discount?: IntWithAggregatesFilter<"Product"> | number
    countOfProduct?: IntWithAggregatesFilter<"Product"> | number
    categoryId?: IntWithAggregatesFilter<"Product"> | number
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    image?: StringFilter<"Category"> | string
    orderId?: IntNullableFilter<"Category"> | number | null
    products?: ProductListRelationFilter
    order?: XOR<OrderNullableScalarRelationFilter, OrderWhereInput> | null
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    orderId?: SortOrderInput | SortOrder
    products?: ProductOrderByRelationAggregateInput
    order?: OrderOrderByWithRelationInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    image?: StringFilter<"Category"> | string
    orderId?: IntNullableFilter<"Category"> | number | null
    products?: ProductListRelationFilter
    order?: XOR<OrderNullableScalarRelationFilter, OrderWhereInput> | null
  }, "id" | "name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    orderId?: SortOrderInput | SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
    image?: StringWithAggregatesFilter<"Category"> | string
    orderId?: IntNullableWithAggregatesFilter<"Category"> | number | null
  }

  export type ProductInfoBlockWhereInput = {
    AND?: ProductInfoBlockWhereInput | ProductInfoBlockWhereInput[]
    OR?: ProductInfoBlockWhereInput[]
    NOT?: ProductInfoBlockWhereInput | ProductInfoBlockWhereInput[]
    id?: IntFilter<"ProductInfoBlock"> | number
    blockOrder?: IntFilter<"ProductInfoBlock"> | number
    align?: StringFilter<"ProductInfoBlock"> | string
    title?: StringFilter<"ProductInfoBlock"> | string
    content?: StringFilter<"ProductInfoBlock"> | string
    productId?: IntFilter<"ProductInfoBlock"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    images?: ProductImageListRelationFilter
  }

  export type ProductInfoBlockOrderByWithRelationInput = {
    id?: SortOrder
    blockOrder?: SortOrder
    align?: SortOrder
    title?: SortOrder
    content?: SortOrder
    productId?: SortOrder
    product?: ProductOrderByWithRelationInput
    images?: ProductImageOrderByRelationAggregateInput
  }

  export type ProductInfoBlockWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductInfoBlockWhereInput | ProductInfoBlockWhereInput[]
    OR?: ProductInfoBlockWhereInput[]
    NOT?: ProductInfoBlockWhereInput | ProductInfoBlockWhereInput[]
    blockOrder?: IntFilter<"ProductInfoBlock"> | number
    align?: StringFilter<"ProductInfoBlock"> | string
    title?: StringFilter<"ProductInfoBlock"> | string
    content?: StringFilter<"ProductInfoBlock"> | string
    productId?: IntFilter<"ProductInfoBlock"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    images?: ProductImageListRelationFilter
  }, "id">

  export type ProductInfoBlockOrderByWithAggregationInput = {
    id?: SortOrder
    blockOrder?: SortOrder
    align?: SortOrder
    title?: SortOrder
    content?: SortOrder
    productId?: SortOrder
    _count?: ProductInfoBlockCountOrderByAggregateInput
    _avg?: ProductInfoBlockAvgOrderByAggregateInput
    _max?: ProductInfoBlockMaxOrderByAggregateInput
    _min?: ProductInfoBlockMinOrderByAggregateInput
    _sum?: ProductInfoBlockSumOrderByAggregateInput
  }

  export type ProductInfoBlockScalarWhereWithAggregatesInput = {
    AND?: ProductInfoBlockScalarWhereWithAggregatesInput | ProductInfoBlockScalarWhereWithAggregatesInput[]
    OR?: ProductInfoBlockScalarWhereWithAggregatesInput[]
    NOT?: ProductInfoBlockScalarWhereWithAggregatesInput | ProductInfoBlockScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductInfoBlock"> | number
    blockOrder?: IntWithAggregatesFilter<"ProductInfoBlock"> | number
    align?: StringWithAggregatesFilter<"ProductInfoBlock"> | string
    title?: StringWithAggregatesFilter<"ProductInfoBlock"> | string
    content?: StringWithAggregatesFilter<"ProductInfoBlock"> | string
    productId?: IntWithAggregatesFilter<"ProductInfoBlock"> | number
  }

  export type ProductImageWhereInput = {
    AND?: ProductImageWhereInput | ProductImageWhereInput[]
    OR?: ProductImageWhereInput[]
    NOT?: ProductImageWhereInput | ProductImageWhereInput[]
    id?: IntFilter<"ProductImage"> | number
    image?: StringFilter<"ProductImage"> | string
    imageOrder?: IntFilter<"ProductImage"> | number
    infoBlockId?: IntFilter<"ProductImage"> | number
    infoBlock?: XOR<ProductInfoBlockScalarRelationFilter, ProductInfoBlockWhereInput>
  }

  export type ProductImageOrderByWithRelationInput = {
    id?: SortOrder
    image?: SortOrder
    imageOrder?: SortOrder
    infoBlockId?: SortOrder
    infoBlock?: ProductInfoBlockOrderByWithRelationInput
  }

  export type ProductImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductImageWhereInput | ProductImageWhereInput[]
    OR?: ProductImageWhereInput[]
    NOT?: ProductImageWhereInput | ProductImageWhereInput[]
    image?: StringFilter<"ProductImage"> | string
    imageOrder?: IntFilter<"ProductImage"> | number
    infoBlockId?: IntFilter<"ProductImage"> | number
    infoBlock?: XOR<ProductInfoBlockScalarRelationFilter, ProductInfoBlockWhereInput>
  }, "id">

  export type ProductImageOrderByWithAggregationInput = {
    id?: SortOrder
    image?: SortOrder
    imageOrder?: SortOrder
    infoBlockId?: SortOrder
    _count?: ProductImageCountOrderByAggregateInput
    _avg?: ProductImageAvgOrderByAggregateInput
    _max?: ProductImageMaxOrderByAggregateInput
    _min?: ProductImageMinOrderByAggregateInput
    _sum?: ProductImageSumOrderByAggregateInput
  }

  export type ProductImageScalarWhereWithAggregatesInput = {
    AND?: ProductImageScalarWhereWithAggregatesInput | ProductImageScalarWhereWithAggregatesInput[]
    OR?: ProductImageScalarWhereWithAggregatesInput[]
    NOT?: ProductImageScalarWhereWithAggregatesInput | ProductImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductImage"> | number
    image?: StringWithAggregatesFilter<"ProductImage"> | string
    imageOrder?: IntWithAggregatesFilter<"ProductImage"> | number
    infoBlockId?: IntWithAggregatesFilter<"ProductImage"> | number
  }

  export type ProductMainImageWhereInput = {
    AND?: ProductMainImageWhereInput | ProductMainImageWhereInput[]
    OR?: ProductMainImageWhereInput[]
    NOT?: ProductMainImageWhereInput | ProductMainImageWhereInput[]
    id?: IntFilter<"ProductMainImage"> | number
    image?: StringFilter<"ProductMainImage"> | string
    productId?: IntFilter<"ProductMainImage"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type ProductMainImageOrderByWithRelationInput = {
    id?: SortOrder
    image?: SortOrder
    productId?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type ProductMainImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    productId?: number
    AND?: ProductMainImageWhereInput | ProductMainImageWhereInput[]
    OR?: ProductMainImageWhereInput[]
    NOT?: ProductMainImageWhereInput | ProductMainImageWhereInput[]
    image?: StringFilter<"ProductMainImage"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id" | "productId">

  export type ProductMainImageOrderByWithAggregationInput = {
    id?: SortOrder
    image?: SortOrder
    productId?: SortOrder
    _count?: ProductMainImageCountOrderByAggregateInput
    _avg?: ProductMainImageAvgOrderByAggregateInput
    _max?: ProductMainImageMaxOrderByAggregateInput
    _min?: ProductMainImageMinOrderByAggregateInput
    _sum?: ProductMainImageSumOrderByAggregateInput
  }

  export type ProductMainImageScalarWhereWithAggregatesInput = {
    AND?: ProductMainImageScalarWhereWithAggregatesInput | ProductMainImageScalarWhereWithAggregatesInput[]
    OR?: ProductMainImageScalarWhereWithAggregatesInput[]
    NOT?: ProductMainImageScalarWhereWithAggregatesInput | ProductMainImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductMainImage"> | number
    image?: StringWithAggregatesFilter<"ProductMainImage"> | string
    productId?: IntWithAggregatesFilter<"ProductMainImage"> | number
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    patronymic?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    birthDate?: DateTimeFilter<"User"> | Date | string
    phoneNumber?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    addressId?: IntNullableFilter<"User"> | number | null
    address?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
    orders?: OrderListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    lastname?: SortOrder
    patronymic?: SortOrder
    email?: SortOrder
    birthDate?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    addressId?: SortOrderInput | SortOrder
    address?: AddressOrderByWithRelationInput
    orders?: OrderOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    patronymic?: StringFilter<"User"> | string
    birthDate?: DateTimeFilter<"User"> | Date | string
    phoneNumber?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    addressId?: IntNullableFilter<"User"> | number | null
    address?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
    orders?: OrderListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    lastname?: SortOrder
    patronymic?: SortOrder
    email?: SortOrder
    birthDate?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    addressId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    lastname?: StringWithAggregatesFilter<"User"> | string
    patronymic?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    birthDate?: DateTimeWithAggregatesFilter<"User"> | Date | string
    phoneNumber?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    addressId?: IntNullableWithAggregatesFilter<"User"> | number | null
  }

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: IntFilter<"Address"> | number
    city?: StringFilter<"Address"> | string
    street?: StringFilter<"Address"> | string
    house?: StringFilter<"Address"> | string
    flat?: StringFilter<"Address"> | string
    entrance?: StringFilter<"Address"> | string
    userId?: UserListRelationFilter
    order?: XOR<OrderNullableScalarRelationFilter, OrderWhereInput> | null
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    city?: SortOrder
    street?: SortOrder
    house?: SortOrder
    flat?: SortOrder
    entrance?: SortOrder
    userId?: UserOrderByRelationAggregateInput
    order?: OrderOrderByWithRelationInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    city?: StringFilter<"Address"> | string
    street?: StringFilter<"Address"> | string
    house?: StringFilter<"Address"> | string
    flat?: StringFilter<"Address"> | string
    entrance?: StringFilter<"Address"> | string
    userId?: UserListRelationFilter
    order?: XOR<OrderNullableScalarRelationFilter, OrderWhereInput> | null
  }, "id">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    city?: SortOrder
    street?: SortOrder
    house?: SortOrder
    flat?: SortOrder
    entrance?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _avg?: AddressAvgOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
    _sum?: AddressSumOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Address"> | number
    city?: StringWithAggregatesFilter<"Address"> | string
    street?: StringWithAggregatesFilter<"Address"> | string
    house?: StringWithAggregatesFilter<"Address"> | string
    flat?: StringWithAggregatesFilter<"Address"> | string
    entrance?: StringWithAggregatesFilter<"Address"> | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: IntFilter<"Order"> | number
    username?: StringFilter<"Order"> | string
    lastname?: StringFilter<"Order"> | string
    patronymic?: StringFilter<"Order"> | string
    totalDiscount?: IntFilter<"Order"> | number
    payment?: StringFilter<"Order"> | string
    trackingNumber?: IntFilter<"Order"> | number
    totalPrice?: IntFilter<"Order"> | number
    countOfProducts?: IntFilter<"Order"> | number
    orderDate?: DateTimeFilter<"Order"> | Date | string
    userId?: IntFilter<"Order"> | number
    addressId?: IntFilter<"Order"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    address?: XOR<AddressScalarRelationFilter, AddressWhereInput>
    products?: OrderProductsListRelationFilter
    categories?: CategoryListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    lastname?: SortOrder
    patronymic?: SortOrder
    totalDiscount?: SortOrder
    payment?: SortOrder
    trackingNumber?: SortOrder
    totalPrice?: SortOrder
    countOfProducts?: SortOrder
    orderDate?: SortOrder
    userId?: SortOrder
    addressId?: SortOrder
    user?: UserOrderByWithRelationInput
    address?: AddressOrderByWithRelationInput
    products?: OrderProductsOrderByRelationAggregateInput
    categories?: CategoryOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    addressId?: number
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    username?: StringFilter<"Order"> | string
    lastname?: StringFilter<"Order"> | string
    patronymic?: StringFilter<"Order"> | string
    totalDiscount?: IntFilter<"Order"> | number
    payment?: StringFilter<"Order"> | string
    trackingNumber?: IntFilter<"Order"> | number
    totalPrice?: IntFilter<"Order"> | number
    countOfProducts?: IntFilter<"Order"> | number
    orderDate?: DateTimeFilter<"Order"> | Date | string
    userId?: IntFilter<"Order"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    address?: XOR<AddressScalarRelationFilter, AddressWhereInput>
    products?: OrderProductsListRelationFilter
    categories?: CategoryListRelationFilter
  }, "id" | "addressId">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    lastname?: SortOrder
    patronymic?: SortOrder
    totalDiscount?: SortOrder
    payment?: SortOrder
    trackingNumber?: SortOrder
    totalPrice?: SortOrder
    countOfProducts?: SortOrder
    orderDate?: SortOrder
    userId?: SortOrder
    addressId?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Order"> | number
    username?: StringWithAggregatesFilter<"Order"> | string
    lastname?: StringWithAggregatesFilter<"Order"> | string
    patronymic?: StringWithAggregatesFilter<"Order"> | string
    totalDiscount?: IntWithAggregatesFilter<"Order"> | number
    payment?: StringWithAggregatesFilter<"Order"> | string
    trackingNumber?: IntWithAggregatesFilter<"Order"> | number
    totalPrice?: IntWithAggregatesFilter<"Order"> | number
    countOfProducts?: IntWithAggregatesFilter<"Order"> | number
    orderDate?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    userId?: IntWithAggregatesFilter<"Order"> | number
    addressId?: IntWithAggregatesFilter<"Order"> | number
  }

  export type OrderProductsWhereInput = {
    AND?: OrderProductsWhereInput | OrderProductsWhereInput[]
    OR?: OrderProductsWhereInput[]
    NOT?: OrderProductsWhereInput | OrderProductsWhereInput[]
    OrderId?: IntFilter<"OrderProducts"> | number
    productId?: IntFilter<"OrderProducts"> | number
    count_of_product?: IntFilter<"OrderProducts"> | number
    price?: IntFilter<"OrderProducts"> | number
    discount?: IntFilter<"OrderProducts"> | number
    Order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    Product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type OrderProductsOrderByWithRelationInput = {
    OrderId?: SortOrder
    productId?: SortOrder
    count_of_product?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    Order?: OrderOrderByWithRelationInput
    Product?: ProductOrderByWithRelationInput
  }

  export type OrderProductsWhereUniqueInput = Prisma.AtLeast<{
    OrderId_productId?: OrderProductsOrderIdProductIdCompoundUniqueInput
    AND?: OrderProductsWhereInput | OrderProductsWhereInput[]
    OR?: OrderProductsWhereInput[]
    NOT?: OrderProductsWhereInput | OrderProductsWhereInput[]
    OrderId?: IntFilter<"OrderProducts"> | number
    productId?: IntFilter<"OrderProducts"> | number
    count_of_product?: IntFilter<"OrderProducts"> | number
    price?: IntFilter<"OrderProducts"> | number
    discount?: IntFilter<"OrderProducts"> | number
    Order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    Product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "OrderId_productId">

  export type OrderProductsOrderByWithAggregationInput = {
    OrderId?: SortOrder
    productId?: SortOrder
    count_of_product?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    _count?: OrderProductsCountOrderByAggregateInput
    _avg?: OrderProductsAvgOrderByAggregateInput
    _max?: OrderProductsMaxOrderByAggregateInput
    _min?: OrderProductsMinOrderByAggregateInput
    _sum?: OrderProductsSumOrderByAggregateInput
  }

  export type OrderProductsScalarWhereWithAggregatesInput = {
    AND?: OrderProductsScalarWhereWithAggregatesInput | OrderProductsScalarWhereWithAggregatesInput[]
    OR?: OrderProductsScalarWhereWithAggregatesInput[]
    NOT?: OrderProductsScalarWhereWithAggregatesInput | OrderProductsScalarWhereWithAggregatesInput[]
    OrderId?: IntWithAggregatesFilter<"OrderProducts"> | number
    productId?: IntWithAggregatesFilter<"OrderProducts"> | number
    count_of_product?: IntWithAggregatesFilter<"OrderProducts"> | number
    price?: IntWithAggregatesFilter<"OrderProducts"> | number
    discount?: IntWithAggregatesFilter<"OrderProducts"> | number
  }

  export type verificationCodeWhereInput = {
    AND?: verificationCodeWhereInput | verificationCodeWhereInput[]
    OR?: verificationCodeWhereInput[]
    NOT?: verificationCodeWhereInput | verificationCodeWhereInput[]
    email?: StringFilter<"verificationCode"> | string
    code?: StringFilter<"verificationCode"> | string
    expiresAt?: DateTimeFilter<"verificationCode"> | Date | string
  }

  export type verificationCodeOrderByWithRelationInput = {
    email?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
  }

  export type verificationCodeWhereUniqueInput = Prisma.AtLeast<{
    email?: string
    AND?: verificationCodeWhereInput | verificationCodeWhereInput[]
    OR?: verificationCodeWhereInput[]
    NOT?: verificationCodeWhereInput | verificationCodeWhereInput[]
    code?: StringFilter<"verificationCode"> | string
    expiresAt?: DateTimeFilter<"verificationCode"> | Date | string
  }, "email">

  export type verificationCodeOrderByWithAggregationInput = {
    email?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    _count?: verificationCodeCountOrderByAggregateInput
    _max?: verificationCodeMaxOrderByAggregateInput
    _min?: verificationCodeMinOrderByAggregateInput
  }

  export type verificationCodeScalarWhereWithAggregatesInput = {
    AND?: verificationCodeScalarWhereWithAggregatesInput | verificationCodeScalarWhereWithAggregatesInput[]
    OR?: verificationCodeScalarWhereWithAggregatesInput[]
    NOT?: verificationCodeScalarWhereWithAggregatesInput | verificationCodeScalarWhereWithAggregatesInput[]
    email?: StringWithAggregatesFilter<"verificationCode"> | string
    code?: StringWithAggregatesFilter<"verificationCode"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"verificationCode"> | Date | string
  }

  export type ProductCreateInput = {
    name: string
    price: number
    discount: number
    countOfProduct: number
    category: CategoryCreateNestedOneWithoutProductsInput
    infoBlocks?: ProductInfoBlockCreateNestedManyWithoutProductInput
    mainImage?: ProductMainImageCreateNestedOneWithoutProductInput
    orders?: OrderProductsCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    name: string
    price: number
    discount: number
    countOfProduct: number
    categoryId: number
    infoBlocks?: ProductInfoBlockUncheckedCreateNestedManyWithoutProductInput
    mainImage?: ProductMainImageUncheckedCreateNestedOneWithoutProductInput
    orders?: OrderProductsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    countOfProduct?: IntFieldUpdateOperationsInput | number
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    infoBlocks?: ProductInfoBlockUpdateManyWithoutProductNestedInput
    mainImage?: ProductMainImageUpdateOneWithoutProductNestedInput
    orders?: OrderProductsUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    countOfProduct?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    infoBlocks?: ProductInfoBlockUncheckedUpdateManyWithoutProductNestedInput
    mainImage?: ProductMainImageUncheckedUpdateOneWithoutProductNestedInput
    orders?: OrderProductsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    name: string
    price: number
    discount: number
    countOfProduct: number
    categoryId: number
  }

  export type ProductUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    countOfProduct?: IntFieldUpdateOperationsInput | number
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    countOfProduct?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryCreateInput = {
    name: string
    image: string
    products?: ProductCreateNestedManyWithoutCategoryInput
    order?: OrderCreateNestedOneWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    image: string
    orderId?: number | null
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    products?: ProductUpdateManyWithoutCategoryNestedInput
    order?: OrderUpdateOneWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    orderId?: NullableIntFieldUpdateOperationsInput | number | null
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
    image: string
    orderId?: number | null
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    orderId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductInfoBlockCreateInput = {
    blockOrder: number
    align: string
    title: string
    content: string
    product: ProductCreateNestedOneWithoutInfoBlocksInput
    images?: ProductImageCreateNestedManyWithoutInfoBlockInput
  }

  export type ProductInfoBlockUncheckedCreateInput = {
    id?: number
    blockOrder: number
    align: string
    title: string
    content: string
    productId: number
    images?: ProductImageUncheckedCreateNestedManyWithoutInfoBlockInput
  }

  export type ProductInfoBlockUpdateInput = {
    blockOrder?: IntFieldUpdateOperationsInput | number
    align?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutInfoBlocksNestedInput
    images?: ProductImageUpdateManyWithoutInfoBlockNestedInput
  }

  export type ProductInfoBlockUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    blockOrder?: IntFieldUpdateOperationsInput | number
    align?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    images?: ProductImageUncheckedUpdateManyWithoutInfoBlockNestedInput
  }

  export type ProductInfoBlockCreateManyInput = {
    id?: number
    blockOrder: number
    align: string
    title: string
    content: string
    productId: number
  }

  export type ProductInfoBlockUpdateManyMutationInput = {
    blockOrder?: IntFieldUpdateOperationsInput | number
    align?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type ProductInfoBlockUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    blockOrder?: IntFieldUpdateOperationsInput | number
    align?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductImageCreateInput = {
    image: string
    imageOrder: number
    infoBlock: ProductInfoBlockCreateNestedOneWithoutImagesInput
  }

  export type ProductImageUncheckedCreateInput = {
    id?: number
    image: string
    imageOrder: number
    infoBlockId: number
  }

  export type ProductImageUpdateInput = {
    image?: StringFieldUpdateOperationsInput | string
    imageOrder?: IntFieldUpdateOperationsInput | number
    infoBlock?: ProductInfoBlockUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ProductImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    imageOrder?: IntFieldUpdateOperationsInput | number
    infoBlockId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductImageCreateManyInput = {
    id?: number
    image: string
    imageOrder: number
    infoBlockId: number
  }

  export type ProductImageUpdateManyMutationInput = {
    image?: StringFieldUpdateOperationsInput | string
    imageOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ProductImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    imageOrder?: IntFieldUpdateOperationsInput | number
    infoBlockId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductMainImageCreateInput = {
    image: string
    product: ProductCreateNestedOneWithoutMainImageInput
  }

  export type ProductMainImageUncheckedCreateInput = {
    id?: number
    image: string
    productId: number
  }

  export type ProductMainImageUpdateInput = {
    image?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutMainImageNestedInput
  }

  export type ProductMainImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductMainImageCreateManyInput = {
    id?: number
    image: string
    productId: number
  }

  export type ProductMainImageUpdateManyMutationInput = {
    image?: StringFieldUpdateOperationsInput | string
  }

  export type ProductMainImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    username: string
    lastname: string
    patronymic: string
    email: string
    birthDate: Date | string
    phoneNumber: string
    password: string
    address?: AddressCreateNestedOneWithoutUserIdInput
    orders?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    lastname: string
    patronymic: string
    email: string
    birthDate: Date | string
    phoneNumber: string
    password: string
    addressId?: number | null
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    patronymic?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: AddressUpdateOneWithoutUserIdNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    patronymic?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    addressId?: NullableIntFieldUpdateOperationsInput | number | null
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    lastname: string
    patronymic: string
    email: string
    birthDate: Date | string
    phoneNumber: string
    password: string
    addressId?: number | null
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    patronymic?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    patronymic?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    addressId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AddressCreateInput = {
    city: string
    street: string
    house: string
    flat: string
    entrance: string
    userId?: UserCreateNestedManyWithoutAddressInput
    order?: OrderCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateInput = {
    id?: number
    city: string
    street: string
    house: string
    flat: string
    entrance: string
    userId?: UserUncheckedCreateNestedManyWithoutAddressInput
    order?: OrderUncheckedCreateNestedOneWithoutAddressInput
  }

  export type AddressUpdateInput = {
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    house?: StringFieldUpdateOperationsInput | string
    flat?: StringFieldUpdateOperationsInput | string
    entrance?: StringFieldUpdateOperationsInput | string
    userId?: UserUpdateManyWithoutAddressNestedInput
    order?: OrderUpdateOneWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    house?: StringFieldUpdateOperationsInput | string
    flat?: StringFieldUpdateOperationsInput | string
    entrance?: StringFieldUpdateOperationsInput | string
    userId?: UserUncheckedUpdateManyWithoutAddressNestedInput
    order?: OrderUncheckedUpdateOneWithoutAddressNestedInput
  }

  export type AddressCreateManyInput = {
    id?: number
    city: string
    street: string
    house: string
    flat: string
    entrance: string
  }

  export type AddressUpdateManyMutationInput = {
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    house?: StringFieldUpdateOperationsInput | string
    flat?: StringFieldUpdateOperationsInput | string
    entrance?: StringFieldUpdateOperationsInput | string
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    house?: StringFieldUpdateOperationsInput | string
    flat?: StringFieldUpdateOperationsInput | string
    entrance?: StringFieldUpdateOperationsInput | string
  }

  export type OrderCreateInput = {
    username: string
    lastname: string
    patronymic: string
    totalDiscount: number
    payment: string
    trackingNumber: number
    totalPrice: number
    countOfProducts: number
    orderDate: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    address: AddressCreateNestedOneWithoutOrderInput
    products?: OrderProductsCreateNestedManyWithoutOrderInput
    categories?: CategoryCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    username: string
    lastname: string
    patronymic: string
    totalDiscount: number
    payment: string
    trackingNumber: number
    totalPrice: number
    countOfProducts: number
    orderDate: Date | string
    userId: number
    addressId: number
    products?: OrderProductsUncheckedCreateNestedManyWithoutOrderInput
    categories?: CategoryUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    patronymic?: StringFieldUpdateOperationsInput | string
    totalDiscount?: IntFieldUpdateOperationsInput | number
    payment?: StringFieldUpdateOperationsInput | string
    trackingNumber?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    countOfProducts?: IntFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    address?: AddressUpdateOneRequiredWithoutOrderNestedInput
    products?: OrderProductsUpdateManyWithoutOrderNestedInput
    categories?: CategoryUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    patronymic?: StringFieldUpdateOperationsInput | string
    totalDiscount?: IntFieldUpdateOperationsInput | number
    payment?: StringFieldUpdateOperationsInput | string
    trackingNumber?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    countOfProducts?: IntFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    addressId?: IntFieldUpdateOperationsInput | number
    products?: OrderProductsUncheckedUpdateManyWithoutOrderNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: number
    username: string
    lastname: string
    patronymic: string
    totalDiscount: number
    payment: string
    trackingNumber: number
    totalPrice: number
    countOfProducts: number
    orderDate: Date | string
    userId: number
    addressId: number
  }

  export type OrderUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    patronymic?: StringFieldUpdateOperationsInput | string
    totalDiscount?: IntFieldUpdateOperationsInput | number
    payment?: StringFieldUpdateOperationsInput | string
    trackingNumber?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    countOfProducts?: IntFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    patronymic?: StringFieldUpdateOperationsInput | string
    totalDiscount?: IntFieldUpdateOperationsInput | number
    payment?: StringFieldUpdateOperationsInput | string
    trackingNumber?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    countOfProducts?: IntFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    addressId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderProductsCreateInput = {
    count_of_product: number
    price: number
    discount: number
    Order: OrderCreateNestedOneWithoutProductsInput
    Product: ProductCreateNestedOneWithoutOrdersInput
  }

  export type OrderProductsUncheckedCreateInput = {
    OrderId: number
    productId: number
    count_of_product: number
    price: number
    discount: number
  }

  export type OrderProductsUpdateInput = {
    count_of_product?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    Order?: OrderUpdateOneRequiredWithoutProductsNestedInput
    Product?: ProductUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderProductsUncheckedUpdateInput = {
    OrderId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    count_of_product?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
  }

  export type OrderProductsCreateManyInput = {
    OrderId: number
    productId: number
    count_of_product: number
    price: number
    discount: number
  }

  export type OrderProductsUpdateManyMutationInput = {
    count_of_product?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
  }

  export type OrderProductsUncheckedUpdateManyInput = {
    OrderId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    count_of_product?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
  }

  export type verificationCodeCreateInput = {
    email: string
    code: string
    expiresAt: Date | string
  }

  export type verificationCodeUncheckedCreateInput = {
    email: string
    code: string
    expiresAt: Date | string
  }

  export type verificationCodeUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type verificationCodeUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type verificationCodeCreateManyInput = {
    email: string
    code: string
    expiresAt: Date | string
  }

  export type verificationCodeUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type verificationCodeUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type ProductInfoBlockListRelationFilter = {
    every?: ProductInfoBlockWhereInput
    some?: ProductInfoBlockWhereInput
    none?: ProductInfoBlockWhereInput
  }

  export type ProductMainImageNullableScalarRelationFilter = {
    is?: ProductMainImageWhereInput | null
    isNot?: ProductMainImageWhereInput | null
  }

  export type OrderProductsListRelationFilter = {
    every?: OrderProductsWhereInput
    some?: OrderProductsWhereInput
    none?: OrderProductsWhereInput
  }

  export type ProductInfoBlockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderProductsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    countOfProduct?: SortOrder
    categoryId?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    countOfProduct?: SortOrder
    categoryId?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    countOfProduct?: SortOrder
    categoryId?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    countOfProduct?: SortOrder
    categoryId?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    countOfProduct?: SortOrder
    categoryId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type OrderNullableScalarRelationFilter = {
    is?: OrderWhereInput | null
    isNot?: OrderWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    orderId?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    orderId?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    orderId?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ProductImageListRelationFilter = {
    every?: ProductImageWhereInput
    some?: ProductImageWhereInput
    none?: ProductImageWhereInput
  }

  export type ProductImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductInfoBlockCountOrderByAggregateInput = {
    id?: SortOrder
    blockOrder?: SortOrder
    align?: SortOrder
    title?: SortOrder
    content?: SortOrder
    productId?: SortOrder
  }

  export type ProductInfoBlockAvgOrderByAggregateInput = {
    id?: SortOrder
    blockOrder?: SortOrder
    productId?: SortOrder
  }

  export type ProductInfoBlockMaxOrderByAggregateInput = {
    id?: SortOrder
    blockOrder?: SortOrder
    align?: SortOrder
    title?: SortOrder
    content?: SortOrder
    productId?: SortOrder
  }

  export type ProductInfoBlockMinOrderByAggregateInput = {
    id?: SortOrder
    blockOrder?: SortOrder
    align?: SortOrder
    title?: SortOrder
    content?: SortOrder
    productId?: SortOrder
  }

  export type ProductInfoBlockSumOrderByAggregateInput = {
    id?: SortOrder
    blockOrder?: SortOrder
    productId?: SortOrder
  }

  export type ProductInfoBlockScalarRelationFilter = {
    is?: ProductInfoBlockWhereInput
    isNot?: ProductInfoBlockWhereInput
  }

  export type ProductImageCountOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    imageOrder?: SortOrder
    infoBlockId?: SortOrder
  }

  export type ProductImageAvgOrderByAggregateInput = {
    id?: SortOrder
    imageOrder?: SortOrder
    infoBlockId?: SortOrder
  }

  export type ProductImageMaxOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    imageOrder?: SortOrder
    infoBlockId?: SortOrder
  }

  export type ProductImageMinOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    imageOrder?: SortOrder
    infoBlockId?: SortOrder
  }

  export type ProductImageSumOrderByAggregateInput = {
    id?: SortOrder
    imageOrder?: SortOrder
    infoBlockId?: SortOrder
  }

  export type ProductMainImageCountOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    productId?: SortOrder
  }

  export type ProductMainImageAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type ProductMainImageMaxOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    productId?: SortOrder
  }

  export type ProductMainImageMinOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    productId?: SortOrder
  }

  export type ProductMainImageSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AddressNullableScalarRelationFilter = {
    is?: AddressWhereInput | null
    isNot?: AddressWhereInput | null
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    lastname?: SortOrder
    patronymic?: SortOrder
    email?: SortOrder
    birthDate?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    addressId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    addressId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    lastname?: SortOrder
    patronymic?: SortOrder
    email?: SortOrder
    birthDate?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    addressId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    lastname?: SortOrder
    patronymic?: SortOrder
    email?: SortOrder
    birthDate?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    addressId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    addressId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    city?: SortOrder
    street?: SortOrder
    house?: SortOrder
    flat?: SortOrder
    entrance?: SortOrder
  }

  export type AddressAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    city?: SortOrder
    street?: SortOrder
    house?: SortOrder
    flat?: SortOrder
    entrance?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    city?: SortOrder
    street?: SortOrder
    house?: SortOrder
    flat?: SortOrder
    entrance?: SortOrder
  }

  export type AddressSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AddressScalarRelationFilter = {
    is?: AddressWhereInput
    isNot?: AddressWhereInput
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    lastname?: SortOrder
    patronymic?: SortOrder
    totalDiscount?: SortOrder
    payment?: SortOrder
    trackingNumber?: SortOrder
    totalPrice?: SortOrder
    countOfProducts?: SortOrder
    orderDate?: SortOrder
    userId?: SortOrder
    addressId?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    totalDiscount?: SortOrder
    trackingNumber?: SortOrder
    totalPrice?: SortOrder
    countOfProducts?: SortOrder
    userId?: SortOrder
    addressId?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    lastname?: SortOrder
    patronymic?: SortOrder
    totalDiscount?: SortOrder
    payment?: SortOrder
    trackingNumber?: SortOrder
    totalPrice?: SortOrder
    countOfProducts?: SortOrder
    orderDate?: SortOrder
    userId?: SortOrder
    addressId?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    lastname?: SortOrder
    patronymic?: SortOrder
    totalDiscount?: SortOrder
    payment?: SortOrder
    trackingNumber?: SortOrder
    totalPrice?: SortOrder
    countOfProducts?: SortOrder
    orderDate?: SortOrder
    userId?: SortOrder
    addressId?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    totalDiscount?: SortOrder
    trackingNumber?: SortOrder
    totalPrice?: SortOrder
    countOfProducts?: SortOrder
    userId?: SortOrder
    addressId?: SortOrder
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type OrderProductsOrderIdProductIdCompoundUniqueInput = {
    OrderId: number
    productId: number
  }

  export type OrderProductsCountOrderByAggregateInput = {
    OrderId?: SortOrder
    productId?: SortOrder
    count_of_product?: SortOrder
    price?: SortOrder
    discount?: SortOrder
  }

  export type OrderProductsAvgOrderByAggregateInput = {
    OrderId?: SortOrder
    productId?: SortOrder
    count_of_product?: SortOrder
    price?: SortOrder
    discount?: SortOrder
  }

  export type OrderProductsMaxOrderByAggregateInput = {
    OrderId?: SortOrder
    productId?: SortOrder
    count_of_product?: SortOrder
    price?: SortOrder
    discount?: SortOrder
  }

  export type OrderProductsMinOrderByAggregateInput = {
    OrderId?: SortOrder
    productId?: SortOrder
    count_of_product?: SortOrder
    price?: SortOrder
    discount?: SortOrder
  }

  export type OrderProductsSumOrderByAggregateInput = {
    OrderId?: SortOrder
    productId?: SortOrder
    count_of_product?: SortOrder
    price?: SortOrder
    discount?: SortOrder
  }

  export type verificationCodeCountOrderByAggregateInput = {
    email?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
  }

  export type verificationCodeMaxOrderByAggregateInput = {
    email?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
  }

  export type verificationCodeMinOrderByAggregateInput = {
    email?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
  }

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type ProductInfoBlockCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductInfoBlockCreateWithoutProductInput, ProductInfoBlockUncheckedCreateWithoutProductInput> | ProductInfoBlockCreateWithoutProductInput[] | ProductInfoBlockUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductInfoBlockCreateOrConnectWithoutProductInput | ProductInfoBlockCreateOrConnectWithoutProductInput[]
    createMany?: ProductInfoBlockCreateManyProductInputEnvelope
    connect?: ProductInfoBlockWhereUniqueInput | ProductInfoBlockWhereUniqueInput[]
  }

  export type ProductMainImageCreateNestedOneWithoutProductInput = {
    create?: XOR<ProductMainImageCreateWithoutProductInput, ProductMainImageUncheckedCreateWithoutProductInput>
    connectOrCreate?: ProductMainImageCreateOrConnectWithoutProductInput
    connect?: ProductMainImageWhereUniqueInput
  }

  export type OrderProductsCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderProductsCreateWithoutProductInput, OrderProductsUncheckedCreateWithoutProductInput> | OrderProductsCreateWithoutProductInput[] | OrderProductsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderProductsCreateOrConnectWithoutProductInput | OrderProductsCreateOrConnectWithoutProductInput[]
    createMany?: OrderProductsCreateManyProductInputEnvelope
    connect?: OrderProductsWhereUniqueInput | OrderProductsWhereUniqueInput[]
  }

  export type ProductInfoBlockUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductInfoBlockCreateWithoutProductInput, ProductInfoBlockUncheckedCreateWithoutProductInput> | ProductInfoBlockCreateWithoutProductInput[] | ProductInfoBlockUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductInfoBlockCreateOrConnectWithoutProductInput | ProductInfoBlockCreateOrConnectWithoutProductInput[]
    createMany?: ProductInfoBlockCreateManyProductInputEnvelope
    connect?: ProductInfoBlockWhereUniqueInput | ProductInfoBlockWhereUniqueInput[]
  }

  export type ProductMainImageUncheckedCreateNestedOneWithoutProductInput = {
    create?: XOR<ProductMainImageCreateWithoutProductInput, ProductMainImageUncheckedCreateWithoutProductInput>
    connectOrCreate?: ProductMainImageCreateOrConnectWithoutProductInput
    connect?: ProductMainImageWhereUniqueInput
  }

  export type OrderProductsUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderProductsCreateWithoutProductInput, OrderProductsUncheckedCreateWithoutProductInput> | OrderProductsCreateWithoutProductInput[] | OrderProductsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderProductsCreateOrConnectWithoutProductInput | OrderProductsCreateOrConnectWithoutProductInput[]
    createMany?: OrderProductsCreateManyProductInputEnvelope
    connect?: OrderProductsWhereUniqueInput | OrderProductsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    upsert?: CategoryUpsertWithoutProductsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductsInput, CategoryUpdateWithoutProductsInput>, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type ProductInfoBlockUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductInfoBlockCreateWithoutProductInput, ProductInfoBlockUncheckedCreateWithoutProductInput> | ProductInfoBlockCreateWithoutProductInput[] | ProductInfoBlockUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductInfoBlockCreateOrConnectWithoutProductInput | ProductInfoBlockCreateOrConnectWithoutProductInput[]
    upsert?: ProductInfoBlockUpsertWithWhereUniqueWithoutProductInput | ProductInfoBlockUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductInfoBlockCreateManyProductInputEnvelope
    set?: ProductInfoBlockWhereUniqueInput | ProductInfoBlockWhereUniqueInput[]
    disconnect?: ProductInfoBlockWhereUniqueInput | ProductInfoBlockWhereUniqueInput[]
    delete?: ProductInfoBlockWhereUniqueInput | ProductInfoBlockWhereUniqueInput[]
    connect?: ProductInfoBlockWhereUniqueInput | ProductInfoBlockWhereUniqueInput[]
    update?: ProductInfoBlockUpdateWithWhereUniqueWithoutProductInput | ProductInfoBlockUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductInfoBlockUpdateManyWithWhereWithoutProductInput | ProductInfoBlockUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductInfoBlockScalarWhereInput | ProductInfoBlockScalarWhereInput[]
  }

  export type ProductMainImageUpdateOneWithoutProductNestedInput = {
    create?: XOR<ProductMainImageCreateWithoutProductInput, ProductMainImageUncheckedCreateWithoutProductInput>
    connectOrCreate?: ProductMainImageCreateOrConnectWithoutProductInput
    upsert?: ProductMainImageUpsertWithoutProductInput
    disconnect?: ProductMainImageWhereInput | boolean
    delete?: ProductMainImageWhereInput | boolean
    connect?: ProductMainImageWhereUniqueInput
    update?: XOR<XOR<ProductMainImageUpdateToOneWithWhereWithoutProductInput, ProductMainImageUpdateWithoutProductInput>, ProductMainImageUncheckedUpdateWithoutProductInput>
  }

  export type OrderProductsUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderProductsCreateWithoutProductInput, OrderProductsUncheckedCreateWithoutProductInput> | OrderProductsCreateWithoutProductInput[] | OrderProductsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderProductsCreateOrConnectWithoutProductInput | OrderProductsCreateOrConnectWithoutProductInput[]
    upsert?: OrderProductsUpsertWithWhereUniqueWithoutProductInput | OrderProductsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderProductsCreateManyProductInputEnvelope
    set?: OrderProductsWhereUniqueInput | OrderProductsWhereUniqueInput[]
    disconnect?: OrderProductsWhereUniqueInput | OrderProductsWhereUniqueInput[]
    delete?: OrderProductsWhereUniqueInput | OrderProductsWhereUniqueInput[]
    connect?: OrderProductsWhereUniqueInput | OrderProductsWhereUniqueInput[]
    update?: OrderProductsUpdateWithWhereUniqueWithoutProductInput | OrderProductsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderProductsUpdateManyWithWhereWithoutProductInput | OrderProductsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderProductsScalarWhereInput | OrderProductsScalarWhereInput[]
  }

  export type ProductInfoBlockUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductInfoBlockCreateWithoutProductInput, ProductInfoBlockUncheckedCreateWithoutProductInput> | ProductInfoBlockCreateWithoutProductInput[] | ProductInfoBlockUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductInfoBlockCreateOrConnectWithoutProductInput | ProductInfoBlockCreateOrConnectWithoutProductInput[]
    upsert?: ProductInfoBlockUpsertWithWhereUniqueWithoutProductInput | ProductInfoBlockUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductInfoBlockCreateManyProductInputEnvelope
    set?: ProductInfoBlockWhereUniqueInput | ProductInfoBlockWhereUniqueInput[]
    disconnect?: ProductInfoBlockWhereUniqueInput | ProductInfoBlockWhereUniqueInput[]
    delete?: ProductInfoBlockWhereUniqueInput | ProductInfoBlockWhereUniqueInput[]
    connect?: ProductInfoBlockWhereUniqueInput | ProductInfoBlockWhereUniqueInput[]
    update?: ProductInfoBlockUpdateWithWhereUniqueWithoutProductInput | ProductInfoBlockUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductInfoBlockUpdateManyWithWhereWithoutProductInput | ProductInfoBlockUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductInfoBlockScalarWhereInput | ProductInfoBlockScalarWhereInput[]
  }

  export type ProductMainImageUncheckedUpdateOneWithoutProductNestedInput = {
    create?: XOR<ProductMainImageCreateWithoutProductInput, ProductMainImageUncheckedCreateWithoutProductInput>
    connectOrCreate?: ProductMainImageCreateOrConnectWithoutProductInput
    upsert?: ProductMainImageUpsertWithoutProductInput
    disconnect?: ProductMainImageWhereInput | boolean
    delete?: ProductMainImageWhereInput | boolean
    connect?: ProductMainImageWhereUniqueInput
    update?: XOR<XOR<ProductMainImageUpdateToOneWithWhereWithoutProductInput, ProductMainImageUpdateWithoutProductInput>, ProductMainImageUncheckedUpdateWithoutProductInput>
  }

  export type OrderProductsUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderProductsCreateWithoutProductInput, OrderProductsUncheckedCreateWithoutProductInput> | OrderProductsCreateWithoutProductInput[] | OrderProductsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderProductsCreateOrConnectWithoutProductInput | OrderProductsCreateOrConnectWithoutProductInput[]
    upsert?: OrderProductsUpsertWithWhereUniqueWithoutProductInput | OrderProductsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderProductsCreateManyProductInputEnvelope
    set?: OrderProductsWhereUniqueInput | OrderProductsWhereUniqueInput[]
    disconnect?: OrderProductsWhereUniqueInput | OrderProductsWhereUniqueInput[]
    delete?: OrderProductsWhereUniqueInput | OrderProductsWhereUniqueInput[]
    connect?: OrderProductsWhereUniqueInput | OrderProductsWhereUniqueInput[]
    update?: OrderProductsUpdateWithWhereUniqueWithoutProductInput | OrderProductsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderProductsUpdateManyWithWhereWithoutProductInput | OrderProductsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderProductsScalarWhereInput | OrderProductsScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type OrderCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<OrderCreateWithoutCategoriesInput, OrderUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: OrderCreateOrConnectWithoutCategoriesInput
    connect?: OrderWhereUniqueInput
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type OrderUpdateOneWithoutCategoriesNestedInput = {
    create?: XOR<OrderCreateWithoutCategoriesInput, OrderUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: OrderCreateOrConnectWithoutCategoriesInput
    upsert?: OrderUpsertWithoutCategoriesInput
    disconnect?: OrderWhereInput | boolean
    delete?: OrderWhereInput | boolean
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutCategoriesInput, OrderUpdateWithoutCategoriesInput>, OrderUncheckedUpdateWithoutCategoriesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutInfoBlocksInput = {
    create?: XOR<ProductCreateWithoutInfoBlocksInput, ProductUncheckedCreateWithoutInfoBlocksInput>
    connectOrCreate?: ProductCreateOrConnectWithoutInfoBlocksInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductImageCreateNestedManyWithoutInfoBlockInput = {
    create?: XOR<ProductImageCreateWithoutInfoBlockInput, ProductImageUncheckedCreateWithoutInfoBlockInput> | ProductImageCreateWithoutInfoBlockInput[] | ProductImageUncheckedCreateWithoutInfoBlockInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutInfoBlockInput | ProductImageCreateOrConnectWithoutInfoBlockInput[]
    createMany?: ProductImageCreateManyInfoBlockInputEnvelope
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
  }

  export type ProductImageUncheckedCreateNestedManyWithoutInfoBlockInput = {
    create?: XOR<ProductImageCreateWithoutInfoBlockInput, ProductImageUncheckedCreateWithoutInfoBlockInput> | ProductImageCreateWithoutInfoBlockInput[] | ProductImageUncheckedCreateWithoutInfoBlockInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutInfoBlockInput | ProductImageCreateOrConnectWithoutInfoBlockInput[]
    createMany?: ProductImageCreateManyInfoBlockInputEnvelope
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
  }

  export type ProductUpdateOneRequiredWithoutInfoBlocksNestedInput = {
    create?: XOR<ProductCreateWithoutInfoBlocksInput, ProductUncheckedCreateWithoutInfoBlocksInput>
    connectOrCreate?: ProductCreateOrConnectWithoutInfoBlocksInput
    upsert?: ProductUpsertWithoutInfoBlocksInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutInfoBlocksInput, ProductUpdateWithoutInfoBlocksInput>, ProductUncheckedUpdateWithoutInfoBlocksInput>
  }

  export type ProductImageUpdateManyWithoutInfoBlockNestedInput = {
    create?: XOR<ProductImageCreateWithoutInfoBlockInput, ProductImageUncheckedCreateWithoutInfoBlockInput> | ProductImageCreateWithoutInfoBlockInput[] | ProductImageUncheckedCreateWithoutInfoBlockInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutInfoBlockInput | ProductImageCreateOrConnectWithoutInfoBlockInput[]
    upsert?: ProductImageUpsertWithWhereUniqueWithoutInfoBlockInput | ProductImageUpsertWithWhereUniqueWithoutInfoBlockInput[]
    createMany?: ProductImageCreateManyInfoBlockInputEnvelope
    set?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    disconnect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    delete?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    update?: ProductImageUpdateWithWhereUniqueWithoutInfoBlockInput | ProductImageUpdateWithWhereUniqueWithoutInfoBlockInput[]
    updateMany?: ProductImageUpdateManyWithWhereWithoutInfoBlockInput | ProductImageUpdateManyWithWhereWithoutInfoBlockInput[]
    deleteMany?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
  }

  export type ProductImageUncheckedUpdateManyWithoutInfoBlockNestedInput = {
    create?: XOR<ProductImageCreateWithoutInfoBlockInput, ProductImageUncheckedCreateWithoutInfoBlockInput> | ProductImageCreateWithoutInfoBlockInput[] | ProductImageUncheckedCreateWithoutInfoBlockInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutInfoBlockInput | ProductImageCreateOrConnectWithoutInfoBlockInput[]
    upsert?: ProductImageUpsertWithWhereUniqueWithoutInfoBlockInput | ProductImageUpsertWithWhereUniqueWithoutInfoBlockInput[]
    createMany?: ProductImageCreateManyInfoBlockInputEnvelope
    set?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    disconnect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    delete?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    update?: ProductImageUpdateWithWhereUniqueWithoutInfoBlockInput | ProductImageUpdateWithWhereUniqueWithoutInfoBlockInput[]
    updateMany?: ProductImageUpdateManyWithWhereWithoutInfoBlockInput | ProductImageUpdateManyWithWhereWithoutInfoBlockInput[]
    deleteMany?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
  }

  export type ProductInfoBlockCreateNestedOneWithoutImagesInput = {
    create?: XOR<ProductInfoBlockCreateWithoutImagesInput, ProductInfoBlockUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ProductInfoBlockCreateOrConnectWithoutImagesInput
    connect?: ProductInfoBlockWhereUniqueInput
  }

  export type ProductInfoBlockUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<ProductInfoBlockCreateWithoutImagesInput, ProductInfoBlockUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ProductInfoBlockCreateOrConnectWithoutImagesInput
    upsert?: ProductInfoBlockUpsertWithoutImagesInput
    connect?: ProductInfoBlockWhereUniqueInput
    update?: XOR<XOR<ProductInfoBlockUpdateToOneWithWhereWithoutImagesInput, ProductInfoBlockUpdateWithoutImagesInput>, ProductInfoBlockUncheckedUpdateWithoutImagesInput>
  }

  export type ProductCreateNestedOneWithoutMainImageInput = {
    create?: XOR<ProductCreateWithoutMainImageInput, ProductUncheckedCreateWithoutMainImageInput>
    connectOrCreate?: ProductCreateOrConnectWithoutMainImageInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutMainImageNestedInput = {
    create?: XOR<ProductCreateWithoutMainImageInput, ProductUncheckedCreateWithoutMainImageInput>
    connectOrCreate?: ProductCreateOrConnectWithoutMainImageInput
    upsert?: ProductUpsertWithoutMainImageInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutMainImageInput, ProductUpdateWithoutMainImageInput>, ProductUncheckedUpdateWithoutMainImageInput>
  }

  export type AddressCreateNestedOneWithoutUserIdInput = {
    create?: XOR<AddressCreateWithoutUserIdInput, AddressUncheckedCreateWithoutUserIdInput>
    connectOrCreate?: AddressCreateOrConnectWithoutUserIdInput
    connect?: AddressWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AddressUpdateOneWithoutUserIdNestedInput = {
    create?: XOR<AddressCreateWithoutUserIdInput, AddressUncheckedCreateWithoutUserIdInput>
    connectOrCreate?: AddressCreateOrConnectWithoutUserIdInput
    upsert?: AddressUpsertWithoutUserIdInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutUserIdInput, AddressUpdateWithoutUserIdInput>, AddressUncheckedUpdateWithoutUserIdInput>
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutAddressInput = {
    create?: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput> | UserCreateWithoutAddressInput[] | UserUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAddressInput | UserCreateOrConnectWithoutAddressInput[]
    createMany?: UserCreateManyAddressInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type OrderCreateNestedOneWithoutAddressInput = {
    create?: XOR<OrderCreateWithoutAddressInput, OrderUncheckedCreateWithoutAddressInput>
    connectOrCreate?: OrderCreateOrConnectWithoutAddressInput
    connect?: OrderWhereUniqueInput
  }

  export type UserUncheckedCreateNestedManyWithoutAddressInput = {
    create?: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput> | UserCreateWithoutAddressInput[] | UserUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAddressInput | UserCreateOrConnectWithoutAddressInput[]
    createMany?: UserCreateManyAddressInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedOneWithoutAddressInput = {
    create?: XOR<OrderCreateWithoutAddressInput, OrderUncheckedCreateWithoutAddressInput>
    connectOrCreate?: OrderCreateOrConnectWithoutAddressInput
    connect?: OrderWhereUniqueInput
  }

  export type UserUpdateManyWithoutAddressNestedInput = {
    create?: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput> | UserCreateWithoutAddressInput[] | UserUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAddressInput | UserCreateOrConnectWithoutAddressInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutAddressInput | UserUpsertWithWhereUniqueWithoutAddressInput[]
    createMany?: UserCreateManyAddressInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutAddressInput | UserUpdateWithWhereUniqueWithoutAddressInput[]
    updateMany?: UserUpdateManyWithWhereWithoutAddressInput | UserUpdateManyWithWhereWithoutAddressInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type OrderUpdateOneWithoutAddressNestedInput = {
    create?: XOR<OrderCreateWithoutAddressInput, OrderUncheckedCreateWithoutAddressInput>
    connectOrCreate?: OrderCreateOrConnectWithoutAddressInput
    upsert?: OrderUpsertWithoutAddressInput
    disconnect?: OrderWhereInput | boolean
    delete?: OrderWhereInput | boolean
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutAddressInput, OrderUpdateWithoutAddressInput>, OrderUncheckedUpdateWithoutAddressInput>
  }

  export type UserUncheckedUpdateManyWithoutAddressNestedInput = {
    create?: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput> | UserCreateWithoutAddressInput[] | UserUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAddressInput | UserCreateOrConnectWithoutAddressInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutAddressInput | UserUpsertWithWhereUniqueWithoutAddressInput[]
    createMany?: UserCreateManyAddressInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutAddressInput | UserUpdateWithWhereUniqueWithoutAddressInput[]
    updateMany?: UserUpdateManyWithWhereWithoutAddressInput | UserUpdateManyWithWhereWithoutAddressInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type OrderUncheckedUpdateOneWithoutAddressNestedInput = {
    create?: XOR<OrderCreateWithoutAddressInput, OrderUncheckedCreateWithoutAddressInput>
    connectOrCreate?: OrderCreateOrConnectWithoutAddressInput
    upsert?: OrderUpsertWithoutAddressInput
    disconnect?: OrderWhereInput | boolean
    delete?: OrderWhereInput | boolean
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutAddressInput, OrderUpdateWithoutAddressInput>, OrderUncheckedUpdateWithoutAddressInput>
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type AddressCreateNestedOneWithoutOrderInput = {
    create?: XOR<AddressCreateWithoutOrderInput, AddressUncheckedCreateWithoutOrderInput>
    connectOrCreate?: AddressCreateOrConnectWithoutOrderInput
    connect?: AddressWhereUniqueInput
  }

  export type OrderProductsCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderProductsCreateWithoutOrderInput, OrderProductsUncheckedCreateWithoutOrderInput> | OrderProductsCreateWithoutOrderInput[] | OrderProductsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderProductsCreateOrConnectWithoutOrderInput | OrderProductsCreateOrConnectWithoutOrderInput[]
    createMany?: OrderProductsCreateManyOrderInputEnvelope
    connect?: OrderProductsWhereUniqueInput | OrderProductsWhereUniqueInput[]
  }

  export type CategoryCreateNestedManyWithoutOrderInput = {
    create?: XOR<CategoryCreateWithoutOrderInput, CategoryUncheckedCreateWithoutOrderInput> | CategoryCreateWithoutOrderInput[] | CategoryUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutOrderInput | CategoryCreateOrConnectWithoutOrderInput[]
    createMany?: CategoryCreateManyOrderInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type OrderProductsUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderProductsCreateWithoutOrderInput, OrderProductsUncheckedCreateWithoutOrderInput> | OrderProductsCreateWithoutOrderInput[] | OrderProductsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderProductsCreateOrConnectWithoutOrderInput | OrderProductsCreateOrConnectWithoutOrderInput[]
    createMany?: OrderProductsCreateManyOrderInputEnvelope
    connect?: OrderProductsWhereUniqueInput | OrderProductsWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<CategoryCreateWithoutOrderInput, CategoryUncheckedCreateWithoutOrderInput> | CategoryCreateWithoutOrderInput[] | CategoryUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutOrderInput | CategoryCreateOrConnectWithoutOrderInput[]
    createMany?: CategoryCreateManyOrderInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type AddressUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<AddressCreateWithoutOrderInput, AddressUncheckedCreateWithoutOrderInput>
    connectOrCreate?: AddressCreateOrConnectWithoutOrderInput
    upsert?: AddressUpsertWithoutOrderInput
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutOrderInput, AddressUpdateWithoutOrderInput>, AddressUncheckedUpdateWithoutOrderInput>
  }

  export type OrderProductsUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderProductsCreateWithoutOrderInput, OrderProductsUncheckedCreateWithoutOrderInput> | OrderProductsCreateWithoutOrderInput[] | OrderProductsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderProductsCreateOrConnectWithoutOrderInput | OrderProductsCreateOrConnectWithoutOrderInput[]
    upsert?: OrderProductsUpsertWithWhereUniqueWithoutOrderInput | OrderProductsUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderProductsCreateManyOrderInputEnvelope
    set?: OrderProductsWhereUniqueInput | OrderProductsWhereUniqueInput[]
    disconnect?: OrderProductsWhereUniqueInput | OrderProductsWhereUniqueInput[]
    delete?: OrderProductsWhereUniqueInput | OrderProductsWhereUniqueInput[]
    connect?: OrderProductsWhereUniqueInput | OrderProductsWhereUniqueInput[]
    update?: OrderProductsUpdateWithWhereUniqueWithoutOrderInput | OrderProductsUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderProductsUpdateManyWithWhereWithoutOrderInput | OrderProductsUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderProductsScalarWhereInput | OrderProductsScalarWhereInput[]
  }

  export type CategoryUpdateManyWithoutOrderNestedInput = {
    create?: XOR<CategoryCreateWithoutOrderInput, CategoryUncheckedCreateWithoutOrderInput> | CategoryCreateWithoutOrderInput[] | CategoryUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutOrderInput | CategoryCreateOrConnectWithoutOrderInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutOrderInput | CategoryUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: CategoryCreateManyOrderInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutOrderInput | CategoryUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutOrderInput | CategoryUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type OrderProductsUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderProductsCreateWithoutOrderInput, OrderProductsUncheckedCreateWithoutOrderInput> | OrderProductsCreateWithoutOrderInput[] | OrderProductsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderProductsCreateOrConnectWithoutOrderInput | OrderProductsCreateOrConnectWithoutOrderInput[]
    upsert?: OrderProductsUpsertWithWhereUniqueWithoutOrderInput | OrderProductsUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderProductsCreateManyOrderInputEnvelope
    set?: OrderProductsWhereUniqueInput | OrderProductsWhereUniqueInput[]
    disconnect?: OrderProductsWhereUniqueInput | OrderProductsWhereUniqueInput[]
    delete?: OrderProductsWhereUniqueInput | OrderProductsWhereUniqueInput[]
    connect?: OrderProductsWhereUniqueInput | OrderProductsWhereUniqueInput[]
    update?: OrderProductsUpdateWithWhereUniqueWithoutOrderInput | OrderProductsUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderProductsUpdateManyWithWhereWithoutOrderInput | OrderProductsUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderProductsScalarWhereInput | OrderProductsScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<CategoryCreateWithoutOrderInput, CategoryUncheckedCreateWithoutOrderInput> | CategoryCreateWithoutOrderInput[] | CategoryUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutOrderInput | CategoryCreateOrConnectWithoutOrderInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutOrderInput | CategoryUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: CategoryCreateManyOrderInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutOrderInput | CategoryUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutOrderInput | CategoryUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutProductsInput = {
    create?: XOR<OrderCreateWithoutProductsInput, OrderUncheckedCreateWithoutProductsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutProductsInput
    connect?: OrderWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutOrdersInput = {
    create?: XOR<ProductCreateWithoutOrdersInput, ProductUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrdersInput
    connect?: ProductWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<OrderCreateWithoutProductsInput, OrderUncheckedCreateWithoutProductsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutProductsInput
    upsert?: OrderUpsertWithoutProductsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutProductsInput, OrderUpdateWithoutProductsInput>, OrderUncheckedUpdateWithoutProductsInput>
  }

  export type ProductUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<ProductCreateWithoutOrdersInput, ProductUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrdersInput
    upsert?: ProductUpsertWithoutOrdersInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutOrdersInput, ProductUpdateWithoutOrdersInput>, ProductUncheckedUpdateWithoutOrdersInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CategoryCreateWithoutProductsInput = {
    name: string
    image: string
    order?: OrderCreateNestedOneWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    image: string
    orderId?: number | null
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type ProductInfoBlockCreateWithoutProductInput = {
    blockOrder: number
    align: string
    title: string
    content: string
    images?: ProductImageCreateNestedManyWithoutInfoBlockInput
  }

  export type ProductInfoBlockUncheckedCreateWithoutProductInput = {
    id?: number
    blockOrder: number
    align: string
    title: string
    content: string
    images?: ProductImageUncheckedCreateNestedManyWithoutInfoBlockInput
  }

  export type ProductInfoBlockCreateOrConnectWithoutProductInput = {
    where: ProductInfoBlockWhereUniqueInput
    create: XOR<ProductInfoBlockCreateWithoutProductInput, ProductInfoBlockUncheckedCreateWithoutProductInput>
  }

  export type ProductInfoBlockCreateManyProductInputEnvelope = {
    data: ProductInfoBlockCreateManyProductInput | ProductInfoBlockCreateManyProductInput[]
  }

  export type ProductMainImageCreateWithoutProductInput = {
    image: string
  }

  export type ProductMainImageUncheckedCreateWithoutProductInput = {
    id?: number
    image: string
  }

  export type ProductMainImageCreateOrConnectWithoutProductInput = {
    where: ProductMainImageWhereUniqueInput
    create: XOR<ProductMainImageCreateWithoutProductInput, ProductMainImageUncheckedCreateWithoutProductInput>
  }

  export type OrderProductsCreateWithoutProductInput = {
    count_of_product: number
    price: number
    discount: number
    Order: OrderCreateNestedOneWithoutProductsInput
  }

  export type OrderProductsUncheckedCreateWithoutProductInput = {
    OrderId: number
    count_of_product: number
    price: number
    discount: number
  }

  export type OrderProductsCreateOrConnectWithoutProductInput = {
    where: OrderProductsWhereUniqueInput
    create: XOR<OrderProductsCreateWithoutProductInput, OrderProductsUncheckedCreateWithoutProductInput>
  }

  export type OrderProductsCreateManyProductInputEnvelope = {
    data: OrderProductsCreateManyProductInput | OrderProductsCreateManyProductInput[]
  }

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    order?: OrderUpdateOneWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    orderId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductInfoBlockUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductInfoBlockWhereUniqueInput
    update: XOR<ProductInfoBlockUpdateWithoutProductInput, ProductInfoBlockUncheckedUpdateWithoutProductInput>
    create: XOR<ProductInfoBlockCreateWithoutProductInput, ProductInfoBlockUncheckedCreateWithoutProductInput>
  }

  export type ProductInfoBlockUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductInfoBlockWhereUniqueInput
    data: XOR<ProductInfoBlockUpdateWithoutProductInput, ProductInfoBlockUncheckedUpdateWithoutProductInput>
  }

  export type ProductInfoBlockUpdateManyWithWhereWithoutProductInput = {
    where: ProductInfoBlockScalarWhereInput
    data: XOR<ProductInfoBlockUpdateManyMutationInput, ProductInfoBlockUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductInfoBlockScalarWhereInput = {
    AND?: ProductInfoBlockScalarWhereInput | ProductInfoBlockScalarWhereInput[]
    OR?: ProductInfoBlockScalarWhereInput[]
    NOT?: ProductInfoBlockScalarWhereInput | ProductInfoBlockScalarWhereInput[]
    id?: IntFilter<"ProductInfoBlock"> | number
    blockOrder?: IntFilter<"ProductInfoBlock"> | number
    align?: StringFilter<"ProductInfoBlock"> | string
    title?: StringFilter<"ProductInfoBlock"> | string
    content?: StringFilter<"ProductInfoBlock"> | string
    productId?: IntFilter<"ProductInfoBlock"> | number
  }

  export type ProductMainImageUpsertWithoutProductInput = {
    update: XOR<ProductMainImageUpdateWithoutProductInput, ProductMainImageUncheckedUpdateWithoutProductInput>
    create: XOR<ProductMainImageCreateWithoutProductInput, ProductMainImageUncheckedCreateWithoutProductInput>
    where?: ProductMainImageWhereInput
  }

  export type ProductMainImageUpdateToOneWithWhereWithoutProductInput = {
    where?: ProductMainImageWhereInput
    data: XOR<ProductMainImageUpdateWithoutProductInput, ProductMainImageUncheckedUpdateWithoutProductInput>
  }

  export type ProductMainImageUpdateWithoutProductInput = {
    image?: StringFieldUpdateOperationsInput | string
  }

  export type ProductMainImageUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type OrderProductsUpsertWithWhereUniqueWithoutProductInput = {
    where: OrderProductsWhereUniqueInput
    update: XOR<OrderProductsUpdateWithoutProductInput, OrderProductsUncheckedUpdateWithoutProductInput>
    create: XOR<OrderProductsCreateWithoutProductInput, OrderProductsUncheckedCreateWithoutProductInput>
  }

  export type OrderProductsUpdateWithWhereUniqueWithoutProductInput = {
    where: OrderProductsWhereUniqueInput
    data: XOR<OrderProductsUpdateWithoutProductInput, OrderProductsUncheckedUpdateWithoutProductInput>
  }

  export type OrderProductsUpdateManyWithWhereWithoutProductInput = {
    where: OrderProductsScalarWhereInput
    data: XOR<OrderProductsUpdateManyMutationInput, OrderProductsUncheckedUpdateManyWithoutProductInput>
  }

  export type OrderProductsScalarWhereInput = {
    AND?: OrderProductsScalarWhereInput | OrderProductsScalarWhereInput[]
    OR?: OrderProductsScalarWhereInput[]
    NOT?: OrderProductsScalarWhereInput | OrderProductsScalarWhereInput[]
    OrderId?: IntFilter<"OrderProducts"> | number
    productId?: IntFilter<"OrderProducts"> | number
    count_of_product?: IntFilter<"OrderProducts"> | number
    price?: IntFilter<"OrderProducts"> | number
    discount?: IntFilter<"OrderProducts"> | number
  }

  export type ProductCreateWithoutCategoryInput = {
    name: string
    price: number
    discount: number
    countOfProduct: number
    infoBlocks?: ProductInfoBlockCreateNestedManyWithoutProductInput
    mainImage?: ProductMainImageCreateNestedOneWithoutProductInput
    orders?: OrderProductsCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    price: number
    discount: number
    countOfProduct: number
    infoBlocks?: ProductInfoBlockUncheckedCreateNestedManyWithoutProductInput
    mainImage?: ProductMainImageUncheckedCreateNestedOneWithoutProductInput
    orders?: OrderProductsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
  }

  export type OrderCreateWithoutCategoriesInput = {
    username: string
    lastname: string
    patronymic: string
    totalDiscount: number
    payment: string
    trackingNumber: number
    totalPrice: number
    countOfProducts: number
    orderDate: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    address: AddressCreateNestedOneWithoutOrderInput
    products?: OrderProductsCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutCategoriesInput = {
    id?: number
    username: string
    lastname: string
    patronymic: string
    totalDiscount: number
    payment: string
    trackingNumber: number
    totalPrice: number
    countOfProducts: number
    orderDate: Date | string
    userId: number
    addressId: number
    products?: OrderProductsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutCategoriesInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutCategoriesInput, OrderUncheckedCreateWithoutCategoriesInput>
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    price?: IntFilter<"Product"> | number
    discount?: IntFilter<"Product"> | number
    countOfProduct?: IntFilter<"Product"> | number
    categoryId?: IntFilter<"Product"> | number
  }

  export type OrderUpsertWithoutCategoriesInput = {
    update: XOR<OrderUpdateWithoutCategoriesInput, OrderUncheckedUpdateWithoutCategoriesInput>
    create: XOR<OrderCreateWithoutCategoriesInput, OrderUncheckedCreateWithoutCategoriesInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutCategoriesInput, OrderUncheckedUpdateWithoutCategoriesInput>
  }

  export type OrderUpdateWithoutCategoriesInput = {
    username?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    patronymic?: StringFieldUpdateOperationsInput | string
    totalDiscount?: IntFieldUpdateOperationsInput | number
    payment?: StringFieldUpdateOperationsInput | string
    trackingNumber?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    countOfProducts?: IntFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    address?: AddressUpdateOneRequiredWithoutOrderNestedInput
    products?: OrderProductsUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    patronymic?: StringFieldUpdateOperationsInput | string
    totalDiscount?: IntFieldUpdateOperationsInput | number
    payment?: StringFieldUpdateOperationsInput | string
    trackingNumber?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    countOfProducts?: IntFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    addressId?: IntFieldUpdateOperationsInput | number
    products?: OrderProductsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type ProductCreateWithoutInfoBlocksInput = {
    name: string
    price: number
    discount: number
    countOfProduct: number
    category: CategoryCreateNestedOneWithoutProductsInput
    mainImage?: ProductMainImageCreateNestedOneWithoutProductInput
    orders?: OrderProductsCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutInfoBlocksInput = {
    id?: number
    name: string
    price: number
    discount: number
    countOfProduct: number
    categoryId: number
    mainImage?: ProductMainImageUncheckedCreateNestedOneWithoutProductInput
    orders?: OrderProductsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutInfoBlocksInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutInfoBlocksInput, ProductUncheckedCreateWithoutInfoBlocksInput>
  }

  export type ProductImageCreateWithoutInfoBlockInput = {
    image: string
    imageOrder: number
  }

  export type ProductImageUncheckedCreateWithoutInfoBlockInput = {
    id?: number
    image: string
    imageOrder: number
  }

  export type ProductImageCreateOrConnectWithoutInfoBlockInput = {
    where: ProductImageWhereUniqueInput
    create: XOR<ProductImageCreateWithoutInfoBlockInput, ProductImageUncheckedCreateWithoutInfoBlockInput>
  }

  export type ProductImageCreateManyInfoBlockInputEnvelope = {
    data: ProductImageCreateManyInfoBlockInput | ProductImageCreateManyInfoBlockInput[]
  }

  export type ProductUpsertWithoutInfoBlocksInput = {
    update: XOR<ProductUpdateWithoutInfoBlocksInput, ProductUncheckedUpdateWithoutInfoBlocksInput>
    create: XOR<ProductCreateWithoutInfoBlocksInput, ProductUncheckedCreateWithoutInfoBlocksInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutInfoBlocksInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutInfoBlocksInput, ProductUncheckedUpdateWithoutInfoBlocksInput>
  }

  export type ProductUpdateWithoutInfoBlocksInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    countOfProduct?: IntFieldUpdateOperationsInput | number
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    mainImage?: ProductMainImageUpdateOneWithoutProductNestedInput
    orders?: OrderProductsUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutInfoBlocksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    countOfProduct?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    mainImage?: ProductMainImageUncheckedUpdateOneWithoutProductNestedInput
    orders?: OrderProductsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductImageUpsertWithWhereUniqueWithoutInfoBlockInput = {
    where: ProductImageWhereUniqueInput
    update: XOR<ProductImageUpdateWithoutInfoBlockInput, ProductImageUncheckedUpdateWithoutInfoBlockInput>
    create: XOR<ProductImageCreateWithoutInfoBlockInput, ProductImageUncheckedCreateWithoutInfoBlockInput>
  }

  export type ProductImageUpdateWithWhereUniqueWithoutInfoBlockInput = {
    where: ProductImageWhereUniqueInput
    data: XOR<ProductImageUpdateWithoutInfoBlockInput, ProductImageUncheckedUpdateWithoutInfoBlockInput>
  }

  export type ProductImageUpdateManyWithWhereWithoutInfoBlockInput = {
    where: ProductImageScalarWhereInput
    data: XOR<ProductImageUpdateManyMutationInput, ProductImageUncheckedUpdateManyWithoutInfoBlockInput>
  }

  export type ProductImageScalarWhereInput = {
    AND?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
    OR?: ProductImageScalarWhereInput[]
    NOT?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
    id?: IntFilter<"ProductImage"> | number
    image?: StringFilter<"ProductImage"> | string
    imageOrder?: IntFilter<"ProductImage"> | number
    infoBlockId?: IntFilter<"ProductImage"> | number
  }

  export type ProductInfoBlockCreateWithoutImagesInput = {
    blockOrder: number
    align: string
    title: string
    content: string
    product: ProductCreateNestedOneWithoutInfoBlocksInput
  }

  export type ProductInfoBlockUncheckedCreateWithoutImagesInput = {
    id?: number
    blockOrder: number
    align: string
    title: string
    content: string
    productId: number
  }

  export type ProductInfoBlockCreateOrConnectWithoutImagesInput = {
    where: ProductInfoBlockWhereUniqueInput
    create: XOR<ProductInfoBlockCreateWithoutImagesInput, ProductInfoBlockUncheckedCreateWithoutImagesInput>
  }

  export type ProductInfoBlockUpsertWithoutImagesInput = {
    update: XOR<ProductInfoBlockUpdateWithoutImagesInput, ProductInfoBlockUncheckedUpdateWithoutImagesInput>
    create: XOR<ProductInfoBlockCreateWithoutImagesInput, ProductInfoBlockUncheckedCreateWithoutImagesInput>
    where?: ProductInfoBlockWhereInput
  }

  export type ProductInfoBlockUpdateToOneWithWhereWithoutImagesInput = {
    where?: ProductInfoBlockWhereInput
    data: XOR<ProductInfoBlockUpdateWithoutImagesInput, ProductInfoBlockUncheckedUpdateWithoutImagesInput>
  }

  export type ProductInfoBlockUpdateWithoutImagesInput = {
    blockOrder?: IntFieldUpdateOperationsInput | number
    align?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutInfoBlocksNestedInput
  }

  export type ProductInfoBlockUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    blockOrder?: IntFieldUpdateOperationsInput | number
    align?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCreateWithoutMainImageInput = {
    name: string
    price: number
    discount: number
    countOfProduct: number
    category: CategoryCreateNestedOneWithoutProductsInput
    infoBlocks?: ProductInfoBlockCreateNestedManyWithoutProductInput
    orders?: OrderProductsCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutMainImageInput = {
    id?: number
    name: string
    price: number
    discount: number
    countOfProduct: number
    categoryId: number
    infoBlocks?: ProductInfoBlockUncheckedCreateNestedManyWithoutProductInput
    orders?: OrderProductsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutMainImageInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutMainImageInput, ProductUncheckedCreateWithoutMainImageInput>
  }

  export type ProductUpsertWithoutMainImageInput = {
    update: XOR<ProductUpdateWithoutMainImageInput, ProductUncheckedUpdateWithoutMainImageInput>
    create: XOR<ProductCreateWithoutMainImageInput, ProductUncheckedCreateWithoutMainImageInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutMainImageInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutMainImageInput, ProductUncheckedUpdateWithoutMainImageInput>
  }

  export type ProductUpdateWithoutMainImageInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    countOfProduct?: IntFieldUpdateOperationsInput | number
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    infoBlocks?: ProductInfoBlockUpdateManyWithoutProductNestedInput
    orders?: OrderProductsUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutMainImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    countOfProduct?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    infoBlocks?: ProductInfoBlockUncheckedUpdateManyWithoutProductNestedInput
    orders?: OrderProductsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type AddressCreateWithoutUserIdInput = {
    city: string
    street: string
    house: string
    flat: string
    entrance: string
    order?: OrderCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateWithoutUserIdInput = {
    id?: number
    city: string
    street: string
    house: string
    flat: string
    entrance: string
    order?: OrderUncheckedCreateNestedOneWithoutAddressInput
  }

  export type AddressCreateOrConnectWithoutUserIdInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutUserIdInput, AddressUncheckedCreateWithoutUserIdInput>
  }

  export type OrderCreateWithoutUserInput = {
    username: string
    lastname: string
    patronymic: string
    totalDiscount: number
    payment: string
    trackingNumber: number
    totalPrice: number
    countOfProducts: number
    orderDate: Date | string
    address: AddressCreateNestedOneWithoutOrderInput
    products?: OrderProductsCreateNestedManyWithoutOrderInput
    categories?: CategoryCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: number
    username: string
    lastname: string
    patronymic: string
    totalDiscount: number
    payment: string
    trackingNumber: number
    totalPrice: number
    countOfProducts: number
    orderDate: Date | string
    addressId: number
    products?: OrderProductsUncheckedCreateNestedManyWithoutOrderInput
    categories?: CategoryUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
  }

  export type AddressUpsertWithoutUserIdInput = {
    update: XOR<AddressUpdateWithoutUserIdInput, AddressUncheckedUpdateWithoutUserIdInput>
    create: XOR<AddressCreateWithoutUserIdInput, AddressUncheckedCreateWithoutUserIdInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutUserIdInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutUserIdInput, AddressUncheckedUpdateWithoutUserIdInput>
  }

  export type AddressUpdateWithoutUserIdInput = {
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    house?: StringFieldUpdateOperationsInput | string
    flat?: StringFieldUpdateOperationsInput | string
    entrance?: StringFieldUpdateOperationsInput | string
    order?: OrderUpdateOneWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateWithoutUserIdInput = {
    id?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    house?: StringFieldUpdateOperationsInput | string
    flat?: StringFieldUpdateOperationsInput | string
    entrance?: StringFieldUpdateOperationsInput | string
    order?: OrderUncheckedUpdateOneWithoutAddressNestedInput
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: IntFilter<"Order"> | number
    username?: StringFilter<"Order"> | string
    lastname?: StringFilter<"Order"> | string
    patronymic?: StringFilter<"Order"> | string
    totalDiscount?: IntFilter<"Order"> | number
    payment?: StringFilter<"Order"> | string
    trackingNumber?: IntFilter<"Order"> | number
    totalPrice?: IntFilter<"Order"> | number
    countOfProducts?: IntFilter<"Order"> | number
    orderDate?: DateTimeFilter<"Order"> | Date | string
    userId?: IntFilter<"Order"> | number
    addressId?: IntFilter<"Order"> | number
  }

  export type UserCreateWithoutAddressInput = {
    username: string
    lastname: string
    patronymic: string
    email: string
    birthDate: Date | string
    phoneNumber: string
    password: string
    orders?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAddressInput = {
    id?: number
    username: string
    lastname: string
    patronymic: string
    email: string
    birthDate: Date | string
    phoneNumber: string
    password: string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAddressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
  }

  export type UserCreateManyAddressInputEnvelope = {
    data: UserCreateManyAddressInput | UserCreateManyAddressInput[]
  }

  export type OrderCreateWithoutAddressInput = {
    username: string
    lastname: string
    patronymic: string
    totalDiscount: number
    payment: string
    trackingNumber: number
    totalPrice: number
    countOfProducts: number
    orderDate: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    products?: OrderProductsCreateNestedManyWithoutOrderInput
    categories?: CategoryCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutAddressInput = {
    id?: number
    username: string
    lastname: string
    patronymic: string
    totalDiscount: number
    payment: string
    trackingNumber: number
    totalPrice: number
    countOfProducts: number
    orderDate: Date | string
    userId: number
    products?: OrderProductsUncheckedCreateNestedManyWithoutOrderInput
    categories?: CategoryUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutAddressInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutAddressInput, OrderUncheckedCreateWithoutAddressInput>
  }

  export type UserUpsertWithWhereUniqueWithoutAddressInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutAddressInput, UserUncheckedUpdateWithoutAddressInput>
    create: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
  }

  export type UserUpdateWithWhereUniqueWithoutAddressInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutAddressInput, UserUncheckedUpdateWithoutAddressInput>
  }

  export type UserUpdateManyWithWhereWithoutAddressInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutAddressInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    patronymic?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    birthDate?: DateTimeFilter<"User"> | Date | string
    phoneNumber?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    addressId?: IntNullableFilter<"User"> | number | null
  }

  export type OrderUpsertWithoutAddressInput = {
    update: XOR<OrderUpdateWithoutAddressInput, OrderUncheckedUpdateWithoutAddressInput>
    create: XOR<OrderCreateWithoutAddressInput, OrderUncheckedCreateWithoutAddressInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutAddressInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutAddressInput, OrderUncheckedUpdateWithoutAddressInput>
  }

  export type OrderUpdateWithoutAddressInput = {
    username?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    patronymic?: StringFieldUpdateOperationsInput | string
    totalDiscount?: IntFieldUpdateOperationsInput | number
    payment?: StringFieldUpdateOperationsInput | string
    trackingNumber?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    countOfProducts?: IntFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    products?: OrderProductsUpdateManyWithoutOrderNestedInput
    categories?: CategoryUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    patronymic?: StringFieldUpdateOperationsInput | string
    totalDiscount?: IntFieldUpdateOperationsInput | number
    payment?: StringFieldUpdateOperationsInput | string
    trackingNumber?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    countOfProducts?: IntFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    products?: OrderProductsUncheckedUpdateManyWithoutOrderNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type UserCreateWithoutOrdersInput = {
    username: string
    lastname: string
    patronymic: string
    email: string
    birthDate: Date | string
    phoneNumber: string
    password: string
    address?: AddressCreateNestedOneWithoutUserIdInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: number
    username: string
    lastname: string
    patronymic: string
    email: string
    birthDate: Date | string
    phoneNumber: string
    password: string
    addressId?: number | null
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type AddressCreateWithoutOrderInput = {
    city: string
    street: string
    house: string
    flat: string
    entrance: string
    userId?: UserCreateNestedManyWithoutAddressInput
  }

  export type AddressUncheckedCreateWithoutOrderInput = {
    id?: number
    city: string
    street: string
    house: string
    flat: string
    entrance: string
    userId?: UserUncheckedCreateNestedManyWithoutAddressInput
  }

  export type AddressCreateOrConnectWithoutOrderInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutOrderInput, AddressUncheckedCreateWithoutOrderInput>
  }

  export type OrderProductsCreateWithoutOrderInput = {
    count_of_product: number
    price: number
    discount: number
    Product: ProductCreateNestedOneWithoutOrdersInput
  }

  export type OrderProductsUncheckedCreateWithoutOrderInput = {
    productId: number
    count_of_product: number
    price: number
    discount: number
  }

  export type OrderProductsCreateOrConnectWithoutOrderInput = {
    where: OrderProductsWhereUniqueInput
    create: XOR<OrderProductsCreateWithoutOrderInput, OrderProductsUncheckedCreateWithoutOrderInput>
  }

  export type OrderProductsCreateManyOrderInputEnvelope = {
    data: OrderProductsCreateManyOrderInput | OrderProductsCreateManyOrderInput[]
  }

  export type CategoryCreateWithoutOrderInput = {
    name: string
    image: string
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutOrderInput = {
    id?: number
    name: string
    image: string
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutOrderInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutOrderInput, CategoryUncheckedCreateWithoutOrderInput>
  }

  export type CategoryCreateManyOrderInputEnvelope = {
    data: CategoryCreateManyOrderInput | CategoryCreateManyOrderInput[]
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    username?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    patronymic?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: AddressUpdateOneWithoutUserIdNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    patronymic?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    addressId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AddressUpsertWithoutOrderInput = {
    update: XOR<AddressUpdateWithoutOrderInput, AddressUncheckedUpdateWithoutOrderInput>
    create: XOR<AddressCreateWithoutOrderInput, AddressUncheckedCreateWithoutOrderInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutOrderInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutOrderInput, AddressUncheckedUpdateWithoutOrderInput>
  }

  export type AddressUpdateWithoutOrderInput = {
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    house?: StringFieldUpdateOperationsInput | string
    flat?: StringFieldUpdateOperationsInput | string
    entrance?: StringFieldUpdateOperationsInput | string
    userId?: UserUpdateManyWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    house?: StringFieldUpdateOperationsInput | string
    flat?: StringFieldUpdateOperationsInput | string
    entrance?: StringFieldUpdateOperationsInput | string
    userId?: UserUncheckedUpdateManyWithoutAddressNestedInput
  }

  export type OrderProductsUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderProductsWhereUniqueInput
    update: XOR<OrderProductsUpdateWithoutOrderInput, OrderProductsUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderProductsCreateWithoutOrderInput, OrderProductsUncheckedCreateWithoutOrderInput>
  }

  export type OrderProductsUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderProductsWhereUniqueInput
    data: XOR<OrderProductsUpdateWithoutOrderInput, OrderProductsUncheckedUpdateWithoutOrderInput>
  }

  export type OrderProductsUpdateManyWithWhereWithoutOrderInput = {
    where: OrderProductsScalarWhereInput
    data: XOR<OrderProductsUpdateManyMutationInput, OrderProductsUncheckedUpdateManyWithoutOrderInput>
  }

  export type CategoryUpsertWithWhereUniqueWithoutOrderInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutOrderInput, CategoryUncheckedUpdateWithoutOrderInput>
    create: XOR<CategoryCreateWithoutOrderInput, CategoryUncheckedCreateWithoutOrderInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutOrderInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutOrderInput, CategoryUncheckedUpdateWithoutOrderInput>
  }

  export type CategoryUpdateManyWithWhereWithoutOrderInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutOrderInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    image?: StringFilter<"Category"> | string
    orderId?: IntNullableFilter<"Category"> | number | null
  }

  export type OrderCreateWithoutProductsInput = {
    username: string
    lastname: string
    patronymic: string
    totalDiscount: number
    payment: string
    trackingNumber: number
    totalPrice: number
    countOfProducts: number
    orderDate: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    address: AddressCreateNestedOneWithoutOrderInput
    categories?: CategoryCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutProductsInput = {
    id?: number
    username: string
    lastname: string
    patronymic: string
    totalDiscount: number
    payment: string
    trackingNumber: number
    totalPrice: number
    countOfProducts: number
    orderDate: Date | string
    userId: number
    addressId: number
    categories?: CategoryUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutProductsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutProductsInput, OrderUncheckedCreateWithoutProductsInput>
  }

  export type ProductCreateWithoutOrdersInput = {
    name: string
    price: number
    discount: number
    countOfProduct: number
    category: CategoryCreateNestedOneWithoutProductsInput
    infoBlocks?: ProductInfoBlockCreateNestedManyWithoutProductInput
    mainImage?: ProductMainImageCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutOrdersInput = {
    id?: number
    name: string
    price: number
    discount: number
    countOfProduct: number
    categoryId: number
    infoBlocks?: ProductInfoBlockUncheckedCreateNestedManyWithoutProductInput
    mainImage?: ProductMainImageUncheckedCreateNestedOneWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutOrdersInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutOrdersInput, ProductUncheckedCreateWithoutOrdersInput>
  }

  export type OrderUpsertWithoutProductsInput = {
    update: XOR<OrderUpdateWithoutProductsInput, OrderUncheckedUpdateWithoutProductsInput>
    create: XOR<OrderCreateWithoutProductsInput, OrderUncheckedCreateWithoutProductsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutProductsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutProductsInput, OrderUncheckedUpdateWithoutProductsInput>
  }

  export type OrderUpdateWithoutProductsInput = {
    username?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    patronymic?: StringFieldUpdateOperationsInput | string
    totalDiscount?: IntFieldUpdateOperationsInput | number
    payment?: StringFieldUpdateOperationsInput | string
    trackingNumber?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    countOfProducts?: IntFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    address?: AddressUpdateOneRequiredWithoutOrderNestedInput
    categories?: CategoryUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    patronymic?: StringFieldUpdateOperationsInput | string
    totalDiscount?: IntFieldUpdateOperationsInput | number
    payment?: StringFieldUpdateOperationsInput | string
    trackingNumber?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    countOfProducts?: IntFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    addressId?: IntFieldUpdateOperationsInput | number
    categories?: CategoryUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type ProductUpsertWithoutOrdersInput = {
    update: XOR<ProductUpdateWithoutOrdersInput, ProductUncheckedUpdateWithoutOrdersInput>
    create: XOR<ProductCreateWithoutOrdersInput, ProductUncheckedCreateWithoutOrdersInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutOrdersInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutOrdersInput, ProductUncheckedUpdateWithoutOrdersInput>
  }

  export type ProductUpdateWithoutOrdersInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    countOfProduct?: IntFieldUpdateOperationsInput | number
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    infoBlocks?: ProductInfoBlockUpdateManyWithoutProductNestedInput
    mainImage?: ProductMainImageUpdateOneWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    countOfProduct?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    infoBlocks?: ProductInfoBlockUncheckedUpdateManyWithoutProductNestedInput
    mainImage?: ProductMainImageUncheckedUpdateOneWithoutProductNestedInput
  }

  export type ProductInfoBlockCreateManyProductInput = {
    id?: number
    blockOrder: number
    align: string
    title: string
    content: string
  }

  export type OrderProductsCreateManyProductInput = {
    OrderId: number
    count_of_product: number
    price: number
    discount: number
  }

  export type ProductInfoBlockUpdateWithoutProductInput = {
    blockOrder?: IntFieldUpdateOperationsInput | number
    align?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    images?: ProductImageUpdateManyWithoutInfoBlockNestedInput
  }

  export type ProductInfoBlockUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    blockOrder?: IntFieldUpdateOperationsInput | number
    align?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    images?: ProductImageUncheckedUpdateManyWithoutInfoBlockNestedInput
  }

  export type ProductInfoBlockUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    blockOrder?: IntFieldUpdateOperationsInput | number
    align?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type OrderProductsUpdateWithoutProductInput = {
    count_of_product?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    Order?: OrderUpdateOneRequiredWithoutProductsNestedInput
  }

  export type OrderProductsUncheckedUpdateWithoutProductInput = {
    OrderId?: IntFieldUpdateOperationsInput | number
    count_of_product?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
  }

  export type OrderProductsUncheckedUpdateManyWithoutProductInput = {
    OrderId?: IntFieldUpdateOperationsInput | number
    count_of_product?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCreateManyCategoryInput = {
    id?: number
    name: string
    price: number
    discount: number
    countOfProduct: number
  }

  export type ProductUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    countOfProduct?: IntFieldUpdateOperationsInput | number
    infoBlocks?: ProductInfoBlockUpdateManyWithoutProductNestedInput
    mainImage?: ProductMainImageUpdateOneWithoutProductNestedInput
    orders?: OrderProductsUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    countOfProduct?: IntFieldUpdateOperationsInput | number
    infoBlocks?: ProductInfoBlockUncheckedUpdateManyWithoutProductNestedInput
    mainImage?: ProductMainImageUncheckedUpdateOneWithoutProductNestedInput
    orders?: OrderProductsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    countOfProduct?: IntFieldUpdateOperationsInput | number
  }

  export type ProductImageCreateManyInfoBlockInput = {
    id?: number
    image: string
    imageOrder: number
  }

  export type ProductImageUpdateWithoutInfoBlockInput = {
    image?: StringFieldUpdateOperationsInput | string
    imageOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ProductImageUncheckedUpdateWithoutInfoBlockInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    imageOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ProductImageUncheckedUpdateManyWithoutInfoBlockInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    imageOrder?: IntFieldUpdateOperationsInput | number
  }

  export type OrderCreateManyUserInput = {
    id?: number
    username: string
    lastname: string
    patronymic: string
    totalDiscount: number
    payment: string
    trackingNumber: number
    totalPrice: number
    countOfProducts: number
    orderDate: Date | string
    addressId: number
  }

  export type OrderUpdateWithoutUserInput = {
    username?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    patronymic?: StringFieldUpdateOperationsInput | string
    totalDiscount?: IntFieldUpdateOperationsInput | number
    payment?: StringFieldUpdateOperationsInput | string
    trackingNumber?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    countOfProducts?: IntFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateOneRequiredWithoutOrderNestedInput
    products?: OrderProductsUpdateManyWithoutOrderNestedInput
    categories?: CategoryUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    patronymic?: StringFieldUpdateOperationsInput | string
    totalDiscount?: IntFieldUpdateOperationsInput | number
    payment?: StringFieldUpdateOperationsInput | string
    trackingNumber?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    countOfProducts?: IntFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    addressId?: IntFieldUpdateOperationsInput | number
    products?: OrderProductsUncheckedUpdateManyWithoutOrderNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    patronymic?: StringFieldUpdateOperationsInput | string
    totalDiscount?: IntFieldUpdateOperationsInput | number
    payment?: StringFieldUpdateOperationsInput | string
    trackingNumber?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    countOfProducts?: IntFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    addressId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateManyAddressInput = {
    id?: number
    username: string
    lastname: string
    patronymic: string
    email: string
    birthDate: Date | string
    phoneNumber: string
    password: string
  }

  export type UserUpdateWithoutAddressInput = {
    username?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    patronymic?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    orders?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    patronymic?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    patronymic?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type OrderProductsCreateManyOrderInput = {
    productId: number
    count_of_product: number
    price: number
    discount: number
  }

  export type CategoryCreateManyOrderInput = {
    id?: number
    name: string
    image: string
  }

  export type OrderProductsUpdateWithoutOrderInput = {
    count_of_product?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    Product?: ProductUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderProductsUncheckedUpdateWithoutOrderInput = {
    productId?: IntFieldUpdateOperationsInput | number
    count_of_product?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
  }

  export type OrderProductsUncheckedUpdateManyWithoutOrderInput = {
    productId?: IntFieldUpdateOperationsInput | number
    count_of_product?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryUpdateWithoutOrderInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}