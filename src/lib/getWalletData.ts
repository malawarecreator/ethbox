import { client } from "./client.js";

export async function getWalletData(address: `0x${string}`) {
    const bal = await client.getBalance({address});

    const transactioncount = await client.getTransactionCount({address});
    return {
        address,
        balance: bal.toString(),
        transactioncount,
    }

}