const Block = require('./block');

const fooBlock = Block.mineBlock(Block.genesis(),'foo');
console.log(fooBlock.toString());
/*
const block= new Block('foo','bar','zoo','zerf');
console.log (block.toString());
console.log (Block.genesis().toString());
*/
