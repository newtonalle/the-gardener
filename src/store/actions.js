import defaultState from './state'

export const resetState = (context) => context.commit('setState', defaultState())

export const plantSeed = (context, plant) => context.commit('plantSeed', plant)

export const removePlant = (context, index) => context.commit('removePlant', index)

export const waterPlant = (context, index) => context.commit('waterPlant', index)

export const makeSeed = (context, plant) => context.commit('makeSeed', plant)

export const mixSeeds = (context, { mainPlant, secondaryPlant }) => context.commit('mixSeeds', { mainPlant, secondaryPlant })

export const clearCombinationLog = (context) => context.commit('clearCombinationLog')

export const updateGame = (context) => context.commit('updateGame')