function takeInput(){
    let playerName = node.value;
    playerName = titleCase(playerName);
    let displayName = document.getElementById('name');
    displayName.innerHTML = `${playerName}'s Horoscope`;
    playerName = playerName.replace(" ", "_");
    wrapper.style.display = 'block';
    return playerName;
}

function titleCase(name) {
    name = name.split(" ");
    for (var i = 0; i < name.length; i++) {
    name[i] = name[i].charAt(0).toUpperCase() + name[i].slice(1); 
    }
    return name.join(" ");
}

var closeProfile = document.getElementById('closeButton');
closeProfile.addEventListener('click', function() {
    wrapper.style.display = 'none';
});

function get(url) {
    return fetch(proxyUrl + url)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        return data;
    })
    .catch(function(error) {
        return error;
    });
}

const playerInfoDiv = document.getElementById("player-info")


function whatsYourSign(month, day) {
    //takes month and day and finds player's sun sign
    if (month === 1) {
        if (day < 20) {
            return "capricorn"}
        else { 
            return "aquarius"}
        }
    else if (month === 2) {
        if (day < 19) {
            return "aquarius"}
        else {
            return "pisces"}
        }
    else if (month === 3) {
        if (day < 21) {
            return "pisces"}
        else {
            return "aries"}
        }
    else if (month === 4) {
        if (day < 20) {
            return "aries"}
        else {
            return "taurus"}
        }
    else if (month === 5) {
        if (day < 21) {
            return "taurus"}
        else {
            return "gemini"}
        }
    else if (month === 6) {
        if (day < 21) {
            return "gemini"}
        else {
            return "cancer"}
        }
    else if (month === 7) {
        if (day < 23) {
            return "cancer"}
        else {
            return "leo"}
        }
    else if (month === 8) {
        if (day < 23) {
            return "leo"}
        else {
            return "virgo"}
        }
    else if (month === 9) {
        if (day < 23) {
            return "virgo"}
        else {
            return "libra"}
        }
    else if (month === 10) {
        if (day < 23) {
            return "libra"}
        else {
            return "scorpio"}
        }
    else if (month === 11) {
        if (day < 22) {
            return "scorpio"}
        else {
            return "sagittarius"}
        }
    else if (month === 12) {
        if (day < 22) {
            return "sagittarius"}
        else {
            return "capricorn"}
        }
    else {
        window.alert("Player not found, please try again");
        throw ''
        }
}

function addDate (object) {
    const horoDate = document.getElementById('date');
    horoDate.innerHTML = `Date of Horoscope: ${object}`;
};

function addHoroscope(object) {
    const horo = document.getElementById('horoscope');
    horo.innerHTML = `Horoscope: ${object}`;
};

function addIntensity(object) {
    const intensityNumber = document.getElementById('intensity');
    intensityNumber.innerHTML = `Intensity Rating: ${object}`;
};

function addKeywords(object) {
    const horoKeywords = document.getElementById('keywords');
    horoKeywords.innerHTML = `Keywords for the day: ${object}`;
};

function addMood(object) {
    const horoMood = document.getElementById('mood');
    horoMood.innerHTML = `Mood: ${object}`;
};

function addSunsign(object) {
    const horoSunsign = document.getElementById('sunsign');
    horoSunsign.innerHTML = `${object}`;
};

function addSunsignPicture(playerSign) {
    // console.log(playerSign);
    if (playerSign === "aquarius") {
        document.getElementById('zodPic').src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/aquarius_2652.png" 
    }
    else if (playerSign === "pisces") {
        document.getElementById('zodPic').src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/pisces_2653.png"
    }
    else if (playerSign === "aries") {
        document.getElementById('zodPic').src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/aries_2648.png"
    }
    else if (playerSign === "taurus") {
        document.getElementById('zodPic').src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/taurus_2649.png"
    }
    else if (playerSign === "gemini") {
        document.getElementById('zodPic').src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/gemini_264a.png"
    }
    else if (playerSign === "cancer") {
        document.getElementById('zodPic').src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/cancer_264b.png"
    }
    else if (playerSign === "leo") {
        document.getElementById('zodPic').src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/leo_264c.png"
    }
    else if (playerSign === "virgo") {
        document.getElementById('zodPic').src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/virgo_264d.png";
    }
    else if (playerSign === "libra") {
        document.getElementById('zodPic').src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/libra_264e.png"
    }
    else if (playerSign === "scorpio") {
        document.getElementById('zodPic').src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/scorpius_264f.png"
    }
    else if (playerSign === "sagittarius") {
        document.getElementById('zodPic').src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/sagittarius_2650.png"
    }
    else if (playerSign === "capricorn") {
        document.getElementById('zodPic').src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/capricorn_2651.png"
    }
};

function getPlayerSign(){
    let playerName = takeInput();
    let wikiUrl = `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${playerName}`;
    let loader = document.getElementById('loader');
    loader.style.display = 'block';
    getWiki(wikiUrl)
    .then((data) => {
        var birthday = findBirthday(data);
        var playerSign = whatsYourSign(birthday[0], birthday[1]);
        console.log(`player's sign: ${playerSign}`);

        let apiUrl = `https://theastrologer-api.herokuapp.com/api/horoscope/${playerSign}/tomorrow`;
        get(apiUrl)
        .then((response) => {
            addDate(response.date);
            addHoroscope(response.horoscope);
            addIntensity(response.meta.intensity);
            addSunsign(response.sunsign);
            addMood(response.meta.mood);
            addKeywords(response.meta.keywords);
            addPlayerImage(playerName, 150);
            addSunsignPicture(playerSign);
            loader.style.display = 'none';
        })
    })
}