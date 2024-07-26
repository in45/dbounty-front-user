pragma solidity ^0.5.17;

import "./ownable.sol";
import "./Admin.sol";
import "./CreateToken.sol";
import "./SafeMath.sol";



contract DbountyContract is AdminContract , HTTToken {
    using SafeMath for uint256;
    
    event CompanyCreated(address caller,string  _idCompany,uint8 _balance);
    event ManagerAdded(address caller, string  _idCompany,address _Manager,string role); 

    
    struct Report {
        string id;
        bytes32 content;
        address user;
        string status;
        uint8 bounty_win;
        bool is_paid;
        address assignedToManager;
        address assignedToAdmin;
    }

     
    struct Program {
        string id;
        string status;
        mapping (string => bool) reports;
        mapping (address => bool) users;
    }
    struct Company { 
        string id;
        uint8 balance;
        mapping (address => bool) managers;
        mapping (string => bool) programs;
    }
    
    mapping (string => Report) public reports;
    mapping (string => Company) public companies;
    mapping (string => Program) public programs;
    mapping (address => string) public hunters; 
    mapping (address => string) public managers; //address->role
    mapping (address => uint) public balances; //balances hunters
    bool isStopped = false;
   
    
    modifier onlyAdmin{
            require(admins[msg.sender],"You are not an Admin");
        _;
    }
    modifier stoppedImergency{
        require(!isStopped);
        _;
    }
    modifier onlyAssignedTo(string memory _idReport,address  _manager){
        require(reports[_idReport].assignedToManager == _manager || reports[_idReport].assignedToAdmin == _manager , "unhautorized");
        _;
    }
     modifier isCompanyManager(string memory _idCompany,address  _manager){
         
            require(companies[_idCompany].managers[_manager],"You are not an company manager");
            
        _;
    }

     modifier isSysAlpha(address  _manager){
            require(keccak256(bytes(managers[_manager])) == keccak256(bytes("sysalpha")),"You are not an sysalpha manager");
        _;
    }
    modifier isReportNotPaid(string memory _idReport){
         require(reports[_idReport].is_paid == false ,"You are already paid");
        _;
      
    }
    modifier isUserReport(string memory _idReport,address  _user){
        require(reports[_idReport].user == _user ,"You Are Not The Owner Of This Report");
        _;
    }
    modifier isJoined(string memory _idProgram,address _user){
         require(programs[_idProgram].users[_user],"You are not join this program");
         _;
    }

    
  
    function createCompany(string  memory _id, uint8 _balanceCompany) public  returns(bool){
         Company memory companie_obj;
         companie_obj.id=_id;
         companie_obj.balance=_balanceCompany;
         companies[_id]=companie_obj;
        emit CompanyCreated(msg.sender, _id, _balanceCompany);
        return true;
    }
    function createProgram(string  memory _idCompany,string  memory _id, address _manager) public isSysAlpha(_manager) isCompanyManager(_idCompany,_manager) returns(bool){
   
    Program memory program_obj = Program(_id,"none");
    programs[_id]=program_obj;
    companies[_idCompany].programs[_id]=true;     
    return true;
    }
  
    function addManager(string  memory _company_id,address _manager_address,string memory role) public isSysAlpha(_manager_address){
        
    managers[_manager_address]=role;
    companies[_company_id].managers[_manager_address]=true;
    
    }
    function createReport(string memory _idProgram,string  memory _id, address _user,bytes32 _content) public isJoined(_idProgram,_user) returns(bool){
         Report memory report_obj = Report(_id,_content,_user,"new",0,false,address(0),address(0));
         reports[_id]=report_obj;
         programs[_idProgram].reports[_id]=true;
         return true;
    }
     function reportState(string memory _idReport,string  memory _status ,address _manager)  public isSysAlpha(_manager){
         reports[_idReport].status=_status;
    }
     function approveProgram(string memory _idProgram)  public onlyAdmin{
         programs[_idProgram].status="new";
    }
     function approveReport(string memory _idReport,address _manager,uint8 _bounty) public onlyAssignedTo(_idReport,_manager){
         reports[_idReport].status="approved";//logique commit 
         reports[_idReport].bounty_win = _bounty;
    }
    function paid(string memory _idReport,address _manager) public payable onlyAssignedTo(_idReport,_manager) isReportNotPaid(_idReport) stoppedImergency {
        reports[_idReport].is_paid = true;
        address _user = reports[_idReport].user;
        uint8 _win = reports[_idReport].bounty_win;
        require(msg.value != _win ,"You Should Pay For The Report!");
        transfer(_user,_win);
        // balances[_user] = balances[_user].add(msg.value);
    }
    function stopContract() public onlyAdmin{
        isStopped = true;
    }

    
}