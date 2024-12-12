class Player{
    constructor(name, num){
        this.name = name;
        this.Y = num%10;
        this.X = (num - this.Y)/10;
        this.attempt = 0;
        this.Messeges = ["You look down from the edge at the abyss.", "This abyss used to be your home.", "The abyss smiles at you as you fall into nothingness."];
    }

    MoveUp(){
        if (this.Y > 0){
            this.Y--;
            this.attempt = 0;
            this.checkMove();
        }
        else{
            switch (this.attempt){
                case 0:
                    Error(this.Messeges[this.attempt]);
                    this.attempt++;
                    break;
                    
                case 1:
                    Error(this.Messeges[this.attempt]);
                    this.attempt++;
                    break;

                case 2:
                    Error(this.Messeges[this.attempt]);
                    setTimeout(this.kill, 3000);
                    break;
            }
        }
    }
    MoveDown(){
        if (this.Y < 1){
            this.Y++;
            this.checkMove();
        }
    }
    MoveLeft(){
        if (this.X > 0 ){
            this.X--;
            this.checkMove();
        }
    }
    MoveRight(){
        if (this.X < 1){
            this.X++;
            this.checkMove();
        }
    }

    checkMove(){
        //Check Y axis
        if (this.Y == 0){
            document.getElementById('Up').classList.add('Unavailable');
        }
        else
        {
            document.getElementById('Up').classList.remove('Unavailable');
        }
        if (this.Y == 1 ){
            document.getElementById('Down').classList.add('Unavailable');
        }
        else
        {
            document.getElementById('Down').classList.remove('Unavailable');
        }

        //Check X axis
        if (this.X == 1){
            document.getElementById('Right').classList.add('Unavailable');
        }
        else
        {
            document.getElementById('Right').classList.remove('Unavailable');
        }
        if (this.X == 0){
            document.getElementById('Left').classList.add('Unavailable');
        }
        else
        {
            document.getElementById('Left').classList.remove('Unavailable');
        }
    }

    kill(){
        window.location.href="Death.html" 
    }
}

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
        this.pic = "../Images/" + this.num + ".webp";
        this.indexX = this.num%10;
        this.indexY = this.num/10;
    }
    summon(){
        document.getElementById('scenery').src= this.pic;
        document.getElementById('scenery').alt= this.alt;
        document.getElementById('Title').innerText = this.name;
        document.getElementById('Text').innerText= this.des;
    }
}

function Error(Messege){
    document.getElementById('Alerts').classList.remove('Deactive');
    document.getElementById('Alerts').classList.add('Active');
    document.getElementById('Alerts').classList.add('Error');
    document.getElementById('Alerts').innerText=Messege;
    setTimeout(clearAlert, 3000);    
}

function clearAlert()
{
    document.getElementById('Alerts').classList.remove('Active');
    document.getElementById('Alerts').classList.remove('Error');
    document.getElementById('Alerts').classList.remove('Quest');
    document.getElementById('Alerts').classList.remove('Complete');
    document.getElementById('Alerts').classList.add('Deactive');
}

function Warn(choice){
    console.log('Checking')
    document.getElementById('Warning').classList.remove('Dective');
    document.getElementById('Warning').classList.add('Active');
    document.getElementById('Warning').classList.add('Error');
    document.getElementById('Warning').classList.add('Warning');
    document.getElementById('agree').addEventListener('click', function(){
    document.getElementById('Warning').classList.add('Deactive');
    document.getElementById('Warning').classList.remove('Active');
    document.getElementById('Warning').classList.remove('Error');
    document.getElementById('Warning').classList.remove('Warning');
    console.log('selecttrue')
        switch (choice){
            case 0:
                window.location.href="../index.html";
                break;
            case 1:
                window.location.href="Credits.html";
                break;
            case 2:
                window.location.href="Death.html";
                break;
        }
    });
    document.getElementById('disagree').addEventListener('click', function(){
        document.getElementById('Warning').classList.add('Deactive');
        document.getElementById('Warning').classList.remove('Active');
        document.getElementById('Warning').classList.remove('Error');
        document.getElementById('Warning').classList.remove('Warning');
    });  
}

