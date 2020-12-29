class Player{
    constructor(){
        this.index = null
        this.distance = 0
        this.name = null
    }
    //reads the playerCount value from the database
    getCount(){
        database.ref("playerCount").on("value", (data)=>{
            playerCount = data.val()
        })
    }

    //writes the playerCount value in the database
    updateCount(count){
        database.ref("/").update({
            playerCount: count
        })
    }

    updateInfo(){
        database.ref("players/player"+this.index).set({
            name: this.name, 
            distance: this.distance
        })
    }

    static getPlayerInfo(){
        database.ref("players").on("value", (data) =>{
            players = data.val()
        })
    }
}