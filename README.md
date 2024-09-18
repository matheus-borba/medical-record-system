```markdown
# Medical Record System

## Descrição

O **Medical Record System** é um projeto desenvolvido para gerenciar registros médicos de forma eficiente e segura. O sistema permite a entrada, atualização e visualização de dados médicos, utilizando as tecnologias mais recentes para garantir uma experiência de usuário otimizada e confiável.

## Requisitos

- **Node.js**: v20.17.0
- **npm**: v10.8.3

## Instalação

1. Clone o repositório para o seu ambiente local:

   ```bash
   git clone https://github.com/matheus-borba/medical-record-system.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd medical-record-system
   ```

3. Instale as dependências do projeto:

   ```bash
   npm install
   ```

## Inicialização

Para iniciar o servidor de desenvolvimento e visualizar o aplicativo, use o comando:

```bash
ionic serve
```

Isso iniciará o servidor local e abrirá o aplicativo em seu navegador padrão. O servidor de desenvolvimento irá monitorar alterações no código e recarregar a página automaticamente.

# Configurando uma Chave SSH para Conexão Segura com o GitHub

Siga os passos abaixo para configurar uma chave SSH no seu computador, permitindo que ele se conecte com segurança ao GitHub via SSH.

## 1. Verificar se já existe uma chave SSH

   Abra o **Prompt de Comando** ou **PowerShell** e execute o seguinte comando:

   ```bash
   ls ~/.ssh
   ```
   Se houver arquivos como id_rsa e id_rsa.pub, você já tem uma chave SSH. Se não, prossiga para o próximo passo.

## 2. Gerar uma nova chave SSH
   Para gerar uma nova chave SSH, execute o seguinte comando, substituindo "seu-email@example.com" pelo seu e-mail:

   ```bash
   ssh-keygen -t rsa -b 4096 -C "seu-email@example.com"
   ```
   Durante o processo:
      Pressione Enter para aceitar o local padrão de armazenamento do arquivo.
      Você pode definir uma frase secreta para maior segurança ou deixar em branco para não usar frase secreta.

## 3. Adicionar a chave SSH ao agente SSH

   Inicie o agente SSH:
   ```bash
   eval $(ssh-agent -s)
   ```
   Adicione sua chave SSH ao agente:
   ```bash
   ssh-add ~/.ssh/id_rsa
   ```
## 4. Adicionar a chave SSH ao GitHub

   Copie a chave pública gerada para o clipboard:
   ```bash
   clip < ~/.ssh/id_rsa.pub
   ```
   Vá para o GitHub e siga estas etapas:
      Acesse Settings (Configurações).
      Vá para SSH and GPG keys.
      Clique em New SSH key.
      Cole a chave pública no campo e clique em Add SSH key.

## 5. Testar a conexão SSH
   Execute o comando abaixo para testar a conexão com o GitHub:

   ```bash
   ssh -T git@github.com
   ```
   Se a configuração estiver correta, você verá uma mensagem de sucesso confirmando a conexão SSH segura com o GitHub.

## Contribuição

Contribuições são bem-vindas! Se você deseja contribuir para este projeto, por favor, siga as diretrizes de contribuição e faça um pull request com suas alterações.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

## Contato

Se você tiver dúvidas ou precisar de mais informações, entre em contato pelo e-mail: matheus-depaula@hotmail.com
```
