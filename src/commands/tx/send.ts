import { Args, Command } from "@oclif/core";
import { parseEther, parseGwei } from "viem";
import { mainnet } from "viem/chains";

import { account, walletClient } from "../../lib/account.js";
import { client } from "../../lib/client.js";

export default class Send extends Command {
    static args = {
        amount: Args.string({ description: "the amount to send", required: true }),
        to: Args.string({ description: "the address to send to", required: true }),
    };
    static description: string | undefined = "Send a transaction to an address";

    async run() {
        const {args} = await this.parse(Send);
        
        if (account === undefined) {
            this.log("No account found. Please create a wallet first using `ethbox wallet create` and then run ethbox auth login <your-private-key>");
            return;
        }

        try {
            const value = parseEther(args.amount);
            
            // Use public client for gas estimation
            const gasEstimate = await client.estimateGas({
                account,
                to: args.to as `0x${string}`,
                value
            });

            const hash = await walletClient.sendTransaction({
                account,
                chain: mainnet,
                gas: gasEstimate,
                maxFeePerGas: parseGwei("1"), // 1 gwei
                maxPriorityFeePerGas: parseGwei("1"), // 1 gwei
                to: args.to as `0x${string}`,
                value
            });

            this.log(`Transaction sent! Hash: ${hash}`);
            this.log('You can track your transaction at https://etherscan.io/tx/' + hash);
        } catch (error) {
            this.error(`Failed to send transaction: ${error}`);
        }
    }
}