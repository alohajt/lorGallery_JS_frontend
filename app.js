document.addEventListener("DOMContentLoaded", () => {


    const data = 
[
    {
      "associatedCards": [],
      "associatedCardRefs": [],
      "assets": [
        {
          "gameAbsolutePath": "http://dd.b.pvp.net/0_9_3_0/set1/en_us/img/cards/01IO012T2.png",
          "fullAbsolutePath": "http://dd.b.pvp.net/0_9_3_0/set1/en_us/img/cards/01IO012T2-full.png"
        }
      ],
      "region": "Ionia",
      "regionRef": "Ionia",
      "attack": 0,
      "cost": 3,
      "health": 0,
      "description": "Give an ally +0|+3 this round.",
      "descriptionRaw": "Give an ally +0|+3 this round.",
      "levelupDescription": "",
      "levelupDescriptionRaw": "",
      "flavorText": "",
      "artistName": "SIXMOREVODKA",
      "name": "Discipline of Fortitude",
      "cardCode": "01IO012T2",
      "keywords": [
        "Burst"
      ],
      "keywordRefs": [
        "Burst"
      ],
      "spellSpeed": "Burst",
      "spellSpeedRef": "Burst",
      "rarity": "None",
      "rarityRef": "None",
      "subtype": "",
      "subtypes": [],
      "supertype": "",
      "type": "Spell",
      "collectible": false
    },
    {
      "associatedCards": [],
      "associatedCardRefs": [
        "01NX020T1",
        "01NX020T2",
        "01NX020"
      ],
      "assets": [
        {
          "gameAbsolutePath": "http://dd.b.pvp.net/0_9_3_0/set1/en_us/img/cards/01NX020T3.png",
          "fullAbsolutePath": "http://dd.b.pvp.net/0_9_3_0/set1/en_us/img/cards/01NX020T3-full.png"
        }
      ],
      "region": "Noxus",
      "regionRef": "Noxus",
      "attack": 4,
      "cost": 3,
      "health": 4,
      "description": "<link=vocab.Play><style=Vocab>Play</style></link> or <link=vocab.Strike><style=Vocab>Strike</style></link>: Create 2 <link=card.create><style=AssociatedCard>Spinning Axe</style></link> in hand.",
      "descriptionRaw": "Play or Strike: Create 2 Spinning Axe in hand.",
      "levelupDescription": "",
      "levelupDescriptionRaw": "",
      "flavorText": "\"You want an autograph? Get in line, pal.\"",
      "artistName": "SIXMOREVODKA",
      "name": "Draven",
      "cardCode": "01NX020T3",
      "keywords": [
        "Quick Attack",
        "Overwhelm"
      ],
      "keywordRefs": [
        "QuickStrike",
        "Overwhelm"
      ],
      "spellSpeed": "",
      "spellSpeedRef": "",
      "rarity": "None",
      "rarityRef": "None",
      "subtype": "",
      "subtypes": [],
      "supertype": "Champion",
      "type": "Unit",
      "collectible": false
    },
    {
      "associatedCards": [],
      "associatedCardRefs": [],
      "assets": [
        {
          "gameAbsolutePath": "http://dd.b.pvp.net/0_9_3_0/set1/en_us/img/cards/01DE031.png",
          "fullAbsolutePath": "http://dd.b.pvp.net/0_9_3_0/set1/en_us/img/cards/01DE031-full.png"
        }
      ],
      "region": "Demacia",
      "regionRef": "Demacia",
      "attack": 1,
      "cost": 3,
      "health": 4,
      "description": "<link=vocab.RoundEnd><style=Vocab>Round End</style></link>: Grant other allies +1|+1 if an ally died this round.",
      "descriptionRaw": "Round End: Grant other allies +1|+1 if an ally died this round.",
      "levelupDescription": "",
      "levelupDescriptionRaw": "",
      "flavorText": "\"Evil has taken the hour, but it will not win the day. Remember our fallen, and wear their memories like armor!\"",
      "artistName": "SIXMOREVODKA",
      "name": "Dawnspeakers",
      "cardCode": "01DE031",
      "keywords": [],
      "keywordRefs": [],
      "spellSpeed": "",
      "spellSpeedRef": "",
      "rarity": "Epic",
      "rarityRef": "Epic",
      "subtype": "",
      "subtypes": [],
      "supertype": "",
      "type": "Unit",
      "collectible": true
    },
    {
      "associatedCards": [],
      "associatedCardRefs": [],
      "assets": [
        {
          "gameAbsolutePath": "http://dd.b.pvp.net/0_9_3_0/set1/en_us/img/cards/01IO048T1.png",
          "fullAbsolutePath": "http://dd.b.pvp.net/0_9_3_0/set1/en_us/img/cards/01IO048T1-full.png"
        }
      ],
      "region": "Ionia",
      "regionRef": "Ionia",
      "attack": 3,
      "cost": 3,
      "health": 2,
      "description": "",
      "descriptionRaw": "",
      "levelupDescription": "",
      "levelupDescriptionRaw": "",
      "flavorText": "\"Oh, yes. The shadows of the Order will suit our new dark intentions.\"",
      "artistName": "SIXMOREVODKA",
      "name": "Yusari the Slayer",
      "cardCode": "01IO048T1",
      "keywords": [
        "Elusive"
      ],
      "keywordRefs": [
        "Elusive"
      ],
      "spellSpeed": "",
      "spellSpeedRef": "",
      "rarity": "None",
      "rarityRef": "None",
      "subtype": "",
      "subtypes": [],
      "supertype": "",
      "type": "Unit",
      "collectible": false
    },
    {
      "associatedCards": [],
      "associatedCardRefs": [
        "01PZ040",
        "01PZ040T1"
      ],
      "assets": [
        {
          "gameAbsolutePath": "http://dd.b.pvp.net/0_9_3_0/set1/en_us/img/cards/01PZ040T3.png",
          "fullAbsolutePath": "http://dd.b.pvp.net/0_9_3_0/set1/en_us/img/cards/01PZ040T3-full.png"
        }
      ],
      "region": "Piltover & Zaun",
      "regionRef": "PiltoverZaun",
      "attack": 0,
      "cost": 3,
      "health": 0,
      "description": "To play, discard 1. Deal 3 to anything.\r\nShuffle a <link=card.level1><style=AssociatedCard>Jinx</style></link> into your deck.",
      "descriptionRaw": "To play, discard 1. Deal 3 to anything.\r\nShuffle a Jinx into your deck.",
      "levelupDescription": "",
      "levelupDescriptionRaw": "",
      "flavorText": "\"FIRE IN THE CABOODLE!\" - Jinx",
      "artistName": "Original Force",
      "name": "Jinx's Get Excited!",
      "cardCode": "01PZ040T3",
      "keywords": [
        "Fast"
      ],
      "keywordRefs": [
        "Fast"
      ],
      "spellSpeed": "Fast",
      "spellSpeedRef": "Fast",
      "rarity": "None",
      "rarityRef": "None",
      "subtype": "",
      "subtypes": [],
      "supertype": "Champion",
      "type": "Spell",
      "collectible": false
    },
    {
      "associatedCards": [],
      "associatedCardRefs": [
        "01FR024",
        "01FR024T3"
      ],
      "assets": [
        {
          "gameAbsolutePath": "http://dd.b.pvp.net/0_9_3_0/set1/en_us/img/cards/01FR024T2.png",
          "fullAbsolutePath": "http://dd.b.pvp.net/0_9_3_0/set1/en_us/img/cards/01FR024T2-full.png"
        }
    ]
    }
]

//login form
const loginForm = document.querySelector(".login")
const getUsers = document.querySelector(".get-users")

loginForm.addEventListener("submit", handleLogin)
getUsers.addEventListener("click",handleGetUsers)

function handleGetUsers(){
    fetch("http://localhost:3000/users", {
        headers: {
            "Content-Type":"application/json",
            "Authorization": `Bearer ${ localStorage.getItem("token") }`
            //"Authorization": `Bearer ${localStorage.token}`
        }
    })
    .then(response => response.json())
    .then(console.log)
}

function handleLogin(event){
    event.preventDefault()
    // event.target is loginForm
    const loginFormData = new FormData(event.target)
    const username = loginFormData.get("username")
    const password =loginFormData.get("password")

    // console.log(username)
    // console.log(password)

    const loginBody =  {username, password}

    fetch("http://localhost:3000/login", {
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(loginBody)
    })
    .then(response => response.json())
    .then(result => {
        console.log(result.token)
        localStorage.setItem("token", result.token) //in Application > localStorage
    })
    .then(window.location.replace("http://localhost:3001/galleryPage.html"))
    // wont refresh the page
    event.target.reset() 
 
}
})