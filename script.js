var turn = 1;
var player;

//Functies die kijken naar de keuze van de spelers

function steen() {
    player = "steen";
    document.cookie = turn + "=" + player;
    location.reload();

}

function papier() {
    player = "papier";
    document.cookie = turn + "=" + player;
    location.reload();
}

function schaar() {
    player = "schaar";
    document.cookie = turn + "=" + player;
    location.reload();
}

//Functie die de value pakt van de cookies

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// If statement die kijkt wie zijn turn het is

if ((getCookie(1) === "steen") || (getCookie(1) === "papier") || (getCookie(1) === "schaar"))  {
    document.getElementById("h1").innerHTML = "Turn: Player 2";
    turn = 2;
}

// Variabele voor cookie values

const playerChoice1 = getCookie(1);
const playerChoice2 = getCookie(2);

// If statements dat de keuzes vergelijken (niet heel netjes maar ben moe)

if (getCookie(2) === "steen") {
    if(playerChoice1 === playerChoice2) {
        document.getElementById("h1").innerHTML = "Result: TIE";
        document.getElementById("resetKnop").innerHTML = '<button onclick="delete_cookie()"> Speel nog is </button>';
    } else {
        if(playerChoice1 === "papier") {
            document.getElementById("h1").innerHTML = "Result: Winnaar is player 1";
            document.getElementById("resetKnop").innerHTML = '<button onclick="delete_cookie()"> Speel nog is </button>';
        } else {
            document.getElementById("h1").innerHTML = "Result: Winnaar is player 2";
            document.getElementById("resetKnop").innerHTML = '<button onclick="delete_cookie()"> Speel nog is </button>';
        }
    }
}

if (getCookie(2) === "papier") {
    if(playerChoice1 === playerChoice2) {
        document.getElementById("h1").innerHTML = "Result: TIE";
        document.getElementById("resetKnop").innerHTML = '<button onclick="delete_cookie()"> Speel nog is </button>';
    } else {
        if(playerChoice1 === "schaar") {
            document.getElementById("h1").innerHTML = "Result: Winnaar is player 1";
            document.getElementById("resetKnop").innerHTML = '<button onclick="delete_cookie()"> Speel nog is </button>';
        } else {
            document.getElementById("h1").innerHTML = "Result: Winnaar is player 2";
            document.getElementById("resetKnop").innerHTML = '<button onclick="delete_cookie()"> Speel nog is </button>';
        }
    }
}

if (getCookie(2) === "schaar") {
    if(playerChoice1 === playerChoice2) {
        document.getElementById("h1").innerHTML = "Result: TIE";
        document.getElementById("resetKnop").innerHTML = '<button onclick="delete_cookie()"> Play againF! </button>';
    } else {
        if(playerChoice1 === "steen") {
            document.getElementById("h1").innerHTML = "Result: Winnaar is player 1";
            document.getElementById("resetKnop").innerHTML = '<button onclick="delete_cookie()"> Speel nog is </button>';
        } else {
            document.getElementById("h1").innerHTML = "Result: Winnaar is player 2";
            document.getElementById("resetKnop").innerHTML = '<button onclick="delete_cookie()"> Speel nog is </button>';
        }
    }
}

// funtion die cookies verwijdert
function delete_cookie() {
    document.cookie = 1 + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 2 + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    location.reload();
}