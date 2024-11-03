import { randomUUIDv7 } from "bun"

/*
 * ----------------------------------------------------------------------
 *  Generator Functions
 *  Generates a random UUID
 *  Generates a slug with a random UUID
 * ----------------------------------------------------------------------
 */

export function cryptoUUID(length?: number): string {
  return randomUUIDv7().substring(0, length ? length : 6)
}

export function slugGenerator(text: string) {
  return `${text
    .toLowerCase()
    .replace(/[+%()=/|!@#$%^&*~:"',.`]/g, "")
    .replace(/\s+/g, "-")}-${randomUUIDv7().substring(0, 6)}`
}
