class Writer {
    write (textToWrite){
        document.write("<p>");
        document.write(textToWrite);
        document.write("<p>");
    }
}

var w = new Writer();
w.write(asignatura.curso);
w.write(asignatura.estudiante);
w.write(asignatura.email);