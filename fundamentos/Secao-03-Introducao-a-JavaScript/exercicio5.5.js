var pecaXadrex = "peap"
switch (pecaXadrex) {
    case 'peão':
      console.log('Uma casa para frente ou duas no primeiro movimento');
      break;
    case 'torre':
      console.log('Para frente e para os lados quantas casas quiser');
      break;
    case 'bispo':
        console.log('Diagonais');  
        break;
    case 'cavalo':
            console.log('Movimentos em formado de L'); 
            break;  
    case 'rainha':
            console.log('Movimento livre');
            break;
    case 'rei':
            console.log('Uma casa apenas para qualquer direção'); 
      break;
    default:
      console.log('ERRO peça inválida');
    }