function buttonGo() {
    var input_1 = document.getElementById("i1").value;
    var input_2 = document.getElementById("i2").value;

    localStorage.setItem("player1_name", input_1);
    localStorage.setItem("player2_name", input_2);

    window.location = "game_page.html";

}