pragma solidity ^0.5.0;

contract AntiDoping{
	string public name;

	uint public reportCount = 0;
	
	mapping(uint => Report) public reports;

	struct Report{
		uint id;
		string playerName;
		string playerAge;
		string bloodGroup;
		string drugName;
		uint quantity;
		address payable owner;
		bool doped;
	}

	constructor()public {
		name="AntiDoping Report";
	}

	event ReportCreated(
		uint id,
		string playerName,
		string playerAge,
		string bloodGroup,
		string drugName,
		uint quantity,
		address payable owner,
		bool doped
	);

	event AccessReport(
		uint id,
		string playerName,
		string playerAge,
		string bloodGroup,
		string drugName,
		uint quantity,
		address payable owner,
		bool doped

	);


	function createReport(string memory _playerName, string memory _playerAge, string memory _bloodGroup,string memory _drugName, uint _quantity) public {
	
	//require valid name
	require(bytes(_playerName).length > 0);
	require(bytes(_drugName).length > 0);
	require(bytes(_bloodGroup).length > 0);
	require(bytes(_playerAge).length > 0);
	
	//require valid quantity
	require(_quantity > 0);

	//make sure para correct
	
	//incr productCOunt
	reportCount++;
	
	//create report
	reports[reportCount] = Report(reportCount, _playerName, _playerAge, _bloodGroup, _drugName, _quantity, msg.sender, false);
	
	//trigger an event
	emit ReportCreated(reportCount, _playerName, _playerAge, _bloodGroup, _drugName, _quantity, msg.sender, false);
	}


	function accessReport(uint _id) public payable{
	//fetch report
	Report memory _product = reports[_id];

	//fetch owner
	address payable _reportGenerator = _product.owner;

	//make sure report is valid
	require(_product.id > 0 && _product.id <= reportCount);

	//make sure buyer has enough ether
	require(msg.value >= _product.quantity);

	//make sure seller is not buyer
	require(_reportGenerator !=msg.sender);

	//make sure report is not purchased
	require(!_product.doped);

	//transfer ownership to buyer
	_product.owner = msg.sender;

	//mark as puchased
	_product.doped=true;

	//update report
	reports[_id]=_product;

	//pay the seller
	address(_reportGenerator).transfer(msg.value);

	//trigger event
	emit AccessReport(reportCount, _product.playerName, _product.playerAge, _product.bloodGroup, _product.drugName, _product.quantity, msg.sender, true);

	}

}