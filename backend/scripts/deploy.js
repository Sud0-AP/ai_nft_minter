async function main() {
  const Ainft = await ethers.getContractFactory("Ainft");
  const gasPrice = ethers.utils.parseUnits("10", "gwei"); // Adjust the gas price as needed
  const gasLimit = 3000000; // Adjust the gas limit as needed

  const ainft = await Ainft.deploy({ gasPrice: gasPrice, gasLimit: gasLimit });
  await ainft.deployed();

  console.log("Ainft deployed to:", ainft.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
