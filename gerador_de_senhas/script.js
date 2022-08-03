function getPassword() {

    var chars = "";
    var numeros = "0123456789"
    var alfabeto = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ"
    var caracteres_especiais = "!@#$%^&*()+?><:{}[]"
    var passwordLength = document.getElementById("length").value;
    var checkbox1 = document.getElementById("n")
    var checkbox2 = document.getElementById("a")
    var checkbox3 = document.getElementById("geral")
    var password = "";

    if(checkbox3.checked) {
      chars = numeros+alfabeto+caracteres_especiais
  } 
    else if(checkbox2.checked){
      chars = alfabeto + numeros
    }
  
    else if (checkbox1.checked) {
      chars = numeros
  }

    else{
      window.alert("Escolha uma Opção");
    }



    for (var i = 0; i < passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);
    }
    document.getElementById('password').value = password

  }

