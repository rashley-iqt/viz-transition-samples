import React, { Component } from 'react'
import './App.css'
import * as d3 from 'd3'
import 'd3-shape'
import 'd3-transition'
import { select } from 'd3-selection'

class ShapeChange extends Component {
   constructor(props){
      super(props)
      this.createShapeChange = this.createShapeChange.bind(this)
      this.interval = 500
      this.overlayColor='red'
      if(this.props != null &&
        this.props.style != null &&
        this.props.style.overlayColor != null){
        this.overlayColor = this.props.style.overlayColor
      }
      this.baseColor='black'
      if(this.props != null &&
        this.props.style != null &&
        this.props.style.baseColor != null){
        this.baseColor = this.props.style.baseColor
      }
   }

   componentWillMount() {
     d3.interval(()=>this.morph(), 4*this.interval)
   }

   componentDidMount() {
      this.createShapeChange()
   }

   componentDidUpdate() {
      this.createShapeChange()
   }

   morph(){
     console.log("morph")
     const node = this.node
     select(node)
      .selectAll('#base')
      .transition()
      .attr('opacity', '0.0')
      .duration(this.interval)
      .transition()
      .attr('opacity', '1.0')
      .duration(this.interval)
     select(node)
      .selectAll('#overlay')
      .transition()
      .attr('opacity', '1.0')
      .duration(this.interval)
      .transition()
      .attr('opacity', '0.0')
      .duration(this.interval)
   }

   createShapeChange() {
     const node = this.node

     select(node)
        .append('circle')
        .attr('id', 'base')

     select(node)
       .append('polygon')
       .attr('id', 'overlay')
       .attr('points', '30,00 05,50 55,50')

     select(node)
        .selectAll('circle')
        .exit()
        .remove()

     select(node)
        .selectAll('#base')
        .style('fill', 'black')
        .attr('cx', 30)
        .attr('cy', 30)
        .attr('r', 25)
        .attr('fill', this.baseColor)
        .attr('opacity', 1.0)

     select(node)
       .selectAll('#overlay')
       .attr('fill', this.overlayColor)
       .attr('opacity', 0.0)
    }

  render() {
     return <svg ref={node => this.node = node}
     width={60} height={60}>
     </svg>
  }
}
export default ShapeChange
