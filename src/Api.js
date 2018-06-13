
const PlayerAPI = {
    players: [
        { number: 45, name: "Donovan Mitchell", position: "Shooting Guard", avgPoints: 20.5},
        { number: 27, name: "Rudy Gobert", position: "Center", avgPoints: 13.5 },
        { number: 3, name: "Ricky Rubio", position: "Point Guard", avgPoints: 13.1},
        { number: 15, name: "Derrick Favors", position: "Power Forward", avgPoints: 12.3 },
        { number: 2, name: "Joe Ingles", position: "Small Forward", avgPoints: 11.5 },
        { number: 99, name: "Jae Crowder", position: "Power Forward", avgPoints: 11.8 }
    ],
    all: function() { return this.players},
    get: function(id) {
        const isPlayer = p => p.number === id
        return this.players.find(isPlayer)
    }
}

export default PlayerAPI