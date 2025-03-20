// Criar um objeto enderaço que contém:
// Rua, Cidade, CEP, exibirEndereço(endereço)

function endereco(rua, cidade, cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep,
    this.exibirEndereco = function(endereco){
        console.log(rua, cidade, cep);
    } 
}

logradouro1 = new endereco('Antônio Martins','Patos',58225000);
logradouro2 = new endereco('Antônio Martins','Patos',58225000);

function saoIguais (endereco1, endereco2){
    return endereco1.rua === endereco2.rua && 
        endereco1.cidade === endereco2.cidade && 
        endereco1.cep == endereco2.cep;
};

function temEnderecoDeMemoriaIgual(endereco1, endereco2){
    return endereco1 === endereco2;
}

console.log(saoIguais(logradouro1, logradouro2), temEnderecoDeMemoriaIgual(logradouro1, logradouro2));