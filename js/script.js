



function repeatStr(str, num){
    let js = str
    console.log(js.repeat(num))
}
repeatStr('anvar',  2)





function checkCardNumber(card){
result = card.substring(4, -1)
resultBack = card.substring(12)
cardLength = card.length

let boolean = false
if( result == 8600){
    console.log("Uzcard")
    if( cardLength == 16 ){
        boolean = true
    }
 }else if(result == 9860 ){
    console.log("Humo")
    if( cardLength == 16 ){
        boolean = true
    }
}else{
    console.log("card is error")
}
if( boolean == true){
console.log("✅")
}else{
    console.log("Error")
}
if(boolean == true){
secretCard = result + "********" + resultBack
console.log("Sizning karta raqamingiz " + secretCard)
}else{

}
}
checkCardNumber("9860120402911980")