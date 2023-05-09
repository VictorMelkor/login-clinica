
function cadastrar(){

var i=0;

var dados = new Object(); 
 dados.sala = document.querySelector("#sala").value;
 dados.sexo = document.querySelector("#sexo").value;
 dados.data = document.querySelector("#data").value;
 nascimento = document.querySelector("#nascimento").value;
 dados.admis = document.querySelector("#admis").value;
 dados.prontuario = document.querySelector("#prontuario").value;
 dados.nome = document.querySelector("#nome").value;
 dados.clinica = document.querySelector("#clinica").value;
 dados.diagnostico = document.querySelector("#diagnostico").value;
 dados.observacao = document.querySelector("#observacao").value;
 dados.idade = calculaIdade(nascimento);
 dados.num = gerarId();

document.getElementById("formulario").reset();
localStorage.setItem('dados', JSON.stringify(dados));
let dadosLocal = localStorage.getItem('dados')

InputValueTable(dadosLocal);
}

function InputValueTable(dados){
    
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

function imprimir(){
    
    // let nome = document.querySelector("#name").value;
    // const form = new FormData(document.querySelector('form'))

    // let sala = form.get("sala")
    
    // console.log(form)

    var tabela = document.getElementById('tabela').innerHTML;
    var texto = "Subsecretaria de Atençao Hospitalar, Urgencia e Emergencia <br> Coordenadoria Geral de Emergência da AP – 3.2 <br> Hospital Municipal Salgado Filho- Divisão de Enfermagem"

    var style = "<style>";
        style = style + "table {width: 100%;font: 20px Calibri;}";
        style = style + "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
        style = style + "padding: 2px 3px;text-align: center;}";
        style = style + "</style>";
        // CRIA UM OBJETO WINDOW
        var win = window.open('', '', 'height=700,width=700');
        win.document.write('<html><head>');
        win.document.write('<title>Empregados</title>');   // <title> CABEÇALHO DO PDF.
        win.document.write(`<img src="img.png"> ${texto}`);   // <title> CABEÇALHO DO PDF. 
        win.document.write(style);                                     // INCLUI UM ESTILO NA TAB HEAD
        win.document.write('</head>');
        win.document.write('<body>');
        win.document.write(tabela);                          // O CONTEUDO DA TABELA DENTRO DA TAG BODY
        win.document.write('</body></html>');
        win.document.close(); 	                                         // FECHA A JANELA
        win.print();                                                            // IMPRIME O CONTEUDO
}


function gerarId(i){
    return Math.floor(Math.random()*3000);        
    //return i++;
}
//Função que calcula da idade a partir da data de nascimento
function calculaIdade(dataNasc){ 
    const today = new Date();
    const birthDate = new Date(dataNasc);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    return age; 
}

function addDados(dadosobj){
    let tbody = criarTag(dadosobj);
    tabela.appendClild(tbody);
}

function criarTag(){
    let tbody = document.createElement('tbody');
    let tr = document.createElement('tr');
    td.appendClild.add('tableNum')
    

}
