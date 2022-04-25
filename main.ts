//  Frequenz-Tabellen der Noten C2 bis C4
let FREQ = [65.41, 69.3, 73.42, 77.78, 82.41, 87.31, 92.5, 98, 103.83, 110, 116.54, 123.47, 2 * 65.41, 2 * 69.3, 2 * 73.42, 2 * 77.78, 2 * 82.41, 2 * 87.31, 2 * 92.5, 2 * 98, 2 * 103.83, 2 * 110, 2 * 116.54, 2 * 123.47]
music.setVolume(64)
music.setTempo(95)
basic.forever(function on_forever() {
    //  Werte aus den Sensoren lesen
    let i = Math.map(input.rotation(Rotation.Pitch), -180, 180, 0, 12)
    //  Grundton
    let x = Math.map(input.rotation(Rotation.Roll), -180, 180, 1, 5)
    //  Oktavierung
    //  Tempo verändern
    // v = Math.map(maqueen.ultrasonic(PingUnit.CENTIMETERS), 0.2, 30, 0, 128)
    // music.set_volume(v)
    input.onButtonPressed(Button.A, function increase_tempo() {
        music.changeTempoBy(5)
    })
    input.onButtonPressed(Button.B, function decrease_tempo() {
        music.changeTempoBy(-5)
    })
    //  Maj7 Arpeggio spielen
    music.playTone(x * FREQ[Math.round(i)], music.beat(BeatFraction.Quarter))
    music.playTone(x * FREQ[Math.round(i) + 4], music.beat(BeatFraction.Quarter))
    music.playTone(x * FREQ[Math.round(i) + 7], music.beat(BeatFraction.Quarter))
    music.playTone(x * FREQ[Math.round(i) + 11], music.beat(BeatFraction.Quarter))
})
