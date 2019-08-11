#### UseEffect
#### Primeiro parâmetro
é a função que queremos executar

#### Segundo parâmetro
é uma variável que será passada, que se essa variável
for alterada, a função é executada novamente, porém se passarmos
o array como vazio, essa função é executada somente uma vez

#### SocketIO
SocketIO client sempre gera um `id` quando acionado e podemos pegar esse
valor no servidor em `io.on('connection', socket => socket.id)`
