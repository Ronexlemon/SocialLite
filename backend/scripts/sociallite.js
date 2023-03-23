const {ethers} = require("hardhat")

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