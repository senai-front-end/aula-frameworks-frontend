# Gestão do Projeto Integrador Interdisciplinar

## 1. Identificação

- **Projeto:** Gestão de Consultas
- **Grupo:** Monkey's Coders
- **Organização:** [clinica-consulta](https://github.com/orgs/clinica-consulta)
- **Repositórios:** [Repositórios do projeto](https://github.com/orgs/clinica-consulta/repositories)
- **Board Kanban:** [GitHub Projects — Gestão de Consultas](https://github.com/orgs/clinica-consulta/projects/3/views/1)

## 2. Visão geral

O projeto consiste no desenvolvimento de um sistema web para gerenciamento de consultas médicas. O objetivo é tornar o processo de agendamento e acompanhamento de consultas mais organizado, acessível e eficiente.

O sistema contará com diferentes níveis de acesso, de acordo com a função de cada usuário:

- **Administrador:** gerencia a plataforma, cadastra usuários, define permissões e acompanha relatórios.
- **Médico:** gerencia sua agenda, consulta os pacientes agendados e registra a conclusão dos atendimentos.
- **Recepção:** cadastra pacientes, agenda, remarca e cancela consultas e confirma a presença dos pacientes.
- **Paciente:** agenda consultas e consulta informações sobre seus atendimentos, como médico, data, horário, local e histórico.

Para organizar o desenvolvimento, o grupo utilizará conceitos de metodologias ágeis, incluindo backlog, priorização de tarefas, estimativas, Sprints, Kanban, branches e critérios de conclusão. O GitHub Projects será utilizado para acompanhar o andamento das atividades.

## 3. Backlog do projeto

O backlog reúne as funcionalidades e atividades necessárias para o desenvolvimento do sistema. As tarefas serão organizadas por prioridade, estimativa de esforço e Sprint planejada.

| ID sugerido | Tarefa | Prioridade | Estimativa | Sprint sugerida |
|---|---|---|---|---|
| #1 | Levantar e documentar os requisitos do sistema | Alta | 3 pontos | 1 |
| #2 | Definir a estrutura do projeto e organizar o repositório | Alta | 2 pontos | 1 |
| #3 | Planejar as telas e a navegação do sistema | Alta | 5 pontos | 1 |
| #4 | Desenvolver o cadastro e o login de usuários | Alta | 5 pontos | 2 |
| #5 | Implementar os perfis de acesso e suas permissões | Alta | 5 pontos | 2 |
| #6 | Desenvolver o cadastro e a consulta de pacientes | Alta | 5 pontos | 2 |
| #7 | Desenvolver o cadastro de médicos e seus horários | Alta | 5 pontos | 2 |
| #8 | Implementar o agendamento de consultas | Alta | 8 pontos | 3 |
| #9 | Implementar a visualização e o acompanhamento das consultas | Alta | 5 pontos | 3 |
| #10 | Implementar o cancelamento e a remarcação de consultas | Média | 5 pontos | 3 |
| #11 | Implementar a confirmação de presença e a conclusão do atendimento | Média | 3 pontos | 4 |
| #12 | Realizar testes, corrigir erros e verificar a responsividade | Alta | 5 pontos | 4 |
| #13 | Atualizar a documentação e preparar a apresentação final | Média | 3 pontos | 4 |

**Observação:** as tarefas e estimativas são uma proposta inicial. O grupo deverá ajustá-las de acordo com os requisitos reais, a divisão de responsabilidades e o andamento do projeto. Os IDs devem ser substituídos pelos números das Issues reais, caso já existam.

### 3.1. Critérios de priorização

A prioridade será definida considerando:

- **Alta:** funcionalidades essenciais para o funcionamento do sistema ou que sejam dependências de outras tarefas.
- **Média:** funcionalidades importantes, mas que podem ser desenvolvidas após as funcionalidades essenciais.
- **Baixa:** melhorias complementares que não impedem a utilização das principais funcionalidades.

A priorização será revisada sempre que surgirem novas necessidades ou alterações nos requisitos.

### 3.2. Escala de estimativa

O grupo utilizará pontos de história para estimar o esforço relativo de cada tarefa, considerando sua complexidade, o tempo necessário, as dependências e os possíveis desafios técnicos.

| Pontos | Complexidade | Exemplo |
|---|---|---|
| 1 | Muito baixa | Ajuste simples de texto ou estilo |
| 2 | Baixa | Pequena alteração em uma tela |
| 3 | Média | Criação de uma página simples |
| 5 | Alta | Cadastro com validações |
| 8 | Muito alta | Agendamento com regras de negócio e validação de horários |

Os pontos representam esforço relativo, e não uma quantidade fixa de horas.

## 4. Planejamento das Sprints

O desenvolvimento será dividido em Sprints, cada uma com uma meta específica. A duração sugerida é de duas semanas, podendo ser adaptada ao calendário acadêmico e à disponibilidade dos integrantes.

| Sprint | Meta | Principais atividades |
|---|---|---|
| Sprint 1 | Planejamento e estrutura inicial | Requisitos, organização do repositório e planejamento das telas |
| Sprint 2 | Estrutura de usuários | Cadastro, login, permissões e cadastros de pacientes e médicos |
| Sprint 3 | Gerenciamento de consultas | Agendamento, visualização, cancelamento e remarcação |
| Sprint 4 | Finalização e validação | Confirmação de presença, conclusão dos atendimentos, testes e documentação |

As datas de início e término serão registradas no GitHub Projects conforme o cronograma definido pelo grupo.

No início de cada Sprint, os integrantes selecionarão as tarefas prioritárias que poderão ser realizadas durante o período. Ao final, será feita uma revisão do que foi concluído, do que permaneceu pendente e dos ajustes necessários para a próxima Sprint.

## 5. Organização do Kanban

O GitHub Projects será utilizado como quadro Kanban para visualizar o fluxo de trabalho, distribuir responsabilidades e acompanhar as tarefas.

O fluxo de trabalho será organizado nas seguintes colunas:

**Backlog → To Do → In Progress → Review → Done**

| Coluna | Regra de entrada |
|---|---|
| Backlog | Tarefas identificadas que ainda não foram selecionadas para execução |
| To Do | Tarefas priorizadas e selecionadas para a Sprint atual |
| In Progress | Tarefas que já possuem um responsável e estão em desenvolvimento |
| Review | Tarefas concluídas pelo responsável e aguardando revisão ou testes |
| Done | Tarefas que atendem aos critérios de conclusão definidos pelo grupo |

### 5.1. Regras de utilização

- Toda tarefa deverá estar registrada em uma Issue ou item correspondente no board.
- Cada tarefa em andamento deverá possuir um responsável.
- As prioridades e estimativas deverão ser preenchidas quando aplicáveis.
- Os cards deverão ser movidos conforme o progresso real do trabalho.
- Antes de ser marcada como concluída, a tarefa deverá passar por revisão e atender à Definição de Pronto.
- Tarefas bloqueadas deverão ter o impedimento registrado para que o grupo possa resolvê-lo.
- O grupo deverá atualizar o board durante a execução e revisar as pendências ao final de cada Sprint.

O quadro oficial para acompanhar o projeto é o [GitHub Projects — Gestão de Consultas](https://github.com/orgs/clinica-consulta/projects/3/views/1).

### 5.2. Evidências do Kanban

Após realizar a gestão das tarefas no board, serão adicionadas capturas de tela para demonstrar o andamento do projeto.

- **Início da Sprint:** `docs/img/board-inicio.png`
- **Fim da Sprint:** `docs/img/board-fim.png`

As imagens deverão ser capturadas do board real. Caso as capturas ainda não tenham sido realizadas, os arquivos serão adicionados posteriormente.

## 6. Estratégia de branches

Para organizar o desenvolvimento e evitar alterações diretas na versão estável, será utilizada uma estratégia de branches baseada em funcionalidades e correções.

| Branch | Finalidade |
|---|---|
| `main` | Armazena a versão estável do projeto |
| `feature/<numero>-<nome>` | Desenvolvimento de novas funcionalidades |
| `fix/<numero>-<nome>` | Correção de erros |
| `docs/<numero>-<nome>` | Alterações na documentação |

Exemplos de nomes:

- `feature/4-login-usuarios`
- `feature/8-agendamento-consultas`
- `fix/12-validacao-horarios`
- `docs/13-documentacao-projeto`

Os números dos exemplos deverão corresponder às Issues reais do GitHub.

### 6.1. Fluxo de desenvolvimento

1. Criar ou selecionar uma Issue no GitHub.
2. Criar uma branch a partir da `main` atualizada.
3. Desenvolver a tarefa e registrar as alterações em commits objetivos.
4. Enviar a branch para o repositório remoto.
5. Abrir um Pull Request para a `main`, relacionando a Issue correspondente.
6. Solicitar revisão de outro integrante e corrigir eventuais problemas identificados.
7. Realizar o merge após a aprovação e as verificações necessárias.
8. Atualizar a Issue e mover o card para `Done` quando todos os critérios de conclusão forem atendidos.

Quando apropriado, o Pull Request utilizará palavras-chave como `Closes #4` para relacionar e fechar automaticamente a Issue após o merge na branch padrão.

## 7. Critérios de conclusão — Definition of Done

Uma tarefa somente será considerada concluída quando atender aos critérios aplicáveis à sua natureza.

- [ ] O objetivo da tarefa foi implementado de acordo com os requisitos definidos.
- [ ] O código ou documento foi revisado por outro integrante, quando aplicável.
- [ ] A funcionalidade foi testada e apresenta o comportamento esperado.
- [ ] Não existem erros conhecidos que impeçam o funcionamento da tarefa.
- [ ] A interface está adequada a dispositivos móveis e desktops, quando aplicável.
- [ ] A documentação foi atualizada, quando necessário.
- [ ] As alterações foram integradas à `main` por meio de Pull Request aprovado, quando envolverem código.
- [ ] A Issue ou o item correspondente foi atualizado e o card foi movido para `Done`.

Tarefas exclusivamente documentais ou de planejamento deverão atender aos critérios pertinentes, sem a exigência de testes de navegador quando eles não forem aplicáveis.

## 8. Registro de execução das Sprints

Esta seção será preenchida durante o desenvolvimento para registrar o que realmente aconteceu em cada Sprint.

### Sprint 1 — Planejamento e estrutura inicial

- **Concluído:** preencher com as tarefas efetivamente finalizadas.
- **Não concluído:** registrar as tarefas pendentes e os motivos.
- **Dificuldades encontradas:** registrar os principais impedimentos.
- **Aprendizados:** descrever o que poderá ser melhorado na próxima Sprint.

### Sprint 2 — Estrutura de usuários

- **Concluído:** preencher com as tarefas efetivamente finalizadas.
- **Não concluído:** registrar as tarefas pendentes e os motivos.
- **Dificuldades encontradas:** registrar os principais impedimentos.
- **Aprendizados:** descrever os ajustes necessários.

### Sprint 3 — Gerenciamento de consultas

- **Concluído:** preencher com as tarefas efetivamente finalizadas.
- **Não concluído:** registrar as tarefas pendentes e os motivos.
- **Dificuldades encontradas:** registrar os principais impedimentos.
- **Aprendizados:** descrever os ajustes necessários.

### Sprint 4 — Finalização e validação

- **Concluído:** preencher com as tarefas efetivamente finalizadas.
- **Não concluído:** registrar as tarefas pendentes e os motivos.
- **Dificuldades encontradas:** registrar os principais impedimentos.
- **Aprendizados:** registrar os resultados e as melhorias identificadas.

**Importante:** não marcar atividades como concluídas sem que tenham sido realmente executadas.

## 9. Evidências do processo

As evidências serão utilizadas para demonstrar que as práticas descritas neste documento foram aplicadas durante o projeto.

| Evidência | Arquivo sugerido | Objetivo |
|---|---|---|
| Board no início de uma Sprint | `docs/img/board-inicio.png` | Demonstrar a organização inicial das tarefas |
| Board ao final de uma Sprint | `docs/img/board-fim.png` | Demonstrar a evolução das tarefas |
| Pull Request | `docs/img/pr.png` | Demonstrar o fluxo de revisão e integração |
| Histórico de branches | `docs/img/branches.png` | Demonstrar a organização do desenvolvimento |

As imagens deverão ser adicionadas ao repositório e os caminhos deverão corresponder aos nomes reais dos arquivos.

## 10. Considerações finais

A utilização de backlog, prioridades, estimativas, Sprints, Kanban, branches e critérios de conclusão permite que o grupo organize o desenvolvimento de forma colaborativa e acompanhe a evolução do sistema.

O GitHub Projects será a ferramenta central de gestão das tarefas, enquanto as Issues, branches e Pull Requests auxiliarão na organização, no acompanhamento e na revisão das alterações.

A documentação será atualizada durante o desenvolvimento para manter o planejamento alinhado à execução real do Projeto Integrador Interdisciplinar.