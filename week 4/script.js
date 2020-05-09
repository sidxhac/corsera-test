(function () {

    var names = ["Krish", "Tom", "Jerry", "Jack", "Paul", "Frank", "Tokyo", "Lisboa", "Nairobi", "Sergio"];

    for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();   // Takes first letter and converts to lowercase
      if (firstLetter === 'j') {
        byeSpeaker.speak(names[i]);                         // If name starts with j, say bye ==> calls byeSpeaker()
      } else {
        helloSpeaker.speak(names[i]);
      }
    }
    
    })();