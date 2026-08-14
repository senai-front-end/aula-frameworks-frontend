# Resumo — Versionamento e Deploy

## Versionamento

O **versionamento** é o processo de atribuir um identificador único a cada versão de um documento ou software. Ele registra **o que foi alterado, quem realizou a alteração e quando**, permitindo também resgatar versões anteriores. Dessa forma, garante **organização, rastreabilidade e segurança** durante a produção do projeto.

## Versionamento x Backup

O **versionamento** é mais eficiente que o backup para o desenvolvimento de projetos, pois permite **rastrear alterações e recuperar versões específicas**.

* **Versionamento:** mantém o histórico das alterações e permite retornar a versões anteriores.
* **Backup:** geralmente consiste em uma cópia do arquivo ou sistema, cuja restauração tende a ser feita de forma completa.

## Versionamento Semântico — Semantic Versioning (SemVer)

O **Versionamento Semântico (SemVer)** utiliza o padrão:

```text
MAJOR.MINOR.PATCH
```

* **PATCH — 1.0.1:** correção de bugs sem alterar a compatibilidade.
* **MINOR — 1.1.0:** adição de novas funcionalidades compatíveis com versões anteriores.
* **MAJOR — 2.0.0:** alteração que pode quebrar a compatibilidade com versões anteriores.

## Deploy e Branch

**Deploy** é o processo de colocar um código ou aplicação em um ambiente de produção, tornando-o disponível para os usuários.

As **branches** são ramificações do código que permitem desenvolver e testar diferentes funcionalidades de forma independente, sem interferir diretamente na versão principal.

O **merge** é o processo de combinar uma branch com outra, integrando as alterações para formar uma versão que poderá ser testada e posteriormente realizar o **deploy**.

## Vercel para Deploy e Hospedagem

A **Vercel** é uma plataforma utilizada para **hospedagem e deploy de aplicações web**. Ela pode ser integrada a ferramentas de versionamento como **GitHub, GitLab e Bitbucket**, automatizando o processo de publicação das aplicações.

#### Git - O **Git** é um sistema de controle de versão que registra as alterações realizadas no projeto. Cada alteração pode ser armazenada em um **commit**, permitindo acompanhar o histórico e retornar para versões anteriores.

#### GitHub, GitLab e Bitbucket - São plataformas que armazenam **repositórios Git remotamente**. Elas permitem compartilhar código, trabalhar em equipe, criar **branches** e realizar **pull requests** para revisar e integrar alterações.

#### Deploy Automático - A Vercel pode ser conectada a um repositório Git. Quando uma nova alteração é enviada (*push*), a Vercel identifica a nova versão e realiza automaticamente o **deploy**, disponibilizando a atualização da aplicação.

#### Rollback - O **rollback** permite retornar rapidamente para uma versão anterior caso a versão atual apresente erros ou problemas. Esse recurso aumenta a **segurança e confiabilidade** do processo de deploy.
