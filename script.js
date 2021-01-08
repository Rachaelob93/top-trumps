const randomNumber = Math.floor(Math.random() * 100)
const randomNumber2 = Math.floor(Math.random() * 100)
const randomPokemon = fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
const randomPokemon2 = fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber2}`)
let player1Stat = document.querySelectorAll(".stat")[0].innerHTML;
let player2Stat = document.querySelectorAll(".stat")[1].innerHTML;
const card1 = document.querySelectorAll(".card1")[0]
const card2 = document.querySelectorAll(".card2")[0]
const stat = document.querySelectorAll(".stat")[0]


randomPokemon
.then((response) => response.json())
.then((abilities) => {
    document.querySelectorAll(".head")[0].innerHTML = abilities.name
    document.querySelectorAll(".stat1")[0].innerHTML = abilities.stats[0].base_stat
    document.querySelectorAll(".stat2")[0].innerHTML = abilities.stats[1].base_stat
    document.querySelectorAll(".stat3")[0].innerHTML = abilities.stats[2].base_stat
    document.querySelectorAll(".stat4")[0].innerHTML = abilities.stats[3].base_stat
    document.querySelectorAll(".stat5")[0].innerHTML = abilities.stats[4].base_stat

    document.querySelectorAll(".hp1")[0].value = abilities.stats[0].base_stat
    document.querySelectorAll(".attack")[0].value = abilities.stats[1].base_stat
    document.querySelectorAll(".defense")[0].value = abilities.stats[2].base_stat
    document.querySelectorAll(".spec-att")[0].value = abilities.stats[3].base_stat
    document.querySelectorAll(".spec-def")[0].value = abilities.stats[4].base_stat
})

randomPokemon2
.then((response) => response.json())
.then((abilities) => {
    document.querySelectorAll(".head")[1].innerHTML = abilities.name
    document.querySelectorAll(".stat1")[1].innerHTML = abilities.stats[0].base_stat
    document.querySelectorAll(".stat2")[1].innerHTML = abilities.stats[1].base_stat
    document.querySelectorAll(".stat3")[1].innerHTML = abilities.stats[2].base_stat
    document.querySelectorAll(".stat4")[1].innerHTML = abilities.stats[3].base_stat
    document.querySelectorAll(".stat5")[1].innerHTML = abilities.stats[4].base_stat

    document.querySelectorAll(".hp2")[0].value = abilities.stats[0].base_stat
    document.querySelectorAll(".attack2")[0].value = abilities.stats[1].base_stat
    document.querySelectorAll(".defense2")[0].value = abilities.stats[2].base_stat
    document.querySelectorAll(".spec-att2")[0].value = abilities.stats[3].base_stat
    document.querySelectorAll(".spec-def2")[0].value = abilities.stats[4].base_stat
});


function compareStats(selectedRadio) {

            //compare stats
            let selectedStat = selectedRadio.getAttribute('accesskey');
            let selectedStatValue = selectedRadio.value;
            
            //compare the stats
            let computerStat = document.querySelectorAll('[accesskey="'+selectedStat+'2"]')[0].value; // All with "property" set to "value" exactly.
            
            console.log(selectedStatValue + ' ----- ' + computerStat);           
            if (+selectedStatValue > +computerStat) {
                alert('player 1 wins');
            } else if (+selectedStatValue < +computerStat) {
                alert('computer wins');
            } else if (+selectedStatValue == +computerStat) {
                alert('draw');
            }

}

var rad = document.getElementsByTagName('input');
var prev = null;
for (var i = 0; i < rad.length; i++) {
    rad[i].addEventListener('change', function() {
        // alert(this.getAttribute('accesskey'));
        if (window.getComputedStyle(card2).display == "block") {

            //card2 is visible!
            compareStats(this);
            
        } else {
            //if it's not visible then show card 2
            card2.classList.toggle("hide");
            compareStats(this);
        }
    });
}


