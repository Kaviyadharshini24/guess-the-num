import React from "react";
import trophy from "./trophy-icon.webp";

function Result({secretNum,term}){
    let result;
    let isCorrect=false;
    if(term){
    if(term>10){
        result='Enter numbers between 1 to 10'
    }
    else if(term>secretNum){
        result='Higher';
    }
    else if(term<secretNum){
        result='Lower';
    }
    else if(term==secretNum){
        result='You Guessed Correct';
        isCorrect=true;
    }
    else{
        result='Enter Valid Number';
    }
}

   return (
   <div>{!isCorrect&&term&&<h3> You Guessed: {result}</h3>}
   {isCorrect &&(
    <div>
        <center> <h2>🎉Congratulations ! You Guessed Correct🎉</h2>
       <img src={trophy} alt="Trophy" width="100"/></center>
        </div>
   )} 
   </div>
   );

}
export default Result;