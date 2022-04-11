// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

//import the openzeppelin contracts
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// NFTee is ERC721 signifies that the contarct we are creating imports
// ERC721 and follows the ERC721 contract from openzeppelin
contract NFTee is ERC721 {

    constructor() ERC721("HarshPatil's NFT", "HARSH-NFT") {
        // mint an NFT to yourself
        _mint(msg.sender, 1);
    }
}
