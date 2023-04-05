
let initialState = {
    friendsData: [
        { name: 'Yana-jopa', isOnline: true, },
        { name: 'Vova-piska', isOnline: false, },
        { name: 'Luybanko', isOnline: false, },
        { name: 'Ciri', isOnline: false, },
        { name: 'Mama', isOnline: true, },
    ]
}

const navbarReducer = (state = initialState, action) => {

    return state;
}

export default navbarReducer;