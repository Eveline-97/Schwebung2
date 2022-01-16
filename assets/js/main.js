let aList = document.getElementsByClassName('a');
let current = 0;
let row = 0;
let repeat = 1;

//list for releases
let releases = [];
for (let i = 0; i < aList.length; i++) {
    releases.push(
        `box${i}: ${0}`
    )
}

//init synths
const synth = new Tone.PolySynth(Tone.Synth).toDestination();

for (let i = 0; i < aList.length; i++) {
    let a = aList[i];

    a.addEventListener('click', () => {
        let now = Tone.now();
        if (a.classList.contains('selected')) {
            a.classList.remove('selected');
            console.log(releases[a.id]);
            synth.triggerRelease(releases[a.id]);
        } else {
            //schwebung in positioning
            let left = Math.random()*10.;
            let top = Math.random()*10.;
            a.style.marginLeft = `${left}px`;
            a.style.marginTop = `${top}px`;

            //make current 'note' bigger
            a.classList.add('selected');

            //colour changes + sound
            if (a.classList.contains('b')) {
                a.classList.remove('b');
                a.classList.add('g');
                synth.triggerAttack(400+top, now);
                releases[a.id] = 400+top;
            }
            else if (a.classList.contains('g')) {
                a.classList.remove('g');
                a.classList.add('r');
                synth.triggerAttack(500-top, now);
                releases[a.id] = 500-top;
            }
            else if (a.classList.contains('r')) {
                a.classList.remove('r');
                a.classList.add('y');
                synth.triggerAttack(600-top, now);
                releases[a.id] = 600-top;
            }
            else if (a.classList.contains('y')) {
                a.classList.remove('y');
                a.classList.add('b');
                synth.triggerAttack(300+top, now);
                releases[a.id] = 300+top;
            }
        }
    });
    /*else {
        //(re-)adjust size to basic values
        a.style.width = "25px";
        a.style.heigth = "25px";
    }*/
}

//logs
let currentNote = document.getElementById("current-note");
let repeatP = document.getElementById("repeats");
let rowP = document.getElementById('current-row');
currentNote.innerHTML = `Current note: ${current + 1}`;
repeatP.innerHTML = `Repeats: ${repeat - 1}`;
rowP.innerHTML = `Row: ${row + 1}`;

let speedSlider = document.getElementById('speed');
let speedP = document.getElementById('speed-amount');
let speed = speedSlider.value;

const toggleStart = (button) => {
    if (button.innerHTML == 'start') {
        button.innerHTML = 'pause';
    } else {
        button.innerHTML = 'start';
    }
}

const play = () => {
    toggleStart(start);
    if (start.innerHTML == 'pause') {
        this.interval = setInterval(loop, speed);
    } else {
        clearInterval(this.interval);
    }

    speedSlider.onchange = () => {
        speed = speedSlider.value;
        speedP.innerHTML = `${speedSlider.value}ms between notes`;
        clearInterval(this.interval);
    
        if (start.innerHTML == 'pause') {
            this.interval = setInterval(loop, speed);
        }
    }
}

//start
Tone.start();
start.addEventListener('click', play);

/***-TITLE-***/
/*with keyframes.js*/
let titleChildren = document.getElementById('title').children;

for (let i = 0; i < titleChildren.length; i++) {
    let deg = Math.random() * 30 - 15;
    let seconds = Math.random() * 4 + 1; //1-5 seconds
    Keyframes.define([
        {
            name: `schwebung${i}`,
            '0%': {transform: `rotate(0deg)`},
            '25%': {transform: `rotate(-${deg}deg)`},
            '75%': {transform: `rotate(${deg}deg)`},
            '100%': {transform: `rotate(0deg)`}
        }
    ]);
    let letter = new Keyframes(document.getElementById(`letter${i}`));
    letter.play(`schwebung${i} ${seconds}s linear infinite`);
}

/***-ROWS-***/
let rows = document.getElementsByClassName('row');
let rowAmount = document.getElementById('row-amount');
let add = document.getElementById('add-row');
let remove = document.getElementById('remove-row');

const addRow = () => {
    let lastRow = document.getElementById(`row-${rows.length}`);
    //create new row
    let el = document.createElement('div');
    el.id = `row-${rows.length+1}`;
    el.classList.add('row');

    //children of the last row that are to become the children of the new element
    children = [
        lastRow.children[1],
        lastRow.children[2],
        lastRow.children[3],
        lastRow.children[4],
        lastRow.children[5],
        lastRow.children[6],
        lastRow.children[7],
        lastRow.children[8],
        lastRow.children[9],
        lastRow.children[2]
    ];

    //loop over children and add to element
    for (let i = 0; i < children.length; i++) {
        let child = document.createElement('p');
        child.classList = children[i].classList;
        el.appendChild(child);
    }
    lastRow.insertAdjacentElement('afterend', el);

    //update amount of rows
    rowAmount.innerHTML = `Rows: ${rows.length}`;
}

const removeRow = () => {
    let lastRow = document.getElementById(`row-${rows.length}`);
    if (rows.length > 1) {
        if (rows.length == row + 1) {
            alert(`The row is currently playing and can not be removed.`);
            return;
        } else {
            lastRow.remove();
        }
    } else {
        alert(`The first row can not be removed.`);
        return;
    }

    //update amount of rows
    rowAmount.innerHTML = `Rows: ${rows.length}`;
}

add.addEventListener('click', addRow);
remove.addEventListener('click', removeRow);