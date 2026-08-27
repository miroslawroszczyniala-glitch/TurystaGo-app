/* =========================================
   TURYSTAGO
   MÓJ PLAN ZWIEDZANIA
   ========================================= */

let planStartLocation = null;
let planTime = null;
let planPlaces = [];


/* =========================================
   WYBÓR MIEJSCA ROZPOCZĘCIA
   ========================================= */

function chooseStartLocation() {

    planStartLocation = "Moja aktualna lokalizacja";

    const element =
        document.getElementById("startLocation");

    if (element) {

        element.innerHTML =
            "📍 <strong>Start:</strong> " +
            planStartLocation;

    }

}


/* =========================================
   WYBÓR CZASU
   ========================================= */

function selectPlanTime(time) {

    planTime = time;

    const element =
        document.getElementById("planTime");

    if (element) {

        element.innerHTML =
            "⏱️ <strong>Wybrany czas:</strong> " +
            time;

    }

}


/* =========================================
   DODAWANIE KATEGORII
   ========================================= */

function addPlanPlace(place) {

    if (planPlaces.includes(place)) {

        alert(
            "Ta kategoria jest już dodana do planu."
        );

        return;

    }

    planPlaces.push(place);

    showMyPlan();

}


/* =========================================
   WYŚWIETLANIE PLANU
   ========================================= */

function showMyPlan() {

    const element =
        document.getElementById("selectedPlan");

    if (!element) {
        return;
    }


    if (planPlaces.length === 0) {

        element.innerHTML =
            "<p>Twój plan jest jeszcze pusty.</p>";

        return;

    }


    let html =
        "<ol>";


    planPlaces.forEach(function(place, index) {

        html +=

            "<li>" +
            "<strong>" +
            place +
            "</strong>" +

            " " +

            "<button " +
            "type='button' " +
            "onclick=\"removePlanPlace(" +
            index +
            ")\">" +

            "Usuń" +

            "</button>" +

            "</li>";

    });


    html += "</ol>";


    element.innerHTML = html;

}


/* =========================================
   USUWANIE ELEMENTU Z PLANU
   ========================================= */

function removePlanPlace(index) {

    if (
        index < 0 ||
        index >= planPlaces.length
    ) {

        return;

    }


    planPlaces.splice(index, 1);

    showMyPlan();

}


/* =========================================
   UTWORZENIE PLANU
   ========================================= */

function createMyPlan() {

    if (!planStartLocation) {

        alert(
            "Najpierw wybierz miejsce rozpoczęcia."
        );

        return;

    }


    if (!planTime) {

        alert(
            "Najpierw wybierz czas zwiedzania."
        );

        return;

    }


    if (planPlaces.length === 0) {

        alert(
            "Dodaj przynajmniej jedną kategorię atrakcji."
        );

        return;

    }


    /*
       Na tym etapie pokazujemy podsumowanie.
       W następnym etapie podłączymy mapę,
       trasę oraz rzeczywiste atrakcje.
    */

    let message =
        "TWÓJ PLAN ZWIEDZANIA\n\n" +

        "📍 Start: " +
        planStartLocation +

        "\n⏱️ Czas: " +
        planTime +

        "\n\n⭐ Wybrane kategorie:\n";


    planPlaces.forEach(function(place, index) {

        message +=
            (index + 1) +
            ". " +
            place +
            "\n";

    });


    alert(message);


    /*
       Przejście do następnego ekranu.
       Jeżeli ekran mapy jeszcze nie istnieje,
       pozostajemy na ekranie planu.
    */

    const mapScreen =
        document.getElementById("plan-map");

    if (mapScreen) {

        openScreen("plan-map");

    }

}


/* =========================================
   WYCZYSZCZENIE PLANU
   ========================================= */

function clearMyPlan() {

    planStartLocation = null;

    planTime = null;

    planPlaces = [];


    const start =
        document.getElementById("startLocation");

    if (start) {

        start.innerHTML =
            "Nie wybrano miejsca rozpoczęcia.";

    }


    const time =
        document.getElementById("planTime");

    if (time) {

        time.innerHTML =
            "Nie wybrano czasu.";

    }


    showMyPlan();

}


/* =========================================
   KONIEC
   ========================================= */
