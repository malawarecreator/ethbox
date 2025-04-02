import { Command } from "@oclif/core";
import { generatePrivateKey, privateKeyToAccount} from "viem/accounts";
export default class Create extends Command {
    static description: string | undefined = "Create a new wallet with a random address";

    async run() {
        const privateKey = generatePrivateKey();
        const account = privateKeyToAccount(privateKey);
        const walletData = {
            address: account.address,
            generatedOn: new Date().toISOString(),
            privateKey,
            publicKey: account.publicKey,
            source: account.source,
            

        };
        this.log(`${JSON.stringify(walletData, null, 2)}`);
    }
}