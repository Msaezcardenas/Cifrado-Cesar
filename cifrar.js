window.cifrar = {
  encode: (texto, offset) => {
    /* Acá va tu código */
    let finalText = '';
    for (let i = 0; i < texto.length; i++) {
      let ascii = texto[i].charCodeAt();
      if (ascii => 65 && ascii <= 90) {
        let newAscii = (ascii - 65 + offset) % 26 + 65;
        if(newAscii<65) {
          newAscii +=26;
        } else {
          Text = ' '
        }
        finalText += String.fromCharCode(newAscii);
      }
    }
    return finalText
  },
  decode: (texto, offset) => {
    let finalText = '';
    for (let i = 0; i < texto.length; i++) {
      let ascii = texto[i].charCodeAt();
      if (ascii => 65 && ascii <= 90) {
        let newAscii = (ascii - 65 - offset) % 26 + 65;
        if (newAscii < 65) {
          newAscii += 26;
        }
        finalText += String.fromCharCode(newAscii);
      }

    }
    return finalText
  }
}