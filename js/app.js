let container=document.getElementById("seccion");

const comprarTicket=()=>{
    container.innerHTML=`
    <div class="container">
    <div class="row">
        <div class="col col-md-10 offset-md-1 col-lg-8 offset-lg-2 pt-2"> 
            <div class="card-group">
                <div class="card">
                    <div class="card-body border border-primary mr-1">
                        <h5 class="card-title text-center">Estudiantes </h5>
                        <p class="card-text text-center">Tienen un descuento </p>
                        <p class="card-title text-center font weght-bold">80% </p>
                        <p class="card-text text-center"> <small class="text-muted">* presentar documentacion</small></p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body border border-primary mr-1">
                        <h5 class="card-title text-center">Trainee </h5>
                        <p class="card-text text-center">Tienen un descuento </p>
                        <p class="card-title text-center font weght-bold">50% </p>
                        <p class="card-text text-center"> <small class="text-muted">* presentar documentacion</small></p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body border border-primary mr-1">
                        <h5 class="card-title text-center">Junior </h5>
                        <p class="card-text text-center">Tienen un descuento </p>
                        <p class="card-title text-center font weght-bold">15% </p>
                        <p class="card-text text-center"> <small class="text-muted">* presentar documentacion</small></p>
                    </div>
                </div>
            </div>
        </div>

    </div>
<div class="row">
    <div class="col text-uppercase text-center"> <small>venta</small> 
    <h2>valor de ticket $200</h2>
    </div>
</div>
<div class="row">
    <div class="col col-md-10 offset-md-1 col-lg-8 offset-lg-2 pt-2">
    <form id="formEntradas">
        <div class="form-row">
            <div class="d-flex">
                <div class="form-group col-6 col-md-6 m-1">
                <input type="text" class="form-control" placeholder="Nombre"/>
                </div>
                <div class="form-group col-6 col-md-6 m-1">
                <input type="text" class="form-control" placeholder="Apellido"/>
                </div>
            </div>
            <div class="form group col-12 col-md-12 m-1">
                <input type="email" class="form-control" placeholder="Correo"/>
            </div>
            <div class="d-flex">
                <div class="form-group col-6 col-md-6 m-1">
                    <label for="">Cantidad</label>
                    <input id="cantidadEntradas" type="text" class="form-control" placeholder=""/>
                </div>
                <div class="form-group col-6 col-md-6 m-1">
                    <label for="">Categoria</label>
                    <select class="form-select" id="inputSelect">
                    <option value="estudiante">Estudiante</option>
                    <option value="trainee">Trainee</option>
                    <option value="junior">Junior</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="form-row">
            <div class="alert alert-info" role="alert" id="totPagar">
                Total a pagar: $
            </div>
        </div>
        <div class="form-row d-flex">
            <input type="button" class="btn btn-lg btn-primary col-6 m-1" type="button" value="Borrar" onclick=limpiarForm()>
            <input type="button" class="btn btn-lg btn-primary col-6 m-1" type="button" value="Resumen" onclick=resumenCpra()>
        </div>
    </form>
    </div>
</div>
</div>
    `;
}

function resumenCpra(){
    let cantidad=document.getElementById("cantidadEntradas").value;
    let total=(cantidad*200);
    let categ=document.getElementById("inputSelect").value;
    let textoTotPagar= document.getElementById("totPagar").innerHTML;
    
    switch (categ) {
        case "estudiante":
           document.getElementById("totPagar").innerHTML = textoTotPagar + (total*0.20);
            break;
        case "trainee":
            document.getElementById("totPagar").innerHTML = textoTotPagar + (total*0.50);
            break;
        case "junior":
            document.getElementById("totPagar").innerHTML = textoTotPagar + (total*0.85);
            break;
        default:
          //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
          break;
      }

    }

function limpiarForm (){
    comprarTicket();
}

