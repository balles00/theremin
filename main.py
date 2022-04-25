# Frequenz-Tabellen der Noten C2 bis C4
FREQ = [65.41, 69.3, 73.42, 77.78, 82.41, 87.31, 92.5, 98, 103.83, 110, 116.54, 123.47, 2*65.41, 2*69.3,  2* 73.42,  2*77.78, 2*82.41,  2*87.31, 2*92.5,  2 *98, 2 *103.83,  2*110, 2*116.54,
 2 * 123.47]

music.set_volume(64)
music.set_tempo(95)

def increase_tempo():
    music.change_tempo_by(5)

def decrease_tempo():
    music.change_tempo_by(-5)

def on_forever():
   # Werte aus den Sensoren lesen
   i = Math.map(input.rotation(Rotation.PITCH), -180, 180, 0, 12) # Grundton
   x = Math.map(input.rotation(Rotation.ROLL), -180, 180, 1, 5) # Oktavierung
  
   # Tempo verändern
   #v = Math.map(maqueen.ultrasonic(PingUnit.CENTIMETERS), 0.2, 30, 0, 128)
   #music.set_volume(v)

   input.on_button_pressed(Button.A, increase_tempo)
   input.on_button_pressed(Button.B, decrease_tempo)
 
   # Maj7 Arpeggio spielen
   music.play_tone(x * FREQ[Math.round(i)], music.beat(BeatFraction.QUARTER))
   music.play_tone(x * FREQ[Math.round(i) + 4], music.beat(BeatFraction.QUARTER))
   music.play_tone(x * FREQ[Math.round(i) + 7], music.beat(BeatFraction.QUARTER))
   music.play_tone(x * FREQ[Math.round(i) + 11], music.beat(BeatFraction.QUARTER))
 
basic.forever(on_forever)
