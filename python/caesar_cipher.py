def caesar_cipher(string, shift_amount):
    answer=''
    alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    alphabet2=[x.upper() for x in alphabet]
    for i in string:
        if i in alphabet:
            counter= alphabet.index(i) + shift_amount
            if counter< 0:
                counter=counter+26
            elif counter> 25:
                counter=counter-26
            answer=answer+alphabet[counter]
        elif i in alphabet2:
            counter= alphabet2.index(i) + shift_amount
            if counter< 0:
                counter=counter+26
            if counter>25:
                counter=counter-26
            answer=answer+alphabet2[counter]
        else:
            answer=answer + i
    return answer
    
#print(caesar_cipher("Hello zach168! Yes here.", 5))
