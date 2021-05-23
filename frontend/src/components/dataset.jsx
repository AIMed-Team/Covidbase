import React from 'react'

const Dataset = ({ dataset }) => {
    return (
        <div>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{dataset.name}</h5>
                    <a href={dataset.url}>url</a>
                </div>
            </div>
        </div>
    )
};

export default Dataset
