// process.SkyEye 可以访问
let config = {
  debug: process.SkyEye.ENV === 'dev',
  monthOpts: [ 4, 8, 12 ],
  // factoryOpts: [ 'Ro', 'Ka', 'Ra', 'In' ],
  factoryOpts: [ 'Roadrunner', 'Kasios', 'Radiance', 'Indigo' ],
  chemicalOpts: [ 'Chlorodinine', 'Methylosmolene', 'AGOC-3A', 'Appluimonia' ],
  sensorOpts: [ 'S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9' ],
  factoriesLoc: {
    'Roadrunner': [ 89, 27 ],
    'Kasios': [ 90, 21 ],
    'Radiance': [ 109, 26 ],
    'Indigo': [ 120, 22 ]
  },
  sensorsLoc: {
    S1: [ 62, 21 ],
    S2: [ 66, 35 ],
    S3: [ 76, 41 ],
    S4: [ 88, 45 ],
    S5: [ 103, 43 ],
    S6: [ 102, 22 ],
    S7: [ 89, 3 ],
    S8: [ 74, 7 ],
    S9: [ 119, 42 ]
  },
  sensorSort: [ 'S4', 'S5', 'S9', 'S6', 'S7', 'S8', 'S1', 'S2', 'S3' ],
  dangerColor: 'rgb(229,57,53)',
  // safeColor: '#bef7c3',
  safeColor: '#ddd',
  colorMap: {
    Chlorodinine: ['#f9ecf1', 'rgb(150,40,27)'],
    Methylosmolene: ['#ffebb5', 'rgb(210,84,0)'],
    Appluimonia: ['#e4f4f5', 'rgb(77,182,172)'],
    'AGOC-3A': ['#d4c1dc', 'rgb(129, 199, 132)'] // '#fbcf00'
  },
  colorText: '#63c4ff',
  windColor: '#888',
  currentTime: {
    color: '#00a8e6',
    width: 2
  }
  // windColor: '#000'
}

export default config
