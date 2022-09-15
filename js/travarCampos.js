//Adicionar Serviços
function adicionarItemUm() {
	document.getElementById("paragrafoUm").innerHTML = "Corte R$ 10,00";
};
function adicionarItemDois() {
	document.getElementById("paragrafoDois").innerHTML = "Sobrancelha R$ 15,00";
};
function adicionarItemTres() {
	document.getElementById("paragrafoTres").innerHTML = "Unhas R$ 29,00";
};
//Remover Serviços adicionados
function removerItemUm() {
	document.getElementById("paragrafoUm").innerHTML = " ";
};
function removerItemDois() {
	document.getElementById("paragrafoDois").innerHTML = " ";
};
function removerItemTres() {
	document.getElementById("paragrafoTres").innerHTML = " ";
};

// Enviar Mensagem ao WhatsApp do Prestador
function mandarWhatsApp() {
	// Incluindo os Serviços na mensagem WhatsApp INICIO \\
	let Serviço1 = document.getElementById("paragrafoUm").innerHTML;
	let Serviço2 = document.getElementById("paragrafoDois").innerHTML;
	let Serviço3 = document.getElementById("paragrafoTres").innerHTML;
	// Incluindo os Serviços na mensagem WhatsApp FINAL \\

	// Informações do Usuário INICIO \\
	let nome = document.getElementById("nome").value;
	let email = document.getElementById("email").value;
	let WhatsApp = document.getElementById("WhatsApp").value;
	// Informações do Usuário FINAL \\

	// Mensagem do WhatsApp Para o Cliente INICIO \\
	let abrirWhats = window.open(`https://wa.me/5515991180605?text=Ol%C3%A1%20sou%20${nome}%20e%20agendei%20esses%20servi%C3%A7os%20em%20seu%20site%3A%20(${Serviço1},%20${Serviço2},%20${Serviço3},%20)%3B%20Esse%20%C3%A9%20meu%20WhatsApp%20e%20E-mail%20para%20Contato%3A%20(${WhatsApp})%20e%20(${email}).%20Obrigado(a)`, '_blank');
	// Mensagem do WhatsApp Para o Cliente FINAL \\
};

//Apenas Números no Input//

function apenasNumeros(e) {
	let theEvent = e || window.event;
	let key = theEvent.keyCode || theEvent.which;
	key = String.fromCharCode(key);
	//let regex = /^[0-9.,]+$/;
	let regex = /^[0-9.]+$/;
	if (!regex.test(key)) {
		theEvent.returnValue = false;
		if (theEvent.preventDefault) theEvent.preventDefault();
	}
};
//Validar Campos
const form = document.getElementById("form-contato");

if (form.addEventListener) {
	form.addEventListener("submit", validaCadastro);
} else if (form.attachEvent) {
	form.attachEvent("onsubmit", validaCadastro);
};

function validaCadastro(evt) {
	let nome = document.getElementById('nome');
	let email = document.getElementById('email');
	let WhatsApp = document.getElementById('WhatsApp');
	let filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	let fWhatsApp = /\d\d\d\d\d\d\d\d\d\d\d\d\d/;
	let contErro = 0;


	/* Validação do campo nome */
	caixa_nome = document.querySelector('.msg-nome');
	if (nome.value == "") {
		caixa_nome.innerHTML = "Por Favor! preencha o Nome";
		caixa_nome.style.display = 'block';
		contErro += 1;
	} else {
		caixa_nome.style.display = 'none';
	}

	/* Validação do campo email */
	caixa_email = document.querySelector('.msg-email');
	if (email.value == "") {
		caixa_email.innerHTML = "Por Favor! preencha o E-mail";
		caixa_email.style.display = 'block';
		contErro += 1;
	} else if (filtro.test(email.value)) {
		caixa_email.style.display = 'none';
	} else {
		caixa_email.innerHTML = "Formato do E-mail inválido";
		caixa_email.style.display = 'block';
		contErro += 1;
	}

	/* Validação do campo WhatsApp */
	caixa_WhatsApp = document.querySelector('.msg-WhatsApp');
	if (WhatsApp.value == "") {
		caixa_WhatsApp.innerHTML = "Por Favor! Informar seu WhatsApp";
		caixa_WhatsApp.style.display = 'block';
		contErro += 1;
	} else if (fWhatsApp.test(WhatsApp.value)) {
		caixa_WhatsApp.style.display = mandarWhatsApp();
	} else {
		caixa_WhatsApp.innerHTML = "Formato do WhatsApp inválido. Verifique se informou o 55 e o DDD";
		caixa_WhatsApp.style.display = 'block';
		contErro += 1;
	}

	if (contErro > 0) {
		evt.preventDefault();
	}
};