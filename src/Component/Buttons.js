import React, { Component } from 'react'
import { ButtonToolbar} from 'react-bootstrap'

export class Buttons extends Component {
    handleSelect = (evt) => {
        this.props.gridSize(evt);
    }
    render() {
        return (
            <div className = 'center'>
                <ButtonToolbar>
                    <button className = 'btn btn-success' 
                        onClick={this.props.playButton}>
                        Play
                    </button>
                    <button className = 'btn btn-danger' 
                        onClick={this.props.pauseButton}>
                        Pause
                    </button>
                    <button className = 'btn btn-warning' 
                        onClick={this.props.clear}>
                        Clear
                    </button>
                    <button className = 'btn btn-default' 
                        onClick={this.props.slow}>
                        slow
                    </button>
                    <button className = 'btn btn-default' 
                        onClick={this.props.fast}>
                        Fast
                    </button>
                    <button className = 'btn btn-primary' 
                        onClick={this.props.seed}>
                        Seed
                    </button>
                    <button className = 'btn btn-default' 
                        onClick={this.props.gridSize1}>
                        20x30
                    </button>
                    <button className = 'btn btn-default' 
                        onClick={this.props.gridSize2}>
                        30x50
                    </button>
                    <button className = 'btn btn-default' 
                        onClick={this.props.gridSize3}>
                        50x70
                    </button>
                    <button className = 'btn btn-info' 
                        onClick={this.props.togglePopup}>
                        How it works ?
                    </button>
                    {/* <DropdownButton
						title="Grid Size"
						id="size-menu"
						onSelect={this.handleSelect}
					>
						<MenuItem eventKey="1">20x10</MenuItem>
						<MenuItem eventKey="2">50x30</MenuItem>
						<MenuItem eventKey="3">70x50</MenuItem>
					</DropdownButton> */}
                </ButtonToolbar>
                
            </div>
        )
    }
}

export default Buttons
