import { makeAutoObservable } from "mobx"
class Timer {
    secondsPassed = 0

    constructor() {
        makeAutoObservable(this)
    }

    increaseTimer() {
        this.secondsPassed += 1
    }

    setTimer(time){

        this.secondsPassed = time;
    }
}

const myTimer = new Timer()
setInterval(() => {
    myTimer.increaseTimer()
}, 1000)

export default myTimer