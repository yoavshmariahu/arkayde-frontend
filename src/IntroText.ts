import { Text, TextStyle } from 'pixi.js'

const COLOR_1 : string = '#00ff99';
const COLOR_2 : string = '#6495ed';

const style: TextStyle = new TextStyle({
  fontFamily: "\"Courier New\", Courier, monospace",
  fill : COLOR_1,
  fontSize: 30,
  fontWeight: 'normal',
});

const boldStyle: TextStyle = new TextStyle({
  fontFamily: "\"Courier New\", Courier, monospace",
  fill : COLOR_1,
  fontSize: 30,
  fontWeight: 'bold',
});

//const 

interface TextAttrs {
  time: number;
  started: boolean;
}

var textAttrs: TextAttrs  = {
  time: 0,
  started: false,
}

interface IIntroText {
  content: string;
  blinkLetters: (arg0: Text) => void;
  start: (arg0: Text) => void;
  getStyle: () => TextStyle;
}

var IntroText: IIntroText = {
  content: 'Press [ENTER] to start',
  blinkLetters: function(textGraphics: Text) : void {
    if (!textAttrs.started) {
      textAttrs.time = (textAttrs.time + 1) % 100;
      textGraphics.style.fill = textAttrs.time > 50 ? COLOR_1 : COLOR_2;
    } else {
      textAttrs.time += 1;
      if (textAttrs.time > 50) {
        textGraphics.style.fill = COLOR_2;
      }
    }
    textGraphics.updateText(false);
  },
  start: function(textGraphics: Text) : void {
    // Add Intro Text Component
    textAttrs.started = true;
    textGraphics.style = boldStyle;
    textGraphics.updateText(false);
    textAttrs.time = 0
  },
  getStyle: function() : TextStyle {
    return style;
  }
};

export default IntroText;
