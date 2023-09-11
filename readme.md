# Software Architecture

> "É a organização fundamental de um sistema e seus componentes, suas relações, seu ambiente, bem como os princípios que guiam seu _design_ e evolução."

> "É a relação entre os objetivos de negócio e suas restrições com os componentes a serem criados e suas responsabilidades visando a evolução do _software_."

## Architecture Types

- _Software_
  - Uma "disciplina" da engenharia de _software_
  - Está diretamente ligado ao processo de desenvolvimento de _software_
  - Afeta e recebe influência da estrutura organizacional da empresa
    - Formação de times
    - Estrutura dos componentes de _software_
- _Solution_ - Solução
  - Fica entre a área de negócios e a área de software
  - Transforma requisitos de negócio em soluções de software
  - Realiza os desenhos da solução e como o sistema irá funcionar
    - C4, UML, BPMN
  - Analisa os impactos comerciais em relação as tecnologias
  - Pode participar do processo comercial
  - Analisa os custos
- _Technology_ - Tecnológica
  - Especialidade em tecnologias específicas de mercado
  - Geração de valor baseado em ferramenta tecnológica
  - Diversidade de profissionais especialistas
- _Comporate_ - Corporativa
  - Tem impacto direto na organização como um todo
  - Avaliação de custos em áreas e projetos relacionados a empresa
  - Responsável por avaliação de novas tecnologias
  - Padroniza tecnologias e planjea implementações
  - Migrações

<br>

### what does the software architect do?

- Transforma requisitos de negócio em padrões arquiteturais
- Orquestra pessoas desenvolvedoras e _experts_ de domínio
- Entender profundamente conceitos e modelos arquiteturais
- Auxilia na tomada de decisões em situações inesperadas
- Reforçar boas práticas de desenvolvimento, também faz _code review_

<br>

### Vantagens em Arquitetar _Software_

- Pode navegar da visão macro a visão micro dos _softwares_
- Ter opções para solucionar um problema, avaliando os contextos
- Pensar em longo prazo e sustentabilidade
- Tomar melhores decisões
- Não cair em _hypes_ de mercado
- Imersão em padrões de projetos, desenvolvimento e boas práticas
- Maior clareza no impacto do _software_ possui na organização
- Tomar decisões com confiança e mais segurança

<br>

### Sustentabilidade

- Desenvolver _software_ é caro
- _Software_ resolve uma "dor"
- _Software_ Precisa se pagar ao longo do tempo
- _Software_ precisa acompanhar a evolução do negócio
- Quanto mais tempo o _software_ fica no ar, mais receita ele gera
- A solução precisa ser arquitetada

<br>

### Pilares da Arquitetura de _Software_

- Estruturação
  - Fácil evolução
  - Componentes para atender objetivos do negócio
- Modularização
  - Independentes que desempenham funções específicas
- Relacionamento entre sistemas
- Governança
  - Definições, padronização, regras, documentação, linguagem, protocolos
  - Maneira de produzir software

<br>

### Requisitos Arquiteturais

- Performance
- Armazenamento de dados
- Escalabilidade
- Segurança
- Legalidade
- Auditoria
- Marketing

<br>

### Características Arquiteturais

- Operacional
- Estrutura
- _Cross-Cutting_

<br>

---

### Documentação

> Cada tipo de documentação tem sua própria importância e função, e todas elas juntas ajudam a garantir que o _software_ seja compreendido e mantido ao longo do tempo.

- Utilização do projeto
  - Como usar o _software_
  - Quais as funcionalidades
  - Como realizar tarefas específicas
  - Passo-a-passo, imagens, vídeos, fluxogramas e outras formas de ajudar a familiarização do sistema.
- Desenvolvimento do projeto
  - Registrar processos do inico ao fim no desenvolvimento
  - Tecnologias usadas
  - Decisões de arquiteturas
  - Testes
  - _Bugs_
  - Soluções adotadas
- Infraestrutura do projeto
  - Inventário de _hardware_
  - Inventário de _software_
  - Diagramas de rede
  - Políticas e procedimentos
  - Documentação de configuração e _setup_
  - Relatórios de monitoramento
