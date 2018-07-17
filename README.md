# morse2piezo
converts morse code notation to a piezo song for use with [Johnny Five's `Piezo` class](http://johnny-five.io/examples/piezo/).

## Usage

I recommend you use the [morse package](https://www.npmjs.com/package/morse) to convert your text into morse code notation first.

```javascript
const morse2piezo = require('morse2piezo');
const morse = require('morse');
const five = require('johnny-five');

const sequence = morse.encode('hello world');
// first argument is the note / tone, second is the morse sequence.
const song = morse2piezo('B1', sequence);

five.Board().on('ready', () => {
  const piezo = new five.Piezo(9);
  piezo.play({song, tempo: 500});
});
```