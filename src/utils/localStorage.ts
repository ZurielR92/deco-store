export const addToFavorites = ( ref:string ) => {
    const newFavorites = [
        ...getFavorites(),
        ref
    ]
    localStorage.setItem('favoritos',JSON.stringify(newFavorites))
}

export const RemoveFavorite = (ref:string) =>{
    if(localStorage !== undefined && localStorage !== null){
        const newFavorites:string[] = getFavorites().filter((fav:string) => ref !== fav)
        localStorage.setItem('favoritos',JSON.stringify(newFavorites))
    }
}

export const isInFavorites = ( ref:string ):boolean => {
    if(localStorage !== undefined && localStorage !== null){
        return getFavorites().includes(ref);
    } else {
        return false
    }
}

export const getFavorites = () => {
    if(localStorage !== undefined && localStorage !== null){
        const favorites = localStorage.getItem('favoritos');
        return favorites ? JSON.parse(favorites) : []
    }
}