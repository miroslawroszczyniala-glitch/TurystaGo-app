# 6. System GPS i automatyczne oprowadzanie TurystaGo

## 1. Cel systemu GPS

GPS jest jednym z podstawowych elementów TurystaGo.

Jego zadaniem nie jest wyłącznie pokazanie pozycji użytkownika na mapie. System GPS ma umożliwić aplikacji rozpoznanie, gdzie znajduje się użytkownik, jakie interesujące miejsca znajdują się w jego pobliżu oraz kiedy należy przedstawić odpowiednią informację.

Dzięki temu TurystaGo może pełnić funkcję **aktywnego przewodnika**, który reaguje na przemieszczanie się użytkownika.

---

## 2. Określanie aktualnej pozycji

Po uzyskaniu zgody użytkownika aplikacja pobiera jego aktualną lokalizację.

System określa między innymi:

* pozycję GPS,
* kierunek przemieszczania się,
* odległość od wybranego celu,
* odległość od interesujących obiektów,
* zmianę pozycji użytkownika.

Informacje te są wykorzystywane do działania mapy, nawigacji oraz automatycznego oprowadzania.

---

## 3. Wykrywanie atrakcji w pobliżu

TurystaGo może analizować lokalizację użytkownika i wyszukiwać obiekty znajdujące się w określonym promieniu.

Przykładowo użytkownik może ustawić:

**100 m**

**250 m**

**500 m**

**1 km**

lub inną wartość.

Jeżeli w wybranym obszarze znajduje się interesujący obiekt, aplikacja może wyświetlić odpowiednią informację.

---

## 4. Automatyczne powiadomienie

Po zbliżeniu się użytkownika do obiektu TurystaGo może wyświetlić komunikat.

Przykład:

> **Jesteś w pobliżu katedry.**

Następnie:

> **Chcesz poznać jej historię?**

Użytkownik może wybrać:

**POSŁUCHAJ**

**ZOBACZ**

**POMIŃ**

Dzięki temu użytkownik zachowuje kontrolę nad sposobem zwiedzania.

---

## 5. Automatyczne uruchomienie przewodnika

W ustawieniach użytkownik może zdecydować, czy przewodnik ma uruchamiać się:

* ręcznie,
* po potwierdzeniu,
* automatycznie.

Przy automatycznym trybie TurystaGo może rozpocząć odpowiedni materiał audio po wejściu użytkownika w określoną strefę obiektu.

Rozwiązanie to powinno być opcjonalne.

---

## 6. Strefy GPS

Każdy obiekt może posiadać określoną **strefę GPS**.

Jest to obszar wokół obiektu, w którym TurystaGo uznaje, że użytkownik znajduje się wystarczająco blisko, aby rozpocząć informacje dotyczące danego miejsca.

Strefa może być różna w zależności od rodzaju obiektu.

Przykładowo:

* mały pomnik – mniejsza strefa,
* kościół – większa strefa,
* zamek – większa strefa,
* rozległy skansen – specjalnie określony obszar.

---

## 7. Kierunek przemieszczania się

W przyszłości system może uwzględniać nie tylko odległość od obiektu, ale również kierunek, w którym porusza się użytkownik.

Przykładowo:

Jeżeli użytkownik przechodzi obok zabytku, aplikacja może zaproponować jego zwiedzanie.

Jeżeli jednak użytkownik jedzie w przeciwnym kierunku i tylko oddala się od obiektu, system może nie wyświetlać niepotrzebnego komunikatu.

Pozwoli to ograniczyć liczbę niepotrzebnych powiadomień.

---

## 8. GPS podczas aktywnego zwiedzania

Po uruchomieniu zwiedzania TurystaGo może stale analizować pozycję użytkownika.

System może sprawdzać:

**Gdzie jestem?**

**Dokąd zmierzam?**

**Jaki obiekt jest następny?**

**Ile zostało do celu?**

**Czy jestem na właściwej trasie?**

**Czy zbliżam się do kolejnego punktu?**

Informacje te pozwalają aplikacji reagować na rzeczywistą sytuację użytkownika.

---

## 9. Automatyczne przechodzenie do kolejnego obiektu

Jeżeli użytkownik korzysta z przygotowanej trasy, po zakończeniu zwiedzania jednego obiektu TurystaGo może wskazać następny punkt.

Przykład:

> **Zwiedzanie katedry zakończone.**

> **Następny punkt: Stare Miasto.**

> **Odległość: 650 m.**

> **Czas dojścia: około 8 minut.**

Użytkownik może rozpocząć nawigację do kolejnego miejsca.

---

## 10. Rozpoznawanie przyjazdu do celu

System GPS powinien rozpoznać moment, w którym użytkownik dotrze do wybranego obiektu.

