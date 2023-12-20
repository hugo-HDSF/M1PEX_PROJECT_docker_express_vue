import { z } from "zod";

export function areSameStrings(...strings: string[]): boolean {
  const [sample] = strings;
  return strings.every(
    (string) => string.toLowerCase() === sample.toLowerCase()
  );
}

export function isArrayEmpty<T>(array: T[]): boolean {
  return array.length === 0;
}

export function isNumberDecimal(number: number): boolean {
  return number % 1 !== 0;
}

export function isNumberNegative(number: number): boolean {
  return number < 0;
}

export function isStringEmpty(string: string): boolean {
  return !string || string.includes(" ");
}

export function isStrictlyNaN(value: any): boolean {
  return isNaN(value) || typeof value === "string";
}

export function isUuid(uuid: string): boolean {
  //use zod to validate uuid()
  const uuidSchema = z.string().uuid();
  try {
    uuidSchema.parse(uuid);
    return true;
  } catch (error) {
    return false;
  }
}
