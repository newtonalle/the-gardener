export const getPlants = (state) => state.plants

export const getGarden = (state) => state.garden

export const getNumberOfAvailableSlots = (state) => state.garden.totalSlots - state.garden.plants.length

export const getNumberOfUniquePlantsFound = (state) => {
    let numberOfUniqueFoundPlants = 0

    Object.values(state.stock).forEach(plant => {
        if (plant.found) {
            numberOfUniqueFoundPlants++
        }
    });

    return numberOfUniqueFoundPlants
}
export const getPlantCombinationLog = (state) => state.plantCombinationsLog

export const getStock = (state) => state.stock