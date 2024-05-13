// Random PassWord GENERATOR

function generatepassword(length,ilowercase,iuppercase,inumbers,isymbols){
 const lowercasechars = 'abcdefghijklmnopqrstuvwxyz';
 const uppercasechars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
 const numberchars = '0123456789';
 const symbolchars = "²&é(-è_çà)=*/^$*,;:!?";

 let Alowedchars = "";
 let password = "";

 Alowedchars += ilowercase ? lowercasechars : "" ;
 Alowedchars += iuppercase ? uppercasechars : "" ;
 Alowedchars += inumbers ? numberchars : "" ;
 Alowedchars += isymbols ? symbolchars : "" ;

 if (length <= 3) {return '(password length must be at least 4)';}
 if (Alowedchars === " "){
     return '(At Least one set of characters needs to be selected)';
 }
  for (let i = 0; i < length; i++) {
    const randomindex= Math.floor(Math.random() * Alowedchars.length);
     password += Alowedchars[randomindex];
  }
 return password;
 
}

const length = 10 ;
const ilowercase = true ;
const iuppercase = false ;
const inumbers = true ;
const isymbols = false ;


const password = generatepassword(passwordlength,ilowercase,iuppercase,inumbers,isymbols);
console.log('Generated password : '+ password);