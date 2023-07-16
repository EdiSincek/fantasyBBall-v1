import { useParams } from 'react-router-dom';
import Team from '../components/team/Team'

function TeamPage() {
    const { teamId } = useParams();
    return (
        <div className='TeamPage'>
            <h1>Team PAGE: {teamId}</h1>
            <Team teamId={teamId} />
        </div>
    )

}
export default TeamPage;