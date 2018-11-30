const Blockchain = require('./blockchain');
const Block = require('./block');

describe('Blockchain', () => {
  let bc, bc2;
  beforeEach(() => {
    bc = new Blockchain();
    bc2 = new Blockchain();
  });

  it('starts with the genesis block', () => {
	  expect(bc.chain[0]).toEqual(Block.genesis());
  });

  it('adds a new block', () => {
    const data = 'kyo';
    bc.addBlock(data);
    expect(bc.chain[bc.chain.length-1].data).toEqual(data);
  });

  it('validate a chain',  () => {
    bc2.addBlock('foo');
    bc2.chain[1].data = 'fox not foo';
  //expect(bc.isValidChain(bc2.chain)).toBe(true);
    expect(bc.isValidChain(bc2.chain)).toBe(false);

  });
});
