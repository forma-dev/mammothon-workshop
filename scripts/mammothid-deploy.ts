import hre from "hardhat";
import { getAddress } from 'viem'
import { mammothIdConfig } from "./mammothid";

async function main() {

  const [walletClient] = await hre.viem.getWalletClients();
  console.log(`Using wallet: ${walletClient.account.address}`);

  console.log(`✨ Deploying MammothID...`);
  const mammothId = await hre.viem.deployContract("MammothID", [
    mammothIdConfig.contractMetadata.name, // name
    mammothIdConfig.symbol, // symbol
    walletClient.account.address, // initial owner
    walletClient.account.address, // default royalty receiver
    mammothIdConfig.defaultRoyaltyFeeNumerator, // default royalty fee numerator
  ]);
  console.log(`✔ MammothID deployed to: ${getAddress(mammothId.address)}`);

  const hash = await mammothId.write.setContractMetadataRaw([JSON.stringify(mammothIdConfig.contractMetadata)]);
  console.log(`✨ Setting contract metadata. tx hash: ${hash}`);

  const publicClient = await hre.viem.getPublicClient();
  await publicClient.waitForTransactionReceipt({ hash });
  console.log(`✔ Contract metadata set`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
