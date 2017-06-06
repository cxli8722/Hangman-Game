

//array of what computer will generate and array of user option 

var wordchoice=["Gollum", "Gandalf", "Hobbiton", "Edoras"];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

 var wins = 0;
      var losses = 0;
      var LifeLeft = 6;
      var guesses=[];// usesr guess will be push up to this array


document.getElementById("random-button").addEventListener("click", randomwordchoice);

function randomwordchoice() {
   
        var computerWord = wordchoice[Math.floor(Math.random() * wordchoice.length)];
        
        var displayWord="_ ".repeat(computerWord.length);
  
     

        var targetDiv = document.getElementById("wordholder");
          targetDiv.innerHTML = displayWord;

         
          

       
       
}

randomwordchoice();

//button function to create button
 var buttons = function () {
    letterButton = document.getElementById("userButton");// go to id=userButton
    letter = document.createElement('ul');// then create ul

    for (var i = 0; i < alphabet.length; i++) { //loop all the letter
      letter.id = 'alphabet';//assign id to new <ul>
      list = document.createElement('li'); //create li
      list.id = 'letter'//assign id to list
      list.innerHTML = alphabet[i];  // will list alla teh alphabet in the array
      letterButton.appendChild(letter);// put letter inside of parent div letterbutton
      letter.appendChild(list);  //put list inside of parent letter


    }
  }
buttons();



// check if user guess is in the index and find the index and then replace .. string. index of (user.guess )

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
