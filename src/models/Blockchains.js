
export const Blockchains = {
    EOSIO:'eos'
};

export const BlockchainsArray =
    Object.keys(Blockchains).map(key => ({key, value:Blockchains[key]}));

export const blockchainName = x => {
    switch(x){
        case 'btc': return 'Bitcoin';
        case Blockchains.EOSIO: return 'SnapScale';
        case Blockchains.ETH: return 'Ethereum';
        case Blockchains.TRX: return 'Tron';
    }
}
