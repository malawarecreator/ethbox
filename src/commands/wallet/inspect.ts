import { Args, Command } from "@oclif/core";

import { account } from "../../lib/account.js";
import { getWalletData } from "../../lib/getWalletData.js";

export default class Inspect extends Command {
  static args = {
    address: Args.string({ description: "the address to search", required: true }),
  };
  static description = "Search Wallet for Data";

  async run() {
    const { args } = await this.parse(Inspect);
    
    if (args.address === "local") {
      if (!account) {
        this.error("No local wallet found. Please login first: ethbox auth login <private-key>");
        return;
      }

      const localWalletData = await getWalletData(account.address);
      this.log("Local Wallet:");
      this.log(JSON.stringify(localWalletData, null, 2));
      return;
    }

    const walletData = await getWalletData(args.address as `0x${string}`); 
    this.log(JSON.stringify(walletData, null, 2)); 
  }
}