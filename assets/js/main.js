
planCPmc = document.getElementById('planCPmc');
planCBm180 = document.getElementById('planCBm180');
planCBm200 = document.getElementById('planCBm200');
planCBm400 = document.getElementById('planCBm400');
planCBm500 = document.getElementById('planCBm500');

planNPmc = document.getElementById('planNPmc');
planNBm180 = document.getElementById('planNBm180');
planNBm200 = document.getElementById('planNBm200');
planNBm400 = document.getElementById('planNBm400');
planNBm500 = document.getElementById('planNBm500');

planOPmc = document.getElementById('planOPmc');
planOBm180 = document.getElementById('planOBm180');
planOBm200 = document.getElementById('planOBm200');
planOBm400 = document.getElementById('planOBm400');
planOBm500 = document.getElementById('planOBm500');

planSPmc = document.getElementById('planSPmc');
planSBm180 = document.getElementById('planSBm180');
planSBm200 = document.getElementById('planSBm200');
planSBm400 = document.getElementById('planSBm400');
planSBm500 = document.getElementById('planSBm500');


function anteriorCaba(){

    if(planCPmc.style.display == "block"){
        planCPmc.style.display = 'block';
        planCBm180.style.display = 'none';
        planCBm200.style.display = 'none';
        planCBm400.style.display = 'none';
        planCBm500.style.display = 'none';
    }else if(planCBm180.style.display == "block"){
        planCPmc.style.display = 'block';
        planCBm180.style.display = 'none';
        planCBm200.style.display = 'none';
        planCBm400.style.display = 'none';
        planCBm500.style.display = 'none';
    }else if(planCBm200.style.display == "block"){
        planCPmc.style.display = 'none';
        planCBm180.style.display = 'block';
        planCBm200.style.display = 'none';
        planCBm400.style.display = 'none';
        planCBm500.style.display = 'none';
    }else if(planCBm400.style.display == "block"){
        planCPmc.style.display = 'none';
        planCBm180.style.display = 'none';
        planCBm200.style.display = 'block';
        planCBm400.style.display = 'none';
        planCBm500.style.display = 'none';
    }else if(planCBm500.style.display == "block"){
        planCPmc.style.display = 'none';
        planCBm180.style.display = 'none';
        planCBm200.style.display = 'none';
        planCBm400.style.display = 'block';
        planCBm500.style.display = 'none';
    }
}
function siguienteCaba(){
    
    if(planCPmc.style.display == "block"){
        planCPmc.style.display = 'none';
        planCBm180.style.display = 'block';
        planCBm200.style.display = 'none';
        planCBm400.style.display = 'none';
        planCBm500.style.display = 'none';
    }else if(planCBm180.style.display == "block"){
        planCPmc.style.display = 'none';
        planCBm180.style.display = 'none';
        planCBm200.style.display = 'block';
        planCBm400.style.display = 'none';
        planCBm500.style.display = 'none';
    }else if(planCBm200.style.display == "block"){
        planCPmc.style.display = 'none';
        planCBm180.style.display = 'none';
        planCBm200.style.display = 'none';
        planCBm400.style.display = 'block';
        planCBm500.style.display = 'none';
    }else if(planCBm400.style.display == "block"){
        planCPmc.style.display = 'none';
        planCBm180.style.display = 'none';
        planCBm200.style.display = 'none';
        planCBm400.style.display = 'none';
        planCBm500.style.display = 'block';
    }else if(planCBm500.style.display == "block"){
        planCPmc.style.display = 'none';
        planCBm180.style.display = 'none';
        planCBm200.style.display = 'none';
        planCBm400.style.display = 'none';
        planCBm500.style.display = 'block';
    }
}

function anteriorNorte(){

    if(planNPmc.style.display == "block"){
        planNPmc.style.display = 'block';
        planNBm180.style.display = 'none';
        planNBm200.style.display = 'none';
        planNBm400.style.display = 'none';
        planNBm500.style.display = 'none';
    }else if(planNBm180.style.display == "block"){
        planNPmc.style.display = 'block';
        planNBm180.style.display = 'none';
        planNBm200.style.display = 'none';
        planNBm400.style.display = 'none';
        planNBm500.style.display = 'none';
    }else if(planNBm200.style.display == "block"){
        planNPmc.style.display = 'none';
        planNBm180.style.display = 'block';
        planNBm200.style.display = 'none';
        planNBm400.style.display = 'none';
        planNBm500.style.display = 'none';
    }else if(planNBm400.style.display == "block"){
        planNPmc.style.display = 'none';
        planNBm180.style.display = 'none';
        planNBm200.style.display = 'block';
        planNBm400.style.display = 'none';
        planNBm500.style.display = 'none';
    }else if(planNBm500.style.display == "block"){
        planNPmc.style.display = 'none';
        planNBm180.style.display = 'none';
        planNBm200.style.display = 'none';
        planNBm400.style.display = 'block';
        planNBm500.style.display = 'none';

}
 }
function siguienteNorte(){
    if(planNPmc.style.display == "block"){
        planNPmc.style.display = 'none';
        planNBm180.style.display = 'block';
        planNBm200.style.display = 'none';
        planNBm400.style.display = 'none';
        planNBm500.style.display = 'none';
    }else if(planNBm180.style.display == "block"){
        planNPmc.style.display = 'none';
        planNBm180.style.display = 'none';
        planNBm200.style.display = 'block';
        planNBm400.style.display = 'none';
        planNBm500.style.display = 'none';
    }else if(planNBm200.style.display == "block"){
        planNPmc.style.display = 'none';
        planNBm180.style.display = 'none';
        planNBm200.style.display = 'none';
        planNBm400.style.display = 'block';
        planNBm500.style.display = 'none';
    }else if(planNBm400.style.display == "block"){
        planNPmc.style.display = 'none';
        planNBm180.style.display = 'none';
        planNBm200.style.display = 'none';
        planNBm400.style.display = 'none';
        planNBm500.style.display = 'block';
    }else if(planNBm500.style.display == "block"){
        planNPmc.style.display = 'none';
        planNBm180.style.display = 'none';
        planNBm200.style.display = 'none';
        planNBm400.style.display = 'none';
        planNBm500.style.display = 'block';
    }
}

