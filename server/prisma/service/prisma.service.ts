import { PrismaClient } from "@prisma/client";
import getPrismaClient from "./prismaClient.service";

export class PrismaService {
  private readonly _prismaClient: PrismaClient;

  constructor() {
    this._prismaClient = new PrismaClient();
  }

  get prismaClient() {
    return this._prismaClient;
  }
}