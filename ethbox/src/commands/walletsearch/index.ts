import { Args, Command } from "@oclif/core";
import { getWalletData } from "../../lib/getWalletData.js";

export default class WalletSearch extends Command {
  static args = {
    address: Args.string({ description: "the address to search", required: true }),
  };

  static description = "Search Wallet for Data";

  async run() {
    const { args } = await this.parse(WalletSearch);
    const walletData = await getWalletData(args.address as `0x${string}`); 
    this.log(JSON.stringify(walletData, null, 2)); 
  }
}