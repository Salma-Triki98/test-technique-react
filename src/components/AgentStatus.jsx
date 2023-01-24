import React from 'react';
import Data from './Data.json';




const AgentStatus = (props) => {
    const allAgents = Data.results.filter(data => data.id !== "000").length;
    let activeAgents = 0;
    Data.results.map(data => data.status === "active" && data.id !== "000" ? activeAgents +=1: null);
    let disconnectedAgents =0;
    Data.results.map(data => data.status === "disconnected" ? disconnectedAgents +=1: null);
    let pendingAgents = 0;
    Data.results.map(data => data.status === "pending" ? pendingAgents+=1: null);
    let neverConAgents =0;
    Data.results.map(data=> data.status=== "never_connected"? neverConAgents: null)

return (
    <div className='body'>
        <div>
            <p>
                Hello admin, 
                <br></br>
                View the status of your agents and the evolution of their latest alerts
            </p>
            <h4 className='my-4'>Installed agents by their status</h4>
        </div>
        <div className='d-flex justify-content-between'>
            <div className="card">
                <div className="card-body ">
                    <p className='title'>Total agents </p>
                    <h3 className='card1'>{allAgents}</h3>
                </div>
            </div>
            <div className="card">
                <div className="card-body ">
                    <p className='title'>Active agents </p>
                    <h3 className='card2'>{activeAgents}</h3>
                </div>
            </div>
            <div className="card">
                <div className="card-body ">
                    <p className='title'>Disconnected agents </p>
                    <h3 className='card3'>{disconnectedAgents}</h3>
                </div>
            </div>
            <div className="card">
                <div className="card-body ">
                    <p className='title'>Pending agents </p>
                    <h3 className='card4'>{pendingAgents}</h3>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <p className='title'>Never connected agents</p>
                    <h3 className='card5'>{neverConAgents}</h3>
                </div>
            </div>
        </div>
    </div>  

)
}

export default AgentStatus