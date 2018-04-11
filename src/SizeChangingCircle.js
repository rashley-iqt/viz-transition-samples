import React, { Component } from 'react'
import './App.css'
import * as d3 from 'd3'
import 'd3-shape'
import 'd3-transition'
import { select } from 'd3-selection'

class SizeChangingCircle extends Component {
   constructor(props){
      super(props)
      this.createSizeChangingCircle = this.createSizeChangingCircle.bind(this)
      this.interval = 150
   }

   componentWillMount() {
     d3.interval(()=>this.vibrate(), 4*this.interval)
   }

   componentDidMount() {
      this.createSizeChangingCircle()
   }

   componentDidUpdate() {
      this.createSizeChangingCircle()
   }

   vibrate(){
     const node = this.node
     select(node)
      .selectAll('circle')
      .transition()
      .attr('r', 10)
      .duration(this.interval)
      .transition()
      .attr('r', 20)
      .duration(this.interval)
      .transition()
      .attr('r', 30)
      .duration(this.interval)
      .transition()
      .attr('r', 20)
      .duration(this.interval);
   }

   createSizeChangingCircle() {
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
     .attr('r', 20)
  }

  render() {
     return <svg ref={node => this.node = node}
     width={60} height={60}>
     </svg>
  }
}
export default SizeChangingCircle
