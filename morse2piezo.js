module.exports = function(note, sequence) {
  const song = [];
  const dot = [note, 1/3];
  const dash = [note, 1];
  const wordSpace = [null, 7*(1/3)];
  const letterSpace = [null, 1];
  const subLetterSpace = [null, 1/3];

  const letters = sequence.split(' ');
  letters.forEach((letter) => {
    if (letter === '.......') return song.push(wordSpace);
    letter.split('').forEach((subLetter) => {
      if (subLetter === '.') song.push(dot);
      else song.push(dash);
      song.push(subLetterSpace);
    });
    song.push(letterSpace);
  });
  return song;
};
