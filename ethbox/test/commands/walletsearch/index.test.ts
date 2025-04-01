import { runCommand } from '@oclif/test';
import { expect } from 'chai';

describe('walletsearch', () => {
  it('runs walletsearch with a valid Ethereum test address', async () => {
    const testAddress = '0x0000000000000000000000000000000000000000';

    // Run the command with the test address
    const { stdout } = await runCommand(`walletsearch ${testAddress}`);
    expect(stdout).to.contain(testAddress); // Verify the output contains the address
  });

  it('throws an error for an invalid Ethereum address', async () => {
    const invalidAddress = 'invalid_address';

    try {
      await runCommand(`walletsearch ${invalidAddress}`);
    } catch (error: any) {
      expect(error.message).to.contain('Invalid address'); // Verify the error message
    }
  });
});