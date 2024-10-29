export type CounterAction =
    | { type: 'increment' | 'reset' }
    | { type: 'increaseBy', payload: number }

export const doReset = (): CounterAction => ({
    type: 'reset'
})
export const doIncrement = (): CounterAction => ({
    type: 'increment'
})
export const doIncreaseBy = ( value: number ): CounterAction => ({
    type: 'increaseBy',
    payload: value
})
