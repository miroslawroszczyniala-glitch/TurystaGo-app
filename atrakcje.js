const atrakcje = [

  // =========================
  // 🏰 ZABYTKI I HISTORIA
  // =========================

  {
    nazwa: "Zamek",
    kategoria: "Zabytki",
    ikona: "🏰",
    opis: "Zabytkowy zamek lub jego ruiny.",
    czas: "1-2 godz.",
    budzet: "Standard",
    wiek: "Wszystkie",
    ocena: 4.8
  },

  {
    nazwa: "Pałac",
    kategoria: "Zabytki",
    ikona: "🏛️",
    opis: "Pałac i jego historyczne otoczenie.",
    czas: "1-2 godz.",
    budzet: "Standard",
    wiek: "Wszystkie",
    ocena: 4.7
  },

  {
    nazwa: "Stare Miasto",
    kategoria: "Historia",
    ikona: "🏘️",
    opis: "Historyczna część miasta, rynek i zabytkowe uliczki.",
    czas: "1-3 godz.",
    budzet: "Ekonomiczny",
    wiek: "Wszystkie",
    ocena: 4.8
  },

  {
    nazwa: "Katedra",
    kategoria: "Zabytki",
    ikona: "⛪",
    opis: "Historyczna katedra lub bazylika.",
    czas: "30-60 min",
    budzet: "Ekonomiczny",
    wiek: "Wszystkie",
    ocena: 4.8
  },

  {
    nazwa: "Twierdza",
    kategoria: "Historia",
    ikona: "🏯",
    opis: "Dawna twierdza, fortyfikacje lub umocnienia.",
    czas: "1-3 godz.",
    budzet: "Standard",
    wiek: "7+",
    ocena: 4.7
  },

  {
    nazwa: "Muzeum historyczne",
    kategoria: "Muzea",
    ikona: "🏛️",
    opis: "Muzeum prezentujące historię regionu.",
    czas: "1-2 godz.",
    budzet: "Standard",
    wiek: "Wszystkie",
    ocena: 4.6
  },

  // =========================
  // 🌲 PRZYRODA
  // =========================

  {
    nazwa: "Park narodowy",
    kategoria: "Przyroda",
    ikona: "🌲",
    opis: "Obszar chronionej przyrody z możliwością zwiedzania.",
    czas: "2-6 godz.",
    budzet: "Ekonomiczny",
    wiek: "Wszystkie",
    ocena: 4.9
  },

  {
    nazwa: "Punkt widokowy",
    kategoria: "Przyroda",
    ikona: "🌄",
    opis: "Miejsce z ciekawym widokiem na okolicę.",
    czas: "15-45 min",
    budzet: "Bezpłatne",
    wiek: "Wszystkie",
    ocena: 4.8
  },

  {
    nazwa: "Ogród botaniczny",
    kategoria: "Przyroda",
    ikona: "🌺",
    opis: "Ogród z kolekcją roślin i ciekawymi alejkami.",
    czas: "1-3 godz.",
    budzet: "Standard",
    wiek: "Wszystkie",
    ocena: 4.7
  },

  {
    nazwa: "Zoo",
    kategoria: "Przyroda",
    ikona: "🦁",
    opis: "Ogród zoologiczny z różnymi gatunkami zwierząt.",
    czas: "2-5 godz.",
    budzet: "Standard",
    wiek: "Wszystkie",
    ocena: 4.8
  },

  {
    nazwa: "Mini zoo",
    kategoria: "Rodzina",
    ikona: "🐐",
    opis: "Niewielki ogród ze zwierzętami, szczególnie atrakcyjny dla dzieci.",
    czas: "1-2 godz.",
    budzet: "Standard",
    wiek: "0+",
    ocena: 4.6
  },

  {
    nazwa: "Terrarium",
    kategoria: "Rodzina",
    ikona: "🦎",
    opis: "Ekspozycja gadów, płazów i innych zwierząt.",
    czas: "30-90 min",
    budzet: "Standard",
    wiek: "Wszystkie",
    ocena: 4.6
  },

  // =========================
  // 👨‍👩‍👧 DZIECI I RODZINA
  // =========================

  {
    nazwa: "Park miniatur",
    kategoria: "Rodzina",
    ikona: "🏰",
    opis: "Miniaturowe modele znanych budowli i atrakcji.",
    czas: "1-3 godz.",
    budzet: "Standard",
    wiek: "3+",
    ocena: 4.7
  },

  {
    nazwa: "Park rozrywki",
    kategoria: "Rodzina",
    ikona: "🎢",
    opis: "Atrakcje i urządzenia rozrywkowe dla całej rodziny.",
    czas: "3-8 godz.",
    budzet: "Komfort",
    wiek: "3+",
    ocena: 4.7
  },

  {
    nazwa: "Centrum nauki",
    kategoria: "Edukacja",
    ikona: "🔬",
    opis: "Interaktywne wystawy i eksperymenty naukowe.",
    czas: "2-4 godz.",
    budzet: "Standard",
    wiek: "6+",
    ocena: 4.8
  },

  {
    nazwa: "Planetarium",
    kategoria: "Edukacja",
    ikona: "🌌",
    opis: "Pokazy astronomiczne i podróże po kosmosie.",
    czas: "1-2 godz.",
    budzet: "Standard",
    wiek: "5+",
    ocena: 4.7
  },

  {
    nazwa: "Park dinozaurów",
    kategoria: "Rodzina",
    ikona: "🦖",
    opis: "Modele dinozaurów i atrakcje edukacyjne.",
    czas: "2-4 godz.",
    budzet: "Standard",
    wiek: "3+",
    ocena: 4.6
  },

  {
    nazwa: "Park linowy",
    kategoria: "Aktywnie",
    ikona: "🌳",
    opis: "Trasy linowe dla dzieci i dorosłych.",
    czas: "1-3 godz.",
    budzet: "Standard",
    wiek: "6+",
    ocena: 4.7
  },

  // =========================
  // 🏊 WODA
  // =========================

  {
    nazwa: "Kąpielisko",
    kategoria: "Wypoczynek",
    ikona: "🏊",
    opis: "Miejsce do kąpieli i wypoczynku nad wodą.",
    czas: "2-5 godz.",
    budzet: "Ekonomiczny",
    wiek: "Wszystkie",
    ocena: 4.5
  },

  {
    nazwa: "Plaża",
    kategoria: "Wypoczynek",
    ikona: "🏖️",
    opis: "Miejsce do wypoczynku nad morzem lub jeziorem.",
    czas: "1-6 godz.",
    budzet: "Bezpłatne",
    wiek: "Wszystkie",
    ocena: 4.7
  },

  {
    nazwa: "Aquapark",
    kategoria: "Wypoczynek",
    ikona: "🌊",
    opis: "Baseny, zjeżdżalnie i atrakcje wodne.",
    czas: "2-5 godz.",
    budzet: "Komfort",
    wiek: "Wszystkie",
    ocena: 4.6
  },

  // =========================
  // 🚴 AKTYWNIE
  // =========================

  {
    nazwa: "Trasa rowerowa",
    kategoria: "Aktywnie",
    ikona: "🚴",
    opis: "Trasa przeznaczona do turystyki rowerowej.",
    czas: "1-6 godz.",
    budzet: "Bezpłatne",
    wiek: "Wszystkie",
    ocena: 4.7
  },

  {
    nazwa: "Szlak pieszy",
    kategoria: "Aktywnie",
    ikona: "🥾",
    opis: "Szlak turystyczny przeznaczony do pieszych wędrówek.",
    czas: "1-8 godz.",
    budzet: "Bezpłatne",
    wiek: "Wszystkie",
    ocena: 4.8
  },

  {
    nazwa: "Strzelnica",
    kategoria: "Aktywnie",
    ikona: "🎯",
    opis: "Obiekt sportowy oferujący zajęcia strzeleckie.",
    czas: "1-2 godz.",
    budzet: "Standard",
    wiek: "18+",
    ocena: 4.5
  },

  {
    nazwa: "Minigolf",
    kategoria: "Aktywnie",
    ikona: "⛳",
    opis: "Rodzinna wersja golfa na krótkich torach.",
    czas: "1-2 godz.",
    budzet: "Standard",
    wiek: "5+",
    ocena: 4.5
  },

  // =========================
  // 🎨 KULTURA
  // =========================

  {
    nazwa: "Galeria sztuki",
    kategoria: "Kultura",
    ikona: "🎨",
    opis: "Wystawy sztuki współczesnej lub historycznej.",
    czas: "1-2 godz.",
    budzet: "Standard",
    wiek: "Wszystkie",
    ocena: 4.6
  },

  {
    nazwa: "Skansen",
    kategoria: "Kultura",
    ikona: "🏡",
    opis: "Muzeum na wolnym powietrzu prezentujące dawną kulturę.",
    czas: "2-4 godz.",
    budzet: "Standard",
    wiek: "Wszystkie",
    ocena: 4.8
  },

  {
    nazwa: "Muzeum techniki",
    kategoria: "Technika",
    ikona: "⚙️",
    opis: "Eksponaty związane z techniką, przemysłem i wynalazkami.",
    czas: "1-3 godz.",
    budzet: "Standard",
    wiek: "7+",
    ocena: 4.6
  },

  {
    nazwa: "Muzeum motoryzacji",
    kategoria: "Technika",
    ikona: "🚗",
    opis: "Zabytkowe samochody, motocykle i inne pojazdy.",
    czas: "1-2 godz.",
    budzet: "Standard",
    wiek: "Wszystkie",
    ocena: 4.7
  },

  // =========================
  // ✈️ NIEZWYKŁE DOŚWIADCZENIA
  // =========================

  {
    nazwa: "Lot balonem",
    kategoria: "Przygoda",
    ikona: "🎈",
    opis: "Widokowy lot balonem nad okolicą.",
    czas: "2-4 godz.",
    budzet: "Komfort",
    wiek: "12+",
    ocena: 4.9
  },

  {
    nazwa: "Lot paralotnią",
    kategoria: "Przygoda",
    ikona: "🪂",
    opis: "Widokowy lot paralotnią z instruktorem.",
    czas: "1-2 godz.",
    budzet: "Komfort",
    wiek: "16+",
    ocena: 4.8
  },

  {
    nazwa: "Rejs statkiem",
    kategoria: "Woda",
    ikona: "🚢",
    opis: "Rejs turystyczny po rzece, jeziorze lub morzu.",
    czas: "1-3 godz.",
    budzet: "Standard",
    wiek: "Wszystkie",
    ocena: 4.7
  }

];