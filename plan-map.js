// ============================================
// TURYSTAGO – PLAN MAP
// Ekran mapy i wyznaczanie trasy
// ============================================

let touristMap = null;
let touristRoute = null;
let touristMarkers = [];

// Przykładowe punkty.
// Później zostaną zastąpione punktami wybranymi
// przez użytkownika w "Zaplanuj zwiedzanie".
const defaultPlaces = [
    {
        name: "Punkt startowy",
        lat: 52.2297,
        lng: 21.0122
    },
    {
        name: "Atrakcja 1",
        lat: 52.2318,
        lng: 21.0067
    },
    {
        name: "Atrakcja 2",
        lat: 52.2351,
        lng: 21.0085
    }
];

// --------------------------------------------
// OTWARCIE EKRANU MAPY
// --------------------------------------------

function openPlanMap() {

    const planScreen = document.getElementById("plan-screen");
    const mapScreen = document.getElementById("map-screen");

    if (planScreen) {
        planScreen.style.display = "none";
    }

    if (mapScreen) {
        mapScreen.style.display = "block";
    }

    createTouristMap();
}


// --------------------------------------------
// UTWORZENIE MAPY
// --------------------------------------------

function createTouristMap() {

    if (typeof L === "undefined") {
        alert("Nie udało się załadować mapy.");
        return;
    }

    if (touristMap) {
        touristMap.remove();
        touristMap = null;
    }

    touristMap = L.map("tourist-map");

    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            maxZoom: 19,
            attribution: "&copy; OpenStreetMap"
        }
    ).addTo(touristMap);

    createRoute(defaultPlaces);
}


// --------------------------------------------
// TWORZENIE TRASY
// --------------------------------------------

function createRoute(places) {

    if (!touristMap || !places || places.length === 0) {
        return;
    }

    touristMarkers.forEach(function(marker) {
        touristMap.removeLayer(marker);
    });

    touristMarkers = [];

    if (touristRoute) {
        touristMap.removeLayer(touristRoute);
        touristRoute = null;
    }

    const coordinates = [];

    places.forEach(function(place, index) {

        const position = [
            place.lat,
            place.lng
        ];

        coordinates.push(position);

        const marker = L.marker(position)
            .addTo(touristMap)
            .bindPopup(
                "<strong>" +
                (index + 1) +
                ". " +
                place.name +
                "</strong>"
            );

        touristMarkers.push(marker);
    });

    touristRoute = L.polyline(
        coordinates,
        {
            weight: 6,
            opacity: 0.85
        }
    ).addTo(touristMap);

    touristMap.fitBounds(
        touristRoute.getBounds(),
        {
            padding: [30, 30]
        }
    );

    showRouteInformation(places);
}


// --------------------------------------------
// INFORMACJE O TRASIE
// --------------------------------------------

function showRouteInformation(places) {

    const routeInfo =
        document.getElementById("route-information");

    if (!routeInfo) {
        return;
    }

    let html = `
        <h3>Twój plan zwiedzania</h3>
        <ol>
    `;

    places.forEach(function(place) {

        html += `
            <li>
                ${place.name}
            </li>
        `;

    });

    html += `
        </ol>

        <button
            class="tourist-button"
            onclick="startTour()">
            ▶ Rozpocznij zwiedzanie
        </button>
    `;

    routeInfo.innerHTML = html;
}


// --------------------------------------------
// ROZPOCZĘCIE ZWIEDZANIA
// --------------------------------------------

function startTour() {

    alert(
        "TurystaGo rozpoczyna zwiedzanie.\n\n" +
        "GPS będzie prowadził Cię według przygotowanego planu."
    );

    // W następnym etapie tutaj podłączymy:
    // - GPS
    // - automatyczne wykrywanie atrakcji
    // - audio przewodnika
    // - komunikaty "Podejdź bliżej"
    // - automatyczne rozpoczęcie opowieści
}


// --------------------------------------------
// POWRÓT DO PLANOWANIA
// --------------------------------------------

function backToPlan() {

    const mapScreen =
        document.getElementById("map-screen");

    const planScreen =
        document.getElementById("plan-screen");

    if (mapScreen) {
        mapScreen.style.display = "none";
    }

    if (planScreen) {
        planScreen.style.display = "block";
    }
}


// --------------------------------------------
// PRZYCISK "UTWÓRZ MÓJ PLAN"
// --------------------------------------------

document.addEventListener("DOMContentLoaded", function() {

    const createPlanButton =
        document.getElementById("create-my-plan");

    if (createPlanButton) {

        createPlanButton.addEventListener(
            "click",
            function() {

                openPlanMap();

            }
        );

    }

});
