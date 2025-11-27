const producerGUI = new UI.StandartWindow({
  standart: {
    header: {text: {text: "Mutagen Producer"}},
    inventory: {standart: true},
    background: {standart: true}
  },
  drawing: [
    {type: "bitmap", x: 400, y: 80, bitmap: "gd_energy_0", scale: 3.2},
    {type: "bitmap", x: 630, y: 155, bitmap: "gd_progress_0", scale: 3.2},
    {type: "bitmap", x: 800, y: 80, bitmap: "liquid_background", scale: 3.2}
  ],
  elements: {
    "energy": {type: "scale", x: 403, y: 84, direction: 1, value: 0, bitmap: "gd_energy_1", scale: 3.2},
    "progress": {type: "scale", x: 630, y: 155, value: 0, bitmap: "gd_progress_1", scale: 3.2},
    "liquid": {type: "scale", x: 803, y: 84, direction: 1, value: 0, bitmap: "liqued_background_2", scale: 3.2},
    "slot": {type: "slot", x: 530, y: 150}
  }
});