function gameObject(){
    let gameInfo = { 
        "home": {
            "teamName": 'Brooklyn Nets',
            "colors": ['black', 'white'],
            "players":{
                "Alan Anderson":{
                    "number": 0,
                    "shoe": 16,
                    "points": 22,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 1
                },
                "Reggie Evans":{
                    "number": 30,
                    "shoe": 14,
                    "points": 12,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 12,
                    "blocks": 12,
                    "slamDunks": 7
                },
                "Brook Lopez":{
                    "number": 11,
                    "shoe": 17,
                    "points": 17,
                    "rebounds": 19,
                    "assists": 10,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks":15
                },
                "Mason Plumlee":{
                    "number": 1,
                    "shoe": 19,
                    "points": 26,
                    "rebounds": 12,
                    "assists": 6,
                    "steals": 3,
                    "blocks": 8,
                    "slamDunks": 5
                },
                "Jason Terry":{
                    "number": 31,
                    "shoe": 15,
                    "points": 19,
                    "rebounds": 2,
                    "assists": 2,
                    "steals": 4,
                    "blocks": 11,
                    "slamDunks": 1
                }
            }
        },
    "away": {
        "teamName": 'Charlotte Hornets',
        "colors": ['turqouise', 'purple'],
        "players":{
            "Jeff Adrien":{
                "number": 4,
                "shoe": 18,
                "points": 10,
                "rebounds": 1,
                "assists": 1,
                "steals": 2,
                "blocks": 7,
                "slamDunks": 2
            },
            "Bismak Biyombo":{
                "number": 0,
                "shoe": 16,
                "points": 12,
                "rebounds": 4,
                "assists": 7,
                "steals": 7,
                "blocks": 15,
                "slamDunks": 10
            },
            "DeSagna Diop":{
                "number": 2,
                "shoe": 14,
                "points": 24,
                "rebounds": 12,
                "assists": 12,
                "steals": 4,
                "blocks": 5,
                "slamDunks": 5
            },
            "Ben Gordon":{
                "number": 8,
                "shoe": 15,
                "points": 33,
                "rebounds": 3,
                "assists": 2,
                "steals": 1,
                "blocks": 1,
                "slamDunks": 0
            },
            "Brendan Haywood":{
                "number": 33,
                "shoe": 15,
                "points": 6,
                "rebounds": 12,
                "assists": 12,
                "steals": 22,
                "blocks": 5,
                "slamDunks": 12
                }
            }
        }     
    }
    return gameInfo;
}

function numPointsScored(name){
    const game = gameObject();
      for(let team in game){
        for(let characteristic in game[team]){
          if(characteristic === "players"){
            for(playerName in game[team][characteristic]){
                if(playerName === name){
                return game[team][characteristic][name]["points"]
                }
            }
          }
        }
    }
}

function shoeSize(name){
    const game = gameObject();
      for(let team in game){
        for(let characteristic in game[team]){
          if(characteristic === "players"){
            for(playerName in game[team][characteristic]){
                if(playerName === name){
                return game[team][characteristic][name]["shoe"]
                }
            }
          }
        }
    }
}

function teamColors(name){
    const game = gameObject();
        for(let team in game){
            if(game[team]["teamName"] === name){
                return game[team]["colors"]
            }
        }
}

function teamNames(obj){
    const game = gameObject();
    const allNames = [];
    for(let team in game){
        allNames.push(game[team]["teamName"])
    }
    return allNames;
}

function playerNumbers(nameTeam){
    const game = gameObject();
    const numArr = [];

    for(let team in game){
        if(game[team]["teamName"] === nameTeam){
            for(let characteristic in game[team]){
                if(characteristic === "players"){
                    for(playerName in game[team][characteristic]){
                        numArr.push(game[team][characteristic][playerName]["number"])
                    }
                }
            }
        }
    } return numArr;
}

function playerStats(name){
    const game = gameObject();

    for(let team in game){
        for(let characteristic in game[team]){
            if(characteristic === "players"){
                for(playerName in game[team][characteristic]){
                    if(playerName === name){
                        return game[team][characteristic][playerName]
                    }
                }
            }
        }
    }
}

function bigShoeRebounds(obj){
    const game = gameObject();
    let bigMan = 0;
    let bigManRebounds = 0;

    for(let team in game){
        for(let characteristic in game[team]){
            if(characteristic === 'players'){
                for(playerName in game[team][characteristic]){
                    if(game[team][characteristic][playerName]["shoe"] > bigMan){
                        bigMan = game[team][characteristic][playerName]["shoe"];
                        bigManRebounds = game[team][characteristic][playerName]["rebounds"]
                    }
                }
            }
        }
    }
    return bigManRebounds;
}

function mostPointsScored(obj){
    const game = gameObject();
    let highNum = 0;
    let mrPoints = '';

    for(let team in game){
        for(let characteristic in game[team]){
            if(characteristic === 'players'){
                for(playerName in game[team][characteristic]){
                    if(game[team][characteristic][playerName]["points"] > highNum){
                        highNum = game[team][characteristic][playerName]["points"];
                        mrPoints = playerName
                      
                    }
                }
            }
        }
    }
    return mrPoints;
}

function winningTeam(obj){
    const game = gameObject();
    let nets = 0;
    let hornets = 0;

    for(let team in game){
        if(game[team]["teamName"] === "Brooklyn Nets"){
            for(let characteristic in game[team]){
                if(characteristic === 'players'){
                    for(playerName in game[team][characteristic]){
                        nets += game[team][characteristic][playerName]["points"];
                }
            }
        }
    } else {
        for(let characteristic in game[team]){
            if(characteristic === 'players'){
                for(playerName in game[team][characteristic]){
                    hornets += game[team][characteristic][playerName]["points"]
                }
            }
        }
    }
    } 
    return (nets > hornets) ? 'Brooklyn Nets' : 'Charlotte Hornets'
}

function playerWithLongestName(obj){
    const game = gameObject();
    let longName = '';

    for(let team in game){
        for(let characteristic in game[team]){
            if(characteristic === 'players'){
                for(playerName in game[team][characteristic]){
                    if(playerName.length > longName.length){
                        longName = playerName;
                    }
                }
            }
        }
    }
    return longName;
}

function doesLongNameStealATon(obj) {
    const game = gameObject();
    let flag = true;
    let longName = '';
    let stealCount = 0;
    //loop through and find the longest name and most steals then see if record matches
    for (let team in game) {
        for (let characteristic in game[team]) {
            if (characteristic === 'players') {
                for (playerName in game[team][characteristic]) {
                    if (playerName.length > longName.length) {
                        longName = playerName;
                    }
                    if (game[team][characteristic][playerName]["steals"] > stealCount) {
                        stealCount = game[team][characteristic][playerName]["steals"]
                    }
                }
            }
        }
        for (let item in game[team]) {
            if (item === 'players') {
                for (playName in game[team][item]) {
                    if (playName === longName && playName["steals"] === stealCount) {
                        flag === true;
                    }
                }
            }

        }
    }
    return flag;
}

