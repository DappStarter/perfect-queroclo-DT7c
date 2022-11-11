require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth shift protect include kitchen swallow tell'; 
let testAccounts = [
"0x0c354561c158ee3280e5b0a169d6e6756921a585a04c6b527f06b7380373978d",
"0x32d084d13209d7c7ddac086e79dd6aee9b46a85148bc9731fa4ecc9dafa70151",
"0x1ed36ffb2285e66c9e983d71875fe468cd2b7d012110425bedd391dba3c0855a",
"0x5a468aab1d4751a0183a2c4446ad1235567ce82359e1b4645b76a9f5be3d597f",
"0x1a066de628ea3c9db9095ca2bb8fa0e8a1cd217f4cbe5a8ecf4b872070abb587",
"0xca7920bc794f3f82d4eeaee72583bf23d71ed01c4a6a543da2fcda35d9c4920c",
"0x17d09c9602d402d6d7011532bc85af43056f52be09cee1e4f8d4293d6f89c6a2",
"0xa1c1390e609aa9054feba9e71642f475c88ac6471cbd027ba37e4fa21dde5054",
"0xf15758f6d25173c98da5b29add2366cc36b7ffba15f0276867538e651e67aa3f",
"0x884332844e3947ca466ceddd63fed17847d2607c6185284b87bf223023982667"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


