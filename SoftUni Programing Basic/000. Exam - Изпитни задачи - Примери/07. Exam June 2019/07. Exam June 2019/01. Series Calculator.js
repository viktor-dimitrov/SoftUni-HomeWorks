function seriesCalculator (input) {
    let movieName = input[0];
    let seassonsCount = Number(input[1]);
    let episodsCount = Number(input[2]);
    let episodDuration = Number(input[3]);

    let episodFullDuration = episodDuration * 1.2;
    let extraTime = seassonsCount * 10;
    let timeForAll = extraTime + episodFullDuration * episodsCount * seassonsCount;

    console.log (`Total time needed to watch the ${movieName} series is ${timeForAll} minutes.`);
}
seriesCalculator(["Lucifer",
"3",
"18",
"55"])