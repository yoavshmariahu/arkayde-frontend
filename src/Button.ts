import { Texture, Sprite, Container } from 'pixi.js'


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
  createNFTButton: () => Container;
}

var Button: IButton = {
  createConnectWalletButton: function() : Sprite {
    const focusedWallet: Texture = Texture.from('connect-wallet-focused.png');
    const unfocusedWallet: Texture = Texture.from("connect-wallet-unfocused.png");
    const walletButton: Sprite = Sprite.from(unfocusedWallet);
    walletButton.width = 280;
    walletButton.height = 40;
    
    walletButton.interactive = true;
    walletButton.buttonMode = true;
    walletButton.on('mouseover', () => { walletButton.texture = focusedWallet });
    walletButton.on('mouseout', () => { walletButton.texture = unfocusedWallet });
    walletButton.on('mousedown', () => { connectWallet() });
    walletButton.anchor.set(-1.2, 8);
    
    return walletButton;
  },
  createNFTStoreButton: function() : Sprite {
    const focusedButton: Texture = Texture.from('nft-store-focused.png');
    const unfocusedButton: Texture = Texture.from("nft-store-unfocused.png");
    const NFTStoreButton: Sprite = Sprite.from(unfocusedButton);
    NFTStoreButton.width = 180;
    NFTStoreButton.height = 40;
    
    NFTStoreButton.interactive = true;
    NFTStoreButton.buttonMode = true;
    NFTStoreButton.on('mouseover', () => { NFTStoreButton.texture = focusedButton });
    NFTStoreButton.on('mouseout', () => { NFTStoreButton.texture = unfocusedButton });
    NFTStoreButton.on('mousedown', () => { goToNFTStore() });
    NFTStoreButton.anchor.set(3.5, 8);
    
    return NFTStoreButton;
  }, 
  createNFTButton: function() : Container {
    let container = new Container();

    const unfocusedName: Texture = Texture.from('name-unfocused.png');
    const nameButton: Sprite = Sprite.from(unfocusedName);
    nameButton.width = 180;
    nameButton.height = 20;
    //nameButton.anchor.set(3.5, -0.5);
    nameButton.position.x = -500;
    nameButton.position.y = 150;
    nameButton.interactive = true;
    nameButton.buttonMode = true;

    const unfocusedButton: Texture = Texture.from('nft-unfocused.png');
    const NFTButton: Sprite = Sprite.from(unfocusedButton);
    NFTButton.width = 180;
    NFTButton.height = 180;
    //NFTButton.anchor.set(3.5, 1);
    NFTButton.position.x = -500
    NFTButton.position.y = -40;
    NFTButton.buttonMode = true;
    NFTButton.interactive = true;

    nameButton.on('mouseover', () => { nameButton.tint = 0x666666, NFTButton.tint = 0x666666 });
    nameButton.on('mouseout', () => { nameButton.tint = 0xFFFFFF, NFTButton.tint = 0xFFFFFF });
    NFTButton.on('mouseover', () => { NFTButton.tint = 0x666666, nameButton.tint = 0x666666 });
    NFTButton.on('mouseout', () => { NFTButton.tint = 0xFFFFFF, nameButton.tint = 0xFFFFFF });

  
    container.addChild(nameButton);
    container.addChild(NFTButton);

    return container;
  }
}

export default Button;
