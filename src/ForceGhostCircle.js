import React, { Component } from 'react'
import './App.css'
import * as d3 from 'd3'
import 'd3-shape'
import 'd3-transition'
import { select } from 'd3-selection'

class ForceGhostCircle extends Component {
   constructor(props){
      super(props)
      this.createForceGhostCircle = this.createForceGhostCircle.bind(this)
      this.interval = 750
   }

   componentWillMount() {
     d3.interval(()=>this.ghostWalk(), 7*this.interval)
   }

   componentDidMount() {
      this.createForceGhostCircle()
   }

   componentDidUpdate() {
      this.createForceGhostCircle()
   }

   ghostWalk(){
     const node = this.node
     select(node)
      .selectAll('circle')
      .transition()
      .attr('opacity', '0')
      .duration(2*this.interval)
      .transition()
      .style('fill', 'none')
      .style('stroke', 'aqua')
      .style('stroke-width', '2')
      .attr('opacity', '1')
      .duration(this.interval)
      .transition()
      .attr('cx', 570)
      .duration(2*this.interval)
      .transition()
      .style('fill', 'none')
      .style('stroke', 'none')
      .style('stroke-width', '0')
      .attr('cx', 30)
      .duration(this.interval)
      .transition()
      .style('fill', 'black')
      .duration(this.interval)
   }

   createForceGhostCircle() {
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
export default ForceGhostCircle
