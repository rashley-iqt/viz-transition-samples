import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'd3-shape'
import 'd3-selection'
import registerServiceWorker from './registerServiceWorker';
import BlinkingCircle from './BlinkingCircle'
import VibratingCircle from './VibratingCircle'
import BouncingCircle from './BouncingCircle'
import SizeChangingCircle from './SizeChangingCircle'
import MovingCircle from './MovingCircle'
import TeleportCircle from './TeleportCircle'
import ForceGhostCircle from './ForceGhostCircle'
import OutlineMovingCircle from './OutlineMovingCircle'
import ShapeChange from './ShapeChange'

const blinkStyle = {
  outlineColors: 'none',
  fillColors: 'none, black'
}
const blinking = (
  <div>
    <h4>blink</h4>
    <p id="circle-blinking">
      <BlinkingCircle style={blinkStyle} />
    </p>
  </div>
);

const ccStyle = {
  outlineColors: 'purple, blue, green, yellow, orange, red',
  fillColors: 'red, orange, yellow, green, blue, purple'
};

const colorChange = (
  <div>
    <h4>Color Change</h4>
    <p id="circle-color-change">
      <BlinkingCircle style={ccStyle} />
    </p>
  </div>
);

const obfStyle = {
  outlineColors: 'red',
  fillColors: 'black, none'
};

const outlineBlinkFill = (
  <div>
    <h4>Blinking with Outline</h4>
    <p id="outline-blink-fill">
      <BlinkingCircle style={obfStyle} />
    </p>
  </div>
);

const outlineStyle = {
  outlineColors: '#00CC00',
  fillColors: 'black'
};

const outline = (
  <div>
    <h4>Outlining</h4>
    <p id="circle-outline">
      <BlinkingCircle style={outlineStyle} />
    </p>
  </div>
);

const outlineBlinkStyle = {
  outlineColors: 'green, yellow',
  fillColors: 'black'
};

const outlineBlink = (
  <div>
    <h4>Outline Blink</h4>
    <p id="circle-outline-blink">
      <BlinkingCircle style={outlineBlinkStyle} />
    </p>
  </div>
);

const vibrating = (
  <div>
    <h4>Caffeinated</h4>
    <p id="circle-vibrate">
      <VibratingCircle />
    </p>
  </div>
);

const vibratingOutline = (
  <div>
    <h4>Vibrating Outline</h4>
    <p id="circle-outline-vibrate">
      <OutlineMovingCircle direction="horizontal" />
    </p>
  </div>
);

const bouncing = (
  <div>
    <h4>Bouncing</h4>
    <p id="circle-bounce">
      <BouncingCircle />
    </p>
  </div>
);

const bouncingOutline = (
  <div>
    <h4>Bouncing Outline</h4>
    <p id="circle-outline-bounce">
      <OutlineMovingCircle direction="vertical" />
    </p>
  </div>
);

const moving = (
  <div>
    <h4>Moving</h4>
    <p id="circle-move">
      <MovingCircle />
    </p>
  </div>
);

const teleporting = (
  <div>
    <h4>Teleport</h4>
    <p id="circle-teleport">
      <TeleportCircle />
    </p>
  </div>
);

const ghosting = (
  <div>
    <h4>Force Ghost</h4>
    <p id="circle-ghost">
      <ForceGhostCircle />
    </p>
  </div>
);

const sizeChanging = (
  <div>
    <h4>Size Changing</h4>
    <p id="circle-bounce">
      <SizeChangingCircle />
    </p>
  </div>
);

const sizeOutline = (
  <div>
    <h4>Size Changing Outline</h4>
    <p id="circle-outline-bounce">
      <OutlineMovingCircle direction="from-center" />
    </p>
  </div>
);

const shapeOverlay = (
  <div>
    <h4>Shape Overlay</h4>
    <p id="shapeOverlay">
      <ShapeChange />
    </p>
  </div>
);

ReactDOM.render(
  blinking,
  document.getElementById('blink')
);

ReactDOM.render(
  colorChange,
  document.getElementById('color-change')
);

ReactDOM.render(
  outlineBlinkFill,
  document.getElementById('outline-blink-fill')
);

ReactDOM.render(
  shapeOverlay,
  document.getElementById('shape-overlay')
);

ReactDOM.render(
  outline,
  document.getElementById('outline')
);

ReactDOM.render(
  outlineBlink,
  document.getElementById('outline-blink')
);

ReactDOM.render(
  outlineBlink,
  document.getElementById('outline-blink')
);

ReactDOM.render(
  vibrating,
  document.getElementById('vibrate')
);

ReactDOM.render(
  vibratingOutline,
  document.getElementById('outline-vibrate')
);

ReactDOM.render(
  bouncing,
  document.getElementById('bounce')
);

ReactDOM.render(
  bouncingOutline,
  document.getElementById('outline-bounce')
);

ReactDOM.render(
  moving,
  document.getElementById('move')
);

ReactDOM.render(
  teleporting,
  document.getElementById('teleport')
);

ReactDOM.render(
  ghosting,
  document.getElementById('ghost')
);

ReactDOM.render(
  sizeChanging,
  document.getElementById('size')
);

ReactDOM.render(
  sizeOutline,
  document.getElementById('outline-size')
);
registerServiceWorker();
