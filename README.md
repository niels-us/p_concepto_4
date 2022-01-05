# Iniciar Prueba Concepto 3
## 1 docker-compose build
## 2 docker-compose up -d
## 3 curl procesos.localhost
## 4 curl formatos.localhost
## 5 docker logs --follow idContainer
## 6 docker logs --follow nameContainer

## docker-compose up -d --force-recreate --renew-anon-volumes --remove-orphans

# Publicar Imagen en Docker Hub
## docker login -u nielsus
## docker images
## docker tag NOMBRE_IMAGEN NOMBRE_REPOSITORIO_DOCKER_HUB/NUEVO_IMAGEN_NOMBRE:v1
## (Ejemplo: docker tag testconcepto31_formatos nielsus/formato:v1)
## docker push NOMBRE_REPOSITORIO/NUEVO_IMAGEN_NOMBRE:v1
## (Ejemplo: docker push nielsus/formato:v1)

# Eliminar las imágenes, los contenedores, los volúmenes y las redes sin utilizar o pendientes
## docker system prune -a
## docker rmi Image Image

# Agregar Ruta
## Ir a: C:\Windows\System32\drivers\etc
## 127.0.0.1 procesos.localhost
## 127.0.0.1 formatos.localhost

## docker exec -it ebf70c4225c0 sh

