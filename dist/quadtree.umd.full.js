/* https://github.com/timohausmann/quadtree-ts.git v2.0.2 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).Quadtree=e()}(this,(function(){"use strict";class t{constructor(t,e=0){this.bounds={x:t.x||0,y:t.y||0,width:t.width,height:t.height},this.maxObjects="number"==typeof t.maxObjects?t.maxObjects:10,this.maxLevels="number"==typeof t.maxLevels?t.maxLevels:4,this.level=e,this.objects=[],this.nodes=[]}getIndex(t){return t.qtIndex(this.bounds)}split(){const e=this.level+1,s=this.bounds.width/2,i=this.bounds.height/2,h=this.bounds.x,n=this.bounds.y,o=[{x:h+s,y:n},{x:h,y:n},{x:h,y:n+i},{x:h+s,y:n+i}];for(let h=0;h<4;h++)this.nodes[h]=new t({x:o[h].x,y:o[h].y,width:s,height:i,maxObjects:this.maxObjects,maxLevels:this.maxLevels},e)}insert(t){if(this.nodes.length){const e=this.getIndex(t);for(let s=0;s<e.length;s++)this.nodes[e[s]].insert(t)}else if(this.objects.push(t),this.objects.length>this.maxObjects&&this.level<this.maxLevels){this.nodes.length||this.split();for(let t=0;t<this.objects.length;t++){const e=this.getIndex(this.objects[t]);for(let s=0;s<e.length;s++)this.nodes[e[s]].insert(this.objects[t])}this.objects=[]}}retrieve(t){const e=this.getIndex(t);let s=this.objects;if(this.nodes.length)for(let i=0;i<e.length;i++)s=s.concat(this.nodes[e[i]].retrieve(t));return s=s.filter((function(t,e){return s.indexOf(t)>=e})),s}remove(t){const e=this.getIndex(t);e.length>0?this.nodes[e[0]].remove(t):this.objects=this.objects.filter((e=>e!==t))}update(t){this.remove(t),this.insert(t)}clear(){this.objects=[];for(let t=0;t<this.nodes.length;t++)this.nodes.length&&this.nodes[t].clear();this.nodes=[]}}class e{constructor(t){this.x=t.x,this.y=t.y,this.r=t.r,this.data=t.data}qtIndex(t){const s=[],i=t.width/2,h=t.height/2,n=t.x+i,o=t.y+h,r=[[n,t.y],[t.x,t.y],[t.x,o],[n,o]];for(let t=0;t<r.length;t++)e.intersectRect(this.x,this.y,this.r,r[t][0],r[t][1],r[t][0]+i,r[t][1]+h)&&s.push(t);return s}static intersectRect(t,e,s,i,h,n,o){const r=t-Math.max(i,Math.min(t,n)),c=e-Math.max(h,Math.min(e,o));return r*r+c*c<s*s}}class s{constructor(t){this.x1=t.x1,this.y1=t.y1,this.x2=t.x2,this.y2=t.y2,this.data=t.data}qtIndex(t){const e=[],i=t.width/2,h=t.height/2,n=t.x+i,o=t.y+h,r=[[n,t.y],[t.x,t.y],[t.x,o],[n,o]];for(let t=0;t<r.length;t++)s.intersectRect(this.x1,this.y1,this.x2,this.y2,r[t][0],r[t][1],r[t][0]+i,r[t][1]+h)&&e.push(t);return e}static intersectRect(t,e,s,i,h,n,o,r){if(t<=h&&s<=h||e<=n&&i<=n||t>=o&&s>=o||e>=r&&i>=r)return!1;if(t>=h&&t<=o&&e>=n&&e<=r||s>=h&&s<=o&&i>=n&&i<=r)return!0;const c=(i-e)/(s-t);let d=c*(h-t)+e;if(d>n&&d<r)return!0;if(d=c*(o-t)+e,d>n&&d<r)return!0;let l=(n-e)/c+t;return l>h&&l<o||(l=(r-e)/c+t,l>h&&l<o)}}return Object.assign(t,{Rectangle:class{constructor(t){this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this.data=t.data}qtIndex(t){const e=[],s=t.x+t.width/2,i=t.y+t.height/2,h=this.y<i,n=this.x<s,o=this.x+this.width>s,r=this.y+this.height>i;return h&&o&&e.push(0),n&&h&&e.push(1),n&&r&&e.push(2),o&&r&&e.push(3),e}},Circle:e,Line:s})}));
