-- Geração de Modelo físico
-- Sql ANSI 2003 - brModelo.



CREATE TABLE Doadores (
nome_doador VARCHAR(50),
cpf_cnpj VARCHAR(14),
tipo_doador VARCHAR(2),
id_doador INTEGER PRIMARY KEY,
telefone_doador VARCHAR(15),
endereco_doador VARCHAR(50),
email_doador VARCHAR(50)
);

CREATE TABLE Doacao (
id_doacao INTEGER PRIMARY KEY,
valor_doacao DECIMAL(15),
data_doacao DATETIME,
id_doador INTEGER,
FOREIGN KEY(id_doador) REFERENCES Doadores (id_doador)
);

CREATE TABLE Curso (
data_inicio DATETIME,
id_curso INTEGER PRIMARY KEY,
data_fim DATETIME,
duracao INTEGER
);

CREATE TABLE Alunos (
email_aluno VARCHAR(50),
endereco_aluno VARCHAR(50),
telefone_aluno VARCHAR(15),
id_aluno INTEGER PRIMARY KEY,
nome_aluno VARCHAR(50),
cpf_aluno VARCHAR(11),
senha_aluno VARCHAR(10),
id_curso INTEGER,
FOREIGN KEY(id_curso) REFERENCES Curso (id_curso)
);

CREATE TABLE Fornecedor (
cnpj VARCHAR(14),
nome_fornecedor VARCHAR(50),
id_fornecedor INTEGER PRIMARY KEY,
email_fornecedor VARCHAR(50),
endereco_fornecedor VARCHAR(50),
telefone_fornecedor VARCHAR(15)
);

CREATE TABLE Materia_Prima (
id_doacao_materia INTEGER PRIMARY KEY,
tipo VARCHAR(20),
quantidade VARCHAR(10),
data_entrada DATETIME,
id_fornecedor INTEGER,
FOREIGN KEY(id_fornecedor) REFERENCES Fornecedor (id_fornecedor)
);

