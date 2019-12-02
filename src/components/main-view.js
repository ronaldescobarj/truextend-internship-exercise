import React from 'react';

class MainView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: []
        }
    }

    render() {
        return (
            <div>Vista principal</div>
        )
    }
}

export default MainView;