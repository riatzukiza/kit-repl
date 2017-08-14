git add .;
git commit -m "$1";
sibilant ./src/*.sibilant -o ./js/;
git add .;
git commit -m "recompiled js";
