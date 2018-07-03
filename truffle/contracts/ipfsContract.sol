pragma solidity ^0.4.0;

contract ipfsContract {
    
    struct dataInfo {
        bytes32 hash;
        bytes32 name;
        bytes32 description;
    }
    
    dataInfo[] public dataInfos;
    
    function set(bytes32 _hash, bytes32 _name, bytes32 _description) public {
        dataInfo memory newData;
        newData.hash = _hash;
        newData.name = _name;
        newData.description = _description;
        dataInfos.push(newData);
    }
    
    
    function get() public constant returns (bytes32[], bytes32[], bytes32[]) {
        uint arrayLength = dataInfos.length;
        bytes32[] memory hashes = new bytes32[](arrayLength);
        bytes32[] memory names = new bytes32[](arrayLength);
        bytes32[] memory descriptions = new bytes32[](arrayLength);
        
        for (uint i; i < arrayLength; i++) {
        hashes[i] = dataInfos[i].hash;
        names[i] = dataInfos[i].name;
        descriptions[i] = dataInfos[i].description;
        }
        
        return (hashes, names, descriptions);
    }
    
    function bytes32ToString(bytes32 x) constant returns (string) {
    bytes memory bytesString = new bytes(32);
    uint charCount = 0;
    for (uint j = 0; j < 32; j++) {
        byte char = byte(bytes32(uint(x) * 2 ** (8 * j)));
        if (char != 0) {
            bytesString[charCount] = char;
            charCount++;
        }
    }
    bytes memory bytesStringTrimmed = new bytes(charCount);
    for (j = 0; j < charCount; j++) {
        bytesStringTrimmed[j] = bytesString[j];
    }
    return string(bytesStringTrimmed);
}
}



