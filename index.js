//Function to count correct answers and print results to document 
function myFunction() {

    //Create variable to count correct answers 
    var correctAnswers = 0;

    //Create variables for each question's input value
    var que1 = document.getElementById("que1").checked;
    var que2 = document.getElementById("que2").checked;
    var que3 = document.getElementById("que3").checked;
    var que4 = document.getElementById("que4").checked;
    var que5 = document.getElementById("que5").checked;
    var que6 = document.getElementById("que6").checked;
    var que7 = document.getElementById("que7").checked;
    var que8 = document.getElementById("que8").checked;
    var que9 = document.getElementById("que9").checked;
    var que10 = document.getElementById("que10").checked;
    var que11 = document.getElementById("que11").checked;
    var que12 = document.getElementById("que12").checked;
    var que13 = document.getElementById("que13").checked;
    var que14 = document.getElementById("que14").checked;
    var que15 = document.getElementById("que15").checked;
    var que16 = document.getElementById("que16").checked;
    var que17 = document.getElementById("que17").checked;
    var que18 = document.getElementById("que18").checked;
    var que19 = document.getElementById("que19").checked;
    var que20 = document.getElementById("que20").checked;

    //Assign correct answers to field inputs
      if (que1) {
        correctAnswers += 1;
    } if (que2) {
        correctAnswers += 1;
    } if (que3) {
        correctAnswers += 1;
    } if (que4) {
        correctAnswers += 1;
    } if (que5) {
        correctAnswers += 1;
    } if (que6) {
        correctAnswers += 1;
    } if (que7) {
        correctAnswers += 1;
    } if (que8)  {
        correctAnswers += 1;
    }  if (que9) {
        correctAnswers += 1;
    }  if (que10) {
        correctAnswers += 1;
    } 
    if (que11) {
        correctAnswers += 1;
    } 
    if (que12) {
        correctAnswers += 1;
    } 
    if (que13) {
        correctAnswers += 1;
    }
    if (que14) {
        correctAnswers += 1;
    }
    if (que15) {
        correctAnswers += 1;
    }
    if (que16) {
        correctAnswers += 1;
    }
    if (que17) {
        correctAnswers += 1;
    }
    if (que18) {
        correctAnswers += 1;
    }
    if (que19) {
        correctAnswers += 1;
    }
    if (que20) {
        correctAnswers += 1;
    }

         //Print results (and statement) to document, dependant on outcome
         if (correctAnswers === 20) {
        document.getElementById("result").innerHTML = "Congratulations! You got all 10 answers correct";}
    else if (correctAnswers >= 15) {
        document.getElementById("result").innerHTML = "Congratulations! You got " + correctAnswers + " answers correct";}
    else if (correctAnswers >= 10) {
        document.getElementById("result").innerHTML = "You got " + correctAnswers + " answers correct";}
    else if (correctAnswers >= 5) {
        document.getElementById("result").innerHTML = "Too Bad! You only got " + correctAnswers + " answers correct";}
    
    else if (correctAnswers === 0) {
        document.getElementById("result").innerHTML = "You didn't answer a single answer correctly!";}

        //Print correct answers to form
        document.getElementById("answers").innerHTML = "Correct answers: (1)John A Macdonald (2)Jawaharlal Nehru (3)Gregg Abott (4)Scott Morrison (5)Robert Walpole (6)Africa (7)India (8)Vatican City (9)Russia (10)Facebook (11)July 1st,1867 (12)70 (13)10 (14)IceHockey (15)10th September,1939 (16)Toronto (17)Ottawa (18)Beaver (19)Cornus Canadensis  (20)White Lily";

        //Reset contents of form
        document.getElementById("quiz-form").reset();
}

