function Valoration() {

    var valorationnumber = document.getElementById("valornumber").value;
    alert("Has valorado con "+valorationnumber+" puntos");
    }

function accdetails() {
    var country = document.getElementById("countryid").value; // se podría tambien añadir ES directamente, pero prefiero declararlo para posibles cambios futuros del formulario
    var iban = document.getElementById("ibanid").value;
    var entity = document.getElementById("entityid").value
    var sucursal = document.getElementById("sucursalid").value
    var dc = document.getElementById("dcid").value
    var account = document.getElementbyID("accountid").value
    alert("Le informamos que su cuenta bancaria es: " + country + iban + "-" + entity + "-" + sucursal + "-" + dc + "-" + account);
    }

function weekday() {
    const days= [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado"
    ];
    var dayent = document.getElementById("dayentered").value

    const day = new Date(dayent).getDay;
    const dayweek = days[day]

    alert("La fecha seleccionada en el elemento de fecha es un " + dayweek);
}

function validationcode() {
var provincia = {
        "01": "Alava",
        "02": "Albacete",
        "03": "Alicante",
        "04": "Almeria",
        "05": "Avila",
        "06": "Badajoz",
        "07": "Islas Baleares",
        "08": "Barcelona",
        "09": "Burgos",
        "10": "Caceres",
        "11": "Cadiz",
        "12": "Castellon",
        "13": "Ciudad Real",
        "14": "Cordoba",
        "15": "La Coruna",
        "16": "Cuenca",
        "17": "Gerona",
        "18": "Granada",
        "19": "Guadalajara",
        "20": "Guipuzcoa",
        "21": "Huelva",
        "22": "Huesca",
        "23": "Jaen",
        "24": "Leon",
        "25": "Lerida",
        "26": "La Rioja",
        "27": "Lugo",
        "28": "Madrid",
        "29": "Malaga",
        "30": "Murcia",
        "31": "Navarra",
        "32": "Orense",
        "33": "Asturias",
        "34": "Palencia",
        "35": "Las Palmas",
        "36": "Pontevedra",
        "37": "Salamanca",
        "38": "Santa Cruz de Tenerife",
        "39": "Cantabria",
        "40": "Segovia",
        "41": "Sevilla",
        "42": "Soria",
        "43": "Tarragona",
        "44": "Teruel",
        "45": "Toledo",
        "46": "Valencia",
        "47": "Valladolid",
        "48": "Vizcaya",
        "49": "Zamora",
        "50": "Zaragoza",
        "51": "Ceuta",
        "52": "Melilla"
        }

        
        var postalcode = document.getElementById("postal").value;   
        var shortpostal = postalcode.substring(0,2)
        var givencity = document.getElementById("localidad").value
        var expectedcity = provincia[shortpostal]
        var validok = document.getElementById("validationok")
        var validnotok = document.getElementById("validationnotok")


        if (postalcode == "") {
            validnotok.classList.remove("hidetext")
            window.alert("El codigo postal no puede estar vacio")
        }
        else if(postalcode.length !== 5) { 
            validnotok.classList.remove("hidetext")
        window.alert("El codigo postal debe contener 5 characters"); 
        }

        else if (isNaN(Number(postalcode) )) {
            validnotok.classList.remove("hidetext")
        window.alert("El codigo postal solamente debe contener numeros")
        }

        else if( expectedcity != givencity) {
            validnotok.classList.remove("hidetext")
                window.alert("La provincia no es correcta")
            }
        else {
            validok.classList.remove("hidetext")
            validnotok.classList.add("hidetext")
                window.alert("Validación aprobada")
            }


        }

document.getElementById("telefonica").addEventListener("submit", function(event) {
event.preventDefault()
validationcode()

    })

