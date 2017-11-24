// main

export function searchKeyPress (text) {
  console.log('step two')
  return {
    type: '@Main/searchKeyPress',
    text: text
  }
}

export function navabarToggle () {
  return {
    type: '@Main/navabarToggle'
  }
}

export function clearSearch () {
  return {
    type: '@Main/clearSearch',
    text: ''
  }
}

// PostForm
// export function dropdownSelect (mood) {
//   return {
//     type: '@PostForm/dropdownSelect',
//     mood: mood
//   }
// }

export function inputchange (text) {
  return {
    type: '@PostForm/inputchange',
    inputValue: text
  }
}

export function inputundanger () {
  return {
    type: '@PostForm/inputundanger',
    inputDanger: false
  }
}

export function moodToggle () {
  return {
    type: '@PostForm/moodToggle'
  }
}

export function trueMoodToggle () {
  return {
    type: '@PostForm/trueMoodToggle',
    moodToggle: true
  }
}

export function inputdanger () {
  return {
    type: '@PostForm/inputdanger',
    inputDanger: true
  }
}

// postitem
export function tooltipTrue () {
  return {
    type: '@PostItem/tooltipTrue',
    tooltipOpen: true
  }
}

export function tooltipFalse () {
  return {
    type: '@PostItem/tooltipFalse',
    tooltipOpen: false
  }
}

export function tooltipToggle (tooltipOpen) {
  return {
    type: '@PostItem/tooltipToggle',
    tooltipOpen: tooltipOpen
  }
}