function reset(){
    document.getElementById("everything").innerHTML="";
}

function createAlerts(){
    //Create the alart section
    const Alerts = document.createElement("dialoge");
    Alerts.id = "Alerts";
    Alerts.classList.add('Deactive');
    document.getElementById('everything').appendChild(Alerts);
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
    //Create Controlls section
    const Controlls = document.createElement("div");
    Controlls.id = "Controlls";
    document.getElementById('Content').appendChild(Controlls);
}

function createControlls(){
    //Create Movement section
    const Movement = document.createElement("div");
    Movement.id = "Movement";
    document.getElementById('Controlls').appendChild(Movement);
    //Create Action section
    const Actions = document.createElement("div");
    Actions.id = "Actions";
    document.getElementById('Controlls').appendChild(Actions);
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
    Up.innerText="Move Up";
    Up.classList.add("Movement");
    Up.classList.add("Active");
    document.getElementById('Movement').appendChild(Up);

    //Create midrow button section
    const MidRow = document.createElement("div");
    MidRow.id = "MidRow";
    document.getElementById('Movement').appendChild(MidRow);
    //Create move Left button
    const Left = document.createElement("button");
    Left.id = "Left";
    Left.innerText="Move Left";
    Left.classList.add("Movement");
    Left.classList.add("Active");
    document.getElementById('MidRow').appendChild(Left);
    //Create move Right button
    const Right = document.createElement("button");
    Right.id = "Right";
    Right.innerText="Move Right";
    Right.classList.add("Movement");
    Right.classList.add("Active");
    document.getElementById('MidRow').appendChild(Right);
    
    //Create move down button
    const Down = document.createElement("button");
    Down.id = "Down";
    Down.innerText="Move Down";
    Down.classList.add("Movement");
    Down.classList.add("Active");
    document.getElementById('Movement').appendChild(Down);

    Player1.checkMove();
}

function createActions(){
        //make use button
        const Use = document.createElement("button");
        Use.id = "Use";
        Use.innerText="Use";
        document.getElementById('Actions').appendChild(Use);
        //make Inventory button
        const Inventory = document.createElement("button");
        Inventory.id = "Inventory";
        Inventory.innerText="Inventory";
        document.getElementById('Actions').appendChild(Inventory);
        //make giveUp button
        const giveUp = document.createElement("button");
        giveUp.id = "giveUp";
        giveUp.innerText="Give Up";
        document.getElementById('Actions').appendChild(giveUp);
        //make Observe button
        const Observe = document.createElement("button");
        Observe.id = "Observe";
        Observe.innerText="Observe";
        document.getElementById('Actions').appendChild(Observe);
        document.getElementById('giveUp').addEventListener('click', function(){
            Warn(2);
        });
}

function pageBuilder(){
    reset();
    createAlerts()
    createVisual();
    createContent();
    createControlls();
    createDescription();
    createMovement();
    createActions();
}

let Player1 = new Player('Joe', 11)

const tent = new Sector('Tent',11, 'A tent behind a campfire', 'Everything is dark. Even the fire feels cold. You hear. Inside the tent is shrouded in darkness. To your left you hear someone carving something on wood. while a fall into the abyss awaits you everywhere else.');

window.onload = function (){
    document.getElementById('calanderDate').innerText= "2024 - " + new Date().getFullYear();
    pageBuilder();
    tent.summon();
}

document.getElementById('toTitle').addEventListener('click', function(){
    Warn(0);
});

document.getElementById('toCredits').addEventListener('click', function(){
    Warn(1);
});

//Keyboard input assignment
window.addEventListener('keydown', function(keyPress){
    switch (keyPress.key){
        case 'Enter':
            Warn(0);
            break;

        case 'w':
        case 'W':
        case 'ArrowUp':
            Player1.MoveUp();
            break;

        case 's':
        case 'S':
        case 'ArrowDown':
            Player1.MoveDown();
            break;

        case 'a':
        case 'A':
        case 'ArrowLeft':
            Player1.MoveLeft();
            break;

        case 'd':
        case 'D':
        case 'ArrowRight':
            Player1.MoveRight();
            break;
    }
});