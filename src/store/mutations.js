const clonedeep = require('lodash.clonedeep')

export const setState = (prevState, newState) => Object.assign(prevState, newState)

export const plantSeed = (state, plant) => {
    state.stock[plant].seedAmount--
    for (let index = 0; index < state.plants[plant].plantsPerSeed; index++) {

        state.garden.plants.push(clonedeep(state.plants[plant]))
    }
}

export const waterPlant = (state, index) => {
    console.log('Plant watered', index)
    state.garden.plants[index].wateredTime += 10
}

export const makeSeed = (state, plant) => {
    state.stock[plant].plantAmount--
    state.stock[plant].seedAmount += state.plants[plant].seedsPerPlant
}

export const removePlant = (state, index) => {
    state.garden.plants.splice(index, 1)
}

export const mixSeeds = (state, { mainPlant, secondaryPlant }) => {
    const result = state.plantCombinations[mainPlant][secondaryPlant]

    state.stock[mainPlant].seedAmount -= 1
    state.stock[secondaryPlant].seedAmount -= 1

    // Checking if there is result

    if (result === '') {
        const log = `${state.plants[mainPlant].label} + ${state.plants[secondaryPlant].label} = Nothing`
        for (let index = 0; index < state.plantCombinationsLog.length; index++) {
            if (state.plantCombinationsLog[index] === log) {
                return 0
            }
        }

        state.plantCombinationsLog.push(log)

    } else {

        state.stock[result].seedAmount += 1

        const log = `${state.plants[mainPlant].label} + ${state.plants[secondaryPlant].label} = ${state.plants[result].label}`
        for (let index = 0; index < state.plantCombinationsLog.length; index++) {
            if (state.plantCombinationsLog[index] === log) {
                return 0
            }
        }

        state.plantCombinationsLog.push(log)
    }
}

export const clearCombinationLog = (state) => { state.plantCombinationsLog = [] }

export const updateGame = (state) => {

    state.garden.plants.forEach((plant, index) => {

        if (plant.growthTime <= 0) {

            state.stock[plant.name].plantAmount++
            state.garden.plants.splice(index, 1)


        } else {
            plant.growthTime--

            if (plant.growthTime != 0 && state.garden.plants[index].wateredTime > 0) {
                plant.growthTime--
                state.garden.plants[index].wateredTime--
            }
        }


    });

    let totalSlots = 0

    Object.values(state.stock).forEach(plant => {
        if (plant.seedAmount > 0 && plant.found === false) {
            plant.found = true
        }

        if (plant.found === true) {
            totalSlots++
        }
    });

    state.garden.totalSlots = 6 + totalSlots
}