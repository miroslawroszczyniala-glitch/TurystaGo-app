# 63. Struktura aplikacji TurystaGo – pliki, foldery i moduły

1. Główny katalog projektu – będzie zawierał podstawowe pliki konfiguracyjne oraz dokumentację projektu.

2. Folder `docs` – będzie przechowywał szczegółową dokumentację TurystaGo.

3. Folder `src` – będzie zawierał główny kod aplikacji.

4. Folder `components` – będzie przeznaczony na powtarzalne elementy interfejsu, takie jak przyciski, karty obiektów, menu i komunikaty.

5. Folder `screens` – będzie zawierał poszczególne ekrany aplikacji.

6. Ekran główny – będzie odpowiedzialny za główne menu oraz dostęp do najważniejszych funkcji TurystaGo.

7. Ekran mapy – będzie wyświetlał mapę, aktualną lokalizację użytkownika oraz obiekty znajdujące się w pobliżu.

8. Ekran planowania – będzie obsługiwał funkcję „Zaplanuj zwiedzanie”.

9. Ekran obiektu – będzie prezentował szczegółowe informacje o wybranej atrakcji.

10. Ekran przewodnika – będzie obsługiwał aktualnie prowadzone zwiedzanie oraz informacje audio.

11. Ekran grupy – będzie umożliwiał obsługę wycieczki grupowej, uczestników i miejsca zbiórki.

12. Ekran komunikatora – będzie obsługiwał wiadomości pomiędzy użytkownikami lub uczestnikami grupy.

13. Ekran albumu – będzie umożliwiał przeglądanie zdjęć i wspomnień z podróży.

14. Ekran profilu – będzie zawierał ustawienia użytkownika, konto, ulubione miejsca i historię zwiedzania.

15. Folder `services` – będzie zawierał moduły odpowiedzialne za komunikację z GPS, mapami, bazą danych, serwerem oraz innymi usługami.

16. Moduł GPS – będzie pobierał aktualną lokalizację użytkownika i przekazywał ją do pozostałych funkcji aplikacji.

17. Moduł map – będzie odpowiadał za wyświetlanie mapy, tras i lokalizacji obiektów.

18. Moduł bazy danych – będzie odpowiedzialny za pobieranie i zapisywanie informacji o obiektach, użytkownikach oraz trasach.

19. Moduł audio – będzie obsługiwał nagrania przewodnika i automatyczne odtwarzanie odpowiednich materiałów.

20. Moduł powiadomień – będzie odpowiadał za komunikaty, alerty, przypomnienia i informacje związane z aktualną sytuacją użytkownika.

21. Moduł komunikacji – będzie obsługiwał przesyłanie wiadomości oraz informacje dotyczące grup.

22. Folder `assets` – będzie przechowywał obrazy, ikony, materiały graficzne oraz inne elementy wykorzystywane przez aplikację.

23. Folder `audio` – może przechowywać materiały dźwiękowe wykorzystywane w trybie offline.

24. Folder `data` – może zawierać lokalne dane testowe oraz przykładowe obiekty wykorzystywane podczas tworzenia aplikacji.

25. Folder `tests` – będzie przeznaczony na testy poszczególnych funkcji aplikacji.

26. Plik konfiguracji – będzie zawierał ustawienia potrzebne do uruchomienia i prawidłowego działania projektu.

27. README.md – będzie zawierał krótką informację o projekcie, jego celu oraz sposobie rozpoczęcia pracy z TurystaGo.

28. Dokumentacja `docs` – pozostanie oddzielona od kodu, dzięki czemu szczegółowy opis projektu nie będzie mieszał się z właściwym programem.

29. Rozwój struktury – w miarę powstawania aplikacji mogą być dodawane kolejne foldery i moduły.

30. Zasada porządku – każdy moduł powinien mieć jasno określone zadanie, aby w przyszłości łatwo można było znaleźć, zmienić lub rozbudować konkretną funkcję.

Cel modułu: stworzenie uporządkowanej struktury technicznej TurystaGo, która pozwoli nam stopniowo przechodzić od dokumentacji do rzeczywistego kodu aplikacji.
