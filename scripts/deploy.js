// Import ethers from Hardhat Package
const { ethers } = require("hardhat");

async function main() {
    /*
    A Contract in ethers.js is an abstraction ued to deploy new smart contracts,
    so nftContract here is factory for instances of our NFTee contract.
*/
    const nftContract = await ethers.getContractFactory("NFTee");

    //here we deploy the contract
    const deployedNFTContract = await nftContract.deploy();

    //print the address of the deployment contract
    console.log("NFT Contract Address:", deployedNFTContract.address);
}

// Call the main function and catch if there is no error
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error);
        process.exit(1);
    });
