export const userService = {
    getUser,
    // getContactById,
    // deleteContact,
    // saveContact,
    // getEmptyContact
}

function getUser() {
    return {
        name: "Ochoa Hyde",
        coins: 100,
        moves: []
    }
}