pragma solidity ^0.4.0;
contract Voter {
    address  public registration;
    string public alias ;

    function register(string newAlias) public {
        registration = msg.sender;
        alias = newAlias;
    }
}