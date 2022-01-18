const LINE_STYLE_WIDTH = 2;
const LINE_STYLE_COLOR = 0xFEEB77;
const LINE_STYLE_ALPHA = 1;
const FILL_COLOR = 0x650A5A;
const SPACING = 220;
var letterCoors = [
  {
    letter: 'A',
    rects: [
      { xPos: 0, yPos: 100, width: 40, height: 200 },
      { xPos: 40, yPos: 100, width: 100, height: 40 },
      { xPos: 40, yPos: 180, width: 100, height: 40 },
      { xPos: 140, yPos: 100, width: 40, height: 200 },
    ]
  },
  {
    letter: 'R',
    rects: [
      { xPos: 0, yPos: 100, width: 40, height: 200 },
      { xPos: 40, yPos: 100, width: 100, height: 40 },
      { xPos: 140, yPos: 140, width: 40, height: 80 },
      { xPos: 100, yPos: 220, width: 40, height: 40 },
      { xPos: 140, yPos: 260, width: 40, height: 40 },
      { xPos: 40, yPos: 180, width: 100, height: 40 },
    ]
  },
  {
    letter: 'K',
    rects: [
      { xPos: 0, yPos: 100, width: 40, height: 200 },
      { xPos: 100, yPos: 220, width: 40, height: 40 },
      { xPos: 140, yPos: 100, width: 40, height: 40 },
      { xPos: 100, yPos: 140, width: 40, height: 40 },
      { xPos: 140, yPos: 260, width: 40, height: 40 },
      { xPos: 40, yPos: 180, width: 60, height: 40 },
    ]
  },
  {
    letter: 'A',
    rects: [
      { xPos: 0, yPos: 100, width: 40, height: 200 },
      { xPos: 40, yPos: 100, width: 100, height: 40 },
      { xPos: 40, yPos: 180, width: 100, height: 40 },
      { xPos: 140, yPos: 100, width: 40, height: 200 },
    ]
  },
  {
    letter: 'Y',
    rects: [
      { xPos: 0, yPos: 100, width: 40, height: 120 },
      { xPos: 140, yPos: 100, width: 40, height: 200 },
      { xPos: 40, yPos: 180, width: 100, height: 40 },
    ]
  },
  {
    letter: 'D',
    rects: [
      { xPos: 0, yPos: 100, width: 40, height: 200 },
      { xPos: 40, yPos: 100, width: 100, height: 40 },
      { xPos: 40, yPos: 260, width: 100, height: 40 },
      { xPos: 140, yPos: 140, width: 40, height: 120 },
    ]
  },
  {
    letter: 'E',
    rects: [
      { xPos: 0, yPos: 100, width: 40, height: 200 },
      { xPos: 40, yPos: 100, width: 140, height: 40 },
      { xPos: 40, yPos: 180, width: 140, height: 40 },
      { xPos: 40, yPos: 260, width: 140, height: 40 },
    ]
  },
]

var Title = {
  createLetters: function() {
    for (let i = 0; i < letterCoors.length; i++) {
      for (let j = 0; j < letterCoors[i].rects.length; j++) {
        letterCoors[i].rects[j].xPos += i * SPACING;
      }
    }
    return letterCoors;
  },
  moveLettersAcrossScreen: function (letterCoors:any, titleGraphics:any) {
    if (letterCoors.length == 0) {
      return;
    }
    titleGraphics.clear();
    titleGraphics.lineStyle(LINE_STYLE_WIDTH, LINE_STYLE_COLOR, LINE_STYLE_ALPHA);
    titleGraphics.beginFill(FILL_COLOR);
    for (let i = 0; i < letterCoors.length; i++) {
      
      let curRects = letterCoors[i].rects;
      for (let j = 0; j < curRects.length; j++) {
        let rect = curRects[j];
        rect.xPos += 1
        titleGraphics.drawRect(rect.xPos, rect.yPos, rect.width, rect.height);
      }
    }
    titleGraphics.endFill();
    
    // Wrap letters over to left of screen
    // TODO: Figure out correct width to wrap text
    // 800
    if (letterCoors[letterCoors.length-1].rects[0].xPos > window.innerWidth) {
      let lastLetter = letterCoors.pop();
      let minX = lastLetter.rects[0].xPos + 300;
      for (let i = 0; i < lastLetter.rects.length; i ++) {
        lastLetter.rects[i].xPos -= minX;
      }
      letterCoors.unshift(lastLetter)
    }
  },
  start: function(letterCoors:any, titleGraphics:any) {
    while (letterCoors.length > 0) {
      letterCoors.pop();
    }
    titleGraphics.clear();
  },
};
export default Title;

