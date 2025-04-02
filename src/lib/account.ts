import * as fs from 'node:fs';
import path from 'node:path';
import { createWalletClient, http, type WalletClient } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { mainnet } from "viem/chains";

// Store account details in user's home directory
const CONFIG_PATH = path.join(process.env.HOME || process.env.USERPROFILE || '', '.ethbox');
const ACCOUNT_PATH = path.join(CONFIG_PATH, 'account.json');

export let account: ReturnType<typeof privateKeyToAccount> | undefined;
export let walletClient: WalletClient;

// Load saved account if it exists
try {
    if (fs.existsSync(ACCOUNT_PATH)) {
        const savedKey = JSON.parse(fs.readFileSync(ACCOUNT_PATH, 'utf8')).privateKey;
        account = privateKeyToAccount(savedKey as `0x${string}`);
        walletClient = createWalletClient({
            account,
            chain: mainnet,
            transport: http()
        });
    }
} catch  {
    console.error('Failed to load saved account');
}

export function setAccount(privateKey: `0x${string}`) {
    const newAccount = privateKeyToAccount(privateKey);
    account = newAccount;
    walletClient = createWalletClient({
        account: newAccount,
        chain: mainnet,
        transport: http()
    });
    
    // Save account details
    if (!fs.existsSync(CONFIG_PATH)) {
        fs.mkdirSync(CONFIG_PATH);
    }
    
    fs.writeFileSync(ACCOUNT_PATH, JSON.stringify({
        privateKey
    }));
}