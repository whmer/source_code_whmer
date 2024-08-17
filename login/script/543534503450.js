const div = document.querySelector('.hanime');
const valor_red = 'R$555,00';
const name_gree = 'Sanime Games';
div.innerHTML += `<span class="name-link">Bem vindo ao <span class="name-link" style="color:orange"> ${name_gree}</span>. </span>`;
div.innerHTML += `<span class="name-link"> Chame os amigos para jogar! Site oficial 👉 <span style="color:green; font-weight:600;">https://https://sanimegames.com</span> </span>`;
div.innerHTML += `<span class="name-link"> 🎁 Registre-se gratuitamente, sem necesssidade de depósito, receba <span class="name-link" style="color:red;">${valor_red}</span> de ouro </span>`;