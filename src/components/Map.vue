<template>
    <div id='map'></div>
</template>
<script>
    import $ from 'jquery'
    import {pageSize, comparedMessage} from '../vuex/getters'
    import config from '../commons/config'
    export default {
//        vuex: {
//            getters: { pageSize, comparedMessage }
//        },
//        data () {
//            return {
//                timeLineDone: false
//            }
//        },
//        watch: {
//            pageSize: {
//                handler (curVal, oldVal) {
//                    if (!this.load) {
//                        this.init()
//                    }
//                    this.load = true
//                },
//                deep: true
//            },
//            comparedMessage: {
//                handler (curVal, oldVal) {
//                    this.updateTimeCurve()
//                },
//                deep: true
//            }
//        },
        methods: {
            init () {
                this.drawTimelineView()
            },
            drawTimelineView () {
//                if (this.timeLineDone) return
//                let d3 = window.d3
//                let width = $('#timeLine').width()
//                let height = $('#timeLine').height()
//                let svg = d3.select('#timeLine').append('svg').attr('width', width).attr('height', height)
//                let padding = { left: 2, right: 20, top: 2, bottom: 2 }
//                let defs = svg.append('defs')
//                let arrowMarker = defs.append('marker')
//                    .attr('id', 'arrow')
//                    .attr('markerUnits', 'strokeWidth')
//                    .attr('markerWidth', '12')
//                    .attr('markerHeight', '12')
//                    .attr('viewBox', '0 0 12 12')
//                    .attr('refX', '6')
//                    .attr('refY', '6')
//                    .attr('orient', 'auto')
//                let arrowPath = 'M2,2 L10,6 L2,10 L6,6 L2,2'
//                arrowMarker.append('path')
//                    .attr('d', arrowPath)
//                    .attr('fill', '#000')
//                svg.append('line')
//                    .attr('x1', padding.left)
//                    .attr('y1', padding.top + height / 3)
//                    .attr('x2', width - padding.right)
//                    .attr('y2', padding.top + height / 3)
//                    .style('stroke', 'grey')
//                    .style('stroke-width', '2px')
//                    .attr('marker-end', 'url(#arrow)')
//                let years = [2014, 2015, 2016]
//                let sw = (width - padding.left - padding.right) / 3
//                years.forEach(function (d, i) {
//                    svg.append('text')
//                        .attr('y', padding.top + height / 3 + height * 0.1)
//                        .attr('x', sw * i + sw / 2 + padding.left)
//                        .text(d)
//                        .attr('font-size', config.emSize)
//                        .attr('alignment-baseline', 'hanging')
//                        .attr('text-anchor', 'middle')
//                })
//                let date = config.date
////        let month = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]
////        let rectW = $('#image-matrix-div').height() / 11 * 0.9
//                date.forEach(function (d, i) {
//                    let txt = d.split('_')
//                    let mon = txt[ 1 ] + '.' + txt[ 2 ]
//                    svg.append('text')
//                        .attr('y', 2)
//                        .attr('x', width / 12 * i)
//                        .attr('alignment-baseline', 'hanging')
//                        .attr('text-anchor', 'start')
//                        .text(mon)
//                        .attr('class', 'timelineText')
//                        .attr('font-size', '0.7em')
//                })
//                this.width = width
//                this.padding = padding
//                this.height = height
//                this.svg = svg
//                this.timeLineDone = true
//            },
//            updateTimeCurve () {
//                if (!this.timeLineDone) {
//                    this.drawTimelineView()
//                }
//                $('.timeCurve').remove()
//                let localComparedMessage = $.extend(true, {}, this.comparedMessage)
//                let time = config.date
//                if (localComparedMessage.img2 === null) {
//                    let arr1 = localComparedMessage.img1.imgName.split('_')
//                    let startT = arr1[ 1 ] + '_' + arr1[ 2 ] + '_' + arr1[ 3 ]
//                    let sindex = time.indexOf(startT)
//                    this.drawCurve(sindex, 0)
//                    return
//                }
//                let arr1 = localComparedMessage.img1.imgName.split('_')
//                let startT = arr1[ 1 ] + '_' + arr1[ 2 ] + '_' + arr1[ 3 ]
//                let arr2 = localComparedMessage.img2.imgName.split('_')
//                let endT = arr2[ 1 ] + '_' + arr2[ 2 ] + '_' + arr2[ 3 ]
//                let sindex = time.indexOf(startT)
//                let eindex = time.indexOf(endT)
//                if (sindex > eindex) {
//                    let a = sindex
//                    sindex = eindex
//                    eindex = a
//                }
////        console.log(sindex, eindex)
//                this.drawCurve(sindex, 0)
//                this.drawCurve(eindex, 1)
//            },
//            drawCurve (index, type) {
//                let width = this.width
//                let svg = this.svg
//                let height = this.height
//                let padding = this.padding
//                let d3 = window.d3
//                let source = [ 0, padding.top + height / 3 ]
//                source[ 0 ] = index / 12 * width + config.matrixWidth / 2
//                let target = [ width / 6 + width / 3 * type, height ]
//                let midP1x = (target[ 0 ] - source[ 0 ]) / 4 + source[ 0 ]
//                let midP1y = (source[ 1 ] + target[ 1 ]) / 2
//                let midP1 = []
//                midP1.push(midP1x)
//                midP1.push(midP1y)
//                let midP2 = [ (target[ 0 ] - source[ 0 ]) * 3 / 4 + source[ 0 ], (source[ 1 ] + target[ 1 ]) / 2 ]
//                let points = [ source, midP1, midP2, target ]
//                console.log(points)
//                let line = d3.line()
//                    .x(function (d) { return d[ 0 ] })
//                    .y(function (d) { return d[ 1 ] })
//                    .curve(d3.curveBundle.beta(0.5))
//                svg.append('path')
//                    .datum(points)
//                    .attr('fill', 'none')
//                    .attr('stroke', 'grey')
//                    .attr('stroke-opacity', '0.8')
//                    .attr('stroke-width', 2)
//                    .attr('d', line)
//                    .attr('class', 'timeCurve')
            }
        },
        ready () {
//      this.init()
        }
    }
</script>
<style lang="less" scoped>
    #map {
        position: absolute;
        width: 100%;
        height: 100%;
    }
    .timelineText {
        font-size: 0.7em;
    }

</style>