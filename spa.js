let container = document.getElementById("container");

function clearContainer(){
    container.innerHTML = "";
}

function characterPage(){
    clearContainer();
    container.innerHTML += `
    <h1>${stats.hero_name}</h1>
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


function adventurePage(){
    clearContainer();
    container.innerHTML +=`
    <button onclick="easyAdventure()">School (easy)</button>
    <button>Supermarket (medium)</button>
    <button>Hood (impossible)</button>
    `
}


function easyAdventure(){
    container.innerHTML = `<h2>Harmless nigger appeared</h2>
    `
    fight(trapper)
}

function fight(enemy){
    let playerRound = false;
    
    let damage = 5;
    while(enemy.hp > 0 && stats.hp > 0){
if (playerRound){
    damage = Math.floor(Math.random()*stats.damage.max) + stats.damage.min 
    enemy.hp -= damage
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
        container.innerHTML += `<strong>YOU GET GANG-BANGED BY ${enemy.name}!!!44!!4!4!!!!4!!!!</strong>`
    }
    else{
        container.innerHTML += `<strong>CONGRATULATIONS! YOU KILLED ${enemy.name}</strong>`
        
    }
 
}