// Main

const initMainState = {
  // navbarToggle: false,
  searchText: ''
}

export function main (state = initMainState, action) {
  switch (action.type) {
    case '@Main/searchKeyPress':
      return {
        ...state,
        searchText: action.text
      }
    case '@Main/navabarToggle':
      return {
        ...state,
        navbarToggle: !state.navbarToggle
      }
    case '@Main/clearSearch':
      return {
        ...state,
        searchText: action.text
      }
    default:
      return state
  }
}

// PostForm

const initPostFormState = {
  inputValue: null,
  inputDanger: false,
  moodToggle: false,
  mood: 'na'
}

export function postForm (state = initPostFormState, action) {
  switch (action.type) {
    case '@PostForm/dropdownSelect':
      return {
        ...state,
        mood: action.mood
      }
    case '@PostForm/inputchange':
      return {
        ...state,
        inputValue: action.inputValue
      }
    case '@PostForm/inputundanger':
      return {
        ...state,
        inputDanger: false
      }
    case '@PostForm/inputdanger':
      return {
        ...state,
        inputDanger: true
      }
    case '@PostForm/trueMoodToggle':
      return {
        ...state,
        moddToggle: true
      }
    case '@PostForm/moodToggle':
      return {
        ...state,
        moodToggle: !state.moodToggle
      }

    default:
      return state
  }
}

const initPostItemState = {
  tooltipOpen: false
}

export function postItem (state = initPostItemState, action) {
  switch (action.type) {
    case '@PostItem/tooltipTrue':
      return {
        ...state,
        tooltipOpen: true
      }
    case '@PostItem/tooltipFalse':
      return {
        ...state,
        tooltipOpen: false
      }
    case '@PostItem/tooltipToggle':
      return {
        ...state,
        tooltipOpen: !action.tooltipOpen
      }
    default:
      return state
  }
}
