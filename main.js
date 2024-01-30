let influences = document.querySelector('.influences')
let expenses = document.querySelector('.expenses')
const btnInfuences = document.querySelector('.btnInfluences')
const btnExpenses = document.querySelector('.btnExpenses')
let balance = document.querySelector('.balance')
let sum = document.querySelector('.sum')
let item = document.querySelector('.item')

let walletStatus = 0

const walletUpdate = () => {
	balance.textContent = walletStatus
}

const walletAdd = () => {
	const add = parseFloat(sum.value) // Konwersja na liczbę
	const name = item.value
	if (!isNaN(add) && name.trim() !== '') {
		walletStatus += add
		walletUpdate()
		createElement(name, add, false) // Dodanie transakcji jako wpływ
		sum.value = ''
		item.value = ''
	} else {
		alert('Proszę wprowadzić prawidłową nazwę i wartość liczbową.')
	}
}

const walletRemove = () => {
	const add = parseFloat(sum.value) // Konwersja na liczbę
	const name = item.value
	if (!isNaN(add) && name.trim() !== '') {
		walletStatus -= add
		walletUpdate()
		createElement(name, add, true) // Dodanie transakcji jako wydatek
		sum.value = ''
		item.value = ''
	} else {
		alert('Proszę wprowadzić prawidłową nazwę i wartość liczbową.')
	}
}
function createElement(nameValue, sumValue, isExpense) {
	// Tworzenie nowego diva
	const newDiv = document.createElement('div')
	newDiv.classList.add('transaction')

	// Tworzenie i dodawanie nazwy
	const nameParagraph = document.createElement('p')
	nameParagraph.classList.add('title')
	nameParagraph.textContent = nameValue
	newDiv.appendChild(nameParagraph)

	// Tworzenie i dodawanie kwoty
	const sumParagraph = document.createElement('p')
	sumParagraph.classList.add('price')
	sumParagraph.textContent = sumValue
	newDiv.appendChild(sumParagraph)

	// Dodanie nowego diva do odpowiedniego kontenera
	if (isExpense) {
		expenses.appendChild(newDiv) // Jeśli to wydatek
	} else {
		influences.appendChild(newDiv) // Jeśli to wpływ
	}
}

walletUpdate()
btnInfuences.addEventListener('click', walletAdd)
btnExpenses.addEventListener('click', walletRemove)
