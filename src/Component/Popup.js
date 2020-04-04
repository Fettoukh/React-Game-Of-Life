import React from 'react'

class Popup extends React.Component {
    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
          <h2>How it Works ?</h2>
          <ul>
              <li>Any live cell with two or three live neighbours lives on to the next generation.</li>
              <li>Any live cell with fewer than two live neighbours dies, as if caused by under-population</li>
              <li>Any live cell with more than three live neighbours dies, as if by overpopulation.</li>
              <li>Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</li>
          </ul>
          <button className="center btn btn-danger" style={{bottom : "100px"}} onClick={this.props.closePopup}>close</button>
          </div>
        </div>
      );
    }
  }

export default Popup
