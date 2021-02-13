turnLeft();
forward();

function readAndWrite(){
    forward();
    let cellLeft = readBelow();
    backward();
    let cellMid = readBelow();
    backward();
    let cellRight = readBelow();
    forward();
    
    let shouldWriteCell = false;
    if(isBlack(cellLeft)){
        if(isBlack(cellMid)){
            shouldWriteCell = !isBlack(cellLeft);
        }
        else{
            shouldWriteCell = isBlack(cellLeft);
        }
    }
    else{
        if(isBlack(cellMid)){
            shouldWriteCell = true;
        }
        else{
            shouldWriteCell = isBlack(cellLeft);
        }
    }
    
    if(shouldWriteCell){
        turnRight();
        forward();
        writeBelow('BLACK');
        backward();
        turnLeft();
    }
}

function isBlack(tile){
    print(tile);
    return tile == 'b';
}

for(let j = 0; j<5; j=j+1){
    for(let i = 0; i<11; i= i+1){
        readAndWrite();
        forward();

    }
    turnRight();
    forward();
    turnRight();
    for(let k = 0; k<11; k = k+1){
        forward();
    }
    turnRight();
    turnRight();
}
