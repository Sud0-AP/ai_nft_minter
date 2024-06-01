# AI NFT Minter

Welcome to the AI NFT Minter project! This project allows users to generate AI-driven images, modify them, and mint them as NFTs on the Polygon blockchain. The generated images are stored on IPFS and can be minted through a connected wallet.

## Live Demo

Check out the live demo of the project [here](https://ai-nft-minter-website.vercel.app/).

## Features

- **AI Image Generation**: Generate images based on textual descriptions using the Unsplash API.
- **IPFS Integration**: Upload images to IPFS using Pinata.
- **Polygon Blockchain**: Mint the generated images as NFTs on the Polygon Amoy Testnet.
- **Wallet Connection**: Connect your wallet to mint the NFTs.

## Technologies Used

- **Frontend**: Next.js, React, TypeScript
- **Blockchain**: Solidity, Hardhat
- **APIs**: Unsplash, Pinata
- **Storage**: IPFS
- **Deployment**: Vercel for the frontend, Polygon Amoy Testnet for the smart contracts

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js and npm
- Metamask (or any Ethereum wallet)
- Vercel account (for deployment)
- Pinata account (for IPFS storage)
- Polygon Amoy Testnet account (for deploying smart contracts)

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/ai-nft-minter.git
    cd ai-nft-minter
    ```

2. **Install dependencies**:

    ```bash
    cd frontend
    npm install
    cd ../backend
    npm install
    ```

3. **Set up environment variables**:

    Create a `.env` file in both `frontend` and `backend` directories with the following content:

    **Frontend `.env.local`**:

    ```env
    NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=your_unsplash_access_key
    NEXT_PUBLIC_PINATA_API_KEY=your_pinata_api_key
    NEXT_PUBLIC_PINATA_SECRET_API_KEY=your_pinata_secret_api_key
    ```

    **Backend `.env`**:

    ```env
    PRIVATE_KEY=your_polygon_testnet_private_key
    ETHERSCAN_API_KEY=your_etherscan_api_key
    ```

4. **Compile and deploy the smart contract**:

    ```bash
    cd backend
    npx hardhat compile
    npx hardhat run scripts/deploy.js --network amoy
    ```

    After deploying, update the `contractAddress` in `frontend/pages/MintNFT.tsx` with your deployed contract address.

5. **Run the development server**:

    ```bash
    cd frontend
    npm run dev
    ```

6. **Deploy to Vercel**:

    Follow the instructions on [Vercel](https://vercel.com/) to deploy the frontend.

## Usage

1. **Connect Wallet**: Open the application and connect your wallet.
2. **Generate Image**: Enter a description for the image and generate it using the Unsplash API.
3. **Mint NFT**: Once the image is generated, mint it as an NFT on the Polygon blockchain.

## Contributing

Feel free to submit issues or pull requests. We welcome contributions to improve this project.

## License

This project is licensed under the MIT License.

---

**Note**: Ensure that all environment variables are set correctly and you have sufficient test MATIC in your Polygon Amoy Testnet account to cover transaction costs.

For any further questions or support, please open an issue or contact the maintainer.

