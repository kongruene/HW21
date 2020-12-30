function isTouching(wall, bullet){
if(wall.x - bullet.x<(bullet.width+wall.width)/2){
    return true;
    } else {
     return false;
    }
}