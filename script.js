const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];

const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');




const keys = document.querySelectorAll('.key');
//^ looks for everything with the class of key and classifies it as key//

//--LISTENERS--//
//adds an event listener to each key that listens for a click and plays the corresponding note,//
//  loops over each key//
keys.forEach((key) => {
    //plays note
  key.addEventListener('click', () => playNote(key));
});

//--handlers--//
//function that plays the note when a key is clicked//

function playNote(key) {

    //selects note element//
    
    //get key, go into data, look at note//
  const noteAudio = document.getElementById(key.dataset.note);
  //reset note audio to 0//
  noteAudio.currentTime = 0;
  //play note audio//
  noteAudio.play();
  //add class of active, to style//
    key.classList.add('active');
    //when sound ends, removes class of active //
    noteAudio.addEventListener('ended', () => {
        //access key and remove active//
    key.classList.remove('active');
  });
}
//--EVENT LISTENERS FOR KEYBOARD--

document.addEventListener('keydown', (e) => {
  // Get the key that triggered the event
  const key = e.key;
  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeyIndex = BLACK_KEYS.indexOf(key);

  ///if key held down, don't play again"
   if (e.repeat) {
    return;
  }
  if (whiteKeyIndex > -1) {
    playNote(whiteKeys[whiteKeyIndex]);
  }

  if (blackKeyIndex > -1) {
    playNote(blackKeys[blackKeyIndex]);
  }
});