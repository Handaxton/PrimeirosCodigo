alert("SuperMercado do Torquato");
let produto=0, preco=0, precototal=0;
while(preco!=-1){
  preco= parseFloat(prompt("Preço R$ "));
  precototal+=preco;
  produto++;
}
precototal+=1;
produto-=1;
alert("Quantidade " + produto + "R$" + precototal);
