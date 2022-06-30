function songs(inputArr) {
    let songsCount = Number(inputArr.shift());
    let listType = inputArr.pop();

    class Songs {
        constructor(myList, name) {
            this.myList = myList;
            this.name = name;
        }
        output() {
            console.log(`${this.name}`);
        }
    }

    let songsArray = [];

    for (let elements of inputArr) {
        let description = elements.split('_');
        let playList = description[0];
        let songName = description[1];
        let songDuration = description[2];
        let currentSong = new Songs(playList, songName);

        if (listType === "all") {
            songsArray.push(currentSong);
        } else if (playList === listType) {
            songsArray.push(currentSong);
        }
    }

    for (let song of songsArray) {
        song.output();

    }

}
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'])