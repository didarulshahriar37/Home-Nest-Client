import React, { use } from 'react';
import Agent from '../Agent/Agent';

const Agents = ({ agentsPromise }) => {
    const agents = use(agentsPromise);
    return (
        <div className='max-w-5xl grid grid-cols-1 md:grid-cols-3 mx-auto gap-1 md:gap-10'>
            {
                agents.map(agent => <Agent key={agent._id} agent={agent}></Agent>)
            }
        </div>
    );
};

export default Agents;