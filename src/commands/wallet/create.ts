import { Args, Command } from "@oclif/core";

import { generatePrivateKey, privateKeyToAccount} from "viem/accounts";
export default class Create extends Command {
    static description: string | undefined = "Create a new wallet with a random address";
    async run() {
        const privateKey = generatePrivateKey();
        const account = privateKeyToAccount(privateKey);
        const walletData = {
            address: account.address,
            publicKey: account.publicKey,
            privateKey: privateKey,
            source: account.source,
            generatedOn: new Date().toISOString(),
            

        };
        this.log(`${JSON.stringify(walletData, null, 2)}`);
    }
}