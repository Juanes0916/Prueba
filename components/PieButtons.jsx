import React from 'react';
import { Popup } from 'unc-react-creator';
import * as d3 from 'd3';

class PieButtons extends React.Component {
  /**
   * Constructor
   */
  constructor(props) {
    super(props);
    this.svg = React.createRef();
  }

  /**
   * Handle click buttons
   */
  clickFunction = (d, i) => {
    Popup.open({
      title: this.props.popups[i].title,
      content: this.props.popups[i].content,
      className: 'unc-pie-popup unc-popup'
    });
  }

  /**
   * Lifecycle method
   */
  componentDidMount() {
    /* eslint-disable */
    if (d3.select(this.svg.current)._groups[0][0] == null) return;

    const { color, textData, lastCenter } = this.props;
    const clickFunction = this.clickFunction;
  
    const width = 700;
    const height = 480;
    const svg = d3.select(this.svg.current).style('width', '100%');
    const g = svg.append('g');
    const pie = d3.pie().sort(null).value(function(){ return 1; });
    const dataLength = textData.length;
    let angle = function(i){ return Math.PI*((((2*i)+1)/(dataLength-1)) - 0.5); };
    let piemap = pie(textData.slice(0, dataLength - 1));

    if (!lastCenter) {
      angle = function(i){ return Math.PI*((((2*i)+1)/(dataLength)) - 0.5); }
      piemap = pie(textData);
    }

    const arc = g.selectAll('.arc')
               .data(piemap)
               .enter()
               .append('g')
                   .attr('class', 'arc');

    const path = d3.arc().outerRadius(130).innerRadius(90);

    arc.append('path')
       .attr('d', path)
       .attr('fill', function(d,i) { return color(i); });

    var circles = g.append('g')
            .selectAll('.circle')
            .data(textData)
            .enter()
            .filter(function(d,i) { return !lastCenter || i !== dataLength - 1; })
            .append('circle')
              .attr('r', 20)
              .attr('fill', function(d,i) { return color(i); })
              .attr('cx', function(d,i) {
                return 170*Math.cos(angle(i)); })
              .attr('cy', function(d,i) { 
                return 170*Math.sin(angle(i)); 
              });

    var circleLines = g.append('g')
            .selectAll('circle')
            .data(textData)
            .enter()
            .filter(function(d,i) { return !lastCenter || i !== dataLength - 1; })
            .append('circle')
                .attr('r', 24)
             .attr('fill', 'transparent')
                .attr('stroke', function(d,i) { return color(i); })
                .attr('stroke-width', 2)
                .attr('cx', function(d,i) { 
                  return 170*Math.cos(angle(i)); })
             .attr('cy', function(d,i) { 
               return 170*Math.sin(angle(i)); })
             .style('cursor', 'pointer')
             .on('click', clickFunction);

    var texts = g.append('g')
            .selectAll('text')
            .data(textData)
            .enter()
            .append('text')
              .attr('fill', '#474a4c')
              .style('font-size', '12pt')
              .each(function(d,i){
                var _this = d3.select(this);

                _this.selectAll('tspan')
                   .data(d)
                   .enter()
                  .append('tspan')
                  .text(function(d) { return d; })
                  .attr('x', function() {
                    if (lastCenter && i == dataLength - 1) return 0;
                    return 170*Math.cos(angle(i)); 
                  })
                  .attr('y', function() { 
                    if (lastCenter && i == dataLength - 1) return 0;
                    return 170*Math.sin(angle(i)); 
                  })
                  .attr('dx', function() {
                    if (lastCenter && i == dataLength - 1) return 0;
                    if (Math.abs(angle(i)) == Math.PI/2) return 0;
                    if (angle(i) < 1) return 30;
                    return -30;
                  })
                  .attr('dy', function(d,j) {
                    if (Math.abs(angle(i)) == Math.PI/2) return 40 + 15*j;
                    return 15*j;
                  })
                  .attr('text-anchor', function() {
                    if (lastCenter && i == dataLength - 1) return 'middle';
                    if (Math.abs(angle(i)) == Math.PI/2) return 'middle';
                    if (angle(i) < 1) return 'start';
                    return 'end';
                  })
                  .style('font-weight', function() { if (lastCenter && i == dataLength - 1) return 'bold'; })
                  .style('text-transform', function() { if (lastCenter && i == dataLength - 1) return 'uppercase'; })
                  .attr('fill', function() { if (lastCenter && i == dataLength - 1) return '#044DB5' })
              });

    this.resize = () => {
      console.log('here');
      var scale = svg.node().getBoundingClientRect().width / width;
      
      if (scale > 1) {
        scale = 1;
        svg.style('height', height)

      } else {
        svg.style('height', scale*height)
      }

      g.attr('transform', 'translate(' + svg.node().getBoundingClientRect().width/2 + ',' 
        + svg.node().getBoundingClientRect().height/2 + ') scale(' + scale + ')');
    }

    this.resize();
    d3.select(window).on('resize', this.resize);    
    /* eslint-enable */
  }

  /**
   * Lifecycle method
   */
  componentWillUnmount() {
    d3.select(window).on('resize', null);
  }

  /**
   * Render methods
   */
  render() {
    return (
      <svg ref={this.svg} />
    );
  }
}

export default PieButtons;
