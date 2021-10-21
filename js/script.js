
//RADIOLOGIA
let radiologia = [
{
    HORA: "11:00",    
    ESPECIALISTA: "IGNACIO SCHULZ",
    PACIENTE: "FRANCISCA ROJAS",
    RUT: "9878782-1",
    PREVISION: "FONASA",
},
    {
    HORA: "11:30",    
    ESPECIALISTA: "FEDERICO SUBERCASEAUX",
    PACIENTE: "PAMELA ESTRADA",
    RUT: "15345241-3",
    PREVISION: "ISAPRE",
},
    {
    HORA: "15:00",
    ESPECIALISTA: "FERNANDO WURTHZ",
    PACIENTE: "ARMANDO LUNA",
    RUT: "16445345-9",
    PREVISION: "ISAPRE",
},
    {
    HORA: "15:30",
    ESPECIALISTA: "ANA MARIA GODOY",
    PACIENTE: "MANUEL GODOY",
    RUT: "17666419-0",
    PREVISION: "FONASA",
},
    {
    HORA: "16:00",
    ESPECIALISTA: "PATRICIA SUAZO",
    PACIENTE: "RAMON ULLOA",
    RUT: "14989389-K",
    PREVISION: "FONASA",
}
]

//TRAUMATOLOGIA
let traumatologia = [
    {
    HORA: "08:00",    
    ESPECIALISTA: "MARIA PAZ ALTUZARRA",
    PACIENTE: "PAULA SANCHEZ",
    RUT: "15554774-5",
    PREVISION: "FONASA",
},
    {
    HORA: "10:00",    
    ESPECIALISTA: "RAUL ARAYA",
    PACIENTE: "ANGÉLICA NAVAS",
    RUT: "15444147-9",
    PREVISION: "ISAPRE",
},
    {
    HORA: "10:30",
    ESPECIALISTA: "MARIA ARRIAGADA",
    PACIENTE: "ANA KLAPP",
    RUT: "17879423-9",
    PREVISION: "ISAPRE",
},
    {
    HORA: "11:00",
    ESPECIALISTA: "ALEJANDRO BADILLA",
    PACIENTE: "FELIPE MARDONES",
    RUT: "1547423-6",
    PREVISION: "ISAPRE",
},
    {
    HORA: "11:30",
    ESPECIALISTA: "CECILIA BUDNIK",
    PACIENTE: "DIEGO MARRE",
    RUT: "16554741-K",
    PREVISION: "FONASA",
},
    {
    HORA: "12:00",
    ESPECIALISTA: "ARTURO CAVAGNARO",
    PACIENTE: "CECILIA MENDEZ",
    RUT: "9747535-8",
    PREVISION: "ISAPRE",
},
    {
    HORA: "12:30",
    ESPECIALISTA: "ANDRES KANACRI",
    PACIENTE: "MARCIAL SUAZO",
    RUT: "11254785-5",
    PREVISION: "ISAPRE",
}
]

//DENTAL
let dental = [
    {
    HORA: "08:30",    
    ESPECIALISTA: "ANDREA ZUÑIGA",
    PACIENTE: "MARCELA RETAMAL",
    RUT: "11123425-6",
    PREVISION: "ISAPRE",
},
    {
    HORA: "11:00",    
    ESPECIALISTA: "MARIA PIA ZAÑARTU",
    PACIENTE: "ANGEL MUÑOZ",
    RUT: "9878789-2",
    PREVISION: "ISAPRE",
},
    {
    HORA: "11:30",
    ESPECIALISTA: "SCARLETT WITTING",
    PACIENTE: "MARIO KAST",
    RUT: "7998789-5",
    PREVISION: "FONASA",
},
    {
    HORA: "13:00",
    ESPECIALISTA: "FRANCISCO VON TEUBER",
    PACIENTE: "KARIN FERNANDEZ",
    RUT: "18887662-K",
    PREVISION: "FONASA",
},
    {
    HORA: "13:30",
    ESPECIALISTA: "EDUARDO VIÑUELA",
    PACIENTE: "HUGO SANCHEZ",
    RUT: "17665461-4",
    PREVISION: "FONASA",
},
    {
    HORA: "14:00",
    ESPECIALISTA: "RAQUEL VILLASECA",
    PACIENTE: "ANA SEPULVEDA",
    RUT: "14441281-0",
    PREVISION: "ISAPRE",
}
]