function anteriorOeste(){

    if(planOPmc.style.display == "block"){
        planOPmc.style.display = 'block';
        planOBm180.style.display = 'none';
        planOBm200.style.display = 'none';
        planOBm400.style.display = 'none';
        planOBm500.style.display = 'none';
    }else if(planOBm180.style.display == "block"){
        planOPmc.style.display = 'block';
        planOBm180.style.display = 'none';
        planOBm200.style.display = 'none';
        planOBm400.style.display = 'none';
        planOBm500.style.display = 'none';
    }else if(planOBm200.style.display == "block"){
        planOPmc.style.display = 'none';
        planOBm180.style.display = 'block';
        planOBm200.style.display = 'none';
        planOBm400.style.display = 'none';
        planOBm500.style.display = 'none';
    }else if(planOBm400.style.display == "block"){
        planOPmc.style.display = 'none';
        planOBm180.style.display = 'none';
        planOBm200.style.display = 'block';
        planOBm400.style.display = 'none';
        planOBm500.style.display = 'none';
    }else if(planOBm500.style.display == "block"){
        planOPmc.style.display = 'none';
        planOBm180.style.display = 'none';
        planOBm200.style.display = 'none';
        planOBm400.style.display = 'block';
        planOBm500.style.display = 'none';

}
 }
function siguienteOeste(){
    if(planOPmc.style.display == "block"){
        planOPmc.style.display = 'none';
        planOBm180.style.display = 'block';
        planOBm200.style.display = 'none';
        planOBm400.style.display = 'none';
        planOBm500.style.display = 'none';
    }else if(planOBm180.style.display == "block"){
        planOPmc.style.display = 'none';
        planOBm180.style.display = 'none';
        planOBm200.style.display = 'block';
        planOBm400.style.display = 'none';
        planOBm500.style.display = 'none';
    }else if(planOBm200.style.display == "block"){
        planOPmc.style.display = 'none';
        planOBm180.style.display = 'none';
        planOBm200.style.display = 'none';
        planOBm400.style.display = 'block';
        planOBm500.style.display = 'none';
    }else if(planOBm400.style.display == "block"){
        planOPmc.style.display = 'none';
        planOBm180.style.display = 'none';
        planOBm200.style.display = 'none';
        planOBm400.style.display = 'none';
        planOBm500.style.display = 'block';
    }else if(planOBm500.style.display == "block"){
        planOPmc.style.display = 'none';
        planOBm180.style.display = 'none';
        planOBm200.style.display = 'none';
        planOBm400.style.display = 'none';
        planOBm500.style.display = 'block';
    }
}

function anteriorSur(){

    if(planSPmc.style.display == "block"){
        planSPmc.style.display = 'block';
        planSBm180.style.display = 'none';
        planSBm200.style.display = 'none';
        planSBm400.style.display = 'none';
        planSBm500.style.display = 'none';
    }else if(planSBm180.style.display == "block"){
        planSPmc.style.display = 'block';
        planSBm180.style.display = 'none';
        planSBm200.style.display = 'none';
        planSBm400.style.display = 'none';
        planSBm500.style.display = 'none';
    }else if(planSBm200.style.display == "block"){
        planSPmc.style.display = 'none';
        planSBm180.style.display = 'block';
        planSBm200.style.display = 'none';
        planSBm400.style.display = 'none';
        planSBm500.style.display = 'none';
    }else if(planSBm400.style.display == "block"){
        planSPmc.style.display = 'none';
        planSBm180.style.display = 'none';
        planSBm200.style.display = 'block';
        planSBm400.style.display = 'none';
        planSBm500.style.display = 'none';
    }else if(planSBm500.style.display == "block"){
        planSPmc.style.display = 'none';
        planSBm180.style.display = 'none';
        planSBm200.style.display = 'none';
        planSBm400.style.display = 'block';
        planSBm500.style.display = 'none';

}
 }
function siguienteSur(){
    if(planSPmc.style.display == "block"){
        planSPmc.style.display = 'none';
        planSBm180.style.display = 'block';
        planSBm200.style.display = 'none';
        planSBm400.style.display = 'none';
        planSBm500.style.display = 'none';
    }else if(planSBm180.style.display == "block"){
        planSPmc.style.display = 'none';
        planSBm180.style.display = 'none';
        planSBm200.style.display = 'block';
        planSBm400.style.display = 'none';
        planSBm500.style.display = 'none';
    }else if(planSBm200.style.display == "block"){
        planSPmc.style.display = 'none';
        planSBm180.style.display = 'none';
        planSBm200.style.display = 'none';
        planSBm400.style.display = 'block';
        planSBm500.style.display = 'none';
    }else if(planSBm400.style.display == "block"){
        planSPmc.style.display = 'none';
        planSBm180.style.display = 'none';
        planSBm200.style.display = 'none';
        planSBm400.style.display = 'none';
        planSBm500.style.display = 'block';
    }else if(planSBm500.style.display == "block"){
        planSPmc.style.display = 'none';
        planSBm180.style.display = 'none';
        planSBm200.style.display = 'none';
        planSBm400.style.display = 'none';
        planSBm500.style.display = 'block';
    }
 }