import { Application, Sprite, Texture, Text, Graphics } from 'pixi.js'
import IntroText from './IntroText';
import Title from './Title';

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: window.innerWidth,
	height: window.innerHeight, 
});

const focusedWallet: Texture = Texture.from('connect-wallet-focused.png');
const unfocusedWallet: Texture = Texture.from("connect-wallet-unfocused.png");
const walletButton: Sprite = Sprite.from(unfocusedWallet);
walletButton.width = 300;
walletButton.height = 40;

walletButton.interactive = true;
walletButton.on('mouseover', () => { walletButton.texture = focusedWallet });
walletButton.on('mouseout', () => { walletButton.texture = unfocusedWallet });

walletButton.anchor.set(-1.2, 8);

walletButton.x = app.screen.width / 2;
walletButton.y = app.screen.height / 2;

document.addEventListener('keypress', (e) => {
  if (e.key == 'Enter') {
    IntroText.start(textGraphics);
    Title.start(letterCoors, titleGraphics);
  }
  setTimeout(() => {
    app.stage.addChild(walletButton);
  }, 1500);
});

var textGraphics: Text = new Text(IntroText.content, IntroText.getStyle());
app.stage.addChild(textGraphics);
// Create letters for title screen
var letterCoors = Title.createLetters();
const titleGraphics = new Graphics();
app.stage.addChild(titleGraphics);


app.ticker.add(() => {
  Title.moveLettersAcrossScreen(letterCoors, titleGraphics);
  IntroText.blinkLetters(textGraphics);
});
