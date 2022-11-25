const paths = {
    base: process.env.REACT_APP_BACKEND || 'http://localhost:5000',
    playerData: '/players?nickname=',
    playerDataById: '/players?player_id=',
    playerStats: '/stats?playerid=',
    playerStack: '/players',
    playerGameStats: (game, id) => `/gamestats?game=${game}&playerid=${id}`,
};

export default paths;
