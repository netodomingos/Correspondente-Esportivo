# Seja bem-vindo ao Correspondente Esportivo!

Este projeto utiliza Node.js e TypeScript para buscar informações de jogos de futebol em tempo real e apresentá-las de forma formatada e amigável ao usuário.

### Funcionalidades:

* Exibe os times que estão jogando;
* Mostra o placar da partida;
* Informa o campeonato em disputa.

### APIs utilizadas:

* **[RapidAPI:](https://rapidapi.com/)** Obter detalhes dos jogos;
* **[Geminiai:](https://geminiai.ai/)** Formatar o texto para o prompt.

### Pré-requisitos:

* Node.js instalado;
* Conta na RapidAPI;
* Conta na Geminiai;

### Instalação:

1. Clone o repositório:

```bash
git clone https://github.com/netodomingos/Correspondente-Esportivo
```

2. Acesse a pasta do projeto:

```bash
cd Correspondente-Esportivo
```

3. Instale as dependências:

```bash
npm install
```

**Configuração:**

1. Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:

```
API_GOOGLE_GENERATIVE_AI=
API_SPORTS_KEY=
API_SPORTS_URL=
API_SPORTS_HOST=
```

**Executando o projeto:**

1. Execute o seguinte comando:

```bash
node index.js
```

**Observações:**

* Para obter a chave da RapidAPI, cadastre-se em [https://rapidapi.com/](https://rapidapi.com/) e crie uma nova API para a fonte "Football Scores".
* A chave da Geminiai é opcional, mas permite formatar o texto de acordo com suas preferências. Para obtê-la, acesse [https://geminiai.ai/](https://geminiai.ai/).

**Contribuições:**

Sinta-se à vontade para contribuir com o projeto! Envie suas sugestões, correções de bugs ou novas funcionalidades através de pull requests.

**Agradecimentos:**

* RapidAPI por fornecer acesso a dados de jogos de futebol;
* Geminiai por disponibilizar ferramentas de formatação de texto.
