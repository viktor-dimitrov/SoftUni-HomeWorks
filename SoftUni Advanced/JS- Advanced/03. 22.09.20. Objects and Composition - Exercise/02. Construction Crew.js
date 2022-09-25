function constructionCrew(worker) {

    if (worker.dizzines === false) {
        worker.levelOfHydrated += worker.experience * 0.1 * worker.weight;
        worker.dizziness = false;
    }
    return worker;

}
console.log(constructionCrew({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }))