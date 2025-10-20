# Wir wollen eine PNG Datei von 1600x1200 Pixel erzeugen:
set terminal pngcairo size 1600,1200

# Der Dateiname der PNG Datei:
set output 'output_plot-02.png'

# Unsere CSV-Datei hat ein Semikolon als Datentrenner:
set datafile separator ';'

# x- und y-Achsen-Beschriftung:
set xlabel 'Zeit [ms]'
set ylabel 'y Auslenkung'

# Abstand vom oberen Rand:
set tmargin 5

# Titel mit Font-Größe:
set title 'The Analog Thing mit Hybrid Arduino Controller' offset 0,0 font ",18"

# Der Line Style für die Kurve:
set style line 1 linewidth 3 linecolor rgb "dark-violet"

# Rechts unten in die Ecke die Werte der 4 Parameter schreiben:
set label "Coeff_1 (y_0)" at 560,80 font "Monospace,12"
set label "Coeff_2 (spring)" at 560,60 font "Monospace,12"
set label "Coeff_3 (damping)" at 560,40 font "Monospace,12"
set label "Coeff_4 (1/mass)" at 560,20 font "Monospace,12"
set label "= 1.000" at 645,80 font "Monospace,12"
set label "= 0.099" at 645,60 font "Monospace,12"
set label "= 0.999" at 645,40 font "Monospace,12"
set label "= 0.208" at 645,20 font "Monospace,12"

# Unterteilung der x- und y-Achse:
set xtics 50
set ytics 50

# Style für Gitternetzlinien:
# lc = linecolor (Farbe), lt = linetype (Typ), lw = linewidth (Dicke)
# Dashtype kann Punkte, Striche oder eine Kombination enthalten
set style line 12 lc rgb "#333333" lt 0 lw 2 dashtype (1,1)

# Gitterlinien aktivieren: Hauptunterteilungen von x- und y-Achse.
# "back" heißt, dass die Linien hinter der Kurve geplottet werden:
set grid xtics ytics back ls 12

# Damit die y-Achse auch die x-Achse bei y=0 schneidet:
set yrange [0:*]

# Damit wir eine quadratische, unverzerrte Darstellung beider Achsen haben:
set size ratio -1

# Und schließlich die Daten aus der CSV Datei plotten:
plot 'hybrid-test-data-02-700ms.csv' \
     using 0:1 \
     with lines linestyle 1 \
     title 'gedämpfte Schwingung'