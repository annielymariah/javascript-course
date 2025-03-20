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

logradouro = new endereco('Antônio Martins','Patos',58225000);
