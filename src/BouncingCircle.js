import React, { Component } from 'react'
import './App.css'
import * as d3 from 'd3'
import 'd3-shape'
import 'd3-transition'
import { select } from 'd3-selection'

class BouncingCircle extends Component {
   constructor(props){
      super(props)
      this.createBouncingCircle = this.createBouncingCircle.bind(this)
      this.interval = 62.5
   }

   componentWillMount() {
     d3.interval(()=>this.vibrate(), 4*this.interval)
   }

   componentDidMount() {
      this.createBouncingCircle()
   }

   componentDidUpdate() {
      this.createBouncingCircle()
   }

   vibrate(){
     const node = this.node
     select(node)
      .selectAll('circle')
      .transition()
      .attr('cy', 25)
      .duration(this.interval)
      .transition()
      .attr('cy', 30)
      .duration(this.interval)
      .transition()
      .attr('cy', 35)
      .duration(this.interval)
      .transition()
      .attr('cy', 30)
      .duration(this.interval);
   }

   createBouncingCircle() {
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
     width={60} height={60}>
     </svg>
  }
}
export default BouncingCircle
