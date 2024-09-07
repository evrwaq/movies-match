import { fileURLToPath } from 'url'
import { dirname } from 'path'
const { getDefaultConfig } = require('@expo/metro-config')

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const defaultConfig = getDefaultConfig(__dirname)
defaultConfig.resolver.sourceExts.push('cjs')

module.exports = defaultConfig
