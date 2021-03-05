require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remember minor imitate private fringe spider'; 
let testAccounts = [
"0xfdeec95b98f3c96f0a79acdf8141d7df1a49f826090ea424bcbbb22e897112a1",
"0x703cc76039b99b50ebcc606a317109b2b906bda93e90f39a93e9edf20a50370d",
"0x3b11ce3c9bcb02178d9edff1488834c856729e0add06b781c99d26034f2d5ae8",
"0x7c456fe2d330604053e303227d0515c7da7badf3dae487f4fda4381aaf96def2",
"0xc04be3901469446b33c1cb969e211725fcfd4377fef8760a68665a1e3c603d06",
"0x5d96f27e953789045b325cdba805793db3c5aad0bdb031488df1af2b3f99bb89",
"0xe699bd7115ef142e0464c64e9d9d7912d53ee3f756ee4106f65018d6faf70876",
"0x26f5ad216eb0c5626a293756259f8b63da40a50ade01fe6575cda287f4b22ba3",
"0xa13777e623f2413a60d3292f8e0382371ed64ee78c306aa2139cea93d23f3e9d",
"0xd2f5e01ae26396c1feda8e335f6254a1bb61fa18f6ebcfbb9537fad511ed221f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
