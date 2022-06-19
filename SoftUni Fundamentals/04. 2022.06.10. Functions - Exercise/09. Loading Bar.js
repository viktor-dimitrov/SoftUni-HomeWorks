function loadingBar (percent) {
    let num = percent / 10;
    let loaded = '%'.repeat(num);
    let remain = '.'.repeat(10 - num);

    if (loaded.length == 10) {
        console.log (`100% Complete!`);
    } else {
        console.log(`${percent}% [${loaded}${remain}]\nStill loading...`);
    }
}
loadingBar(90)