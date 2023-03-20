Esta aplicación maneja ciertos estandares de versionamiento

para realizar cambios es necesario usar git flow, en donde la **rama principal** va integrando los **PRs** de las otras ramas features

![](https://leanstack.files.wordpress.com/2018/04/d625b-gitflow.jpg?w=600)

En necesario crear un archivo .env con siguiente contenido

    MONGODB_CN=mongodb.example
    SECRETORPRIVATEKEY=keyscrets

Manejor de los **commits**

    git add .
    git commit -m "feat: test" (feat) -> es un versionamiento menor -> 0.0.1
    git commit -m "major: test" (feat) -> es un versionamiento mayor-> 1.0.1
Queda la responsabilidad al desarrollador pero debemos respetar este versionamiento para un manejor correcto de las versiones de la api

Documentación de APIs
En esta pagina vas a encontras la el uso correcto de los **endpoint** generados
https://documenter.getpostman.com/view/6961296/2s93JzKKvo