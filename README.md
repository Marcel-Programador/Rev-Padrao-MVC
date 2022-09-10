# Rev-Padrao-MVC

# Fluxo da estrutura de pastas
*View Requisita ou Envia algo.
*app.js verifica se nele existe alguma rota para aquela solicitação.
Existindo ele entra na rota.
*Entra na pasta "routes" e acessa a rota.
Verifica se aquela rota esta configuradan econtra o caminho configurado no Controller.
*O Controller identifica a solicitação e responde para a View finalizando o fluxo.

# Responsabilidade de cada pasta dentro do MVC
Views:
Area de interação com usuario final(Navegador)

Controllers:
Recebe as requisições da View interpreta e envia para Route que envia a solicitação para model.

Routers:
Rotas caminho para encontrar a informação requisitada pela View

Models
Devolve ao Controller a resposta solicitada