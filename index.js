
let libros = [ 
{
    titulo:"La Sirenita",
    autor:"Hans Christian Andersen",
    genero:"Ficcion",
    idioma:"Español",
    precio:15.000,
    descuento:"20%",
    formato:"Tapa dura",
    isbn:"29788478888566",
    descripcion:"La historia de Ariel, una sirena que sueña con vivir en tierra firme.",
    estado:"Nuevo",
    ubicacion:"Los Angeles, Estados Unidos",
    fecha_publicacion:"Junio 1837",
    editorial:"Disney Press",
    paginas: 48,
    dimensiones:"8.5 x 0.5 x 10 pulgadas" ,
    peso:"1.0 libras"

},
{

    titulo: "El Rey León",
    autor: "Walt Disney Company",
    genero: "Ficción",
    idioma: "Español",
    precio: 14.50,
    descuento:"20%",
    formato: "Tapa dura",
    isbn: "9788444142579",
    descripcion: "La historia de Simba, un joven león que lucha por reclamar su lugar como rey de la selva.",
    estado: "Nuevo",
    ubicacion: "Orlando, Estados Unidos",
    fecha_publicacion: "Junio 1994",
    editorial: "Editorial Planeta",
    paginas: 64,
    dimensiones: "9.2 x 0.5 x 9 pulgadas",
    peso: "1.2 libras"
},
{

    titulo: "Frozen: Una aventura de Olaf",
    autor: "Disney Book Group",
    genero: "Ficción",
    idioma: "Español",
    precio: 29.900,
    descuento:"20%",
    formato: "Tapa blanda",
    isbn: "9781368002509",
    descripcion: "La historia de Olaf, el simpático muñeco de nieve, en una aventura congelada.",
    estado: "Nuevo",
    ubicacion: "Arendelle, Reino de Hielo",
    fecha_publicacion: "Noviembre 2013",
    editorial: "Disney Press",
    paginas: 32,
    dimensiones: "8 x 0.2 x 8 pulgadas",
    peso: "4.8 libras"
},
{

    titulo: "La Bella y la Bestia",
    autor: "Gabrielle-Suzanne Barbot de Villeneuve",
    genero: "Ficción",
    idioma: "Español",
    precio: 12.99,
    descuento:"20%",
    formato: "Tapa dura",
    isbn: "9781484781001",
    descripcion: "La historia de Bella, una joven que se enamora de una bestia encantada.",
    estado: "Nuevo",
    ubicacion: "Paris, Francia",
    fecha_publicacion: "Octubre 1756",
    editorial: "Disney Press",
    paginas: 72,
    dimensiones: "8.5 x 0.5 x 11 pulgadas",
    peso: "1.1 libras"
    
},
 {

    titulo: "Blancanieves y los siete enanitos",
    autor: "Hermanos Grimm",
    genero: "Ficción",
    idioma: "Español",
    precio: 11.50,
    descuento:"20%",
    formato: "Tapa dura",
    isbn: "9781484781018",
    descripcion: "La clásica historia de Blancanieves y su encuentro con los siete enanitos.",
    estado: "Nuevo",
    ubicacion: "Berlín, Alemania",
    fecha_publicacion: "1812",
    editorial: "Disney Press",
    paginas: 64,
    dimensiones: "8.5 x 0.5 x 11 pulgadas",
    peso: "1.3 libras"
},
{

    titulo: "Mickey Mouse: En busca del tesoro perdido",
    autor: "Walt Disney Company",
    genero: "Aventura",
    idioma: "Español",
    precio: 8.99,
    descuento:"20%",
    formato: "Tapa blanda",
    isbn: "9788416387983",
    descripcion: "Mickey y sus amigos se embarcan en una emocionante búsqueda de un tesoro escondido.",
    estado: "Nuevo",
    ubicacion: "Los Angeles, Estados Unidos",
    fecha_publicacion: "Agosto 2009",
    editorial: "Editorial Planeta",
    paginas: 48,
    dimensiones: "8 x 0.2 x 8 pulgadas",
    peso: "4.8 onzas"
}, 
{

    titulo: "Toy Story: La aventura de Buzz Lightyear",
    autor: "Disney Book Group",
    genero: "Ficción",
    idioma: "Español",
    precio: 7.99,
    descuento:"20%",
    formato: "Tapa dura",
    isbn: "9788499518982",
    descripcion: "Buzz Lightyear se embarca en una misión para salvar a sus amigos y regresar a casa.",
    estado: "Nuevo",
    ubicacion: "Los Angeles, Estados Unidos",
    fecha_publicacion: "Junio 1995",
    editorial: "Disney Press",
    paginas: 32,
    dimensiones: "8.5 x 0.5 x 11 pulgadas",
    peso: "11.2 onzas"
},
{

    titulo: "La Cenicienta",
    autor: "Charles Perrault",
    genero: "Ficción",
    idioma: "Español",
    precio: 9.50,
    descuento:"20%",
    formato: "Tapa dura",
    isbn: "9788482983637",
    descripcion: "La historia de Cenicienta, una joven que encuentra su verdadero amor con la ayuda de un hada madrina.",
    estado: "Nuevo",
    ubicacion: "París, Francia",
    fecha_publicacion: "1697",
    editorial: "Disney Press",
    paginas: 64,
    dimensiones: "8.5 x 0.5 x 11 pulgadas",
    peso: "1.1 libras",
},
 {

    titulo: "Bambi",
    autor: "Felix Salten",
    genero: "Ficción",
    idioma: "Español",
    precio: 25.99,
    descuento:"20%",
    formato: "Tapa dura",
    isbn: "9781484721626",
    descripcion: "La historia de Bambi, un cervatillo que enfrenta los desafíos de la vida en el bosque.",
    estado: "Nuevo",
    ubicacion: "Viena, Austria",
    fecha_publicacion: "1923",
    editorial: "Disney Press",
    paginas: 72,
    dimensiones: "8.5 x 0.5 x 11 pulgadas",
    peso: "1.2 libras"
},
 {

    titulo: "Peter Pan",
    autor: "J.M. Barrie",
    genero: "Ficción",
    idioma: "Español",
    precio: 13.99,
    descuento:"20%",
    formato: "Tapa dura",
    isbn: "9788427920223",
    descripcion: "La historia de Peter Pan, el niño que nunca crece, y sus aventuras en el País de Nunca Jamás.",
    estado: "Nuevo",
    ubicacion: "Londres, Inglaterra",
    fecha_publicacion: "Octubre 1911",
    editorial: "Disney Press",
    paginas: 176,
    dimensiones: "8.5 x 0.8 x 11 pulgadas",
    peso: "1.8 libras"
    
},
{
    titulo: "Blanca Nieves y los Siete Enanitos",
    autor: "Hermanos Grimm",
    genero: "Ficción",
    idioma: "Español",
    precio: 11.50,
    descuento:"20%",
    formato: "Tapa dura",
    isbn: "9788498018244",
    descripcion: "La historia de Blanca Nieves, una joven princesa perseguida por su malvada madrastra.",
    estado: "Nuevo",
    ubicacion: "Berlín, Alemania",
    fecha_publicacion: "1812",
    editorial: "Disney Press",
    paginas: 64,
    dimensiones: "8.5 x 0.5 x 11 pulgadas",
    peso: "1.3 libras"
},
{
    titulo: "Toy Story",
    autor: "Walt Disney Company",
    genero: "Ficción",
    idioma: "Español",
    precio: 33.99,
    descuento:"20%",
    formato: "Tapa blanda",
    isbn: "9788499515151",
    descripcion: "La historia de los juguetes de Andy, que cobran vida cuando él no está mirando.",
    estado: "Nuevo",
    ubicacion: "Los Angeles, Estados Unidos",
    fecha_publicacion: "Noviembre 1995",
    editorial: "Editorial Planeta",
    paginas: 48,
    dimensiones: "8 x 0.3 x 8 pulgadas",
    peso: "8.8 onzas"
},
{
    titulo: "Aladdin",
    autor: "Walt Disney Company",
    genero: "Ficción",
    idioma: "Español",
    precio: 12.75,
    descuento:"20%",
    formato: "Tapa blanda",
    isbn: "9788427931069",
    descripcion: "La historia de Aladdín, un joven pobre que encuentra una lámpara mágica.",
    estado: "Nuevo",
    ubicacion: "Agrabah, Reino de Arabia",
    fecha_publicacion: "Noviembre 1992",
    editorial: "Editorial Molino",
    paginas: 48,
    dimensiones: "7.5 x 0.3 x 9 pulgadas",
    peso: "6.4 onzas"
},
{
    titulo: "La Cenicienta",
    autor: "Charles Perrault",
    genero: "Ficción",
    idioma: "Español",
    precio: 64.99,
    descuento:"20%",
    formato: "Tapa dura",
    isbn: "9780307591944",
    descripcion: "La historia de Cenicienta, una joven que es maltratada por su madrastra y hermanastras.",
    estado: "Nuevo",
    ubicacion: "París, Francia",
    fecha_publicacion: "1697",
    editorial: "Disney Press",
    paginas: 64,
    dimensiones: "9.5 x 0.5 x 12 pulgadas",
    peso: "1.2 libras"
},
{
    titulo: "Moana",
    autor: "Walt Disney Company",
    genero: "Ficción",
    idioma: "Español",
    precio: 55.99,
    descuento:"20%",
    formato: "Tapa dura",
    isbn: "9788416917232",
    descripcion: "La historia de Moana, una joven que emprende un viaje para salvar a su isla.",
    estado: "Nuevo",
    ubicacion: "Islas del Sur del Pacífico",
    fecha_publicacion: "Noviembre 2016",
    editorial: "Disney Press",
    paginas: 64,
    dimensiones: "9 x 0.5 x 12 pulgadas",
    peso: "1.4 libras"
},
{
    titulo: "Pinocho",
    autor: "Carlo Collodi",
    genero: "Ficción",
    idioma: "Español",
    precio: 10.50,
    descuento:"20%",
    formato: "Tapa blanda",
    isbn: "9788492691258",
    descripcion: "La historia de Pinocho, un muñeco de madera que desea convertirse en un niño real.",
    estado: "Nuevo",
    ubicacion: "Florencia, Italia",
    fecha_publicacion: "1883",
    editorial: "Disney Press",
    paginas: 48,
    dimensiones: "8.5 x 0.3 x 11 pulgadas",
    peso: "14.1 onzas"
},
{
    titulo: "Peter Pan",
    autor: "J.M. Barrie",
    genero: "Ficción",
    idioma: "Español",
    precio: 11.25,
    descuento:"20%",
    formato: "Tapa dura",
    isbn: "9788484608657",
    descripcion: "La historia de Peter Pan, un niño que nunca crece y su viaje a la Tierra de Nunca Jamás.",
    estado: "Nuevo",
    ubicacion: "Londres, Inglaterra",
    fecha_publicacion: "Octubre 1911",
    editorial: "Disney Press",
    paginas: 56,
    dimensiones: "9 x 0.5 x 11 pulgadas",
    peso: "1.3 libras"
},
{
    titulo: "Bambi",
    autor: "Felix Salten",
    genero: "Ficción",
    idioma: "Español",
    precio: 60.99,
    descuento:"20%",
    formato: "Tapa blanda",
    isbn: "9788499514284",
    descripcion: "La historia de Bambi, un joven ciervo que aprende sobre la vida en el bosque.",
    estado: "Nuevo",
    ubicacion: "Viena, Austria",
    fecha_publicacion: "1923",
    editorial: "Disney Press",
    paginas: 48,
    dimensiones: "8 x 0.3 x 8 pulgadas",
    peso: "8.8 onzas"
},
{
    titulo: "La Bella Durmiente",
    autor: "Charles Perrault",
    genero: "Ficción",
    idioma: "Español",
    precio: 12.75,
    descuento:"20%",
    formato: "Tapa dura",
    isbn: "9780307592064",
    descripcion: "La historia de la princesa Aurora, quien cae en un sueño profundo por una maldición.",
    estado: "Nuevo",
    ubicacion: "París, Francia",
    fecha_publicacion: "1697",
    editorial: "Disney Press",
    paginas: 64,
    dimensiones: "9.5 x 0.5 x 12 pulgadas",
    peso: "1.2 libras"
},
{
    titulo: "Hércules",
    autor: "Walt Disney Company",
    genero: "Ficción",
    idioma: "Español",
    precio: 40.99,
    descuento:"20%",
    formato: "Tapa blanda",
    isbn: "9788416917218",
    descripcion: "La historia de Hércules, un semidiós que lucha por demostrar su valentía y convertirse en un héroe.",
    estado: "Nuevo",
    ubicacion: "Grecia Antigua",
    fecha_publicacion: "Junio 1997",
    editorial: "Disney Press",
    paginas: 64,
    dimensiones: "8.5 x 0.3 x 11 pulgadas",
    peso: "1.1 libras"
},
]

