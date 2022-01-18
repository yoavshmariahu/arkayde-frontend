import { Texture, Sprite } from 'pixi.js'

function connectWallet() {
//  const isPhantomInstalled = window.solana && window.solana.isPhantom;
//  if (isPhantomInstalled == true) {
//    window.solana.connect()
//      .then((resp) => {
//        console.log(resp);
//      });
//  } else {
//    window.open("https://phantom.app/", "_blank");
//  }
//  console.log('hey');
}
//window.solana.on('disconnect', () => console.log("disconnected!"))

function goToNFTStore() {
  window.location.href = '/nft-store';
  //console.log(window.location.href);
}

interface IButton {
  createConnectWalletButton: () => Sprite;
  createNFTStoreButton: () => Sprite;
}

var Button: IButton = {
  createConnectWalletButton: function() : Sprite {
    const focusedWallet: Texture = Texture.from('connect-wallet-focused.png');
    const unfocusedWallet: Texture = Texture.from("connect-wallet-unfocused.png");
    const walletButton: Sprite = Sprite.from(unfocusedWallet);
    walletButton.width = 280;
    walletButton.height = 40;
    
    walletButton.interactive = true;
    walletButton.on('mouseover', () => { walletButton.texture = focusedWallet });
    walletButton.on('mouseout', () => { walletButton.texture = unfocusedWallet });
    walletButton.on('mousedown', () => { connectWallet() });
    walletButton.anchor.set(-1.2, 8);
    
    return walletButton;
  },
  createNFTStoreButton: function() : Sprite {
    const focusedButton: Texture = Texture.from('nft-store-focused.png');
    const unfocusedButton: Texture = Texture.from("nft-store-unfocused.png");
    const button: Sprite = Sprite.from(unfocusedButton);
    button.width = 180;
    button.height = 40;
    
    button.interactive = true;
    button.on('mouseover', () => { button.texture = focusedButton });
    button.on('mouseout', () => { button.texture = unfocusedButton });
    button.on('mousedown', () => { goToNFTStore() });
    button.anchor.set(3.5, 8);
    
    return button;
  }
}

export default Button;
