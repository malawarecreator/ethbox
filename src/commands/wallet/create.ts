import { Command } from "@oclif/core";
import { generatePrivateKey, privateKeyToAccount } from "viem/accounts";

export default class Create extends Command {
    static description = "Create a new wallet with a random address";

    async run() {
        const privateKey = generatePrivateKey();
        const account = privateKeyToAccount(privateKey);
        
        const walletData = {
            address: account.address,
            generatedOn: new Date().toISOString(),
            privateKey,
            publicKey: account.publicKey
        };

        this.log(`New wallet created:`);
        this.log(JSON.stringify(walletData, null, 2));
        this.log('\nTo use this wallet:');
        this.log(`ethbox auth login ${privateKey}`);
        this.log('\nIMPORTANT: Save your private key securely! You cannot recover it if lost.');
    }
}