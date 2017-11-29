/* eslint-disable no-constant-condition */
import { fork } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
// 引入action,最後的rootSaga要fork
import * as actions from '../../../actions'

export function * watchFetchUser () {
  yield * takeEvery('*', fetchUser)
}

export function * fetchUser () {
  console.log('????')
}

// const action = type => ({type})

// /* eslint-disable no-console */
// const countdown = (secs) => {
//   console.log('countdown', secs) // cont與秒數
//   return eventChannel(listener => {
//     const iv = setInterval(() => {
//       secs -= 1
//       console.log('countdown', secs) // 監聽count與秒數-1
//       if (secs > 0) { listener(secs) } else { // 如果秒數>0 顯示listener的-1
//         listener(END)                         // 不是就顯示end並且清除iv(秒數)
//         clearInterval(iv)
//         console.log('countdown terminated')   // 完全結束後顯示
//       }
//     }, 1000)                                  // 每秒重整一次
//     return () => {
//       clearInterval(iv)
//       console.log('countdown cancelled')      // 結束後清除並顯示log
//     }
//   }
//   )
// }

// export function * incrementAsync ({value}) {
//   // call創建一條 Effect 描述信息，指示 middleware 調用 fn 函數並以 args 為參數。
//   // fn: Function - 一個 Generator 函數, 或者返回 Promise 的普通函數
//   // args: Array - 一個數組，作為 fn 的參數
//   const chan = yield call(countdown, value)
//   try {
//     while (true) {
//       let seconds = yield take(chan) // 等待countdown的value
//       // put 創建一條 Effect 描述信息，指示 middleware 發起一個 action 到 Store
//       yield put({type: INCREMENT_ASYNC, value: seconds})
//     }
//   } finally {
//     if (!(yield cancelled())) {
//       // 如果結束時尚未cancell 則呼叫INCREMENT並結束倒數
//       yield put(action(INCREMENT))
//       yield put(action(COUNTDOWN_TERMINATED))
//     }
//     chan.close()
//   }
// }

// export function * watchIncrementAsync () { // 增量異步
//   try {
//     while (true) {
//       // take指示 middleware 等待 Store 上指定的 action (倒數計時)
//       const action = yield take(INCREMENT_ASYNC)
//       // starts a 'Race' between an async increment and a user cancel action
//       // if user cancel action wins, the incrementAsync will be cancelled automatically
//       // 在異步增量和用戶取消操作之間啟動一個“Race”
//       // 如果用戶取消動作獲勝，incrementAsync將自動取消
//       // race創建一條 Effect 描述信息，指示 middleware 在多個 Effect 之間執行一個 race
//       yield race([
//         call(incrementAsync, action),
//         take(CANCEL_INCREMENT_ASYNC)
//       ])
//     }
//   } finally {
//     console.log('watchIncrementAsync terminated')
//   }
// }

export default function * rootSaga () {
  // fork 類似於 call，可以用來調用普通函數和 Generator 函數。
  // 但 fork 的調用是無阻塞的，在等待 fn 返回結果時，middleware 不會暫停 Generator。
  // yield fork(watchIncrementAsync)
  yield fork(watchFetchUser)
}
