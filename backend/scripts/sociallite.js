const {ethers} = require("hardhat")
//1. SocialLiteContractAddress: 0x25f7188F7b6D09Dd1B1C079eA3a237e6AF9EF263
//2. Social:  0x54a19568114444065937e8e9839Ce2697A91B29a

async   function main(){
    
    //getContract
    const SocialLiteContract = await ethers.getContractFactory("SocialLite");
    //deployContract
    const SocialLiteContractDeploy = await SocialLiteContract.deploy();
    //await deployement
    await SocialLiteContractDeploy.deployed();
    //console.log address
    console.log("SocialLiteContractAddress:",SocialLiteContractDeploy.address);
}
//call main
main().then(()=>process.exit(0))
.catch((error)=>{
console.error(error);
process.exit(1);

})