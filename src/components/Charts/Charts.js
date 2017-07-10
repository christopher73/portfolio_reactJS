import React,{Component} from 'react';

import {HorizontalBar, Pie} from 'react-chartjs-2';

class Chart extends Component{

  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: false,
    legendPosition:'right'
  }

  render(){



    return (
      <div className="chart">
        <HorizontalBar
          data={this.state.chartData}
          
          options={{
            animation: {
              duration:3000
            },
            scales: {
            xAxes: [{
                ticks: {
                    beginAtZero:true
                    }
                }]
            },
            title:{
              display:this.props.displayTitle,
              text:'Power Levels',
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />

      </div>
    )
  }
}

export default Chart;