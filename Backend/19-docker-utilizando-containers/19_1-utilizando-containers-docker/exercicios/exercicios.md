# Exercícios - 19.1: Utilizando containers - Docker

<ol>
  <li>Baixar imagem Debian</li>
  
  ```bash
  docker pull debian:stable-slim
  ``` 
  <li>Executando o container</li>
  
  ```bash
  docker container run -ti debian:stable-slim
  ```
  <li>Visualizando distribuiçao</li>

  ```
  cat /etc/*-release
  ``` 
  <li>Visualizando último container</li>
  
  ```bash
    docker container ls -l
  ```

  <li>Retomando container</li>
  
  ``` bash
  docker container start <ID>
  docker container attach <ID>
  ```

  <li>Visualizando versão</li>
  
  ```bash 
  cat /etc/debina_version
  ```

  <li>Removendo container</li>
  
  ```bash 
  docker container rm <ID>
  ``` 

  <li>Rodando container no modo cleanup</li>

  ```bash
  docker run --rm andrius:ascii-patrol
  ```
</ol>