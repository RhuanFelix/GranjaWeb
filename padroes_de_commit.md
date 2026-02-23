# Padrões de Commit

## O que são Padrões de Commit?

Padrões de commit são **convenções utilizadas para escrever mensagens de commit de forma organizada, clara e padronizada** dentro de um repositório Git.

Eles definem uma estrutura para descrever alterações no código, facilitando a compreensão do histórico do projeto e melhorando a comunicação entre desenvolvedores.

Um commit bem estruturado ajuda a responder rapidamente:

* O que foi feito?
* Por que foi feito?
* Qual área do sistema foi afetada?

---

## Importância no Desenvolvimento Colaborativo

Em projetos colaborativos, especialmente aqueles com múltiplos desenvolvedores, a padronização de commits é essencial porque:

### 1. Facilita a leitura do histórico

Permite entender rapidamente as alterações feitas ao longo do tempo.

### 2. Melhora a comunicação da equipe

Outros desenvolvedores conseguem compreender mudanças sem precisar analisar todo o código.

### 3. Ajuda na manutenção do projeto

Facilita identificar quando uma funcionalidade foi criada ou um erro foi corrigido.

### 4. Permite automação

Ferramentas de CI/CD podem gerar:

* Versionamento automático
* Changelog automático
* Releases organizadas

### 5. Profissionaliza o repositório

Repositórios organizados demonstram maturidade técnica e boas práticas.

---

# Conventional Commits

Um dos padrões mais utilizados atualmente é o **Conventional Commits**.

Ele segue a seguinte estrutura:

```
<tipo>(escopo opcional): descrição curta
```

Exemplo:

```
feat(auth): adiciona autenticação com JWT
```

---

# 📋 Tipos de Commit

Abaixo está a tabela com os principais tipos utilizados no padrão Conventional Commits:

| Tipo       | Descrição                                            | Exemplo                                              |
| ---------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `feat`     | Adição de nova funcionalidade                        | `feat: adiciona cadastro de usuários`                |
| `fix`      | Correção de bug                                      | `fix: corrige erro ao salvar pedido`                 |
| `docs`     | Alterações na documentação                           | `docs: atualiza README com instruções de instalação` |
| `style`    | Alterações de formatação (sem mudar lógica)          | `style: ajusta indentação do controller`             |
| `refactor` | Refatoração de código (sem alterar comportamento)    | `refactor: reorganiza estrutura do service`          |
| `test`     | Adição ou modificação de testes                      | `test: adiciona teste para validação de login`       |
| `chore`    | Tarefas internas (configuração, build, dependências) | `chore: atualiza dependências do projeto`            |
| `perf`     | Melhoria de performance                              | `perf: melhora consulta ao banco de dados`           |

---

# Boas Práticas ao Criar Commits

✔ Use verbo no imperativo
✔ Seja claro e objetivo
✔ Faça commits pequenos e específicos
✔ Evite mensagens genéricas como “update” ou “ajustes”
✔ Um commit deve representar uma única responsabilidade

---

# Exemplos Ruins de Commit

```
arrumando coisas
teste
update
mudanças
```

Essas mensagens não deixam claro o que foi alterado.

---

# Exemplos Bons de Commit

```
feat: implementa autenticação com JWT
fix: corrige erro de validação no formulário
refactor: remove código duplicado no service de pedidos
chore: configura ESLint no projeto
```

---

# Conclusão

A utilização de padrões de commit:

* Organiza o histórico do projeto
* Facilita o trabalho em equipe
* Permite automações
* Demonstra profissionalismo

Adotar o padrão **Conventional Commits** é uma prática recomendada tanto para projetos acadêmicos quanto para projetos profissionais.