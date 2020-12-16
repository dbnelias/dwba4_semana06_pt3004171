/ **
 * 
 * /

classe  Aluno  {
  construtor ( nome ,  sobrenome ,  nota1 ,  nota2 )  {
    isso . primeiroNome  =  nome ;
    isso . segundoNome  =  sobrenome ;
    isso . primeiraNota  =  nota1 ;
    isso . segundaNota  =  nota2 ;     
  }
  nomeCompleto ( )  {
	  return  ( this . primeiroNome  +  ""  +  this . segundoNome ) ;
  }
  media ( ) {
	  retorno  ( esta . primeiraNota * 0.4 )  +  ( este . segundaNota * 0,6 ) ;	  
  }
  situacao ( ) {
	  if  ( this . media ( )  >  6 ) {
		  retornar  'Aprovado' ;
	  }
	  retornar  'Reprovado' ;
  }
}

function  criarAlunos ( ) {
	var  alunos  =  [ novo  Aluno ( 'Fabio' ,  'Teixeira' ,  6 ,  6,5 ) ,
		          novo  Aluno ( 'Fabiano' ,  'Teixeira' ,  9 ,  4 ) ] ;	
	
	alunos . forEach ( mostrarAlunos ) ;
}

function  mostrarAlunos ( item ,  index )  {
	  alert ( "Nome completo:"  +  item . nomeCompleto ( )  +  "\ n"  + 
			"Média:"  +  item . mídia ( )  +  "\ n"  + 
			"Situação:"  +  item . situacao ( ) ) ;
}

criarAlunos ( ) ;