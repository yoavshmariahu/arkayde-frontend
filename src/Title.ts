const LINE_STYLE_WIDTH = 2;
const LINE_STYLE_COLOR = 0xFEEB77;
const LINE_STYLE_ALPHA = 1;
const FILL_COLOR = 0x650A5A;
const SPACING = 110;
var letterCoors = [
  {
    letter: 'A',
    rects: [
      { xPos: 0, yPos: 50, width: 20, height: 100 },
      { xPos: 20, yPos: 50, width: 50, height: 20 },
      { xPos: 20, yPos: 90, width: 50, height: 20 },
      { xPos: 70, yPos: 50, width: 20, height: 100 },
    ]
  },
  {
    letter: 'R',
    rects: [
      { xPos: 0, yPos: 50, width: 20, height: 100 },
      { xPos: 20, yPos: 50, width: 50, height: 20 },
      { xPos: 70, yPos: 70, width: 20, height: 40 },
      { xPos: 50, yPos: 110, width: 20, height: 20 },
      { xPos: 70, yPos: 130, width: 20, height: 20 },
      { xPos: 20, yPos: 90, width: 50, height: 20 },
    ]
  },
  {
    letter: 'K',
    rects: [
      { xPos: 0, yPos: 50, width: 20, height: 100 },
      { xPos: 50, yPos: 110, width: 20, height: 20 },
      { xPos: 70, yPos: 50, width: 20, height: 20 },
      { xPos: 50, yPos: 70, width: 20, height: 20 },
      { xPos: 70, yPos: 130, width: 20, height: 20 },
      { xPos: 20, yPos: 90, width: 30, height: 20 },
    ]
  },
  {
    letter: 'A',
    rects: [
      { xPos: 0, yPos: 50, width: 20, height: 100 },
      { xPos: 20, yPos: 50, width: 50, height: 20 },
      { xPos: 20, yPos: 90, width: 50, height: 20 },
      { xPos: 70, yPos: 50, width: 20, height: 100 },
    ]
  },
  {
    letter: 'Y',
    rects: [
      { xPos: 0, yPos: 50, width: 20, height: 60 },
      { xPos: 70, yPos: 50, width: 20, height: 100 },
      { xPos: 20, yPos: 90, width: 50, height: 20 },
    ]
  },
  {
    letter: 'D',
    rects: [
      { xPos: 0, yPos: 50, width: 20, height: 100 },
      { xPos: 20, yPos: 50, width: 50, height: 20 },
      { xPos: 20, yPos: 130, width: 50, height: 20 },
      { xPos: 70, yPos: 70, width: 20, height: 60 },
    ]
  },
  {
    letter: 'E',
    rects: [
      { xPos: 0, yPos: 50, width: 20, height: 100 },
      { xPos: 20, yPos: 50, width: 70, height: 20 },
      { xPos: 20, yPos: 90, width: 70, height: 20 },
      { xPos: 20, yPos: 130, width: 70, height: 20 },
    ]
  },
]
var started = false;

var Title = {
  createLetters: function() {
    for (let i = 0; i < letterCoors.length; i++) {
      for (let j = 0; j < letterCoors[i].rects.length; j++) {
        letterCoors[i].rects[j].xPos += i * SPACING;
      }
    }
    return letterCoors;
  },
  moveLettersAcrossScreen: function (letterCoors, titleGraphics) {
    if (letterCoors.length == 0) {
      return;
    }
    titleGraphics.clear();
    titleGraphics.lineStyle(LINE_STYLE_WIDTH, LINE_STYLE_COLOR, LINE_STYLE_ALPHA);
    titleGraphics.beginFill(FILL_COLOR);
    for (let i = 0; i < letterCoors.length; i++) {
      let curLetter = letterCoors[i].letter;
      let curRects = letterCoors[i].rects;
      for (let j = 0; j < curRects.length; j++) {
        let rect = curRects[j];
        rect.xPos += .85
        titleGraphics.drawRect(rect.xPos, rect.yPos, rect.width, rect.height);
      }
    }
    titleGraphics.endFill();
    
    // Wrap letters over to left of screen
    // TODO: Figure out correct width to wrap text
    if (letterCoors[letterCoors.length-1].rects[0].xPos > 800) {
      let lastLetter = letterCoors.pop();
      let minX = lastLetter.rects[0].xPos + 150;
      for (let i = 0; i < lastLetter.rects.length; i ++) {
        lastLetter.rects[i].xPos -= minX;
      }
      letterCoors.unshift(lastLetter);
    }
  },
  start: function(letterCoors, titleGraphics) {
    while (letterCoors.length > 0) {
      letterCoors.pop();
    }
    titleGraphics.clear();
  },
};
export default Title;

