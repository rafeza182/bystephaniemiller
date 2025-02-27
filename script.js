document.addEventListener('DOMContentLoaded', function() {
     Ejemplo de crear un archivo ZIP con JSZip
    document.getElementById('downloadBtn').addEventListener('click', function() {
        var zip = new JSZip();
        zip.file(hello.txt, ¡Hola, mundo!);
        zip.generateAsync({ type blob }).then(function(content) {
             Crear un enlace de descarga para el archivo ZIP
            var link = document.createElement(a);
            link.href = URL.createObjectURL(content);
            link.download = mi_archivo.zip;
            link.click();
        });
    });
});
