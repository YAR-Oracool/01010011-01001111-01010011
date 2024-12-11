class item {
    constructor(name, have, pic){
        const Name = name;
        let Obtained = have;
        const Pic = "../Images/Items/" + pic + ".webp";
    }
}

class Sector{
    constructor(name, num, alt, des){
        this.alt = alt;
        this.name = name;
        this.num = num;
        this.des = des;
        this.pic = "../Images/"+ this.num + ".webp";
        this.indexX = this.num%10;
        this.indexY = this.num/10;
    }
     summon(){
        document.getElementById('scenery').src= this.pic;
        document.getElementById('scenery').alt= this.alt;
        document.getElementById('Title').innerText = this.name;
        document.getElementById('Description').innerText= this.des;
    }
}

function reset(){
    document.getElementById("everything").innerHTML="";
}

function createVisual(){
    //Create the visual section
    const Visuals = document.createElement("div");
    Visuals.id = "Visuals";
    document.getElementById('everything').appendChild(Visuals);
    //Create image in visuals
    const Image = document.createElement("img");
    Image.id = "scenery";
    document.getElementById('Visuals').appendChild(Image);
}

function createContent(){
    //Create the Content section
    const Content = document.createElement("div");
    Content.id = "Content";
    document.getElementById('everything').appendChild(Content);
    //Create Description Section
    const Description = document.createElement("div");
    Description.id = "Description";
    document.getElementById('Content').appendChild(Description);
    //Create Movement section
    const Movement = document.createElement("div");
    Movement.id = "Movement";
    document.getElementById('Content').appendChild(Movement);
    //Create Action section
    const Action = document.createElement("div");
    Action.id = "Action";
    document.getElementById('Content').appendChild(Action);
}

function createDescription(){
    //Create header2 Section
    const Title = document.createElement("h2");
    Title.id = "Title";
    document.getElementById('Description').appendChild(Title);
    //Create paragraph section
    const Text = document.createElement("p");
    Text.id = "Text";
    document.getElementById('Description').appendChild(Text);
}

function createMovement(){
    //Create move up button
    const Up = document.createElement("button");
    Up.id = "Up";
    Up.innerText="Move Up"
    Up.classList.add("Movement");
    Up.classList.add("Movement");
    document.getElementById('Movement').appendChild(Up);

    //Create midrow button section
    const MidRow = document.createElement("div");
    MidRow.id = "MidRow";
    document.getElementById('Movement').appendChild(MidRow);
    //Create move Left button
    const Left = document.createElement("button");
    Left.id = "Left";
    Left.innerText="Move Left"
    Left.classList.add("Movement");
    Left.classList.add("Active");
    document.getElementById('MidRow').appendChild(Left);
    //Create move Right button
    const Right = document.createElement("button");
    Right.id = "Right";
    Right.innerText="Move Right"
    Right.classList.add("Movement");
    Right.classList.add("Active");
    document.getElementById('MidRow').appendChild(Right);
    
    //Create move down button
    const Down = document.createElement("button");
    Down.id = "Down";
    Down.innerText="Move Down"
    Down.classList.add("Movement");
    Down.classList.add("Active");
    document.getElementById('Movement').appendChild(Down);
}

function createActions(){
    //Create Action Section
    const Actions = document.createElement("div");
    Actions.id = "Actions";
    document.getElementById('Content').appendChild(Actions);
    document.getElementById(Actions).innerText="awdadwad";
}

const tent = new Sector('Tent',11, 'A tent behind a campfire', 'Everything is dark. Even teh fire feels cold. What is left from this crooked world?');

function pageBuilder(){
    reset();
    createVisual();
    createContent();
    createDescription();
    createMovement();
    createActions();
}

window.onload = function (){
    pageBuilder();
    tent.summon();
}