# Missão Prática | Nível 4 | Mundo 1

## RPG0023  - Vamos criar um App!

### Objetivos da prática

* Configurar o ambiente de desenvolvimento React Native;
* Implementar a funcionalidade de entrada de texto em um componente React
  Native;I
* Implementar um Componente de Lista Dinâmica (ScrollView);
* Implementar componentes React Native para exibir informações de forma dinâmica
  em listas;
* Empregar elementos visuais em um aplicativo React Native.


# 👉 Atividades práticas

# Vamos criar um App!

# Microatividade 1: Configurar o ambiente de desenvolvimento React Native

### Procedimentos

Esta atividade tem como objetivo guiar os passos para a configuração do ambiente de
desenvolvimento React Native para a plataforma Windows, MacOS e Linux,
fornecendo-lhes as ferramentas essenciais e orientações para começar a criar
aplicativos móveis com esta tecnologia. A seguir, você terá os passos necessários
para a instalação do Node.JS e do framework React para os três ambientes.

### Instalando o React Native no Windows

Para instalar o React no Windows, você precisa ter o Node.js e o npm (Node
Package Manager) instalados em seu sistema. Se você ainda não os instalou, siga
estas etapas:
Visite a página de download do Node.js em: https://nodejs.org/en/download/
Faça o download do instalador para o seu sistema Windows utilizando a versão.
Para instalar o Node.js e o npm, execute o instalador e siga cuidadosamente as
instruções fornecidas.