const nuevoLibro ={
    titulo:"Frozen: Una Aventura Congelada",
    autor:"Walt Disney Company",
    genero: "Ficción",
    idioma: "Español",
    precio: 9.99,
    descuento:20,
    formato: "Tapa blanda",
    isbn: "9788499514034",
    descripcion: "La emocionante historia de Simba, un joven león que lucha por reclamar su lugar como el legítimo Rey León de la sabana africana.",
    estado: "Nuevo",
    ubicacion: "África",
    fecha_publicacion: "Abril 1994",
    editorial: "Libros Disney",
    paginas: 48,
    dimensiones: "8.3 x 0.2 x 11.6 pulgadas",
    peso: "0.8 libras",
}
// Ejemplo method .map
   const TITULO = libros.map((libro) => {
    return {
        titulo: libro.titulo,
        autor: libro.autor,
        precio: libro.precio,
    };
  });
//10 iteraciones
  const TITULO1 = libros.map((libro) => {
    return {
        titulo: libro.titulo,
        autor: libro.autor,
        precio: libro.precio,
    };
  });

  const TITULO2 = libros.map((libro) => {
    return {
        titulo: libro.titulo,
        genero: libro.genero,
        idioma: libro.idioma,
    };
  });

  const TITULO3 = libros.map((libro) => {
    return {
        titulo: libro.titulo,
        formato: libro.formato,
        isbn: libro.isbn,
    };
  });
  

  const TITULO4 = libros.map((libro) => {
    return {
        titulo: libro.titulo,
        descripcion: libro.descripcion,
        estado: libro.estado,
    };
  });

  const TITULO5 = libros.map((libro) => {
    return {
        titulo: libro.titulo,
        ubicacion: libro.ubicacion,
        fecha_publicacion: libro.fecha_publicacion,
    };
  });

  const TITULO6 = libros.map((libro) => {
    return {
        titulo: libro.titulo,
        editorial: libro.editorial,
        paginas: libro.paginas,
    };
  });

  const TITULO7 = libros.map((libro) => {
    return {
        titulo: libro.titulo,
        dimensiones: libro.dimensiones,
        peso: libro.peso,
    };
  });

  const TITULO8 = libros.map((libro) => {
    return {
        titulo: libro.titulo,
        genero: libro.genero,
        idioma: libro.idioma,
    };
  });

  const TITULO9 = libros.map((libro) => {
    return {
        titulo: libro.titulo,
        formato: libro.formato,
        precio: libro.precio,
    };
  });

  const TITULO10 = libros.map((libro) => {
    return {
        titulo: libro.titulo,
        editorial: libro.editorial,
        peso: libro.peso,
    };
  });

