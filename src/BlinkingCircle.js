import React, { Component } from 'react'
import './App.css'
import * as d3 from 'd3'
import 'd3-shape'
import 'd3-transition'
import { select } from 'd3-selection'

class BlinkingCircle extends Component {
   constructor(props){
      super(props)
      this.createBlinkingCircle = this.createBlinkingCircle.bind(this)
      this.interval = 125
      this.outlineColors=['none']
      if(this.props.style!== null && this.props.style.outlineColors != null){
        this.outlineColors = this.props.style.outlineColors.split(",")
      }
      this.fillColors=['black']
      if(this.props.style!== null && this.props.style.fillColors != null){
        this.fillColors = this.props.style.fillColors.split(",")
      }

      this.currentOutlineColor = this.outlineColors[0]
      this.currentFillColor = this.fillColors[0]
   }

   componentWillMount() {
     d3.interval(()=>this.blink(), 2*this.interval)
   }

   componentDidMount() {
      this.createBlinkingCircle()
   }

   componentDidUpdate() {
      this.createBlinkingCircle()
   }

   getNextColor(currentColor, colors){
     var index = colors.indexOf(currentColor);

     if (index === colors.length -1) {
       index = 0
     } else {
       index = index + 1;
     }

     return colors[index]
   }

   blink(){
     const node = this.node
     this.currentFillColor = this.getNextColor(this.currentFillColor, this.fillColors)
     this.currentOutlineColor = this.getNextColor(this.currentOutlineColor, this.outlineColors)
     select(node)
      .selectAll('circle')
      .transition()
      .style('fill', this.currentFillColor)
      .style('stroke', this.currentOutlineColor)
      .duration(this.interval);
   }

   createBlinkingCircle() {
   const node = this.node

  select(node)
     .append('circle')

  select(node)
     .selectAll('circle')
     .exit()
     .remove()

  select(node)
     .selectAll('circle')
     .style('fill', this.currentFillColor)
     .style('stroke', this.currentOutlineColor)
     .style('stroke-width', '3')
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
export default BlinkingCircle
