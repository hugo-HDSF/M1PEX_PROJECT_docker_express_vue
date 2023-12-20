import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

const getPrismaClient = () => prismaClient;

export default getPrismaClient;