//libros descuentos

  const librosDescuentos = libros.map((libro) =>{
    return {
        ...libro,
        descuento: 20,
    };
  });

//Method fliter
//Resumenes
  const librosPrecioMayor = libros.filter((libro) => {
    return libro.precio > 50;
  });

  const librosPaginasGrandes = libros.filter((libro) => {
    return libro.paginas > 600;
  });

  const mostrarLibrosPaginasGrandes = libros.map ((libro) => {
    return {
        titulo: libro.titulo,
        autor: libro.autor,
        editorial: libro.editorial,
        paginas: libro.paginas,
    }
  });

  //method sort

  const  librosConMayorPaginas = libros.sort(
    (libroa, librob) => librob.paginas - libroa.paginas);

//Methods encadenados

const librosCarosTitulo = libros.filter((libro) => {
  return libro.precio > 11; 
})
  .map((titulo) => {
    return{
      titulo: titulo.titulo,
      autor: titulo.autor,
      precio: titulo.precio,
    }
  });
 
  const librosConMenosPaginas = libros.filter((libro) => {
    return libro.paginas < 100; 
  })
    .map((paginas) => {
      return{
        titulo: paginas.titulo,
        autor: paginas.autor,
        editorial: paginas.editorial,
        paginas: paginas.paginas,
      }
    });

   const librosCarosMayoresDeMayoAMenor = libros.filter((libro) => {
      return libro.precio > 20;
   })
    .map((titulo) => {
      return {
          titulo: titulo.titulo,
          autor: titulo.autor,
          precio: titulo.precio,
      }
    })
    .sort((a,b) => b.precio - a.precio);

    const librosPorNumeroMasAltoDePaginas = libros.filter((libro) => {
      return libro.paginas > 0;
    })
      .map((libro) => {
        return {
            titulo: libro.titulo,
            autor: libro.autor,
            editorial: libro.editorial,
            paginas: libro.paginas
        }
      })
      .sort((a,b) => b.paginas - a.paginas)

