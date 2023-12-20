import { Product as PrismaProduct } from ".prisma/client";
import getPrismaClient from "../../../prisma/service/prismaClient.service";


const prismaClient = getPrismaClient();
export class Product {
  private _productData: PrismaProduct;

  constructor(productData: PrismaProduct) {
    this._productData = productData;
  }

  get id() {
    return this._productData.id;
  }

  get name() {
    return this._productData.name;
  }

  set name(name: string) {
    this._productData.name = name;
  }

  get brand() {
    return this._productData.brand;
  }

  set brand(brand: string) {
    this._productData.brand = brand;
  }

  get category() {
    return this._productData.category;
  }

  set category(category: string) {
    this._productData.category = category;
  }

  get description() {
    return this._productData.description;
  }

  set description(description: string) {
    this._productData.description = description;
  }

  get imageURL(): string | null {
    return this._productData.imageURL || null;
  }

  set imageURL(imageURL: string) {
    this._productData.imageURL = imageURL;
  }

  get ingredients() {
    return this._productData.ingredients;
  }

  set ingredients(ingredients: string) {
    this._productData.ingredients = ingredients
  }

  get createdAt() {
    return this._productData.createdAt;
  }

  get updatedAt() {
    return this._productData.updatedAt;
  }

  get $data(): PrismaProduct {
    return this._productData;
  }

  set $data(data: PrismaProduct) {
    this._productData = data;
  }
}