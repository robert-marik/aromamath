rm _build/html/*html

jupyter-book build .

for i in `ls _build/html/*.html | grep -v index.html | grep -v search.html`
do
    # echo "Substituce v souboru ",$i
    csplit $i '/<\/head>/'
    cat xx00 replacement xx01 > $i
done    
    
