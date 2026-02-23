# INSTRUCCIONES GENERALES
1er paso - Crear una carpeta en el disco local C: (De preferencia llamarla OpinionesNET)
2do paso - Abrir la terminar y situarse dentro de la carpeta anteriormente creada
3er paso - Realizar git 
4to paso - Clonar el repositorio dentro de la carpeta ya antes mencionada por medio del siguiente comando: git clone https://github.com/aalvarez-2024004/GestorDeOpiniones.git

5to paso - Ingresar a la carpeta clonada por medio del siguiente comando: cd GestorDeOpiniones
6to paso - Realizar "code . " dentro de la terminar para abrir el proyecto en Visual Studio Code
7mo paso - Dentro e VS abrir 2 terminales distintas
	Terminal 1 - Para la autenticacion 
	Terminal 2 - Para probar el sistema gestor de opiniones

8vo paso - Para probar los endpoints se recomienda ir a PostMan e importar las peticiones por medio de import -- IMPORTAR EL ARCHIVO LLAMADO Gestor de opiniones.postman_collection ubicado en la carpeta ArchivoJSONpostMan

# INTRUCCIONES AUTENTICACION DE USUARIO
1er paso - Ubicarse dentro de la terminal 1 y situarse en la carpeta AuthGestOpi por medio del siguiente comando : cd AuthGestOpi
2do paso - Estando ahi, realizar el comando: pnpm install nodemon

ANTES DE CONTINUAR, IMPORTANTE: 
	ES IMPORTANTE QUE TENGA ABIERTO docker desktop y asi mismo, pgAdmin

3er paso - Ejecutar en la terminal 1 el siguiente comando : pnpm add -D cross-env
4to paso - Ejecutar en la terminal 1 el siguiente comando : docker compose up -d
5to paso - Verificar en docker-desktop que el contenedor se haya inicializado correctamente y este activo
6to paso - En pgAdmin, debe crear un servidor llamado GestOpiAuth, ahi mismo debe irse al apartado de Connection y colocar: 
6.1 Host name / address: localhost
6.2 Port / 5436
6.3 Username / root
6.4 Password / admin
6.5 Ingresar al servidor y activar la base de datos llamada GestOpiAuth (con owner root)

8vo paso - Realizar el siguiente comando para correr el programa: pnpm run dev

7mo paso - Probar las peticiones en PostMan del siguiente link: 
https://www.postman.com/aalvarez-2024004-2419738/workspace/gestoropiniones-2024004

O TAMBIEN: Puede abrir postman, e importar el archivo JSON donde se encuentran todos los endpoints, el archivo JSON lo puede encontrar en la ruta: 
C:GestorDeOpiniones-main\ArchivoJSONpostMan

Forma de probar las peticiones:
1. Probar la carpeta llamada Autenticación Cuentas
	1.1 Registrate (reemplaza el correo, nombre y contraseña por una original)
	1.2 En Verificar tu cuenta ingresa el token que se mando a tu correo únicamente lo que sigue luego del verify/ DENTRO DE LA URL
	1.3 Inicia sesión y copia tu token
	1.4 Si deseas cambiar tu contraseña, PARA PROBAR LA PETICION, ve a Authorization, elige la opción de BEARER TOKEN e  ingresa el token que se te dio al iniciar sesión e ingresa tu contraseña actual y contraseña nueva

# INTRUCCIONES GESTOR DE OPINIONES
1er paso - Ubicarse dentro de la terminal 2 y situarse en la carpeta GestorOpinionesAPI por medio del siguiente comando : cd GestorOpinionesAPI
2do paso - Estando ahi, realizar el comando: pnpm install nodemon
3er paso - Luego de ello realizar: pnpm run dev

ANTES DE CONTINUAR, IMPORTANTE: 
	ES IMPORTANTE QUE TENGA ABIERTO mongoDB para verificar que la conexion fue exitosa y verificar la agregacion de publicaciones

4to paso - En mongoDB dar click en CONNECT y verificar que haya una base de datos llamada "gestopiniones"
5to paso - Probar las peticiones en PostMan del siguiente link: 
https://www.postman.com/aalvarez-2024004-2419738/workspace/gestoropiniones-2024004

Forma de probar las peticiones:
1. Probar la carpeta llamada Publicaciones
	1.1 Crear publicación, para realizar una publicación es necesario que vayas a Authorization, elige la opción de BEARER TOKEN e  ingreses el token que se te dio al iniciar sesión
	1.2 Editar publicación, para editar una publicación es necesario que en la URL de la petición cambies el id que esta luego de /posts/ e ingreses el id de tu publicación. Para editar la publicación es necesario que vayas a Authorization, elige la opción de BEARER TOKEN e  ingreses el token que se te dio al iniciar sesión
	1.3 Eliminar publicación, para eliminar una publicación  es necesario que en la URL de la petición cambies el id que esta luego de /posts/ e ingreses el id de tu publicación. Para eliminar la publicación es necesario que vayas a Authorization, elige la opción de BEARER TOKEN e  ingreses el token que se te dio al iniciar sesión o tu token de ADMIN

2. Probar la carpeta llamada Comentarios 
	1.1 Agregar comentario, para agregar un comentario es necesario que ingreses en la URL el id de la publicación que comentaras y ingreses un contenido. Para agregar tu comentario es necesario que vayas a Authorization, elige la opción de BEARER TOKEN e  ingreses el token que se te dio al iniciar sesión
	1.2 Editar comentario, para editar un comentario es necesario que ingreses en la URL el id de tu comentario y modifiques su contenido. Para editar tu comentario es necesario que vayas a Authorization, elige la opción de BEARER TOKEN e  ingreses el token que se te dio al iniciar sesión
	1.3 Eliminar comentario, para eliminar un comentario es necesario que ingreses en la URL de la petición el id de tu comentario. Para eliminar tu comentario es necesario que vayas a Authorization, elige la opción de BEARER TOKEN e  ingreses el token que se te dio al iniciar sesión.

Puedes verificar si todo funciono correctamente yendo a mongoDB y verificar que todo este correcto :D
