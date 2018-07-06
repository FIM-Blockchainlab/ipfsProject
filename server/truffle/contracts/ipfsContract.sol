pragma solidity ^0.4.2;

contract ipfsContract {
    
    struct dataInfo {
        string hash;
        string name;
        string description;
    }
    
    dataInfo[] public dataInfos;
    
    event dataAdded();
    
    function set(string _hash, string _name, string _description) public {
        dataInfo memory newData;
        newData.hash = _hash;
        newData.name = _name;
        newData.description = _description;
        dataInfos.push(newData);
        emit dataAdded();
    }
    
    
    function getHashName(uint _id) public constant returns(string, string){
        return( dataInfos[_id].hash, dataInfos[_id].name );
    }
    
    
    function get() public constant returns (uint[], bytes32[], bytes32[]) {
        uint arrayLength = dataInfos.length;
        uint[] memory positions = new uint[](arrayLength);
        bytes32[] memory names = new bytes32[](arrayLength);
        bytes32[] memory descriptions = new bytes32[](arrayLength);
        
        for (uint i; i < arrayLength; i++) {
        positions[i] = i;
        names[i] = stringToBytes32( dataInfos[i].name );
        descriptions[i] = stringToBytes32( dataInfos[i].description );
        }
        
        return (positions, names, descriptions);
    }
    
    function deleteElement(uint _id) public {
        dataInfos[_id] = dataInfos[ dataInfos.length - 1 ];
        dataInfos.length--;
    }
    
function stringToBytes32(string memory source) private pure returns(bytes32 result) {
    bytes memory tempEmptyStringTest = bytes(source);
    if (tempEmptyStringTest.length == 0) {
        return 0x0;
    }

    assembly {
        result := mload(add(source, 32))
    }
}

}



