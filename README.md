# Descripcion
Panel de control orientado a Internet de las Cosas (IoT) para gestionar usuarios, dispositivos, graficos, etc.
Desarrollado con Angular y una REST API con Golang, implementando seguridad con JWT y persmisos, MySQL como base de datos, almacenamiento de objetos (imagenes, pdf, u otros archivos) en AWS-S3.

Esta aplicacion cliente se complementa y consume una API Rest. El codigo fuente se muestra a continuacion:

[Repositorio de API REST con Golang](https://github.com/edwinndev/iotapi-mmj).

---


### Tecnologias empleadas
* Backend : Golang (Gorm, Mux), MySQL
* Frontend : Angular
* Seguridad : JWT(Go), Proteccion de rutas con guards (Angular)
* Cliente REST : Postman
* IDE's : VS Code, Goland (Jetbrains)
* Despligue y control de versiones : Git y GitHub
* Produccion: AWS, Heroku, Netlify
