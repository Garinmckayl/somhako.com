import Image from "next/image";
import Link from "next/link";
import HeroSvgComponent from "../public/img/hero.js";

export default function Hero() {
  const markers = [{
    name: 'Japan',
    lat: 35.5036629,
    long: 139.5379609
  },
  {
    name: 'India',
    lat: 12.95396,
    long: 77.4908527
  },
];
  
  const $ = {
    canvas: null,
    ctx: null,
    vCenter: 820,
    scroll: {
      lat: 0,
      long: 20
    },
    markers: [],
    timing: {
      speed: 6,
      delta: 0,
      last: 0
    },
    drag: {
      start: { x: 0, y: 0 },
      force: 0,
      prevX: 0,
      isDragging: false
    },
    colors: {
      pushPinBase: '#969799',
      pushPin: '#ed5c50',
      land: '#0000ff', //'#ffc975',
      landShade: '#2c606e',
      ocean: 'lightblue'
    },
    complexShapes: {
      // put complex shapes here
    }
  }
  
  const lerp = (norm, min, max) => {
    return (max - min) * norm + min;
  }
  
  const norm = (value, min, max) => {
    return (value - min) / (max - min);
  }
  
  const map = (value, sourceMin, sourceMax, destMin, destMax) => {
    return lerp(norm(value, sourceMin, sourceMax), destMin, destMax);
  }
  
  const dragMove = (e) => {
    if($.drag.isDragging) {
      let long = $.drag.start.long,
          clientX = e.targetTouches ? e.targetTouches[0].clientX : e.clientX,
          change = clientX - $.drag.start.x,
          prevChange = clientX - $.drag.prevX,
          canvasWidth = $.canvas.getBoundingClientRect().width;
      
      long += map(change, 0, canvasWidth, 0, 200);
      
      while(long < 0) {
        long += 360;
      } 
      
      if(prevChange > 0 && $.drag.force < 0) {
        $.drag.force = 0;
      } else if(prevChange < 0 && $.drag.force > 0) {
        $.drag.force = 0;
      }
      
      $.drag.force += prevChange * (600 / canvasWidth);
      $.drag.prevX = clientX;
      $.scroll.long = Math.abs(long) % 360;
    }
  }
  
  const dragStart = (e) => {
    if (e.targetTouches) {
      e.preventDefault();
      $.drag.start = {
        x: e.targetTouches[0].clientX,
        y: e.targetTouches[0].clientY,
        long: $.scroll.long
      };
    } else {
      $.drag.start = {
        x: e.clientX,
        y: e.clientY,
        long: $.scroll.long
      };
    }
    $.timing.speed = 0;
    $.drag.isDragging = true;
    $.canvas.classList.add('globe--dragging');
  }
  
  const dragEnd = (e) => {
    if($.drag.isDragging) {
      $.timing.speed = map($.drag.force, 0, 220, 0, 40);
      $.drag.isDragging = false;
      $.canvas.classList.remove('globe--dragging');
    }
  }
  
  const getRadius = (latitude) => {
    let yPart = Math.PI*2,
        radius = 600,
        frame = map(latitude, 90, -90, 0, 1.65);
    
    return Math.max(Math.sin(yPart + frame) * radius, 0);
  }
  
  const latLongSphere  = (lat, lon, radius) => {
      let x = 900,
          y = $.vCenter,
          z = 0;
  
      lon = -lon;
      let phi = (90-lat) * (Math.PI/180),
      teta = (lon + 180) * (Math.PI/180);
  
      x -= -(radius * Math.sin(phi) * Math.cos(teta));
      y -= radius * Math.cos(phi);
      z = radius * Math.sin(phi) * Math.sin(teta);
  
      return {
        x, y, z
      };
  }
  
  const drawGlobe = (ctx, color) => {
    ctx.beginPath();
    ctx.arc(900, $.vCenter, 600, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  }
  
  const getLandMassPaths = (name, radius, thickness) => {
    let landmassBasic = continents[name],
        landmass = null,
        first = true,
        rotated = false,
        paths = {
          ground: new Path2D(),
          top: new Path2D(),
          sections: [],
          isVisible: false
        },
        section = {
          ground: [],
          top: []
        };
  
      // Complexify
      if($.complexShapes[name]) {
        landmass = $.complexShapes[name];
      } else {
        landmass = complexify(landmassBasic, 1);
        $.complexShapes[name] = landmass;
      }
      
      for (let i = 0; i < landmass.length; i++) {
        let point = landmass[0],
            p = latLongSphere(point.lat + $.scroll.lat, point.long + $.scroll.long, radius);
        
          if(p.z < 0) {
            landmass.splice(0, 0, landmass.pop());
            rotated = true;
          } else {
            break;
          }
      }
  
      let drawCurve = false,
          curveStart = null,
          sectionIsVisible = false;
  
      landmass.forEach((point) => {
        let p = latLongSphere(point.lat + $.scroll.lat, point.long + $.scroll.long, radius),
            p2 = latLongSphere(point.lat + $.scroll.lat, point.long + $.scroll.long, radius + thickness);
        
        if(!sectionIsVisible && p.z > -200) {
          sectionIsVisible = true;
        }
        
        section.ground.push({
          x: p.x,
          y: p.y,
          z: p.z
        });
        section.top.push({
          x: p2.x,
          y: p2.y,
          z: p2.z
        });
  
        if(point.edge && !first) {
          if(sectionIsVisible) {
            paths.sections.push(Object.assign({}, section));
          }
          
          section = {
            ground: [{x: p.x, y: p.y, z: p.z }],
            top: [{x: p2.x, y: p2.y, z: p2.z }]
          };
          
          sectionIsVisible = false;
        }
        
        first = false;
  
        if(p.z > 0) {
          if(drawCurve) {
              drawCurve = false;
              closeCurve(paths.ground, curveStart, p, radius);
              closeCurve(paths.top, curveStart, p2, radius + thickness);
            } else {
              paths.ground.lineTo(p.x, p.y);
              paths.top.lineTo(p2.x, p2.y);
              paths.isVisible = true;
            }
        } else {
          // draw curve
          if(!drawCurve) {   
            drawCurve = true;
            curveStart = {
              x: p.x,
              y: p.y,
              z: p.z
            };
          }
        }
      });
  
      // if the last point is in a curve
      if(drawCurve) {
        drawCurve = false;
        let point = landmass.slice(-1)[0],
            p = latLongSphere(point.lat + $.scroll.lat, point.long + $.scroll.long, radius),
            p2 = latLongSphere(point.lat + $.scroll.lat, point.long + $.scroll.long, radius + thickness);
        
        closeCurve(paths.ground, curveStart, p, radius);
        closeCurve(paths.top, curveStart, p2, radius + thickness);
      }
      
      let p = latLongSphere(landmass[0].lat + $.scroll.lat, landmass[0].long + $.scroll.long, radius),
          p2 = latLongSphere(landmass[0].lat + $.scroll.lat, landmass[0].long + $.scroll.long, radius + thickness);  
      
      section.ground.push({
          x: p.x,
          y: p.y,
          z: p.z
        });
        section.top.push({
          x: p2.x,
          y: p2.y,
          z: p2.z
        });
    
      if(section) {
        paths.sections.push(Object.assign({}, section));
      }
      
      return paths;
  }
  
  const closeCurve = (path, curveStart, p, radius) => {
      // draw curve from curveStart på p
      let a1 = getAngle({ x: 900, y: $.vCenter}, curveStart),
          a2 = getAngle({ x: 900, y: $.vCenter}, p),
          compare = a1 - a2,
          startAngle = a1 * (Math.PI/180),
          endAngle = a2 * (Math.PI/180);
    
      path.arc(900, $.vCenter, radius, startAngle, endAngle, compare > 0 && compare < 180);
    }
  
  const getCirclePoint = (angle, radius) => {
    let radian = (angle / 180) * Math.PI;
    
    return {
      x: radius * Math.cos(radian) + 900,
      y: radius * Math.sin(radian) + 800
     }
  }
  
  const getAngle = (p1, p2) => {
    let dy = p2.y - p1.y,
        dx = p2.x - p1.x,
        theta = Math.atan2(dy, dx);
    theta *= 180 / Math.PI;
    return theta;
  }
  
  const complexify = (landmass, level) => {
    let complex = [];
    
    for (let i = 0; i < (landmass.length - 1); i++) {
      let p1 = landmass[i],
          p2 = landmass[i + 1],
          steps = Math.floor(distanceBetween(p1, p2) / level);
  
      p1.edge = true;
      complex.push(p1);
  
      if(steps > 0) {
        let s = Math.floor(100 / steps);
        
        for (let i = 1; i <= steps; i++) {
          let percentage = i * s;
          
          if(percentage <= 100) {
            let p = {
              lat: map(percentage, 0, 100, p1.lat, p2.lat),
              long: map(percentage, 0, 100, p1.long, p2.long)
            }
            
            complex.push(p);
          }
        }
      }
    }
    
    let last = landmass.pop();
    last.edge = true;
    complex.push(last);
  
    return complex;
  }
  
  const distanceBetween = (p1, p2) => {
    let a = p1.long - p2.long,
        b = p1.lat - p2.lat;
  
    return Math.hypot(a, b);
  }
  
  const continents = {
    africa: [
      { lat: 35.7, long: -5.8 },
      { lat: 37.1, long: 10.9 },
      { lat: 30, long: 32.2 },
      { lat: 10.6, long: 44 },
      { lat: 11.8, long: 51 },
      { lat: -27.6, long: 30.5 },
      { lat: -33.8, long: 18.6 },
      { lat: 4.7, long: 9.2 },
      { lat: 4.9, long: -7.7 },
      { lat: 14.6, long: -16.8 },
      { lat: 35.7, long: -5.8 }
    ],
    australia: [
      { lat: -22, long: 114 },
      { lat: -19, long: 121 },
      { lat: -12, long: 130 },
      { lat: -12, long: 136 },
      { lat: -24, long: 153 },
      { lat: -37, long: 150 },
      { lat: -37, long: 140 },
      { lat: -30, long: 131 },
      { lat: -34, long: 115 },
      { lat: -22, long: 114 }
    ],
    southamerica: [
      { lat: 12, long: -73 },
      { lat: 10, long: -61 },
      { lat: -6, long: -34 },
      { lat: -43, long: -62 },
      { lat: -54, long: -67 },
      { lat: -51, long: -74 },
      { lat: -18, long: -70 },
      { lat: -8, long: -77 },
      { lat: -5, long: -81 },
      { lat: 12, long: -73 }
    ],
    northamerica: [
      { lat: 10, long: -72 },
      { lat: 7, long: -75 },
      { lat: 19, long: -104 },
      { lat: 36, long: -121 },
      { lat: 59, long: -140 },
      { lat: 54, long: -167 },
      { lat: 70, long: -163 },
      { lat: 68, long: -137 },
      { lat: 65, long: -88 },
      { lat: 57, long: -92 },
      { lat: 54, long: -80 },
      { lat: 62, long: -75 },
      { lat: 50, long: -54 },
      { lat: 31, long: -80 },
      { lat: 25, long: -79 },
      { lat: 26, long: -81 },
      { lat: 29, long: -84 },
      { lat: 28, long: -96 },
      { lat: 19, long: -95 },
      { lat: 20, long: -87 },
      { lat: 14, long: -83 },
      { lat: 10, long: -72 },
    ],
    greenland: [
      { lat: 78, long: -68 },
      { lat: 81, long: -18 },
      { lat: 69, long: -25 },
      { lat: 60, long: -42 },
      { lat: 67, long: -52 },
      { lat: 78, long: -68 }
    ],
    japan: [
      { lat: 45, long: 141 },
      { lat: 43, long: 146 },
      { lat: 35, long: 140 },
      { lat: 31, long: 131 },
      { lat: 34, long: 129 },
      { lat: 36, long: 136 },
      { lat: 39, long: 140 },
      { lat: 45, long: 141 }
    ],
    indonesia: [
      { lat: 7, long: 117 },
      { lat: 5, long: 119 },
      { lat: 0, long: 118 },
      { lat: -4, long: 115 },
      { lat: -3, long: 111 },
      { lat: 2, long: 108 },
      { lat: 7, long: 117 }
    ],
    papua: [
      { lat: -1, long: 132 },
      { lat: -3, long: 142 },
      { lat: -10, long: 146 },
      { lat: -7, long: 140 },
      { lat: -6, long: 134 },
      { lat: -1, long: 132 }
    ],
    nz: [
      { lat: -35, long: 174 },
      { lat: -38, long: 178 },
      { lat: -46, long: 169 },
      { lat: -45, long: 165 },
      { lat: -38, long: 175 },
      { lat: -35, long: 174 }
    ],
    asia: [
      { lat: 64, long: 37 },
      { lat: 73, long: 80 },
      { lat: 66, long: 98 },
      { lat: 69, long: 175 },
      { lat: 60, long: 163 },
      { lat: 38, long: 118 },
      { lat: 28, long: 119 },
      { lat: 23, long: 108 },
      { lat: 12, long: 109 },
      { lat: 9, long: 102 },
      { lat: 23, long: 88 },
      { lat: 16, long: 82 },
      { lat: 7, long: 79 },
      { lat: 25, long: 68 },
      { lat: 27, long: 62 },
      { lat: 21, long: 58 },
      { lat: 13, long: 44 },
      { lat: 30, long: 33.5 },
      { lat: 64, long: 37 }
    ],
    europe: [
      { lat: 37, long: -9 },
      { lat: 43, long: -9 },
      { lat: 44, long: 0 },
      { lat: 48, long: -4 },
      { lat: 53, long: 5 },
      { lat: 56, long: 8 },
      { lat: 54, long: 11 },
      { lat: 55, long: 21 },
      { lat: 59, long: 30 },
      { lat: 60, long: 23 },
      { lat: 61, long: 22 },
      { lat: 65, long: 26 },
      { lat: 65, long: 22 },
      { lat: 60, long: 17 },
      { lat: 59, long: 19 },
      { lat: 56, long: 16 },
      { lat: 56, long: 13 },
      { lat: 60, long: 11 },
      { lat: 60, long: 5 },
      { lat: 69, long: 15 },
      { lat: 70, long: 28 },
      { lat: 68, long: 48 },
      { lat: 36, long: 38 },
      { lat: 45, long: 16 },
      { lat: 45, long: 12 },
      { lat: 40, long: 18 },
      { lat: 37, long: 15 },
      { lat: 40, long: 14 },
      { lat: 44, long: 8 },
      { lat: 41, long: 1 },
      { lat: 37, long: -2 },
      { lat: 37, long: -8 },
      { lat: 37, long: -9 }
    ],
    britain: [
      { lat: 50, long: -5 },
      { lat: 54, long: -3 },
      { lat: 57, long: -6 },
      { lat: 57, long: -2 },
      { lat: 51, long: 1 },
      { lat: 50, long: -5 }
    ],
    madagaskar: [
      { lat: -13, long: 49 },
      { lat: -17, long: 43 },
      { lat: -24, long: 44 },
      { lat: -25, long: 47 },
      { lat: -13, long: 49 }
    ]
  }
  
  const updateState = (delta) => {
    $.drag.force *= 0.8;
    
    if($.timing.speed) {
      $.scroll.long += Math.round = ($.timing.speed / 100) * delta;
      
      if($.scroll.long > 360) {
        $.scroll.long = $.scroll.long % 360;
      } else if ($.scroll.long < 0) {
        $.scroll.long += 360;   
      }
    }
  }
  
  const animateLoop = (time) => {
    $.timing.delta = Math.abs($.timing.last - time);
    $.timing.last = time;
    
    updateState($.timing.delta);
    
    // clear
    $.ctx.fillStyle = '#fff';
    $.ctx.fillRect(0, 0, 1800, 1600);
    
    drawMarkers($.ctx, $.markers, false);
    
    let continentNames = ['southamerica', 'northamerica', 'greenland', 'japan', 'africa', 'australia', 'asia', 'indonesia', 'europe', 'britain', 'madagaskar', 'papua', 'nz']; 
    let landPaths = [],
        se = [];
    
    continentNames.forEach((name) => {
      let paths = getLandMassPaths(name, 600, 30);
  
      if(paths) {
        $.ctx.fillStyle = $.colors.landShade;
  
        paths.sections.forEach((section) => {
          se.push(section);
          drawSection($.ctx, section, true);
        });
  
        if(paths.isVisible) {
          landPaths.push(paths.top);
        }
      }
    });
    
    drawGlobe($.ctx, $.colors.ocean);
    
    $.ctx.fillStyle = $.colors.landShade;
    se.forEach((section) => {  
      drawSection($.ctx, section, false);
    });
    
    landPaths.forEach((path) => {
        $.ctx.fillStyle = $.colors.land;
        $.ctx.fill(path);
    });
    
    drawMarkers($.ctx, $.markers, true);
    
    requestAnimationFrame(animateLoop);
  }
  
  const drawSection = (ctx, section, drawBackside) => {
      let hasStarted = false,
          limit = -25;
      
      section.ground.forEach(p => {
        if(drawBackside && p.z < 0 || !drawBackside && p.z >= limit) {
          if(!hasStarted) {
            ctx.beginPath();
            hasStarted = true;
          }
          
          ctx.lineTo(p.x, p.y);
        }
      });
    
      section.top = drawBackside ? section.top.reverse() : section.top;
    
      section.top.forEach(p => {
        if(drawBackside && p.z < 0 || !drawBackside && p.z >= limit) {
          ctx.lineTo(p.x, p.y);
        }
      });
    
      if(hasStarted) {
        ctx.closePath();
        ctx.fill();
      }
  }
  
  const drawMarkers = (ctx, markers, drawFront) => {
    for (const marker of markers) {
      let ground = latLongSphere(marker.lat + $.scroll.lat, marker.long + $.scroll.long, 630),
          needleTop = latLongSphere(marker.lat + $.scroll.lat, marker.long + $.scroll.long, 730),
          pinTop = latLongSphere(marker.lat + $.scroll.lat, marker.long + $.scroll.long, 750);
      
      if(ground.z >= 0 && drawFront) {
        drawMapPushPinBase(ctx, ground, needleTop, $.colors.pushPinBase);
        drawMapPushPin(ctx, pinTop, $.colors.pushPin);
        drawMarkerText(ctx, marker.name, pinTop);
      } else if(!drawFront) {
        drawMapPushPin(ctx, pinTop, $.colors.pushPin);
        drawMapPushPinBase(ctx, ground, needleTop, $.colors.pushPinBase);
        drawMarkerText(ctx, marker.name, pinTop);
      }
    }
  }
  
  const drawMarkerText = (ctx, text, pos) => {
      ctx.font = "60px 'Pirata One', cursive";
      ctx.fillStyle = 'black';
    
      let metrics = ctx.measureText(text); 
    
      ctx.fillText(text, pos.x - (metrics.width / 2), pos.y - 30);
  }
  
  const drawMapPushPinBase = (ctx, basePos, topPos, color) => {
    ctx.strokeStyle = color;
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(basePos.x, basePos.y);
    ctx.lineTo(topPos.x, topPos.y);
    ctx.stroke();
  }
  
  const drawMapPushPin = (ctx, pos, color) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 20, 0, 2 * Math.PI);
    ctx.fill();
  }
  
  const init = (markers) => {
    if (process.browser) {
      $.markers = markers;
      $.canvas = document.querySelector('.globe');
      $.ctx = $.canvas.getContext('2d');
      $.canvas.addEventListener("touchstart", dragStart, false);
      $.canvas.addEventListener("mousedown", dragStart, false);
      $.canvas.addEventListener("touchend", dragEnd, false);
      $.canvas.addEventListener("mouseup", dragEnd, false);
      $.canvas.addEventListener("touchmove", dragMove, false);
      $.canvas.addEventListener("mousemove", dragMove, false);
      $.canvas.addEventListener("mouseleave", dragEnd, false);
      requestAnimationFrame(animateLoop);
    }
   
  }
  
  init(markers);

  return (
    <>
      <div className="container p-8 px-4 mx-auto flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8 text-center lg:text-left">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white mb-4">
            Are You Hiring The Right Talent?
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            Don't let your competitors steal the deal. Connect with our global talent network and hire the right one. 
            </p>
            <Link href="https://marketplace.somhako.com/register/">
              <a className="px-6 py-2 inline-block text-white bg-indigo-600 hover:bg-indigo-700 rounded-md">
              Get Started
              </a>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            {/* <img src="/img/global.png" alt="Somhako" /> */}
            <canvas class="globe" width="1800" height="1600"></canvas>
          </div>
        </div>
      </div>
      {/* <div className="container p-8 px-4 mx-auto">
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Trusted by <span className="text-indigo-600">industry</span> leaders
            worldwide
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <AmazonLogo />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Rakuten_Global_Brand_Logo.svg/512px-Rakuten_Global_Brand_Logo.svg.png"
                loading="lazy"
                width="120"
                alt="Rakutun Logo"
              ></img>
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <img
                src="https://uploads-ssl.webflow.com/60be6e42ecea08f815b762c3/60d63a5e002c46ace40429f6_logo.svg"
                loading="lazy"
                width="120"
                alt="Zepto Logo"
              ></img>
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <MicrosoftLogo />
              <img
                src="https://parkplus.io/img/logo/parkplus_blue.svg"
                loading="lazy"
                width="120"
                alt="Parkplus Logo"
              ></img>
            </div>
            <div className="pt-1 text-gray-400 dark:text-gray-400">
              <NetflixLogo />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DeNA_Co_logo.svg/241px-DeNA_Co_logo.svg.png"
                loading="lazy"
                width="120"
                alt="Dena Logo"
              ></img>
            </div>
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <img
                src="https://www.revcomm.co.jp/wp-content/themes/onepress/assets/images/logo/rc_logo.svg"
                loading="lazy"
                width="120"
                alt="revcomm Logo"
              ></img>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

function AmazonLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="110"
      height="33"
      fill="none"
      viewBox="0 0 110 33"
    >
      <g fill="currentColor" clipPath="url(#clip0)">
        <path
          fillRule="evenodd"
          d="M67.776 25.783c-6.323 4.676-15.521 7.167-23.455 7.167-11.114 0-21.079-4.1-28.667-10.923-.575-.536-.077-1.264.651-.843 8.163 4.752 18.243 7.589 28.668 7.589 7.013 0 14.755-1.457 21.884-4.485 1.073-.421 1.954.729.92 1.495z"
          clipRule="evenodd"
        ></path>
        <path
          fillRule="evenodd"
          d="M70.42 22.756c-.804-1.035-5.365-.499-7.396-.23-.613.076-.728-.46-.153-.844 3.64-2.567 9.581-1.8 10.271-.958.69.843-.192 6.822-3.603 9.658-.536.422-1.034.192-.804-.383.766-1.916 2.49-6.17 1.686-7.243z"
          clipRule="evenodd"
        ></path>
        <path d="M63.139 3.67V1.177c0-.383.268-.613.613-.613h11.115c.345 0 .651.268.651.613v2.108c0 .345-.306.805-.843 1.571l-5.749 8.202c2.146-.038 4.408.268 6.324 1.341.421.23.536.614.575.959v2.644c0 .383-.383.805-.805.575-3.411-1.801-7.972-1.993-11.728.038-.383.192-.805-.191-.805-.575v-2.529c0-.383 0-1.073.422-1.686l6.669-9.543H63.79c-.344 0-.651-.269-.651-.614zm-40.51 15.445h-3.373c-.306-.039-.575-.269-.613-.575V1.217c0-.345.307-.614.652-.614h3.142c.345 0 .575.269.613.575V3.44h.077C23.932 1.255 25.503.22 27.573.22c2.108 0 3.45 1.035 4.369 3.22.805-2.185 2.683-3.22 4.676-3.22 1.418 0 2.95.575 3.909 1.916 1.073 1.457.843 3.565.843 5.443v10.96c0 .346-.306.614-.651.614h-3.335c-.345-.038-.613-.307-.613-.613V9.342c0-.729.077-2.568-.077-3.258-.268-1.15-.996-1.495-1.992-1.495-.805 0-1.687.537-2.032 1.418-.345.882-.306 2.338-.306 3.335v9.198c0 .345-.307.613-.652.613H28.34c-.345-.038-.613-.307-.613-.613V9.342c0-1.917.307-4.791-2.07-4.791-2.414 0-2.337 2.76-2.337 4.79v9.199c-.038.306-.307.575-.69.575zM85.099.22c5.021 0 7.742 4.293 7.742 9.773 0 5.289-2.99 9.505-7.741 9.505-4.906 0-7.589-4.293-7.589-9.658C77.473 4.436 80.194.22 85.1.22zm0 3.564c-2.49 0-2.644 3.411-2.644 5.52 0 2.107-.038 6.63 2.606 6.63 2.606 0 2.76-3.641 2.76-5.864 0-1.457-.077-3.22-.499-4.6-.383-1.226-1.15-1.686-2.222-1.686zm14.22 15.33h-3.373c-.345-.038-.614-.306-.614-.613V1.14a.662.662 0 01.652-.575h3.143c.306 0 .536.23.613.498v2.645h.077c.958-2.376 2.261-3.488 4.599-3.488 1.494 0 2.989.537 3.947 2.031.882 1.38.882 3.718.882 5.404v10.923c-.039.307-.307.537-.652.537h-3.373c-.306-.039-.574-.269-.613-.537V9.15c0-1.916.23-4.676-2.108-4.676-.804 0-1.571.537-1.954 1.38-.46 1.073-.537 2.108-.537 3.296V18.5a.702.702 0 01-.69.614zm-41.622-.038a.693.693 0 01-.805.077c-1.111-.92-1.341-1.38-1.955-2.261-1.84 1.878-3.18 2.453-5.557 2.453-2.836 0-5.059-1.764-5.059-5.251 0-2.76 1.495-4.6 3.603-5.519 1.84-.805 4.407-.958 6.362-1.188v-.422c0-.804.076-1.763-.422-2.452-.421-.614-1.188-.882-1.878-.882-1.303 0-2.453.652-2.72 2.031-.078.307-.27.614-.576.614l-3.257-.345c-.269-.077-.575-.269-.499-.69.767-3.986 4.331-5.174 7.55-5.174 1.648 0 3.795.421 5.098 1.686 1.648 1.533 1.495 3.603 1.495 5.826v5.25c0 1.571.651 2.261 1.264 3.143.23.307.268.69 0 .881-.728.575-1.954 1.648-2.644 2.223zm-3.411-8.24v-.728c-2.453 0-5.02.537-5.02 3.411 0 1.456.766 2.453 2.069 2.453.958 0 1.801-.575 2.338-1.533.651-1.188.613-2.3.613-3.603zm-41.698 8.317c-1.112-.92-1.342-1.38-1.955-2.261-1.84 1.878-3.181 2.453-5.557 2.453-2.836 0-5.06-1.764-5.06-5.251 0-2.76 1.496-4.6 3.603-5.519 1.84-.805 4.408-.958 6.362-1.188v-.422c0-.804.077-1.763-.421-2.452-.422-.614-1.188-.882-1.878-.882-1.303 0-2.453.652-2.721 2.031-.077.307-.268.614-.575.614L1.128 5.93C.86 5.854.553 5.662.63 5.24 1.397 1.255 4.96.067 8.18.067c1.648 0 3.794.421 5.098 1.686 1.647 1.533 1.494 3.603 1.494 5.826v5.25c0 1.571.652 2.261 1.265 3.143.23.307.268.69 0 .881-.728.575-1.955 1.648-2.644 2.223a.693.693 0 01-.805.077zm-2.568-8.317v-.728c-2.453 0-5.02.537-5.02 3.411 0 1.456.766 2.453 2.069 2.453.958 0 1.801-.575 2.338-1.533.651-1.188.613-2.3.613-3.603z"></path>
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0H109.272V33H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

function MicrosoftLogo() {
  return (
    <svg
      clip-rule="evenodd"
      fill-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.41421"
      viewBox="0 0 560 400"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m319.3 189.4h-236.9l18.9 18.9zm38-12v-37.8c0-7.1 5-13 12-13 7.1 0 12 5.9 12 13v37.8h14.6v-37.8c0-15.6-10.6-28.1-26.2-28.1-7.1 0-12.5 4-12.5 4v-2.6h-14.6v64.2h14.6v.3zm-48.4-66.1c-17 0-29 14.9-29 33.8 0 19.8 15.1 33.8 30.5 33.8 7.8 0 17.5-2.6 25.7-14.4l-13-7.6c-9.9 14.6-26.7 7.3-28.6-7.6h42c3.8-22.7-11.1-38-27.6-38zm12.8 25.5h-26.2c3-14.9 23.3-15.8 26.2 0zm-46.6 25.2c-1.4.9-3.1 1.7-5 1.7-2.4 0-6.8-1.9-6.8-7.8v-27.6h12.5v-15.3h-12.5v-16.1h-14.6v16.1h-7.8v15.3h7.8v27.6c0 14.4 10.9 22.9 21.7 22.9 4 0 9.7-1.4 14.2-4zm-53.8-49.1v37.8c0 7.1-5 13-12 13-7.1 0-12-5.9-12-13v-37.8h-14.6v37.8c0 15.6 10.6 28.1 26.2 28.1 7.1 0 12.5-4 12.5-4v2.4h14.6v-64.2h-14.7zm-66.1 30.3 25-30.2h-20.3l-17.7 22.4v-43.7h-14.9v85.7h14.9v-26.4l21.7 26.4h20.3zm-50.8-30.3v2.8c-4.5-2.8-8.3-4.5-13.7-4.5-16.5 0-29.3 15.1-29.3 33.8s12.5 33.8 29.3 33.8c5.4 0 9.4-1.7 13.7-4.5v2.8h14.6v-64.2zm-13.9 50.6c-8.3 0-14.2-8-14.2-18.2s5.9-18.2 14.2-18.2 13.9 8 13.9 18.2c.2 10.1-5.7 18.2-13.9 18.2zm-71.1 13.9v-25h10.6l18.7 24.8h19.1l-22.7-30c7.1-5 11.6-13.2 11.6-22.7 0-15.3-12.5-27.6-27.6-27.6h-25v80.3h15.3zm0-65.2h9.9c6.8 0 12.5 5.7 12.5 12.5s-5.7 12.5-12.5 12.5h-9.9z"
        fill="#bf0000"
        fill-rule="nonzero"
        transform="matrix(.918836 0 0 .918836 96.2328 62.1746)"
      />
    </svg>
  );
}

function NetflixLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="108"
      height="29"
      fill="none"
      viewBox="0 0 108 29"
    >
      <g>
        <path
          fill="currentColor"
          d="M14.714 27.096c-1.61.283-3.248.367-4.942.593L4.603 12.551V28.34c-1.61.17-3.078.395-4.603.621V.04h4.293l5.874 16.409V.039h4.547v27.057zm8.897-16.465c1.75 0 4.434-.085 6.044-.085v4.519c-2.006 0-4.35 0-6.044.085v6.721c2.655-.17 5.31-.395 7.992-.48v4.35l-12.511.988V.039h12.511v4.52h-7.992v6.072zm24.797-6.072h-4.689v20.786c-1.525 0-3.05 0-4.518.056V4.56h-4.688V.039h13.895v4.52zm7.343 5.761h6.185v4.519H55.75V25.09h-4.435V.04h12.625v4.519h-8.19v5.761zm15.533 10.817c2.57.056 5.168.254 7.682.395v4.463c-4.038-.255-8.077-.509-12.2-.594V.04h4.518v21.097zm11.495 5.168c1.44.085 2.965.17 4.434.34V.04h-4.434v26.265zM107.01.04l-5.733 13.754 5.733 15.166c-1.695-.226-3.389-.537-5.084-.819l-3.248-8.36-3.304 7.683c-1.638-.283-3.22-.368-4.857-.594l5.818-13.246L91.082.04h4.858l2.965 7.597L102.07.04h4.942z"
        ></path>
      </g>
    </svg>
  );
}

function SonyLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="136"
      height="24"
      viewBox="0 0 351 61"
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g fill="currentColor" fillRule="nonzero">
          <path d="M345.559 49.001a5.448 5.448 0 00-4.81 2.72 5.538 5.538 0 000 5.559 5.448 5.448 0 004.81 2.719 5.425 5.425 0 003.855-1.618A5.513 5.513 0 00351 54.487c0-1.454-.573-2.85-1.593-3.879a5.42 5.42 0 00-3.848-1.607zm0 10.337a4.774 4.774 0 01-3.4-1.42 4.85 4.85 0 01-1.399-3.43c0-1.282.507-2.51 1.407-3.415a4.768 4.768 0 013.392-1.409c1.269 0 2.485.509 3.383 1.413a4.84 4.84 0 011.4 3.41 4.847 4.847 0 01-1.393 3.427 4.77 4.77 0 01-3.39 1.424z"></path>
          <path d="M348.163 53.183c0-.503-.223-1.032-.67-1.285-.45-.265-.952-.291-1.456-.291h-2.604v5.958h.729v-2.748h1.344l1.706 2.748h.868l-1.805-2.748c1.065-.03 1.888-.462 1.888-1.634zm-2.882 1.06h-1.121v-2.107h1.706c.742 0 1.556.112 1.556 1.034.002 1.213-1.303 1.073-2.14 1.073zm-31.199-29.868l10.93-11.639c.634-.854.95-1.453.95-1.965 0-.854-.738-1.196-3.055-1.196h-2.758V2.227H350v7.348h-3.922c-4.53 0-5.371.682-11.691 8.628l-17.292 18.622V48.19c0 2.907 1.472 3.93 5.686 3.93h6.529v7.09H287.5v-7.09h6.527c4.211 0 5.687-1.023 5.687-3.93V36.825l-20.366-22.468c-3.366-3.928-2.9-4.782-12.271-4.782V2.227h37.811v7.348h-2.692c-2.74 0-3.9.512-3.9 1.536 0 .857.842 1.54 1.369 2.222l10.304 11.199c1.224 1.27 2.718 1.434 4.113-.157zM60.388 2.225h9.12v20.503h-8.423c-.746-4.099-3.318-5.693-5.664-7.844-4.231-3.877-13.395-7.106-21.102-7.106-9.948 0-18.344 3.077-18.344 7.602 0 12.56 56.892 2.565 56.892 26.314C72.867 54.08 60.68 61 38.796 61c-7.577 0-19.041-2.345-25.805-5.927-2.12-1.22-3.02 1.156-3.418 4.134H.22V38.02h8.46c1.865 5.383 4.435 6.491 6.8 8.628 4.101 3.76 13.865 6.496 22.82 6.408 13.5-.133 18.142-3.076 18.142-7.348 0-4.27-4.591-5.297-19.385-7.602l-12.562-2.051C10.321 33.918 0 30.758 0 19.482 0 7.778 13.056.43 33.7.43c8.699 0 15.977 1.16 22.963 5.097 1.934 1.254 3.75 1.404 3.725-3.302zM238.39 36.552l.18-22.787c0-2.99-1.56-4.015-6.016-4.015h-5.236V2.66h33.315v7.09h-4.342c-4.46 0-6.02 1.027-6.02 4.015V59.64l-13.04-.103-42.228-39.878v28.96c0 2.906 1.56 4.015 6.017 4.015h5.797v7.006h-34.6v-7.006h5.733c4.456 0 6.016-1.11 6.016-4.014V13.765c0-2.99-1.56-4.015-6.016-4.015h-5.733V2.66h29.914l36.26 33.892zM126.796 0c-26.551 0-43.172 11.706-43.172 30.498 0 18.456 16.39 30.072 42.362 30.072 27.586 0 43.632-11.446 43.632-31.01C169.62 11.962 152.304 0 126.796 0zm-.604 53.14c-14.697 0-23.145-8.459-23.145-23.068 0-14.266 8.816-22.724 23.88-22.724 14.451 0 22.899 8.63 22.899 23.324 0 14.352-8.572 22.468-23.634 22.468z"></path>
        </g>
      </g>
    </svg>
  );
}

function VerizonLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="138"
      height="31"
      viewBox="0 0 658 146"
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g>
          <path
            fill="currentColor"
            d="M642.7 0L606.8 76.8 593.3 47.7 578.7 47.7 600.9 95.3 612.7 95.3 657.2 0z"
          ></path>
          <path
            fill="currentColor"
            fillRule="nonzero"
            d="M488.7 142.6h28.9V89.7c0-12.1 7-20.6 17.4-20.6 10 0 15.2 7 15.2 17.1v56.4h28.9V80.7c0-21-12.6-35.8-33-35.8-13 0-22.1 5.6-28.9 15.8h-.6v-13h-28l.1 94.9zm-56.8-97.5c-30.2 0-50.4 21.7-50.4 50.3 0 28.4 20.2 50.3 50.4 50.3s50.4-21.9 50.4-50.3c.1-28.6-20.2-50.3-50.4-50.3zm-.2 79.2c-13.7 0-21-11.5-21-28.9 0-17.6 7.2-28.9 21-28.9 13.7 0 21.3 11.3 21.3 28.9.1 17.4-7.5 28.9-21.3 28.9zm-132.6 18.3h81.2v-22.8h-46v-.6l44-49.3V47.6h-79.2v22.9h44.5v.6l-44.5 49.7v21.8zm-37.1 0h29.1V47.7H262v94.9zm-67.5 0h29V99c0-19.8 11.9-28.6 30-26.1h.6v-25c-1.5-.6-3.2-.7-5.9-.7-11.3 0-18.9 5.2-25.4 16.3h-.6V47.7h-27.7v94.9zm-53.2-18.2c-12.8 0-20.6-8.3-22.1-21.1h68.4c.2-20.4-5.2-36.7-16.5-46.9-8-7.4-18.5-11.5-31.9-11.5-28.6 0-48.4 21.7-48.4 50.1 0 28.6 18.9 50.4 50.3 50.4 11.9 0 21.3-3.2 29.1-8.5 8.3-5.7 14.3-14.1 15.9-22.4h-27.8c-2.7 6.2-8.5 9.9-17 9.9zm-1.5-58.8c10.2 0 17.2 7.6 18.4 18.7h-38.8c2.3-11.2 8.4-18.7 20.4-18.7zM33 142.6h30.4l33-94.9H67.3l-18.5 61h-.4l-18.5-61H0l33 94.9zM262 13.9h29.1v25.8H262V13.9z"
          ></path>
        </g>
      </g>
    </svg>
  );
}
