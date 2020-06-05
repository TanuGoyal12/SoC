
function animatedForm() {
    var arrow = document.querySelectorAll(".fa-arrow-alt-circle-down");
    arrow.forEach(arrow => {
        arrow.addEventListener("click", () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;
            if (input.type === "text" && validateUser(input)) {
                nextSlide(parent, nextForm);
            }
            else if (input.type === "email" && validateEmail(input)) {
                nextSlide(parent, nextForm);
            }
            else if (input.type === 'password' && validateUser) {
                nextSlide(parent, nextForm);

            }
            else {

                parent.style.animation = "shake 0.5s ease";
            }
            parent.addEventListener('animationend', () => {
                parent.style.animation = "";

            })


        });


    });

}
function nextSlide(parent, nextForm) {


    parent.classList.add('innactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');

}
function validateUser(user) {
    if (user.value.length < 6) {
        // console.log('not enough characters')
        error('rgb(189,87,87)')
    }
    else {
        error('rgb(10, 203, 103)')
        return true;
    }

}

function validateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {

        error('rgb(10, 203, 103)')
        return true;
    }
    else {
        error('rgb(189,87,87)')
    }

}
function error(color) {
    document.body.style.background = color;
}
animatedForm();