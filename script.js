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