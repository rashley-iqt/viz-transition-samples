import React, { Component } from 'react'
import './App.css'
import * as d3 from 'd3'
import 'd3-shape'
import 'd3-transition'
import { select } from 'd3-selection'

class TeleportCircle extends Component {
   constructor(props){
      super(props)
      this.createTeleportCircle = this.createTeleportCircle.bind(this)
      this.interval = 250
   }

   componentWillMount() {
     d3.interval(()=>this.teleport(), 6*this.interval)
   }

   componentDidMount() {
      this.createTeleportCircle()
   }

   componentDidUpdate() {
      this.createTeleportCircle()
   }

   teleport(){
     const node = this.node
     select(node)
      .selectAll('circle')
      .transition()
      .attr('r', 2)
      .duration(this.interval)
      .transition()
      .attr('cx', 570)
      .duration(this.interval)
      .transition()
      .attr('r', 25)
      .duration(this.interval)
      .transition()
      .attr('r', 2)
      .duration(this.interval)
      .transition()
      .attr('cx', 30)
      .duration(this.interval)
      .transition()
      .attr('r', 25)
      .duration(this.interval)
   }

   createTeleportCircle() {
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
export default TeleportCircle
