let paymentForm = document.getElementById('paymentForm');

paymentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let todoBien = true;
    const form = e.target;




    let soloNumeros = /^[0-9]+$/;
    let revisarCvc = /^[0-9]{3,5}$/;
    let soloLetras = /^[a-zA-Z/s]+$/;


    if (form.card.value === "" || !soloNumeros.test(form.card.value)) {
        todoBien = false;
        form.card.style.backgroundColor = "#F8D7DA";
    }

    if (form.cvc.value === "" || !revisarCvc.test(form.cvc.value)) {
        todoBien = false;
        form.cvc.style.backgroundColor = "#F8D7DA";
    }
    if (form.amount.value === "" || !soloNumeros.test(form.amount.value)) {
        todoBien = false;
        form.amount.style.backgroundColor = "#F8D7DA";
    }

    if (form.firstname.value === "" || !soloLetras.test(form.firstname.value)) {
        todoBien = false;
        form.firstname.style.backgroundColor = "#F8D7DA";
    }

    if (form.lastname.value === "" || !soloLetras.test(form.lastname.value)) {
        todoBien = false;
        form.lastname.style.backgroundColor = "#F8D7DA";
    }

    if (form.city.value === "" || !soloLetras.test(form.city.value)) {
        todoBien = false;
        form.city.style.backgroundColor = "#F8D7DA";
    }

    if (form.state.value === "" || !soloLetras.test(form.state.value)) {
        todoBien = false;
        form.state.style.backgroundColor = "#F8D7DA";
    }

    if (form.postalcode.value === "" || !soloNumeros.test(form.postalcode.value)) {
        todoBien = false;
        form.postalcode.style.backgroundColor = "#F8D7DA";
    }
    
    if (form.floatingTextarea.value === "") {
        todoBien = false;
        form.floatingTextarea.style.backgroundColor = "#F8D7DA";
    }
    

    if (todoBien) {
        form.submit();
    } else if (!todoBien) {
        document.getElementById('alertmissinginfo').style.display = "block";
        



    }



    paymentForm.addEventListener('reset', (e) => {
        const form = e.target;
        alertmissinginfo = document.getElementById('alertmissinginfo').style.display = "none";
        if (form.card.value === "") {
            form.card.style.backgroundColor = "#FFFFFF";
        }
        if (form.cvc.value === "") {
            form.cvc.style.backgroundColor = "#FFFFFF";
        } 
        if (form.amount.value === "") {
            form.amount.style.backgroundColor = "#FFFFFF";
        } if (form.firstname.value === "") {
            form.firstname.style.backgroundColor = "#FFFFFF";
        } if (form.lastname.value === "") {
            form.lastname.style.backgroundColor = "#FFFFFF";
        } if (form.city.value === "") {
            form.city.style.backgroundColor = "#FFFFFF";
        } if (form.state.value === "") {
            form.state.style.backgroundColor = "#FFFFFF";
        }
        if (form.postalcode.value === "") {
            form.postalcode.style.backgroundColor = "#FFFFFF";
        }
        if (form.floatingTextarea.value === "") {
            form.floatingTextarea.style.backgroundColor = "#FFFFFF";
        }

    })
});
alertmissinginfo = document.getElementById('alertmissinginfo').style.display = "none";
