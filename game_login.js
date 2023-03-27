function addUser() {
    let player1 = document.getElementById("player1").value
    let player2 = document.getElementById("player2").value
    localStorage.setItem("player1-nome",player1)
    localStorage.setItem("player2-nome",player2)
    window.location = "game_page.html"
}

let number1
let number2
let actual_answer
let question_number
let input_box
let check_button
let row

function send() {
 number1 = document.getElementById("number1").value
 number2 = document.getElementById("number2").value
 actual_answer = parseInt(number1) * parseInt(number2)
 question_number = "<h4>" + number1 + " X " + number2 + "</h4>"
 input_box = "<br>Resposta : <input type = 'text' id='input_check_box"
 check_button = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>"
 row = question_number + input_box + check_button
 document.getElementById("output").innerHTML = row
 document.getElementById("number1").value = ""
 document.getElementById("number2").value = ""
}

let question_turn = "player1"
let answer_turn = "player2"
let player1_score
let player2_score

function check() {
    get_answer = document.getElementById("input_check_box").value
    if(get_answer == actual_answer) {
        if(answer_turn == "player1") {
           player1_score = player1_score = 1
           document.getElementById("player1_score").innerHTML = player1_score
        }
        else {
           player2_score = player2_score = 1
           document.getElementById("player2_score").innerHTML = player2_score
        }
    }
    if(question_turn == "player1") {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Turno de pergunto - " + player2_name
    }
    else {
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Turno de pergunta - " + player1_name
    }
    document.getElementById("output").innerHTML = ""
}