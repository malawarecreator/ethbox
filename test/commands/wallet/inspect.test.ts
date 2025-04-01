import { runCommand } from '@oclif/test';
import { expect } from 'chai';

describe('wallet inspect', () => {
  it('runs wallet inspect with a valid Ethereum test address', async () => {
    const testAddress = '0x0000000000000000000000000000000000000000';

    // Run the command with the test address
    const { stdout } = await runCommand(`wallet inspect ${testAddress}`);
    expect(stdout).to.contain(testAddress); // Verify the output contains the address
  });

  it('throws an error for an invalid Ethereum address', async () => {
    const invalidAddress = 'invalid_address';

    try {
      await runCommand(`wallet inspect ${invalidAddress}`);
    } catch (error: any) {
      expect(error.message).to.contain('Invalid address'); // Verify the error message
    }
  });
});