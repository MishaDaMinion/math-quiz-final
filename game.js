player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;


console.log(player1_name);
console.log(player2_name);

document.getElementById("title1").innerHTML = player1_name + ": " + player1_score;
document.getElementById("title2").innerHTML = player2_name + ": " + player2_score;

document.getElementById("question").innerHTML = "Question turn : " + player1_name;
document.getElementById("answer").innerHTML = "Answer turn : " + player2_name;



function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    
question_number = "<h4>" + number1 + "X" + number2 +"</h4>"
input_box = "<br>Answer : <input type='text' id='input_check_box'>";
check_button ="<br><br><button class='btn btn-warning' onclick='check()'>Check!</button>";
row = question_number + input_box + check_button;

document.getElementById("output").innerHTML = row;
document.getElementById("number1").value="";
document.getElementById("number2").value="";

}

qturn = "player1";
aturn = "player2";
 function check(){
     get_answer = document.getElementById("input_check_box").value;
     if(get_answer == actual_answer)
     {
         if(aturn == "player1")
         {
             update_player1_score = player1_score +1;
             document.getElementById("title1").innerHTML = update_player1_score;
         }
         else{
             update_player2_score = player2_score+1;
             document.getElementById("title2").innerHTML = update_player2_score;
         }
     }
     if(qturn == "player1"){
         qturn = "player2"
         document.getElementById("question").innerHTML = "Question Turn: " + player2_name;

     }else{
         qturn = "player1"
         document.getElementById("question").innerHTML = "Question Turn: " + player1_name;
     }
     if (aturn == "player2"){
        aturn = "player1";
        document.getElementById("answer").innerHTML = "Answer turn : " + player1_name;
        }else{
        aturn = "player2";
        document.getElementById("answer").innerHTML = "Answer turn : " + player2_name;
        }
        
    
    document.getElementById("output").innerHTML = "";
    
    
    
    
       }
    
 