exports.caesarCipher = function(x,n) {
    answer=''
    alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    alphabet2=alphabet.map(i =>{return i.toUpperCase()})
    // console.log(alphabet)
    // console.log(alphabet2)
    for (i in x){
        // console.log(x[i])
        letter= x[i]
        if (alphabet.indexOf(letter)>=0){
            counter=alphabet.indexOf(letter)
            // console.log(alphabet.indexOf(letter))
            counter=counter+n
            if (counter<0){
                counter=counter+26
            }
            if (counter>25){
                counter=counter-26
            }
            answer=answer+alphabet[counter]
        }
        if (alphabet2.indexOf(letter)>=0){
            counter=alphabet2.indexOf(letter)
            // console.log(alphabet.indexOf(letter))
            counter=counter+n
            if (counter<0){
                counter=counter+26
            }
            if (counter>25){
                counter=counter-26
            }
            answer=answer+alphabet2[counter]
        }
        if(/[^A-Za-z]/g.test(letter)){
            answer=answer+letter
        }
    }
    return answer
};
// caesarCipher("Hello zach168! Yes here.", 5)