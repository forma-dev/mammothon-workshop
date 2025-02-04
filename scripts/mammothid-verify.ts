import hre from "hardhat";
import { getAddress } from "viem";
import { mammothIdConfig } from "./mammothid";

async function main() {

  if (!mammothIdConfig.address) {
    throw new Error("🤯 MammothID address is not set. Did you forget to deploy?");
  }

  const [walletClient] = await hre.viem.getWalletClients();
  console.log(`✨ Verifying MammothID at address: ${getAddress(mammothIdConfig.address)}`);

  await hre.run("verify:verify", {
    address: mammothIdConfig.address,
    constructorArguments: [
      mammothIdConfig.contractMetadata.name, // name
      mammothIdConfig.symbol, // symbol
      walletClient.account.address, // initial owner
      walletClient.account.address, // default royalty receiver
      mammothIdConfig.defaultRoyaltyFeeNumerator, // default royalty fee numerator
    ],
  });

  console.log(`✔ MammothID verified`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
