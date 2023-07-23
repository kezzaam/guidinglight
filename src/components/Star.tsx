"use client"

import { useState, useEffect } from "react"

export default function Star({ bv_index }: { bv_index: number }) {
    const getRandomDelay = () => Math.random() * 10 // Generate a random delay value between 0 and 5
    const [starColor, setStarColor] = useState("#F8F9FA")

    // RGB colors from BV index
    // adapted from https://codepen.io/blaketarter/pen/EjxRMX
    function bvToRgb(bv: any) {
        // color index to temperature in kelvin
        function bvToT(bv: number) {

          let t
  
          // make sure bv is within its bounds [-0.4, 2] otherwise the math doesnt work
          if (bv < -0.4) {
            bv = -0.4
          } else if (bv > 2) {
            bv = 2
          }
          
          // found it online at http://www.wikiwand.com/en/Color_index
          t = 4600 * ((1 / ((0.92 * bv) + 1.7)) + (1 / ((0.92 * bv) + 0.62)))
          
          // console.log('t: ' + t)
          
          return t
        }
    
        // temperature to CIE xyY Colorspace, assume Y is 1
        function tToXyy(t: number) {

          let x, y, Y = 1 // Y is the luminance, I just assume full luminance for sanity
  
          // approximation of CIE xyY (http://www.wikiwand.com/en/CIE_1931_color_space) using https://en.wikipedia.org/wiki/Planckian_locus 
          if (t >= 1667 && t <= 4000) {
            x = (-0.2661239 * (Math.pow(10, 9) / Math.pow(t, 3))) -
                (-0.2343580 * (Math.pow(10, 6) / Math.pow(t, 2))) +
                (0.8776956 * (Math.pow(10, 3) / t)) + 0.179910
          } else if (t >= 4000 && t <= 25000) {
            x = (-3.0258469 * (Math.pow(10, 9) / Math.pow(t, 3))) +
                (2.1070379 * (Math.pow(10, 6) / Math.pow(t, 2))) +
                (0.2226347 * (Math.pow(10, 3) / t)) + 0.240390
          }
        
          if (t >= 1667 && t <= 2222) {
            y = (-1.1063814 * Math.pow(x, 3)) -
                (1.34811020 * Math.pow(x, 2)) +
                (2.18555832 * x) -
                 0.20219683
          } else if (t >= 2222 && t <= 4000) {
            y = (-0.9549476 * Math.pow(x, 3)) -
                (1.37418593 * Math.pow(x, 2)) +
                (2.09137015 * x) -
                 0.16748867
          } else if (t >= 4000 && t <= 25000) {
            y = (3.0817580 * Math.pow(x, 3)) -
                (5.87338670 * Math.pow(x, 2)) +
                (3.75112997 * x) -
                 0.37001483
          }
          
          // console.log('xyY: ' + [x, y, Y])
          
          return [x, y, Y]
        }
    
        // xyY Color space to XYZ, prepping for conversion to linear RGB
        function xyYToXyz(xyY: any[]) {

          let X, Y, Z,
          x = xyY[0],
          y = xyY[1]
    
      // X and Z tristimulus values calculated using https://en.wikipedia.org/wiki/CIE_1931_color_space?oldformat=true#CIE_xy_chromaticity_diagram_and_the_CIE_xyY_color_space
      Y = xyY[2]
      X = (y === 0) ? 0 : (x * Y) / y
      Z = (y === 0) ? 0 : ((1 - x - y) * Y) / y
      
      // console.log('XYZ: ' + [X, Y, Z])
      
      return [X, Y, Z]
        }
    
        // XYZ color space to linear RGB, finally a format I recognize
        function xyzToRgb(xyz: any[]) {

          let r, g, b,
          x = xyz[0],
          y = xyz[1],
          z = xyz[2]
    
      // using matrix from https://www.cs.rit.edu/~ncs/color/t_convert.html#RGB%20to%20XYZ%20&%20XYZ%20to%20RGB
      r = (3.2406 * x) +
          (-1.5372 * y) + 
          (-0.4986 * z)
    
      g = (-0.9689 * x) +
          (1.8758 * y) +
          (0.0415 * z)
    
      b = (0.0557 * x) +
          (-0.2040 * y) +
          (1.0570 * z)
      
      // make sure the values didnt overflow
      r = (r > 1) ? 1 : r
      g = (g > 1) ? 1 : g
      b = (b > 1) ? 1 : b
      
      // console.log('rgb: ' + [r, g, b])
    
      return [r, g, b]
        }
    
        // gamma correct and convert to 8 bit RGB
        function gammaCorrect(rgb: number[]) {
            let a = 0.055;
            let gamma = 2.2;
            let R, G, B;
            let r = rgb[0] / 255; // Normalize to the range [0, 1]
            let g = rgb[1] / 255;
            let b = rgb[2] / 255;
          
            R = (r <= 0.0031308) ? 12.92 * r : ((1 + a) * Math.pow(r, 1 / gamma)) - a;
            G = (g <= 0.0031308) ? 12.92 * g : ((1 + a) * Math.pow(g, 1 / gamma)) - a;
            B = (b <= 0.0031308) ? 12.92 * b : ((1 + a) * Math.pow(b, 1 / gamma)) - a;
          
            // Clamp the values to the range [0, 1]
            R = Math.max(0, Math.min(1, R));
            G = Math.max(0, Math.min(1, G));
            B = Math.max(0, Math.min(1, B));
          
            // Convert back to the range [0, 255] and return the gamma-corrected RGB values
            return [Math.round(R * 255), Math.round(G * 255), Math.round(B * 255)];
          }
    
        const t = bvToT(bv)
        const xyY = tToXyy(t)
        const xyz = xyYToXyz(xyY)
        const rgb = xyzToRgb(xyz)
        const crgb = gammaCorrect(rgb)
        return crgb
      }
    
      useEffect(() => {        
        // rgb to hex is cake
        function rgbToHex(rgb: { toString: (arg0: number) => string }[]) {
          // ... (the RGB to hex conversion function)
          return '#' + rgb[0].toString(16) + rgb[1].toString(16) + rgb[2].toString(16)
        }
        const color = bvToRgb(bv_index)
        const hexColor = rgbToHex(color)
        setStarColor(hexColor)
      }, [bv_index])

    return (
        <>
                <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 512 512"
                    enableBackground="new 0 0 512 512"
                    xmlSpace="preserve"
                >
                    <g>
                        <path
                            className="star"
                            fill={starColor || '#F8F9FA'}
                            d="M147, 147 c-25.5, 0-25.787, 26.359-25.787, 26.359 C121.213, 150.438, 96, 147, 96, 147 c25.787, 0, 25.213-26.359, 25.213-26.359 C121.213, 147, 147, 147, 147, 147z"
                            transform="translate(-90, -220) scale(3, 3)"
                            style={{ animationDelay: `${getRandomDelay()}s` }}
                        />
                    </g>
                </svg>                    
        </>
    )
}



