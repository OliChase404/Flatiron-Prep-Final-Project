
const colors = [
    "Aqua",
    "Black",
    "Blue",
    "Fuchsia",
    "Green",
    "Lime",
    "Maroon",
    "Navy",
    "Olive",
    "Orange",
    "Purple",
    "Red",
    "silver",
    "Teal",
    "White",
    "Yellow",
    "chartreuse",
    "coral",
    "cornflowerBlue",
    "DarkGoldenRod",
    "DarkOrchid",
    "DeepPink",
    "DeepSkyBlue",
    "Gold",
    "GreenYellow",
    "HotPink",
    "Indigo",
    "LightSeaGreen",
    "MediumVioletRed",
    "OrangeRed",
    "BlueIndigo",
    "RebeccaPurple",
    "SpringGreen",
    "Turquoise",
    "Peru",
    "Magenta",
    "Chocolate"
  ]
  

export function getRandomColor() {
    return colors[Math.floor(Math.random()*colors.length)];
}