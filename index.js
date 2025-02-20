const ni=document.getElementById('neck');

const ti=document.getElementById('trunk');

const li=document.getElementById('leg');

const loi = document.getElementById('load');

const uai = document.getElementById('upper-arm');

const lai = document.getElementById('lower-arm');

const wi = document.getElementById('wrist');

const coi = document.getElementById('coupling');

const aci = document.getElementById('activity');

ni.oninput=function() {
    if(ni.validity.rangeOverflow){
        ni.setCustomValidity("Neck Score can't be more than 3.");
    }
    else if(ni.validity.rangeUnderflow){
        ni.setCustomValidity("Neck Score can't be less than 1.");
    }
    else{
        ni.setCustomValidity("");
    }
};

ti.oninput=function() {
    if(ti.validity.rangeOverflow){
        ti.setCustomValidity("Trunk Score can't be more than 5.");  
    }
    else if(ti.validity.rangeUnderflow){
        ti.setCustomValidity("Trunk Score  can't be less than 1.");
    }
    else{
        ti.setCustomValidity("");
    }
};

li.oninput=function() {
    if(li.validity.rangeOverflow){
        li.setCustomValidity("Leg Score can't be more than 4.");
    }
    else if(li.validity.rangeUnderflow){
        li.setCustomValidity("Leg Score can't be less than 1.");
    }
    else{
        li.setCustomValidity("");
    }
};

loi.oninput = function() {
    if (loi.validity.rangeOverflow) {
        loi.setCustomValidity("Load Score can't be more than 2.");
    } else if (loi.validity.rangeUnderflow) {
        loi.setCustomValidity("Load Score can't be less than 0.");
    } else {
        loi.setCustomValidity("");
    }
};

uai.oninput = function() {
    if (uai.validity.rangeOverflow) {
        uai.setCustomValidity("Upper Arm Score can't be more than 6.");
    } else if (uai.validity.rangeUnderflow) {
        uai.setCustomValidity("Upper Arm Score can't be less than 1.");
    } else {
        uai.setCustomValidity("");
    }
};

lai.oninput = function() {
    if (lai.validity.rangeOverflow) {
        lai.setCustomValidity("Lower Arm Score can't be more than 2.");

    } else if (lai.validity.rangeUnderflow) {
        lai.setCustomValidity("Lower Arm Score can't be less than 1.");
    } else {
        lai.setCustomValidity("");
    }
};

wi.oninput = function() {
    if (wi.validity.rangeOverflow) {
        wi.setCustomValidity("Wrist Score can't be more than 3.");

    } else if (wi.validity.rangeUnderflow) {
        wi.setCustomValidity("Wrist Score can't be less than 1.");

    } else {
        wi.setCustomValidity("");
    }
};

coi.oninput = function() {
    if (coi.validity.rangeOverflow) {
        coi.setCustomValidity("Coupling Score can't be more than 3.");
    } else if (coi.validity.rangeUnderflow) {
        coi.setCustomValidity("Coupling Score can't be less than 0.");
    } else {
        coi.setCustomValidity("");
    }
};

aci.oninput = function() {
    if (aci.validity.rangeOverflow) {
        aci.setCustomValidity("Activity Score can't be more than 3.");
    } else if (aci.validity.rangeUnderflow) {
        aci.setCustomValidity("Activity Score can't be less than 0.");
    } else {
        aci.setCustomValidity("");
    }
};

