let mask;
let rotationValue;
let scaleValue;
let secondMaskPos;
let secondMaskPosY;

function preload() {
    mask = loadModel('../static/assets/mask.obj', true);

}

function setup() {
    createCanvas(windowWidth, windowHeight * (windowWidth <= 700 ? 4 : 3), WEBGL);
}

function draw() {
    background(255)
    lights();
    noStroke()
    firstPhase()
    secondPhase()


}


function firstPhase() {
    translate(0, -(windowHeight * (windowWidth < 700 ? 1.35 : 0.85)) + 120, 0)
    rotateX(1.5)


    if (windowWidth > 600 && pageYOffset < windowHeight * 0.5) {

        rotationValue = ((windowWidth < 600 ? 180 : 90) + (pageYOffset * 0.006))
        scaleValue = ((windowWidth < 600 ? 1.5 : 2.2) + pageYOffset * 0.002)
    } else if (windowWidth < 700 && windowWidth > 400 && pageYOffset < windowHeight * 0.5) {

        rotationValue = ((windowWidth < 600 ? 90 : 90) + (pageYOffset * 0.005))
        scaleValue = ((windowWidth < 600 ? 1.1 : 2.2) + pageYOffset * 0.005)
    } else if (windowWidth < 500 && pageYOffset < windowHeight * 0.5) {

        rotationValue = (90 + (pageYOffset * 0.007))
        scaleValue = (0.4 + pageYOffset * 0.005)
    }
    rotateZ(rotationValue)
    scale(scaleValue)
    model(mask)
}

function secondPhase() {
    scale(0.7)
    if (pageYOffset <= windowHeight + 750) {
        secondMaskPos = -windowHeight - (pageYOffset * (windowHeight * (windowWidth < 600 && windowWidth > 400 ? 0.00051 : windowWidth < 400 ? 0.0007 : 0.0004))) + windowHeight - 50
        secondMaskPosY = pageYOffset * 0.05
    } else if (pageYOffset <= windowHeight + 1600) {

    }
    translate(-(windowWidth / 6), secondMaskPosY, secondMaskPos);


    rotateZ(200)



    scale(1)
    model(mask)

}

function thirdPhase() {


}