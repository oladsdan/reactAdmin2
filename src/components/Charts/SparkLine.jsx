import React from 'react';
import { SparklineComponent, SparklineTooltip, Inject } from '@syncfusion/ej2-react-charts';

const SparkLine = ({ id, height, width, color, data, type, currentColor }) => {
  return (
    <SparklineComponent
      id ={id}
      height={height}
      width={width}
      LineWidth={1}
      valueType="Numeric"
      fill={color}
      border={{ color: currentColor, width: 2 }}
      dataSource={data}
      xName="x"
      yName="y"
      type={type}
      tooltipSettings= {{ visible: true, format: '${x} : data ${y}',
        trackLineSettings: {
          visible: true
        }}}>
        {/* then we have to call the inject method to be able to use the chart */}
        <Inject services= {[SparklineTooltip]} />

    </SparklineComponent>
  )
}

export default SparkLine