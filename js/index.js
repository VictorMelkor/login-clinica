function cadastrar() {
    var i = 0;

    // Cria objeto para armazenar dados do paciente
    var dados = new Object();
    dados.sala = document.querySelector("#sala").value;
    dados.sexo = document.querySelector("#sexo").value;
    dados.data = document.querySelector("#data").value;
    let nascimento = document.querySelector("#nascimento").value; // variável local corrigida
    dados.admis = document.querySelector("#admis").value;
    dados.prontuario = document.querySelector("#prontuario").value;
    dados.nome = document.querySelector("#nome").value;
    dados.clinica = document.querySelector("#clinica").value;
    dados.diagnostico = document.querySelector("#diagnostico").value;
    dados.observacao = document.querySelector("#observacao").value;

    // Calcula idade com base na data de nascimento
    dados.idade = calculaIdade(nascimento);
    // Gera ID único para o cadastro
    dados.num = gerarId();

    // Reseta o formulário após capturar os dados
    document.getElementById("formulario").reset();

    // Salva os dados no localStorage em formato JSON
    localStorage.setItem('dados', JSON.stringify(dados));

    // Recupera os dados armazenados para atualizar a tabela
    let dadosLocal = localStorage.getItem('dados');
    InputValueTable(dadosLocal);
}

// Atualiza a tabela com os dados do paciente cadastrados
function InputValueTable(dados) {
    let dadosobj = JSON.parse(dados);

    $("#tableNum").html(`${dadosobj.num}`);
    $("#tableProntuario").html(`${dadosobj.prontuario}`);
    $("#tableNome").html(`${dadosobj.nome}`);
    $("#tableClinica").html(`${dadosobj.clinica}`);
    $("#tableIdade").html(`${dadosobj.idade}`);
    $("#tableAdmis").html(`${dadosobj.admis}`);
    $("#tableDiagnostico").html(`${dadosobj.diagnostico}`);
    $("#tableObservacao").html(`${dadosobj.observacao}`);
}

// Gera uma nova janela para impressão do relatório dos pacientes
function imprimir() {
    // Conteúdo da tabela que será impresso
    var tabela = document.getElementById('tabela').innerHTML;

    // Texto fixo do cabeçalho do relatório
    var texto = "Subsecretaria de Atençao Hospitalar, Urgencia e Emergencia <br> Coordenadoria Geral de Emergência da AP – 3.2 <br> Hospital Municipal Salgado Filho- Divisão de Enfermagem";

    // Estilo para a tabela no documento de impressão
    var style = "<style>";
    style += "table {width: 100%;font: 20px Calibri;}";
    style += "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
    style += "padding: 2px 3px;text-align: center;}";
    style += "</style>";

    // Abre uma nova janela para impressão
    var win = window.open('', '', 'height=700,width=700');
    win.document.write('<html><head>');
    win.document.write('<title>Empregados</title>');   // Título da janela
    win.document.write(`<img src="img.png"> ${texto}`);   // Cabeçalho com imagem e texto
    win.document.write(style);                            // Estilos CSS para a tabela
    win.document.write('</head>');
    win.document.write('<body>');
    win.document.write(tabela);                           // Conteúdo da tabela
    win.document.write('</body></html>');
    win.document.close();                                  // Fecha o documento para impressão
    win.print();                                          // Aciona a impressão
}

// Gera um número aleatório para identificar o paciente
function gerarId(i) {
    return Math.floor(Math.random() * 3000);
    // return i++;
}

// Calcula a idade a partir da data de nascimento fornecida
function calculaIdade(dataNasc) {
    const today = new Date();
    const birthDate = new Date(dataNasc);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

// Função inacabada, supostamente adicionaria linhas à tabela (não usada atualmente)
function addDados(dadosobj) {
    let tbody = criarTag(dadosobj);
    tabela.appendClild(tbody);  // erro: 'appendClild' deve ser 'appendChild'
}

// Função inacabada, cria tags para a tabela (não usada atualmente)
function criarTag() {
    let tbody = document.createElement('tbody');
    let tr = document.createElement('tr');
    td.appendClild.add('tableNum');  // erro: td não definido, 'appendClild' incorreto
}
