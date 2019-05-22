let motto = ["ala ma kota", "bez pracy nie ma kołaczy", "bez kołaczy nie wesele", "chleb ma rogi", "czas leczy rany", "czas to pieniądz", "elektryka prąd nie tyka", "do trzech razy sztuka", "do boga gdy trwoga", "diabeł nie śpi"];

randomowe_haslo = Math.floor(Math.random() * 10);
let haslo = motto[randomowe_haslo];

haslo = haslo.toLocaleUpperCase();
let ile_skuch = 0;

let dlugosc = haslo.length;
let haslo_kreski = "";

    for (i = 0; i < dlugosc; i++ )
    {
        if (haslo.charAt(i) == " ") haslo_kreski = haslo_kreski + " ";
        else haslo_kreski = haslo_kreski + "-";
    }

function wypisz_haslo()
{
    document.getElementById("plansza").innerHTML = haslo_kreski;
}

window.onload = start;
let litery = "AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŻŹ".split("");

function start()
{
    let tresc_diva = "";

    for (i = 0; i <= 34; i++)
    {
        const element = "lit" + i;

        tresc_diva = tresc_diva + '<div onclick="sprawdz('+ i +')" class="litera" id="' + element + '">' + litery[i] + '</div>';
        if ((i + 1) % 7 == 0) tresc_diva = tresc_diva + '<div style="clear:both"></div>'
    }
    
    document.getElementById("alfabet").innerHTML = tresc_diva;
    wypisz_haslo();
}

String.prototype.ustawZnak = function(miejsce, znak)
{
    if (miejsce > this.length - 1) return this.toString();
    else return this.substr(0, miejsce) + znak + this.substr(miejsce + 1);
}

function sprawdz (nr)
{

    let trafiona = false;


    for (i = 0; i < dlugosc; i++) {
        if (haslo.charAt(i) == litery[nr]) {
           haslo_kreski = haslo_kreski.ustawZnak(i, litery[nr]);
           trafiona = true;
        }
    }

    if (trafiona == true)
    {
        const element = "lit" + nr;
        document.getElementById(element).style.background = "#006600";
        document.getElementById(element).style.color = "#00C000";
        document.getElementById(element).style.border = "3px solid green";
        document.getElementById(element).style.cursor = "default";
        wypisz_haslo();
    }
    else
    {
        const element = "lit" + nr;
        document.getElementById(element).style.background = "#330000";
        document.getElementById(element).style.color = "#C00000";
        document.getElementById(element).style.border = "3px solid red";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick", ";")

        // skucha
        ile_skuch++;
        let obraz = "img/s" + ile_skuch + ".png";
        document.getElementById("szubienica").innerHTML = '<img src="'+obraz+'" alt="" /img>'
    }
    // wygrana
    if (haslo == haslo_kreski) {
        document.getElementById("alfabet").innerHTML = "WYGRANA!!!<br>Prawidłowe hasło to:" + "<br><br>" + haslo + '<br><br><br><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
    }

    // przegrana

    if (ile_skuch >= 9) {
        document.getElementById("alfabet").innerHTML = "PRZEGRANA!!!<br>Prawidłowe hasło to:" + "<br><br>" + haslo + '<br><br><br><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
    }

    wypisz_haslo();
}