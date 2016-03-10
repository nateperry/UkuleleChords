module.exports = {
  'ukulele-baritone': {
    name: 'Baritone Ukulele',
    tuning: {
      default: ['D', 'G', 'B', 'E']
    },
    chords: {
      'A': [2, 2, 2, null],
      'B': [4, 4, 4, 2],
      'C': [2, null, 1, null],
      'D': [null, 2, 3, 2],
      'E': [2, 1, null, null],
      'F': [3, 2, 1, 1],
      'G': [null, null, null, 3]
    }
  },
  'ukulele-concert': {
    name: 'Concert Ukulele',
    tuning: {
      default: ['G', 'C', 'E', 'A']
    },
    chords: {
      'A': [2, 1, null, null],
      'B': [4, 3, 2, 2],
      'C': [null, null, null, 3],
      'D': [3, 3, 3, 3],
      'E': [1, 4, null, 2],
      'F': [2, null, 1, null],
      'G': [null, 2, 3, 2]
    }
  }
};