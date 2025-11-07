
const getItemFromStorage = () => {
    const prevId = JSON.parse(localStorage.getItem("app"))
    return prevId ? prevId : []
}


const addItemToStorage = (arrayId) => {
    localStorage.setItem('app', JSON.stringify(arrayId))
}

const updateItemToStorage = (Id) => {
    const prevItemArray = getItemFromStorage();
    if (prevItemArray.includes(Id)) {
        return
    }
    else {
        const newItemArray = [...prevItemArray, Id];
        addItemToStorage(newItemArray);
    }

}
export { addItemToStorage, getItemFromStorage, updateItemToStorage }