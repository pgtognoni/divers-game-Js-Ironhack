const srcObj = {
    50: [
        '../images/50/crab.png',
        '../images/100/erizo.png',
    ],
    75: [
        '../images/75/goldenfish.png',
        '../images/75/greyfish.png',
        '../images/75/nemo.png',
        '../images/75/redfish.png',
    ],
    100: [
        '../images/100/blueFish.png',
        '../images/100/boy1.png',
        '../images/100/orangefish.png',
    ],
    300: [
        '../images/300/girl1.png',
        '../images/300/jelly1.png',
        '../images/300/jelly2.png',
    ],
    500: [
        '../images/500/seaHorse1.png',
        '../images/500/shark.png',
        '../images/500/shark3.png',
        '../images/500/shark4.png',
        '../images/500/turtle1.png',
        '../images/1000/octopus.png',
        '../images/1000/seaHorse.png',
        '../images/500/turtle2.png',
    ],
    1000: [
        '../images/1000/submarine/submarine1.png',
        '../images/1000/submarine/submarine2.png',
        '../images/1000/diverHarpoon.png',
    ],
    5000: [
        '../images/5000/aquaman.png',
        '../images/5000/mine.png'
    ],
    bullets: [
        '../images/bullets/shell.png',
        '../images/bullets/star.png',
    ],
    scores: [
        '../images/buttons/G50.png',
        '../images/buttons/G75.png',
        '../images/buttons/G100.png',
        '../images/buttons/G300.png',
        '../images/buttons/G500.png',
        '../images/buttons/G1000.png',
        '../images/buttons/G5000.png',
        '../images/buttons/R50.png',
        '../images/buttons/R75.png',
        '../images/buttons/R100.png',
        '../images/buttons/R300.png',
        '../images/buttons/R500.png',
        '../images/buttons/R1000.png',
        '../images/buttons/R5000.png',
    ],
    explosion: [
        '../images/explosion.png',
    ],
    garbage: [
        '../images/100/camera.png',
        '../images/100/cocan.png',
        '../images/300/plasticbag.png',
        '../images/300/plasticbag1.png',
        '../images/300/plasticbag2.png',
        '../images/500/plasticbottle.png',
        '../images/500/plasticbottle1.png',
    ]
}

const createNew = (srcObj) => {

    const lifeArr = [];
    const humansArr = [] 
    const scoresArr = [];
    const bulletsArr = [];
    const explosionArr = [];
    const garbageArr = [];
    
    for(let value in srcObj) {
        if(value == 50 || value == 75 || value == 100 || value == 300 || value == 500) {
            srcObj[value].forEach(src => {
                const val =  {
                    family: 'life',
                    src: src,
                    value: parseInt(value)
                }
                lifeArr.push(val)
            });
        } else if(value == 5000 || value == 1000) {
            //console.log(srcObj[value])
            srcObj[value].forEach(src => {
                const val =  {
                    family: 'humans',
                    src: src,
                    value: parseInt(value)
                }
                humansArr.push(val)
            });
        } else if(value == 'explosion') {
            srcObj[value].forEach(src => {
                const explosion =  {
                    family: 'explosion',
                    src: src,
                    value: value
                }
                explosionArr.push(explosion)
            });
        } else if(value == 'scores') {
            
            srcObj[value].forEach(src => {
                let value = 0;
                let green = ""
                if (src.match(/G/g)) {
                    let num = src.split('G').filter(item => item.match(/.png/)).map(item => item.replace(".png", "")).toString()
                    const score =  {
                        family: 'scores',
                        src: src,
                        value: parseInt(num),
                        action: 'sum'
                    }
                    scoresArr.push(score)
                } else if (src.match(/R/g)) {
                    let num = src.split('R').filter(item => item.match(/.png/)).map(item => item.replace(".png", "")).toString()
                    const score =  {
                        family: 'scores',
                        src: src,
                        value: parseInt(num),
                        action: 'substract'
                    }
                    scoresArr.push(score)
                }
            });
        } else if(value == 'bullets') {
            srcObj[value].forEach(src => {
                const bullet =  {
                    family: 'bullets',
                    src: src,
                    value: value
                }
                bulletsArr.push(bullet)
            });
        } else if(value == 'garbage') {
            srcObj[value].forEach(src => {
                const garbage =  {
                    family: 'garbage',
                    src: src,
                    value: 100
                }
                garbageArr.push(garbage)
            });
        }
           
    }

    return  [lifeArr, humansArr, scoresArr, bulletsArr, explosionArr, garbageArr]
}

const imageArr = createNew(srcObj);

//console.log(imageArr)


// garbage: [
//     '../images/garbage/camera.png',
//     '../images/garbage/cocan.png',
//     '../images/garbage/plasticbag.png',
//     '../images/garbage/cocan.png',
//     '../images/garbage/plasticbag2.png',
//     '../images/garbage/plasticbottle.png',
//     '../images/garbage/plasticbottle1.png',
// ],

else if (count % 50 == 0) {
        const arr = imageArr[5]
        const width = canvasX;
        const height = canvasY*1.2;
        const newObstacle = createElement(arr, width, height)
        objArr.garbageArr.push(newObstacle)
    } else if (count % 50 == 0) {
        const arr = imageArr[5]
        const width = canvasX;
        const height = canvasY*1.2;
        const newObstacle = createElement(arr, width, height)
        objArr.garbageArr.push(newObstacle)
    } else if (count % 50 == 0) {
        const arr = imageArr[5]
        const width = canvasX;
        const height = canvasY*1.2;
        const newObstacle = createElement(arr, width, height)
        objArr.garbageArr.push(newObstacle)
    } else if (count % 50 == 0) {
        const arr = imageArr[5]
        const width = canvasX;
        const height = canvasY*1.2;
        const newObstacle = createElement(arr, width, height)
        objArr.garbageArr.push(newObstacle)
    } else if (count % 50 == 0) {
        const arr = imageArr[5]
        const width = canvasX;
        const height = canvasY*1.2;
        const newObstacle = createElement(arr, width, height)
        objArr.garbageArr.push(newObstacle)
    }