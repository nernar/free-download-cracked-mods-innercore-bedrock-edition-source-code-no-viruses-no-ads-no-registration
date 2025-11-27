const mutatronGUI = new UI.StandartWindow({
  standart: {
    header: {text: {text: "Mutatron"}},
    inventory: {standart: true},
    background: {standart: true}
  },
  drawing: [
    {type: "bitmap", x: 400, y: 80, bitmap: "gd_energy_0", scale: 3.2},
    {type: "bitmap", x: 480, y: 80, bitmap: "liquid_background", scale: 3.2},
    {type: "bitmap", x: 690, y: 155, bitmap: "gd_progress_0", scale: 3.2}
  ],
  elements: {
    "energy": {type: "scale", x: 403, y: 84, direction: 1, value: 0, bitmap: "gd_energy_1", scale: 3.2},
    "liquid": {type: "scale", x: 483, y: 84, direction: 1, value: 0, bitmap: "liqued_background_2", scale: 3.2},
    "progress": {type: "scale", x: 690, y: 155, value: 0, bitmap: "gd_progress_1", scale: 3.2},
    "slotLabware": {type: "slot", x: 710, y: 80, bitmap: "slot_labware"},
    "slot1": {type: "slot", x: 600, y: 110, bitmap: "slot_princess"},
    "slot2": {type: "slot", x: 600, y: 190, bitmap: "slot_drone"},
    "slotQueen": {type: "slot", x: 850, y: 150}
  }
});