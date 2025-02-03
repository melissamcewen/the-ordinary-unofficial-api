# The Ordinary Unofficial API

An unofficial TypeScript API for accessing The Ordinary product information. This project is not affiliated with, endorsed by, or connected to The Ordinary, DECIEM, or any of their subsidiaries or affiliates.

## 🛠️ Technical Stack

This modern API is built with cutting-edge technologies:

- **TypeScript** - Fully typed for enhanced developer experience and code reliability
- **Vite** - Next-generation frontend tooling for optimal build performance
- **ESM/UMD Support** - Dual module format support for maximum compatibility
- **Source Maps** - Included for better debugging experience
- **Type Declarations** - Automatically generated `.d.ts` files
- **Module Resolution** - Uses modern bundler-style module resolution
- **Path Aliases** - Configured with TypeScript path aliases for clean imports

## 🚀 Features

- Type-safe product information access
- Modern ES modules support
- Tree-shakeable for optimal bundle size
- Comprehensive TypeScript declarations

## 📦 Installation

```bash
npm install the-ordinary-unofficial-api
```

## 🔧 Usage

```typescript
import { getProduct } from 'the-ordinary-unofficial-api';

// Get product information
const product = getProduct('niacinamide-10-zinc-1');
```

## ⚖️ Legal Disclaimer

This is an **unofficial** API and is not affiliated with, endorsed by, or connected to The Ordinary or DECIEM. All product names, logos, and brands are property of their respective owners. This project is intended for educational and portfolio purposes only.

## 📝 License

[MIT License](./license.txt)

## 🛠️ Development

This project uses:

- `vite` for building and development
- `vite-plugin-dts` for TypeScript declaration generation
- Modern TypeScript configuration with strict type checking
- ESLint and Prettier for code quality

To build the project:

```bash
npm install
npm run build
```
