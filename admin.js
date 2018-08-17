var huvudKat = "";
var produkter = "";
var underKat = "";
var userAdmin = "admin";
var passwordAdmin = "admin";

var addProduct
var deleteProduct
var showInfo

$(document).ready(function () {



    console.log(sessionStorage);

    if (sessionStorage.userIdAdmin == null) {
        console.log("vi är inte inloggade på admin")
        $('.admin').html("Var god logga in!");
        $(".adminMenu").hide(); 
        $("#loginAdmin").show(); 
        $("#logoutAdmin").hide(); 



    } else {
    
        visaAdminSidan();
    }


    //loginknapp
    $("#loginAdmin").click(function(){


        if ( $(".usernameAdmin").val() == userAdmin && $(".passAdmin").val() == passwordAdmin ) {
            console.log("Welcomet o the adminpage!");
            //Sparar användarens namn i sessionStorage
            sessionStorage.setItem("userIdAdmin", $(".usernameAdmin").val() );
            visaAdminSidan();

        } else {
            console.log("Wrong password");
            alert("Wrong password");
        }

    });


    //logoutknapp
    $("#logoutAdmin").click(function(){
        console.log("du är utloggad från admin");
        $('.admin').html("Du är nu utloggad!");
        $(".adminMenu").hide(); 
        $("#logoutAdmin").hide(); 
        $("#loginAdmin").show(); 
        $('.adminList').hide(); 
        sessionStorage.clear();           
    });



    function visaAdminSidan() {
        $('.admin').html("Välkommen till admin-sidan!");
        $(".adminMenu").show(); 
        $("#loginAdmin").hide(); 
        $("#logoutAdmin").show(); 
        $(".adminMenu").html(" "); 
        $('.adminMenu').append('<div class="nav navbar-nav"><ul><li class"adminMenu"><a href="index.html">Start</a></li><li onclick="visaKunder()" class"adminMenu"><a href="#">Kundlista</a></li><li class"adminMenu"><a href="#">Orderlista</a></li><li class"adminMenu"><a href="#">Epostlista</a></li></ul></div>');
        console.log("nu är vi inloggade")
        //visa menyn
        //appenda ut produkterna
    };

   
    //kundlista

    
    visaKunder = function() {
        console.log("printar ut lista på kunder");
        $('.adminList').show(); 
        $('.adminList').html(" ");

           
            fetch("kunder.json")
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                kundLista = data;

                $('.adminList').append("Våra kunder: ");


                for(i = 0; i < kundLista.length; i++) {

                    var kundId = (kundLista[i].id);
                    var kundEmail = (kundLista[i].email);
                    var printKundLista = "";
    
                    console.log(kundId);
        
                    var printKundLista = '<ul><li>' + kundId + '</li><li>' + kundEmail + '</li></ul>';
                    
                    $('.adminList').append(printKundLista);
                };
    


            });
        
    };



});