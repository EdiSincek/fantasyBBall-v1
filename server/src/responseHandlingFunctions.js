const yahoo = require("./yahooFantasyBasketball");

exports.handleResponse = {
    async getRoster(teamId) {
        // const roster = await yahoo.yfbb.getRoster(teamId);
        // let players = {};
        // for (var i = 0; i < roster.length; i++) {
        //     const player = await yahoo.yfbb.getPlayer(roster[i].player_key)
        //     players += player.player_id
        // }
        // console.log(players)
        // return roster

        //TODO
    },

    async getStandings() {
        const standings = await yahoo.yfbb.getLeagueStandings();
        const result = [];

        for (let i = 0; i < standings.count; i++) {
            const record = standings.team[i].team_standings.outcome_totals.wins + "-" + standings.team[i].team_standings.outcome_totals.ties + "-" + standings.team[i].team_standings.outcome_totals.losses
            const team = {
                "name": standings.team[i].name,
                "logo": standings.team[i].team_logos.team_logo.url,
                "position": i + 1,
                "games_behind": standings.team[i].team_standings.games_back,
                "manager": standings.team[i].managers.manager.nickname,
                "manager_image": standings.team[i].managers.manager.image_url,
                "record": record
            }
            result[i] = team;
        }
        return result
    },

    async getAllMatchups() {
        const matchups = await yahoo.yfbb.getMatchups();
        const result = [];
        for (let i = 0; i < matchups.matchups.count; i++) {
            const res = {
                "t1": matchups.matchups.matchup[i].teams.team[0].name,
                "t2": matchups.matchups.matchup[i].teams.team[1].name,
                "t1_score": matchups.matchups.matchup[i].teams.team[0].team_points.total,
                "t2_score": matchups.matchups.matchup[i].teams.team[1].team_points.total
            }
            result[i] = res;
        }
        return result;

    }

}