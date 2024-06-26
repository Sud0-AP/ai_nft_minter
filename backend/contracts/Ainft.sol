// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Ainft is ERC721URIStorage, Ownable {
    uint256 public tokenCounter;

    constructor() ERC721("AINFT", "AINFT") {
        tokenCounter = 0;
    }

    function createNFT(string memory tokenURI) public returns (uint256) {
        uint256 newItemId = tokenCounter;
        _safeMint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI); // Correct function name is _setTokenURI
        tokenCounter++;
        return newItemId;
    }
}
