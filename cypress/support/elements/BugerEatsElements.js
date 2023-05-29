export default class BugerEatsElements {
  
    btnHome = () => 'a[href="/deliver"]'
    inputName = () => ':nth-child(2) > :nth-child(2) > :nth-child(1) > input'
    inputCpf = () =>':nth-child(2) > :nth-child(2) > :nth-child(2) > input'
    inputEmail = () => ':nth-child(3) > :nth-child(1) > input'
    inputWhatsapp = () => ':nth-child(3) > :nth-child(2) > input'
    inputCep = () => 'input[name="postalcode"]'
    btnSearchCep = () => 'input[value="Buscar CEP"]'
    inputNumberPeople = () => ':nth-child(4) > :nth-child(1) > input'

    motocicly = () => '.delivery-method > :nth-child(1)'
    bicycle = () => '.delivery-method > :nth-child(2)'
    car = () => '.delivery-method > :nth-child(3)'

    cnh = () => 'input[accept^="image"]'

    btnSave = () => '.button-success'

    msgModal = () => '.swal2-html-container'

    btnClose = () => '.swal2-confirm'

    msgErrorName = () => ':nth-child(2) > :nth-child(2) > :nth-child(1) > .alert-error'
  }

