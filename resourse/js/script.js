
/* $('#click-me').click(function(){
    let val = 1;
    val = Math.floor(Math.random() * 8) + 1;

    switch(val) {
        case 1:
            console.log('こんにちは')
            $("#message").html("こんにちは")
            break
        case 2:
            console.log('你好')
            $("#message").html("你好")
            break
        case 3:
            console.log('ສະບາຍດີ')
            $("#message").html("ສະບາຍດີ")
            break
        case 4:
            console.log('안녕하세요')
            $("#message").html("안녕하세요")
            break
        case 5:
            console.log('Olá')
            $("#message").html("Olá")
            break
        case 6:
            console.log('Bonjour')
            $("#message").html("Bonjour")
            break
        case 7:
            console.log('Καλημέρα')
            $("#message").html("Καλημέρα")
            break
        case 8:
            console.log('สวัสดี')
            $("#message").html("สวัสดี")
            break
        default:
            console.log('#$%(*@+0')
            $("#message").html("#$%(*@+0")
            break
    };
});
*/

function clickMe() {
    let message = document.getElementById("message");

    let val = 1;
    val = Math.floor(Math.random() * 8) + 1;
    switch(val) {
        case 1:
            console.log('こんにちは')
            $("#message").html("こんにちは");
            break
        case 2:
            console.log('你好')
            $("#message").html("你好");
            break
        case 3:
            console.log('ສະບາຍດີ')
            $("#message").html("ສະບາຍດີ");
            break
        case 4:
            console.log('안녕하세요')
            $("#message").html("안녕하세요");
            break
        case 5:
            console.log('Olá')
            $("#message").html("Olá");
            break
        case 6:
            console.log('Bonjour')
            $("#message").html("Bonjour");
            break
        case 7:
            console.log('Καλημέρα')
            $("#message").html("Καλημέρα");
            break
        case 8:
            console.log('สวัสดี')
            $("#message").html("สวัสดี");
            break
        default:
            console.log('#$%(*@+0')
            $("#message").html("#$%(*@+0");
            break
    };
}

function myFunction() {
    let x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
    x.style.animation = "slideUp 0.2s";
  }
