let veja = document.getElementById('Veja')

function hotel (Nome, Quartos, Camas){
    this.Nome = '';
    this.Quartos = 10;
    this.Camas = 20;

    this.verifificardisponibilidade = function(){
        return this.Quartos - this.Camas;
    }
}
var dispHotel = new hotel('Vinicius', 1, 2 );

