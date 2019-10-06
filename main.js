int unlockedsys = 1;
//1 "Floors" unlocked.
//1 - ground, 2 - air 3 - space
int pop = 0;
int amountOfHouses = 0;
int troops = 0;
function endTurn(){
    pop += amountOfHouses*5;
    //generates pop by each turn(level completed)
}
function buildAHouse(){
    amountOfHouses += 1;
    //function to build a house
}
function autospawn(){
    //used in battle setting
    int troopcost;
    while(troops > 0){
        //use spawn function
        troops = troops - troopcost;
    }
}