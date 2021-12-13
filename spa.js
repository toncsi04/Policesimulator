let container = document.getElementById("container");
let kep=1
function clearContainer(){
    container.innerHTML = "";
}

function characterPage(){
    clearContainer();
    container.innerHTML += `
    <h1 class="hero">${stats.hero_name}</h1>
    <img class="kep" src="${kep}.jpg" alt="">
    <div class="outerHP">
        <div class="innerHP" id="HP"></div>
        <span id="HPnum">${stats.hp}/${stats.max_hp}</span>
    </div>
    <table>
        <tr>
            <th>Strength</th>
            <td>${stats.strength}</td>
            <td>
                <button class="addPoint" onclick="addPoint('strength')">
                +
                </button>
            </td>
        </tr>
        <tr>
            <th>Agility</th>
            <td>${stats.agility}</td>
            <td>
                <button class="addPoint" onclick="addPoint('agility')">
                +
                </button>
            </td>
        </tr>
        <tr>
            <th>Damage</th>
            <td>${stats.damage.min + stats.strength} - ${stats.damage.max + stats.strength}</td>
            <td>
            </td>
        </tr>
        <tr>
            <th>Defense</th>
            <td>${stats.defense}</td>
            <td>
                <button class="addPoint" onclick="addPoint('defense')">
                +
                </button>
            </td>
        </tr>
    </table>
    `
    if (stats.hp > stats.max_hp) {
        stats.hp = stats.max_hp;
      }
    
    
    let addbuttons = document.getElementsByClassName('addPoint')
    if(stats.skill_points > 0){
        for(let i=0; i < addbuttons.length; i++){
            addbuttons[i].style.display = "block";
        }
    } 

    let hp = document.getElementById("HP")
    hp.style.width = (stats.hp / stats.max_hp) * 100 + "%";
}

function addPoint(ctx){
    stats[ctx]++
    stats.skill_points--
    characterPage()
}

characterPage();

function patchPage(){
    clearContainer();
    container.innerHTML +=`
    <h1>Newest Patch: Added patch notes and the Hood</h1>
    `
}
patchPage();



function adventurePage(){
    clearContainer();
    container.innerHTML +=`
    <button onclick="easyAdventure()">School (easy)</button>
    <button onclick="mediumAdventure()">Supermarket (medium)</button>
    <button onclick="hardAdventure()">Hood (impossible)</button>
    `
}


function easyAdventure(){
    container.innerHTML = `<h2>Harmless nigger appeared</h2>
    `
    fight(trapper)
}

function mediumAdventure(){
    container.innerHTML = `<h2>Thief nigger appeared</h2>
    `
    fight(trapper2)
}

function hardAdventure(){
    container.innerHTML = `<h2>Gangster nigger appeared</h2>
    `
    fight(trapper3)
}

function fight(enemy){
    let playerRound = false;
    
    let damage = 5;
    while(enemy.hp > 0 && stats.hp > 0){
if (playerRound){
    damage = Math.floor(Math.random()*stats.damage.max) + stats.damage.min 
    enemy.hp -= damage
    if (stats.hp > stats.max_hp) {
        stats.hp = stats.max_hp;
      }
    
    container.innerHTML += `<p>You attacked ${enemy.name}!  You dealt ${damage} damage</p>`
}
else{
    damage = Math.floor(Math.random()*enemy.damage.max) + enemy.damage.min
    stats.hp -= damage
    container.innerHTML += `<p>You recived ${damage} damage from ${enemy.name}!</p>`
}
playerRound =!playerRound
    }
    if(stats.hp <= 0){
        container.innerHTML += `<strong>YOU GET KILLED BY ${enemy.name}!!!</strong>`
    }
    else{
        container.innerHTML += `<strong>CONGRATULATIONS! YOU KILLED ${enemy.name}</strong>`
        
    }
 
}