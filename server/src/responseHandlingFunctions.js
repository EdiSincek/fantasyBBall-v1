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
                "t2_score": matchups.matchups.matchup[i].teams.team[1].team_points.total,
                "t1_fg": matchups.matchups.matchup[i].teams.team[0].team_stats.stats.stat[1].value,
                "t2_fg": matchups.matchups.matchup[i].teams.team[1].team_stats.stats.stat[1].value,
                "t1_ft": matchups.matchups.matchup[i].teams.team[0].team_stats.stats.stat[3].value,
                "t2_ft": matchups.matchups.matchup[i].teams.team[1].team_stats.stats.stat[3].value,
                "t1_3pm": matchups.matchups.matchup[i].teams.team[0].team_stats.stats.stat[4].value,
                "t2_3pm": matchups.matchups.matchup[i].teams.team[1].team_stats.stats.stat[4].value,
                "t1_points": matchups.matchups.matchup[i].teams.team[0].team_stats.stats.stat[5].value,
                "t2_points": matchups.matchups.matchup[i].teams.team[1].team_stats.stats.stat[5].value,
                "t1_rebounds": matchups.matchups.matchup[i].teams.team[0].team_stats.stats.stat[6].value,
                "t2_rebounds": matchups.matchups.matchup[i].teams.team[1].team_stats.stats.stat[6].value,
                "t1_assists": matchups.matchups.matchup[i].teams.team[0].team_stats.stats.stat[7].value,
                "t2_assists": matchups.matchups.matchup[i].teams.team[1].team_stats.stats.stat[7].value,
                "t1_steals": matchups.matchups.matchup[i].teams.team[0].team_stats.stats.stat[8].value,
                "t2_steals": matchups.matchups.matchup[i].teams.team[1].team_stats.stats.stat[8].value,
                "t1_blocks": matchups.matchups.matchup[i].teams.team[0].team_stats.stats.stat[9].value,
                "t2_blocks": matchups.matchups.matchup[i].teams.team[1].team_stats.stats.stat[9].value,
                "t1_turnovers": matchups.matchups.matchup[i].teams.team[0].team_stats.stats.stat[10].value,
                "t2_turnovers": matchups.matchups.matchup[i].teams.team[1].team_stats.stats.stat[10].value,

            }
            result[i] = res;
        }
        return result;

    },

    async getBasicTeamInfo(teamId) {
        const team = await yahoo.yfbb.getTeam(teamId);
        const roster = await yahoo.yfbb.getRoster(teamId);

        const result = {
            "name": team.name,
            "manager": team.managers.manager.nickname,
            "managerElo": team.managers.manager.felo_score,
            "managerEloTier": team.managers.manager.felo_tier,
            "managerImage": team.managers.manager.image_url,
            "numberOfMoves": team.number_of_moves,
            "numberOfTrades": team.number_of_trades,
            "teamImage": team.team_logos.team_logo.url,
            "waiverPriority": team.waiver_priority,
            "gamesBehind": team.team_standings.games_back,
            "teamStandings": team.team_standings.rank,
            "wins": team.team_standings.outcome_totals.wins,
            "ties": team.team_standings.outcome_totals.ties,
            "loses": team.team_standings.outcome_totals.loses,
            "percentage": team.team_standings.outcome_totals.percentage,
            "roster": roster
        }
        return result;
    },

    async getTeamSeasonStats(teamId) {
        const teamStats = await yahoo.yfbb.getTeamSeasonStats(teamId);

        const result = {
            "coverage": "Season",
            "fgTotal": teamStats.team.team_stats.stats.stat[0].value,
            "fg": teamStats.team.team_stats.stats.stat[1].value,
            "ftTotal": teamStats.team.team_stats.stats.stat[2].value,
            "ft": teamStats.team.team_stats.stats.stat[3].value,
            "threepm": teamStats.team.team_stats.stats.stat[4].value,
            "points": teamStats.team.team_stats.stats.stat[5].value,
            "rebounds": teamStats.team.team_stats.stats.stat[6].value,
            "assists": teamStats.team.team_stats.stats.stat[7].value,
            "steals": teamStats.team.team_stats.stats.stat[8].value,
            "blocks": teamStats.team.team_stats.stats.stat[9].value,
            "turnovers": teamStats.team.team_stats.stats.stat[10].value,

        }

        return (result)

    },

    async getTeamWeeklyStats(teamId, week) {

        const teamStats = await yahoo.yfbb.getTeamWeeklyStats(teamId, week);
        const result = {
            "coverage": "Week " + teamStats.team.team_stats.week,
            "fgTotal": teamStats.team.team_stats.stats.stat[0].value,
            "fg": teamStats.team.team_stats.stats.stat[1].value,
            "ftTotal": teamStats.team.team_stats.stats.stat[2].value,
            "ft": teamStats.team.team_stats.stats.stat[3].value,
            "threepm": teamStats.team.team_stats.stats.stat[4].value,
            "points": teamStats.team.team_stats.stats.stat[5].value,
            "rebounds": teamStats.team.team_stats.stats.stat[6].value,
            "assists": teamStats.team.team_stats.stats.stat[7].value,
            "steals": teamStats.team.team_stats.stats.stat[8].value,
            "blocks": teamStats.team.team_stats.stats.stat[9].value,
            "turnovers": teamStats.team.team_stats.stats.stat[10].value,

        }
        return result

    },

    async getPlayerStats(playerKey) {
        const playerStats = await yahoo.yfbb.getPlayerSeasonStats(playerKey);
        return (playerStats)
    }

}