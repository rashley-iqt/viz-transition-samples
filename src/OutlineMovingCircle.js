import React, { Component } from 'react'
import './App.css'
import * as d3 from 'd3'
import 'd3-shape'
import 'd3-transition'
import { select } from 'd3-selection'

class OutlineMovingCircle extends Component {
   constructor(props){
      super(props)
      this.createOutlineMovingCircle = this.createOutlineMovingCircle.bind(this)
      this.interval = 62.5
      this.direction = this.props.direction
   }

   componentWillMount() {
     if (this.direction === 'vertical') {
       d3.interval(()=>this.bounce(), 4*this.interval)
     } else if(this.direction === 'horizontal'){
       d3.interval(()=>this.vibrate(), 4*this.interval)
     } else if(this.direction === 'from-center'){
       d3.interval(()=>this.grow_shrink(), 4*this.interval)
     }
   }

   componentDidMount() {
      this.createOutlineMovingCircle()
   }

   componentDidUpdate() {
      this.createOutlineMovingCircle()
   }

   vibrate(){
     const node = this.node
     select(node)
      .selectAll('#outline')
      .transition()
      .attr('cx', 25)
      .duration(this.interval)
      .transition()
      .attr('cx', 30)
      .duration(this.interval)
      .transition()
      .attr('cx', 35)
      .duration(this.interval)
      .transition()
      .attr('cx', 30)
      .duration(this.interval);
   }

   bounce(){
     const node = this.node
     select(node)
      .selectAll('#outline')
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

   grow_shrink(){
     const node = this.node
     select(node)
      .selectAll('#outline')
      .transition()
      .attr('r', 30)
      .duration(this.interval)
      .transition()
      .attr('r', 25)
      .duration(this.interval)
      .transition()
      .attr('r', 20)
      .duration(this.interval)
      .transition()
      .attr('r', 25)
      .duration(this.interval);
   }

   createOutlineMovingCircle() {
   const node = this.node

   select(node)
      .append('circle')
      .attr('id', 'center')

   select(node)
     .append('circle')
     .attr('id', 'outline')

   select(node)
      .selectAll('circle')
      .exit()
      .remove()

   select(node)
      .selectAll('#center')
      .style('fill', 'black')
      .attr('cx', 30)
      .attr('cy', 30)
      .attr('r', 25)

   select(node)
     .selectAll('#outline')
     .style('fill', 'none')
     .style('stroke', 'aqua')
     .style('stroke-width', '5')
     .attr('cx', 30)
     .attr('cy', 30)
     .attr('r', 25)
  }

  render() {
     return <svg ref={node => this.node = node}
     width={70} height={70}>
     </svg>
  }
}
export default OutlineMovingCircle
