const AntiDoping = artifacts.require("./AntiDoping.sol");

require ('chai')
	.use(require('chai-as-promised'))
	.should()

contract('AntiDoping',([deployer, WADA, BCCI])=>{
	let antiDoping

	before(async ()=>{
		antiDoping = await AntiDoping.deployed()
	})

	describe('deployement',async () =>{

		it('deploys successfully',async()=>{
			const address =await antiDoping.address
			assert.notEqual(address,0x0)
			assert.notEqual(address,'')
			assert.notEqual(address,null)
			assert.notEqual(address,undefined)
		})

		it('has a name',async()=>{
			const name =await antiDoping.name()
			assert.equal(name,"AntiDoping Report")		
		})
	})



	describe('reports',async () =>{
		
		let result, reportCount

		before(async ()=>{
			result = await antiDoping.createReport('XYZ', '21', 'AB+','Terbutaline', web3.utils.toWei('1','Ether'), {from : WADA})
			reportCount = await antiDoping.reportCount()
		})

		it('creates reports',async()=>{
			//success
			assert.equal(reportCount, 1);

			const event = result.logs[0].args
			assert.equal(event.id.toNumber(),reportCount.toNumber(), 'id is correct')
			assert.equal(event.playerName, 'XYZ', 'name is correct')
			assert.equal(event.playerAge, '21', 'age is correct')
			assert.equal(event.bloodGroup, 'AB+', 'name is correct')
			assert.equal(event.quantity, '1000000000000000000', 'quantity is correct')
			assert.equal(event.owner, WADA, 'owner is correct')
			assert.equal(event.doped, false, 'doped is correct')

			//failure
			await await antiDoping.createReport('',web3.utils.toWei('1','Ether'), {from : WADA}).should.be.rejected;	
			await await antiDoping.createReport('Terbutaline',0, {from : WADA}).should.be.rejected;	

		})

		it('lists reports',async()=>{
			const product = await antiDoping.reports(reportCount)

			assert.equal(product.id.toNumber(),reportCount.toNumber(), 'id is correct')
			assert.equal(product.playerName, 'XYZ', 'name is correct')
			assert.equal(product.playerAge, '21', 'age is correct')
			assert.equal(product.bloodGroup, 'AB+', 'name is correct')
			assert.equal(product.quantity, '1000000000000000000', 'quantity is correct')
			assert.equal(product.owner, WADA, 'owner is correct')
			assert.equal(product.doped, false, 'doped is correct')
		})

	})

})



		
