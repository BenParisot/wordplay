//backend


//frontend

$(document).ready(function() {
  $("#input").submit(function(event) {
  var sentence = $("input#sentence").val();

  var splitSentence = sentence.split(" ", 30);

  splitSentence.map(function(word) {
    if (word.length > 3) {
      alert(word);
    }
  });

  event.preventDefault();

  //console.log(cutUp);
  //alert(sentence);

  // console.log($(word).text().length > 3);
  });

});