- Arquitetura do projeto
  - Visão geral da arquitetura
    - objetivos de _design_
    - requisitos
    - restrições
    - decisões de _design_ importantes
  - Diagramas da arquitetura
    - componentes
    - interfaces
    - dependências
    - fluxos de dados
  - Padrões de _design_
    - padrões de arquitetura
    - padrões de componentes
    - padrões de comportamento
  - Descrição dos componentes
    - objetivos
    - funcionalidades
    - interfaces
    - detalhes das decisões
  - Interfaces do sistema
    - APIs
    - protocolos
    - formatos dos dados
    - interfaces relevantes
  - Decisões de _design_
    - motivos das escolhas no projeto
    - decisões

<br>

### Testabilidade

> Quanto mais testável o _software_ for, menos tempo e recursos serão necessários para testá-lo, o que pode ajudar a reduzir o custo e o tempo de desenvolvimento.

- _Design_ de _software_
  - código modular, legível e reutilizável
- Arquitetura do _software_
  - reduz a complexidade do sistema
- Instrumentação de código
  - coleta de dados para análise
  - monitoramento
- Dados de teste
  - disponibilidade de dados
- Ferramentas de testes
  - automatizados
- Acessibilidade de interfaces
  - interfaces bem definidas e documentadas

<br>

### Modificabilidade

> É importante porque os sistemas de _software_ precisam ser modificados com frequência para corrigir defeitos, melhorar a funcionalidade, lidar com novos requisitos ou adaptar-se a novos ambientes.

- _Design_ de _software_
  - modular e bem estruturado
  - componentes bem definidos
  - interações documentadas
- Arquitetura de _software_
  - facilita na hora de adicionar ou remover componentes
  - visa a evolução do sistema
- Qualidade do código
  - legibilidade
  - utilização de padrões
  - minimização de _code smells_
  - _clean code_
- Documentação
  - completa e atualizada
- Testabilidade
  - testes garantem a modificação bem sucedida

<br>

### Escalabilidade

> Escalabilidade de _software_ se refere à capacidade de um sistema de _software_ de crescer e se adaptar para lidar com um aumento na demanda.

- Arquitetura escalável
  - deve suportar altas demandas sem interferir no desempenho
  - pode utilizar sistemas distribuidos e balanceamento de carga
- Tecnologias
  - Computação em nuvem
  - Conteinerização
  - ferramentas que permitam dimensionamento e gerenciamento
- Banco de dados escalável
  - deve ser capaz de lidar com grande quantidade de dados e usuários simultaneamente
  - pode utilziar de bancos NoSQL e tecnologias de Cache
- Monitoramento e otimização
  - ajuda a garantir escalabilidade a longo prazo
  - exemplos de aplicativos
    - New Relic
    - Nagios
    - Splunk
    - AppDynamics
    - VisualVM

<br>

### Disponibilidade e Observabilidade

> **Disponibilidade** refere-se à capacidade de um sistema ou serviço estar disponível para uso em um determinado momento.

- tempo de atividade
- tempo de disponibilidade do sistema

> **Observabilidade**, refere-se à capacidade de observar e medir o comportamento de um sistema ou serviço em tempo real.

- métricas de desempenho
- tempo de resposta
- taxa de erros
- utilização de recursos

<br>

### Desempenho

> É a medida de quão bem um sistema ou componente executa uma tarefa em relação às expectativas ou requisitos estabelecidos.

- Tempo de resposta
  - respostas de solicitações ou chamadas
- Taxa de transferência
  - quantidade de dados transferidos em função do tempo
- Utilização de recursos
  - processamento, memória, armazenamento na execução de tarefas
- Confiabilidade
  - funcionar sem falhas
  - funcionar sem interrupções por longos períodos
- Escalabilidade
  - capacidade em lidar com aumento de requisições, dados sem perda de desempenho

#### Estratégias de **CACHE**

> Armazenar temporariamente dados que são frequentemente acessados em memória cache para evitar buscar esses dados novamente do local original, como um banco de dados ou sistema de arquivos.

- Cache da página inteira
  - melhora significativa no desempenho de carregamento
- Cache de banco de dados
  - reduz a quantidade de solicitações de banco de dados
- Cache de objeto
  - recursos frenquentes são armazenados
- Cache de sessão
  - informações da sessão do usuário, ou dados transitórios e temporários
- Cache de CDN
  - uma rede de entrega de conteúdo
  - armazena arquivos de mídia em servidores distribuídos

<br>

---

# _Hexagonal Architecture_
