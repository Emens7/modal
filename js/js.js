const buttons = document.querySelectorAll('.button');

const redButton = document.querySelectorAll('.modal-button-red');

const greenButton = document.querySelectorAll('.modal-button-green');



for (let i = 0; i < buttons.length; i++) {

    buttons[i].onclick = (event) => {
        let buttonId = event.target.getAttribute('id');
        document.querySelector('#modal-container').setAttribute('class', buttonId);
        document.querySelector('body').classList.add('modal-active');
    };

}

document.querySelector('#modal-container').onclick = () => {
    document.querySelector("#modal-container").classList.add('out');
    document.querySelector('body').classList.remove('modal-active');
};

