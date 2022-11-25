const LS_NAME = 'favoritePlayers';
const MAX_FAV_PLAYERS = 12;

function getData() {
    const rawData = window.localStorage.getItem(LS_NAME);
    const data = JSON.parse(rawData);

    if (data) {
        if (data.length > MAX_FAV_PLAYERS) {
            return data.slice(0, MAX_FAV_PLAYERS);
        }
    }
    return data;
}

const toastSettings = {
    duration: 4000,
    isClosable: true,
};

const successToast = {
    ...toastSettings,
    status: 'success',
};

const errorToast = {
    ...toastSettings,
    status: 'error',
};

function isExisting(playerid) {
    // This is used within the JSX components if ternary display.
    const data = getData();
    if (data) {
        return data.includes(playerid);
    } else {
        return false;
    }
}

function addPlayer(playerid, nickname, toast) {
    // Function that adds a player // creates a list and then adding a player
    const data = getData();

    if (data) {
        const isAlreadyIn = data.includes(playerid);

        if (isAlreadyIn) {
            toast({
                ...errorToast,
                description: `${nickname} already in your favorites!`,
            });
        } else {
            data.push(playerid);
            window.localStorage.setItem(LS_NAME, JSON.stringify(data));
            toast({
                ...successToast,
                description: `Added ${nickname} to your favorites!`,
            });
        }
    } else {
        let nicknamesArray = [];
        nicknamesArray.push(playerid);
        window.localStorage.setItem(LS_NAME, JSON.stringify(nicknamesArray));
        toast({
            ...successToast,
            description: `A new favorites list has been created!`,
        });
        toast({
            ...successToast,
            description: `Added ${nickname} to your favorites!`,
        });
    }
}

function removePlayer(playerid, nickname, toast) {
    // Removes a player from a list
    const data = getData();
    if (data) {
        const isInTheList = data.includes(playerid);

        if (isInTheList) {
            if (data.length > 0) {
                const touchedData = data.filter((id) => id !== playerid);
                window.localStorage.setItem(
                    LS_NAME,
                    JSON.stringify(touchedData),
                );
                toast({
                    ...successToast,
                    description: `${nickname} was remove from your favorites!`,
                });
            } else {
                window.localStorage.removeItem(LS_NAME);
                toast({
                    ...successToast,
                    description: `${nickname} was remove from your favorites!`,
                });
                toast({
                    ...successToast,
                    description: `${nickname} was the last player in your favorites and the list has been reset!`,
                });
            }
        } else {
            toast({
                ...errorToast,
                description: `${nickname} is not in your favorites!`,
            });
        }
    } else {
        toast({
            ...errorToast,
            description: `No favorites list found!`,
        });
    }
}

function resetAllPlayers(toast) {
    const data = getData();
    if (data) {
        window.localStorage.removeItem(LS_NAME);
        toast({
            ...successToast,
            description: `Your favorites has been reset!`,
        });
    } else {
        toast({
            ...errorToast,
            description: `No favorites list found!`,
        });
    }
}

function toggleAction(playerid, nickname, toast, rerenderFunc) {
    rerenderFunc();
    if (isExisting(playerid)) {
        return removePlayer(playerid, nickname, toast);
    } else {
        return addPlayer(playerid, nickname, toast);
    }
}

const methods = {
    getFavoritesList: getData,
    isExisting,
    addPlayer,
    removePlayer,
    resetAllPlayers,
    toggleAction,
};

export default methods;
