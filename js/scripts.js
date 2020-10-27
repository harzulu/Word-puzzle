function isVowel(letter) {
  let l = letter.toUpperCase();
  if (l === "A" || l === "E" || l === "I" || l === "O" || l === "U") {
    return true;
  } else {
    return false;
  }
}

$(document).ready(function() {
  $("#form").submit(function(event){
    event.preventDefault();
    let sentence = $("#string").val();
    let array = sentence.split("");
    alert(array);
    for (let i = 0; i < array.length; i += 1) {
      if (isVowel(array[i])) {
        array[i]="-";
      }
    }
    alert(array);
  });
});