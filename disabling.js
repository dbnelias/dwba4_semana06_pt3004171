/ **
	    * Desative o clique com o botão direito do mouse, tecla F12 e salve as combinações de teclas na página
	    * Por Arthur Gareginyan (arthurgareginyan@gmail.com)
	    * Para o código fonte completo, visite https://mycyberuniverse.com
	    * https://mycyberuniverse.com/developing/disabling-right-clicking-by-using-javascript.html
	    * /
	  janela . onload  =  function ( )  {
	    documento . addEventListener ( "contextmenu" ,  function ( e ) {
	      e . preventDefault ( ) ;
	    } ,  falso ) ;
	    documento . addEventListener ( "keydown" ,  function ( e )  {
	    //document.onkeydown = function (e) {
	      // tecla "I"
	      se  ( e . ctrlKey  &&  e . shiftKey  &&  e . keyCode  ==  73 )  {
	        disabledEvent ( e ) ;
	      }
	      // tecla "J"
	      se  ( e . ctrlKey  &&  e . shiftKey  &&  e . keyCode  ==  74 )  {
	        disabledEvent ( e ) ;
	      }
	      // tecla "S" + macOS
	      if  ( e . keyCode  ==  83  &&  ( navegador . plataforma . match ( "Mac" ) ? e . metaKey : e . ctrlKey ) )  {
	        disabledEvent ( e ) ;
	      }
	      // tecla "U"
	      se  ( e . ctrlKey  &&  e . keyCode  ==  85 )  {
	        disabledEvent ( e ) ;
	      }
	      // tecla "F12"
	      if  ( event . keyCode  ==  123 )  {
	        disabledEvent ( e ) ;	
     	 }
    	} ,  falso ) ;
    	function  disabledEvent ( e ) {
	      se  ( e . stopPropagation ) {
        	e . stopPropagation ( ) ;
      	}  else  if  ( window . event ) {
        	janela . evento . cancelBubble  =  true ;
      	}
      	e . preventDefault ( ) ;
      	return  false ;
    	}
  	} ;