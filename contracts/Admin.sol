pragma solidity ^0.5.2;

import "./ownable.sol";


contract AdminContract is Ownable {
  
    
    event adminCreated(address caller, address newAdmin);


    mapping (address => bool) public admins; 

    
    uint public constant weiToEth = 10 ** 18;


    
    modifier onlyAdmin(){
        require(admins[msg.sender],"You are Not The Owner! ");
        _;
    }
  
    function createAdmin() public onlyOwner{
        admins[msg.sender]=true;
       // emit adminCreated(msg.sender, admin);
    }
    
 
        
    function _deleteAdmin(address a) public onlyOwner {
        delete admins[a];
    }
 
    
    
    
}
    
