const apiaryGUI = new UI.StandartWindow({
  standart: {
    header: {text: {text: "Industrial Apiary"}},
    inventory: {standart: true},
    background: {standart: true}
  },
  drawing: [
    {type: "bitmap", x: 350, y: 80, bitmap: "gd_energy_0", scale: 3.2},
    {type: "bitmap", x: 580, y: 90, bitmap: "gd_progress_0", scale: 3.2}
  ],
  elements: {
    "energy": {type: "scale", x: 353, y: 84, direction: 1, bitmap: "gd_energy_1", scale: 3.2},
    "progress": {type: "scale", x: 580, y: 90, bitmap: "gd_progress_1", scale: 3.2},
    "slot1": {type: "slot", x: 470, y: 110, bitmap: "slot_princess"},
    "slot2": {type: "slot", x: 470, y: 190, bitmap: "slot_drone"},
    "slotUpg0": {type: "slot", x: 580, y: 160, bitmap: "slot_upg"},
    "slotUpg1": {type: "slot", x: 640, y: 160, bitmap: "slot_upg"},
    "slotUpg2": {type: "slot", x: 580, y: 220, bitmap: "slot_upg"},
    "slotUpg3": {type: "slot", x: 640, y: 220, bitmap: "slot_upg"},
    "slotProduct0": {type: "slot", x: 750, y: 100},
    "slotProduct1": {type: "slot", x: 810, y: 100},
    "slotProduct2": {type: "slot", x: 870, y: 100},
    "slotProduct3": {type: "slot", x: 750, y: 160},
    "slotProduct4": {type: "slot", x: 810, y: 160},
    "slotProduct5": {type: "slot", x: 870, y: 160},
    "slotProduct6": {type: "slot", x: 750, y: 220},
    "slotProduct7": {type: "slot", x: 810, y: 220},
    "slotProduct8": {type: "slot", x: 870, y: 220},
    "text1": {type: "text", x: 345, y: 320, width: 500, height: 30},
    "text2": {type: "text", x: 345, y: 360, width: 500, height: 30}
  }
});