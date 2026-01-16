import { existsSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const BASE_DIR = './i18n/locales'

export const getLocaleFiles = (locale: string): string[] => {
  const shortCode = locale.split('-')[0] as string

  const candidates: string[] = [
    `${locale}.json`,
    ...(existsSync(join(BASE_DIR, shortCode))
      ? readdirSync(join(BASE_DIR, shortCode))
          .filter((f: string) => f.endsWith('.json'))
          .map((f: string) => `${shortCode}/${f}`)
      : [])
  ]

  return candidates.filter((f: string) => existsSync(join(BASE_DIR, f)))
}
