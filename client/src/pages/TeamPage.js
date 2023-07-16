import { useParams } from 'react-router-dom';

function TeamPage() {
    const { teamId } = useParams();
    return (
        <h1>Team PAGE: {teamId}</h1>
    )

}
export default TeamPage;