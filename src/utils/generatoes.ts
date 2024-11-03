import { randomUUID } from "node:crypto"

/*
 * ----------------------------------------------------------------------
 *  Generator Functions
 *  Generates a random UUID
 *  Generates a slug with a random UUID
 * ----------------------------------------------------------------------
 */

export function cryptoUUID(length?: number): string {
  return randomUUID().substring(0, length ? length : 6)
}

export function slugGenerator(text: string) {
  return `${text
    .toLowerCase()
    .replace(/[+%()=/|!@#$%^&*~:"',.`]/g, "")
    .replace(/\s+/g, "-")}-${randomUUID().substring(0, 6)}`
}
