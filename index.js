class Pet {
    constructor(name) {
        this.name = name;
        this.skin = "orangeCat.png"
        this.hunger = new Stat(5, 10, 3)
        this.health = new Stat(5, 10, 3)
        this.happiness = new Stat(5, 10, 3)
    }
}

class Stat {
    constructor(current, max, warning) {
        this.current = current;
        this.max = max;
        this.warning = warning;
    }
    addPoints(points) {
        this.current += points;
        if (this.current > this.max) this.current = this.max
    }
    minusPoints(points) {
        this.current -= points;
        if (this.current <= 0) {
            alert ("He deded.") 
        } else if (this.current < this.warning) {
            alert("Low!!")
        }
    }
}

const newPet = new Pet("Joe")
const petDisplay = document.createElement("img")
petDisplay.src = newPet.skin;
petDisplay.className = "pet";


const scene = document.getElementById("scene")
scene.append(petDisplay)

const hunger = document.getElementById("hunger")
hunger.style.width = `${newPet.hunger.current * 10}%`
const health = document.getElementById("health")
health.style.width = `${newPet.health.current * 10}%`
const happiness = document.getElementById("happiness")
happiness.style.width = `${newPet.happiness.current * 10}%`

class Task {
    constructor(name, icon, effect) {
        this.name = name;
        this.icon = icon;
        this.effect = effect;
    }
}

let task1 = new Task("Cook dinner", "apple.png", "hunger.addPoints(3)")
console.log(task1)

const bubble = document.createElement("div")
bubble.className = "bubble";
const bubbleImg = document.createElement("img")
bubbleImg.src = "bubble.png"
bubble.append(bubbleImg)
const icon = document.createElement("img")
icon.src = "apple.png"
bubble.append(icon)

scene.append(bubble)

function doThing() {
    newPet.hunger.addPoints(3)
    hunger.style.width = `${newPet.hunger.current * 10}%`
}

bubble.onclick = doThing;

// features:
// - new tasks to bubble and float 
// - clock
// - reminders
// - task list
// - hunger, health, happiness
// - hunger
// --- food (earned by...?)
// - health 
// --- proper sleep
// --- self care tasks
// --- clean up by doing 5 min of chores
// - happiness 
// --- productivity (task list)
// --- play (eventual mini games)
