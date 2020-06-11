//validar dimensão da tela dentro da area visivel.
// até onde podemos atuar nos eixos x e Y ?
var altura =0;
var largura =0;

var pontuacao = 0;
var v = 1;
//função criada para ser chamada no evento onresize da tag <body>
function capturaTamanhodaTela(){
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(`Altura atual ${altura} largura atual ${largura}`);
    
}

capturaTamanhodaTela()

//style.left  style.top //pegar a imagem , criar um style para img, configurar as dimensões
//criar a movimentação dinamica com cordenadas para movimentar a imagem.

 //remover imagem anterior (caso exista)

 

//criando o elemento HTML
function movimentandoImagem(){

   let exibicaoImagem = document.getElementById('imagem');

        if(exibicaoImagem){
        exibicaoImagem.remove();   //dessa forma as imagens criadas automaticamente não serão exibidas em duplicidade na tela.

              if(v > 3){
                 window.location.href = 'gameover.html';
                    // alert("GAME OVER!!  xD")
           
        }else{
    
            //console.log('vida' + v)
            document.getElementById('vida'+ v).src = 'img/coracao_vazio.png';
            v++;
        }
        
    }

    
    

    var posicaoX = Math.floor(Math.random() * largura) - 120;
    var posicaoY = Math.floor(Math.random() * altura) - 120 ;



    posicaoX = posicaoX < 0 ? 0 :posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;
            console.log('Cordenada :'+posicaoX +'|' + posicaoY)
    var imagem = document.createElement('img')
    
    imagem.src = "img/mosca.png"
    imagem.className =  tamanhoAleatorio() +' ' + ladoAeB();// observado que caso eu realize a declaração sem a concatenação do campo em branco a imagem terá o tamanho padrão desconsiderando da função.
    //acesando o style.
    imagem.style.left = posicaoX + 'px';
    imagem.style.top = posicaoY + 'px';
    imagem.style.position = 'absolute';
    imagem.id = 'imagem'
    imagem.onclick = function(){
        this.remove();
        somandoPontos();
        nivelDificuldade();
        
    }
   
    //validar();
    document.body.appendChild(imagem)  //adiciano um filho
    //testando as posições das imagens
    console.log(ladoAeB())
   
}

//posicionando os elementos nas coordenadas

function tamanhoAleatorio(){

    //Utilizar essa lógica para alterar  o tamanho da imagem que é exibida no jogo
    //De Forma dinamica.
    var classe = Math.floor(Math.random() * 3);
    
    switch(classe){
        case 0:
            return 'mosquito1';
            
        case 1:          
            return 'mosquito2';
            
        case 2:            
            return 'mosquito3';          
    }
    
}

//Rotação da imagem Left right

function ladoAeB(){
    
    var classe = Math.floor(Math.random() * 2);

    switch(classe){
        case 0:
            return 'ladoA';

        case 1:
            return 'ladoB';
        
    }
}

function reiniciarJogo(){
   // alert('chamada ok')
   window.location.href = 'index.html';
}

function  somandoPontos(){
    pontuacao ++;
    document.getElementById("pontuacao").innerHTML = "Pontuação : " + pontuacao;  

}


function nivelDificuldade(){  

   

     if( pontuacao < 5) 
   {
       setInterval(function velocidade(){
        movimentandoImagem();
       }, 5000);
     
      return console.log(pontuacao);
   } 
    else if ( pontuacao >= 6 && pontuacao < 32)
   {
       setInterval(function velocidade(){
           movimentandoImagem();
       },3000);
       return console.log(pontuacao);
    
   }
    else if (pontuacao > 32)
    {
        setInterval(function velocidade(){
            movimentandoImagem();
        },2000);
        
    }

    
}


//criando a interação da imagem em um ciclo de tempo.
//remover o html anterior antes da criação do novo elemento para apenas 1 mosquito ficar na sena

//criação do cenario
//criacao dos pontos de vida
//tempo de jogo
//criando evento