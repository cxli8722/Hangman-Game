



  var wordchoice=["Gollum", "Gandalf", "Hobbiton", "Edoras"];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];



document.getElementById("random-button").addEventListener("click", randomwordchoice);

function randomwordchoice() {
   
        var computerWord = wordchoice[Math.floor(Math.random() * wordchoice.length)];
        var targetDiv = document.getElementById("wordholder");
          targetDiv.innerHTML = computerWord;


       
       
}



/*getElementById("random-button").on

 $("#random-button").on("click", function() 
 {
   for ( i = 1; i < wordchoice.length; i++){
    text = "new word is: " + i;
    }
   document.getElementById('newword').innerHTML=text;
}


//get a reference to the element
  var myBtn = document.getElementById('myButton');

  //add event listener
  myBtn.addEventListener('click', function(event) {
    window.location.href='Students.html';
  });

    

/*

var randomchoice = wordchoice[Math.floor(Math.random()*wordchoice.length)];
console.log (randomchoice);


// generate random word 


    $(document).ready(function() {

      // CREATE THE MISSING CODE HERE. Your code should add content to the random-number div.
      // ...

 $("#random-button").on("click", function() 
 {













var randomWord= Math.floor((Math.random() * wordchoice.length) + 1);
 
 $("#newword").html (randomword);
 });






      function myFunction() {
       
          document.getElementById("demo").innerHTML = variable name ;
 */
