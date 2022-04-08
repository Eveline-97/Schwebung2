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

let repetitions = [];
for (let i = 0; i < aList.length; i++) {
    repetitions.push(0)
}
console.log(repetitions);

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
            //add repetitions
            console.log(repetitions[i]);
            repetitions[i]++;
            let rep = document.getElementById(`repeats${i}`);
            rep.innerHTML = repetitions[i];

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
}

//start
Tone.start();