![00013323](https://github.com/user-attachments/assets/e610692b-9494-4910-85bb-43c7e65cf44c)

Após a conclusão da instalação, você pode verificar se o Node.js e o npm estão
instalados abrindo um prompt de comando e executando os seguintes comandos:

 

* node -v npm -v

 

Esses comandos devem exibir os números de versão do Node.js e do npm,
respectivamente.

![primeiraatividade](https://github.com/user-attachments/assets/b2e600d3-befa-416e-9037-a1c646b89696)

Agora, para instalar o Create React App globalmente, abra um prompt de comando
e execute o seguinte comando:

 

* npm install -g create-react-app

 

Esse comando instala o Create React App em seu sistema, tornando disponível para
uso em qualquer diretório.

![primeiraatividade0092](https://github.com/user-attachments/assets/d2472c9d-efba-4486-9c65-58c57ae05948)

Agora que você tem o Create React App instalado, pode usá-lo para criar um novo
projeto React. Para fazer isso, abra um prompt de comando, vá para o diretório onde
você deseja que o projeto fique e execute o seguinte comando:

 

* create-react-app my-app

![primeiroapp01](https://github.com/user-attachments/assets/534b56ca-f66e-466e-b3aa-e4c799a84c11)


# Microatividade 2: Implementar a funcionalidade de entrada de texto em um componente React Native

Nesta atividade, você irá aprender a implementar a funcionalidade de entrada de texto
em um componente React Native. Você criará um componente que permite aos
usuários inserirem textos e ver a tradução desse texto em forma de emojis de pizza.
Isso envolve o uso do componente TextInput, a manipulação de eventos de alteração
de texto (onChangeText), e a exibição do resultado traduzido em tempo real. Ao final
desta atividade, você terá um componente React Native funcional que demonstra uma
interação de entrada de texto.

Segue abaixo o Resultado:

![IMG-20241201-WA0041](https://github.com/user-attachments/assets/9b273598-75b6-4970-b67c-2199f49ad537)


# Microatividade 3: Implementar um Componente de Lista Dinâmica (ScrollView)

## Descrição

Nesta atividade, você aprenderá a criar um componente de lista que permitirá exibir
informações de forma dinâmica em um aplicativo React Native. Isso é útil quando
você deseja criar uma lista que pode conter vários tipos de elementos, como texto e
imagens, e que pode ser rolada verticalmente.

### Segue Abaixo o Resultado :

![543543](https://github.com/user-attachments/assets/6c1ea1cc-ae84-467a-8456-419d14642ead)



# Microatividade 4: Criando o visualizador de listas

## Descrição

Como parte desta atividade, vamos criar um componente React Native que permitirá
exibir informações de forma dinâmica em uma lista. Isso é útil quando você tem um
grande conjunto de dados e deseja que apenas os itens visíveis sejam renderizados
para economizar recursos.

### Segue Abaixo o Resultado :

![0000011111](https://github.com/user-attachments/assets/d0ca3f51-666d-4f87-bcdc-a2fc595b5c1a)


# Microatividade 5: Empregar imagens, seja para exibir gráficos, ícones, fotos ou outros elementos visuais em um aplicativo React Native

Nesta atividade, você aprenderá a incorporar imagens em um aplicativo React Native.
Imagens são usadas para exibir gráficos, ícones, fotos e outros elementos visuais em
um aplicativo. Vamos seguir alguns passos simples para realizar esta tarefa.

### Segue Abaixo o Resultado :

![IMG-20241201-WA0049](https://github.com/user-attachments/assets/680fce43-bf49-4ef7-bdb2-7ff5a8c74207)


# Microatividade 6: AppCat !

Nessa atividade revisaremos tudo o que utilizamos nas micro atividades anteriores.
Além disso, veremos também como o React Native responde a eventos e qual lógica
de manipulação será utilizada neste exercício.

### Segue Abaixo o Resultado :

![IMG-20241201-WA0044](https://github.com/user-attachments/assets/de971028-b6ec-4c24-8105-addea07624ae)


# Missão Prática | Vamos criar um App! 💻

## Contextualização

A empresa "Meeting" busca criar um aplicativo móvel eficaz para o cadastro de
fornecedores, com listas e imagens de alta qualidade, economizando recursos e
proporcionando uma excelente experiência ao usuário. A escolha da tecnologia React
Native é crucial para estabelecer uma presença sólida no mercado móvel. Nesta
atividade, você aprenderá os princípios básicos do React Native.

## Requisitos Funcionais:

* Cadastro de Fornecedores: O aplicativo deve permitir o cadastro de fornecedores,
incluindo informações detalhadas, como nome, endereço, contato e categorias de
produtos fornecidos. Essas informações serão exibidas utilizando componentes
como "Text"  "TextInput" e "Image".

* Listagem de Fornecedores: Deve ser possível visualizar uma lista de
fornecedores cadastrados, com opções de pesquisa e filtragem com base em
critérios como categoria ou localização. A lista de fornecedores será exibida
utilizando componentes como "Text" e "Image".

* Associação de Imagens: O aplicativo deve permitir a associação de imagens aos
perfis dos fornecedores. Os usuários devem poder fazer o upload de logotipos ou
fotos relacionadas ao fornecedor, utilizando o componente "Image".

* Experiência de Usuário Intuitiva: A interface do aplicativo deve ser intuitiva e
fácil de usar, garantindo que os usuários possam navegar, adicionar e editar
informações de forma eficiente. Isso será alcançado usando componentes como
"Text"  "TextInput"  e "Image".


### Segue Abaixo o Resultado :

### Página inicial de Cadastro de Fornecedores

![IMG-20241123-WA0013](https://github.com/user-attachments/assets/d46021b5-74e0-4f37-be34-2600c9316cf2)

![IMG-20241123-WA0012](https://github.com/user-attachments/assets/af1630ef-bcc3-4800-b9b1-cdf2b3650e29)

![IMG-20241123-WA0007](https://github.com/user-attachments/assets/e7ba7ff1-27e9-4766-88ea-0ff9f3ab221e)

### Página de Fornecedores com o fornecedor Adicionado

![IMG-20241123-WA0009](https://github.com/user-attachments/assets/1b038e60-370a-4807-b461-ef1ae5f1b3d5)

![IMG-20241123-WA0010](https://github.com/user-attachments/assets/41abb305-2177-4711-9a59-cb5c63c73cf5)

![43534534](https://github.com/user-attachments/assets/cab4749d-8f2c-42c7-843e-e26ade4e3a82)