//RADIOLOGIA
mitabla1(radiologia)

let titulo1 = document.querySelector(".title1")

    titulo1.innerHTML = "RADIOLOGIA";

    function mitabla1(data) {
        let tabla = document.querySelector("#tabla1");
    
        let encabezado = 
                        `<tr>
                            <th>HORA</th>
                            <th>ESPECIALISTA</th>
                            <th>PACIENTE</th>
                            <th>RUT</th>
                            <th>PREVISION</th>
                        </tr>`
    
        tabla.innerHTML = encabezado;
    
        for(let i = 0; i < data.length; i++) {
            let fila = 
                        `<tr>
                            <td>${data[i].HORA}</td>
                            <td>${data[i].ESPECIALISTA}</td>
                            <td>${data[i].PACIENTE}</td>
                            <td>${data[i].RUT}</td>
                            <td>${data[i].PREVISION}</td>
                        </tr>`
           
            tabla.innerHTML += fila;
    }

    let texto = document.querySelector(".parrafo1")

        let pacientes = "Primera atención: " + `${data[0].PACIENTE}` + " - " + `${data[0].PREVISION}` + " | " + "Última atención: " +  `${data[4].PACIENTE}` + " - " + `${data[4].PREVISION}`

        texto.innerHTML = pacientes;
}

//TRAUMATOLOGIA
mitabla2(traumatologia)

let titulo2 = document.querySelector(".title2")

    titulo2.innerHTML = "TRAUMATOLOGIA";

    function mitabla2(data) {
        let tabla = document.querySelector("#tabla2");

        let encabezado = 
                        `<tr>
                            <th>HORA</th>
                            <th>ESPECIALISTA</th>
                            <th>PACIENTE</th>
                            <th>RUT</th>
                            <th>PREVISION</th>
                        </tr>`

        tabla.innerHTML = encabezado;

        for(let i = 0; i < data.length; i++) {
            let fila = 
                        `<tr>
                            <td>${data[i].HORA}</td>
                            <td>${data[i].ESPECIALISTA}</td>
                            <td>${data[i].PACIENTE}</td>
                            <td>${data[i].RUT}</td>
                            <td>${data[i].PREVISION}</td>
                        </tr>`
        
            tabla.innerHTML += fila;
        }

        let texto = document.querySelector(".parrafo2")

            let pacientes = "Primera atención: " + `${data[0].PACIENTE}` + " - " + `${data[0].PREVISION}` + " | " + "Última atención: " +  `${data[6].PACIENTE}` + " - " + `${data[6].PREVISION}`

            texto.innerHTML = pacientes;
    }

//DENTAL
mitabla3(dental)

let titulo3 = document.querySelector(".title3")

    titulo3.innerHTML = "DENTAL";

    function mitabla3(data) {
        let tabla = document.querySelector("#tabla3");

        let encabezado = 
                        `<tr>
                            <th>HORA</th>
                            <th>ESPECIALISTA</th>
                            <th>PACIENTE</th>
                            <th>RUT</th>
                            <th>PREVISION</th>
                        </tr>`

        tabla.innerHTML = encabezado;

        for(let i = 0; i < data.length; i++) {
            let fila = 
                        `<tr>
                            <td>${data[i].HORA}</td>
                            <td>${data[i].ESPECIALISTA}</td>
                            <td>${data[i].PACIENTE}</td>
                            <td>${data[i].RUT}</td>
                            <td>${data[i].PREVISION}</td>
                        </tr>`
        
            tabla.innerHTML += fila;
        }

        let texto = document.querySelector(".parrafo3")

            let pacientes = "Primera atención: " + `${data[0].PACIENTE}` + " - " + `${data[0].PREVISION}` + " | " + "Última atención: " +  `${data[5].PACIENTE}` + " - " + `${data[5].PREVISION}`

            texto.innerHTML = pacientes;
    }

  