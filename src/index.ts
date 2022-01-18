import { Application, Sprite, Texture, Text, Graphics } from 'pixi.js'
import IntroText from './IntroText';
import Title from './Title';
import Button from './Button';

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: window.innerWidth,
	height: window.innerHeight, 
});

const connectWalletButton = Button.createConnectWalletButton();
connectWalletButton.x = app.screen.width / 2;
connectWalletButton.y = app.screen.height / 2;
const NFTStoreButton = Button.createNFTStoreButton();
NFTStoreButton.x = app.screen.width / 2;
NFTStoreButton.y = app.screen.height / 2;

document.addEventListener('keypress', (e) => {
  console.log(e.key);
  if (e.key == 'Enter') {
    IntroText.start(textGraphics);
    Title.start(letterCoors, titleGraphics);
  }
  setTimeout(() => {
    app.stage.addChild(connectWalletButton);
    app.stage.addChild(NFTStoreButton);
  }, 1500);
});

var textGraphics: Text = new Text(IntroText.content, IntroText.getStyle());
app.stage.addChild(textGraphics);
// Create letters for title screen
var letterCoors = Title.createLetters();
const titleGraphics = new Graphics();
titleGraphics.y = window.innerHeight / 9;
app.stage.addChild(titleGraphics);

app.ticker.add(() => {
  Title.moveLettersAcrossScreen(letterCoors, titleGraphics);
  IntroText.blinkLetters(textGraphics);
});
