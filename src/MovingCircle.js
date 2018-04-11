import React, { Component } from 'react'
import './App.css'
import * as d3 from 'd3'
import 'd3-shape'
import 'd3-transition'
import { select } from 'd3-selection'

class MovingCircle extends Component {
   constructor(props){
      super(props)
      this.createMovingCircle = this.createMovingCircle.bind(this)
      this.interval = 2000
   }

   componentWillMount() {
     d3.interval(()=>this.move(), 2*this.interval)
   }

   componentDidMount() {
      this.createMovingCircle()
   }

   componentDidUpdate() {
      this.createMovingCircle()
   }

   move(){
     const node = this.node
     select(node)
      .selectAll('circle')
      .transition()
      .attr('cx', 570)
      .duration(this.interval)
      .transition()
      .attr('cx', 30)
      .duration(this.interval)
   }

   createMovingCircle() {
   const node = this.node

  select(node)
     .append('circle')

  select(node)
     .selectAll('circle')
     .exit()
     .remove()

  select(node)
     .selectAll('circle')
     .style('fill', 'black')
     .attr('cx', 30)
     .attr('cy', 30)
     .attr('r', 25)
  }

  render() {
     return <svg ref={node => this.node = node}
     width={600} height={60}>
     </svg>
  }
}
export default MovingCircle
