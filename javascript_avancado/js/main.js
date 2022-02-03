var list = [];

function getTotal(list) {
    var total = 0;
    for(var key in list){
        total += list[key].valor * list[key].quantidade;
    }
    document.getElementById("totalValor").innerHTML = formataValor(total);    
}

function setList(list){
    var table = '<thead><tr><td>Descrição</td><td>Quantidade</td><td>Valor</td><td>Ação</td></tr></thead><tbody>';
    for(var key in list){
        table += `<tr><td>${formataDescricao(list[key].descricao)}</td><td>${formataQuantidade(list[key].quantidade)}</td><td>${formataValor(list[key].valor)}</td><td><button class="btn btn-warning" onclick="setUpdate(${key});">Editar</button> <button class="btn btn-warning" onclick="deleteData(${key});">Apagar</button></td></tr>`;
    }
    table += '</tbody>';
    document.getElementById("listTabela").innerHTML = table;  
    getTotal(list);
    saveStorage(list);
}

function formataDescricao(descricao) {
    var str = descricao.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
}

function formataQuantidade(quantidade) {
    return parseInt(quantidade);
}

function formataValor(valor) {
    var str = parseFloat(valor).toFixed(2) + "";
    str = str.replace(".",",")
    str = "R$ " + str;
    return str;
}

function addData() {

    if(!validacao()){
        return;
    }

    var desc = document.getElementById("desc").value;
    var quant = document.getElementById("quant").value;
    var dindin = document.getElementById("dindin").value;

    //O unshift()método adiciona novos elementos ao início de uma matriz.
    list.unshift({"descricao": desc, "quantidade":quant, "valor":dindin});
    setList(list);    
}

function setUpdate() {
    var obj = list[id];
    document.getElementById("desc").value =obj.descricao;
}

function setUpdate(id) {
    var obj = list[id];
    document.getElementById("desc").value = obj.descricao;
    document.getElementById("quant").value = obj.quantidade;
    document.getElementById("dindin").value = obj.valor;
    document.getElementById("btnUpdate").style.display = "inline-block";
    document.getElementById("btnAdd").style.display = "none";

    document.getElementById("inputIdUpdate").innerHTML = `<input id="idUpdate" type="hidden" value= ${id}>`;
}

function resetForm() {
    document.getElementById("desc").value = "";
    document.getElementById("quant").value = "";
    document.getElementById("dindin").value = "";
    document.getElementById("btnUpdate").style.display = "none";
    document.getElementById("btnAdd").style.display = "inline-block";
    document.getElementById("inputIdUpdate").innerHTML = "";
    document.getElementById("erro").display = "none";
}

function updateData() {

    if(!validacao()){
        return;
    }

    var id = document.getElementById("idUpdate").value;
    var desc = document.getElementById("desc").value;
    var quant = document.getElementById("quant").value;
    var dindin = document.getElementById("dindin").value;
    list[id] = {
        "descricao": desc, 
        "quantidade":quant,
        "valor":dindin
    };
    resetForm();
    setList(list);
}

function deleteData(id) {
    if(confirm("Você esta certo que quer deletar?")) {
        if(id === list.length - 1){
            list.pop();
        }else if(id === 0) {
            list.shift();
        }else {
            var arrIni = list.slice(0,id);
            var arrEnd = list.slice(id + 1);
            list = arrIni.concat(arrEnd);
        }
        setList(list);
    }
}

function validacao() {
    var descricao = document.getElementById("desc").value;
    var quantidade = document.getElementById("quant").value;
    var valor = document.getElementById("dindin").value;
    var erros = "";
    document.getElementById("erro").style.display = "none";

    //validação descrição
    if(descricao === "") {
        erros += '<p>Preencha o campo</p>';
    }

    //validação quantidade
    if(quantidade === ""){
        erros += '<p>Preencha o campo</p>';
    }else if(quantidade != parseInt(quantidade)){
        erros += '<p>Preencha o campo com números</p>';
    }

    //validação valor
    if(valor === ""){
        erros += '<p>Digite um valor válido</p>';
    }else if(valor != parseFloat(valor)) {
        erros += '<p>Digite um valor válido</p>';
    }

    if(erros != "") {        
        document.getElementById("erro").style.display = "block";
        document.getElementById("erro").style.backgroundColor = "rgba(85, 85,85, 0.3)";
        document.getElementById("erro").style.color = "white";
        document.getElementById("erro").style.padding = "10px";
        document.getElementById("erro").style.margin = "10px";
        document.getElementById("erro").style.borderRadius = "13px";

        document.getElementById("erro").innerHTML = `<h3>Error: </h3> ${erros}`
        return 0;
    }else {
        return 1;
    }
}

function deleteList() {
    if(confirm('Você tem certeza que deseja deletar a lista?')){
        list = [];
        setList(list);
    }
}

function saveStorage(list) {
    var jsonStr = JSON.stringify(list);
    localStorage.setItem("list",jsonStr);
}

function iniListStorage() {
    var testList = localStorage.getItem("list");
    if(testList) {
        list = JSON.parse(testList);
    }
    setList(list);
}

iniListStorage();