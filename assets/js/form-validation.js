const Validator = {
    textMessage : 'Alphabets only',
    emailMessage : 'Invalid email format',
    text : function (input) {
        let pattern = /^[a-z]+$/i;
        return pattern.test(input);
    },
    email : function (input) {
        let pattern = /^[a-z][a-z0-9._]+@[a-z0-9-]{2,}\.[a-z]{2,10}$/i;
        return pattern.test(input);
    },
    digits : function (input) {
        let pattern = /^[0-9]+$/;
        return pattern.test(input);
    },
    cell : function (input) {
        let pattern = /^(\+989)[0-9]{9}$/;
        return pattern.test(input);
    },
    formValidator : function (formID) {
        let frm = document.querySelector('#'+formID);
        frm.onsubmit = function () {
            let items = frm.elements;
            let flag = 0;
            for (let i=0; i<items.length-3; i++){
                if( items[i].hasAttribute('data-validator') ){
                    let temp = items[i].getAttribute('data-validator');
                    if( !Validator[temp](items[i].value) ){
                        flag++;
                        document.querySelector('[data-error="' +items[i].id+ '"]').innerHTML = Validator[temp+'Message'];
                        items[i].style.borderColor = "red";

                    }else{
                        alert("message has been submitted! \n thanks for contacting me:)")
                    }
                }
            }
            if( flag != 0 ){
                return false;
            }
        }
    }
};