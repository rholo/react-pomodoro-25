export interface IState {
  timer: number,
  minutes: number,
  intervals: number,
  session: number,
  started: Boolean,
  breath: Boolean
}
export enum Types {
  restart = 'RESTART',
  toggleStart = 'TOGGLE_START',
  toggleBreath = 'TOGGLE_BREATH',
  setMinutes = 'SET_MINUTES',
  countDown = 'COUNTDOWN',
  increaseSession = 'INCREASE_SESSION',
  decreaseSession = 'DECREASE_SESSION',
  increaseIntervals = 'INCREASE_INTERVALS',
  decreaseIntervals = 'DECREASE_INTERVALS',
  increaseTimer = 'INCREASE_TIMER',
  decreaseTimer = 'DECREASE_TIMER'

}

export type Action =
  | { type: 'RESTART' }
  | { type: 'TOGGLE_START' }
  | { type: 'TOGGLE_BREATH' }
  | { type: 'SET_MINUTES' }
  | { type: 'COUNTDOWN' }
  | { type: 'INCREASE_SESSION' }
  | { type: 'DECREASE_SESSION' }
  | { type: 'INCREASE_INTERVALS' }
  | { type: 'DECREASE_INTERVALS' }
  | { type: 'INCREASE_TIMER' }
  | { type: 'DECREASE_TIMER' }


export const timerReducer = (state: IState, action: Action) => {
  switch (action.type) {
    case Types.restart:
      return { ...state }
    case Types.toggleStart: {
      return { ...state, started: !state.started };
    }
    case Types.toggleBreath:
      return { ...state, breath: !state.breath };
    case Types.setMinutes:
      return { ...state, minutes: !state.breath ? state.timer : state.intervals }
    case Types.countDown:
      return { ...state, minutes: state.minutes > 0 ? state.minutes - 1 : 0 };
    case Types.increaseSession:
      return { ...state, session: state.session + 1 };
    case Types.decreaseSession:
      return { ...state, session: state.session > 0 ? state.session - 1 : 0 };
    case Types.increaseIntervals:
      return { ...state, intervals: state.intervals + 1 };
    case Types.decreaseIntervals:
      return {
        ...state,
        intervals: state.intervals > 0 ? state.intervals - 1 : 0,
      };
    case Types.increaseTimer:
      return { ...state, timer: state.timer + 1, minutes: state.timer + 1 };
    case Types.decreaseTimer:
      const timer = state.timer > 0 ? state.timer - 1 : 0;
      return { ...state, timer, minutes: timer };
    default:
      return state
  }
}
