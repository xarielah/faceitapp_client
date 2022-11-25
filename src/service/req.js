import axios from 'axios';
import api from './paths';

async function getPlayerData({ nickname, playerid, player_stack }) {
    if (player_stack) {
        const url = `${api.base + api.playerStack}`;
        const request = axios
            .post(url, { players: player_stack })
            .then((res) => res.data)
            .catch((e) => e);
        return await request;
    } else {
        const url = () => {
            if (nickname) return `${api.base + api.playerData + nickname}`;
            else return `${api.base + api.playerDataById + playerid}`;
        };
        const request = axios
            .get(url())
            .then((res) => res.data)
            .catch((e) => e);
        return await request;
    }
}

async function getPlayerStats(playerId) {
    const url = `${api.base + api.playerStats + playerId}`;
    const request = axios
        .get(url)
        .then((res) => res.data)
        .catch((e) => e);
    return await request;
}

async function getPlayerGameStats({ game, playerId }) {
    const url = `${api.base + api.playerGameStats(game, playerId)}`;
    const request = axios
        .get(url)
        .then((res) => res.data)
        .catch((e) => e);
    return await request;
}

const functions = { getPlayerData, getPlayerGameStats, getPlayerStats };

export default functions;
