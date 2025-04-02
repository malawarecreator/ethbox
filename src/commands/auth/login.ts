import { Args, Command } from "@oclif/core";
import { privateKeyToAccount } from "viem/accounts";

import { setAccount } from "../../lib/account.js";

export default class Login extends Command {
    static args = {
        privateKey: Args.string({ description: "the private key to login with", required: true }),
    }
    static description: string | undefined = "Login to your wallet using your private key";

    async run() {
        const { args } = await this.parse(Login);
        
        try {
            const account = privateKeyToAccount(args.privateKey as `0x${string}`);
            setAccount(args.privateKey as `0x${string}`);
            this.log(`Successfully logged in with address: ${account.address}`);
            this.log('Remember: You need ETH in this account to make transactions!');
        } catch {
            this.error('Invalid private key format. Make sure it starts with 0x');
        }
    }
}