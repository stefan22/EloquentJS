EXPRESSION AND STATEMENTS
=========================

  +   A FRACTION OF CODE THAT PRODUCES A VALUE IS CALLED AN EXPRESSION
        EX.
          22 OR 'hello'   => ARE EXPRESSIONS
          
  +   STATEMENT STANDS ON ITW OWN AMOUNT TO SOMETHING
        EX.
          var caught = 5 * 5;
          
 +    A FUNCTION IS A PIECE OF PROGRAM WRAPPED IN A VALUE
      EX.
        +   alert('Good morning);
        +   prompt('What is your name');
        +   confirm('is that ok?');
        
        +   EXECUTIONG A FUNCTION IS CALLED INVOKING, CALLING, OR APPLYING
        +   VALUES GIVEN TO FUNCTIONS ARE CALLED ARGUMENTS.
        
        
        *Math.max
        console.log(Math.max(2,5));
        //  => 5
        
        
        EX.
          var number = Number(prompt('Enter a number'));
          if (!isNaN(number))
            alert('Your number is the square root of ' + number*number);
          else
            alert('whats wrong with u?');
  
  
WHILE AND DO LOOPS
==================
  
       EX
           var number = 0;
           while (number <=12) {
              console.log(number);
           }
           
           
      EX.
            var result = 1;
            var counter = 0;
            while(counter < 10) {
              result = result *2;
              counter = counter + 1;
            }
            console.log(result);
            // -> 1024
        
        
FOR LOOPS
========= 
  
        EX.
            for ( var number = 0;  number <= 12;  number ++) {
              console.log(number);
            }
        
        
        
SINGLE LINE COMMENTS           
====================
        EX.   // comment here
  
MULTIPLE LINE COMMENTS          
======================
        EX.   /*
             This is also a comment
             more goes here
             */  
        
        
        
        
EXERCISES  (WARM UP CHAPTERS)
=========
  
###  TRIANGLE MADE OF POUND SIGNS USING LOOP  (IT WORKS WHATEVER)       
    
        var triangle ="#";
        var count = 0;
        
        while (count < 7) {
            triangle = triangle + '#';
            var see =  triangle.charAt(0);
        
            if ( (triangle.charAt(0) == "#") && (count > 0) ) {
                 //not doing anything right now
        
            } elsvar triangle ="#";
        var count = 0;
        
        while (count < 7) {
            triangle = triangle + '#';
            var see =  triangle.charAt(0);
        
            if ( (triangle.charAt(0) == "#") && (count > 0) ) {
                 //not doing anything right now
        
            } else if (triangle == "##" && count == 0) {
                //removes first character
                triangle = triangle.substr(0,1);
        
            }
            console.log(triangle);
            count ++;
        }e if (triangle == "##" && count == 0) {
                //removes first character
                triangle = triangle.substr(0,1);
        
            }
            console.log(triangle);
            count ++;
        }
        
###  FIZZBUZZ EXERCISE (TOO EASY)
 
            for (var num = 1; num <= 100; num++) {
                if ((num % 3 == 0) && (num % 5 == 0)) {
                    console.log("FizzBuzz");
                } else if (num % 5 == 0) {
                    console.log("Buzz");
                } else if (num % 3 == 0) {
                    console.log("Fizz");
                } else
            
                console.log(num);
            }
        
###  CHESSBOARD EXERCISE       
####I PROVIDE SIZE AND IT GIVES ME AN EQUAL NUMBER OF ROWS AND COLUMNS USING #X's/ X#'s
      (NO FUNCTIONS YET - GOING BY THE BOOK - IT WORKS) 
    
              var total ="";  //it gives me undefined otherwise
              var size = Number(prompt("Enter the size of your board"));  //prompt throws an error on IDE's
              var count = 0;
              var tbottom = "";  //it gives me undefined otherwise
              
              for (var square=0; square < size/2; square ++) {
                  var right = ("X#");
                  var bottom = ("#X");
                  //gets me top row
                  total = total + right;
                  //get second row
                  tbottom = tbottom + bottom;
              }
              
              for( var i = 0; i < size/2; i++) {
                  //populates board with my two rows from above
                  console.log(total);
                  console.log(tbottom);
              
              }

            
       
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        