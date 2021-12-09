let main = document.getElementById('main');

// 20 guides are dynamically created, each of which serve as a container for each moving ball

for(let i=1; i <= 20; i++) {
    let guide = document.createElement('div');
    guide.classList.add('guide');
    guide.classList.add(`guide-${i}`);
    guide.setAttribute('id', `guide-${i}`);

    // These are all inserted before the main content of the page
    main.before(guide);
}

let containerArr = [];

//  The container array holds all of the guides; one ball is created per guide (20 in total)

for(let i=1; i <=20; i++) {
    containerArr.push(document.getElementById(`guide-${i}`))
}

for(let i=0; i < containerArr.length; i++) {
    let ball = document.createElement('div');
    ball.classList.add('ball');
    ball.classList.add(`ball-${i + 1}`)
    containerArr[i].appendChild(ball)
}