Aplikacja może wtedy wyświetlić:

> **Dotarłeś do celu.**

oraz zaproponować:

**Rozpocznij zwiedzanie**

**Posłuchaj przewodnika**

**Zobacz informacje**

---

## 11. GPS a przewodnik audio

GPS powinien być ściśle połączony z systemem audio.

Dzięki temu TurystaGo może dopasować odpowiedni materiał do aktualnego miejsca.

Przykładowo użytkownik podchodzi do zamku.

Aplikacja rozpoznaje lokalizację i może przygotować:

**„Historia zamku”**

Następnie po wejściu do określonej części obiektu mogą być dostępne kolejne materiały:

**„Dziedziniec”**

**„Kaplica”**

**„Sala rycerska”**

**„Komnata władcy”**

Jeżeli obiekt posiada szczegółową trasę zwiedzania, system może prowadzić użytkownika również wewnątrz obiektu.

---

## 12. Oprowadzanie wewnątrz obiektów

W przypadku dużych obiektów sam GPS może nie zapewniać wystarczającej dokładności.

Dlatego w przyszłości TurystaGo może wykorzystywać dodatkowe technologie, np.:

* znaczniki,
* kody QR,
* Bluetooth,
* beacony,
* rozwiązania oparte na mapach wnętrz.

Pozwoliłoby to przygotować dokładniejsze zwiedzanie:

**wejdź → przejdź do punktu 1 → posłuchaj → przejdź do punktu 2 → posłuchaj → punkt 3.**

---

## 13. Ochrona przed wielokrotnym odtwarzaniem

System powinien pamiętać, że użytkownik odwiedził dany obiekt.

Dzięki temu TurystaGo nie powinien wielokrotnie uruchamiać tego samego komunikatu podczas krótkiego przemieszczania się w pobliżu obiektu.

System może zapamiętywać:

* odwiedzone obiekty,
* odtworzone materiały,
* rozpoczęte przewodniki,
* zakończone punkty trasy.

---

## 14. GPS a bateria telefonu

System powinien być zaprojektowany z uwzględnieniem zużycia baterii.

Nie jest konieczne wykorzystywanie maksymalnej dokładności GPS przez cały czas.

Aplikacja powinna dobierać częstotliwość sprawdzania lokalizacji do aktualnego trybu pracy.

Inne ustawienia mogą być stosowane podczas:

* zwykłego korzystania z mapy,
* aktywnej nawigacji,
* automatycznego oprowadzania,
* postoju użytkownika.

---

## 15. Utrata sygnału GPS

Aplikacja powinna prawidłowo reagować na chwilową utratę sygnału GPS.

Użytkownik może otrzymać komunikat:

> **„Oczekiwanie na sygnał GPS…”**

System powinien próbować ponownie określić lokalizację.

W miarę możliwości ostatnia znana lokalizacja i trasa powinny pozostać widoczne.

---

## 16. GPS w grupie

System GPS może również wspierać funkcje grupowe.

Po dołączeniu do grupy użytkownik może zobaczyć:

* miejsce zbiórki,
* swoją odległość od grupy,
* kierunek do miejsca zbiórki,
* czas potrzebny na powrót.

W przyszłości możliwe jest również stworzenie funkcji pokazującej pozycję innych uczestników grupy, oczywiście wyłącznie za ich zgodą.

---

## 17. Prywatność lokalizacji

Lokalizacja użytkownika jest informacją wymagającą szczególnej ochrony.

TurystaGo powinien jasno informować użytkownika:

* dlaczego lokalizacja jest potrzebna,
* kiedy jest wykorzystywana,
* jakie funkcje jej wymagają,
* czy może zostać udostępniona innym uczestnikom grupy.

Użytkownik powinien mieć możliwość zarządzania zgodami dotyczących lokalizacji.

---

## 18. Zasada działania systemu

Docelowy mechanizm automatycznego oprowadzania można przedstawić w prosty sposób:

**GPS → lokalizacja użytkownika → wykrycie obiektu → sprawdzenie odległości → komunikat → wybór użytkownika → przewodnik → kolejny obiekt.**

To właśnie ten mechanizm ma odróżniać TurystaGo od zwykłej aplikacji z mapą.

---

## 19. Docelowa funkcja systemu

System GPS TurystaGo powinien sprawić, że użytkownik nie musi ciągle wyszukiwać informacji.

Zamiast tego aplikacja może powiedzieć:

> **„Jesteś właśnie w miejscu, które warto poznać.”**

A następnie zaproponować odpowiednią historię, opis, zdjęcia lub przewodnik audio.

**GPS w TurystaGo nie ma być tylko nawigacją. Ma być podstawą inteligentnego oprowadzania turysty.**
