// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { ContractMetadata } from "@forma-dev/sdk/contracts/metadata/ContractMetadata.sol";
import { ERC721Cementable } from "@forma-dev/sdk/contracts/token/ERC721/ERC721Cementable.sol";
import { Ownable, Ownable2Step } from "@openzeppelin/contracts/access/Ownable2Step.sol";
import { ERC721 as ERC721OpenZeppelin } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import { IERC721 } from "@openzeppelin/contracts/token/ERC721/IERC721.sol";

import { TokenMetadataReader } from "@forma-dev/sdk/contracts/metadata/TokenMetadataReader.sol";
import { TokenMetadataEditor } from "@forma-dev/sdk/contracts/metadata/TokenMetadataEditor.sol";
import { Strings } from "@forma-dev/sdk/contracts/utils/Strings.sol";
import { Base64 } from "@forma-dev/sdk/contracts/utils/Base64.sol";

contract MammothID is Ownable2Step, ContractMetadata, ERC721Cementable {
    using TokenMetadataReader for address;
    using TokenMetadataEditor for string;
    using Strings for string;

    address private constant MAMMOTH_COLLECTION = 0xe2d085f8c89A6360bfD04Ff1f87564D0Dd55B005;

    constructor(
        string memory _name,
        string memory _symbol,
        address _initialOwner,
        address _defaultRoyaltyReceiver,
        uint96 _defaultRoyaltyFeeNumerator
    ) ERC721OpenZeppelin(_name, _symbol) Ownable(_initialOwner) {
        _setDefaultRoyalty(_defaultRoyaltyReceiver, _defaultRoyaltyFeeNumerator);
    }

    function mint(address _to, uint256 _tokenId) external {
        require(IERC721(MAMMOTH_COLLECTION).ownerOf(_tokenId) == _msgSender(), "Not mammoth owner");

        string memory mammothName = MAMMOTH_COLLECTION.getTokenMetadata(_tokenId, "name");
        string memory image = MAMMOTH_COLLECTION.getTokenMetadata(_tokenId, "image");
        string memory eyes = MAMMOTH_COLLECTION.getTokenAttribute(_tokenId, "Eyes");
        string memory tusks = MAMMOTH_COLLECTION.getTokenAttribute(_tokenId, "Tusks");

        // replace ipfs:// with https://ipfs.forma.art/ipfs/
        image = image.replace("ipfs://", "https://ipfs.forma.art/ipfs/", 1);

        // generate the token image
        string memory imageUri = _generateTokenImage(mammothName, image, eyes.toUpperCase(), tusks.toUpperCase());

        // build the token metadata
        string memory tokenMetadata = "{}";
        tokenMetadata = tokenMetadata
            .setTokenMetadataByPath("name", mammothName)
            .setTokenMetadataByPath("description", "Mammoth Security ID")
            .setTokenMetadataByPath("image", imageUri)
            .setTokenAttribute("Eyes", eyes)
            .setTokenAttribute("Tusks", tusks);

        // set the token metadata
        _setTokenMetadata(_tokenId, tokenMetadata);

        // cement the token metadata
        _cementTokenMetadata(_tokenId);

        // mint the token
        _safeMint(_to, _tokenId);
    }

    string private constant MAMMOTH_ID_SVG =
        '<svg width="652" height="383" viewBox="0 0 652 383" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'
        '<style type="text/css">'
        'text { font-family: "Courier New", monospace; }'
        "</style>"
        '<rect width="652" height="383" fill="white" stroke="black"/>'
        '<rect x="1" y="1" width="650" height="381" fill="#313131" stroke="black" stroke-width="24"/>'
        '<rect x="2" y="2" width="648" height="379" fill="url(#pattern0_0_1)" fill-opacity="0.15"/>'
        '<text fill="white" xml:space="preserve" style="white-space: pre" font-size="64" font-weight="bold" letter-spacing="0em"><tspan x="134" y="76.5">MAMMOTH ID</tspan></text>'
        '<text fill="white" xml:space="preserve" style="white-space: pre" font-size="24" font-weight="bold" letter-spacing="0em"><tspan x="278" y="164.5">[NAME]</tspan></text>'
        '<text fill="white" xml:space="preserve" style="white-space: pre" font-size="24" font-weight="bold" letter-spacing="0em"><tspan x="278" y="237.5">[EYES]</tspan></text>'
        '<text fill="white" xml:space="preserve" style="white-space: pre" font-size="24" font-weight="bold" letter-spacing="0em"><tspan x="278" y="310.5">[TUSKS]</tspan></text>'
        '<text fill="white" xml:space="preserve" style="white-space: pre" font-size="20" letter-spacing="0em"><tspan x="288" y="191.5">{{name}}</tspan></text>'
        '<text fill="white" xml:space="preserve" style="white-space: pre" font-size="20" letter-spacing="0em"><tspan x="288" y="264.5">{{eyes}}</tspan></text>'
        '<text fill="white" xml:space="preserve" style="white-space: pre" font-size="20" letter-spacing="0em"><tspan x="288" y="337.5">{{tusks}}</tspan></text>'
        '<line x1="42" y1="35" x2="42" y2="77" stroke="white" stroke-width="10"/>'
        '<line x1="50" y1="35" x2="50" y2="77" stroke="white" stroke-width="2"/>'
        '<line x1="53" y1="35" x2="53" y2="77" stroke="white" stroke-width="2"/>'
        '<line x1="55.5" y1="35" x2="55.5" y2="77" stroke="white"/>'
        '<line x1="59.5" y1="35" x2="59.5" y2="77" stroke="white"/>'
        '<line x1="63.5" y1="35" x2="63.5" y2="77" stroke="white"/>'
        '<line x1="65.5" y1="35" x2="65.5" y2="77" stroke="white"/>'
        '<line x1="71" y1="35" x2="71" y2="77" stroke="white" stroke-width="4"/>'
        '<line x1="75.5" y1="35" x2="75.5" y2="77" stroke="white" stroke-width="3"/>'
        '<line x1="78.5" y1="35" x2="78.5" y2="77" stroke="white"/>'
        '<line x1="82.5" y1="35" x2="82.5" y2="77" stroke="white"/>'
        '<line x1="91" y1="35" x2="91" y2="77" stroke="white" stroke-width="10"/>'
        '<line x1="100.5" y1="35" x2="100.5" y2="77" stroke="white" stroke-width="3"/>'
        '<line x1="103.5" y1="35" x2="103.5" y2="77" stroke="white"/>'
        '<line x1="107.5" y1="35" x2="107.5" y2="77" stroke="white"/>'
        '<line x1="112" y1="35" x2="112" y2="77" stroke="white" stroke-width="4"/>'
        '<rect x="32" y="132" width="218" height="218" fill="url(#pattern1_0_1)" stroke="white" stroke-width="2"/>'
        "<defs>"
        '<pattern id="pattern0_0_1" patternContentUnits="objectBoundingBox" width="1" height="1" viewBox="0 0 2048 2048" preserveAspectRatio="xMidYMid slice">'
        '<image width="2048" height="2048" href="{{image}}"/>'
        "</pattern>"
        '<pattern id="pattern1_0_1" patternContentUnits="objectBoundingBox" width="1" height="1" viewBox="408 195 800 800" preserveAspectRatio="xMidYMid slice">'
        '<image width="2048" height="2048" href="{{image}}"/>'
        "</pattern>"
        "</defs>"
        "</svg>";

    function _generateTokenImage(
        string memory _mammothName,
        string memory _image,
        string memory _eyes,
        string memory _tusks
    ) internal pure returns (string memory) {
        string memory svg = MAMMOTH_ID_SVG
            .replace("{{name}}", _mammothName, 1)
            .replace("{{eyes}}", _eyes, 1)
            .replace("{{tusks}}", _tusks, 1)
            .replace("{{image}}", _image, 2);

        return string.concat("data:image/svg+xml;base64,", Base64.encode(bytes(svg)));
    }

    /**
     * @dev Sets the royalty information that all ids in this contract will default to.
     *
     * Requirements:
     *
     * - `receiver` cannot be the zero address.
     * - `feeNumerator` is the number of basis points (1/10000).
     */
    function setDefaultRoyalty(address _receiver, uint96 _feeNumerator) external onlyOwner {
        _setDefaultRoyalty(_receiver, _feeNumerator);
    }

    function setTokenRoyalty(uint256 _tokenId, address _receiver, uint96 _feeNumerator) external onlyOwner {
        _setTokenRoyalty(_tokenId, _receiver, _feeNumerator);
    }

    function name() public view override(ERC721OpenZeppelin, ContractMetadata) returns (string memory) {
        return ContractMetadata.name();
    }

    function _canSetContractMetadata() internal view override returns (bool) {
        return owner() == _msgSender();
    }

    /// @dev Returns whether token metadata can be set in the given execution context.
    function _canSetTokenMetadata(uint256) internal view override returns (bool) {
        return owner() == _msgSender();
    }
}
