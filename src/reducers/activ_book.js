export function ActivBook (state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload
  }

  return state
}

export function BookReducer () {
  return [
    { title: 'javascript: the good parts', pages: 101 },
    { title: 'Harry Potter', pages: 30 },
    { title: 'The Dark Tower', pages: 86 },
    { title: 'Eloquent Ruby', pages: 100 }
  ]
}
