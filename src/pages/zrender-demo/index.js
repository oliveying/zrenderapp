import React, { useEffect, useState } from 'react';
 
import zrender from 'zrender'
 const Zrenderdemo = () => {
  
  const zrenderinit = () => {
    console.log(zrender, 'ooooo')
    const zr = zrender.init(document.getElementById("container"));
    const circle = new zrender.Circle({
      shape: {
        cx: 50,
        cy: 50,
        r: 40
      },
      style: {
        fill: "none",
        stroke: "#F00"
      }
    });
    zr.add(circle);
    const rect = new zrender.Rect({
      shape: {
        r: 0,
        x: 120,
        y: 30,
        width: 100,
        height: 200
      },
      style: {
        fill: '#0084ff',
        stroke: 'red',
        lineDash: [25, 5]
      }
    })
    zr.add(rect)

    const line = new zrender.Line({
      shape: {
        x1: 200,
        y1: 300,
        x2: 400,
        y2: 500
      },
      style: {
        fill: 'red'
      }
    })
    zr.add(line)
    const text = new zrender.Text({
      style: {
        text: '1ddddd23',
        textAlign: 'middle',
        fontSize: 14,
        textWidth: 1,
        textHeight: 20,
        textFill: '#008333',
      },
      position: [400, 10],
      z: 2,
      name: 'text',
    })
    zr.add(text)
    // const boundingrect = new zrender.BoundingRect(0, 0, 1200, 1000)

    const selector = new zrender.Sector({
      shape: {
        cx: 800,
        cy: 300,
        // r: 102,
        r0: 60,
        startAngle: 50,
        endAngle: 10,
        clockwise: true
      },
      style: {
        fill: '#00ee88',
        stroke: '#eee'
      }
    })
    zr.add(selector)

  }
   useEffect(() => {
     zrenderinit()
   }, []);
   return (
     <>
     <div id='container' style={{ width: '1000px', height: '1000px'}}></div>
     </>
   );
 };
 
 export default Zrenderdemo;
 