function mostrarMenu() {
    console.log("1. Mostrar la pila de libros");
    console.log("2. Añadir un libro a la pila de libros");
    console.log("3. Eliminar el último libro de la pila de libros");
    console.log("4. Mostrar la longitud de la pila de libros");
    console.log("5. Listar los libros");
    console.log("6. Listar libros con descuento");
    console.log("7. Mostrar Resumenes");
    console.log("8. Salir");
    };
  
    function mostrarLibros(libros) {
    console.table( libros);
    }
  
    function añadirLibro(libros, libro) {
    libros.push(libro);
    console.log(`Libro añadido: ${libro.titulo}`);
    }
  
    function quitarLibro(libros) {
    const libroQuitado = libros.pop();
    if (libroQuitado) {
      console.log(`Libro eliminado: ${libroQuitado.titulo}`);
    } else {
      console.log("No hay libros quer elimimnar");
    }
    }
  
    function mostrarLongitud(libros) {
    console.log(`Longitud del array: ${libros.length}`);
    }
  
    let continuar = "si";
    
    function mostrarIteraciones() {
      console.log(" Method .map y listar los libros por Titulo, Autor, Editorial y Precio")
      console.table(TITULO)
      console.log("10 iteraciones diferentes manteniendo el atributo Titulo")
      console.table(TITULO1)
      console.table(TITULO2)
      console.table(TITULO3)
      console.table(TITULO4)
      console.table(TITULO5)
      console.table(TITULO6)
      console.table(TITULO7)
      console.table(TITULO8)
      console.table(TITULO9)
      console.table(TITULO10)
      return
    }

    function mostrarLibroConDescuento() {
      console.table(librosDescuentos)
      return
    }

    function mostrarResumenes() {
      console.log("Methods Filter")
      console.log("Obtener un array con los libros que tengan un precio mayor a 50 dolares")
      console.table(librosPrecioMayor)
      console.log("resumen de libros por numero mas alto de paginas mostrando, titulo, autor, editorial, paginas")
      console.table(mostrarLibrosPaginasGrandes)
      console.log("Method Sort")
      console.log("Ordenar los libros por numero de paginas de mayor a menor")
      console.table(librosConMayorPaginas)
      console.log("Methods Encadenados")
      console.log("array de libros caros por titulo mayores de 11 dolares, resumirlos por titulo, autor, precio. ")
      console.table(librosCarosTitulo)
      console.log("resumen de libros que tengan menos de 100 paginas resumirlos por titulo, autor, editorial y paginas.")
      console.table(librosConMenosPaginas)
      console.log("resumen de libros caros mayores a 20 dolares de mayor a menor resumirlos por titulo, autor, precio.")
      console.table(librosCarosMayoresDeMayoAMenor)
      console.log("resumen de libros por numero mas alto de paginas resumirlos por titulo, autor, editorial, paginas ordenados de mayor a menor.")
      console.table(librosPorNumeroMasAltoDePaginas)
      return
    }

    

  do {
    mostrarMenu();
    let opcion = prompt("Seleccione una opción:");
    switch (opcion) {
      case '1':
        mostrarLibros(libros);
        break;
      case '2':
        añadirLibro(libros, nuevoLibro);
        break;
      case '3':
        quitarLibro(libros);
        break;
      case '4':
        mostrarLongitud(libros);
        break;
      case '5':
        mostrarIteraciones();
        break;
      case '6':
        mostrarLibroConDescuento();
        break;
      case '7':
        mostrarResumenes();
        break;
      case '8':
        continuar = "no";
        console.log("Saliendo del programa...");
        break;
      default:
        console.log("Opción no válida. Intente de nuevo.");
        break;
    }
    if (continuar !== "no") {
      continuar = prompt("Desea continuar o volver al menu (si/no)").toLowerCase();
    }
    }
    while (continuar === "si");











