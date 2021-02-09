let kata = "kaka";
temp = ''
for(var i = kata.length; i > 0; i--){
    temp += kata.substring(i - 1, i)
} if (kata === temp){
    console.log(true)
} else {
    console.log(false)
}
