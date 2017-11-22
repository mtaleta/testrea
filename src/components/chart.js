import _ from 'lodash'
import React from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'

// round精度到個位數,sum加總
function average (data) {
  return _.round(_.sum(data) / data.length)
}

export default (props) => {
  return (
    <div>
      <Sparklines style={{'height': '120px', 'width': '180px'}} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type='avg' style={{'height': '150px'}} />
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  )
}
