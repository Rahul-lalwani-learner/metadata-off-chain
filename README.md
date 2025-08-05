# Off-Chain Metadata Service

This project is a simple Node.js/Express server for creating and serving off-chain metadata, typically used for NFTs or other digital assets.

## Features
- **POST /metadata**: Create new metadata by sending a JSON body with `name`, `symbol`, `description`, and `image` fields. Returns a URL where the metadata can be accessed.
- **GET /metadata/:metadataid.json**: Retrieve the metadata as a JSON file using the unique metadata ID.

## Usage
1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Set environment variables:**
   - `MONGO_CONNECTION_STRING`: MongoDB connection string
   - `BACKEND_URL`: The base URL of your backend (e.g., `https://your-app.vercel.app/`)
3. **Run locally:**
   ```bash
   npm run dev
   ```
4. **Deploy to Vercel:**
   - Use the included `vercel.json` for configuration
   - Set environment variables in the Vercel dashboard
   - Deploy with:
     ```bash
     vercel
     ```

## Example
- **Create metadata:**
  ```http
  POST /metadata
  Content-Type: application/json
  {
    "name": "My NFT",
    "symbol": "NFT",
    "description": "A cool NFT",
    "image": "https://example.com/image.png"
  }
  ```
- **Get metadata:**
  ```http
  GET /metadata/<metadataid>.json
  ```

## License
ISC
