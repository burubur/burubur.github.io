var cl="185",Ln={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Dn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hl=0,Or=1,ul=2;var Vi=1,Ls=2,Si=3,bi=0,Le=1,ze=2,an=0,Wi=1,Br=2,zr=3,kr=4,dl=5;var Ei=100,fl=101,pl=102,ml=103,gl=104,_l=200,xl=201,vl=202,yl=203,Ml=204,Sl=205,bl=206,El=207,Tl=208,Al=209,wl=210,Rl=211,Cl=212,Pl=213,Il=214,Ll=0,Dl=1,Nl=2,Gr=3,Ul=4,Fl=5,Ol=6,Bl=7,zl=0,kl=1,Gl=2,Qe=0,Hr=1,Vr=2,Wr=3,Xr=4,qr=5,Yr=6,Zr=7;var Ti=301,Xn=302,Ds=303,Ns=304,Xi=306,Hl=1000,Us=1001,Vl=1002,Nn=1003,Wl=1004;var qi=1005;var De=1006,Fs=1007;var qn=1008;var tn=1009,Xl=1010,ql=1011,Yi=1012,Jr=1013,Un=1014,yn=1015,Mn=1016,$r=1017,Kr=1018,Ai=1020,Yl=35902,Zl=35899,Jl=1021,$l=1022,on=1023,Yn=1026,Zn=1027,Kl=1028,jr=1029,Jn=1030,Qr=1031;var ta=1033,Os=33776,Bs=33777,zs=33778,ks=33779,ea=35840,na=35841,ia=35842,sa=35843,ra=36196,aa=37492,oa=37496,la=37488,ca=37489,Gs=37490,ha=37491,ua=37808,da=37809,fa=37810,pa=37811,ma=37812,ga=37813,_a=37814,xa=37815,va=37816,ya=37817,Ma=37818,Sa=37819,ba=37820,Ea=37821,Ta=36492,Aa=36494,wa=36495,Ra=36283,Ca=36284,Hs=36285,Pa=36286;var Ia=0,jl=1,$n="",Vs="srgb",La="srgb-linear",Da="linear",Qt="srgb";var Ql=512,tc=513,ec=514,Ws=515,nc=516,ic=517,Xs=518,sc=519;var Na="300 es",Ua=2000;function oh(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function lh(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Hi(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function rc(){let t=Hi("canvas");return t.style.display="block",t}var Oo={},yi=null;function Fa(...t){let e="THREE."+t.shift();if(yi)yi("log",e,...t);else console.log(e,...t)}function ac(t){let e=t[0];if(typeof e==="string"&&e.startsWith("TSL:")){let n=t[1];if(n&&n.isStackTrace)t[0]+=" "+n.getLocation();else t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Tt(...t){t=ac(t);let e="THREE."+t.shift();if(yi)yi("warn",e,...t);else{let n=t[0];if(n&&n.isStackTrace)console.warn(n.getError(e));else console.warn(e,...t)}}function Ct(...t){t=ac(t);let e="THREE."+t.shift();if(yi)yi("error",e,...t);else{let n=t[0];if(n&&n.isStackTrace)console.error(n.getError(e));else console.error(e,...t)}}function Wn(...t){let e=t.join(" ");if(e in Oo)return;Oo[e]=!0,Tt(...t)}function oc(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var lc={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class ln{addEventListener(t,e){if(this._listeners===void 0)this._listeners={};let n=this._listeners;if(n[t]===void 0)n[t]=[];if(n[t].indexOf(e)===-1)n[t].push(e)}hasEventListener(t,e){let n=this._listeners;if(n===void 0)return!1;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);if(s!==-1)i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}var Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bo=1234567,ki=Math.PI/180,Mi=180/Math.PI;function wi(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ee[t&255]+Ee[t>>8&255]+Ee[t>>16&255]+Ee[t>>24&255]+"-"+Ee[e&255]+Ee[e>>8&255]+"-"+Ee[e>>16&15|64]+Ee[e>>24&255]+"-"+Ee[n&63|128]+Ee[n>>8&255]+"-"+Ee[n>>16&255]+Ee[n>>24&255]+Ee[i&255]+Ee[i>>8&255]+Ee[i>>16&255]+Ee[i>>24&255]).toLowerCase()}function Ot(t,e,n){return Math.max(e,Math.min(n,t))}function Oa(t,e){return(t%e+e)%e}function ch(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function hh(t,e,n){if(t!==e)return(n-t)/(e-t);else return 0}function Gi(t,e,n){return(1-n)*t+n*e}function uh(t,e,n,i){return Gi(t,e,1-Math.exp(-n*i))}function dh(t,e=1){return e-Math.abs(Oa(t,e*2)-e)}function fh(t,e,n){if(t<=e)return 0;if(t>=n)return 1;return t=(t-e)/(n-e),t*t*(3-2*t)}function ph(t,e,n){if(t<=e)return 0;if(t>=n)return 1;return t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10)}function mh(t,e){return t+Math.floor(Math.random()*(e-t+1))}function gh(t,e){return t+Math.random()*(e-t)}function _h(t){return t*(0.5-Math.random())}function xh(t){if(t!==void 0)Bo=t;let e=Bo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vh(t){return t*ki}function yh(t){return t*Mi}function Mh(t){return(t&t-1)===0&&t!==0}function Sh(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function bh(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Eh(t,e,n,i,s){let{cos:r,sin:a}=Math,o=r(n/2),l=a(n/2),c=r((e+i)/2),u=a((e+i)/2),d=r((e-i)/2),h=a((e-i)/2),m=r((i-e)/2),v=a((i-e)/2);switch(s){case"XYX":t.set(o*u,l*d,l*h,o*c);break;case"YZY":t.set(l*h,o*u,l*d,o*c);break;case"ZXZ":t.set(l*d,l*h,o*u,o*c);break;case"XZX":t.set(o*u,l*v,l*m,o*c);break;case"YXY":t.set(l*m,o*u,l*v,o*c);break;case"ZYZ":t.set(l*v,l*m,o*u,o*c);break;default:Tt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function xi(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function Pe(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}var Ba={DEG2RAD:ki,RAD2DEG:Mi,generateUUID:wi,clamp:Ot,euclideanModulo:Oa,mapLinear:ch,inverseLerp:hh,lerp:Gi,damp:uh,pingpong:dh,smoothstep:fh,smootherstep:ph,randInt:mh,randFloat:gh,randFloatSpread:_h,seededRandom:xh,degToRad:vh,radToDeg:yh,isPowerOfTwo:Mh,ceilPowerOfTwo:Sh,floorPowerOfTwo:bh,setQuaternionFromProperEuler:Eh,normalize:Pe,denormalize:xi};class Pt{static{Pt.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ot(this.x,t.x,e.x),this.y=Ot(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ot(this.x,t,e),this.y=Ot(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ot(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ot(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,a){let o=n[i+0],l=n[i+1],c=n[i+2],u=n[i+3],d=s[r+0],h=s[r+1],m=s[r+2],v=s[r+3];if(u!==v||o!==d||l!==h||c!==m){let b=o*d+l*h+c*m+u*v;if(b<0)d=-d,h=-h,m=-m,v=-v,b=-b;let p=1-a;if(b<0.9995){let f=Math.acos(b),R=Math.sin(f);p=Math.sin(p*f)/R,a=Math.sin(a*f)/R,o=o*p+d*a,l=l*p+h*a,c=c*p+m*a,u=u*p+v*a}else{o=o*p+d*a,l=l*p+h*a,c=c*p+m*a,u=u*p+v*a;let f=1/Math.sqrt(o*o+l*l+c*c+u*u);o*=f,l*=f,c*=f,u*=f}}t[e]=o,t[e+1]=l,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,r){let a=n[i],o=n[i+1],l=n[i+2],c=n[i+3],u=s[r],d=s[r+1],h=s[r+2],m=s[r+3];return t[e]=a*m+c*u+o*h-l*d,t[e+1]=o*m+c*d+l*u-a*h,t[e+2]=l*m+c*h+a*d-o*u,t[e+3]=c*m-a*u-o*d-l*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let{_x:n,_y:i,_z:s,_order:r}=t,a=Math.cos,o=Math.sin,l=a(n/2),c=a(i/2),u=a(s/2),d=o(n/2),h=o(i/2),m=o(s/2);switch(r){case"XYZ":this._x=d*c*u+l*h*m,this._y=l*h*u-d*c*m,this._z=l*c*m+d*h*u,this._w=l*c*u-d*h*m;break;case"YXZ":this._x=d*c*u+l*h*m,this._y=l*h*u-d*c*m,this._z=l*c*m-d*h*u,this._w=l*c*u+d*h*m;break;case"ZXY":this._x=d*c*u-l*h*m,this._y=l*h*u+d*c*m,this._z=l*c*m+d*h*u,this._w=l*c*u-d*h*m;break;case"ZYX":this._x=d*c*u-l*h*m,this._y=l*h*u+d*c*m,this._z=l*c*m-d*h*u,this._w=l*c*u+d*h*m;break;case"YZX":this._x=d*c*u+l*h*m,this._y=l*h*u+d*c*m,this._z=l*c*m-d*h*u,this._w=l*c*u-d*h*m;break;case"XZY":this._x=d*c*u-l*h*m,this._y=l*h*u-d*c*m,this._z=l*c*m+d*h*u,this._w=l*c*u+d*h*m;break;default:Tt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}if(e===!0)this._onChangeCallback();return this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10],d=n+a+u;if(d>0){let h=0.5/Math.sqrt(d+1);this._w=0.25/h,this._x=(c-o)*h,this._y=(s-l)*h,this._z=(r-i)*h}else if(n>a&&n>u){let h=2*Math.sqrt(1+n-a-u);this._w=(c-o)/h,this._x=0.25*h,this._y=(i+r)/h,this._z=(s+l)/h}else if(a>u){let h=2*Math.sqrt(1+a-n-u);this._w=(s-l)/h,this._x=(i+r)/h,this._y=0.25*h,this._z=(o+c)/h}else{let h=2*Math.sqrt(1+u-n-a);this._w=(r-i)/h,this._x=(s+l)/h,this._y=(o+c)/h,this._z=0.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;if(n<0.00000001)if(n=0,Math.abs(t.x)>Math.abs(t.z))this._x=-t.y,this._y=t.x,this._z=0,this._w=n;else this._x=0,this._y=-t.z,this._z=t.y,this._w=n;else this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n;return this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ot(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();if(t===0)this._x=0,this._y=0,this._z=0,this._w=1;else t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t;return this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let{_x:n,_y:i,_z:s,_w:r}=t,a=e._x,o=e._y,l=e._z,c=e._w;return this._x=n*c+r*a+i*l-s*o,this._y=i*c+r*o+s*a-n*l,this._z=s*c+r*l+n*o-i*a,this._w=r*c-n*a-i*o-s*l,this._onChangeCallback(),this}slerp(t,e){let{_x:n,_y:i,_z:s,_w:r}=t,a=this.dot(t);if(a<0)n=-n,i=-i,s=-s,r=-r,a=-a;let o=1-e;if(a<0.9995){let l=Math.acos(a),c=Math.sin(l);o=Math.sin(o*l)/c,e=Math.sin(e*l)/c,this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+s*e,this._w=this._w*o+r*e,this._onChangeCallback()}else this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+s*e,this._w=this._w*o+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{static{D.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){if(n===void 0)n=this.z;return this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zo.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,a=t.z,o=t.w,l=2*(r*i-a*n),c=2*(a*e-s*i),u=2*(s*n-r*e);return this.x=e+o*l+r*u-a*c,this.y=n+o*c+a*l-s*u,this.z=i+o*u+s*c-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ot(this.x,t.x,e.x),this.y=Ot(this.y,t.y,e.y),this.z=Ot(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ot(this.x,t,e),this.y=Ot(this.y,t,e),this.z=Ot(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ot(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let{x:n,y:i,z:s}=t,r=e.x,a=e.y,o=e.z;return this.x=i*o-s*a,this.y=s*r-n*o,this.z=n*a-i*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return fr.copy(this).projectOnVector(t),this.sub(fr)}reflect(t){return this.sub(fr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ot(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var fr=new D,zo=new Xe;class Lt{static{Lt.prototype.isMatrix3=!0}constructor(t,e,n,i,s,r,a,o,l){if(this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,a,o,l)}set(t,e,n,i,s,r,a,o,l){let c=this.elements;return c[0]=t,c[1]=i,c[2]=a,c[3]=e,c[4]=s,c[5]=o,c[6]=n,c[7]=r,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[3],o=n[6],l=n[1],c=n[4],u=n[7],d=n[2],h=n[5],m=n[8],v=i[0],b=i[3],p=i[6],f=i[1],R=i[4],w=i[7],M=i[2],E=i[5],T=i[8];return s[0]=r*v+a*f+o*M,s[3]=r*b+a*R+o*E,s[6]=r*p+a*w+o*T,s[1]=l*v+c*f+u*M,s[4]=l*b+c*R+u*E,s[7]=l*p+c*w+u*T,s[2]=d*v+h*f+m*M,s[5]=d*b+h*R+m*E,s[8]=d*p+h*w+m*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8];return e*r*c-e*a*l-n*s*c+n*a*o+i*s*l-i*r*o}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8],u=c*r-a*l,d=a*o-c*s,h=l*s-r*o,m=e*u+n*d+i*h;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return t[0]=u*v,t[1]=(i*l-c*n)*v,t[2]=(a*n-i*r)*v,t[3]=d*v,t[4]=(c*e-i*o)*v,t[5]=(i*s-a*e)*v,t[6]=h*v,t[7]=(n*o-l*e)*v,t[8]=(r*e-n*s)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,a){let o=Math.cos(s),l=Math.sin(s);return this.set(n*o,n*l,-n*(o*r+l*a)+r+t,-i*l,i*o,-i*(-l*r+o*a)+a+e,0,0,1),this}scale(t,e){return Wn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(pr.makeScale(t,e)),this}rotate(t){return Wn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(pr.makeRotation(-t)),this}translate(t,e){return Wn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(pr.makeTranslation(t,e)),this}makeTranslation(t,e){if(t.isVector2)this.set(1,0,t.x,0,1,t.y,0,0,1);else this.set(1,0,t,0,1,e,0,0,1);return this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}var pr=new Lt,ko=new Lt().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),Go=new Lt().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function Th(){let t={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(s,r,a){if(this.enabled===!1||r===a||!r||!a)return s;if(this.spaces[r].transfer==="srgb")s.r=xn(s.r),s.g=xn(s.g),s.b=xn(s.b);if(this.spaces[r].primaries!==this.spaces[a].primaries)s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ);if(this.spaces[a].transfer==="srgb")s.r=vi(s.r),s.g=vi(s.g),s.b=vi(s.b);return s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){if(s==="")return"linear";return this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Wn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Wn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[0.64,0.33,0.3,0.6,0.15,0.06],n=[0.2126,0.7152,0.0722],i=[0.3127,0.329];return t.define({["srgb-linear"]:{primaries:e,whitePoint:i,transfer:"linear",toXYZ:ko,fromXYZ:Go,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:e,whitePoint:i,transfer:"srgb",toXYZ:ko,fromXYZ:Go,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),t}var Gt=Th();function xn(t){return t<0.04045?t*0.0773993808:Math.pow(t*0.9478672986+0.0521327014,2.4)}function vi(t){return t<0.0031308?t*12.92:1.055*Math.pow(t,0.41666)-0.055}var ai;class za{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src))return t.src;if(typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{if(ai===void 0)ai=Hi("canvas");ai.width=t.width,ai.height=t.height;let i=ai.getContext("2d");if(t instanceof ImageData)i.putImageData(t,0,0);else i.drawImage(t,0,0,t.width,t.height);n=ai}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Hi("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=xn(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)if(e instanceof Uint8Array||e instanceof Uint8ClampedArray)e[n]=Math.floor(xn(e[n]/255)*255);else e[n]=xn(e[n]);return{data:e,width:t.width,height:t.height}}else return Tt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}var Ah=0;class Zi{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ah++}),this.uuid=wi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;if(typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement)t.set(e.videoWidth,e.videoHeight,0);else if(typeof VideoFrame<"u"&&e instanceof VideoFrame)t.set(e.displayWidth,e.displayHeight,0);else if(e!==null)t.set(e.width,e.height,e.depth||0);else t.set(0,0,0);return t}set needsUpdate(t){if(t===!0)this.version++}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)if(i[r].isDataTexture)s.push(mr(i[r].image));else s.push(mr(i[r]))}else s=mr(i);n.url=s}if(!e)t.images[this.uuid]=n;return n}}function mr(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap)return za.getDataURL(t);else if(t.data)return{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name};else return Tt("Texture: Unable to serialize Texture."),{}}var wh=0,gr=new D;class Ae extends ln{constructor(t=Ae.DEFAULT_IMAGE,e=Ae.DEFAULT_MAPPING,n=1001,i=1001,s=1006,r=1008,a=1023,o=1009,l=Ae.DEFAULT_ANISOTROPY,c=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=wi(),this.name="",this.source=new Zi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=t&&t.depth&&t.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(gr).x}get height(){return this.source.getSize(gr).y}get depth(){return this.source.getSize(gr).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Tt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Tt(`Texture.setValues(): property '${e}' does not exist.`);continue}if(i&&n&&(i.isVector2&&n.isVector2))i.copy(n);else if(i&&n&&(i.isVector3&&n.isVector3))i.copy(n);else if(i&&n&&(i.isMatrix3&&n.isMatrix3))i.copy(n);else this[e]=n}}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)n.userData=this.userData;if(!e)t.textures[this.uuid]=n;return n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1000:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.x)%2)===1)t.x=Math.ceil(t.x)-t.x;else t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1000:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.y)%2)===1)t.y=Math.ceil(t.y)-t.y;else t.y=t.y-Math.floor(t.y);break}if(this.flipY)t.y=1-t.y;return t}set needsUpdate(t){if(t===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(t){if(t===!0)this.pmremVersion++}}Ae.DEFAULT_IMAGE=null;Ae.DEFAULT_MAPPING=300;Ae.DEFAULT_ANISOTROPY=1;class ae{static{ae.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);if(e<0.0001)this.x=1,this.y=0,this.z=0;else this.x=t.x/e,this.y=t.y/e,this.z=t.z/e;return this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,r=0.01,a=0.1,o=t.elements,l=o[0],c=o[4],u=o[8],d=o[1],h=o[5],m=o[9],v=o[2],b=o[6],p=o[10];if(Math.abs(c-d)<0.01&&Math.abs(u-v)<0.01&&Math.abs(m-b)<0.01){if(Math.abs(c+d)<0.1&&Math.abs(u+v)<0.1&&Math.abs(m+b)<0.1&&Math.abs(l+h+p-3)<0.1)return this.set(1,0,0,0),this;e=Math.PI;let R=(l+1)/2,w=(h+1)/2,M=(p+1)/2,E=(c+d)/4,T=(u+v)/4,C=(m+b)/4;if(R>w&&R>M)if(R<0.01)n=0,i=0.707106781,s=0.707106781;else n=Math.sqrt(R),i=E/n,s=T/n;else if(w>M)if(w<0.01)n=0.707106781,i=0,s=0.707106781;else i=Math.sqrt(w),n=E/i,s=C/i;else if(M<0.01)n=0.707106781,i=0.707106781,s=0;else s=Math.sqrt(M),n=T/s,i=C/s;return this.set(n,i,s,e),this}let f=Math.sqrt((b-m)*(b-m)+(u-v)*(u-v)+(d-c)*(d-c));if(Math.abs(f)<0.001)f=1;return this.x=(b-m)/f,this.y=(u-v)/f,this.z=(d-c)/f,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ot(this.x,t.x,e.x),this.y=Ot(this.y,t.y,e.y),this.z=Ot(this.z,t.z,e.z),this.w=Ot(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ot(this.x,t,e),this.y=Ot(this.y,t,e),this.z=Ot(this.z,t,e),this.w=Ot(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ot(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ka extends ln{constructor(t=1,e=1,n={}){super();n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},s=new Ae(i),r=n.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(t.mapping!==void 0)e.mapping=t.mapping;if(t.wrapS!==void 0)e.wrapS=t.wrapS;if(t.wrapT!==void 0)e.wrapT=t.wrapT;if(t.wrapR!==void 0)e.wrapR=t.wrapR;if(t.magFilter!==void 0)e.magFilter=t.magFilter;if(t.minFilter!==void 0)e.minFilter=t.minFilter;if(t.format!==void 0)e.format=t.format;if(t.type!==void 0)e.type=t.type;if(t.anisotropy!==void 0)e.anisotropy=t.anisotropy;if(t.colorSpace!==void 0)e.colorSpace=t.colorSpace;if(t.flipY!==void 0)e.flipY=t.flipY;if(t.generateMipmaps!==void 0)e.generateMipmaps=t.generateMipmaps;if(t.internalFormat!==void 0)e.internalFormat=t.internalFormat;for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(t!==null)t.renderTarget=this;this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)if(this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0)this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Zi(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null)this.depthTexture=t.depthTexture.clone();return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qe extends ka{constructor(t=1,e=1,n={}){super(t,e,n);this.isWebGLRenderTarget=!0}}class qs extends Ae{constructor(t=null,e=1,n=1,i=1){super(null);this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ga extends Ae{constructor(t=null,e=1,n=1,i=1){super(null);this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class re{static{re.prototype.isMatrix4=!0}constructor(t,e,n,i,s,r,a,o,l,c,u,d,h,m,v,b){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,a,o,l,c,u,d,h,m,v,b)}set(t,e,n,i,s,r,a,o,l,c,u,d,h,m,v,b){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=r,p[9]=a,p[13]=o,p[2]=l,p[6]=c,p[10]=u,p[14]=d,p[3]=h,p[7]=m,p[11]=v,p[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new re().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){if(this.determinantAffine()===0)return t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this;return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/oi.setFromMatrixColumn(t,0).length(),s=1/oi.setFromMatrixColumn(t,1).length(),r=1/oi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,r=Math.cos(n),a=Math.sin(n),o=Math.cos(i),l=Math.sin(i),c=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=r*c,h=r*u,m=a*c,v=a*u;e[0]=o*c,e[4]=-o*u,e[8]=l,e[1]=h+m*l,e[5]=d-v*l,e[9]=-a*o,e[2]=v-d*l,e[6]=m+h*l,e[10]=r*o}else if(t.order==="YXZ"){let d=o*c,h=o*u,m=l*c,v=l*u;e[0]=d+v*a,e[4]=m*a-h,e[8]=r*l,e[1]=r*u,e[5]=r*c,e[9]=-a,e[2]=h*a-m,e[6]=v+d*a,e[10]=r*o}else if(t.order==="ZXY"){let d=o*c,h=o*u,m=l*c,v=l*u;e[0]=d-v*a,e[4]=-r*u,e[8]=m+h*a,e[1]=h+m*a,e[5]=r*c,e[9]=v-d*a,e[2]=-r*l,e[6]=a,e[10]=r*o}else if(t.order==="ZYX"){let d=r*c,h=r*u,m=a*c,v=a*u;e[0]=o*c,e[4]=m*l-h,e[8]=d*l+v,e[1]=o*u,e[5]=v*l+d,e[9]=h*l-m,e[2]=-l,e[6]=a*o,e[10]=r*o}else if(t.order==="YZX"){let d=r*o,h=r*l,m=a*o,v=a*l;e[0]=o*c,e[4]=v-d*u,e[8]=m*u+h,e[1]=u,e[5]=r*c,e[9]=-a*c,e[2]=-l*c,e[6]=h*u+m,e[10]=d-v*u}else if(t.order==="XZY"){let d=r*o,h=r*l,m=a*o,v=a*l;e[0]=o*c,e[4]=-u,e[8]=l*c,e[1]=d*u+v,e[5]=r*c,e[9]=h*u-m,e[2]=m*u-h,e[6]=a*c,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Rh,t,Ch)}lookAt(t,e,n){let i=this.elements;if(Oe.subVectors(t,e),Oe.lengthSq()===0)Oe.z=1;if(Oe.normalize(),Tn.crossVectors(n,Oe),Tn.lengthSq()===0){if(Math.abs(n.z)===1)Oe.x+=0.0001;else Oe.z+=0.0001;Oe.normalize(),Tn.crossVectors(n,Oe)}return Tn.normalize(),ls.crossVectors(Oe,Tn),i[0]=Tn.x,i[4]=ls.x,i[8]=Oe.x,i[1]=Tn.y,i[5]=ls.y,i[9]=Oe.y,i[2]=Tn.z,i[6]=ls.z,i[10]=Oe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[4],o=n[8],l=n[12],c=n[1],u=n[5],d=n[9],h=n[13],m=n[2],v=n[6],b=n[10],p=n[14],f=n[3],R=n[7],w=n[11],M=n[15],E=i[0],T=i[4],C=i[8],_=i[12],S=i[1],z=i[5],A=i[9],H=i[13],J=i[2],B=i[6],V=i[10],X=i[14],U=i[3],Q=i[7],tt=i[11],ot=i[15];return s[0]=r*E+a*S+o*J+l*U,s[4]=r*T+a*z+o*B+l*Q,s[8]=r*C+a*A+o*V+l*tt,s[12]=r*_+a*H+o*X+l*ot,s[1]=c*E+u*S+d*J+h*U,s[5]=c*T+u*z+d*B+h*Q,s[9]=c*C+u*A+d*V+h*tt,s[13]=c*_+u*H+d*X+h*ot,s[2]=m*E+v*S+b*J+p*U,s[6]=m*T+v*z+b*B+p*Q,s[10]=m*C+v*A+b*V+p*tt,s[14]=m*_+v*H+b*X+p*ot,s[3]=f*E+R*S+w*J+M*U,s[7]=f*T+R*z+w*B+M*Q,s[11]=f*C+R*A+w*V+M*tt,s[15]=f*_+R*H+w*X+M*ot,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],a=t[5],o=t[9],l=t[13],c=t[2],u=t[6],d=t[10],h=t[14],m=t[3],v=t[7],b=t[11],p=t[15],f=o*h-l*d,R=a*h-l*u,w=a*d-o*u,M=r*h-l*c,E=r*d-o*c,T=r*u-a*c;return e*(v*f-b*R+p*w)-n*(m*f-b*M+p*E)+i*(m*R-v*M+p*T)-s*(m*w-v*E+b*T)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],r=t[5],a=t[9],o=t[2],l=t[6],c=t[10];return e*(r*c-a*l)-n*(s*c-a*o)+i*(s*l-r*o)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;if(t.isVector3)i[12]=t.x,i[13]=t.y,i[14]=t.z;else i[12]=t,i[13]=e,i[14]=n;return this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8],u=t[9],d=t[10],h=t[11],m=t[12],v=t[13],b=t[14],p=t[15],f=e*a-n*r,R=e*o-i*r,w=e*l-s*r,M=n*o-i*a,E=n*l-s*a,T=i*l-s*o,C=c*v-u*m,_=c*b-d*m,S=c*p-h*m,z=u*b-d*v,A=u*p-h*v,H=d*p-h*b,J=f*H-R*A+w*z+M*S-E*_+T*C;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/J;return t[0]=(a*H-o*A+l*z)*B,t[1]=(i*A-n*H-s*z)*B,t[2]=(v*T-b*E+p*M)*B,t[3]=(d*E-u*T-h*M)*B,t[4]=(o*S-r*H-l*_)*B,t[5]=(e*H-i*S+s*_)*B,t[6]=(b*w-m*T-p*R)*B,t[7]=(c*T-d*w+h*R)*B,t[8]=(r*A-a*S+l*C)*B,t[9]=(n*S-e*A-s*C)*B,t[10]=(m*E-v*w+p*f)*B,t[11]=(u*w-c*E-h*f)*B,t[12]=(a*_-r*z-o*C)*B,t[13]=(e*z-n*_+i*C)*B,t[14]=(v*R-m*M-b*f)*B,t[15]=(c*M-u*R+d*f)*B,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){if(t.isVector3)this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1);else this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1);return this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,r=t.x,a=t.y,o=t.z,l=s*r,c=s*a;return this.set(l*r+n,l*a-i*o,l*o+i*a,0,l*a+i*o,c*a+n,c*o-i*r,0,l*o-i*a,c*o+i*r,s*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,r=e._y,a=e._z,o=e._w,l=s+s,c=r+r,u=a+a,d=s*l,h=s*c,m=s*u,v=r*c,b=r*u,p=a*u,f=o*l,R=o*c,w=o*u,M=n.x,E=n.y,T=n.z;return i[0]=(1-(v+p))*M,i[1]=(h+w)*M,i[2]=(m-R)*M,i[3]=0,i[4]=(h-w)*E,i[5]=(1-(d+p))*E,i[6]=(b+f)*E,i[7]=0,i[8]=(m+R)*T,i[9]=(b-f)*T,i[10]=(1-(d+v))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let r=oi.set(i[0],i[1],i[2]).length(),a=oi.set(i[4],i[5],i[6]).length(),o=oi.set(i[8],i[9],i[10]).length();if(s<0)r=-r;Je.copy(this);let l=1/r,c=1/a,u=1/o;return Je.elements[0]*=l,Je.elements[1]*=l,Je.elements[2]*=l,Je.elements[4]*=c,Je.elements[5]*=c,Je.elements[6]*=c,Je.elements[8]*=u,Je.elements[9]*=u,Je.elements[10]*=u,e.setFromRotationMatrix(Je),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,r,a=2000,o=!1){let l=this.elements,c=2*s/(e-t),u=2*s/(n-i),d=(e+t)/(e-t),h=(n+i)/(n-i),m,v;if(o)m=s/(r-s),v=r*s/(r-s);else if(a===2000)m=-(r+s)/(r-s),v=-2*r*s/(r-s);else if(a===2001)m=-r/(r-s),v=-r*s/(r-s);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,r,a=2000,o=!1){let l=this.elements,c=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),h=-(n+i)/(n-i),m,v;if(o)m=1/(r-s),v=r/(r-s);else if(a===2000)m=-2/(r-s),v=-(r+s)/(r-s);else if(a===2001)m=-1/(r-s),v=-s/(r-s);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}var oi=new D,Je=new re,Rh=new D(0,0,0),Ch=new D(1,1,1),Tn=new D,ls=new D,Oe=new D,Ho=new re,Vo=new Xe;class vn{constructor(t=0,e=0,n=0,i=vn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],r=i[4],a=i[8],o=i[1],l=i[5],c=i[9],u=i[2],d=i[6],h=i[10];switch(e){case"XYZ":if(this._y=Math.asin(Ot(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(-c,h),this._z=Math.atan2(-r,s);else this._x=Math.atan2(d,l),this._z=0;break;case"YXZ":if(this._x=Math.asin(-Ot(c,-1,1)),Math.abs(c)<0.9999999)this._y=Math.atan2(a,h),this._z=Math.atan2(o,l);else this._y=Math.atan2(-u,s),this._z=0;break;case"ZXY":if(this._x=Math.asin(Ot(d,-1,1)),Math.abs(d)<0.9999999)this._y=Math.atan2(-u,h),this._z=Math.atan2(-r,l);else this._y=0,this._z=Math.atan2(o,s);break;case"ZYX":if(this._y=Math.asin(-Ot(u,-1,1)),Math.abs(u)<0.9999999)this._x=Math.atan2(d,h),this._z=Math.atan2(o,s);else this._x=0,this._z=Math.atan2(-r,l);break;case"YZX":if(this._z=Math.asin(Ot(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-c,l),this._y=Math.atan2(-u,s);else this._x=0,this._y=Math.atan2(a,h);break;case"XZY":if(this._z=Math.asin(-Ot(r,-1,1)),Math.abs(r)<0.9999999)this._x=Math.atan2(d,l),this._y=Math.atan2(a,s);else this._x=Math.atan2(-c,h),this._y=0;break;default:Tt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}if(this._order=e,n===!0)this._onChangeCallback();return this}setFromQuaternion(t,e,n){return Ho.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ho,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vo.setFromEuler(this),this.setFromQuaternion(Vo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){if(this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0)this._order=t[3];return this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vn.DEFAULT_ORDER="XYZ";class Ys{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}var Ph=0,Wo=new D,li=new Xe,dn=new re,cs=new D,Ui=new D,Ih=new D,Lh=new Xe,Xo=new D(1,0,0),qo=new D(0,1,0),Yo=new D(0,0,1),Zo={type:"added"},Dh={type:"removed"},ci={type:"childadded",child:null},_r={type:"childremoved",child:null};class Me extends ln{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();let t=new D,e=new vn,n=new Xe,i=new D(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new re},normalMatrix:{value:new Lt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ys,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return li.setFromAxisAngle(t,e),this.quaternion.multiply(li),this}rotateOnWorldAxis(t,e){return li.setFromAxisAngle(t,e),this.quaternion.premultiply(li),this}rotateX(t){return this.rotateOnAxis(Xo,t)}rotateY(t){return this.rotateOnAxis(qo,t)}rotateZ(t){return this.rotateOnAxis(Yo,t)}translateOnAxis(t,e){return Wo.copy(t).applyQuaternion(this.quaternion),this.position.add(Wo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xo,t)}translateY(t){return this.translateOnAxis(qo,t)}translateZ(t){return this.translateOnAxis(Yo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){if(t.isVector3)cs.copy(t);else cs.set(t,e,n);let i=this.parent;if(this.updateWorldMatrix(!0,!1),Ui.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)dn.lookAt(Ui,cs,this.up);else dn.lookAt(cs,Ui,this.up);if(this.quaternion.setFromRotationMatrix(dn),i)dn.extractRotation(i.matrixWorld),li.setFromRotationMatrix(dn),this.quaternion.premultiply(li.invert())}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}if(t===this)return Ct("Object3D.add: object can't be added as a child of itself.",t),this;if(t&&t.isObject3D)t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zo),ci.child=t,this.dispatchEvent(ci),ci.child=null;else Ct("Object3D.add: object not an instance of THREE.Object3D.",t);return this}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);if(e!==-1)t.parent=null,this.children.splice(e,1),t.dispatchEvent(Dh),_r.child=t,this.dispatchEvent(_r),_r.child=null;return this}removeFromParent(){let t=this.parent;if(t!==null)t.remove(this);return this}clear(){return this.remove(...this.children)}attach(t){if(this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),t.parent!==null)t.parent.updateWorldMatrix(!0,!1),dn.multiply(t.parent.matrixWorld);return t.applyMatrix4(dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zo),ci.child=t,this.dispatchEvent(ci),ci.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}return}getObjectsByProperty(t,e,n=[]){if(this[t]===e)n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ui,t,Ih),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ui,Lh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;if(e!==null)t(e),e.traverseAncestors(t)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let{x:e,y:n,z:i}=t,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||t){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,t=!0}let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null)i.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||n){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,n=!0}if(e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t==="string",n={};if(e)t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let i={};if(i.uuid=this.uuid,i.type=this.type,this.name!=="")i.name=this.name;if(this.castShadow===!0)i.castShadow=!0;if(this.receiveShadow===!0)i.receiveShadow=!0;if(this.visible===!1)i.visible=!1;if(this.frustumCulled===!1)i.frustumCulled=!1;if(this.renderOrder!==0)i.renderOrder=this.renderOrder;if(this.static!==!1)i.static=this.static;if(Object.keys(this.userData).length>0)i.userData=this.userData;if(i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null)i.pivot=this.pivot.toArray();if(this.matrixAutoUpdate===!1)i.matrixAutoUpdate=!1;if(this.morphTargetDictionary!==void 0)i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)i.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)i.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map((a)=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map((a)=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null)i.colorsTexture=this._colorsTexture.toJSON(t);if(this.boundingSphere!==null)i.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)i.boundingBox=this.boundingBox.toJSON()}function s(a,o){if(a[o.uuid]===void 0)a[o.uuid]=o.toJSON(t);return o.uuid}if(this.isScene){if(this.background){if(this.background.isColor)i.background=this.background.toJSON();else if(this.background.isTexture)i.background=this.background.toJSON(t).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)i.environment=this.environment.toJSON(t).uuid}else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let o=a.shapes;if(Array.isArray(o))for(let l=0,c=o.length;l<c;l++){let u=o[l];s(t.shapes,u)}else s(t.shapes,o)}}if(this.isSkinnedMesh){if(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let o=0,l=this.material.length;o<l;o++)a.push(s(t.materials,this.material[o]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let o=this.animations[a];i.animations.push(s(t.animations,o))}}if(e){let a=r(t.geometries),o=r(t.materials),l=r(t.textures),c=r(t.images),u=r(t.shapes),d=r(t.skeletons),h=r(t.animations),m=r(t.nodes);if(a.length>0)n.geometries=a;if(o.length>0)n.materials=o;if(l.length>0)n.textures=l;if(c.length>0)n.images=c;if(u.length>0)n.shapes=u;if(d.length>0)n.skeletons=d;if(h.length>0)n.animations=h;if(m.length>0)n.nodes=m}return n.object=i,n;function r(a){let o=[];for(let l in a){let c=a[l];delete c.metadata,o.push(c)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}}Me.DEFAULT_UP=new D(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class In extends Me{constructor(){super();this.isGroup=!0,this.type="Group"}}var Nh={type:"move"};class Ji{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new In,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new In,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new In,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(t){if(this._targetRay!==null)this._targetRay.dispatchEvent(t);if(this._grip!==null)this._grip.dispatchEvent(t);if(this._hand!==null)this._hand.dispatchEvent(t);return this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){if(this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(t,e,n){let i=null,s=null,r=null,a=this._targetRay,o=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(let v of t.hand.values()){let b=e.getJointPose(v,n),p=this._getHandJoint(l,v);if(b!==null)p.matrix.fromArray(b.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=b.radius;p.visible=b!==null}let c=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=c.position.distanceTo(u.position),h=0.02,m=0.005;if(l.inputState.pinching&&d>h+m)l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this});else if(!l.inputState.pinching&&d<=h-m)l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this})}else if(o!==null&&t.gripSpace){if(s=e.getPose(t.gripSpace,n),s!==null){if(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity);else o.hasLinearVelocity=!1;if(s.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity);else o.hasAngularVelocity=!1;if(o.eventsEnabled)o.dispatchEvent({type:"gripUpdated",data:t,target:this})}}if(a!==null){if(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null)i=s;if(i!==null){if(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity)a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity);else a.hasLinearVelocity=!1;if(i.angularVelocity)a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity);else a.hasAngularVelocity=!1;this.dispatchEvent(Nh)}}}if(a!==null)a.visible=i!==null;if(o!==null)o.visible=s!==null;if(l!==null)l.visible=r!==null;return this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new In;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}var cc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},hs={h:0,s:0,l:0};function xr(t,e,n){if(n<0)n+=1;if(n>1)n-=1;if(n<0.16666666666666666)return t+(e-t)*6*n;if(n<0.5)return e;if(n<0.6666666666666666)return t+(e-t)*6*(0.6666666666666666-n);return t}class It{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;if(i&&i.isColor)this.copy(i);else if(typeof i==="number")this.setHex(i);else if(typeof i==="string")this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e="srgb"){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Gt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Gt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Gt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Gt.workingColorSpace){if(t=Oa(t,1),e=Ot(e,0,1),n=Ot(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=0.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=xr(r,s,t+0.3333333333333333),this.g=xr(r,s,t),this.b=xr(r,s,t-0.3333333333333333)}return Gt.colorSpaceToWorking(this,i),this}setStyle(t,e="srgb"){function n(s){if(s===void 0)return;if(parseFloat(s)<1)Tt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Tt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);else if(r===6)return this.setHex(parseInt(s,16),e);else Tt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e="srgb"){let n=cc[t.toLowerCase()];if(n!==void 0)this.setHex(n,e);else Tt("Color: Unknown color "+t);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xn(t.r),this.g=xn(t.g),this.b=xn(t.b),this}copyLinearToSRGB(t){return this.r=vi(t.r),this.g=vi(t.g),this.b=vi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t="srgb"){return Gt.workingToColorSpace(Te.copy(this),t),Math.round(Ot(Te.r*255,0,255))*65536+Math.round(Ot(Te.g*255,0,255))*256+Math.round(Ot(Te.b*255,0,255))}getHexString(t="srgb"){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Gt.workingColorSpace){Gt.workingToColorSpace(Te.copy(this),e);let{r:n,g:i,b:s}=Te,r=Math.max(n,i,s),a=Math.min(n,i,s),o,l,c=(a+r)/2;if(a===r)o=0,l=0;else{let u=r-a;switch(l=c<=0.5?u/(r+a):u/(2-r-a),r){case n:o=(i-s)/u+(i<s?6:0);break;case i:o=(s-n)/u+2;break;case s:o=(n-i)/u+4;break}o/=6}return t.h=o,t.s=l,t.l=c,t}getRGB(t,e=Gt.workingColorSpace){return Gt.workingToColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t="srgb"){Gt.workingToColorSpace(Te.copy(this),t);let{r:e,g:n,b:i}=Te;if(t!=="srgb")return`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`;return`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(An),this.setHSL(An.h+t,An.s+e,An.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(An),t.getHSL(hs);let n=Gi(An.h,hs.h,e),i=Gi(An.s,hs.s,e),s=Gi(An.l,hs.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var Te=new It;It.NAMES=cc;class Kn{constructor(t,e=1,n=1000){this.isFog=!0,this.name="",this.color=new It(t),this.near=e,this.far=n}clone(){return new Kn(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Zs extends Me{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){if(super.copy(t,e),t.background!==null)this.background=t.background.clone();if(t.environment!==null)this.environment=t.environment.clone();if(t.fog!==null)this.fog=t.fog.clone();if(this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null)this.overrideMaterial=t.overrideMaterial.clone();return this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);if(this.fog!==null)e.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)e.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)e.object.backgroundIntensity=this.backgroundIntensity;if(e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)e.object.environmentIntensity=this.environmentIntensity;return e.object.environmentRotation=this.environmentRotation.toArray(),e}}var $e=new D,fn=new D,vr=new D,pn=new D,hi=new D,ui=new D,Jo=new D,yr=new D,Mr=new D,Sr=new D,br=new ae,Er=new ae,Tr=new ae;class We{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),$e.subVectors(t,e),i.cross($e);let s=i.lengthSq();if(s>0)return i.multiplyScalar(1/Math.sqrt(s));return i.set(0,0,0)}static getBarycoord(t,e,n,i,s){$e.subVectors(i,e),fn.subVectors(n,e),vr.subVectors(t,e);let r=$e.dot($e),a=$e.dot(fn),o=$e.dot(vr),l=fn.dot(fn),c=fn.dot(vr),u=r*l-a*a;if(u===0)return s.set(0,0,0),null;let d=1/u,h=(l*o-a*c)*d,m=(r*c-a*o)*d;return s.set(1-h-m,m,h)}static containsPoint(t,e,n,i){if(this.getBarycoord(t,e,n,i,pn)===null)return!1;return pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getInterpolation(t,e,n,i,s,r,a,o){if(this.getBarycoord(t,e,n,i,pn)===null){if(o.x=0,o.y=0,"z"in o)o.z=0;if("w"in o)o.w=0;return null}return o.setScalar(0),o.addScaledVector(s,pn.x),o.addScaledVector(r,pn.y),o.addScaledVector(a,pn.z),o}static getInterpolatedAttribute(t,e,n,i,s,r){return br.setScalar(0),Er.setScalar(0),Tr.setScalar(0),br.fromBufferAttribute(t,e),Er.fromBufferAttribute(t,n),Tr.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(br,s.x),r.addScaledVector(Er,s.y),r.addScaledVector(Tr,s.z),r}static isFrontFacing(t,e,n,i){return $e.subVectors(n,e),fn.subVectors(t,e),$e.cross(fn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $e.subVectors(this.c,this.b),fn.subVectors(this.a,this.b),$e.cross(fn).length()*0.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(t){return We.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return We.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return We.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return We.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return We.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,r,a;hi.subVectors(i,n),ui.subVectors(s,n),yr.subVectors(t,n);let o=hi.dot(yr),l=ui.dot(yr);if(o<=0&&l<=0)return e.copy(n);Mr.subVectors(t,i);let c=hi.dot(Mr),u=ui.dot(Mr);if(c>=0&&u<=c)return e.copy(i);let d=o*u-c*l;if(d<=0&&o>=0&&c<=0)return r=o/(o-c),e.copy(n).addScaledVector(hi,r);Sr.subVectors(t,s);let h=hi.dot(Sr),m=ui.dot(Sr);if(m>=0&&h<=m)return e.copy(s);let v=h*l-o*m;if(v<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(ui,a);let b=c*m-h*u;if(b<=0&&u-c>=0&&h-m>=0)return Jo.subVectors(s,i),a=(u-c)/(u-c+(h-m)),e.copy(i).addScaledVector(Jo,a);let p=1/(b+v+d);return r=v*p,a=d*p,e.copy(n).addScaledVector(hi,r).addScaledVector(ui,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class en{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ke.copy(e).multiplyScalar(0.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++){if(t.isMesh===!0)t.getVertexPosition(r,Ke);else Ke.fromBufferAttribute(s,r);Ke.applyMatrix4(t.matrixWorld),this.expandByPoint(Ke)}else{if(t.boundingBox!==void 0){if(t.boundingBox===null)t.computeBoundingBox();us.copy(t.boundingBox)}else{if(n.boundingBox===null)n.computeBoundingBox();us.copy(n.boundingBox)}us.applyMatrix4(t.matrixWorld),this.union(us)}}let i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ke),Ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;if(t.normal.x>0)e=t.normal.x*this.min.x,n=t.normal.x*this.max.x;else e=t.normal.x*this.max.x,n=t.normal.x*this.min.x;if(t.normal.y>0)e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y;else e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y;if(t.normal.z>0)e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z;else e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z;return e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fi),ds.subVectors(this.max,Fi),di.subVectors(t.a,Fi),fi.subVectors(t.b,Fi),pi.subVectors(t.c,Fi),wn.subVectors(fi,di),Rn.subVectors(pi,fi),kn.subVectors(di,pi);let e=[0,-wn.z,wn.y,0,-Rn.z,Rn.y,0,-kn.z,kn.y,wn.z,0,-wn.x,Rn.z,0,-Rn.x,kn.z,0,-kn.x,-wn.y,wn.x,0,-Rn.y,Rn.x,0,-kn.y,kn.x,0];if(!Ar(e,di,fi,pi,ds))return!1;if(e=[1,0,0,0,1,0,0,0,1],!Ar(e,di,fi,pi,ds))return!1;return fs.crossVectors(wn,Rn),e=[fs.x,fs.y,fs.z],Ar(e,di,fi,pi,ds)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ke).distanceTo(t)}getBoundingSphere(t){if(this.isEmpty())t.makeEmpty();else this.getCenter(t.center),t.radius=this.getSize(Ke).length()*0.5;return t}intersect(t){if(this.min.max(t.min),this.max.min(t.max),this.isEmpty())this.makeEmpty();return this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){if(this.isEmpty())return this;return mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mn),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}var mn=[new D,new D,new D,new D,new D,new D,new D,new D],Ke=new D,us=new en,di=new D,fi=new D,pi=new D,wn=new D,Rn=new D,kn=new D,Fi=new D,ds=new D,fs=new D,Gn=new D;function Ar(t,e,n,i,s){for(let r=0,a=t.length-3;r<=a;r+=3){Gn.fromArray(t,r);let o=s.x*Math.abs(Gn.x)+s.y*Math.abs(Gn.y)+s.z*Math.abs(Gn.z),l=e.dot(Gn),c=n.dot(Gn),u=i.dot(Gn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var de=new D,ps=new Pt,Uh=0;class we extends ln{constructor(t,e,n=!1){super();if(Array.isArray(t))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Uh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){if(t===!0)this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ps.fromBufferAttribute(this,e),ps.applyMatrix3(t),this.setXY(e,ps.x,ps.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];if(this.normalized)n=xi(n,this.array);return n}setComponent(t,e,n){if(this.normalized)n=Pe(n,this.array);return this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];if(this.normalized)e=xi(e,this.array);return e}setX(t,e){if(this.normalized)e=Pe(e,this.array);return this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];if(this.normalized)e=xi(e,this.array);return e}setY(t,e){if(this.normalized)e=Pe(e,this.array);return this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];if(this.normalized)e=xi(e,this.array);return e}setZ(t,e){if(this.normalized)e=Pe(e,this.array);return this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];if(this.normalized)e=xi(e,this.array);return e}setW(t,e){if(this.normalized)e=Pe(e,this.array);return this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){if(t*=this.itemSize,this.normalized)e=Pe(e,this.array),n=Pe(n,this.array);return this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){if(t*=this.itemSize,this.normalized)e=Pe(e,this.array),n=Pe(n,this.array),i=Pe(i,this.array);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){if(t*=this.itemSize,this.normalized)e=Pe(e,this.array),n=Pe(n,this.array),i=Pe(i,this.array),s=Pe(s,this.array);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")t.name=this.name;if(this.usage!==35044)t.usage=this.usage;return t}dispose(){this.dispatchEvent({type:"dispose"})}}class Js extends we{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class $s extends we{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class fe extends we{constructor(t,e,n){super(new Float32Array(t),e,n)}}var Fh=new en,Oi=new D,wr=new D;class Ri{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;if(e!==void 0)n.copy(e);else Fh.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);if(e.copy(t),n>this.radius*this.radius)e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center);return e}getBoundingBox(t){if(this.isEmpty())return t.makeEmpty(),t;return t.set(this.center,this.center),t.expandByScalar(this.radius),t}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Oi.subVectors(t,this.center);let e=Oi.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*0.5;this.center.addScaledVector(Oi,i/n),this.radius+=i}return this}union(t){if(t.isEmpty())return this;if(this.isEmpty())return this.copy(t),this;if(this.center.equals(t.center)===!0)this.radius=Math.max(this.radius,t.radius);else wr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Oi.copy(t.center).add(wr)),this.expandByPoint(Oi.copy(t.center).sub(wr));return this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}var Oh=0,Ve=new re,Rr=new Me,mi=new D,Be=new en,Bi=new en,ye=new D;class Re extends ln{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){if(Array.isArray(t))this.index=new((oh(t))?$s:Js)(t,1);else this.index=t;return this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;if(e!==void 0)e.applyMatrix4(t),e.needsUpdate=!0;let n=this.attributes.normal;if(n!==void 0){let s=new Lt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;if(i!==void 0)i.transformDirection(t),i.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(t){return Ve.makeRotationFromQuaternion(t),this.applyMatrix4(Ve),this}rotateX(t){return Ve.makeRotationX(t),this.applyMatrix4(Ve),this}rotateY(t){return Ve.makeRotationY(t),this.applyMatrix4(Ve),this}rotateZ(t){return Ve.makeRotationZ(t),this.applyMatrix4(Ve),this}translate(t,e,n){return Ve.makeTranslation(t,e,n),this.applyMatrix4(Ve),this}scale(t,e,n){return Ve.makeScale(t,e,n),this.applyMatrix4(Ve),this}lookAt(t){return Rr.lookAt(t),Rr.updateMatrix(),this.applyMatrix4(Rr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mi).negate(),this.translate(mi.x,mi.y,mi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new fe(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}if(t.length>e.count)Tt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");e.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new en;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];if(Be.setFromBufferAttribute(s),this.morphTargetsRelative)ye.addVectors(this.boundingBox.min,Be.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,Be.max),this.boundingBox.expandByPoint(ye);else this.boundingBox.expandByPoint(Be.min),this.boundingBox.expandByPoint(Be.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))Ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new Ri;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(Be.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){let a=e[s];if(Bi.setFromBufferAttribute(a),this.morphTargetsRelative)ye.addVectors(Be.min,Bi.min),Be.expandByPoint(ye),ye.addVectors(Be.max,Bi.max),Be.expandByPoint(ye);else Be.expandByPoint(Bi.min),Be.expandByPoint(Bi.max)}Be.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)ye.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(ye));if(e)for(let s=0,r=e.length;s<r;s++){let a=e[s],o=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++){if(ye.fromBufferAttribute(a,l),o)mi.fromBufferAttribute(t,l),ye.add(mi);i=Math.max(i,n.distanceToSquared(ye))}}if(this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius))Ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:n,normal:i,uv:s}=e,r=this.getAttribute("tangent");if(r===void 0||r.count!==n.count)r=new we(new Float32Array(4*n.count),4),this.setAttribute("tangent",r);let a=[],o=[];for(let C=0;C<n.count;C++)a[C]=new D,o[C]=new D;let l=new D,c=new D,u=new D,d=new Pt,h=new Pt,m=new Pt,v=new D,b=new D;function p(C,_,S){l.fromBufferAttribute(n,C),c.fromBufferAttribute(n,_),u.fromBufferAttribute(n,S),d.fromBufferAttribute(s,C),h.fromBufferAttribute(s,_),m.fromBufferAttribute(s,S),c.sub(l),u.sub(l),h.sub(d),m.sub(d);let z=1/(h.x*m.y-m.x*h.y);if(!isFinite(z))return;v.copy(c).multiplyScalar(m.y).addScaledVector(u,-h.y).multiplyScalar(z),b.copy(u).multiplyScalar(h.x).addScaledVector(c,-m.x).multiplyScalar(z),a[C].add(v),a[_].add(v),a[S].add(v),o[C].add(b),o[_].add(b),o[S].add(b)}let f=this.groups;if(f.length===0)f=[{start:0,count:t.count}];for(let C=0,_=f.length;C<_;++C){let S=f[C],z=S.start,A=S.count;for(let H=z,J=z+A;H<J;H+=3)p(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let R=new D,w=new D,M=new D,E=new D;function T(C){M.fromBufferAttribute(i,C),E.copy(M);let _=a[C];R.copy(_),R.sub(M.multiplyScalar(M.dot(_))).normalize(),w.crossVectors(E,_);let z=w.dot(o[C])<0?-1:1;r.setXYZW(C,R.x,R.y,R.z,z)}for(let C=0,_=f.length;C<_;++C){let S=f[C],z=S.start,A=S.count;for(let H=z,J=z+A;H<J;H+=3)T(t.getX(H+0)),T(t.getX(H+1)),T(t.getX(H+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new we(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);let i=new D,s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,u=new D;if(t)for(let d=0,h=t.count;d<h;d+=3){let m=t.getX(d+0),v=t.getX(d+1),b=t.getX(d+2);i.fromBufferAttribute(e,m),s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,b),c.subVectors(r,s),u.subVectors(i,s),c.cross(u),a.fromBufferAttribute(n,m),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,b),a.add(c),o.add(c),l.add(c),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z)}else for(let d=0,h=e.count;d<h;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),c.subVectors(r,s),u.subVectors(i,s),c.cross(u),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(a,o){let{array:l,itemSize:c,normalized:u}=a,d=new l.constructor(o.length*c),h=0,m=0;for(let v=0,b=o.length;v<b;v++){if(a.isInterleavedBufferAttribute)h=o[v]*a.data.stride+a.offset;else h=o[v]*c;for(let p=0;p<c;p++)d[m++]=l[h++]}return new we(d,c,u)}if(this.index===null)return Tt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new Re,n=this.index.array,i=this.attributes;for(let a in i){let o=i[a],l=t(o,n);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let o=[],l=s[a];for(let c=0,u=l.length;c<u;c++){let d=l[c],h=t(d,n);o.push(h)}e.morphAttributes[a]=o}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,o=r.length;a<o;a++){let l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!=="")t.name=this.name;if(Object.keys(this.userData).length>0)t.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let o=this.parameters;for(let l in o)if(o[l]!==void 0)t[l]=o[l];return t}t.data={attributes:{}};let e=this.index;if(e!==null)t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)};let n=this.attributes;for(let o in n){let l=n[o];t.data.attributes[o]=l.toJSON(t.data)}let i={},s=!1;for(let o in this.morphAttributes){let l=this.morphAttributes[o],c=[];for(let u=0,d=l.length;u<d;u++){let h=l[u];c.push(h.toJSON(t.data))}if(c.length>0)i[o]=c,s=!0}if(s)t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;if(r.length>0)t.data.groups=JSON.parse(JSON.stringify(r));let a=this.boundingSphere;if(a!==null)t.data.boundingSphere=a.toJSON();return t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;if(n!==null)this.setIndex(n.clone());let i=t.attributes;for(let l in i){let c=i[l];this.setAttribute(l,c.clone(e))}let s=t.morphAttributes;for(let l in s){let c=[],u=s[l];for(let d=0,h=u.length;d<h;d++)c.push(u[d].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let l=0,c=r.length;l<c;l++){let u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;if(a!==null)this.boundingBox=a.clone();let o=t.boundingSphere;if(o!==null)this.boundingSphere=o.clone();return this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}var Bh=0;class Fn extends ln{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=wi(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){if(this._alphaTest>0!==t>0)this.version++;this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t===void 0)return;for(let e in t){let n=t[e];if(n===void 0){Tt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Tt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}if(i&&i.isColor)i.set(n);else if(i&&i.isVector2&&(n&&n.isVector2)||i&&i.isEuler&&(n&&n.isEuler)||i&&i.isVector3&&(n&&n.isVector3))i.copy(n);else this[e]=n}}toJSON(t){let e=t===void 0||typeof t==="string";if(e)t={textures:{},images:{}};let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,this.name!=="")n.name=this.name;if(this.color&&this.color.isColor)n.color=this.color.getHex();if(this.roughness!==void 0)n.roughness=this.roughness;if(this.metalness!==void 0)n.metalness=this.metalness;if(this.sheen!==void 0)n.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)n.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)n.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)n.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)n.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)n.specular=this.specular.getHex();if(this.specularIntensity!==void 0)n.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)n.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)n.shininess=this.shininess;if(this.clearcoat!==void 0)n.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)n.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid;if(this.dispersion!==void 0)n.dispersion=this.dispersion;if(this.iridescence!==void 0)n.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)n.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)n.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid;if(this.anisotropy!==void 0)n.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)n.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid;if(this.map&&this.map.isTexture)n.map=this.map.toJSON(t).uuid;if(this.matcap&&this.matcap.isTexture)n.matcap=this.matcap.toJSON(t).uuid;if(this.alphaMap&&this.alphaMap.isTexture)n.alphaMap=this.alphaMap.toJSON(t).uuid;if(this.lightMap&&this.lightMap.isTexture)n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)n.roughnessMap=this.roughnessMap.toJSON(t).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)n.metalnessMap=this.metalnessMap.toJSON(t).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)n.emissiveMap=this.emissiveMap.toJSON(t).uuid;if(this.specularMap&&this.specularMap.isTexture)n.specularMap=this.specularMap.toJSON(t).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)n.specularColorMap=this.specularColorMap.toJSON(t).uuid;if(this.envMap&&this.envMap.isTexture){if(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0)n.combine=this.combine}if(this.envMapRotation!==void 0)n.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)n.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)n.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)n.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)n.gradientMap=this.gradientMap.toJSON(t).uuid;if(this.transmission!==void 0)n.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)n.transmissionMap=this.transmissionMap.toJSON(t).uuid;if(this.thickness!==void 0)n.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)n.thicknessMap=this.thicknessMap.toJSON(t).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)n.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)n.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)n.size=this.size;if(this.shadowSide!==null)n.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)n.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)n.blending=this.blending;if(this.side!==0)n.side=this.side;if(this.vertexColors===!0)n.vertexColors=!0;if(this.opacity<1)n.opacity=this.opacity;if(this.transparent===!0)n.transparent=!0;if(this.blendSrc!==204)n.blendSrc=this.blendSrc;if(this.blendDst!==205)n.blendDst=this.blendDst;if(this.blendEquation!==100)n.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)n.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)n.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)n.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)n.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)n.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)n.depthFunc=this.depthFunc;if(this.depthTest===!1)n.depthTest=this.depthTest;if(this.depthWrite===!1)n.depthWrite=this.depthWrite;if(this.colorWrite===!1)n.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)n.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)n.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)n.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)n.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)n.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)n.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)n.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)n.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)n.rotation=this.rotation;if(this.polygonOffset===!0)n.polygonOffset=!0;if(this.polygonOffsetFactor!==0)n.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)n.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)n.linewidth=this.linewidth;if(this.dashSize!==void 0)n.dashSize=this.dashSize;if(this.gapSize!==void 0)n.gapSize=this.gapSize;if(this.scale!==void 0)n.scale=this.scale;if(this.dithering===!0)n.dithering=!0;if(this.alphaTest>0)n.alphaTest=this.alphaTest;if(this.alphaHash===!0)n.alphaHash=!0;if(this.alphaToCoverage===!0)n.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)n.premultipliedAlpha=!0;if(this.forceSinglePass===!0)n.forceSinglePass=!0;if(this.allowOverride===!1)n.allowOverride=!1;if(this.wireframe===!0)n.wireframe=!0;if(this.wireframeLinewidth>1)n.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")n.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")n.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)n.flatShading=!0;if(this.visible===!1)n.visible=!1;if(this.toneMapped===!1)n.toneMapped=!1;if(this.fog===!1)n.fog=!1;if(Object.keys(this.userData).length>0)n.userData=this.userData;function i(s){let r=[];for(let a in s){let o=s[a];delete o.metadata,r.push(o)}return r}if(e){let s=i(t.textures),r=i(t.images);if(s.length>0)n.textures=s;if(r.length>0)n.images=r}return n}fromJSON(t,e){if(t.uuid!==void 0)this.uuid=t.uuid;if(t.name!==void 0)this.name=t.name;if(t.color!==void 0&&this.color!==void 0)this.color.setHex(t.color);if(t.roughness!==void 0)this.roughness=t.roughness;if(t.metalness!==void 0)this.metalness=t.metalness;if(t.sheen!==void 0)this.sheen=t.sheen;if(t.sheenColor!==void 0)this.sheenColor=new It().setHex(t.sheenColor);if(t.sheenRoughness!==void 0)this.sheenRoughness=t.sheenRoughness;if(t.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(t.emissive);if(t.specular!==void 0&&this.specular!==void 0)this.specular.setHex(t.specular);if(t.specularIntensity!==void 0)this.specularIntensity=t.specularIntensity;if(t.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(t.specularColor);if(t.shininess!==void 0)this.shininess=t.shininess;if(t.clearcoat!==void 0)this.clearcoat=t.clearcoat;if(t.clearcoatRoughness!==void 0)this.clearcoatRoughness=t.clearcoatRoughness;if(t.dispersion!==void 0)this.dispersion=t.dispersion;if(t.iridescence!==void 0)this.iridescence=t.iridescence;if(t.iridescenceIOR!==void 0)this.iridescenceIOR=t.iridescenceIOR;if(t.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=t.iridescenceThicknessRange;if(t.transmission!==void 0)this.transmission=t.transmission;if(t.thickness!==void 0)this.thickness=t.thickness;if(t.attenuationDistance!==void 0)this.attenuationDistance=t.attenuationDistance;if(t.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(t.attenuationColor);if(t.anisotropy!==void 0)this.anisotropy=t.anisotropy;if(t.anisotropyRotation!==void 0)this.anisotropyRotation=t.anisotropyRotation;if(t.fog!==void 0)this.fog=t.fog;if(t.flatShading!==void 0)this.flatShading=t.flatShading;if(t.blending!==void 0)this.blending=t.blending;if(t.combine!==void 0)this.combine=t.combine;if(t.side!==void 0)this.side=t.side;if(t.shadowSide!==void 0)this.shadowSide=t.shadowSide;if(t.opacity!==void 0)this.opacity=t.opacity;if(t.transparent!==void 0)this.transparent=t.transparent;if(t.alphaTest!==void 0)this.alphaTest=t.alphaTest;if(t.alphaHash!==void 0)this.alphaHash=t.alphaHash;if(t.depthFunc!==void 0)this.depthFunc=t.depthFunc;if(t.depthTest!==void 0)this.depthTest=t.depthTest;if(t.depthWrite!==void 0)this.depthWrite=t.depthWrite;if(t.colorWrite!==void 0)this.colorWrite=t.colorWrite;if(t.blendSrc!==void 0)this.blendSrc=t.blendSrc;if(t.blendDst!==void 0)this.blendDst=t.blendDst;if(t.blendEquation!==void 0)this.blendEquation=t.blendEquation;if(t.blendSrcAlpha!==void 0)this.blendSrcAlpha=t.blendSrcAlpha;if(t.blendDstAlpha!==void 0)this.blendDstAlpha=t.blendDstAlpha;if(t.blendEquationAlpha!==void 0)this.blendEquationAlpha=t.blendEquationAlpha;if(t.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(t.blendColor);if(t.blendAlpha!==void 0)this.blendAlpha=t.blendAlpha;if(t.stencilWriteMask!==void 0)this.stencilWriteMask=t.stencilWriteMask;if(t.stencilFunc!==void 0)this.stencilFunc=t.stencilFunc;if(t.stencilRef!==void 0)this.stencilRef=t.stencilRef;if(t.stencilFuncMask!==void 0)this.stencilFuncMask=t.stencilFuncMask;if(t.stencilFail!==void 0)this.stencilFail=t.stencilFail;if(t.stencilZFail!==void 0)this.stencilZFail=t.stencilZFail;if(t.stencilZPass!==void 0)this.stencilZPass=t.stencilZPass;if(t.stencilWrite!==void 0)this.stencilWrite=t.stencilWrite;if(t.wireframe!==void 0)this.wireframe=t.wireframe;if(t.wireframeLinewidth!==void 0)this.wireframeLinewidth=t.wireframeLinewidth;if(t.wireframeLinecap!==void 0)this.wireframeLinecap=t.wireframeLinecap;if(t.wireframeLinejoin!==void 0)this.wireframeLinejoin=t.wireframeLinejoin;if(t.rotation!==void 0)this.rotation=t.rotation;if(t.linewidth!==void 0)this.linewidth=t.linewidth;if(t.dashSize!==void 0)this.dashSize=t.dashSize;if(t.gapSize!==void 0)this.gapSize=t.gapSize;if(t.scale!==void 0)this.scale=t.scale;if(t.polygonOffset!==void 0)this.polygonOffset=t.polygonOffset;if(t.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=t.polygonOffsetFactor;if(t.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=t.polygonOffsetUnits;if(t.dithering!==void 0)this.dithering=t.dithering;if(t.alphaToCoverage!==void 0)this.alphaToCoverage=t.alphaToCoverage;if(t.premultipliedAlpha!==void 0)this.premultipliedAlpha=t.premultipliedAlpha;if(t.forceSinglePass!==void 0)this.forceSinglePass=t.forceSinglePass;if(t.allowOverride!==void 0)this.allowOverride=t.allowOverride;if(t.visible!==void 0)this.visible=t.visible;if(t.toneMapped!==void 0)this.toneMapped=t.toneMapped;if(t.userData!==void 0)this.userData=t.userData;if(t.vertexColors!==void 0)if(typeof t.vertexColors==="number")this.vertexColors=t.vertexColors>0;else this.vertexColors=t.vertexColors;if(t.size!==void 0)this.size=t.size;if(t.sizeAttenuation!==void 0)this.sizeAttenuation=t.sizeAttenuation;if(t.map!==void 0)this.map=e[t.map]||null;if(t.matcap!==void 0)this.matcap=e[t.matcap]||null;if(t.alphaMap!==void 0)this.alphaMap=e[t.alphaMap]||null;if(t.bumpMap!==void 0)this.bumpMap=e[t.bumpMap]||null;if(t.bumpScale!==void 0)this.bumpScale=t.bumpScale;if(t.normalMap!==void 0)this.normalMap=e[t.normalMap]||null;if(t.normalMapType!==void 0)this.normalMapType=t.normalMapType;if(t.normalScale!==void 0){let n=t.normalScale;if(Array.isArray(n)===!1)n=[n,n];this.normalScale=new Pt().fromArray(n)}if(t.displacementMap!==void 0)this.displacementMap=e[t.displacementMap]||null;if(t.displacementScale!==void 0)this.displacementScale=t.displacementScale;if(t.displacementBias!==void 0)this.displacementBias=t.displacementBias;if(t.roughnessMap!==void 0)this.roughnessMap=e[t.roughnessMap]||null;if(t.metalnessMap!==void 0)this.metalnessMap=e[t.metalnessMap]||null;if(t.emissiveMap!==void 0)this.emissiveMap=e[t.emissiveMap]||null;if(t.emissiveIntensity!==void 0)this.emissiveIntensity=t.emissiveIntensity;if(t.specularMap!==void 0)this.specularMap=e[t.specularMap]||null;if(t.specularIntensityMap!==void 0)this.specularIntensityMap=e[t.specularIntensityMap]||null;if(t.specularColorMap!==void 0)this.specularColorMap=e[t.specularColorMap]||null;if(t.envMap!==void 0)this.envMap=e[t.envMap]||null;if(t.envMapRotation!==void 0)this.envMapRotation.fromArray(t.envMapRotation);if(t.envMapIntensity!==void 0)this.envMapIntensity=t.envMapIntensity;if(t.reflectivity!==void 0)this.reflectivity=t.reflectivity;if(t.refractionRatio!==void 0)this.refractionRatio=t.refractionRatio;if(t.lightMap!==void 0)this.lightMap=e[t.lightMap]||null;if(t.lightMapIntensity!==void 0)this.lightMapIntensity=t.lightMapIntensity;if(t.aoMap!==void 0)this.aoMap=e[t.aoMap]||null;if(t.aoMapIntensity!==void 0)this.aoMapIntensity=t.aoMapIntensity;if(t.gradientMap!==void 0)this.gradientMap=e[t.gradientMap]||null;if(t.clearcoatMap!==void 0)this.clearcoatMap=e[t.clearcoatMap]||null;if(t.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null;if(t.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null;if(t.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new Pt().fromArray(t.clearcoatNormalScale);if(t.iridescenceMap!==void 0)this.iridescenceMap=e[t.iridescenceMap]||null;if(t.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null;if(t.transmissionMap!==void 0)this.transmissionMap=e[t.transmissionMap]||null;if(t.thicknessMap!==void 0)this.thicknessMap=e[t.thicknessMap]||null;if(t.anisotropyMap!==void 0)this.anisotropyMap=e[t.anisotropyMap]||null;if(t.sheenColorMap!==void 0)this.sheenColorMap=e[t.sheenColorMap]||null;if(t.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){if(t===!0)this.version++}}var gn=new D,Cr=new D,ms=new D,Cn=new D,Pr=new D,gs=new D,Ir=new D;class Ci{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);if(n<0)return e.copy(this.origin);return e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=gn.subVectors(t,this.origin).dot(this.direction);if(e<0)return this.origin.distanceToSquared(t);return gn.copy(this.origin).addScaledVector(this.direction,e),gn.distanceToSquared(t)}distanceSqToSegment(t,e,n,i){Cr.copy(t).add(e).multiplyScalar(0.5),ms.copy(e).sub(t).normalize(),Cn.copy(this.origin).sub(Cr);let s=t.distanceTo(e)*0.5,r=-this.direction.dot(ms),a=Cn.dot(this.direction),o=-Cn.dot(ms),l=Cn.lengthSq(),c=Math.abs(1-r*r),u,d,h,m;if(c>0)if(u=r*o-a,d=r*a-o,m=s*c,u>=0)if(d>=-m)if(d<=m){let v=1/c;u*=v,d*=v,h=u*(u+r*d+2*a)+d*(r*u+d+2*o)+l}else d=s,u=Math.max(0,-(r*d+a)),h=-u*u+d*(d+2*o)+l;else d=-s,u=Math.max(0,-(r*d+a)),h=-u*u+d*(d+2*o)+l;else if(d<=-m)u=Math.max(0,-(-r*s+a)),d=u>0?-s:Math.min(Math.max(-s,-o),s),h=-u*u+d*(d+2*o)+l;else if(d<=m)u=0,d=Math.min(Math.max(-s,-o),s),h=d*(d+2*o)+l;else u=Math.max(0,-(r*s+a)),d=u>0?s:Math.min(Math.max(-s,-o),s),h=-u*u+d*(d+2*o)+l;else d=r>0?-s:s,u=Math.max(0,-(r*d+a)),h=-u*u+d*(d+2*o)+l;if(n)n.copy(this.origin).addScaledVector(this.direction,u);if(i)i.copy(Cr).addScaledVector(ms,d);return h}intersectSphere(t,e){gn.subVectors(t.center,this.origin);let n=gn.dot(this.direction),i=gn.dot(gn)-n*n,s=t.radius*t.radius;if(i>s)return null;let r=Math.sqrt(s-i),a=n-r,o=n+r;if(o<0)return null;if(a<0)return this.at(o,e);return this.at(a,e)}intersectsSphere(t){if(t.radius<0)return!1;return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0){if(t.distanceToPoint(this.origin)===0)return 0;return null}let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);if(n===null)return null;return this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);if(e===0)return!0;if(t.normal.dot(this.direction)*e<0)return!0;return!1}intersectBox(t,e){let n,i,s,r,a,o,l=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;if(l>=0)n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l;else n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l;if(c>=0)s=(t.min.y-d.y)*c,r=(t.max.y-d.y)*c;else s=(t.max.y-d.y)*c,r=(t.min.y-d.y)*c;if(n>r||s>i)return null;if(s>n||isNaN(n))n=s;if(r<i||isNaN(i))i=r;if(u>=0)a=(t.min.z-d.z)*u,o=(t.max.z-d.z)*u;else a=(t.max.z-d.z)*u,o=(t.min.z-d.z)*u;if(n>o||a>i)return null;if(a>n||n!==n)n=a;if(o<i||i!==i)i=o;if(i<0)return null;return this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,gn)!==null}intersectTriangle(t,e,n,i,s){Pr.subVectors(e,t),gs.subVectors(n,t),Ir.crossVectors(Pr,gs);let r=this.direction.dot(Ir),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Cn.subVectors(this.origin,t);let o=a*this.direction.dot(gs.crossVectors(Cn,gs));if(o<0)return null;let l=a*this.direction.dot(Pr.cross(Cn));if(l<0)return null;if(o+l>r)return null;let c=-a*Cn.dot(Ir);if(c<0)return null;return this.at(c/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ks extends Fn{constructor(t){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}var $o=new re,Hn=new Ci,_s=new Ri,Ko=new D,xs=new D,vs=new D,ys=new D,Lr=new D,Ms=new D,jo=new D,Ss=new D;class Ne extends Me{constructor(t=new Re,e=new Ks){super();this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){if(super.copy(t,e),t.morphTargetInfluences!==void 0)this.morphTargetInfluences=t.morphTargetInfluences.slice();if(t.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary);return this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){Ms.set(0,0,0);for(let o=0,l=s.length;o<l;o++){let c=a[o],u=s[o];if(c===0)continue;if(Lr.fromBufferAttribute(u,t),r)Ms.addScaledVector(Lr,c);else Ms.addScaledVector(Lr.sub(e),c)}e.add(Ms)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0)return;if(n.boundingSphere===null)n.computeBoundingSphere();if(_s.copy(n.boundingSphere),_s.applyMatrix4(s),Hn.copy(t.ray).recast(t.near),_s.containsPoint(Hn.origin)===!1){if(Hn.intersectSphere(_s,Ko)===null)return;if(Hn.origin.distanceToSquared(Ko)>(t.far-t.near)**2)return}if($o.copy(s).invert(),Hn.copy(t.ray).applyMatrix4($o),n.boundingBox!==null){if(Hn.intersectsBox(n.boundingBox)===!1)return}this._computeIntersections(t,e,Hn)}_computeIntersections(t,e,n){let i,s=this.geometry,r=this.material,a=s.index,o=s.attributes.position,l=s.attributes.uv,c=s.attributes.uv1,u=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,v=d.length;m<v;m++){let b=d[m],p=r[b.materialIndex],f=Math.max(b.start,h.start),R=Math.min(a.count,Math.min(b.start+b.count,h.start+h.count));for(let w=f,M=R;w<M;w+=3){let E=a.getX(w),T=a.getX(w+1),C=a.getX(w+2);if(i=bs(this,p,t,n,l,c,u,E,T,C),i)i.faceIndex=Math.floor(w/3),i.face.materialIndex=b.materialIndex,e.push(i)}}else{let m=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let b=m,p=v;b<p;b+=3){let f=a.getX(b),R=a.getX(b+1),w=a.getX(b+2);if(i=bs(this,r,t,n,l,c,u,f,R,w),i)i.faceIndex=Math.floor(b/3),e.push(i)}}else if(o!==void 0)if(Array.isArray(r))for(let m=0,v=d.length;m<v;m++){let b=d[m],p=r[b.materialIndex],f=Math.max(b.start,h.start),R=Math.min(o.count,Math.min(b.start+b.count,h.start+h.count));for(let w=f,M=R;w<M;w+=3){let E=w,T=w+1,C=w+2;if(i=bs(this,p,t,n,l,c,u,E,T,C),i)i.faceIndex=Math.floor(w/3),i.face.materialIndex=b.materialIndex,e.push(i)}}else{let m=Math.max(0,h.start),v=Math.min(o.count,h.start+h.count);for(let b=m,p=v;b<p;b+=3){let f=b,R=b+1,w=b+2;if(i=bs(this,r,t,n,l,c,u,f,R,w),i)i.faceIndex=Math.floor(b/3),e.push(i)}}}}function zh(t,e,n,i,s,r,a,o){let l;if(e.side===1)l=i.intersectTriangle(a,r,s,!0,o);else l=i.intersectTriangle(s,r,a,e.side===0,o);if(l===null)return null;Ss.copy(o),Ss.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(Ss);if(c<n.near||c>n.far)return null;return{distance:c,point:Ss.clone(),object:t}}function bs(t,e,n,i,s,r,a,o,l,c){t.getVertexPosition(o,xs),t.getVertexPosition(l,vs),t.getVertexPosition(c,ys);let u=zh(t,e,n,i,xs,vs,ys,jo);if(u){let d=new D;if(We.getBarycoord(jo,xs,vs,ys,d),s)u.uv=We.getInterpolatedAttribute(s,o,l,c,d,new Pt);if(r)u.uv1=We.getInterpolatedAttribute(r,o,l,c,d,new Pt);if(a){if(u.normal=We.getInterpolatedAttribute(a,o,l,c,d,new D),u.normal.dot(i.direction)>0)u.normal.multiplyScalar(-1)}let h={a:o,b:l,c,normal:new D,materialIndex:0};We.getNormal(xs,vs,ys,h.normal),u.face=h,u.barycoord=d}return u}class Ha extends Ae{constructor(t=null,e=1,n=1,i,s,r,a,o,l=1003,c=1003,u,d){super(null,r,a,o,l,c,i,s,u,d);this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var Dr=new D,kh=new D,Gh=new Lt;class je{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Dr.subVectors(n,e).cross(kh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Dr),s=this.normal.dot(i);if(s===0){if(this.distanceToPoint(t.start)===0)return e.copy(t.start);return null}let r=-(t.start.dot(this.normal)+this.constant)/s;if(n===!0&&(r<0||r>1))return null;return e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Gh.getNormalMatrix(t),i=this.coplanarPoint(Dr).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}var Vn=new Ri,Hh=new Pt(0.5,0.5),Es=new D;class $i{constructor(t=new je,e=new je,n=new je,i=new je,s=new je,r=new je){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2000,n=!1){let i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],d=s[6],h=s[7],m=s[8],v=s[9],b=s[10],p=s[11],f=s[12],R=s[13],w=s[14],M=s[15];if(i[0].setComponents(l-r,h-c,p-m,M-f).normalize(),i[1].setComponents(l+r,h+c,p+m,M+f).normalize(),i[2].setComponents(l+a,h+u,p+v,M+R).normalize(),i[3].setComponents(l-a,h-u,p-v,M-R).normalize(),n)i[4].setComponents(o,d,b,w).normalize(),i[5].setComponents(l-o,h-d,p-b,M-w).normalize();else if(i[4].setComponents(l-o,h-d,p-b,M-w).normalize(),e===2000)i[5].setComponents(l+o,h+d,p+b,M+w).normalize();else if(e===2001)i[5].setComponents(o,d,b,w).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0){if(t.boundingSphere===null)t.computeBoundingSphere();Vn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld)}else{let e=t.geometry;if(e.boundingSphere===null)e.computeBoundingSphere();Vn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Vn)}intersectsSprite(t){Vn.center.set(0,0,0);let e=Hh.distanceTo(t.center);return Vn.radius=0.7071067811865476+e,Vn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vn)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Es.x=i.normal.x>0?t.max.x:t.min.x,Es.y=i.normal.y>0?t.max.y:t.min.y,Es.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Es)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ki extends Fn{constructor(t){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new It(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}var Ps=new D,Is=new D,Qo=new re,zi=new Ci,Ts=new Ri,Nr=new D,tl=new D;class Va extends Me{constructor(t=new Re,e=new Ki){super();this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Ps.fromBufferAttribute(e,i-1),Is.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Ps.distanceTo(Is);t.setAttribute("lineDistance",new fe(n,1))}else Tt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null)n.computeBoundingSphere();if(Ts.copy(n.boundingSphere),Ts.applyMatrix4(i),Ts.radius+=s,t.ray.intersectsSphere(Ts)===!1)return;Qo.copy(i).invert(),zi.copy(t.ray).applyMatrix4(Qo);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=this.isLineSegments?2:1,c=n.index,d=n.attributes.position;if(c!==null){let h=Math.max(0,r.start),m=Math.min(c.count,r.start+r.count);for(let v=h,b=m-1;v<b;v+=l){let p=c.getX(v),f=c.getX(v+1),R=As(this,t,zi,o,p,f,v);if(R)e.push(R)}if(this.isLineLoop){let v=c.getX(m-1),b=c.getX(h),p=As(this,t,zi,o,v,b,m-1);if(p)e.push(p)}}else{let h=Math.max(0,r.start),m=Math.min(d.count,r.start+r.count);for(let v=h,b=m-1;v<b;v+=l){let p=As(this,t,zi,o,v,v+1,v);if(p)e.push(p)}if(this.isLineLoop){let v=As(this,t,zi,o,m-1,h,m-1);if(v)e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function As(t,e,n,i,s,r,a){let o=t.geometry.attributes.position;if(Ps.fromBufferAttribute(o,s),Is.fromBufferAttribute(o,r),n.distanceSqToSegment(Ps,Is,Nr,tl)>i)return;Nr.applyMatrix4(t.matrixWorld);let c=e.ray.origin.distanceTo(Nr);if(c<e.near||c>e.far)return;return{distance:c,point:tl.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}var el=new D,nl=new D;class js extends Va{constructor(t,e){super(t,e);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)el.fromBufferAttribute(e,i),nl.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+el.distanceTo(nl);t.setAttribute("lineDistance",new fe(n,1))}else Tt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Qs extends Ae{constructor(t=[],e=301,n,i,s,r,a,o,l,c){super(t,e,n,i,s,r,a,o,l,c);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class On extends Ae{constructor(t,e,n=1014,i,s,r,a=1003,o=1003,l,c=1026,u=1){if(c!==1026&&c!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,i,s,r,a,o,c,n,l);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Zi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);if(this.compareFunction!==null)e.compareFunction=this.compareFunction;return e}}class Wa extends On{constructor(t,e=1014,n=301,i,s,r=1003,a=1003,o,l=1026){let c={width:t,height:t,depth:1},u=[c,c,c,c,c,c];super(t,t,e,n,i,s,r,a,o,l);this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class tr extends Ae{constructor(t=null){super();this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Pi extends Re{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super();this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let o=[],l=[],c=[],u=[],d=0,h=0;m("z","y","x",-1,-1,n,e,t,r,s,0),m("z","y","x",1,-1,n,e,-t,r,s,1),m("x","z","y",1,1,t,n,e,i,r,2),m("x","z","y",1,-1,t,n,-e,i,r,3),m("x","y","z",1,-1,t,e,n,i,s,4),m("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(o),this.setAttribute("position",new fe(l,3)),this.setAttribute("normal",new fe(c,3)),this.setAttribute("uv",new fe(u,2));function m(v,b,p,f,R,w,M,E,T,C,_){let S=w/T,z=M/C,A=w/2,H=M/2,J=E/2,B=T+1,V=C+1,X=0,U=0,Q=new D;for(let tt=0;tt<V;tt++){let ot=tt*z-H;for(let yt=0;yt<B;yt++){let vt=yt*S-A;Q[v]=vt*f,Q[b]=ot*R,Q[p]=J,l.push(Q.x,Q.y,Q.z),Q[v]=0,Q[b]=0,Q[p]=E>0?1:-1,c.push(Q.x,Q.y,Q.z),u.push(yt/T),u.push(1-tt/C),X+=1}}for(let tt=0;tt<C;tt++)for(let ot=0;ot<T;ot++){let yt=d+ot+B*tt,vt=d+ot+B*(tt+1),oe=d+(ot+1)+B*(tt+1),$t=d+(ot+1)+B*tt;o.push(yt,vt,$t),o.push(vt,oe,$t),U+=6}a.addGroup(h,U,_),h+=U,d+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class ji extends Re{constructor(t=1,e=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,r=e/2,a=Math.floor(n),o=Math.floor(i),l=a+1,c=o+1,u=t/a,d=e/o,h=[],m=[],v=[],b=[];for(let p=0;p<c;p++){let f=p*d-r;for(let R=0;R<l;R++){let w=R*u-s;m.push(w,-f,0),v.push(0,0,1),b.push(R/a),b.push(1-p/o)}}for(let p=0;p<o;p++)for(let f=0;f<a;f++){let R=f+l*p,w=f+l*(p+1),M=f+1+l*(p+1),E=f+1+l*p;h.push(R,w,E),h.push(w,M,E)}this.setIndex(h),this.setAttribute("position",new fe(m,3)),this.setAttribute("normal",new fe(v,3)),this.setAttribute("uv",new fe(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ji(t.width,t.height,t.widthSegments,t.heightSegments)}}function jn(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let s=t[n][i];if(il(s))if(s.isRenderTargetTexture)Tt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null;else e[n][i]=s.clone();else if(Array.isArray(s))if(il(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[n][i]=r}else e[n][i]=s.slice();else e[n][i]=s}}return e}function Ce(t){let e={};for(let n=0;n<t.length;n++){let i=jn(t[n]);for(let s in i)e[s]=i[s]}return e}function il(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Vh(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Xa(t){let e=t.getRenderTarget();if(e===null)return t.outputColorSpace;if(e.isXRRenderTarget===!0)return e.texture.colorSpace;return Gt.workingColorSpace}var hc={clone:jn,merge:Ce},Wh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ye extends Fn{constructor(t){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wh,this.fragmentShader=Xh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0)this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=jn(t.uniforms),this.uniformsGroups=Vh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;if(r&&r.isTexture)e.uniforms[i]={type:"t",value:r.toJSON(t).uuid};else if(r&&r.isColor)e.uniforms[i]={type:"c",value:r.getHex()};else if(r&&r.isVector2)e.uniforms[i]={type:"v2",value:r.toArray()};else if(r&&r.isVector3)e.uniforms[i]={type:"v3",value:r.toArray()};else if(r&&r.isVector4)e.uniforms[i]={type:"v4",value:r.toArray()};else if(r&&r.isMatrix3)e.uniforms[i]={type:"m3",value:r.toArray()};else if(r&&r.isMatrix4)e.uniforms[i]={type:"m4",value:r.toArray()};else e.uniforms[i]={value:r}}if(Object.keys(this.defines).length>0)e.defines=this.defines;e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)if(this.extensions[i]===!0)n[i]=!0;if(Object.keys(n).length>0)e.extensions=n;return e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new It().setHex(i.value);break;case"v2":this.uniforms[n].value=new Pt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new D().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ae().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Lt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new re().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0)this.defines=t.defines;if(t.vertexShader!==void 0)this.vertexShader=t.vertexShader;if(t.fragmentShader!==void 0)this.fragmentShader=t.fragmentShader;if(t.glslVersion!==void 0)this.glslVersion=t.glslVersion;if(t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];if(t.lights!==void 0)this.lights=t.lights;if(t.clipping!==void 0)this.clipping=t.clipping;return this}}class qa extends Ye{constructor(t){super(t);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Qi extends Fn{constructor(t){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new It(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ya extends Fn{constructor(t){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Za extends Fn{constructor(t){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function ws(t,e){if(!t||t.constructor===e)return t;if(typeof e.BYTES_PER_ELEMENT==="number")return new e(t);return Array.prototype.slice.call(t)}class Qn{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let r;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}r=e.length;break e}if(!(t>=s)){let a=e[1];if(t<a)n=2,s=a;for(let o=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(i=s,s=e[--n-1],t>=s)break t}r=n,n=0;break e}break n}while(n<r){let a=n+r>>>1;if(t<e[a])r=a;else n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let r=0;r!==i;++r)e[r]=n[s+r];return e}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Ja extends Qn{constructor(t,e,n,i){super(t,e,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,r=t+1,a=i[s],o=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case 2401:s=t,a=2*e-n;break;case 2402:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(o===void 0)switch(this.getSettings_().endingEnd){case 2401:r=t,o=2*n-e;break;case 2402:r=1,o=n+i[1]-i[0];break;default:r=t-1,o=e}let l=(n-e)*0.5,c=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(o-n),this._offsetPrev=s*c,this._offsetNext=r*c}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,h=this._weightNext,m=(n-e)/(i-e),v=m*m,b=v*m,p=-d*b+2*d*v-d*m,f=(1+d)*b+(-1.5-2*d)*v+(-0.5+d)*m+1,R=(-1-h)*b+(1.5+h)*v+0.5*m,w=h*b-h*v;for(let M=0;M!==a;++M)s[M]=p*r[c+M]+f*r[l+M]+R*r[o+M]+w*r[u+M];return s}}class $a extends Qn{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=(n-e)/(i-e),u=1-c;for(let d=0;d!==a;++d)s[d]=r[l+d]*u+r[o+d]*c;return s}}class Ka extends Qn{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class ja extends Qn{interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this.inTangents,u=this.outTangents;if(!c||!u){let m=(n-e)/(i-e),v=1-m;for(let b=0;b!==a;++b)s[b]=r[l+b]*v+r[o+b]*m;return s}let d=a*2,h=t-1;for(let m=0;m!==a;++m){let v=r[l+m],b=r[o+m],p=h*d+m*2,f=u[p],R=u[p+1],w=t*d+m*2,M=c[w],E=c[w+1],T=(n-e)/(i-e),C,_,S,z,A;for(let H=0;H<8;H++){C=T*T,_=C*T,S=1-T,z=S*S,A=z*S;let B=A*e+3*z*T*f+3*S*C*M+_*i-n;if(Math.abs(B)<0.0000000001)break;let V=3*z*(f-e)+6*S*T*(M-f)+3*C*(i-M);if(Math.abs(V)<0.0000000001)break;T=T-B/V,T=Math.max(0,Math.min(1,T))}s[m]=A*v+3*z*T*R+3*S*C*E+_*b}return s}}class Ze{constructor(t,e,n,i){if(t===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ws(e,this.TimeBufferType),this.values=ws(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ws(t.times,Array),values:ws(t.values,Array)};let i=t.getInterpolation();if(i!==t.DefaultInterpolation)n.interpolation=i}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ka(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new $a(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ja(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ja(this.times,this.values,this.getValueSize(),t);if(this.settings)e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents;return e}setInterpolation(t){let e;switch(t){case 2300:e=this.InterpolantFactoryMethodDiscrete;break;case 2301:e=this.InterpolantFactoryMethodLinear;break;case 2302:e=this.InterpolantFactoryMethodSmooth;break;case 2303:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(n);return Tt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,r=i-1;while(s!==i&&n[s]<t)++s;while(r!==-1&&n[r]>e)--r;if(++r,s!==0||r!==i){if(s>=r)r=Math.max(r,1),s=r-1;let a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let t=!0,e=this.getValueSize();if(e-Math.floor(e)!==0)Ct("KeyframeTrack: Invalid value size in track.",this),t=!1;let n=this.times,i=this.values,s=n.length;if(s===0)Ct("KeyframeTrack: Track is empty.",this),t=!1;let r=null;for(let a=0;a!==s;a++){let o=n[a];if(typeof o==="number"&&isNaN(o)){Ct("KeyframeTrack: Time is not a valid number.",this,a,o),t=!1;break}if(r!==null&&r>o){Ct("KeyframeTrack: Out of order keys.",this,a,o,r),t=!1;break}r=o}if(i!==void 0){if(lh(i))for(let a=0,o=i.length;a!==o;++a){let l=i[a];if(isNaN(l)){Ct("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===2302,s=t.length-1,r=1;for(let a=1;a<s;++a){let o=!1,l=t[a],c=t[a+1];if(l!==c&&(a!==1||l!==t[0]))if(!i){let u=a*n,d=u-n,h=u+n;for(let m=0;m!==n;++m){let v=e[u+m];if(v!==e[d+m]||v!==e[h+m]){o=!0;break}}}else o=!0;if(o){if(a!==r){t[r]=t[a];let u=a*n,d=r*n;for(let h=0;h!==n;++h)e[d+h]=e[u+h]}++r}}if(s>0){t[r]=t[s];for(let a=s*n,o=r*n,l=0;l!==n;++l)e[o+l]=e[a+l];++r}if(r!==t.length)this.times=t.slice(0,r),this.values=e.slice(0,r*n);else this.times=t,this.values=e;return this}clone(){let t=this.times.slice(),e=this.values.slice(),i=new this.constructor(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Ze.prototype.ValueTypeName="";Ze.prototype.TimeBufferType=Float32Array;Ze.prototype.ValueBufferType=Float32Array;Ze.prototype.DefaultInterpolation=2301;class ti extends Ze{constructor(t,e,n){super(t,e,n)}}ti.prototype.ValueTypeName="bool";ti.prototype.ValueBufferType=Array;ti.prototype.DefaultInterpolation=2300;ti.prototype.InterpolantFactoryMethodLinear=void 0;ti.prototype.InterpolantFactoryMethodSmooth=void 0;class Qa extends Ze{constructor(t,e,n,i){super(t,e,n,i)}}Qa.prototype.ValueTypeName="color";class to extends Ze{constructor(t,e,n,i){super(t,e,n,i)}}to.prototype.ValueTypeName="number";class eo extends Qn{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=(n-e)/(i-e),l=t*a;for(let c=l+a;l!==c;l+=4)Xe.slerpFlat(s,0,r,l-a,r,l,o);return s}}class er extends Ze{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new eo(this.times,this.values,this.getValueSize(),t)}}er.prototype.ValueTypeName="quaternion";er.prototype.InterpolantFactoryMethodSmooth=void 0;class ei extends Ze{constructor(t,e,n){super(t,e,n)}}ei.prototype.ValueTypeName="string";ei.prototype.ValueBufferType=Array;ei.prototype.DefaultInterpolation=2300;ei.prototype.InterpolantFactoryMethodLinear=void 0;ei.prototype.InterpolantFactoryMethodSmooth=void 0;class no extends Ze{constructor(t,e,n,i){super(t,e,n,i)}}no.prototype.ValueTypeName="vector";var Fr={enabled:!1,files:{},add:function(t,e){if(this.enabled===!1)return;if(sl(t))return;this.files[t]=e},get:function(t){if(this.enabled===!1)return;if(sl(t))return;return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function sl(t){try{let e=t.slice(t.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch(e){return!1}}class io{constructor(t,e,n){let i=this,s=!1,r=0,a=0,o=void 0,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(c){if(a++,s===!1){if(i.onStart!==void 0)i.onStart(c,r,a)}s=!0},this.itemEnd=function(c){if(r++,i.onProgress!==void 0)i.onProgress(c,r,a);if(r===a){if(s=!1,i.onLoad!==void 0)i.onLoad()}},this.itemError=function(c){if(i.onError!==void 0)i.onError(c)},this.resolveURL=function(c){if(c=c.normalize("NFC"),o)return o(c);return c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,u){return l.push(c,u),this},this.removeHandler=function(c){let u=l.indexOf(c);if(u!==-1)l.splice(u,2);return this},this.getHandler=function(c){for(let u=0,d=l.length;u<d;u+=2){let h=l[u],m=l[u+1];if(h.global)h.lastIndex=0;if(h.test(c))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var uc=new io;class Ii{constructor(t){if(this.manager=t!==void 0?t:uc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Ii.DEFAULT_MATERIAL_NAME="__DEFAULT";var _n={};class dc extends Error{constructor(t,e){super(t);this.response=e}}class nr extends Ii{constructor(t){super(t);this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){if(t===void 0)t="";if(this.path!==void 0)t=this.path+t;t=this.manager.resolveURL(t);let s=Fr.get(`file:${t}`);if(s!==void 0){this.manager.itemStart(t),setTimeout(()=>{if(e)e(s);this.manager.itemEnd(t)},0);return}if(_n[t]!==void 0){_n[t].push({onLoad:e,onProgress:n,onError:i});return}_n[t]=[],_n[t].push({onLoad:e,onProgress:n,onError:i});let r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,o=this.responseType;fetch(r).then((l)=>{if(l.status===200||l.status===0){if(l.status===0)Tt("FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let c=_n[t],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),h=d?parseInt(d):0,m=h!==0,v=0,b=new ReadableStream({start(p){f();function f(){u.read().then(({done:R,value:w})=>{if(R)p.close();else{v+=w.byteLength;let M=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:h});for(let E=0,T=c.length;E<T;E++){let C=c[E];if(C.onProgress)C.onProgress(M)}p.enqueue(w),f()}},(R)=>{p.error(R)})}}});return new Response(b)}else throw new dc(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then((l)=>{switch(o){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then((c)=>new DOMParser().parseFromString(c,a));case"json":return l.json();default:if(a==="")return l.text();else{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,h=new TextDecoder(d);return l.arrayBuffer().then((m)=>h.decode(m))}}}).then((l)=>{Fr.add(`file:${t}`,l);let c=_n[t];delete _n[t];for(let u=0,d=c.length;u<d;u++){let h=c[u];if(h.onLoad)h.onLoad(l)}}).catch((l)=>{let c=_n[t];if(c===void 0)throw this.manager.itemError(t),l;delete _n[t];for(let u=0,d=c.length;u<d;u++){let h=c[u];if(h.onError)h.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class so extends Me{constructor(t,e=1){super();this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}var Ur=new re,rl=new D,al=new D;class fc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $i,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;if(rl.setFromMatrixPosition(t.matrixWorld),e.position.copy(rl),al.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(al),e.updateMatrixWorld(),Ur.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ur,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===2001||e.reversedDepth)n.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,1,0,0,0,0,1);else n.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);n.multiply(Ur)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};if(this.intensity!==1)t.intensity=this.intensity;if(this.bias!==0)t.bias=this.bias;if(this.normalBias!==0)t.normalBias=this.normalBias;if(this.radius!==1)t.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)t.mapSize=this.mapSize.toArray();return t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}var Rs=new D,Cs=new Xe,rn=new D;class ir extends Me{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.matrixWorld.decompose(Rs,Cs,rn),rn.x===1&&rn.y===1&&rn.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Rs,Cs,rn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){if(super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Rs,Cs,rn),rn.x===1&&rn.y===1&&rn.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Rs,Cs,rn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var Pn=new D,ol=new Pt,ll=new Pt;class Ie extends ir{constructor(t=50,e=1,n=0.1,i=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=0.5*this.getFilmHeight()/t;this.fov=Mi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ki*0.5*this.fov);return 0.5*this.getFilmHeight()/t}getEffectiveFOV(){return Mi*2*Math.atan(Math.tan(ki*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Pn.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),e.set(Pn.x,Pn.y).multiplyScalar(-t/Pn.z),Pn.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pn.x,Pn.y).multiplyScalar(-t/Pn.z)}getViewSize(t,e){return this.getViewBounds(t,ol,ll),e.subVectors(ll,ol)}setViewOffset(t,e,n,i,s,r){if(this.aspect=t/e,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ki*0.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-0.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:o,fullHeight:l}=r;s+=r.offsetX*i/o,e-=r.offsetY*n/l,i*=r.width/o,n*=r.height/l}let a=this.filmOffset;if(a!==0)s+=t*a/this.getFilmWidth();this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null)e.object.view=Object.assign({},this.view);return e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class ts extends ir{constructor(t=-1,e=1,n=1,i=-1,s=0.1,r=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,r=n+t,a=i+e,o=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null)e.object.view=Object.assign({},this.view);return e}}class pc extends fc{constructor(){super(new ts(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class Li extends so{constructor(t,e){super(t,e);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new pc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}var gi=-90,_i=1;class ro extends Me{constructor(t,e,n){super();this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ie(gi,_i,t,e);i.layers=this.layers,this.add(i);let s=new Ie(gi,_i,t,e);s.layers=this.layers,this.add(s);let r=new Ie(gi,_i,t,e);r.layers=this.layers,this.add(r);let a=new Ie(gi,_i,t,e);a.layers=this.layers,this.add(a);let o=new Ie(gi,_i,t,e);o.layers=this.layers,this.add(o);let l=new Ie(gi,_i,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,r,a,o]=e;for(let l of e)this.remove(l);if(t===2000)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;if(this.coordinateSystem!==t.coordinateSystem)this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem();let[s,r,a,o,l,c]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let b=!1;if(t.isWebGLRenderer===!0)b=t.state.buffers.depth.getReversed();else b=t.reversedDepthBuffer;if(t.setRenderTarget(n,0,i),b&&t.autoClear===!1)t.clearDepth();if(t.render(e,s),t.setRenderTarget(n,1,i),b&&t.autoClear===!1)t.clearDepth();if(t.render(e,r),t.setRenderTarget(n,2,i),b&&t.autoClear===!1)t.clearDepth();if(t.render(e,a),t.setRenderTarget(n,3,i),b&&t.autoClear===!1)t.clearDepth();if(t.render(e,o),t.setRenderTarget(n,4,i),b&&t.autoClear===!1)t.clearDepth();if(t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),b&&t.autoClear===!1)t.clearDepth();t.render(e,c),t.setRenderTarget(u,d,h),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class ao extends Ie{constructor(t=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}var oo="\\[\\]\\.:\\/",qh=new RegExp("["+oo+"]","g"),lo="[^"+oo+"]",Yh="[^"+oo.replace("\\.","")+"]",Zh=/((?:WC+[\/:])*)/.source.replace("WC",lo),Jh=/(WCOD+)?/.source.replace("WCOD",Yh),$h=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lo),Kh=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lo),jh=new RegExp("^"+Zh+Jh+$h+Kh+"$"),Qh=["material","materials","bones","map"];class mc{constructor(t,e,n){let i=n||Yt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];if(i!==void 0)i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Yt{constructor(t,e,n){this.path=e,this.parsedPath=n||Yt.parseTrackName(e),this.node=Yt.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){if(!(t&&t.isAnimationObjectGroup))return new Yt(t,e,n);else return new Yt.Composite(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(qh,"")}static parseTrackName(t){let e=jh.exec(t);if(e===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);if(Qh.indexOf(s)!==-1)n.nodeName=n.nodeName.substring(0,i),n.objectName=s}if(n.propertyName===null||n.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let r=0;r<s.length;r++){let a=s[r];if(a.name===e||a.uuid===e)return a;let o=n(a.children);if(o)return o}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(!t)t=Yt.findNode(this.rootNode,e.nodeName),this.node=t;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Tt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Ct("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ct("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ct("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===l){l=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ct("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ct("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ct("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Ct("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let r=t[i];if(r===void 0){let l=e.nodeName;Ct("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;if(this.targetObject=t,t.isMaterial===!0)a=this.Versioning.NeedsUpdate;else if(t.isObject3D===!0)a=this.Versioning.MatrixWorldNeedsUpdate;let o=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Ct("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ct("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(t.morphTargetDictionary[s]!==void 0)s=t.morphTargetDictionary[s]}o=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else if(r.fromArray!==void 0&&r.toArray!==void 0)o=this.BindingType.HasFromToArray,this.resolvedProperty=r;else if(Array.isArray(r))o=this.BindingType.EntireArray,this.resolvedProperty=r;else this.propertyName=i;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Yt.Composite=mc;Yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Yt.prototype.GetterByBindingType=[Yt.prototype._getValue_direct,Yt.prototype._getValue_array,Yt.prototype._getValue_arrayElement,Yt.prototype._getValue_toArray];Yt.prototype.SetterByBindingTypeAndVersioning=[[Yt.prototype._setValue_direct,Yt.prototype._setValue_direct_setNeedsUpdate,Yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_array,Yt.prototype._setValue_array_setNeedsUpdate,Yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_arrayElement,Yt.prototype._setValue_arrayElement_setNeedsUpdate,Yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_fromArray,Yt.prototype._setValue_fromArray_setNeedsUpdate,Yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ig=new Float32Array(1);class es{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Ot(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){if(this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(t,n),this.phi=Math.acos(Ot(e/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class co{static{co.prototype.isMatrix2=!0}constructor(t,e,n,i){if(this.elements=[1,0,0,1],t!==void 0)this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}}class ni extends js{constructor(t=10,e=10,n=4473924,i=8947848){n=new It(n),i=new It(i);let s=e/2,r=t/e,a=t/2,o=[],l=[];for(let d=0,h=0,m=-a;d<=e;d++,m+=r){o.push(-a,0,m,a,0,m),o.push(m,0,-a,m,0,a);let v=d===s?n:i;v.toArray(l,h),h+=3,v.toArray(l,h),h+=3,v.toArray(l,h),h+=3,v.toArray(l,h),h+=3}let c=new Re;c.setAttribute("position",new fe(o,3)),c.setAttribute("color",new fe(l,3));let u=new Ki({vertexColors:!0,toneMapped:!1});super(c,u);this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class sr extends js{constructor(t=1){let e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,0.6,0,0,1,0,0.6,1,0,0,0,1,0,0.6,1],i=new Re;i.setAttribute("position",new fe(e,3)),i.setAttribute("color",new fe(n,3));let s=new Ki({vertexColors:!0,toneMapped:!1});super(i,s);this.type="AxesHelper"}setColors(t,e,n){let i=new It,s=this.geometry.attributes.color.array;return i.set(t),i.toArray(s,0),i.toArray(s,3),i.set(e),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class rr extends ln{constructor(t,e=null){super();this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Tt("Controls: connect() now requires an element.");return}if(this.domElement!==null)this.disconnect();this.domElement=t}disconnect(){}dispose(){}update(){}}function ho(t,e,n,i){let s=tu(i);switch(n){case 1021:return t*e;case 1028:return t*e/s.components*s.byteLength;case 1029:return t*e/s.components*s.byteLength;case 1030:return t*e*2/s.components*s.byteLength;case 1031:return t*e*2/s.components*s.byteLength;case 1022:return t*e*3/s.components*s.byteLength;case 1023:return t*e*4/s.components*s.byteLength;case 1033:return t*e*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(t,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(t,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(t/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(t/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function tu(t){switch(t){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));if(typeof window<"u")if(window.__THREE__)Tt("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="185";function Bc(){let t=null,e=!1,n=null,i=null;function s(r,a){n(r,a),i=t.requestAnimationFrame(s)}return{start:function(){if(e===!0)return;if(n===null)return;if(t===null)return;i=t.requestAnimationFrame(s),e=!0},stop:function(){if(t!==null)t.cancelAnimationFrame(i);e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function eu(t){let e=new WeakMap;function n(o,l){let{array:c,usage:u}=o,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=t.HALF_FLOAT;else if(c instanceof Uint16Array)if(o.isFloat16BufferAttribute)m=t.HALF_FLOAT;else m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let{array:u,updateRanges:d}=l;if(t.bindBuffer(c,o),d.length===0)t.bufferSubData(c,0,u);else{d.sort((m,v)=>m.start-v.start);let h=0;for(let m=1;m<d.length;m++){let v=d[h],b=d[m];if(b.start<=v.start+v.count+1)v.count=Math.max(v.count,b.start+b.count-v.start);else++h,d[h]=b}d.length=h+1;for(let m=0,v=d.length;m<v;m++){let b=d[m];t.bufferSubData(c,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){if(o.isInterleavedBufferAttribute)o=o.data;return e.get(o)}function r(o){if(o.isInterleavedBufferAttribute)o=o.data;let l=e.get(o);if(l)t.deleteBuffer(l.buffer),e.delete(o)}function a(o,l){if(o.isInterleavedBufferAttribute)o=o.data;if(o.isGLBufferAttribute){let u=e.get(o);if(!u||u.version<o.version)e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var nu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,su=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ru=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,au=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ou=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,uu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,du=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,mu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_u=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Su=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,bu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Eu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Tu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Au=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Ru=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Iu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Du=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Uu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Fu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ou=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ku=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Wu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Zu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ju=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$u=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ku=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ju=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,td=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ed=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,id=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sd=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,rd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ad=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,od=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ld=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ud=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,md=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_d=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,vd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Md=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ed=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Td=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ad=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Id=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Ld=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ud=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Od=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,zd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Wd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$d=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Kd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ef=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,nf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,af=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,uf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,df=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_f=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Sf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ef=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Tf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Af=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Rf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,If=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Lf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Df=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Uf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ff=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ut={alphahash_fragment:nu,alphahash_pars_fragment:iu,alphamap_fragment:su,alphamap_pars_fragment:ru,alphatest_fragment:au,alphatest_pars_fragment:ou,aomap_fragment:lu,aomap_pars_fragment:cu,batching_pars_vertex:hu,batching_vertex:uu,begin_vertex:du,beginnormal_vertex:fu,bsdfs:pu,iridescence_fragment:mu,bumpmap_pars_fragment:gu,clipping_planes_fragment:_u,clipping_planes_pars_fragment:xu,clipping_planes_pars_vertex:vu,clipping_planes_vertex:yu,color_fragment:Mu,color_pars_fragment:Su,color_pars_vertex:bu,color_vertex:Eu,common:Tu,cube_uv_reflection_fragment:Au,defaultnormal_vertex:wu,displacementmap_pars_vertex:Ru,displacementmap_vertex:Cu,emissivemap_fragment:Pu,emissivemap_pars_fragment:Iu,colorspace_fragment:Lu,colorspace_pars_fragment:Du,envmap_fragment:Nu,envmap_common_pars_fragment:Uu,envmap_pars_fragment:Fu,envmap_pars_vertex:Ou,envmap_physical_pars_fragment:Zu,envmap_vertex:Bu,fog_vertex:zu,fog_pars_vertex:ku,fog_fragment:Gu,fog_pars_fragment:Hu,gradientmap_pars_fragment:Vu,lightmap_pars_fragment:Wu,lights_lambert_fragment:Xu,lights_lambert_pars_fragment:qu,lights_pars_begin:Yu,lights_toon_fragment:Ju,lights_toon_pars_fragment:$u,lights_phong_fragment:Ku,lights_phong_pars_fragment:ju,lights_physical_fragment:Qu,lights_physical_pars_fragment:td,lights_fragment_begin:ed,lights_fragment_maps:nd,lights_fragment_end:id,lightprobes_pars_fragment:sd,logdepthbuf_fragment:rd,logdepthbuf_pars_fragment:ad,logdepthbuf_pars_vertex:od,logdepthbuf_vertex:ld,map_fragment:cd,map_pars_fragment:hd,map_particle_fragment:ud,map_particle_pars_fragment:dd,metalnessmap_fragment:fd,metalnessmap_pars_fragment:pd,morphinstance_vertex:md,morphcolor_vertex:gd,morphnormal_vertex:_d,morphtarget_pars_vertex:xd,morphtarget_vertex:vd,normal_fragment_begin:yd,normal_fragment_maps:Md,normal_pars_fragment:Sd,normal_pars_vertex:bd,normal_vertex:Ed,normalmap_pars_fragment:Td,clearcoat_normal_fragment_begin:Ad,clearcoat_normal_fragment_maps:wd,clearcoat_pars_fragment:Rd,iridescence_pars_fragment:Cd,opaque_fragment:Pd,packing:Id,premultiplied_alpha_fragment:Ld,project_vertex:Dd,dithering_fragment:Nd,dithering_pars_fragment:Ud,roughnessmap_fragment:Fd,roughnessmap_pars_fragment:Od,shadowmap_pars_fragment:Bd,shadowmap_pars_vertex:zd,shadowmap_vertex:kd,shadowmask_pars_fragment:Gd,skinbase_vertex:Hd,skinning_pars_vertex:Vd,skinning_vertex:Wd,skinnormal_vertex:Xd,specularmap_fragment:qd,specularmap_pars_fragment:Yd,tonemapping_fragment:Zd,tonemapping_pars_fragment:Jd,transmission_fragment:$d,transmission_pars_fragment:Kd,uv_pars_fragment:jd,uv_pars_vertex:Qd,uv_vertex:tf,worldpos_vertex:ef,background_vert:nf,background_frag:sf,backgroundCube_vert:rf,backgroundCube_frag:af,cube_vert:of,cube_frag:lf,depth_vert:cf,depth_frag:hf,distance_vert:uf,distance_frag:df,equirect_vert:ff,equirect_frag:pf,linedashed_vert:mf,linedashed_frag:gf,meshbasic_vert:_f,meshbasic_frag:xf,meshlambert_vert:vf,meshlambert_frag:yf,meshmatcap_vert:Mf,meshmatcap_frag:Sf,meshnormal_vert:bf,meshnormal_frag:Ef,meshphong_vert:Tf,meshphong_frag:Af,meshphysical_vert:wf,meshphysical_frag:Rf,meshtoon_vert:Cf,meshtoon_frag:Pf,points_vert:If,points_frag:Lf,shadow_vert:Df,shadow_frag:Nf,sprite_vert:Uf,sprite_frag:Ff},ht={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},envMapRotation:{value:new Lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new Pt(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},hn={basic:{uniforms:Ce([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:Ce([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new It(0)},envMapIntensity:{value:1}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:Ce([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:Ce([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:Ce([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new It(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:Ce([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:Ce([ht.points,ht.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:Ce([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:Ce([ht.common,ht.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:Ce([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:Ce([ht.sprite,ht.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lt}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distance:{uniforms:Ce([ht.common,ht.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:Ut.distance_vert,fragmentShader:Ut.distance_frag},shadow:{uniforms:Ce([ht.lights,ht.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};hn.physical={uniforms:Ce([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};var ar={r:0,b:0,g:0},Of=new re,zc=new Lt;zc.set(-1,0,0,0,1,0,0,0,1);function Bf(t,e,n,i,s,r){let a=new It(0),o=s===!0?0:1,l,c,u=null,d=0,h=null;function m(R){let w=R.isScene===!0?R.background:null;if(w&&w.isTexture){let M=R.backgroundBlurriness>0;w=e.get(w,M)}return w}function v(R){let w=!1,M=m(R);if(M===null)p(a,o);else if(M&&M.isColor)p(M,1),w=!0;let E=t.xr.getEnvironmentBlendMode();if(E==="additive")n.buffers.color.setClear(0,0,0,1,r);else if(E==="alpha-blend")n.buffers.color.setClear(0,0,0,0,r);if(t.autoClear||w)n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil)}function b(R,w){let M=m(w);if(M&&(M.isCubeTexture||M.mapping===Xi)){if(c===void 0)c=new Ne(new Pi(1,1,1),new Ye({name:"BackgroundCubeMaterial",uniforms:jn(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c);if(c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Of.makeRotationFromEuler(w.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1)c.material.uniforms.backgroundRotation.value.premultiply(zc);if(c.material.toneMapped=Gt.getTransfer(M.colorSpace)!==Qt,u!==M||d!==M.version||h!==t.toneMapping)c.material.needsUpdate=!0,u=M,d=M.version,h=t.toneMapping;c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null)}else if(M&&M.isTexture){if(l===void 0)l=new Ne(new ji(2,2),new Ye({name:"BackgroundMaterial",uniforms:jn(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l);if(l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Gt.getTransfer(M.colorSpace)!==Qt,M.matrixAutoUpdate===!0)M.updateMatrix();if(l.material.uniforms.uvTransform.value.copy(M.matrix),u!==M||d!==M.version||h!==t.toneMapping)l.material.needsUpdate=!0,u=M,d=M.version,h=t.toneMapping;l.layers.enableAll(),R.unshift(l,l.geometry,l.material,0,0,null)}}function p(R,w){R.getRGB(ar,Xa(t)),n.buffers.color.setClear(ar.r,ar.g,ar.b,w,r)}function f(){if(c!==void 0)c.geometry.dispose(),c.material.dispose(),c=void 0;if(l!==void 0)l.geometry.dispose(),l.material.dispose(),l=void 0}return{getClearColor:function(){return a},setClearColor:function(R,w=1){a.set(R),o=w,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(R){o=R,p(a,o)},render:v,addToRenderList:b,dispose:f}}function zf(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,a=!1;function o(A,H,J,B,V){let X=!1,U=d(A,B,J,H);if(r!==U)r=U,c(r.object);if(X=m(A,B,J,V),X)v(A,B,J,V);if(V!==null)e.update(V,t.ELEMENT_ARRAY_BUFFER);if(X||a){if(a=!1,M(A,H,J,B),V!==null)t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer)}}function l(){return t.createVertexArray()}function c(A){return t.bindVertexArray(A)}function u(A){return t.deleteVertexArray(A)}function d(A,H,J,B){let V=B.wireframe===!0,X=i[H.id];if(X===void 0)X={},i[H.id]=X;let U=A.isInstancedMesh===!0?A.id:0,Q=X[U];if(Q===void 0)Q={},X[U]=Q;let tt=Q[J.id];if(tt===void 0)tt={},Q[J.id]=tt;let ot=tt[V];if(ot===void 0)ot=h(l()),tt[V]=ot;return ot}function h(A){let H=[],J=[],B=[];for(let V=0;V<n;V++)H[V]=0,J[V]=0,B[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:J,attributeDivisors:B,object:A,attributes:{},index:null}}function m(A,H,J,B){let V=r.attributes,X=H.attributes,U=0,Q=J.getAttributes();for(let tt in Q)if(Q[tt].location>=0){let yt=V[tt],vt=X[tt];if(vt===void 0){if(tt==="instanceMatrix"&&A.instanceMatrix)vt=A.instanceMatrix;if(tt==="instanceColor"&&A.instanceColor)vt=A.instanceColor}if(yt===void 0)return!0;if(yt.attribute!==vt)return!0;if(vt&&yt.data!==vt.data)return!0;U++}if(r.attributesNum!==U)return!0;if(r.index!==B)return!0;return!1}function v(A,H,J,B){let V={},X=H.attributes,U=0,Q=J.getAttributes();for(let tt in Q)if(Q[tt].location>=0){let yt=X[tt];if(yt===void 0){if(tt==="instanceMatrix"&&A.instanceMatrix)yt=A.instanceMatrix;if(tt==="instanceColor"&&A.instanceColor)yt=A.instanceColor}let vt={};if(vt.attribute=yt,yt&&yt.data)vt.data=yt.data;V[tt]=vt,U++}r.attributes=V,r.attributesNum=U,r.index=B}function b(){let A=r.newAttributes;for(let H=0,J=A.length;H<J;H++)A[H]=0}function p(A){f(A,0)}function f(A,H){let{newAttributes:J,enabledAttributes:B,attributeDivisors:V}=r;if(J[A]=1,B[A]===0)t.enableVertexAttribArray(A),B[A]=1;if(V[A]!==H)t.vertexAttribDivisor(A,H),V[A]=H}function R(){let{newAttributes:A,enabledAttributes:H}=r;for(let J=0,B=H.length;J<B;J++)if(H[J]!==A[J])t.disableVertexAttribArray(J),H[J]=0}function w(A,H,J,B,V,X,U){if(U===!0)t.vertexAttribIPointer(A,H,J,V,X);else t.vertexAttribPointer(A,H,J,B,V,X)}function M(A,H,J,B){b();let V=B.attributes,X=J.getAttributes(),U=H.defaultAttributeValues;for(let Q in X){let tt=X[Q];if(tt.location>=0){let ot=V[Q];if(ot===void 0){if(Q==="instanceMatrix"&&A.instanceMatrix)ot=A.instanceMatrix;if(Q==="instanceColor"&&A.instanceColor)ot=A.instanceColor}if(ot!==void 0){let{normalized:yt,itemSize:vt}=ot,oe=e.get(ot);if(oe===void 0)continue;let{buffer:$t,type:Z,bytesPerElement:st}=oe,mt=Z===t.INT||Z===t.UNSIGNED_INT||ot.gpuType===Jr;if(ot.isInterleavedBufferAttribute){let gt=ot.data,Rt=gt.stride,Ht=ot.offset;if(gt.isInstancedInterleavedBuffer){for(let Bt=0;Bt<tt.locationSize;Bt++)f(tt.location+Bt,gt.meshPerAttribute);if(A.isInstancedMesh!==!0&&B._maxInstanceCount===void 0)B._maxInstanceCount=gt.meshPerAttribute*gt.count}else for(let Bt=0;Bt<tt.locationSize;Bt++)p(tt.location+Bt);t.bindBuffer(t.ARRAY_BUFFER,$t);for(let Bt=0;Bt<tt.locationSize;Bt++)w(tt.location+Bt,vt/tt.locationSize,Z,yt,Rt*st,(Ht+vt/tt.locationSize*Bt)*st,mt)}else{if(ot.isInstancedBufferAttribute){for(let gt=0;gt<tt.locationSize;gt++)f(tt.location+gt,ot.meshPerAttribute);if(A.isInstancedMesh!==!0&&B._maxInstanceCount===void 0)B._maxInstanceCount=ot.meshPerAttribute*ot.count}else for(let gt=0;gt<tt.locationSize;gt++)p(tt.location+gt);t.bindBuffer(t.ARRAY_BUFFER,$t);for(let gt=0;gt<tt.locationSize;gt++)w(tt.location+gt,vt/tt.locationSize,Z,yt,vt*st,vt/tt.locationSize*gt*st,mt)}}else if(U!==void 0){let yt=U[Q];if(yt!==void 0)switch(yt.length){case 2:t.vertexAttrib2fv(tt.location,yt);break;case 3:t.vertexAttrib3fv(tt.location,yt);break;case 4:t.vertexAttrib4fv(tt.location,yt);break;default:t.vertexAttrib1fv(tt.location,yt)}}}}R()}function E(){S();for(let A in i){let H=i[A];for(let J in H){let B=H[J];for(let V in B){let X=B[V];for(let U in X)u(X[U].object),delete X[U];delete B[V]}}delete i[A]}}function T(A){if(i[A.id]===void 0)return;let H=i[A.id];for(let J in H){let B=H[J];for(let V in B){let X=B[V];for(let U in X)u(X[U].object),delete X[U];delete B[V]}}delete i[A.id]}function C(A){for(let H in i){let J=i[H];for(let B in J){let V=J[B];if(V[A.id]===void 0)continue;let X=V[A.id];for(let U in X)u(X[U].object),delete X[U];delete V[A.id]}}}function _(A){for(let H in i){let J=i[H],B=A.isInstancedMesh===!0?A.id:0,V=J[B];if(V===void 0)continue;for(let X in V){let U=V[X];for(let Q in U)u(U[Q].object),delete U[Q];delete V[X]}if(delete J[B],Object.keys(J).length===0)delete i[H]}}function S(){if(z(),a=!0,r===s)return;r=s,c(r.object)}function z(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:S,resetDefaultState:z,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:b,enableAttribute:p,disableUnusedAttributes:R}}function kf(t,e,n){let i;function s(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,u){if(u===0)return;t.drawArraysInstanced(i,l,c,u),n.update(c,i,u)}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let m=0;m<u;m++)h+=c[m];n.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Gf(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){if(C!==on&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function o(C){let _=C===Mn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));if(C!==tn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==yn&&!_)return!1;return!0}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}if(C==="mediump"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let c=n.precision!==void 0?n.precision:"highp",u=l(c);if(u!==c)Tt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u;let d=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");if(n.reversedDepthBuffer===!0&&h===!1)Tt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),R=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),w=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:v,maxTextureSize:b,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:R,maxVaryings:w,maxFragmentUniforms:M,maxSamples:E,samples:T}}function Hf(t){let e=this,n=null,i=0,s=!1,r=!1,a=new je,o=new Lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let m=d.length!==0||h||i!==0||s;return s=h,i=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,m){let{clippingPlanes:v,clipIntersection:b,clipShadows:p}=d,f=t.get(d);if(!s||v===null||v.length===0||r&&!p)if(r)u(null);else c();else{let R=r?0:i,w=R*4,M=f.clippingState||null;l.value=M,M=u(v,h,w,m);for(let E=0;E!==w;++E)M[E]=n[E];f.clippingState=M,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=R}};function c(){if(l.value!==n)l.value=n,l.needsUpdate=i>0;e.numPlanes=i,e.numIntersection=0}function u(d,h,m,v){let b=d!==null?d.length:0,p=null;if(b!==0){if(p=l.value,v!==!0||p===null){let f=m+b*4,R=h.matrixWorldInverse;if(o.getNormalMatrix(R),p===null||p.length<f)p=new Float32Array(f);for(let w=0,M=m;w!==b;++w,M+=4)a.copy(d[w]).applyMatrix4(R,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,p}}var Bn=4,gc=[0.125,0.215,0.35,0.446,0.526,0.582],ii=20,Vf=256,ns=new ts,_c=new It,uo=null,fo=0,po=0,mo=!1,Wf=new D;class xo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=0.1,i=100,s={}){let{size:r=256,position:a=Wf}=s;uo=this._renderer.getRenderTarget(),fo=this._renderer.getActiveCubeFace(),po=this._renderer.getActiveMipmapLevel(),mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let o=this._allocateTargets();if(o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o,a),e>0)this._blur(o,0,0,e);return this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=yc(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=vc(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(uo,fo,po),this._renderer.xr.enabled=mo,t.scissorTest=!1,Di(t,0,0,t.width,t.height)}_fromTexture(t,e){if(t.mapping===Ti||t.mapping===Xn)this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width);else this._setSize(t.image.width/4);uo=this._renderer.getRenderTarget(),fo=this._renderer.getActiveCubeFace(),po=this._renderer.getActiveMipmapLevel(),mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:De,minFilter:De,generateMipmaps:!1,type:Mn,format:on,colorSpace:La,depthBuffer:!1},i=xc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=xc(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Xf(s)),this._blurMaterial=Yf(s,t,e),this._ggxMaterial=qf(s,t,e)}return i}_compileMaterial(t){let e=new Ne(new Re,t);this._renderer.compile(e,ns)}_sceneToCubeUV(t,e,n,i,s){let o=new Ie(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;if(u.getClearColor(_c),u.toneMapping=Qe,u.autoClear=!1,u.state.buffers.depth.getReversed())u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new Ne(new Pi,new Ks({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}));let v=this._backgroundBox,b=v.material,p=!1,f=t.background;if(f){if(f.isColor)b.color.copy(f),t.background=null,p=!0}else b.color.copy(_c),p=!0;for(let R=0;R<6;R++){let w=R%3;if(w===0)o.up.set(0,l[R],0),o.position.set(s.x,s.y,s.z),o.lookAt(s.x+c[R],s.y,s.z);else if(w===1)o.up.set(0,0,l[R]),o.position.set(s.x,s.y,s.z),o.lookAt(s.x,s.y+c[R],s.z);else o.up.set(0,l[R],0),o.position.set(s.x,s.y,s.z),o.lookAt(s.x,s.y,s.z+c[R]);let M=this._cubeSize;if(Di(i,w*M,R>2?M:0,M,M),u.setRenderTarget(i),p)u.render(v,o);u.render(t,o)}u.toneMapping=h,u.autoClear=d,t.background=f}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Ti||t.mapping===Xn;if(i){if(this._cubemapMaterial===null)this._cubemapMaterial=yc();this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=vc();let s=i?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;let a=s.uniforms;a.envMap.value=t;let o=this._cubeSize;Di(e,0,0,3*o,2*o),n.setRenderTarget(e),n.render(r,ns)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,a=this._lodMeshes[n];a.material=r;let o=r.uniforms,l=n/(this._lodMeshes.length-1),c=e/(this._lodMeshes.length-1),u=Math.sqrt(l*l-c*c),d=0+l*1.25,h=u*d,{_lodMax:m}=this,v=this._sizeLods[n],b=3*v*(n>m-Bn?n-m+Bn:0),p=4*(this._cubeSize-v);o.envMap.value=t.texture,o.roughness.value=h,o.mipInt.value=m-e,Di(s,b,p,3*v,2*v),i.setRenderTarget(s),i.render(a,ns),o.envMap.value=s.texture,o.roughness.value=0,o.mipInt.value=m-n,Di(t,b,p,3*v,2*v),i.setRenderTarget(t),i.render(a,ns)}_blur(t,e,n,i,s){let r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",s),this._halfBlur(r,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,r,a){let o=this._renderer,l=this._blurMaterial;if(r!=="latitudinal"&&r!=="longitudinal")Ct("blur direction must be either latitudinal or longitudinal!");let c=3,u=this._lodMeshes[i];u.material=l;let d=l.uniforms,h=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*ii-1),v=s/m,b=isFinite(s)?1+Math.floor(c*v):ii;if(b>ii)Tt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${ii}`);let p=[],f=0;for(let T=0;T<ii;++T){let C=T/v,_=Math.exp(-C*C/2);if(p.push(_),T===0)f+=_;else if(T<b)f+=2*_}for(let T=0;T<p.length;T++)p[T]=p[T]/f;if(d.envMap.value=t.texture,d.samples.value=b,d.weights.value=p,d.latitudinal.value=r==="latitudinal",a)d.poleAxis.value=a;let{_lodMax:R}=this;d.dTheta.value=m,d.mipInt.value=R-n;let w=this._sizeLods[i],M=3*w*(i>R-Bn?i-R+Bn:0),E=4*(this._cubeSize-w);Di(e,M,E,3*w,2*w),o.setRenderTarget(e),o.render(u,ns)}}function Xf(t){let e=[],n=[],i=[],s=t,r=t-Bn+1+gc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;if(a>t-Bn)l=gc[a-t+Bn-1];else if(a===0)l=0;n.push(l);let c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,v=6,b=3,p=2,f=1,R=new Float32Array(b*v*m),w=new Float32Array(p*v*m),M=new Float32Array(f*v*m);for(let T=0;T<m;T++){let C=T%3*2/3-1,_=T>2?0:-1,S=[C,_,0,C+0.6666666666666666,_,0,C+0.6666666666666666,_+1,0,C,_,0,C+0.6666666666666666,_+1,0,C,_+1,0];R.set(S,b*v*T),w.set(h,p*v*T);let z=[T,T,T,T,T,T];M.set(z,f*v*T)}let E=new Re;if(E.setAttribute("position",new we(R,b)),E.setAttribute("uv",new we(w,p)),E.setAttribute("faceIndex",new we(M,f)),i.push(new Ne(E,null)),s>Bn)s--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function xc(t,e,n){let i=new qe(t,e,n);return i.texture.mapping=Xi,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Di(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function qf(t,e,n){return new Ye({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Vf,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:an,depthTest:!1,depthWrite:!1})}function Yf(t,e,n){let i=new Float32Array(ii),s=new D(0,1,0);return new Ye({name:"SphericalGaussianBlur",defines:{n:ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:lr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:an,depthTest:!1,depthWrite:!1})}function vc(){return new Ye({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:an,depthTest:!1,depthWrite:!1})}function yc(){return new Ye({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:an,depthTest:!1,depthWrite:!1})}function lr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Mo extends qe{constructor(t=1,e={}){super(t,t,e);this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Qs(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Pi(5,5,5),s=new Ye({name:"CubemapFromEquirect",uniforms:jn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Le,blending:an});s.uniforms.tEquirect.value=e;let r=new Ne(i,s),a=e.minFilter;if(e.minFilter===qn)e.minFilter=De;return new ro(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}function Zf(t){let e=new WeakMap,n=new WeakMap,i=null;function s(h,m=!1){if(h===null||h===void 0)return null;if(m)return a(h);return r(h)}function r(h){if(h&&h.isTexture){let m=h.mapping;if(m===Ds||m===Ns)if(e.has(h)){let v=e.get(h).texture;return o(v,h.mapping)}else{let v=h.image;if(v&&v.height>0){let b=new Mo(v.height);return b.fromEquirectangularTexture(t,h),e.set(h,b),h.addEventListener("dispose",c),o(b.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let m=h.mapping,v=m===Ds||m===Ns,b=m===Ti||m===Xn;if(v||b){let p=n.get(h),f=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f){if(i===null)i=new xo(t);return p=v?i.fromEquirectangular(h,p):i.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,n.set(h,p),p.texture}else if(p!==void 0)return p.texture;else{let R=h.image;if(v&&R&&R.height>0||b&&R&&l(R)){if(i===null)i=new xo(t);return p=v?i.fromEquirectangular(h):i.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,n.set(h,p),h.addEventListener("dispose",u),p.texture}else return null}}}return h}function o(h,m){if(m===Ds)h.mapping=Ti;else if(m===Ns)h.mapping=Xn;return h}function l(h){let m=0,v=6;for(let b=0;b<v;b++)if(h[b]!==void 0)m++;return m===v}function c(h){let m=h.target;m.removeEventListener("dispose",c);let v=e.get(m);if(v!==void 0)e.delete(m),v.dispose()}function u(h){let m=h.target;m.removeEventListener("dispose",u);let v=n.get(m);if(v!==void 0)n.delete(m),v.dispose()}function d(){if(e=new WeakMap,n=new WeakMap,i!==null)i.dispose(),i=null}return{get:s,dispose:d}}function Jf(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);if(s===null)Wn("WebGLRenderer: "+i+" extension not supported.");return s}}}function $f(t,e,n,i){let s={},r=new WeakMap;function a(d){let h=d.target;if(h.index!==null)e.remove(h.index);for(let v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",a),delete s[h.id];let m=r.get(h);if(m)e.remove(m),r.delete(h);if(i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0)delete h._maxInstanceCount;n.memory.geometries--}function o(d,h){if(s[h.id]===!0)return h;return h.addEventListener("dispose",a),s[h.id]=!0,n.memory.geometries++,h}function l(d){let h=d.attributes;for(let m in h)e.update(h[m],t.ARRAY_BUFFER)}function c(d){let h=[],m=d.index,v=d.attributes.position,b=0;if(v===void 0)return;if(m!==null){let R=m.array;b=m.version;for(let w=0,M=R.length;w<M;w+=3){let E=R[w+0],T=R[w+1],C=R[w+2];h.push(E,T,T,C,C,E)}}else{let R=v.array;b=v.version;for(let w=0,M=R.length/3-1;w<M;w+=3){let E=w+0,T=w+1,C=w+2;h.push(E,T,T,C,C,E)}}let p=new(v.count>=65535?$s:Js)(h,1);p.version=b;let f=r.get(d);if(f)e.remove(f);r.set(d,p)}function u(d){let h=r.get(d);if(h){let m=d.index;if(m!==null){if(h.version<m.version)c(d)}}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Kf(t,e,n){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){t.drawElements(i,h,r,d*a),n.update(h,i,1)}function c(d,h,m){if(m===0)return;t.drawElementsInstanced(i,h,r,d*a,m),n.update(h,i,m)}function u(d,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,m);let b=0;for(let p=0;p<m;p++)b+=h[p];n.update(b,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function jf(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:Ct("WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function Qf(t,e,n){let i=new WeakMap,s=new ae;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==d){let S=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",S)};if(h!==void 0)h.texture.dispose();let m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],R=o.morphAttributes.color||[],w=0;if(m===!0)w=1;if(v===!0)w=2;if(b===!0)w=3;let M=o.attributes.position.count*w,E=1;if(M>e.maxTextureSize)E=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize;let T=new Float32Array(M*E*4*d),C=new qs(T,M,E,d);C.type=yn,C.needsUpdate=!0;let _=w*4;for(let z=0;z<d;z++){let A=p[z],H=f[z],J=R[z],B=M*E*4*z;for(let V=0;V<A.count;V++){let X=V*_;if(m===!0)s.fromBufferAttribute(A,V),T[B+X+0]=s.x,T[B+X+1]=s.y,T[B+X+2]=s.z,T[B+X+3]=0;if(v===!0)s.fromBufferAttribute(H,V),T[B+X+4]=s.x,T[B+X+5]=s.y,T[B+X+6]=s.z,T[B+X+7]=0;if(b===!0)s.fromBufferAttribute(J,V),T[B+X+8]=s.x,T[B+X+9]=s.y,T[B+X+10]=s.z,T[B+X+11]=J.itemSize===4?s.w:1}}h={count:d,texture:C,size:new Pt(M,E)},i.set(o,h),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let m=0;for(let b=0;b<c.length;b++)m+=c[b];let v=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:r}}function tp(t,e,n,i,s){let r=new WeakMap;function a(c){let u=s.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u)e.update(h),r.set(h,u);if(c.isInstancedMesh){if(c.hasEventListener("dispose",l)===!1)c.addEventListener("dispose",l);if(r.get(c)!==u){if(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null)n.update(c.instanceColor,t.ARRAY_BUFFER);r.set(c,u)}}if(c.isSkinnedMesh){let m=c.skeleton;if(r.get(m)!==u)m.update(),r.set(m,u)}return h}function o(){r=new WeakMap}function l(c){let u=c.target;if(u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null)n.remove(u.instanceColor)}return{update:a,dispose:o}}var ep={[Hr]:"LINEAR_TONE_MAPPING",[Vr]:"REINHARD_TONE_MAPPING",[Wr]:"CINEON_TONE_MAPPING",[Xr]:"ACES_FILMIC_TONE_MAPPING",[Yr]:"AGX_TONE_MAPPING",[Zr]:"NEUTRAL_TONE_MAPPING",[qr]:"CUSTOM_TONE_MAPPING"};function np(t,e,n,i,s,r){let a=new qe(e,n,{type:t,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new On(e,n):void 0}),o=new qe(e,n,{type:Mn,depthBuffer:!1,stencilBuffer:!1}),l=new Re;l.setAttribute("position",new fe([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new fe([0,2,0,0,2,0],2));let c=new qa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Ne(l,c),d=new ts(-1,1,1,-1,0,1),h=null,m=null,v=!1,b,p=null,f=[],R=!1;this.setSize=function(w,M){a.setSize(w,M),o.setSize(w,M);for(let E=0;E<f.length;E++){let T=f[E];if(T.setSize)T.setSize(w,M)}},this.setEffects=function(w){f=w,R=f.length>0&&f[0].isRenderPass===!0;let{width:M,height:E}=a;for(let T=0;T<f.length;T++){let C=f[T];if(C.setSize)C.setSize(M,E)}},this.begin=function(w,M){if(v)return!1;if(w.toneMapping===Qe&&f.length===0)return!1;if(p=M,M!==null){let{width:E,height:T}=M;if(a.width!==E||a.height!==T)this.setSize(E,T)}if(R===!1)w.setRenderTarget(a);return b=w.toneMapping,w.toneMapping=Qe,!0},this.hasRenderPass=function(){return R},this.end=function(w,M){w.toneMapping=b,v=!0;let E=a,T=o;for(let C=0;C<f.length;C++){let _=f[C];if(_.enabled===!1)continue;if(_.render(w,T,E,M),_.needsSwap!==!1){let S=E;E=T,T=S}}if(h!==w.outputColorSpace||m!==w.toneMapping){if(h=w.outputColorSpace,m=w.toneMapping,c.defines={},Gt.getTransfer(h)===Qt)c.defines.SRGB_TRANSFER="";let C=ep[m];if(C)c.defines[C]="";c.needsUpdate=!0}c.uniforms.tDiffuse.value=E.texture,w.setRenderTarget(p),w.render(u,d),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){if(a.depthTexture)a.depthTexture.dispose();a.dispose(),o.dispose(),l.dispose(),c.dispose()}}var kc=new Ae,vo=new On(1,1),Gc=new qs,Hc=new Ga,Vc=new Qs,Mc=[],Sc=[],bc=new Float32Array(16),Ec=new Float32Array(9),Tc=new Float32Array(4);function Ni(t,e,n){let i=t[0];if(i<=0||i>0)return t;let s=e*n,r=Mc[s];if(r===void 0)r=new Float32Array(s),Mc[s]=r;if(e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(r,o)}return r}function me(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function ge(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function cr(t,e){let n=Sc[e];if(n===void 0)n=new Int32Array(e),Sc[e]=n;for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function ip(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1f(this.addr,e),n[0]=e}function sp(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(me(n,e))return;t.uniform2fv(this.addr,e),ge(n,e)}}function rp(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else if(e.r!==void 0){if(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b}else{if(me(n,e))return;t.uniform3fv(this.addr,e),ge(n,e)}}function ap(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(me(n,e))return;t.uniform4fv(this.addr,e),ge(n,e)}}function op(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(me(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),ge(n,e)}else{if(me(n,i))return;Tc.set(i),t.uniformMatrix2fv(this.addr,!1,Tc),ge(n,i)}}function lp(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(me(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),ge(n,e)}else{if(me(n,i))return;Ec.set(i),t.uniformMatrix3fv(this.addr,!1,Ec),ge(n,i)}}function cp(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(me(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),ge(n,e)}else{if(me(n,i))return;bc.set(i),t.uniformMatrix4fv(this.addr,!1,bc),ge(n,i)}}function hp(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1i(this.addr,e),n[0]=e}function up(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(me(n,e))return;t.uniform2iv(this.addr,e),ge(n,e)}}function dp(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(me(n,e))return;t.uniform3iv(this.addr,e),ge(n,e)}}function fp(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(me(n,e))return;t.uniform4iv(this.addr,e),ge(n,e)}}function pp(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1ui(this.addr,e),n[0]=e}function mp(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(me(n,e))return;t.uniform2uiv(this.addr,e),ge(n,e)}}function gp(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(me(n,e))return;t.uniform3uiv(this.addr,e),ge(n,e)}}function _p(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(me(n,e))return;t.uniform4uiv(this.addr,e),ge(n,e)}}function xp(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;let r;if(this.type===t.SAMPLER_2D_SHADOW)vo.compareFunction=n.isReversedDepthBuffer()?Xs:Ws,r=vo;else r=kc;n.setTexture2D(e||r,s)}function vp(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture3D(e||Hc,s)}function yp(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTextureCube(e||Vc,s)}function Mp(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture2DArray(e||Gc,s)}function Sp(t){switch(t){case 5126:return ip;case 35664:return sp;case 35665:return rp;case 35666:return ap;case 35674:return op;case 35675:return lp;case 35676:return cp;case 5124:case 35670:return hp;case 35667:case 35671:return up;case 35668:case 35672:return dp;case 35669:case 35673:return fp;case 5125:return pp;case 36294:return mp;case 36295:return gp;case 36296:return _p;case 35678:case 36198:case 36298:case 36306:case 35682:return xp;case 35679:case 36299:case 36307:return vp;case 35680:case 36300:case 36308:case 36293:return yp;case 36289:case 36303:case 36311:case 36292:return Mp}}function bp(t,e){t.uniform1fv(this.addr,e)}function Ep(t,e){let n=Ni(e,this.size,2);t.uniform2fv(this.addr,n)}function Tp(t,e){let n=Ni(e,this.size,3);t.uniform3fv(this.addr,n)}function Ap(t,e){let n=Ni(e,this.size,4);t.uniform4fv(this.addr,n)}function wp(t,e){let n=Ni(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Rp(t,e){let n=Ni(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Cp(t,e){let n=Ni(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Pp(t,e){t.uniform1iv(this.addr,e)}function Ip(t,e){t.uniform2iv(this.addr,e)}function Lp(t,e){t.uniform3iv(this.addr,e)}function Dp(t,e){t.uniform4iv(this.addr,e)}function Np(t,e){t.uniform1uiv(this.addr,e)}function Up(t,e){t.uniform2uiv(this.addr,e)}function Fp(t,e){t.uniform3uiv(this.addr,e)}function Op(t,e){t.uniform4uiv(this.addr,e)}function Bp(t,e,n){let i=this.cache,s=e.length,r=cr(n,s);if(!me(i,r))t.uniform1iv(this.addr,r),ge(i,r);let a;if(this.type===t.SAMPLER_2D_SHADOW)a=vo;else a=kc;for(let o=0;o!==s;++o)n.setTexture2D(e[o]||a,r[o])}function zp(t,e,n){let i=this.cache,s=e.length,r=cr(n,s);if(!me(i,r))t.uniform1iv(this.addr,r),ge(i,r);for(let a=0;a!==s;++a)n.setTexture3D(e[a]||Hc,r[a])}function kp(t,e,n){let i=this.cache,s=e.length,r=cr(n,s);if(!me(i,r))t.uniform1iv(this.addr,r),ge(i,r);for(let a=0;a!==s;++a)n.setTextureCube(e[a]||Vc,r[a])}function Gp(t,e,n){let i=this.cache,s=e.length,r=cr(n,s);if(!me(i,r))t.uniform1iv(this.addr,r),ge(i,r);for(let a=0;a!==s;++a)n.setTexture2DArray(e[a]||Gc,r[a])}function Hp(t){switch(t){case 5126:return bp;case 35664:return Ep;case 35665:return Tp;case 35666:return Ap;case 35674:return wp;case 35675:return Rp;case 35676:return Cp;case 5124:case 35670:return Pp;case 35667:case 35671:return Ip;case 35668:case 35672:return Lp;case 35669:case 35673:return Dp;case 5125:return Np;case 36294:return Up;case 36295:return Fp;case 36296:return Op;case 35678:case 36198:case 36298:case 36306:case 35682:return Bp;case 35679:case 36299:case 36307:return zp;case 35680:case 36300:case 36308:case 36293:return kp;case 36289:case 36303:case 36311:case 36292:return Gp}}class Wc{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Sp(e.type)}}class Xc{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Hp(e.type)}}class qc{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let a=i[s];a.setValue(t,e[a.id],n)}}}var go=/(\w+)(\])?(\[|\.)?/g;function Ac(t,e){t.seq.push(e),t.map[e.id]=e}function Vp(t,e,n){let i=t.name,s=i.length;go.lastIndex=0;while(!0){let r=go.exec(i),a=go.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l)o=o|0;if(c===void 0||c==="["&&a+2===s){Ac(n,c===void 0?new Wc(o,t,e):new Xc(o,t,e));break}else{let d=n.map[o];if(d===void 0)d=new qc(o),Ac(n,d);n=d}}}class rs{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let a=t.getActiveUniform(e,r),o=t.getUniformLocation(e,a.name);Vp(a,o,this)}let i=[],s=[];for(let r of this.seq)if(r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW)i.push(r);else s.push(r);if(i.length>0)this.seq=i.concat(s)}setValue(t,e,n,i){let s=this.map[e];if(s!==void 0)s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];if(i!==void 0)this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){let a=e[s],o=n[a.id];if(o.needsUpdate!==!1)a.setValue(t,o.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let r=t[i];if(r.id in e)n.push(r)}return n}}function wc(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var Wp=37297,Xp=0;function qp(t,e){let n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}var Rc=new Lt;function Yp(t){Gt._getMatrix(Rc,Gt.workingColorSpace,t);let e=`mat3( ${Rc.elements.map((n)=>n.toFixed(4))} )`;switch(Gt.getTransfer(t)){case Da:return[e,"LinearTransferOETF"];case Qt:return[e,"sRGBTransferOETF"];default:return Tt("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Cc(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+qp(t.getShaderSource(e),o)}else return r}function Zp(t,e){let n=Yp(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var Jp={[Hr]:"Linear",[Vr]:"Reinhard",[Wr]:"Cineon",[Xr]:"ACESFilmic",[Yr]:"AgX",[Zr]:"Neutral",[qr]:"Custom"};function $p(t,e){let n=Jp[e];if(n===void 0)return Tt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var or=new D;function Kp(){Gt.getLuminanceCoefficients(or);let t=or.x.toFixed(4),e=or.y.toFixed(4),n=or.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function jp(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ss).join(`
`)}function Qp(t){let e=[];for(let n in t){let i=t[n];if(i===!1)continue;e.push("#define "+n+" "+i)}return e.join(`
`)}function tm(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=t.getActiveAttrib(e,s),a=r.name,o=1;if(r.type===t.FLOAT_MAT2)o=2;if(r.type===t.FLOAT_MAT3)o=3;if(r.type===t.FLOAT_MAT4)o=4;n[a]={type:r.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ss(t){return t!==""}function Pc(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ic(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var em=/^[ \t]*#include +<([\w\d./]+)>/gm;function yo(t){return t.replace(em,im)}var nm=new Map;function im(t,e){let n=Ut[e];if(n===void 0){let i=nm.get(e);if(i!==void 0)n=Ut[i],Tt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return yo(n)}var sm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lc(t){return t.replace(sm,rm)}function rm(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Dc(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;if(t.precision==="highp")e+=`
#define HIGH_PRECISION`;else if(t.precision==="mediump")e+=`
#define MEDIUM_PRECISION`;else if(t.precision==="lowp")e+=`
#define LOW_PRECISION`;return e}var am={[Vi]:"SHADOWMAP_TYPE_PCF",[Si]:"SHADOWMAP_TYPE_VSM"};function om(t){return am[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var lm={[Ti]:"ENVMAP_TYPE_CUBE",[Xn]:"ENVMAP_TYPE_CUBE",[Xi]:"ENVMAP_TYPE_CUBE_UV"};function cm(t){if(t.envMap===!1)return"ENVMAP_TYPE_CUBE";return lm[t.envMapMode]||"ENVMAP_TYPE_CUBE"}var hm={[Xn]:"ENVMAP_MODE_REFRACTION"};function um(t){if(t.envMap===!1)return"ENVMAP_MODE_REFLECTION";return hm[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var dm={[zl]:"ENVMAP_BLENDING_MULTIPLY",[kl]:"ENVMAP_BLENDING_MIX",[Gl]:"ENVMAP_BLENDING_ADD"};function fm(t){if(t.envMap===!1)return"ENVMAP_BLENDING_NONE";return dm[t.combine]||"ENVMAP_BLENDING_NONE"}function pm(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function mm(t,e,n,i){let s=t.getContext(),r=n.defines,a=n.vertexShader,o=n.fragmentShader,l=om(n),c=cm(n),u=um(n),d=fm(n),h=pm(n),m=jp(n),v=Qp(r),b=s.createProgram(),p,f,R=n.glslVersion?"#version "+n.glslVersion+`
`:"";if(n.isRawShaderMaterial){if(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ss).join(`
`),p.length>0)p+=`
`;if(f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ss).join(`
`),f.length>0)f+=`
`}else p=[Dc(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),f=[Dc(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Qe?"#define TONE_MAPPING":"",n.toneMapping!==Qe?Ut.tonemapping_pars_fragment:"",n.toneMapping!==Qe?$p("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,Zp("linearToOutputTexel",n.outputColorSpace),Kp(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ss).join(`
`);if(a=yo(a),a=Pc(a,n),a=Ic(a,n),o=yo(o),o=Pc(o,n),o=Ic(o,n),a=Lc(a),o=Lc(o),n.isRawShaderMaterial!==!0)R=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",n.glslVersion===Na?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Na?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f;let w=R+p+a,M=R+f+o,E=wc(s,s.VERTEX_SHADER,w),T=wc(s,s.FRAGMENT_SHADER,M);if(s.attachShader(b,E),s.attachShader(b,T),n.index0AttributeName!==void 0)s.bindAttribLocation(b,0,n.index0AttributeName);else if(n.hasPositionAttribute===!0)s.bindAttribLocation(b,0,"position");s.linkProgram(b);function C(A){if(t.debug.checkShaderErrors){let H=s.getProgramInfoLog(b)||"",J=s.getShaderInfoLog(E)||"",B=s.getShaderInfoLog(T)||"",V=H.trim(),X=J.trim(),U=B.trim(),Q=!0,tt=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(Q=!1,typeof t.debug.onShaderError==="function")t.debug.onShaderError(s,b,E,T);else{let ot=Cc(s,E,"vertex"),yt=Cc(s,T,"fragment");Ct("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+V+`
`+ot+`
`+yt)}else if(V!=="")Tt("WebGLProgram: Program Info Log:",V);else if(X===""||U==="")tt=!1;if(tt)A.diagnostics={runnable:Q,programLog:V,vertexShader:{log:X,prefix:p},fragmentShader:{log:U,prefix:f}}}s.deleteShader(E),s.deleteShader(T),_=new rs(s,b),S=tm(s,b)}let _;this.getUniforms=function(){if(_===void 0)C(this);return _};let S;this.getAttributes=function(){if(S===void 0)C(this);return S};let z=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(z===!1)z=s.getProgramParameter(b,Wp);return z},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Xp++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=E,this.fragmentShader=T,this}var gm=0;class Yc{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);if(i.has(e)===!1)i.add(e),e.usedTimes++;if(i.has(n)===!1)i.add(n),n.usedTimes++;return this}remove(t){let e=this.materialCache.get(t);for(let n of e)if(n.usedTimes--,n.usedTimes===0)this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);if(n===void 0)n=new Set,e.set(t,n);return n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);if(n===void 0)n=new Zc(t),e.set(t,n);return n}}class Zc{constructor(t){this.id=gm++,this.code=t,this.usedTimes=0}}function _m(t){return t===Jn||t===Gs||t===Hs}function xm(t,e,n,i,s,r){let a=new Ys,o=new Yc,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,h=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){if(l.add(_),_===0)return"uv";return`uv${_}`}function b(_,S,z,A,H,J){let B=A.fog,V=H.geometry,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?A.environment:null,U=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,Q=e.get(_.envMap||X,U),tt=!!Q&&Q.mapping===Xi?Q.image.height:null,ot=m[_.type];if(_.precision!==null){if(h=i.getMaxPrecision(_.precision),h!==_.precision)Tt("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead.")}let yt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,vt=yt!==void 0?yt.length:0,oe=0;if(V.morphAttributes.position!==void 0)oe=1;if(V.morphAttributes.normal!==void 0)oe=2;if(V.morphAttributes.color!==void 0)oe=3;let $t,Z,st,mt;if(ot){let Dt=hn[ot];$t=Dt.vertexShader,Z=Dt.fragmentShader}else{$t=_.vertexShader,Z=_.fragmentShader;let Dt=o.getVertexShaderStage(_),le=o.getFragmentShaderStage(_);o.update(_,Dt,le),st=Dt.id,mt=le.id}let gt=t.getRenderTarget(),Rt=t.state.buffers.depth.getReversed(),Ht=H.isInstancedMesh===!0,Bt=H.isBatchedMesh===!0,zt=!!_.map,te=!!_.matcap,Vt=!!Q,kt=!!_.aoMap,xe=!!_.lightMap,ke=!!_.bumpMap&&_.wireframe===!1,ie=!!_.normalMap,Se=!!_.displacementMap,ve=!!_.emissiveMap,pe=!!_.metalnessMap,L=!!_.roughnessMap,Ge=_.anisotropy>0,qt=_.clearcoat>0,se=_.dispersion>0,y=_.iridescence>0,g=_.sheen>0,P=_.transmission>0,G=Ge&&!!_.anisotropyMap,j=qt&&!!_.clearcoatMap,et=qt&&!!_.clearcoatNormalMap,lt=qt&&!!_.clearcoatRoughnessMap,W=y&&!!_.iridescenceMap,Y=y&&!!_.iridescenceThicknessMap,ft=g&&!!_.sheenColorMap,St=g&&!!_.sheenRoughnessMap,ct=!!_.specularMap,nt=!!_.specularColorMap,At=!!_.specularIntensityMap,wt=P&&!!_.transmissionMap,Xt=P&&!!_.thicknessMap,I=!!_.gradientMap,it=!!_.alphaMap,q=_.alphaTest>0,rt=!!_.alphaHash,pt=!!_.extensions,K=Qe;if(_.toneMapped){if(gt===null||gt.isXRRenderTarget===!0)K=t.toneMapping}let at={shaderID:ot,shaderType:_.type,shaderName:_.name,vertexShader:$t,fragmentShader:Z,defines:_.defines,customVertexShaderID:st,customFragmentShaderID:mt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:Bt,batchingColor:Bt&&H._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&H.instanceColor!==null,instancingMorph:Ht&&H.morphTexture!==null,outputColorSpace:gt===null?t.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:Gt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:zt,matcap:te,envMap:Vt,envMapMode:Vt&&Q.mapping,envMapCubeUVHeight:tt,aoMap:kt,lightMap:xe,bumpMap:ke,normalMap:ie,displacementMap:Se,emissiveMap:ve,normalMapObjectSpace:ie&&_.normalMapType===jl,normalMapTangentSpace:ie&&_.normalMapType===Ia,packedNormalMap:ie&&_.normalMapType===Ia&&_m(_.normalMap.format),metalnessMap:pe,roughnessMap:L,anisotropy:Ge,anisotropyMap:G,clearcoat:qt,clearcoatMap:j,clearcoatNormalMap:et,clearcoatRoughnessMap:lt,dispersion:se,iridescence:y,iridescenceMap:W,iridescenceThicknessMap:Y,sheen:g,sheenColorMap:ft,sheenRoughnessMap:St,specularMap:ct,specularColorMap:nt,specularIntensityMap:At,transmission:P,transmissionMap:wt,thicknessMap:Xt,gradientMap:I,opaque:_.transparent===!1&&_.blending===Wi&&_.alphaToCoverage===!1,alphaMap:it,alphaTest:q,alphaHash:rt,combine:_.combine,mapUv:zt&&v(_.map.channel),aoMapUv:kt&&v(_.aoMap.channel),lightMapUv:xe&&v(_.lightMap.channel),bumpMapUv:ke&&v(_.bumpMap.channel),normalMapUv:ie&&v(_.normalMap.channel),displacementMapUv:Se&&v(_.displacementMap.channel),emissiveMapUv:ve&&v(_.emissiveMap.channel),metalnessMapUv:pe&&v(_.metalnessMap.channel),roughnessMapUv:L&&v(_.roughnessMap.channel),anisotropyMapUv:G&&v(_.anisotropyMap.channel),clearcoatMapUv:j&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:et&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:W&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:Y&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:St&&v(_.sheenRoughnessMap.channel),specularMapUv:ct&&v(_.specularMap.channel),specularColorMapUv:nt&&v(_.specularColorMap.channel),specularIntensityMapUv:At&&v(_.specularIntensityMap.channel),transmissionMapUv:wt&&v(_.transmissionMap.channel),thicknessMapUv:Xt&&v(_.thicknessMap.channel),alphaMapUv:it&&v(_.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ie||Ge),vertexNormals:!!V.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!V.attributes.uv&&(zt||it),fog:!!B,useFog:_.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||V.attributes.normal===void 0&&ie===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Rt,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:oe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:J.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&z.length>0,shadowMapType:t.shadowMap.type,toneMapping:K,decodeVideoTexture:zt&&_.map.isVideoTexture===!0&&Gt.getTransfer(_.map.colorSpace)===Qt,decodeVideoTextureEmissive:ve&&_.emissiveMap.isVideoTexture===!0&&Gt.getTransfer(_.emissiveMap.colorSpace)===Qt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ze,flipSided:_.side===Le,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:pt&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&_.extensions.multiDraw===!0||Bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return at.vertexUv1s=l.has(1),at.vertexUv2s=l.has(2),at.vertexUv3s=l.has(3),l.clear(),at}function p(_){let S=[];if(_.shaderID)S.push(_.shaderID);else S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID);if(_.defines!==void 0)for(let z in _.defines)S.push(z),S.push(_.defines[z]);if(_.isRawShaderMaterial===!1)f(S,_),R(S,_),S.push(t.outputColorSpace);return S.push(_.customProgramCacheKey),S.join()}function f(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function R(_,S){if(a.disableAll(),S.instancing)a.enable(0);if(S.instancingColor)a.enable(1);if(S.instancingMorph)a.enable(2);if(S.matcap)a.enable(3);if(S.envMap)a.enable(4);if(S.normalMapObjectSpace)a.enable(5);if(S.normalMapTangentSpace)a.enable(6);if(S.clearcoat)a.enable(7);if(S.iridescence)a.enable(8);if(S.alphaTest)a.enable(9);if(S.vertexColors)a.enable(10);if(S.vertexAlphas)a.enable(11);if(S.vertexUv1s)a.enable(12);if(S.vertexUv2s)a.enable(13);if(S.vertexUv3s)a.enable(14);if(S.vertexTangents)a.enable(15);if(S.anisotropy)a.enable(16);if(S.alphaHash)a.enable(17);if(S.batching)a.enable(18);if(S.dispersion)a.enable(19);if(S.batchingColor)a.enable(20);if(S.gradientMap)a.enable(21);if(S.packedNormalMap)a.enable(22);if(S.vertexNormals)a.enable(23);if(_.push(a.mask),a.disableAll(),S.fog)a.enable(0);if(S.useFog)a.enable(1);if(S.flatShading)a.enable(2);if(S.logarithmicDepthBuffer)a.enable(3);if(S.reversedDepthBuffer)a.enable(4);if(S.skinning)a.enable(5);if(S.morphTargets)a.enable(6);if(S.morphNormals)a.enable(7);if(S.morphColors)a.enable(8);if(S.premultipliedAlpha)a.enable(9);if(S.shadowMapEnabled)a.enable(10);if(S.doubleSided)a.enable(11);if(S.flipSided)a.enable(12);if(S.useDepthPacking)a.enable(13);if(S.dithering)a.enable(14);if(S.transmission)a.enable(15);if(S.sheen)a.enable(16);if(S.opaque)a.enable(17);if(S.pointsUvs)a.enable(18);if(S.decodeVideoTexture)a.enable(19);if(S.decodeVideoTextureEmissive)a.enable(20);if(S.alphaToCoverage)a.enable(21);if(S.numLightProbeGrids>0)a.enable(22);if(S.hasPositionAttribute)a.enable(23);_.push(a.mask)}function w(_){let S=m[_.type],z;if(S){let A=hn[S];z=hc.clone(A.uniforms)}else z=_.uniforms;return z}function M(_,S){let z=u.get(S);if(z!==void 0)++z.usedTimes;else z=new mm(t,S,_,s),c.push(z),u.set(S,z);return z}function E(_){if(--_.usedTimes===0){let S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function T(_){o.remove(_)}function C(){o.dispose()}return{getParameters:b,getProgramCacheKey:p,getUniforms:w,acquireProgram:M,releaseProgram:E,releaseShaderCache:T,programs:c,dispose:C}}function vm(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);if(o===void 0)o={},t.set(a,o);return o}function i(a){t.delete(a)}function s(a,o,l){t.get(a)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function ym(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.material.id!==e.material.id)return t.material.id-e.material.id;else if(t.materialVariant!==e.materialVariant)return t.materialVariant-e.materialVariant;else if(t.z!==e.z)return t.z-e.z;else return t.id-e.id}function Nc(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.z!==e.z)return e.z-t.z;else return t.id-e.id}function Uc(){let t=[],e=0,n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function a(h){let m=0;if(h.isInstancedMesh)m+=2;if(h.isSkinnedMesh)m+=1;return m}function o(h,m,v,b,p,f){let R=t[e];if(R===void 0)R={id:h.id,object:h,geometry:m,material:v,materialVariant:a(h),groupOrder:b,renderOrder:h.renderOrder,z:p,group:f},t[e]=R;else R.id=h.id,R.object=h,R.geometry=m,R.material=v,R.materialVariant=a(h),R.groupOrder=b,R.renderOrder=h.renderOrder,R.z=p,R.group=f;return e++,R}function l(h,m,v,b,p,f){let R=o(h,m,v,b,p,f);if(v.transmission>0)i.push(R);else if(v.transparent===!0)s.push(R);else n.push(R)}function c(h,m,v,b,p,f){let R=o(h,m,v,b,p,f);if(v.transmission>0)i.unshift(R);else if(v.transparent===!0)s.unshift(R);else n.unshift(R)}function u(h,m,v){if(n.length>1)n.sort(h||ym);if(i.length>1)i.sort(m||Nc);if(s.length>1)s.sort(m||Nc);if(v)n.reverse(),i.reverse(),s.reverse()}function d(){for(let h=e,m=t.length;h<m;h++){let v=t[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function Mm(){let t=new WeakMap;function e(i,s){let r=t.get(i),a;if(r===void 0)a=new Uc,t.set(i,[a]);else if(s>=r.length)a=new Uc,r.push(a);else a=r[s];return a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Sm(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new D,color:new It};break;case"SpotLight":n={position:new D,direction:new D,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new D,color:new It,distance:0,decay:0};break;case"HemisphereLight":n={direction:new D,skyColor:new It,groundColor:new It};break;case"RectAreaLight":n={color:new It,position:new D,halfWidth:new D,halfHeight:new D};break}return t[e.id]=n,n}}}function bm(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1000};break}return t[e.id]=n,n}}}var Em=0;function Tm(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Am(t){let e=new Sm,n=bm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);let s=new D,r=new re,a=new re;function o(c){let u=0,d=0,h=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let m=0,v=0,b=0,p=0,f=0,R=0,w=0,M=0,E=0,T=0,C=0;c.sort(Tm);for(let S=0,z=c.length;S<z;S++){let A=c[S],H=A.color,J=A.intensity,B=A.distance,V=null;if(A.shadow&&A.shadow.map)if(A.shadow.map.texture.format===Jn)V=A.shadow.map.texture;else V=A.shadow.map.depthTexture||A.shadow.map.texture;if(A.isAmbientLight)u+=H.r*J,d+=H.g*J,h+=H.b*J;else if(A.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(A.sh.coefficients[X],J);C++}else if(A.isDirectionalLight){let X=e.get(A);if(X.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let U=A.shadow,Q=n.get(A);Q.shadowIntensity=U.intensity,Q.shadowBias=U.bias,Q.shadowNormalBias=U.normalBias,Q.shadowRadius=U.radius,Q.shadowMapSize=U.mapSize,i.directionalShadow[m]=Q,i.directionalShadowMap[m]=V,i.directionalShadowMatrix[m]=A.shadow.matrix,R++}i.directional[m]=X,m++}else if(A.isSpotLight){let X=e.get(A);X.position.setFromMatrixPosition(A.matrixWorld),X.color.copy(H).multiplyScalar(J),X.distance=B,X.coneCos=Math.cos(A.angle),X.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),X.decay=A.decay,i.spot[b]=X;let U=A.shadow;if(A.map){if(i.spotLightMap[E]=A.map,E++,U.updateMatrices(A),A.castShadow)T++}if(i.spotLightMatrix[b]=U.matrix,A.castShadow){let Q=n.get(A);Q.shadowIntensity=U.intensity,Q.shadowBias=U.bias,Q.shadowNormalBias=U.normalBias,Q.shadowRadius=U.radius,Q.shadowMapSize=U.mapSize,i.spotShadow[b]=Q,i.spotShadowMap[b]=V,M++}b++}else if(A.isRectAreaLight){let X=e.get(A);X.color.copy(H).multiplyScalar(J),X.halfWidth.set(A.width*0.5,0,0),X.halfHeight.set(0,A.height*0.5,0),i.rectArea[p]=X,p++}else if(A.isPointLight){let X=e.get(A);if(X.color.copy(A.color).multiplyScalar(A.intensity),X.distance=A.distance,X.decay=A.decay,A.castShadow){let U=A.shadow,Q=n.get(A);Q.shadowIntensity=U.intensity,Q.shadowBias=U.bias,Q.shadowNormalBias=U.normalBias,Q.shadowRadius=U.radius,Q.shadowMapSize=U.mapSize,Q.shadowCameraNear=U.camera.near,Q.shadowCameraFar=U.camera.far,i.pointShadow[v]=Q,i.pointShadowMap[v]=V,i.pointShadowMatrix[v]=A.shadow.matrix,w++}i.point[v]=X,v++}else if(A.isHemisphereLight){let X=e.get(A);X.skyColor.copy(A.color).multiplyScalar(J),X.groundColor.copy(A.groundColor).multiplyScalar(J),i.hemi[f]=X,f++}}if(p>0)if(t.has("OES_texture_float_linear")===!0)i.rectAreaLTC1=ht.LTC_FLOAT_1,i.rectAreaLTC2=ht.LTC_FLOAT_2;else i.rectAreaLTC1=ht.LTC_HALF_1,i.rectAreaLTC2=ht.LTC_HALF_2;i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let _=i.hash;if(_.directionalLength!==m||_.pointLength!==v||_.spotLength!==b||_.rectAreaLength!==p||_.hemiLength!==f||_.numDirectionalShadows!==R||_.numPointShadows!==w||_.numSpotShadows!==M||_.numSpotMaps!==E||_.numLightProbes!==C)i.directional.length=m,i.spot.length=b,i.rectArea.length=p,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=M+E-T,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=C,_.directionalLength=m,_.pointLength=v,_.spotLength=b,_.rectAreaLength=p,_.hemiLength=f,_.numDirectionalShadows=R,_.numPointShadows=w,_.numSpotShadows=M,_.numSpotMaps=E,_.numLightProbes=C,i.version=Em++}function l(c,u){let d=0,h=0,m=0,v=0,b=0,p=u.matrixWorldInverse;for(let f=0,R=c.length;f<R;f++){let w=c[f];if(w.isDirectionalLight){let M=i.directional[d];M.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),d++}else if(w.isSpotLight){let M=i.spot[m];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),m++}else if(w.isRectAreaLight){let M=i.rectArea[v];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(p),a.identity(),r.copy(w.matrixWorld),r.premultiply(p),a.extractRotation(r),M.halfWidth.set(w.width*0.5,0,0),M.halfHeight.set(0,w.height*0.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),v++}else if(w.isPointLight){let M=i.point[h];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(p),h++}else if(w.isHemisphereLight){let M=i.hemi[b];M.direction.setFromMatrixPosition(w.matrixWorld),M.direction.transformDirection(p),b++}}}return{setup:o,setupView:l,state:i}}function Fc(t){let e=new Am(t),n=[],i=[],s=[];function r(h){d.camera=h,n.length=0,i.length=0,s.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){s.push(h)}function c(){e.setup(n)}function u(h){e.setupView(n,h)}let d={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function wm(t){let e=new WeakMap;function n(s,r=0){let a=e.get(s),o;if(a===void 0)o=new Fc(t),e.set(s,[o]);else if(r>=a.length)o=new Fc(t),a.push(o);else o=a[r];return o}function i(){e=new WeakMap}return{get:n,dispose:i}}var Rm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Pm=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Im=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Oc=new re,is=new D,_o=new D;function Lm(t,e,n){let i=new $i,s=new Pt,r=new Pt,a=new ae,o=new Ya,l=new Za,c={},u=n.maxTextureSize,d={[bi]:Le,[Le]:bi,[ze]:ze},h=new Ye({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:Rm,fragmentShader:Cm}),m=h.clone();m.defines.HORIZONTAL_PASS=1;let v=new Re;v.setAttribute("position",new we(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let b=new Ne(v,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vi;let f=this.type;this.render=function(T,C,_){if(p.enabled===!1)return;if(p.autoUpdate===!1&&p.needsUpdate===!1)return;if(T.length===0)return;if(this.type===Ls)Tt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Vi;let S=t.getRenderTarget(),z=t.getActiveCubeFace(),A=t.getActiveMipmapLevel(),H=t.state;if(H.setBlending(an),H.buffers.depth.getReversed()===!0)H.buffers.color.setClear(0,0,0,0);else H.buffers.color.setClear(1,1,1,1);H.buffers.depth.setTest(!0),H.setScissorTest(!1);let J=f!==this.type;if(J)C.traverse(function(B){if(B.material)if(Array.isArray(B.material))B.material.forEach((V)=>V.needsUpdate=!0);else B.material.needsUpdate=!0});for(let B=0,V=T.length;B<V;B++){let X=T[B],U=X.shadow;if(U===void 0){Tt("WebGLShadowMap:",X,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);let Q=U.getFrameExtents();if(s.multiply(Q),r.copy(U.mapSize),s.x>u||s.y>u){if(s.x>u)r.x=Math.floor(u/Q.x),s.x=r.x*Q.x,U.mapSize.x=r.x;if(s.y>u)r.y=Math.floor(u/Q.y),s.y=r.y*Q.y,U.mapSize.y=r.y}let tt=t.state.buffers.depth.getReversed();if(U.camera._reversedDepth=tt,U.map===null||J===!0){if(U.map!==null){if(U.map.depthTexture!==null)U.map.depthTexture.dispose(),U.map.depthTexture=null;U.map.dispose()}if(this.type===Si){if(X.isPointLight){Tt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new qe(s.x,s.y,{format:Jn,type:Mn,minFilter:De,magFilter:De,generateMipmaps:!1}),U.map.texture.name=X.name+".shadowMap",U.map.depthTexture=new On(s.x,s.y,yn),U.map.depthTexture.name=X.name+".shadowMapDepth",U.map.depthTexture.format=Yn,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Nn,U.map.depthTexture.magFilter=Nn}else{if(X.isPointLight)U.map=new Mo(s.x),U.map.depthTexture=new Wa(s.x,Un);else U.map=new qe(s.x,s.y),U.map.depthTexture=new On(s.x,s.y,Un);if(U.map.depthTexture.name=X.name+".shadowMap",U.map.depthTexture.format=Yn,this.type===Vi)U.map.depthTexture.compareFunction=tt?Xs:Ws,U.map.depthTexture.minFilter=De,U.map.depthTexture.magFilter=De;else U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Nn,U.map.depthTexture.magFilter=Nn}U.camera.updateProjectionMatrix()}let ot=U.map.isWebGLCubeRenderTarget?6:1;for(let yt=0;yt<ot;yt++){if(U.map.isWebGLCubeRenderTarget)t.setRenderTarget(U.map,yt),t.clear();else{if(yt===0)t.setRenderTarget(U.map),t.clear();let vt=U.getViewport(yt);a.set(r.x*vt.x,r.y*vt.y,r.x*vt.z,r.y*vt.w),H.viewport(a)}if(X.isPointLight){let{camera:vt,matrix:oe}=U,$t=X.distance||vt.far;if($t!==vt.far)vt.far=$t,vt.updateProjectionMatrix();is.setFromMatrixPosition(X.matrixWorld),vt.position.copy(is),_o.copy(vt.position),_o.add(Pm[yt]),vt.up.copy(Im[yt]),vt.lookAt(_o),vt.updateMatrixWorld(),oe.makeTranslation(-is.x,-is.y,-is.z),Oc.multiplyMatrices(vt.projectionMatrix,vt.matrixWorldInverse),U._frustum.setFromProjectionMatrix(Oc,vt.coordinateSystem,vt.reversedDepth)}else U.updateMatrices(X);i=U.getFrustum(),M(C,_,U.camera,X,this.type)}if(U.isPointLightShadow!==!0&&this.type===Si)R(U,_);U.needsUpdate=!1}f=this.type,p.needsUpdate=!1,t.setRenderTarget(S,z,A)};function R(T,C){let _=e.update(b);if(h.defines.VSM_SAMPLES!==T.blurSamples)h.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0;if(T.mapPass===null)T.mapPass=new qe(s.x,s.y,{format:Jn,type:Mn});h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(C,null,_,h,b,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(C,null,_,m,b,null)}function w(T,C,_,S){let z=null,A=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(A!==void 0)z=A;else if(z=_.isPointLight===!0?l:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let H=z.uuid,J=C.uuid,B=c[H];if(B===void 0)B={},c[H]=B;let V=B[J];if(V===void 0)V=z.clone(),B[J]=V,C.addEventListener("dispose",E);z=V}if(z.visible=C.visible,z.wireframe=C.wireframe,S===Si)z.side=C.shadowSide!==null?C.shadowSide:C.side;else z.side=C.shadowSide!==null?C.shadowSide:d[C.side];if(z.alphaMap=C.alphaMap,z.alphaTest=C.alphaToCoverage===!0?0.5:C.alphaTest,z.map=C.map,z.clipShadows=C.clipShadows,z.clippingPlanes=C.clippingPlanes,z.clipIntersection=C.clipIntersection,z.displacementMap=C.displacementMap,z.displacementScale=C.displacementScale,z.displacementBias=C.displacementBias,z.wireframeLinewidth=C.wireframeLinewidth,z.linewidth=C.linewidth,_.isPointLight===!0&&z.isMeshDistanceMaterial===!0){let H=t.properties.get(z);H.light=_}return z}function M(T,C,_,S,z){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)){if((T.castShadow||T.receiveShadow&&z===Si)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);let J=e.update(T),B=T.material;if(Array.isArray(B)){let V=J.groups;for(let X=0,U=V.length;X<U;X++){let Q=V[X],tt=B[Q.materialIndex];if(tt&&tt.visible){let ot=w(T,tt,S,z);T.onBeforeShadow(t,T,C,_,J,ot,Q),t.renderBufferDirect(_,null,J,ot,T,Q),T.onAfterShadow(t,T,C,_,J,ot,Q)}}}else if(B.visible){let V=w(T,B,S,z);T.onBeforeShadow(t,T,C,_,J,V,null),t.renderBufferDirect(_,null,J,V,T,null),T.onAfterShadow(t,T,C,_,J,V,null)}}}let H=T.children;for(let J=0,B=H.length;J<B;J++)M(H[J],C,_,S,z)}function E(T){T.target.removeEventListener("dispose",E);for(let _ in c){let S=c[_],z=T.target.uuid;if(z in S)S[z].dispose(),delete S[z]}}}function Dm(t,e){function n(){let I=!1,it=new ae,q=null,rt=new ae(0,0,0,0);return{setMask:function(pt){if(q!==pt&&!I)t.colorMask(pt,pt,pt,pt),q=pt},setLocked:function(pt){I=pt},setClear:function(pt,K,at,Dt,le){if(le===!0)pt*=Dt,K*=Dt,at*=Dt;if(it.set(pt,K,at,Dt),rt.equals(it)===!1)t.clearColor(pt,K,at,Dt),rt.copy(it)},reset:function(){I=!1,q=null,rt.set(-1,0,0,0)}}}function i(){let I=!1,it=!1,q=null,rt=null,pt=null;return{setReversed:function(K){if(it!==K){let at=e.get("EXT_clip_control");if(K)at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT);else at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT);it=K;let Dt=pt;pt=null,this.setClear(Dt)}},getReversed:function(){return it},setTest:function(K){if(K)gt(t.DEPTH_TEST);else Rt(t.DEPTH_TEST)},setMask:function(K){if(q!==K&&!I)t.depthMask(K),q=K},setFunc:function(K){if(it)K=lc[K];if(rt!==K){switch(K){case Ll:t.depthFunc(t.NEVER);break;case Dl:t.depthFunc(t.ALWAYS);break;case Nl:t.depthFunc(t.LESS);break;case Gr:t.depthFunc(t.LEQUAL);break;case Ul:t.depthFunc(t.EQUAL);break;case Fl:t.depthFunc(t.GEQUAL);break;case Ol:t.depthFunc(t.GREATER);break;case Bl:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}rt=K}},setLocked:function(K){I=K},setClear:function(K){if(pt!==K){if(pt=K,it)K=1-K;t.clearDepth(K)}},reset:function(){I=!1,q=null,rt=null,pt=null,it=!1}}}function s(){let I=!1,it=null,q=null,rt=null,pt=null,K=null,at=null,Dt=null,le=null;return{setTest:function(ee){if(!I)if(ee)gt(t.STENCIL_TEST);else Rt(t.STENCIL_TEST)},setMask:function(ee){if(it!==ee&&!I)t.stencilMask(ee),it=ee},setFunc:function(ee,nn,un){if(q!==ee||rt!==nn||pt!==un)t.stencilFunc(ee,nn,un),q=ee,rt=nn,pt=un},setOp:function(ee,nn,un){if(K!==ee||at!==nn||Dt!==un)t.stencilOp(ee,nn,un),K=ee,at=nn,Dt=un},setLocked:function(ee){I=ee},setClear:function(ee){if(le!==ee)t.clearStencil(ee),le=ee},reset:function(){I=!1,it=null,q=null,rt=null,pt=null,K=null,at=null,Dt=null,le=null}}}let r=new n,a=new i,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},h={},m=new WeakMap,v=[],b=null,p=!1,f=null,R=null,w=null,M=null,E=null,T=null,C=null,_=new It(0,0,0),S=0,z=!1,A=null,H=null,J=null,B=null,V=null,X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,Q=0,tt=t.getParameter(t.VERSION);if(tt.indexOf("WebGL")!==-1)Q=parseFloat(/^WebGL (\d)/.exec(tt)[1]),U=Q>=1;else if(tt.indexOf("OpenGL ES")!==-1)Q=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),U=Q>=2;let ot=null,yt={},vt=t.getParameter(t.SCISSOR_BOX),oe=t.getParameter(t.VIEWPORT),$t=new ae().fromArray(vt),Z=new ae().fromArray(oe);function st(I,it,q,rt){let pt=new Uint8Array(4),K=t.createTexture();t.bindTexture(I,K),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let at=0;at<q;at++)if(I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY)t.texImage3D(it,0,t.RGBA,1,1,rt,0,t.RGBA,t.UNSIGNED_BYTE,pt);else t.texImage2D(it+at,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,pt);return K}let mt={};mt[t.TEXTURE_2D]=st(t.TEXTURE_2D,t.TEXTURE_2D,1),mt[t.TEXTURE_CUBE_MAP]=st(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[t.TEXTURE_2D_ARRAY]=st(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),mt[t.TEXTURE_3D]=st(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),gt(t.DEPTH_TEST),a.setFunc(Gr),ke(!1),ie(Or),gt(t.CULL_FACE),kt(an);function gt(I){if(u[I]!==!0)t.enable(I),u[I]=!0}function Rt(I){if(u[I]!==!1)t.disable(I),u[I]=!1}function Ht(I,it){if(h[I]!==it){if(t.bindFramebuffer(I,it),h[I]=it,I===t.DRAW_FRAMEBUFFER)h[t.FRAMEBUFFER]=it;if(I===t.FRAMEBUFFER)h[t.DRAW_FRAMEBUFFER]=it;return!0}return!1}function Bt(I,it){let q=v,rt=!1;if(I){if(q=m.get(it),q===void 0)q=[],m.set(it,q);let pt=I.textures;if(q.length!==pt.length||q[0]!==t.COLOR_ATTACHMENT0){for(let K=0,at=pt.length;K<at;K++)q[K]=t.COLOR_ATTACHMENT0+K;q.length=pt.length,rt=!0}}else if(q[0]!==t.BACK)q[0]=t.BACK,rt=!0;if(rt)t.drawBuffers(q)}function zt(I){if(b!==I)return t.useProgram(I),b=I,!0;return!1}let te={[Ei]:t.FUNC_ADD,[fl]:t.FUNC_SUBTRACT,[pl]:t.FUNC_REVERSE_SUBTRACT};te[ml]=t.MIN,te[gl]=t.MAX;let Vt={[_l]:t.ZERO,[xl]:t.ONE,[vl]:t.SRC_COLOR,[Ml]:t.SRC_ALPHA,[wl]:t.SRC_ALPHA_SATURATE,[Tl]:t.DST_COLOR,[bl]:t.DST_ALPHA,[yl]:t.ONE_MINUS_SRC_COLOR,[Sl]:t.ONE_MINUS_SRC_ALPHA,[Al]:t.ONE_MINUS_DST_COLOR,[El]:t.ONE_MINUS_DST_ALPHA,[Rl]:t.CONSTANT_COLOR,[Cl]:t.ONE_MINUS_CONSTANT_COLOR,[Pl]:t.CONSTANT_ALPHA,[Il]:t.ONE_MINUS_CONSTANT_ALPHA};function kt(I,it,q,rt,pt,K,at,Dt,le,ee){if(I===an){if(p===!0)Rt(t.BLEND),p=!1;return}if(p===!1)gt(t.BLEND),p=!0;if(I!==dl){if(I!==f||ee!==z){if(R!==Ei||E!==Ei)t.blendEquation(t.FUNC_ADD),R=Ei,E=Ei;if(ee)switch(I){case Wi:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Br:t.blendFunc(t.ONE,t.ONE);break;case zr:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case kr:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Ct("WebGLState: Invalid blending: ",I);break}else switch(I){case Wi:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Br:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case zr:Ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kr:Ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ct("WebGLState: Invalid blending: ",I);break}w=null,M=null,T=null,C=null,_.set(0,0,0),S=0,f=I,z=ee}return}if(pt=pt||it,K=K||q,at=at||rt,it!==R||pt!==E)t.blendEquationSeparate(te[it],te[pt]),R=it,E=pt;if(q!==w||rt!==M||K!==T||at!==C)t.blendFuncSeparate(Vt[q],Vt[rt],Vt[K],Vt[at]),w=q,M=rt,T=K,C=at;if(Dt.equals(_)===!1||le!==S)t.blendColor(Dt.r,Dt.g,Dt.b,le),_.copy(Dt),S=le;f=I,z=!1}function xe(I,it){I.side===ze?Rt(t.CULL_FACE):gt(t.CULL_FACE);let q=I.side===Le;if(it)q=!q;ke(q),I.blending===Wi&&I.transparent===!1?kt(an):kt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let rt=I.stencilWrite;if(o.setTest(rt),rt)o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass);ve(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?gt(t.SAMPLE_ALPHA_TO_COVERAGE):Rt(t.SAMPLE_ALPHA_TO_COVERAGE)}function ke(I){if(A!==I){if(I)t.frontFace(t.CW);else t.frontFace(t.CCW);A=I}}function ie(I){if(I!==hl){if(gt(t.CULL_FACE),I!==H)if(I===Or)t.cullFace(t.BACK);else if(I===ul)t.cullFace(t.FRONT);else t.cullFace(t.FRONT_AND_BACK)}else Rt(t.CULL_FACE);H=I}function Se(I){if(I!==J){if(U)t.lineWidth(I);J=I}}function ve(I,it,q){if(I){if(gt(t.POLYGON_OFFSET_FILL),B!==it||V!==q){if(B=it,V=q,a.getReversed())it=-it;t.polygonOffset(it,q)}}else Rt(t.POLYGON_OFFSET_FILL)}function pe(I){if(I)gt(t.SCISSOR_TEST);else Rt(t.SCISSOR_TEST)}function L(I){if(I===void 0)I=t.TEXTURE0+X-1;if(ot!==I)t.activeTexture(I),ot=I}function Ge(I,it,q){if(q===void 0)if(ot===null)q=t.TEXTURE0+X-1;else q=ot;let rt=yt[q];if(rt===void 0)rt={type:void 0,texture:void 0},yt[q]=rt;if(rt.type!==I||rt.texture!==it){if(ot!==q)t.activeTexture(q),ot=q;t.bindTexture(I,it||mt[I]),rt.type=I,rt.texture=it}}function qt(){let I=yt[ot];if(I!==void 0&&I.type!==void 0)t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0}function se(){try{t.compressedTexImage2D(...arguments)}catch(I){Ct("WebGLState:",I)}}function y(){try{t.compressedTexImage3D(...arguments)}catch(I){Ct("WebGLState:",I)}}function g(){try{t.texSubImage2D(...arguments)}catch(I){Ct("WebGLState:",I)}}function P(){try{t.texSubImage3D(...arguments)}catch(I){Ct("WebGLState:",I)}}function G(){try{t.compressedTexSubImage2D(...arguments)}catch(I){Ct("WebGLState:",I)}}function j(){try{t.compressedTexSubImage3D(...arguments)}catch(I){Ct("WebGLState:",I)}}function et(){try{t.texStorage2D(...arguments)}catch(I){Ct("WebGLState:",I)}}function lt(){try{t.texStorage3D(...arguments)}catch(I){Ct("WebGLState:",I)}}function W(){try{t.texImage2D(...arguments)}catch(I){Ct("WebGLState:",I)}}function Y(){try{t.texImage3D(...arguments)}catch(I){Ct("WebGLState:",I)}}function ft(I){if(d[I]!==void 0)return d[I];else return t.getParameter(I)}function St(I,it){if(d[I]!==it)t.pixelStorei(I,it),d[I]=it}function ct(I){if($t.equals(I)===!1)t.scissor(I.x,I.y,I.z,I.w),$t.copy(I)}function nt(I){if(Z.equals(I)===!1)t.viewport(I.x,I.y,I.z,I.w),Z.copy(I)}function At(I,it){let q=c.get(it);if(q===void 0)q=new WeakMap,c.set(it,q);let rt=q.get(I);if(rt===void 0)rt=t.getUniformBlockIndex(it,I.name),q.set(I,rt)}function wt(I,it){let rt=c.get(it).get(I);if(l.get(it)!==rt)t.uniformBlockBinding(it,rt,I.__bindingPointIndex),l.set(it,rt)}function Xt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},d={},ot=null,yt={},h={},m=new WeakMap,v=[],b=null,p=!1,f=null,R=null,w=null,M=null,E=null,T=null,C=null,_=new It(0,0,0),S=0,z=!1,A=null,H=null,J=null,B=null,V=null,$t.set(0,0,t.canvas.width,t.canvas.height),Z.set(0,0,t.canvas.width,t.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:gt,disable:Rt,bindFramebuffer:Ht,drawBuffers:Bt,useProgram:zt,setBlending:kt,setMaterial:xe,setFlipSided:ke,setCullFace:ie,setLineWidth:Se,setPolygonOffset:ve,setScissorTest:pe,activeTexture:L,bindTexture:Ge,unbindTexture:qt,compressedTexImage2D:se,compressedTexImage3D:y,texImage2D:W,texImage3D:Y,pixelStorei:St,getParameter:ft,updateUBOMapping:At,uniformBlockBinding:wt,texStorage2D:et,texStorage3D:lt,texSubImage2D:g,texSubImage3D:P,compressedTexSubImage2D:G,compressedTexSubImage3D:j,scissor:ct,viewport:nt,reset:Xt}}function Nm(t,e,n,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pt,u=new WeakMap,d=new Set,h,m=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(y){}function b(y,g){return v?new OffscreenCanvas(y,g):Hi("canvas")}function p(y,g,P){let G=1,j=se(y);if(j.width>P||j.height>P)G=P/Math.max(j.width,j.height);if(G<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){let et=Math.floor(G*j.width),lt=Math.floor(G*j.height);if(h===void 0)h=b(et,lt);let W=g?b(et,lt):h;return W.width=et,W.height=lt,W.getContext("2d").drawImage(y,0,0,et,lt),Tt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+et+"x"+lt+")."),W}else{if("data"in y)Tt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+").");return y}return y}function f(y){return y.generateMipmaps}function R(y){t.generateMipmap(y)}function w(y){if(y.isWebGLCubeRenderTarget)return t.TEXTURE_CUBE_MAP;if(y.isWebGL3DRenderTarget)return t.TEXTURE_3D;if(y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture)return t.TEXTURE_2D_ARRAY;return t.TEXTURE_2D}function M(y,g,P,G,j,et=!1){if(y!==null){if(t[y]!==void 0)return t[y];Tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let lt;if(G){if(lt=e.get("EXT_texture_norm16"),!lt)Tt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let W=g;if(g===t.RED){if(P===t.FLOAT)W=t.R32F;if(P===t.HALF_FLOAT)W=t.R16F;if(P===t.UNSIGNED_BYTE)W=t.R8;if(P===t.UNSIGNED_SHORT&&lt)W=lt.R16_EXT;if(P===t.SHORT&&lt)W=lt.R16_SNORM_EXT}if(g===t.RED_INTEGER){if(P===t.UNSIGNED_BYTE)W=t.R8UI;if(P===t.UNSIGNED_SHORT)W=t.R16UI;if(P===t.UNSIGNED_INT)W=t.R32UI;if(P===t.BYTE)W=t.R8I;if(P===t.SHORT)W=t.R16I;if(P===t.INT)W=t.R32I}if(g===t.RG){if(P===t.FLOAT)W=t.RG32F;if(P===t.HALF_FLOAT)W=t.RG16F;if(P===t.UNSIGNED_BYTE)W=t.RG8;if(P===t.UNSIGNED_SHORT&&lt)W=lt.RG16_EXT;if(P===t.SHORT&&lt)W=lt.RG16_SNORM_EXT}if(g===t.RG_INTEGER){if(P===t.UNSIGNED_BYTE)W=t.RG8UI;if(P===t.UNSIGNED_SHORT)W=t.RG16UI;if(P===t.UNSIGNED_INT)W=t.RG32UI;if(P===t.BYTE)W=t.RG8I;if(P===t.SHORT)W=t.RG16I;if(P===t.INT)W=t.RG32I}if(g===t.RGB_INTEGER){if(P===t.UNSIGNED_BYTE)W=t.RGB8UI;if(P===t.UNSIGNED_SHORT)W=t.RGB16UI;if(P===t.UNSIGNED_INT)W=t.RGB32UI;if(P===t.BYTE)W=t.RGB8I;if(P===t.SHORT)W=t.RGB16I;if(P===t.INT)W=t.RGB32I}if(g===t.RGBA_INTEGER){if(P===t.UNSIGNED_BYTE)W=t.RGBA8UI;if(P===t.UNSIGNED_SHORT)W=t.RGBA16UI;if(P===t.UNSIGNED_INT)W=t.RGBA32UI;if(P===t.BYTE)W=t.RGBA8I;if(P===t.SHORT)W=t.RGBA16I;if(P===t.INT)W=t.RGBA32I}if(g===t.RGB){if(P===t.UNSIGNED_SHORT&&lt)W=lt.RGB16_EXT;if(P===t.SHORT&&lt)W=lt.RGB16_SNORM_EXT;if(P===t.UNSIGNED_INT_5_9_9_9_REV)W=t.RGB9_E5;if(P===t.UNSIGNED_INT_10F_11F_11F_REV)W=t.R11F_G11F_B10F}if(g===t.RGBA){let Y=et?Da:Gt.getTransfer(j);if(P===t.FLOAT)W=t.RGBA32F;if(P===t.HALF_FLOAT)W=t.RGBA16F;if(P===t.UNSIGNED_BYTE)W=Y===Qt?t.SRGB8_ALPHA8:t.RGBA8;if(P===t.UNSIGNED_SHORT&&lt)W=lt.RGBA16_EXT;if(P===t.SHORT&&lt)W=lt.RGBA16_SNORM_EXT;if(P===t.UNSIGNED_SHORT_4_4_4_4)W=t.RGBA4;if(P===t.UNSIGNED_SHORT_5_5_5_1)W=t.RGB5_A1}if(W===t.R16F||W===t.R32F||W===t.RG16F||W===t.RG32F||W===t.RGBA16F||W===t.RGBA32F)e.get("EXT_color_buffer_float");return W}function E(y,g){let P;if(y){if(g===null||g===Un||g===Ai)P=t.DEPTH24_STENCIL8;else if(g===yn)P=t.DEPTH32F_STENCIL8;else if(g===Yi)P=t.DEPTH24_STENCIL8,Tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(g===null||g===Un||g===Ai)P=t.DEPTH_COMPONENT24;else if(g===yn)P=t.DEPTH_COMPONENT32F;else if(g===Yi)P=t.DEPTH_COMPONENT16;return P}function T(y,g){if(f(y)===!0||y.isFramebufferTexture&&y.minFilter!==Nn&&y.minFilter!==De)return Math.log2(Math.max(g.width,g.height))+1;else if(y.mipmaps!==void 0&&y.mipmaps.length>0)return y.mipmaps.length;else if(y.isCompressedTexture&&Array.isArray(y.image))return g.mipmaps.length;else return 1}function C(y){let g=y.target;if(g.removeEventListener("dispose",C),S(g),g.isVideoTexture)u.delete(g);if(g.isHTMLTexture)d.delete(g)}function _(y){let g=y.target;g.removeEventListener("dispose",_),A(g)}function S(y){let g=i.get(y);if(g.__webglInit===void 0)return;let P=y.source,G=m.get(P);if(G){let j=G[g.__cacheKey];if(j.usedTimes--,j.usedTimes===0)z(y);if(Object.keys(G).length===0)m.delete(P)}i.remove(y)}function z(y){let g=i.get(y);t.deleteTexture(g.__webglTexture);let P=y.source,G=m.get(P);delete G[g.__cacheKey],a.memory.textures--}function A(y){let g=i.get(y);if(y.depthTexture)y.depthTexture.dispose(),i.remove(y.depthTexture);if(y.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(g.__webglFramebuffer[G]))for(let j=0;j<g.__webglFramebuffer[G].length;j++)t.deleteFramebuffer(g.__webglFramebuffer[G][j]);else t.deleteFramebuffer(g.__webglFramebuffer[G]);if(g.__webglDepthbuffer)t.deleteRenderbuffer(g.__webglDepthbuffer[G])}else{if(Array.isArray(g.__webglFramebuffer))for(let G=0;G<g.__webglFramebuffer.length;G++)t.deleteFramebuffer(g.__webglFramebuffer[G]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer)t.deleteRenderbuffer(g.__webglDepthbuffer);if(g.__webglMultisampledFramebuffer)t.deleteFramebuffer(g.__webglMultisampledFramebuffer);if(g.__webglColorRenderbuffer){for(let G=0;G<g.__webglColorRenderbuffer.length;G++)if(g.__webglColorRenderbuffer[G])t.deleteRenderbuffer(g.__webglColorRenderbuffer[G])}if(g.__webglDepthRenderbuffer)t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let P=y.textures;for(let G=0,j=P.length;G<j;G++){let et=i.get(P[G]);if(et.__webglTexture)t.deleteTexture(et.__webglTexture),a.memory.textures--;i.remove(P[G])}i.remove(y)}let H=0;function J(){H=0}function B(){return H}function V(y){H=y}function X(){let y=H;if(y>=s.maxTextures)Tt("WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures);return H+=1,y}function U(y){let g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function Q(y,g){let P=i.get(y);if(y.isVideoTexture)Ge(y);if(y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&P.__version!==y.version){let G=y.image;if(G===null)Tt("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Tt("WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(P,y,g);return}}else if(y.isExternalTexture)P.__webglTexture=y.sourceTexture?y.sourceTexture:null;n.bindTexture(t.TEXTURE_2D,P.__webglTexture,t.TEXTURE0+g)}function tt(y,g){let P=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&P.__version!==y.version){Rt(P,y,g);return}else if(y.isExternalTexture)P.__webglTexture=y.sourceTexture?y.sourceTexture:null;n.bindTexture(t.TEXTURE_2D_ARRAY,P.__webglTexture,t.TEXTURE0+g)}function ot(y,g){let P=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&P.__version!==y.version){Rt(P,y,g);return}n.bindTexture(t.TEXTURE_3D,P.__webglTexture,t.TEXTURE0+g)}function yt(y,g){let P=i.get(y);if(y.isCubeDepthTexture!==!0&&y.version>0&&P.__version!==y.version){Ht(P,y,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+g)}let vt={[Hl]:t.REPEAT,[Us]:t.CLAMP_TO_EDGE,[Vl]:t.MIRRORED_REPEAT},oe={[Nn]:t.NEAREST,[Wl]:t.NEAREST_MIPMAP_NEAREST,[qi]:t.NEAREST_MIPMAP_LINEAR,[De]:t.LINEAR,[Fs]:t.LINEAR_MIPMAP_NEAREST,[qn]:t.LINEAR_MIPMAP_LINEAR},$t={[Ql]:t.NEVER,[sc]:t.ALWAYS,[tc]:t.LESS,[Ws]:t.LEQUAL,[ec]:t.EQUAL,[Xs]:t.GEQUAL,[nc]:t.GREATER,[ic]:t.NOTEQUAL};function Z(y,g){if(g.type===yn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===De||g.magFilter===Fs||g.magFilter===qi||g.magFilter===qn||g.minFilter===De||g.minFilter===Fs||g.minFilter===qi||g.minFilter===qn))Tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(t.texParameteri(y,t.TEXTURE_WRAP_S,vt[g.wrapS]),t.texParameteri(y,t.TEXTURE_WRAP_T,vt[g.wrapT]),y===t.TEXTURE_3D||y===t.TEXTURE_2D_ARRAY)t.texParameteri(y,t.TEXTURE_WRAP_R,vt[g.wrapR]);if(t.texParameteri(y,t.TEXTURE_MAG_FILTER,oe[g.magFilter]),t.texParameteri(y,t.TEXTURE_MIN_FILTER,oe[g.minFilter]),g.compareFunction)t.texParameteri(y,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(y,t.TEXTURE_COMPARE_FUNC,$t[g.compareFunction]);if(e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Nn)return;if(g.minFilter!==qi&&g.minFilter!==qn)return;if(g.type===yn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){let P=e.get("EXT_texture_filter_anisotropic");t.texParameterf(y,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function st(y,g){let P=!1;if(y.__webglInit===void 0)y.__webglInit=!0,g.addEventListener("dispose",C);let G=g.source,j=m.get(G);if(j===void 0)j={},m.set(G,j);let et=U(g);if(et!==y.__cacheKey){if(j[et]===void 0)j[et]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,P=!0;j[et].usedTimes++;let lt=j[y.__cacheKey];if(lt!==void 0){if(j[y.__cacheKey].usedTimes--,lt.usedTimes===0)z(g)}y.__cacheKey=et,y.__webglTexture=j[et].texture}return P}function mt(y,g,P){return Math.floor(Math.floor(y/P)/g)}function gt(y,g,P,G){let et=y.updateRanges;if(et.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,g.width,g.height,P,G,g.data);else{et.sort((St,ct)=>St.start-ct.start);let lt=0;for(let St=1;St<et.length;St++){let ct=et[lt],nt=et[St],At=ct.start+ct.count,wt=mt(nt.start,g.width,4),Xt=mt(ct.start,g.width,4);if(nt.start<=At+1&&wt===Xt&&mt(nt.start+nt.count-1,g.width,4)===wt)ct.count=Math.max(ct.count,nt.start+nt.count-ct.start);else++lt,et[lt]=nt}et.length=lt+1;let W=n.getParameter(t.UNPACK_ROW_LENGTH),Y=n.getParameter(t.UNPACK_SKIP_PIXELS),ft=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,g.width);for(let St=0,ct=et.length;St<ct;St++){let nt=et[St],At=Math.floor(nt.start/4),wt=Math.ceil(nt.count/4),Xt=At%g.width,I=Math.floor(At/g.width),it=wt,q=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Xt),n.pixelStorei(t.UNPACK_SKIP_ROWS,I),n.texSubImage2D(t.TEXTURE_2D,0,Xt,I,it,1,P,G,g.data)}y.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,W),n.pixelStorei(t.UNPACK_SKIP_PIXELS,Y),n.pixelStorei(t.UNPACK_SKIP_ROWS,ft)}}function Rt(y,g,P){let G=t.TEXTURE_2D;if(g.isDataArrayTexture||g.isCompressedArrayTexture)G=t.TEXTURE_2D_ARRAY;if(g.isData3DTexture)G=t.TEXTURE_3D;let j=st(y,g),et=g.source;n.bindTexture(G,y.__webglTexture,t.TEXTURE0+P);let lt=i.get(et);if(et.version!==lt.__version||j===!0){if(n.activeTexture(t.TEXTURE0+P),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let q=Gt.getPrimaries(Gt.workingColorSpace),rt=g.colorSpace===$n?null:Gt.getPrimaries(g.colorSpace),pt=g.colorSpace===$n||q===rt?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt)}n.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment);let Y=p(g.image,!1,s.maxTextureSize);Y=qt(g,Y);let ft=r.convert(g.format,g.colorSpace),St=r.convert(g.type),ct=M(g.internalFormat,ft,St,g.normalized,g.colorSpace,g.isVideoTexture);Z(G,g);let nt,At=g.mipmaps,wt=g.isVideoTexture!==!0,Xt=lt.__version===void 0||j===!0,I=et.dataReady,it=T(g,Y);if(g.isDepthTexture){if(ct=E(g.format===Zn,g.type),Xt)if(wt)n.texStorage2D(t.TEXTURE_2D,1,ct,Y.width,Y.height);else n.texImage2D(t.TEXTURE_2D,0,ct,Y.width,Y.height,0,ft,St,null)}else if(g.isDataTexture)if(At.length>0){if(wt&&Xt)n.texStorage2D(t.TEXTURE_2D,it,ct,At[0].width,At[0].height);for(let q=0,rt=At.length;q<rt;q++)if(nt=At[q],wt){if(I)n.texSubImage2D(t.TEXTURE_2D,q,0,0,nt.width,nt.height,ft,St,nt.data)}else n.texImage2D(t.TEXTURE_2D,q,ct,nt.width,nt.height,0,ft,St,nt.data);g.generateMipmaps=!1}else if(wt){if(Xt)n.texStorage2D(t.TEXTURE_2D,it,ct,Y.width,Y.height);if(I)gt(g,Y,ft,St)}else n.texImage2D(t.TEXTURE_2D,0,ct,Y.width,Y.height,0,ft,St,Y.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){if(wt&&Xt)n.texStorage3D(t.TEXTURE_2D_ARRAY,it,ct,At[0].width,At[0].height,Y.depth);for(let q=0,rt=At.length;q<rt;q++)if(nt=At[q],g.format!==on)if(ft!==null)if(wt){if(I)if(g.layerUpdates.size>0){let pt=ho(nt.width,nt.height,g.format,g.type);for(let K of g.layerUpdates){let at=nt.data.subarray(K*pt/nt.data.BYTES_PER_ELEMENT,(K+1)*pt/nt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,K,nt.width,nt.height,1,ft,at)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,nt.width,nt.height,Y.depth,ft,nt.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,q,ct,nt.width,nt.height,Y.depth,0,nt.data,0,0);else Tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(wt){if(I)n.texSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,nt.width,nt.height,Y.depth,ft,St,nt.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,q,ct,nt.width,nt.height,Y.depth,0,ft,St,nt.data)}else{if(wt&&Xt)n.texStorage2D(t.TEXTURE_2D,it,ct,At[0].width,At[0].height);for(let q=0,rt=At.length;q<rt;q++)if(nt=At[q],g.format!==on)if(ft!==null)if(wt){if(I)n.compressedTexSubImage2D(t.TEXTURE_2D,q,0,0,nt.width,nt.height,ft,nt.data)}else n.compressedTexImage2D(t.TEXTURE_2D,q,ct,nt.width,nt.height,0,nt.data);else Tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(wt){if(I)n.texSubImage2D(t.TEXTURE_2D,q,0,0,nt.width,nt.height,ft,St,nt.data)}else n.texImage2D(t.TEXTURE_2D,q,ct,nt.width,nt.height,0,ft,St,nt.data)}else if(g.isDataArrayTexture)if(wt){if(Xt)n.texStorage3D(t.TEXTURE_2D_ARRAY,it,ct,Y.width,Y.height,Y.depth);if(I)if(g.layerUpdates.size>0){let q=ho(Y.width,Y.height,g.format,g.type);for(let rt of g.layerUpdates){let pt=Y.data.subarray(rt*q/Y.data.BYTES_PER_ELEMENT,(rt+1)*q/Y.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,rt,Y.width,Y.height,1,ft,St,pt)}g.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,ft,St,Y.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ct,Y.width,Y.height,Y.depth,0,ft,St,Y.data);else if(g.isData3DTexture)if(wt){if(Xt)n.texStorage3D(t.TEXTURE_3D,it,ct,Y.width,Y.height,Y.depth);if(I)n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,ft,St,Y.data)}else n.texImage3D(t.TEXTURE_3D,0,ct,Y.width,Y.height,Y.depth,0,ft,St,Y.data);else if(g.isFramebufferTexture){if(Xt)if(wt)n.texStorage2D(t.TEXTURE_2D,it,ct,Y.width,Y.height);else{let{width:q,height:rt}=Y;for(let pt=0;pt<it;pt++)n.texImage2D(t.TEXTURE_2D,pt,ct,q,rt,0,ft,St,null),q>>=1,rt>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in t){let q=t.canvas;if(!q.hasAttribute("layoutsubtree"))q.setAttribute("layoutsubtree","true");if(Y.parentNode!==q){q.appendChild(Y),d.add(g),q.onpaint=(rt)=>{let pt=rt.changedElements;for(let K of d)if(pt.includes(K.image))K.needsUpdate=!0},q.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,Y);else{let{RGBA:pt,RGBA:K,UNSIGNED_BYTE:at}=t;t.texElementImage2D(t.TEXTURE_2D,0,pt,K,at,Y)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(At.length>0){if(wt&&Xt){let q=se(At[0]);n.texStorage2D(t.TEXTURE_2D,it,ct,q.width,q.height)}for(let q=0,rt=At.length;q<rt;q++)if(nt=At[q],wt){if(I)n.texSubImage2D(t.TEXTURE_2D,q,0,0,ft,St,nt)}else n.texImage2D(t.TEXTURE_2D,q,ct,ft,St,nt);g.generateMipmaps=!1}else if(wt){if(Xt){let q=se(Y);n.texStorage2D(t.TEXTURE_2D,it,ct,q.width,q.height)}if(I)n.texSubImage2D(t.TEXTURE_2D,0,0,0,ft,St,Y)}else n.texImage2D(t.TEXTURE_2D,0,ct,ft,St,Y);if(f(g))R(G);if(lt.__version=et.version,g.onUpdate)g.onUpdate(g)}y.__version=g.version}function Ht(y,g,P){if(g.image.length!==6)return;let G=st(y,g),j=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,y.__webglTexture,t.TEXTURE0+P);let et=i.get(j);if(j.version!==et.__version||G===!0){n.activeTexture(t.TEXTURE0+P);let lt=Gt.getPrimaries(Gt.workingColorSpace),W=g.colorSpace===$n?null:Gt.getPrimaries(g.colorSpace),Y=g.colorSpace===$n||lt===W?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);let ft=g.isCompressedTexture||g.image[0].isCompressedTexture,St=g.image[0]&&g.image[0].isDataTexture,ct=[];for(let K=0;K<6;K++){if(!ft&&!St)ct[K]=p(g.image[K],!0,s.maxCubemapSize);else ct[K]=St?g.image[K].image:g.image[K];ct[K]=qt(g,ct[K])}let nt=ct[0],At=r.convert(g.format,g.colorSpace),wt=r.convert(g.type),Xt=M(g.internalFormat,At,wt,g.normalized,g.colorSpace),I=g.isVideoTexture!==!0,it=et.__version===void 0||G===!0,q=j.dataReady,rt=T(g,nt);Z(t.TEXTURE_CUBE_MAP,g);let pt;if(ft){if(I&&it)n.texStorage2D(t.TEXTURE_CUBE_MAP,rt,Xt,nt.width,nt.height);for(let K=0;K<6;K++){pt=ct[K].mipmaps;for(let at=0;at<pt.length;at++){let Dt=pt[at];if(g.format!==on)if(At!==null)if(I){if(q)n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,at,0,0,Dt.width,Dt.height,At,Dt.data)}else n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,at,Xt,Dt.width,Dt.height,0,Dt.data);else Tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(I){if(q)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,at,0,0,Dt.width,Dt.height,At,wt,Dt.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,at,Xt,Dt.width,Dt.height,0,At,wt,Dt.data)}}}else{if(pt=g.mipmaps,I&&it){if(pt.length>0)rt++;let K=se(ct[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,rt,Xt,K.width,K.height)}for(let K=0;K<6;K++)if(St){if(I){if(q)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ct[K].width,ct[K].height,At,wt,ct[K].data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Xt,ct[K].width,ct[K].height,0,At,wt,ct[K].data);for(let at=0;at<pt.length;at++){let le=pt[at].image[K].image;if(I){if(q)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,at+1,0,0,le.width,le.height,At,wt,le.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,at+1,Xt,le.width,le.height,0,At,wt,le.data)}}else{if(I){if(q)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,At,wt,ct[K])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Xt,At,wt,ct[K]);for(let at=0;at<pt.length;at++){let Dt=pt[at];if(I){if(q)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,at+1,0,0,At,wt,Dt.image[K])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,at+1,Xt,At,wt,Dt.image[K])}}}if(f(g))R(t.TEXTURE_CUBE_MAP);if(et.__version=j.version,g.onUpdate)g.onUpdate(g)}y.__version=g.version}function Bt(y,g,P,G,j,et){let lt=r.convert(P.format,P.colorSpace),W=r.convert(P.type),Y=M(P.internalFormat,lt,W,P.normalized,P.colorSpace),ft=i.get(g),St=i.get(P);if(St.__renderTarget=g,!ft.__hasExternalTextures){let ct=Math.max(1,g.width>>et),nt=Math.max(1,g.height>>et);if(j===t.TEXTURE_3D||j===t.TEXTURE_2D_ARRAY)n.texImage3D(j,et,Y,ct,nt,g.depth,0,lt,W,null);else n.texImage2D(j,et,Y,ct,nt,0,lt,W,null)}if(n.bindFramebuffer(t.FRAMEBUFFER,y),L(g))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,G,j,St.__webglTexture,0,pe(g));else if(j===t.TEXTURE_2D||j>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)t.framebufferTexture2D(t.FRAMEBUFFER,G,j,St.__webglTexture,et);n.bindFramebuffer(t.FRAMEBUFFER,null)}function zt(y,g,P){if(t.bindRenderbuffer(t.RENDERBUFFER,y),g.depthBuffer){let G=g.depthTexture,j=G&&G.isDepthTexture?G.type:null,et=E(g.stencilBuffer,j),lt=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(L(g))o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,pe(g),et,g.width,g.height);else if(P)t.renderbufferStorageMultisample(t.RENDERBUFFER,pe(g),et,g.width,g.height);else t.renderbufferStorage(t.RENDERBUFFER,et,g.width,g.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,lt,t.RENDERBUFFER,y)}else{let G=g.textures;for(let j=0;j<G.length;j++){let et=G[j],lt=r.convert(et.format,et.colorSpace),W=r.convert(et.type),Y=M(et.internalFormat,lt,W,et.normalized,et.colorSpace);if(L(g))o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,pe(g),Y,g.width,g.height);else if(P)t.renderbufferStorageMultisample(t.RENDERBUFFER,pe(g),Y,g.width,g.height);else t.renderbufferStorage(t.RENDERBUFFER,Y,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function te(y,g,P){let G=g.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=i.get(g.depthTexture);if(j.__renderTarget=g,!j.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0;if(G){if(j.__webglInit===void 0)j.__webglInit=!0,g.depthTexture.addEventListener("dispose",C);if(j.__webglTexture===void 0){j.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture),Z(t.TEXTURE_CUBE_MAP,g.depthTexture);let ft=r.convert(g.depthTexture.format),St=r.convert(g.depthTexture.type),ct;if(g.depthTexture.format===Yn)ct=t.DEPTH_COMPONENT24;else if(g.depthTexture.format===Zn)ct=t.DEPTH24_STENCIL8;for(let nt=0;nt<6;nt++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,ct,g.width,g.height,0,ft,St,null)}}else Q(g.depthTexture,0);let et=j.__webglTexture,lt=pe(g),W=G?t.TEXTURE_CUBE_MAP_POSITIVE_X+P:t.TEXTURE_2D,Y=g.depthTexture.format===Zn?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(g.depthTexture.format===Yn)if(L(g))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,W,et,0,lt);else t.framebufferTexture2D(t.FRAMEBUFFER,Y,W,et,0);else if(g.depthTexture.format===Zn)if(L(g))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,W,et,0,lt);else t.framebufferTexture2D(t.FRAMEBUFFER,Y,W,et,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Vt(y){let g=i.get(y),P=y.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==y.depthTexture){let G=y.depthTexture;if(g.__depthDisposeCallback)g.__depthDisposeCallback();if(G){let j=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,G.removeEventListener("dispose",j)};G.addEventListener("dispose",j),g.__depthDisposeCallback=j}g.__boundDepthTexture=G}if(y.depthTexture&&!g.__autoAllocateDepthBuffer)if(P)for(let G=0;G<6;G++)te(g.__webglFramebuffer[G],y,G);else{let G=y.texture.mipmaps;if(G&&G.length>0)te(g.__webglFramebuffer[0],y,0);else te(g.__webglFramebuffer,y,0)}else if(P){g.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[G]),g.__webglDepthbuffer[G]===void 0)g.__webglDepthbuffer[G]=t.createRenderbuffer(),zt(g.__webglDepthbuffer[G],y,!1);else{let j=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,et=g.__webglDepthbuffer[G];t.bindRenderbuffer(t.RENDERBUFFER,et),t.framebufferRenderbuffer(t.FRAMEBUFFER,j,t.RENDERBUFFER,et)}}else{let G=y.texture.mipmaps;if(G&&G.length>0)n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[0]);else n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer);if(g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=t.createRenderbuffer(),zt(g.__webglDepthbuffer,y,!1);else{let j=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,et=g.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,et),t.framebufferRenderbuffer(t.FRAMEBUFFER,j,t.RENDERBUFFER,et)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function kt(y,g,P){let G=i.get(y);if(g!==void 0)Bt(G.__webglFramebuffer,y,y.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0);if(P!==void 0)Vt(y)}function xe(y){let g=y.texture,P=i.get(y),G=i.get(g);y.addEventListener("dispose",_);let j=y.textures,et=y.isWebGLCubeRenderTarget===!0,lt=j.length>1;if(!lt){if(G.__webglTexture===void 0)G.__webglTexture=t.createTexture();G.__version=g.version,a.memory.textures++}if(et){P.__webglFramebuffer=[];for(let W=0;W<6;W++)if(g.mipmaps&&g.mipmaps.length>0){P.__webglFramebuffer[W]=[];for(let Y=0;Y<g.mipmaps.length;Y++)P.__webglFramebuffer[W][Y]=t.createFramebuffer()}else P.__webglFramebuffer[W]=t.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){P.__webglFramebuffer=[];for(let W=0;W<g.mipmaps.length;W++)P.__webglFramebuffer[W]=t.createFramebuffer()}else P.__webglFramebuffer=t.createFramebuffer();if(lt)for(let W=0,Y=j.length;W<Y;W++){let ft=i.get(j[W]);if(ft.__webglTexture===void 0)ft.__webglTexture=t.createTexture(),a.memory.textures++}if(y.samples>0&&L(y)===!1){P.__webglMultisampledFramebuffer=t.createFramebuffer(),P.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let W=0;W<j.length;W++){let Y=j[W];P.__webglColorRenderbuffer[W]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,P.__webglColorRenderbuffer[W]);let ft=r.convert(Y.format,Y.colorSpace),St=r.convert(Y.type),ct=M(Y.internalFormat,ft,St,Y.normalized,Y.colorSpace,y.isXRRenderTarget===!0),nt=pe(y);t.renderbufferStorageMultisample(t.RENDERBUFFER,nt,ct,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+W,t.RENDERBUFFER,P.__webglColorRenderbuffer[W])}if(t.bindRenderbuffer(t.RENDERBUFFER,null),y.depthBuffer)P.__webglDepthRenderbuffer=t.createRenderbuffer(),zt(P.__webglDepthRenderbuffer,y,!0);n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(et){n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture),Z(t.TEXTURE_CUBE_MAP,g);for(let W=0;W<6;W++)if(g.mipmaps&&g.mipmaps.length>0)for(let Y=0;Y<g.mipmaps.length;Y++)Bt(P.__webglFramebuffer[W][Y],y,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+W,Y);else Bt(P.__webglFramebuffer[W],y,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);if(f(g))R(t.TEXTURE_CUBE_MAP);n.unbindTexture()}else if(lt){for(let W=0,Y=j.length;W<Y;W++){let ft=j[W],St=i.get(ft),ct=t.TEXTURE_2D;if(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)ct=y.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(n.bindTexture(ct,St.__webglTexture),Z(ct,ft),Bt(P.__webglFramebuffer,y,ft,t.COLOR_ATTACHMENT0+W,ct,0),f(ft))R(ct)}n.unbindTexture()}else{let W=t.TEXTURE_2D;if(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)W=y.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(n.bindTexture(W,G.__webglTexture),Z(W,g),g.mipmaps&&g.mipmaps.length>0)for(let Y=0;Y<g.mipmaps.length;Y++)Bt(P.__webglFramebuffer[Y],y,g,t.COLOR_ATTACHMENT0,W,Y);else Bt(P.__webglFramebuffer,y,g,t.COLOR_ATTACHMENT0,W,0);if(f(g))R(W);n.unbindTexture()}if(y.depthBuffer)Vt(y)}function ke(y){let g=y.textures;for(let P=0,G=g.length;P<G;P++){let j=g[P];if(f(j)){let et=w(y),lt=i.get(j).__webglTexture;n.bindTexture(et,lt),R(et),n.unbindTexture()}}}let ie=[],Se=[];function ve(y){if(y.samples>0){if(L(y)===!1){let{textures:g,width:P,height:G}=y,j=t.COLOR_BUFFER_BIT,et=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,lt=i.get(y),W=g.length>1;if(W)for(let ft=0;ft<g.length;ft++)n.bindFramebuffer(t.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ft,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,lt.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ft,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer);let Y=y.texture.mipmaps;if(Y&&Y.length>0)n.bindFramebuffer(t.DRAW_FRAMEBUFFER,lt.__webglFramebuffer[0]);else n.bindFramebuffer(t.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let ft=0;ft<g.length;ft++){if(y.resolveDepthBuffer){if(y.depthBuffer)j|=t.DEPTH_BUFFER_BIT;if(y.stencilBuffer&&y.resolveStencilBuffer)j|=t.STENCIL_BUFFER_BIT}if(W){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,lt.__webglColorRenderbuffer[ft]);let St=i.get(g[ft]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,St,0)}if(t.blitFramebuffer(0,0,P,G,0,0,P,G,j,t.NEAREST),l===!0){if(ie.length=0,Se.length=0,ie.push(t.COLOR_ATTACHMENT0+ft),y.depthBuffer&&y.resolveDepthBuffer===!1)ie.push(et),Se.push(et),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Se);t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ie)}}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),W)for(let ft=0;ft<g.length;ft++){n.bindFramebuffer(t.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ft,t.RENDERBUFFER,lt.__webglColorRenderbuffer[ft]);let St=i.get(g[ft]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,lt.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ft,t.TEXTURE_2D,St,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){let g=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[g])}}}function pe(y){return Math.min(s.maxSamples,y.samples)}function L(y){let g=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Ge(y){let g=a.render.frame;if(u.get(y)!==g)u.set(y,g),y.update()}function qt(y,g){let{colorSpace:P,format:G,type:j}=y;if(y.isCompressedTexture===!0||y.isVideoTexture===!0)return g;if(P!==La&&P!==$n)if(Gt.getTransfer(P)===Qt){if(G!==on||j!==tn)Tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else Ct("WebGLTextures: Unsupported texture color space:",P);return g}function se(y){if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement)c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height;else if(typeof VideoFrame<"u"&&y instanceof VideoFrame)c.width=y.displayWidth,c.height=y.displayHeight;else c.width=y.width,c.height=y.height;return c}this.allocateTextureUnit=X,this.resetTextureUnits=J,this.getTextureUnits=B,this.setTextureUnits=V,this.setTexture2D=Q,this.setTexture2DArray=tt,this.setTexture3D=ot,this.setTextureCube=yt,this.rebindTextures=kt,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=Bt,this.useMultisampledRTT=L,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Um(t,e){function n(i,s=$n){let r,a=Gt.getTransfer(s);if(i===tn)return t.UNSIGNED_BYTE;if(i===$r)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Kr)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Yl)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Zl)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Xl)return t.BYTE;if(i===ql)return t.SHORT;if(i===Yi)return t.UNSIGNED_SHORT;if(i===Jr)return t.INT;if(i===Un)return t.UNSIGNED_INT;if(i===yn)return t.FLOAT;if(i===Mn)return t.HALF_FLOAT;if(i===Jl)return t.ALPHA;if(i===$l)return t.RGB;if(i===on)return t.RGBA;if(i===Yn)return t.DEPTH_COMPONENT;if(i===Zn)return t.DEPTH_STENCIL;if(i===Kl)return t.RED;if(i===jr)return t.RED_INTEGER;if(i===Jn)return t.RG;if(i===Qr)return t.RG_INTEGER;if(i===ta)return t.RGBA_INTEGER;if(i===Os||i===Bs||i===zs||i===ks)if(a===Qt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Os)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Os)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Bs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===zs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ks)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ea||i===na||i===ia||i===sa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ea)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===na)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ia)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ra||i===aa||i===oa||i===la||i===ca||i===Gs||i===ha)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ra||i===aa)return a===Qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===oa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===la)return r.COMPRESSED_R11_EAC;if(i===ca)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Gs)return r.COMPRESSED_RG11_EAC;if(i===ha)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ua||i===da||i===fa||i===pa||i===ma||i===ga||i===_a||i===xa||i===va||i===ya||i===Ma||i===Sa||i===ba||i===Ea)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ua)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===da)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===fa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===pa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ma)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ga)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_a)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===xa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===va)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ya)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ma)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Sa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ba)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ea)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ta||i===Aa||i===wa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ta)return a===Qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Aa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ra||i===Ca||i===Hs||i===Pa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ra)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ca)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Hs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Pa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(i===Ai)return t.UNSIGNED_INT_24_8;return t[i]!==void 0?t[i]:null}return{convert:n}}var Fm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Om=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Jc{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new tr(t.texture);if(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)this.depthNear=t.depthNear,this.depthFar=t.depthFar;this.texture=n}}getMesh(t){if(this.texture!==null){if(this.mesh===null){let e=t.cameras[0].viewport,n=new Ye({vertexShader:Fm,fragmentShader:Om,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ne(new ji(20,20),n)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $c extends ln{constructor(t,e){super();let n=this,i=null,s=1,r=null,a="local-floor",o=1,l=null,c=null,u=null,d=null,h=null,m=null,v=typeof XRWebGLBinding<"u",b=new Jc,p={},f=e.getContextAttributes(),R=null,w=null,M=[],E=[],T=new Pt,C=null,_=new Ie;_.viewport=new ae;let S=new Ie;S.viewport=new ae;let z=[_,S],A=new ao,H=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let st=M[Z];if(st===void 0)st=new Ji,M[Z]=st;return st.getTargetRaySpace()},this.getControllerGrip=function(Z){let st=M[Z];if(st===void 0)st=new Ji,M[Z]=st;return st.getGripSpace()},this.getHand=function(Z){let st=M[Z];if(st===void 0)st=new Ji,M[Z]=st;return st.getHandSpace()};function B(Z){let st=E.indexOf(Z.inputSource);if(st===-1)return;let mt=M[st];if(mt!==void 0)mt.update(Z.inputSource,Z.frame,l||r),mt.dispatchEvent({type:Z.type,data:Z.inputSource})}function V(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",X);for(let Z=0;Z<M.length;Z++){let st=E[Z];if(st===null)continue;E[Z]=null,M[Z].disconnect(st)}H=null,J=null,b.reset();for(let Z in p)delete p[Z];t.setRenderTarget(R),h=null,d=null,u=null,i=null,w=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){if(s=Z,n.isPresenting===!0)Tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){if(a=Z,n.isPresenting===!0)Tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){if(u===null&&v)u=new XRWebGLBinding(i,e);return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(R=t.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",V),i.addEventListener("inputsourceschange",X),f.xrCompatible!==!0)await e.makeXRCompatible();if(C=t.getPixelRatio(),t.getSize(T),!(v&&("createProjectionLayer"in XRWebGLBinding.prototype))){let mt={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,e,mt),i.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),w=new qe(h.framebufferWidth,h.framebufferHeight,{format:on,type:tn,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let mt=null,gt=null,Rt=null;if(f.depth)Rt=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=f.stencil?Zn:Yn,gt=f.stencil?Ai:Un;let Ht={colorFormat:e.RGBA8,depthFormat:Rt,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Ht),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new qe(d.textureWidth,d.textureHeight,{format:on,type:tn,depthTexture:new On(d.textureWidth,d.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(o),l=null,r=await i.requestReferenceSpace(a),$t.setContext(i),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function X(Z){for(let st=0;st<Z.removed.length;st++){let mt=Z.removed[st],gt=E.indexOf(mt);if(gt>=0)E[gt]=null,M[gt].disconnect(mt)}for(let st=0;st<Z.added.length;st++){let mt=Z.added[st],gt=E.indexOf(mt);if(gt===-1){for(let Ht=0;Ht<M.length;Ht++)if(Ht>=E.length){E.push(mt),gt=Ht;break}else if(E[Ht]===null){E[Ht]=mt,gt=Ht;break}if(gt===-1)break}let Rt=M[gt];if(Rt)Rt.connect(mt)}}let U=new D,Q=new D;function tt(Z,st,mt){U.setFromMatrixPosition(st.matrixWorld),Q.setFromMatrixPosition(mt.matrixWorld);let gt=U.distanceTo(Q),Rt=st.projectionMatrix.elements,Ht=mt.projectionMatrix.elements,Bt=Rt[14]/(Rt[10]-1),zt=Rt[14]/(Rt[10]+1),te=(Rt[9]+1)/Rt[5],Vt=(Rt[9]-1)/Rt[5],kt=(Rt[8]-1)/Rt[0],xe=(Ht[8]+1)/Ht[0],ke=Bt*kt,ie=Bt*xe,Se=gt/(-kt+xe),ve=Se*-kt;if(st.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ve),Z.translateZ(Se),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Rt[10]===-1)Z.projectionMatrix.copy(st.projectionMatrix),Z.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{let pe=Bt+Se,L=zt+Se,Ge=ke-ve,qt=ie+(gt-ve),se=te*zt/L*pe,y=Vt*zt/L*pe;Z.projectionMatrix.makePerspective(Ge,qt,se,y,pe,L),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ot(Z,st){if(st===null)Z.matrixWorld.copy(Z.matrix);else Z.matrixWorld.multiplyMatrices(st.matrixWorld,Z.matrix);Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let{near:st,far:mt}=Z;if(b.texture!==null){if(b.depthNear>0)st=b.depthNear;if(b.depthFar>0)mt=b.depthFar}if(A.near=S.near=_.near=st,A.far=S.far=_.far=mt,H!==A.near||J!==A.far)i.updateRenderState({depthNear:A.near,depthFar:A.far}),H=A.near,J=A.far;A.layers.mask=Z.layers.mask|6,_.layers.mask=A.layers.mask&-5,S.layers.mask=A.layers.mask&-3;let gt=Z.parent,Rt=A.cameras;ot(A,gt);for(let Ht=0;Ht<Rt.length;Ht++)ot(Rt[Ht],gt);if(Rt.length===2)tt(A,_,S);else A.projectionMatrix.copy(_.projectionMatrix);yt(Z,A,gt)};function yt(Z,st,mt){if(mt===null)Z.matrix.copy(st.matrixWorld);else Z.matrix.copy(mt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(st.matrixWorld);if(Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(st.projectionMatrix),Z.projectionMatrixInverse.copy(st.projectionMatrixInverse),Z.isPerspectiveCamera)Z.fov=Mi*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1}this.getCamera=function(){return A},this.getFoveation=function(){if(d===null&&h===null)return;return o},this.setFoveation=function(Z){if(o=Z,d!==null)d.fixedFoveation=Z;if(h!==null&&h.fixedFoveation!==void 0)h.fixedFoveation=Z},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(A)},this.getCameraTexture=function(Z){return p[Z]};let vt=null;function oe(Z,st){if(c=st.getViewerPose(l||r),m=st,c!==null){let mt=c.views;if(h!==null)t.setRenderTargetFramebuffer(w,h.framebuffer),t.setRenderTarget(w);let gt=!1;if(mt.length!==A.cameras.length)A.cameras.length=0,gt=!0;for(let zt=0;zt<mt.length;zt++){let te=mt[zt],Vt=null;if(h!==null)Vt=h.getViewport(te);else{let xe=u.getViewSubImage(d,te);if(Vt=xe.viewport,zt===0)t.setRenderTargetTextures(w,xe.colorTexture,xe.depthStencilTexture),t.setRenderTarget(w)}let kt=z[zt];if(kt===void 0)kt=new Ie,kt.layers.enable(zt),kt.viewport=new ae,z[zt]=kt;if(kt.matrix.fromArray(te.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(te.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(Vt.x,Vt.y,Vt.width,Vt.height),zt===0)A.matrix.copy(kt.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale);if(gt===!0)A.cameras.push(kt)}let Rt=i.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let zt=u.getDepthInformation(mt[0]);if(zt&&zt.isValid&&zt.texture)b.init(zt,i.renderState)}if(Rt&&Rt.includes("camera-access")&&v){t.state.unbindTexture(),u=n.getBinding();for(let zt=0;zt<mt.length;zt++){let te=mt[zt].camera;if(te){let Vt=p[te];if(!Vt)Vt=new tr,p[te]=Vt;let kt=u.getCameraImage(te);Vt.sourceTexture=kt}}}}for(let mt=0;mt<M.length;mt++){let gt=E[mt],Rt=M[mt];if(gt!==null&&Rt!==void 0)Rt.update(gt,st,l||r)}if(vt)vt(Z,st);if(st.detectedPlanes)n.dispatchEvent({type:"planesdetected",data:st});m=null}let $t=new Bc;$t.setAnimationLoop(oe),this.setAnimationLoop=function(Z){vt=Z},this.dispose=function(){}}}var Bm=new re,Kc=new Lt;Kc.set(-1,0,0,0,1,0,0,0,1);function zm(t,e){function n(p,f){if(p.matrixAutoUpdate===!0)p.updateMatrix();f.value.copy(p.matrix)}function i(p,f){if(f.color.getRGB(p.fogColor.value,Xa(t)),f.isFog)p.fogNear.value=f.near,p.fogFar.value=f.far;else if(f.isFogExp2)p.fogDensity.value=f.density}function s(p,f,R,w,M){if(f.isNodeMaterial)f.uniformsNeedUpdate=!1;else if(f.isMeshBasicMaterial)r(p,f);else if(f.isMeshLambertMaterial){if(r(p,f),f.envMap)p.envMapIntensity.value=f.envMapIntensity}else if(f.isMeshToonMaterial)r(p,f),d(p,f);else if(f.isMeshPhongMaterial){if(r(p,f),u(p,f),f.envMap)p.envMapIntensity.value=f.envMapIntensity}else if(f.isMeshStandardMaterial){if(r(p,f),h(p,f),f.isMeshPhysicalMaterial)m(p,f,M)}else if(f.isMeshMatcapMaterial)r(p,f),v(p,f);else if(f.isMeshDepthMaterial)r(p,f);else if(f.isMeshDistanceMaterial)r(p,f),b(p,f);else if(f.isMeshNormalMaterial)r(p,f);else if(f.isLineBasicMaterial){if(a(p,f),f.isLineDashedMaterial)o(p,f)}else if(f.isPointsMaterial)l(p,f,R,w);else if(f.isSpriteMaterial)c(p,f);else if(f.isShadowMaterial)p.color.value.copy(f.color),p.opacity.value=f.opacity;else if(f.isShaderMaterial)f.uniformsNeedUpdate=!1}function r(p,f){if(p.opacity.value=f.opacity,f.color)p.diffuse.value.copy(f.color);if(f.emissive)p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity);if(f.map)p.map.value=f.map,n(f.map,p.mapTransform);if(f.alphaMap)p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform);if(f.bumpMap){if(p.bumpMap.value=f.bumpMap,n(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Le)p.bumpScale.value*=-1}if(f.normalMap){if(p.normalMap.value=f.normalMap,n(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Le)p.normalScale.value.negate()}if(f.displacementMap)p.displacementMap.value=f.displacementMap,n(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias;if(f.emissiveMap)p.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,p.emissiveMapTransform);if(f.specularMap)p.specularMap.value=f.specularMap,n(f.specularMap,p.specularMapTransform);if(f.alphaTest>0)p.alphaTest.value=f.alphaTest;let R=e.get(f),w=R.envMap,M=R.envMapRotation;if(w){if(p.envMap.value=w,p.envMapRotation.value.setFromMatrix4(Bm.makeRotationFromEuler(M)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1)p.envMapRotation.value.premultiply(Kc);p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio}if(f.lightMap)p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,p.lightMapTransform);if(f.aoMap)p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,p.aoMapTransform)}function a(p,f){if(p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map)p.map.value=f.map,n(f.map,p.mapTransform)}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,R,w){if(p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*R,p.scale.value=w*0.5,f.map)p.map.value=f.map,n(f.map,p.uvTransform);if(f.alphaMap)p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform);if(f.alphaTest>0)p.alphaTest.value=f.alphaTest}function c(p,f){if(p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map)p.map.value=f.map,n(f.map,p.mapTransform);if(f.alphaMap)p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform);if(f.alphaTest>0)p.alphaTest.value=f.alphaTest}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,0.0001)}function d(p,f){if(f.gradientMap)p.gradientMap.value=f.gradientMap}function h(p,f){if(p.metalness.value=f.metalness,f.metalnessMap)p.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,p.metalnessMapTransform);if(p.roughness.value=f.roughness,f.roughnessMap)p.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,p.roughnessMapTransform);if(f.envMap)p.envMapIntensity.value=f.envMapIntensity}function m(p,f,R){if(p.ior.value=f.ior,f.sheen>0){if(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap)p.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,p.sheenColorMapTransform);if(f.sheenRoughnessMap)p.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,p.sheenRoughnessMapTransform)}if(f.clearcoat>0){if(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap)p.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,p.clearcoatMapTransform);if(f.clearcoatRoughnessMap)p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform);if(f.clearcoatNormalMap){if(p.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Le)p.clearcoatNormalScale.value.negate()}}if(f.dispersion>0)p.dispersion.value=f.dispersion;if(f.iridescence>0){if(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap)p.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,p.iridescenceMapTransform);if(f.iridescenceThicknessMap)p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform)}if(f.transmission>0){if(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=R.texture,p.transmissionSamplerSize.value.set(R.width,R.height),f.transmissionMap)p.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,p.transmissionMapTransform);if(p.thickness.value=f.thickness,f.thicknessMap)p.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,p.thicknessMapTransform);p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)}if(f.anisotropy>0){if(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap)p.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,p.anisotropyMapTransform)}if(p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap)p.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,p.specularColorMapTransform);if(f.specularIntensityMap)p.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,p.specularIntensityMapTransform)}function v(p,f){if(f.matcap)p.matcap.value=f.matcap}function b(p,f){let R=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(R.matrixWorld),p.nearDistance.value=R.shadow.camera.near,p.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function km(t,e,n,i){let s={},r={},a=[],o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,E){let T=E.program;i.uniformBlockBinding(M,T)}function c(M,E){let T=s[M.id];if(T===void 0)p(M),T=u(M),s[M.id]=T,M.addEventListener("dispose",R);let C=E.program;i.updateUBOMapping(M,C);let _=e.render.frame;if(r[M.id]!==_)h(M),r[M.id]=_}function u(M){let E=d();M.__bindingPointIndex=E;let T=t.createBuffer(),C=M.__size,_=M.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,C,_),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,T),T}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){let E=s[M.id],T=M.uniforms,C=M.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let _=0,S=T.length;_<S;_++){let z=T[_];if(Array.isArray(z))for(let A=0,H=z.length;A<H;A++)m(z[A],_,A,C);else m(z,_,0,C)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(M,E,T,C){if(b(M,E,T,C)===!0){let{__offset:_,value:S}=M;if(Array.isArray(S)){let z=0;for(let A=0;A<S.length;A++){let H=S[A],J=f(H);if(v(H,M.__data,z),typeof H!=="number"&&typeof H!=="boolean"&&!H.isMatrix3&&!ArrayBuffer.isView(H))z+=J.storage/Float32Array.BYTES_PER_ELEMENT}}else v(S,M.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,_,M.__data)}}function v(M,E,T){if(typeof M==="number"||typeof M==="boolean")E[0]=M;else if(M.isMatrix3)E[0]=M.elements[0],E[1]=M.elements[1],E[2]=M.elements[2],E[3]=0,E[4]=M.elements[3],E[5]=M.elements[4],E[6]=M.elements[5],E[7]=0,E[8]=M.elements[6],E[9]=M.elements[7],E[10]=M.elements[8],E[11]=0;else if(ArrayBuffer.isView(M))E.set(new M.constructor(M.buffer,M.byteOffset,E.length));else M.toArray(E,T)}function b(M,E,T,C){let _=M.value,S=E+"_"+T;if(C[S]===void 0){if(typeof _==="number"||typeof _==="boolean")C[S]=_;else if(ArrayBuffer.isView(_))C[S]=_.slice();else C[S]=_.clone();return!0}else{let z=C[S];if(typeof _==="number"||typeof _==="boolean"){if(z!==_)return C[S]=_,!0}else if(ArrayBuffer.isView(_))return!0;else if(z.equals(_)===!1)return z.copy(_),!0}return!1}function p(M){let E=M.uniforms,T=0,C=16;for(let S=0,z=E.length;S<z;S++){let A=Array.isArray(E[S])?E[S]:[E[S]];for(let H=0,J=A.length;H<J;H++){let B=A[H],V=Array.isArray(B.value)?B.value:[B.value];for(let X=0,U=V.length;X<U;X++){let Q=V[X],tt=f(Q),ot=T%C,yt=ot%tt.boundary,vt=ot+yt;if(T+=yt,vt!==0&&C-vt<tt.storage)T+=C-vt;B.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=T,T+=tt.storage}}}let _=T%C;if(_>0)T+=C-_;return M.__size=T,M.__cache={},this}function f(M){let E={boundary:0,storage:0};if(typeof M==="number"||typeof M==="boolean")E.boundary=4,E.storage=4;else if(M.isVector2)E.boundary=8,E.storage=8;else if(M.isVector3||M.isColor)E.boundary=16,E.storage=12;else if(M.isVector4)E.boundary=16,E.storage=16;else if(M.isMatrix3)E.boundary=48,E.storage=48;else if(M.isMatrix4)E.boundary=64,E.storage=64;else if(M.isTexture)Tt("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(M))E.boundary=16,E.storage=M.byteLength;else Tt("WebGLRenderer: Unsupported uniform value type.",M);return E}function R(M){let E=M.target;E.removeEventListener("dispose",R);let T=a.indexOf(E.__bindingPointIndex);a.splice(T,1),t.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function w(){for(let M in s)t.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:w}}var Gm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),cn=null;function Hm(){if(cn===null)cn=new Ha(Gm,16,16,Jn,Mn),cn.name="DFG_LUT",cn.minFilter=De,cn.magFilter=De,cn.wrapS=Us,cn.wrapT=Us,cn.generateMipmaps=!1,cn.needsUpdate=!0;return cn}class So{constructor(t={}){let{canvas:e=rc(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:h=tn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=r;let v=h,b=new Set([ta,Qr,jr]),p=new Set([tn,Un,Yi,Ai,$r,Kr]),f=new Uint32Array(4),R=new Int32Array(4),w=new D,M=null,E=null,T=[],C=[],_=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qe,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,z=!1,A=null,H=null,J=null,B=null;this._outputColorSpace=Vs;let V=0,X=0,U=null,Q=-1,tt=null,ot=new ae,yt=new ae,vt=null,oe=new It(0),$t=0,Z=e.width,st=e.height,mt=1,gt=null,Rt=null,Ht=new ae(0,0,Z,st),Bt=new ae(0,0,Z,st),zt=!1,te=new $i,Vt=!1,kt=!1,xe=new re,ke=new D,ie=new ae,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ve=!1;function pe(){return U===null?mt:1}let L=n;function Ge(x,N){return e.getContext(x,N)}try{let x={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e)e.setAttribute("data-engine",`three.js r${cl}`);if(e.addEventListener("webglcontextlost",Dt,!1),e.addEventListener("webglcontextrestored",le,!1),e.addEventListener("webglcontextcreationerror",ee,!1),L===null){if(L=Ge("webgl2",x),L===null)if(Ge("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(x){throw Ct("WebGLRenderer: "+x.message),x}let qt,se,y,g,P,G,j,et,lt,W,Y,ft,St,ct,nt,At,wt,Xt,I,it,q,rt,pt;function K(){if(qt=new Jf(L),qt.init(),q=new Um(L,qt),se=new Gf(L,qt,t,q),y=new Dm(L,qt),se.reversedDepthBuffer&&d)y.buffers.depth.setReversed(!0);H=L.createFramebuffer(),J=L.createFramebuffer(),B=L.createFramebuffer(),g=new jf(L),P=new vm,G=new Nm(L,qt,y,P,se,q,g),j=new Zf(S),et=new eu(L),rt=new zf(L,et),lt=new $f(L,et,g,rt),W=new tp(L,lt,et,rt,g),Xt=new Qf(L,se,G),nt=new Hf(P),Y=new xm(S,j,qt,se,rt,nt),ft=new zm(S,P),St=new Mm,ct=new wm(qt),wt=new Bf(S,j,y,W,m,o),At=new Lm(S,W,se),pt=new km(L,g,se,y),I=new kf(L,qt,g),it=new Kf(L,qt,g),g.programs=Y.programs,S.capabilities=se,S.extensions=qt,S.properties=P,S.renderLists=St,S.shadowMap=At,S.state=y,S.info=g}if(K(),v!==tn)_=new np(v,e.width,e.height,a,i,s);let at=new $c(S,L);this.xr=at,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let x=qt.get("WEBGL_lose_context");if(x)x.loseContext()},this.forceContextRestore=function(){let x=qt.get("WEBGL_lose_context");if(x)x.restoreContext()},this.getPixelRatio=function(){return mt},this.setPixelRatio=function(x){if(x===void 0)return;mt=x,this.setSize(Z,st,!1)},this.getSize=function(x){return x.set(Z,st)},this.setSize=function(x,N,k=!0){if(at.isPresenting){Tt("WebGLRenderer: Can't change size while VR device is presenting.");return}if(Z=x,st=N,e.width=Math.floor(x*mt),e.height=Math.floor(N*mt),k===!0)e.style.width=x+"px",e.style.height=N+"px";if(_!==null)_.setSize(e.width,e.height);this.setViewport(0,0,x,N)},this.getDrawingBufferSize=function(x){return x.set(Z*mt,st*mt).floor()},this.setDrawingBufferSize=function(x,N,k){Z=x,st=N,mt=k,e.width=Math.floor(x*k),e.height=Math.floor(N*k),this.setViewport(0,0,x,N)},this.setEffects=function(x){if(v===tn){Ct("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let N=0;N<x.length;N++)if(x[N].isOutputPass===!0){Tt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}_.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(ot)},this.getViewport=function(x){return x.copy(Ht)},this.setViewport=function(x,N,k,F){if(x.isVector4)Ht.set(x.x,x.y,x.z,x.w);else Ht.set(x,N,k,F);y.viewport(ot.copy(Ht).multiplyScalar(mt).round())},this.getScissor=function(x){return x.copy(Bt)},this.setScissor=function(x,N,k,F){if(x.isVector4)Bt.set(x.x,x.y,x.z,x.w);else Bt.set(x,N,k,F);y.scissor(yt.copy(Bt).multiplyScalar(mt).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(x){y.setScissorTest(zt=x)},this.setOpaqueSort=function(x){gt=x},this.setTransparentSort=function(x){Rt=x},this.getClearColor=function(x){return x.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor(...arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha(...arguments)},this.clear=function(x=!0,N=!0,k=!0){let F=0;if(x){let O=!1;if(U!==null){let dt=U.texture.format;O=b.has(dt)}if(O){let dt=U.texture.type,xt=p.has(dt),ut=wt.getClearColor(),Mt=wt.getClearAlpha(),bt=ut.r,Nt=ut.g,Ft=ut.b;if(xt)f[0]=bt,f[1]=Nt,f[2]=Ft,f[3]=Mt,L.clearBufferuiv(L.COLOR,0,f);else R[0]=bt,R[1]=Nt,R[2]=Ft,R[3]=Mt,L.clearBufferiv(L.COLOR,0,R)}else F|=L.COLOR_BUFFER_BIT}if(N)F|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(k)F|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(F!==0)L.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),A=x},this.dispose=function(){e.removeEventListener("webglcontextlost",Dt,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",ee,!1),wt.dispose(),St.dispose(),ct.dispose(),P.dispose(),j.dispose(),W.dispose(),rt.dispose(),pt.dispose(),Y.dispose(),at.dispose(),at.removeEventListener("sessionstart",Co),at.removeEventListener("sessionend",Po),zn.stop()};function Dt(x){x.preventDefault(),Fa("WebGLRenderer: Context Lost."),z=!0}function le(){Fa("WebGLRenderer: Context Restored."),z=!1;let x=g.autoReset,N=At.enabled,k=At.autoUpdate,F=At.needsUpdate,O=At.type;K(),g.autoReset=x,At.enabled=N,At.autoUpdate=k,At.needsUpdate=F,At.type=O}function ee(x){Ct("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function nn(x){let N=x.target;N.removeEventListener("dispose",nn),un(N)}function un(x){eh(x),P.remove(x)}function eh(x){let N=P.get(x).programs;if(N!==void 0){if(N.forEach(function(k){Y.releaseProgram(k)}),x.isShaderMaterial)Y.releaseShaderCache(x)}}this.renderBufferDirect=function(x,N,k,F,O,dt){if(N===null)N=Se;let xt=O.isMesh&&O.matrixWorld.determinantAffine()<0,ut=sh(x,N,k,F,O);y.setMaterial(F,xt);let Mt=k.index,bt=1;if(F.wireframe===!0){if(Mt=lt.getWireframeAttribute(k),Mt===void 0)return;bt=2}let Nt=k.drawRange,Ft=k.attributes.position,Et=Nt.start*bt,Zt=(Nt.start+Nt.count)*bt;if(dt!==null)Et=Math.max(Et,dt.start*bt),Zt=Math.min(Zt,(dt.start+dt.count)*bt);if(Mt!==null)Et=Math.max(Et,0),Zt=Math.min(Zt,Mt.count);else if(Ft!==void 0&&Ft!==null)Et=Math.max(Et,0),Zt=Math.min(Zt,Ft.count);let he=Zt-Et;if(he<0||he===1/0)return;rt.setup(O,F,ut,k,Mt);let ce,Kt=I;if(Mt!==null)ce=et.get(Mt),Kt=it,Kt.setIndex(ce);if(O.isMesh)if(F.wireframe===!0)y.setLineWidth(F.wireframeLinewidth*pe()),Kt.setMode(L.LINES);else Kt.setMode(L.TRIANGLES);else if(O.isLine){let be=F.linewidth;if(be===void 0)be=1;if(y.setLineWidth(be*pe()),O.isLineSegments)Kt.setMode(L.LINES);else if(O.isLineLoop)Kt.setMode(L.LINE_LOOP);else Kt.setMode(L.LINE_STRIP)}else if(O.isPoints)Kt.setMode(L.POINTS);else if(O.isSprite)Kt.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(!qt.get("WEBGL_multi_draw")){let{_multiDrawStarts:be,_multiDrawCounts:_t,_multiDrawCount:Fe}=O,Wt=Mt?et.get(Mt).bytesPerElement:1,He=P.get(F).currentProgram.getUniforms();for(let sn=0;sn<Fe;sn++)He.setValue(L,"_gl_DrawID",sn),Kt.render(be[sn]/Wt,_t[sn])}else Kt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)Kt.renderInstances(Et,he,O.count);else if(k.isInstancedBufferGeometry){let be=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,_t=Math.min(k.instanceCount,be);Kt.renderInstances(Et,he,_t)}else Kt.render(Et,he)};function Ro(x,N,k){if(x.transparent===!0&&x.side===ze&&x.forceSinglePass===!1)x.side=Le,x.needsUpdate=!0,os(x,N,k),x.side=bi,x.needsUpdate=!0,os(x,N,k),x.side=ze;else os(x,N,k)}this.compile=function(x,N,k=null){if(k===null)k=x;if(E=ct.get(k),E.init(N),C.push(E),k.traverseVisible(function(O){if(O.isLight&&O.layers.test(N.layers)){if(E.pushLight(O),O.castShadow)E.pushShadow(O)}}),x!==k)x.traverseVisible(function(O){if(O.isLight&&O.layers.test(N.layers)){if(E.pushLight(O),O.castShadow)E.pushShadow(O)}});E.setupLights();let F=new Set;return x.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let dt=O.material;if(dt)if(Array.isArray(dt))for(let xt=0;xt<dt.length;xt++){let ut=dt[xt];Ro(ut,k,O),F.add(ut)}else Ro(dt,k,O),F.add(dt)}),E=C.pop(),F},this.compileAsync=function(x,N,k=null){let F=this.compile(x,N,k);return new Promise((O)=>{function dt(){if(F.forEach(function(xt){if(P.get(xt).currentProgram.isReady())F.delete(xt)}),F.size===0){O(x);return}setTimeout(dt,10)}if(qt.get("KHR_parallel_shader_compile")!==null)dt();else setTimeout(dt,10)})};let ur=null;function nh(x){if(ur)ur(x)}function Co(){zn.stop()}function Po(){zn.start()}let zn=new Bc;if(zn.setAnimationLoop(nh),typeof self<"u")zn.setContext(self);this.setAnimationLoop=function(x){ur=x,at.setAnimationLoop(x),x===null?zn.stop():zn.start()},at.addEventListener("sessionstart",Co),at.addEventListener("sessionend",Po),this.render=function(x,N){if(N!==void 0&&N.isCamera!==!0){Ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(A!==null)A.renderStart(x,N);let k=at.enabled===!0&&at.isPresenting===!0,F=_!==null&&(U===null||k)&&_.begin(S,U);if(x.matrixWorldAutoUpdate===!0)x.updateMatrixWorld();if(N.parent===null&&N.matrixWorldAutoUpdate===!0)N.updateMatrixWorld();if(at.enabled===!0&&at.isPresenting===!0&&(_===null||_.isCompositing()===!1)){if(at.cameraAutoUpdate===!0)at.updateCamera(N);N=at.getCamera()}if(x.isScene===!0)x.onBeforeRender(S,x,N,U);if(E=ct.get(x,C.length),E.init(N),E.state.textureUnits=G.getTextureUnits(),C.push(E),xe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),te.setFromProjectionMatrix(xe,Ua,N.reversedDepth),kt=this.localClippingEnabled,Vt=nt.init(this.clippingPlanes,kt),M=St.get(x,T.length),M.init(),T.push(M),at.enabled===!0&&at.isPresenting===!0){let xt=S.xr.getDepthSensingMesh();if(xt!==null)dr(xt,N,-1/0,S.sortObjects)}if(dr(x,N,0,S.sortObjects),M.finish(),S.sortObjects===!0)M.sort(gt,Rt,N.reversedDepth);if(ve=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,ve)wt.addToRenderList(M,x);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(Vt===!0)nt.beginShadows();let O=E.state.shadowsArray;if(At.render(O,x,N),Vt===!0)nt.endShadows();if((F&&_.hasRenderPass())===!1){let{opaque:xt,transmissive:ut}=M;if(E.setupLights(),N.isArrayCamera){let Mt=N.cameras;if(ut.length>0)for(let bt=0,Nt=Mt.length;bt<Nt;bt++){let Ft=Mt[bt];Lo(xt,ut,x,Ft)}if(ve)wt.render(x);for(let bt=0,Nt=Mt.length;bt<Nt;bt++){let Ft=Mt[bt];Io(M,x,Ft,Ft.viewport)}}else{if(ut.length>0)Lo(xt,ut,x,N);if(ve)wt.render(x);Io(M,x,N)}}if(U!==null&&X===0)G.updateMultisampleRenderTarget(U),G.updateRenderTargetMipmap(U);if(F)_.end(S);if(x.isScene===!0)x.onAfterRender(S,x,N);if(rt.resetDefaultState(),Q=-1,tt=null,C.pop(),C.length>0){if(E=C[C.length-1],G.setTextureUnits(E.state.textureUnits),Vt===!0)nt.setGlobalState(S.clippingPlanes,E.state.camera)}else E=null;if(T.pop(),T.length>0)M=T[T.length-1];else M=null;if(A!==null)A.renderEnd()};function dr(x,N,k,F){if(x.visible===!1)return;if(x.layers.test(N.layers)){if(x.isGroup)k=x.renderOrder;else if(x.isLOD){if(x.autoUpdate===!0)x.update(N)}else if(x.isLightProbeGrid)E.pushLightProbeGrid(x);else if(x.isLight){if(E.pushLight(x),x.castShadow)E.pushShadow(x)}else if(x.isSprite){if(!x.frustumCulled||te.intersectsSprite(x)){if(F)ie.setFromMatrixPosition(x.matrixWorld).applyMatrix4(xe);let xt=W.update(x),ut=x.material;if(ut.visible)M.push(x,xt,ut,k,ie.z,null)}}else if(x.isMesh||x.isLine||x.isPoints){if(!x.frustumCulled||te.intersectsObject(x)){let xt=W.update(x),ut=x.material;if(F){if(x.boundingSphere!==void 0){if(x.boundingSphere===null)x.computeBoundingSphere();ie.copy(x.boundingSphere.center)}else{if(xt.boundingSphere===null)xt.computeBoundingSphere();ie.copy(xt.boundingSphere.center)}ie.applyMatrix4(x.matrixWorld).applyMatrix4(xe)}if(Array.isArray(ut)){let Mt=xt.groups;for(let bt=0,Nt=Mt.length;bt<Nt;bt++){let Ft=Mt[bt],Et=ut[Ft.materialIndex];if(Et&&Et.visible)M.push(x,xt,Et,k,ie.z,Ft)}}else if(ut.visible)M.push(x,xt,ut,k,ie.z,null)}}}let dt=x.children;for(let xt=0,ut=dt.length;xt<ut;xt++)dr(dt[xt],N,k,F)}function Io(x,N,k,F){let{opaque:O,transmissive:dt,transparent:xt}=x;if(E.setupLightsView(k),Vt===!0)nt.setGlobalState(S.clippingPlanes,k);if(F)y.viewport(ot.copy(F));if(O.length>0)as(O,N,k);if(dt.length>0)as(dt,N,k);if(xt.length>0)as(xt,N,k);y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Lo(x,N,k,F){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[F.id]===void 0){let Et=qt.has("EXT_color_buffer_half_float")||qt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[F.id]=new qe(1,1,{generateMipmaps:!0,type:Et?Mn:tn,minFilter:qn,samples:Math.max(4,se.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Gt.workingColorSpace})}let dt=E.state.transmissionRenderTarget[F.id],xt=F.viewport||ot;dt.setSize(xt.z*S.transmissionResolutionScale,xt.w*S.transmissionResolutionScale);let ut=S.getRenderTarget(),Mt=S.getActiveCubeFace(),bt=S.getActiveMipmapLevel();if(S.setRenderTarget(dt),S.getClearColor(oe),$t=S.getClearAlpha(),$t<1)S.setClearColor(16777215,0.5);if(S.clear(),ve)wt.render(k);let Nt=S.toneMapping;S.toneMapping=Qe;let Ft=F.viewport;if(F.viewport!==void 0)F.viewport=void 0;if(E.setupLightsView(F),Vt===!0)nt.setGlobalState(S.clippingPlanes,F);if(as(x,k,F),G.updateMultisampleRenderTarget(dt),G.updateRenderTargetMipmap(dt),qt.has("WEBGL_multisampled_render_to_texture")===!1){let Et=!1;for(let Zt=0,he=N.length;Zt<he;Zt++){let ce=N[Zt],{object:Kt,geometry:be,material:_t,group:Fe}=ce;if(_t.side===ze&&Kt.layers.test(F.layers)){let Wt=_t.side;_t.side=Le,_t.needsUpdate=!0,Do(Kt,k,F,be,_t,Fe),_t.side=Wt,_t.needsUpdate=!0,Et=!0}}if(Et===!0)G.updateMultisampleRenderTarget(dt),G.updateRenderTargetMipmap(dt)}if(S.setRenderTarget(ut,Mt,bt),S.setClearColor(oe,$t),Ft!==void 0)F.viewport=Ft;S.toneMapping=Nt}function as(x,N,k){let F=N.isScene===!0?N.overrideMaterial:null;for(let O=0,dt=x.length;O<dt;O++){let xt=x[O],{object:ut,geometry:Mt,group:bt}=xt,Nt=xt.material;if(Nt.allowOverride===!0&&F!==null)Nt=F;if(ut.layers.test(k.layers))Do(ut,N,k,Mt,Nt,bt)}}function Do(x,N,k,F,O,dt){if(x.onBeforeRender(S,N,k,F,O,dt),x.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),O.onBeforeRender(S,N,k,F,x,dt),O.transparent===!0&&O.side===ze&&O.forceSinglePass===!1)O.side=Le,O.needsUpdate=!0,S.renderBufferDirect(k,N,F,O,x,dt),O.side=bi,O.needsUpdate=!0,S.renderBufferDirect(k,N,F,O,x,dt),O.side=ze;else S.renderBufferDirect(k,N,F,O,x,dt);x.onAfterRender(S,N,k,F,O,dt)}function os(x,N,k){if(N.isScene!==!0)N=Se;let F=P.get(x),O=E.state.lights,dt=E.state.shadowsArray,xt=O.state.version,ut=Y.getParameters(x,O.state,dt,N,k,E.state.lightProbeGridArray),Mt=Y.getProgramCacheKey(ut),bt=F.programs;F.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,F.fog=N.fog;let Nt=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;if(F.envMap=j.get(x.envMap||F.environment,Nt),F.envMapRotation=F.environment!==null&&x.envMap===null?N.environmentRotation:x.envMapRotation,bt===void 0)x.addEventListener("dispose",nn),bt=new Map,F.programs=bt;let Ft=bt.get(Mt);if(Ft!==void 0){if(F.currentProgram===Ft&&F.lightsStateVersion===xt)return Uo(x,ut),Ft}else{if(ut.uniforms=Y.getUniforms(x),A!==null&&x.isNodeMaterial)A.build(x,k,ut);x.onBeforeCompile(ut,S),Ft=Y.acquireProgram(ut,Mt),bt.set(Mt,Ft),F.uniforms=ut.uniforms}let Et=F.uniforms;if(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)Et.clippingPlanes=nt.uniform;if(Uo(x,ut),F.needsLights=ah(x),F.lightsStateVersion=xt,F.needsLights)Et.ambientLightColor.value=O.state.ambient,Et.lightProbe.value=O.state.probe,Et.directionalLights.value=O.state.directional,Et.directionalLightShadows.value=O.state.directionalShadow,Et.spotLights.value=O.state.spot,Et.spotLightShadows.value=O.state.spotShadow,Et.rectAreaLights.value=O.state.rectArea,Et.ltc_1.value=O.state.rectAreaLTC1,Et.ltc_2.value=O.state.rectAreaLTC2,Et.pointLights.value=O.state.point,Et.pointLightShadows.value=O.state.pointShadow,Et.hemisphereLights.value=O.state.hemi,Et.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Et.spotLightMatrix.value=O.state.spotLightMatrix,Et.spotLightMap.value=O.state.spotLightMap,Et.pointShadowMatrix.value=O.state.pointShadowMatrix;return F.lightProbeGrid=E.state.lightProbeGridArray.length>0,F.currentProgram=Ft,F.uniformsList=null,Ft}function No(x){if(x.uniformsList===null){let N=x.currentProgram.getUniforms();x.uniformsList=rs.seqWithValue(N.seq,x.uniforms)}return x.uniformsList}function Uo(x,N){let k=P.get(x);k.outputColorSpace=N.outputColorSpace,k.batching=N.batching,k.batchingColor=N.batchingColor,k.instancing=N.instancing,k.instancingColor=N.instancingColor,k.instancingMorph=N.instancingMorph,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function ih(x,N){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;w.setFromMatrixPosition(N.matrixWorld);for(let k=0,F=x.length;k<F;k++){let O=x[k];if(O.texture!==null&&O.boundingBox.containsPoint(w))return O}return null}function sh(x,N,k,F,O){if(N.isScene!==!0)N=Se;G.resetTextureUnits();let dt=N.fog,xt=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?N.environment:null,ut=U===null?S.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Gt.workingColorSpace,Mt=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,bt=j.get(F.envMap||xt,Mt),Nt=F.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ft=!!k.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Et=!!k.morphAttributes.position,Zt=!!k.morphAttributes.normal,he=!!k.morphAttributes.color,ce=Qe;if(F.toneMapped){if(U===null||U.isXRRenderTarget===!0)ce=S.toneMapping}let Kt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,be=Kt!==void 0?Kt.length:0,_t=P.get(F),Fe=E.state.lights;if(Vt===!0){if(kt===!0||x!==tt){let ne=x===tt&&F.id===Q;nt.setState(F,x,ne)}}let Wt=!1;if(F.version===_t.__version){if(_t.needsLights&&_t.lightsStateVersion!==Fe.state.version)Wt=!0;else if(_t.outputColorSpace!==ut)Wt=!0;else if(O.isBatchedMesh&&_t.batching===!1)Wt=!0;else if(!O.isBatchedMesh&&_t.batching===!0)Wt=!0;else if(O.isBatchedMesh&&_t.batchingColor===!0&&O.colorTexture===null)Wt=!0;else if(O.isBatchedMesh&&_t.batchingColor===!1&&O.colorTexture!==null)Wt=!0;else if(O.isInstancedMesh&&_t.instancing===!1)Wt=!0;else if(!O.isInstancedMesh&&_t.instancing===!0)Wt=!0;else if(O.isSkinnedMesh&&_t.skinning===!1)Wt=!0;else if(!O.isSkinnedMesh&&_t.skinning===!0)Wt=!0;else if(O.isInstancedMesh&&_t.instancingColor===!0&&O.instanceColor===null)Wt=!0;else if(O.isInstancedMesh&&_t.instancingColor===!1&&O.instanceColor!==null)Wt=!0;else if(O.isInstancedMesh&&_t.instancingMorph===!0&&O.morphTexture===null)Wt=!0;else if(O.isInstancedMesh&&_t.instancingMorph===!1&&O.morphTexture!==null)Wt=!0;else if(_t.envMap!==bt)Wt=!0;else if(F.fog===!0&&_t.fog!==dt)Wt=!0;else if(_t.numClippingPlanes!==void 0&&(_t.numClippingPlanes!==nt.numPlanes||_t.numIntersection!==nt.numIntersection))Wt=!0;else if(_t.vertexAlphas!==Nt)Wt=!0;else if(_t.vertexTangents!==Ft)Wt=!0;else if(_t.morphTargets!==Et)Wt=!0;else if(_t.morphNormals!==Zt)Wt=!0;else if(_t.morphColors!==he)Wt=!0;else if(_t.toneMapping!==ce)Wt=!0;else if(_t.morphTargetsCount!==be)Wt=!0;else if(!!_t.lightProbeGrid!==E.state.lightProbeGridArray.length>0)Wt=!0}else Wt=!0,_t.__version=F.version;let He=_t.currentProgram;if(Wt===!0){if(He=os(F,N,O),A&&F.isNodeMaterial)A.onUpdateProgram(F,He,_t)}let sn=!1,Sn=!1,si=!1,jt=He.getUniforms(),ue=_t.uniforms;if(y.useProgram(He.program))sn=!0,Sn=!0,si=!0;if(F.id!==Q)Q=F.id,Sn=!0;if(_t.needsLights){let ne=ih(E.state.lightProbeGridArray,O);if(_t.lightProbeGrid!==ne)_t.lightProbeGrid=ne,Sn=!0}if(sn||tt!==x){if(y.buffers.depth.getReversed()&&x.reversedDepth!==!0)x._reversedDepth=!0,x.updateProjectionMatrix();jt.setValue(L,"projectionMatrix",x.projectionMatrix),jt.setValue(L,"viewMatrix",x.matrixWorldInverse);let En=jt.map.cameraPosition;if(En!==void 0)En.setValue(L,ke.setFromMatrixPosition(x.matrixWorld));if(se.logarithmicDepthBuffer)jt.setValue(L,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2));if(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)jt.setValue(L,"isOrthographic",x.isOrthographicCamera===!0);if(tt!==x)tt=x,Sn=!0,si=!0}if(_t.needsLights){if(Fe.state.directionalShadowMap.length>0)jt.setValue(L,"directionalShadowMap",Fe.state.directionalShadowMap,G);if(Fe.state.spotShadowMap.length>0)jt.setValue(L,"spotShadowMap",Fe.state.spotShadowMap,G);if(Fe.state.pointShadowMap.length>0)jt.setValue(L,"pointShadowMap",Fe.state.pointShadowMap,G)}if(O.isSkinnedMesh){jt.setOptional(L,O,"bindMatrix"),jt.setOptional(L,O,"bindMatrixInverse");let ne=O.skeleton;if(ne){if(ne.boneTexture===null)ne.computeBoneTexture();jt.setValue(L,"boneTexture",ne.boneTexture,G)}}if(O.isBatchedMesh){if(jt.setOptional(L,O,"batchingTexture"),jt.setValue(L,"batchingTexture",O._matricesTexture,G),jt.setOptional(L,O,"batchingIdTexture"),jt.setValue(L,"batchingIdTexture",O._indirectTexture,G),jt.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null)jt.setValue(L,"batchingColorTexture",O._colorsTexture,G)}let bn=k.morphAttributes;if(bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)Xt.update(O,k,He);if(Sn||_t.receiveShadow!==O.receiveShadow)_t.receiveShadow=O.receiveShadow,jt.setValue(L,"receiveShadow",O.receiveShadow);if((F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&N.environment!==null)ue.envMapIntensity.value=N.environmentIntensity;if(ue.dfgLUT!==void 0)ue.dfgLUT.value=Hm();if(Sn){if(jt.setValue(L,"toneMappingExposure",S.toneMappingExposure),_t.needsLights)rh(ue,si);if(dt&&F.fog===!0)ft.refreshFogUniforms(ue,dt);if(ft.refreshMaterialUniforms(ue,F,mt,st,E.state.transmissionRenderTarget[x.id]),_t.needsLights&&_t.lightProbeGrid){let ne=_t.lightProbeGrid;ue.probesSH.value=ne.texture,ue.probesMin.value.copy(ne.boundingBox.min),ue.probesMax.value.copy(ne.boundingBox.max),ue.probesResolution.value.copy(ne.resolution)}rs.upload(L,No(_t),ue,G)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0)rs.upload(L,No(_t),ue,G),F.uniformsNeedUpdate=!1;if(F.isSpriteMaterial)jt.setValue(L,"center",O.center);if(jt.setValue(L,"modelViewMatrix",O.modelViewMatrix),jt.setValue(L,"normalMatrix",O.normalMatrix),jt.setValue(L,"modelMatrix",O.matrixWorld),F.uniformsGroups!==void 0){let ne=F.uniformsGroups;for(let En=0,ri=ne.length;En<ri;En++){let Fo=ne[En];pt.update(Fo,He),pt.bind(Fo,He)}}return He}function rh(x,N){x.ambientLightColor.needsUpdate=N,x.lightProbe.needsUpdate=N,x.directionalLights.needsUpdate=N,x.directionalLightShadows.needsUpdate=N,x.pointLights.needsUpdate=N,x.pointLightShadows.needsUpdate=N,x.spotLights.needsUpdate=N,x.spotLightShadows.needsUpdate=N,x.rectAreaLights.needsUpdate=N,x.hemisphereLights.needsUpdate=N}function ah(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}if(this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(x,N,k){let F=P.get(x);if(F.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1)F.__useRenderToTexture=!1;P.get(x.texture).__webglTexture=N,P.get(x.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:k,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,N){let k=P.get(x);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(x,N=0,k=0){U=x,V=N,X=k;let F=null,O=!1,dt=!1;if(x){let ut=P.get(x);if(ut.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(L.FRAMEBUFFER,ut.__webglFramebuffer),ot.copy(x.viewport),yt.copy(x.scissor),vt=x.scissorTest,y.viewport(ot),y.scissor(yt),y.setScissorTest(vt),Q=-1;return}else if(ut.__webglFramebuffer===void 0)G.setupRenderTarget(x);else if(ut.__hasExternalTextures)G.rebindTextures(x,P.get(x.texture).__webglTexture,P.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let Nt=x.depthTexture;if(ut.__boundDepthTexture!==Nt){if(Nt!==null&&P.has(Nt)&&(x.width!==Nt.image.width||x.height!==Nt.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(x)}}let Mt=x.texture;if(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)dt=!0;let bt=P.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget){if(Array.isArray(bt[N]))F=bt[N][k];else F=bt[N];O=!0}else if(x.samples>0&&G.useMultisampledRTT(x)===!1)F=P.get(x).__webglMultisampledFramebuffer;else if(Array.isArray(bt))F=bt[k];else F=bt;ot.copy(x.viewport),yt.copy(x.scissor),vt=x.scissorTest}else ot.copy(Ht).multiplyScalar(mt).floor(),yt.copy(Bt).multiplyScalar(mt).floor(),vt=zt;if(k!==0)F=H;if(y.bindFramebuffer(L.FRAMEBUFFER,F))y.drawBuffers(x,F);if(y.viewport(ot),y.scissor(yt),y.setScissorTest(vt),O){let ut=P.get(x.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,ut.__webglTexture,k)}else if(dt){let ut=N;for(let Mt=0;Mt<x.textures.length;Mt++){let bt=P.get(x.textures[Mt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Mt,bt.__webglTexture,k,ut)}}else if(x!==null&&k!==0){let ut=P.get(x.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ut.__webglTexture,k)}Q=-1},this.readRenderTargetPixels=function(x,N,k,F,O,dt,xt,ut=0){if(!(x&&x.isWebGLRenderTarget)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=P.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&xt!==void 0)Mt=Mt[xt];if(Mt){y.bindFramebuffer(L.FRAMEBUFFER,Mt);try{let bt=x.textures[ut],Nt=bt.format,Ft=bt.type;if(x.textures.length>1)L.readBuffer(L.COLOR_ATTACHMENT0+ut);if(!se.textureFormatReadable(Nt)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!se.textureTypeReadable(Ft)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(N>=0&&N<=x.width-F&&(k>=0&&k<=x.height-O))L.readPixels(N,k,F,O,q.convert(Nt),q.convert(Ft),dt)}finally{let bt=U!==null?P.get(U).__webglFramebuffer:null;y.bindFramebuffer(L.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(x,N,k,F,O,dt,xt,ut=0){if(!(x&&x.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=P.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&xt!==void 0)Mt=Mt[xt];if(Mt)if(N>=0&&N<=x.width-F&&(k>=0&&k<=x.height-O)){y.bindFramebuffer(L.FRAMEBUFFER,Mt);let bt=x.textures[ut],Nt=bt.format,Ft=bt.type;if(x.textures.length>1)L.readBuffer(L.COLOR_ATTACHMENT0+ut);if(!se.textureFormatReadable(Nt))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(Ft))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Et=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Et),L.bufferData(L.PIXEL_PACK_BUFFER,dt.byteLength,L.STREAM_READ),L.readPixels(N,k,F,O,q.convert(Nt),q.convert(Ft),0);let Zt=U!==null?P.get(U).__webglFramebuffer:null;y.bindFramebuffer(L.FRAMEBUFFER,Zt);let he=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await oc(L,he,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Et),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,dt),L.deleteBuffer(Et),L.deleteSync(he),dt}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,N=null,k=0){let F=Math.pow(2,-k),O=Math.floor(x.image.width*F),dt=Math.floor(x.image.height*F),xt=N!==null?N.x:0,ut=N!==null?N.y:0;G.setTexture2D(x,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,xt,ut,O,dt),y.unbindTexture()},this.copyTextureToTexture=function(x,N,k=null,F=null,O=0,dt=0){let xt,ut,Mt,bt,Nt,Ft,Et,Zt,he,ce=x.isCompressedTexture?x.mipmaps[dt]:x.image;if(k!==null)xt=k.max.x-k.min.x,ut=k.max.y-k.min.y,Mt=k.isBox3?k.max.z-k.min.z:1,bt=k.min.x,Nt=k.min.y,Ft=k.isBox3?k.min.z:0;else{let ue=Math.pow(2,-O);if(xt=Math.floor(ce.width*ue),ut=Math.floor(ce.height*ue),x.isDataArrayTexture)Mt=ce.depth;else if(x.isData3DTexture)Mt=Math.floor(ce.depth*ue);else Mt=1;bt=0,Nt=0,Ft=0}if(F!==null)Et=F.x,Zt=F.y,he=F.z;else Et=0,Zt=0,he=0;let Kt=q.convert(N.format),be=q.convert(N.type),_t;if(N.isData3DTexture)G.setTexture3D(N,0),_t=L.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)G.setTexture2DArray(N,0),_t=L.TEXTURE_2D_ARRAY;else G.setTexture2D(N,0),_t=L.TEXTURE_2D;y.activeTexture(L.TEXTURE0),y.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),y.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),y.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);let Fe=y.getParameter(L.UNPACK_ROW_LENGTH),Wt=y.getParameter(L.UNPACK_IMAGE_HEIGHT),He=y.getParameter(L.UNPACK_SKIP_PIXELS),sn=y.getParameter(L.UNPACK_SKIP_ROWS),Sn=y.getParameter(L.UNPACK_SKIP_IMAGES);y.pixelStorei(L.UNPACK_ROW_LENGTH,ce.width),y.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ce.height),y.pixelStorei(L.UNPACK_SKIP_PIXELS,bt),y.pixelStorei(L.UNPACK_SKIP_ROWS,Nt),y.pixelStorei(L.UNPACK_SKIP_IMAGES,Ft);let si=x.isDataArrayTexture||x.isData3DTexture,jt=N.isDataArrayTexture||N.isData3DTexture;if(x.isDepthTexture){let ue=P.get(x),bn=P.get(N),ne=P.get(ue.__renderTarget),En=P.get(bn.__renderTarget);y.bindFramebuffer(L.READ_FRAMEBUFFER,ne.__webglFramebuffer),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,En.__webglFramebuffer);for(let ri=0;ri<Mt;ri++){if(si)L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,P.get(x).__webglTexture,O,Ft+ri),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,P.get(N).__webglTexture,dt,he+ri);L.blitFramebuffer(bt,Nt,xt,ut,Et,Zt,xt,ut,L.DEPTH_BUFFER_BIT,L.NEAREST)}y.bindFramebuffer(L.READ_FRAMEBUFFER,null),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(O!==0||x.isRenderTargetTexture||P.has(x)){let ue=P.get(x),bn=P.get(N);y.bindFramebuffer(L.READ_FRAMEBUFFER,J),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,B);for(let ne=0;ne<Mt;ne++){if(si)L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ue.__webglTexture,O,Ft+ne);else L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ue.__webglTexture,O);if(jt)L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,bn.__webglTexture,dt,he+ne);else L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,bn.__webglTexture,dt);if(O!==0)L.blitFramebuffer(bt,Nt,xt,ut,Et,Zt,xt,ut,L.COLOR_BUFFER_BIT,L.NEAREST);else if(jt)L.copyTexSubImage3D(_t,dt,Et,Zt,he+ne,bt,Nt,xt,ut);else L.copyTexSubImage2D(_t,dt,Et,Zt,bt,Nt,xt,ut)}y.bindFramebuffer(L.READ_FRAMEBUFFER,null),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(jt)if(x.isDataTexture||x.isData3DTexture)L.texSubImage3D(_t,dt,Et,Zt,he,xt,ut,Mt,Kt,be,ce.data);else if(N.isCompressedArrayTexture)L.compressedTexSubImage3D(_t,dt,Et,Zt,he,xt,ut,Mt,Kt,ce.data);else L.texSubImage3D(_t,dt,Et,Zt,he,xt,ut,Mt,Kt,be,ce);else if(x.isDataTexture)L.texSubImage2D(L.TEXTURE_2D,dt,Et,Zt,xt,ut,Kt,be,ce.data);else if(x.isCompressedTexture)L.compressedTexSubImage2D(L.TEXTURE_2D,dt,Et,Zt,ce.width,ce.height,Kt,ce.data);else L.texSubImage2D(L.TEXTURE_2D,dt,Et,Zt,xt,ut,Kt,be,ce);if(y.pixelStorei(L.UNPACK_ROW_LENGTH,Fe),y.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Wt),y.pixelStorei(L.UNPACK_SKIP_PIXELS,He),y.pixelStorei(L.UNPACK_SKIP_ROWS,sn),y.pixelStorei(L.UNPACK_SKIP_IMAGES,Sn),dt===0&&N.generateMipmaps)L.generateMipmap(_t);y.unbindTexture()},this.initRenderTarget=function(x){if(P.get(x).__webglFramebuffer===void 0)G.setupRenderTarget(x)},this.initTexture=function(x){if(x.isCubeTexture)G.setTextureCube(x,0);else if(x.isData3DTexture)G.setTexture3D(x,0);else if(x.isDataArrayTexture||x.isCompressedArrayTexture)G.setTexture2DArray(x,0);else G.setTexture2D(x,0);y.unbindTexture()},this.resetState=function(){V=0,X=0,U=null,y.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ua}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Gt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Gt._getUnpackColorSpace()}}var jc={type:"change"},Eo={type:"start"},th={type:"end"},hr=new Ci,Qc=new je,Wm=Math.cos(70*Ba.DEG2RAD),_e=new D,Ue=2*Math.PI,Jt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},bo=0.000001;class To extends rr{constructor(t,e=null){super(t,e);if(this.state=Jt.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ln.ROTATE,MIDDLE:Ln.DOLLY,RIGHT:Ln.PAN},this.touches={ONE:Dn.ROTATE,TWO:Dn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Xe,this._lastTargetPosition=new D,this._quat=new Xe().setFromUnitVectors(t.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new es,this._sphericalDelta=new es,this._scale=1,this._panOffset=new D,this._rotateStart=new Pt,this._rotateEnd=new Pt,this._rotateDelta=new Pt,this._panStart=new Pt,this._panEnd=new Pt,this._panDelta=new Pt,this._dollyStart=new Pt,this._dollyEnd=new Pt,this._dollyDelta=new Pt,this._dollyDirection=new D,this._mouse=new Pt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=qm.bind(this),this._onPointerDown=Xm.bind(this),this._onPointerUp=Ym.bind(this),this._onContextMenu=tg.bind(this),this._onMouseWheel=$m.bind(this),this._onKeyDown=Km.bind(this),this._onTouchStart=jm.bind(this),this._onTouchMove=Qm.bind(this),this._onMouseDown=Zm.bind(this),this._onMouseMove=Jm.bind(this),this._interceptControlDown=eg.bind(this),this._interceptControlUp=ng.bind(this),this.domElement!==null)this.connect(this.domElement);this.update()}set cursorStyle(t){if(this._cursorStyle=t,t==="grab")this.domElement.style.cursor="grab";else this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(jc),this.update(),this.state=Jt.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;if(_e.copy(e).sub(this.target),_e.applyQuaternion(this._quat),this._spherical.setFromVector3(_e),this.autoRotate&&this.state===Jt.NONE)this._rotateLeft(this._getAutoRotationAngle(t));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;if(isFinite(n)&&isFinite(i)){if(n<-Math.PI)n+=Ue;else if(n>Math.PI)n-=Ue;if(i<-Math.PI)i+=Ue;else if(i>Math.PI)i-=Ue;if(n<=i)this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta));else this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=r!=this._spherical.radius}if(_e.setFromSpherical(this._spherical),_e.applyQuaternion(this._quatInverse),e.copy(this.target).add(_e),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){let a=_e.length();r=this._clampDistance(a*this._scale);let o=a-r;this.object.position.addScaledVector(this._dollyDirection,o),this.object.updateMatrixWorld(),s=!!o}else if(this.object.isOrthographicCamera){let a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=o!==this.object.zoom;let l=new D(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),r=_e.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(r!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position);else if(hr.origin.copy(this.object.position),hr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(hr.direction))<Wm)this.object.lookAt(this.target);else Qc.setFromNormalAndCoplanarPoint(this.object.up,this.target),hr.intersectPlane(Qc,this.target)}else if(this.object.isOrthographicCamera){let r=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom)this.object.updateProjectionMatrix(),s=!0}if(this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>bo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>bo||this._lastTargetPosition.distanceToSquared(this.target)>bo)return this.dispatchEvent(jc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(t){if(t!==null)return Ue/60*this.autoRotateSpeed*t;else return Ue/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*0.01);return Math.pow(0.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){_e.setFromMatrixColumn(e,0),_e.multiplyScalar(-t),this._panOffset.add(_e)}_panUp(t,e){if(this.screenSpacePanning===!0)_e.setFromMatrixColumn(e,1);else _e.setFromMatrixColumn(e,0),_e.crossVectors(this.object.up,_e);_e.multiplyScalar(t),this._panOffset.add(_e)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;_e.copy(i).sub(this.target);let s=_e.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(t){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=t;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(t){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=t;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),i=t-n.left,s=e-n.top,r=n.width,a=n.height;this._mouse.x=i/r*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ue*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ue*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){if(this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){if(this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0)this._dollyIn(this._getZoomScale(t.deltaY));else if(t.deltaY>0)this._dollyOut(this._getZoomScale(t.deltaY));this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate)this._rotateUp(Ue*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,this.keyPanSpeed);e=!0;break;case this.keys.BOTTOM:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate)this._rotateUp(-Ue*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,-this.keyPanSpeed);e=!0;break;case this.keys.LEFT:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate)this._rotateLeft(Ue*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(this.keyPanSpeed,0);e=!0;break;case this.keys.RIGHT:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate)this._rotateLeft(-Ue*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(-this.keyPanSpeed,0);e=!0;break}if(e)t.preventDefault(),this.update()}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=0.5*(t.pageX+e.x),i=0.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=0.5*(t.pageX+e.x),i=0.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){if(this.enableZoom)this._handleTouchStartDolly(t);if(this.enablePan)this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){if(this.enableZoom)this._handleTouchStartDolly(t);if(this.enableRotate)this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),i=0.5*(t.pageX+n.x),s=0.5*(t.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ue*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ue*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=0.5*(t.pageX+e.x),i=0.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let r=(t.pageX+e.x)*0.5,a=(t.pageY+e.y)*0.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(t){if(this.enableZoom)this._handleTouchMoveDolly(t);if(this.enablePan)this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){if(this.enableZoom)this._handleTouchMoveDolly(t);if(this.enableRotate)this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];if(e===void 0)e=new Pt,this._pointerPositions[t.pointerId]=e;e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}if(t.ctrlKey&&!this._controlActive)n.deltaY*=10;return n}}function Xm(t){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(t.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(t))return;if(this._addPointer(t),t.pointerType==="touch")this._onTouchStart(t);else this._onMouseDown(t);if(this._cursorStyle==="grab")this.domElement.style.cursor="grabbing"}function qm(t){if(this.enabled===!1)return;if(t.pointerType==="touch")this._onTouchMove(t);else this._onMouseMove(t)}function Ym(t){switch(this._removePointer(t),this._pointers.length){case 0:if(this.domElement.releasePointerCapture(t.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(th),this.state=Jt.NONE,this._cursorStyle==="grab")this.domElement.style.cursor="grab";break;case 1:let e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function Zm(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ln.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=Jt.DOLLY;break;case Ln.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Jt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Jt.ROTATE}break;case Ln.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Jt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Jt.PAN}break;default:this.state=Jt.NONE}if(this.state!==Jt.NONE)this.dispatchEvent(Eo)}function Jm(t){switch(this.state){case Jt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case Jt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case Jt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function $m(t){if(this.enabled===!1||this.enableZoom===!1||this.state!==Jt.NONE)return;t.preventDefault(),this.dispatchEvent(Eo),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(th)}function Km(t){if(this.enabled===!1)return;this._handleKeyDown(t)}function jm(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Dn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=Jt.TOUCH_ROTATE;break;case Dn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=Jt.TOUCH_PAN;break;default:this.state=Jt.NONE}break;case 2:switch(this.touches.TWO){case Dn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=Jt.TOUCH_DOLLY_PAN;break;case Dn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=Jt.TOUCH_DOLLY_ROTATE;break;default:this.state=Jt.NONE}break;default:this.state=Jt.NONE}if(this.state!==Jt.NONE)this.dispatchEvent(Eo)}function Qm(t){switch(this._trackPointer(t),this.state){case Jt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case Jt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case Jt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case Jt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=Jt.NONE}}function tg(t){if(this.enabled===!1)return;t.preventDefault()}function eg(t){if(t.key==="Control")this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function ng(t){if(t.key==="Control")this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}class Ao extends Ii{constructor(t){super(t)}load(t,e,n,i){let s=this,r=new nr(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(t,function(a){try{e(s.parse(a))}catch(o){if(i)i(o);else console.error(o);s.manager.itemError(t)}},n,i)}parse(t){function e(l){let c=new DataView(l),u=50;if(84+c.getUint32(80,!0)*50===c.byteLength)return!0;let m=[115,111,108,105,100];for(let v=0;v<5;v++)if(n(m,c,v))return!1;return!0}function n(l,c,u){for(let d=0,h=l.length;d<h;d++)if(l[d]!==c.getUint8(u+d))return!1;return!0}function i(l){let c=new DataView(l),u=c.getUint32(80,!0),d,h,m,v=!1,b,p,f,R,w;for(let z=0;z<70;z++)if(c.getUint32(z,!1)==1129270351&&c.getUint8(z+4)==82&&c.getUint8(z+5)==61)v=!0,b=new Float32Array(u*3*3),p=c.getUint8(z+6)/255,f=c.getUint8(z+7)/255,R=c.getUint8(z+8)/255,w=c.getUint8(z+9)/255;let M=84,E=50,T=new Re,C=new Float32Array(u*3*3),_=new Float32Array(u*3*3),S=new It;for(let z=0;z<u;z++){let A=M+z*E,H=c.getFloat32(A,!0),J=c.getFloat32(A+4,!0),B=c.getFloat32(A+8,!0);if(v){let V=c.getUint16(A+48,!0);if((V&32768)===0)d=(V&31)/31,h=(V>>5&31)/31,m=(V>>10&31)/31;else d=p,h=f,m=R}for(let V=1;V<=3;V++){let X=A+V*12,U=z*3*3+(V-1)*3;if(C[U]=c.getFloat32(X,!0),C[U+1]=c.getFloat32(X+4,!0),C[U+2]=c.getFloat32(X+8,!0),_[U]=H,_[U+1]=J,_[U+2]=B,v)S.setRGB(d,h,m,Vs),b[U]=S.r,b[U+1]=S.g,b[U+2]=S.b}}if(T.setAttribute("position",new we(C,3)),T.setAttribute("normal",new we(_,3)),v)T.setAttribute("color",new we(b,3)),T.hasColors=!0,T.alpha=w;return T}function s(l){let c=new Re,u=/solid([\s\S]*?)endsolid/g,d=/facet([\s\S]*?)endfacet/g,h=/solid\s(.+)/,m=0,v=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,b=new RegExp("vertex"+v+v+v,"g"),p=new RegExp("normal"+v+v+v,"g"),f=[],R=[],w=[],M=new D,E,T=0,C=0,_=0;while((E=u.exec(l))!==null){C=_;let S=E[0],z=(E=h.exec(S))!==null?E[1]:"";w.push(z);while((E=d.exec(S))!==null){let J=0,B=0,V=E[0];while((E=p.exec(V))!==null)M.x=parseFloat(E[1]),M.y=parseFloat(E[2]),M.z=parseFloat(E[3]),B++;while((E=b.exec(V))!==null)f.push(parseFloat(E[1]),parseFloat(E[2]),parseFloat(E[3])),R.push(M.x,M.y,M.z),J++,_++;if(B!==1)console.error("THREE.STLLoader: Something isn't right with the normal of face number "+m);if(J!==3)console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+m);m++}let A=C,H=_-C;c.userData.groupNames=w,c.addGroup(A,H,T),T++}return c.setAttribute("position",new fe(f,3)),c.setAttribute("normal",new fe(R,3)),c}function r(l){if(typeof l!=="string")return new TextDecoder().decode(l);return l}function a(l){if(typeof l==="string"){let c=new Uint8Array(l.length);for(let u=0;u<l.length;u++)c[u]=l.charCodeAt(u)&255;return c.buffer||c}else return l}let o=a(t);return e(o)?i(o):s(r(t))}}class wo{container=null;canvas=null;renderer=null;scene=null;camera=null;controls=null;modelGroup=new In;materials=[];currentMesh=null;gridHelper=null;axesHelper=null;isWireframe=!1;isAutoRotate=!1;currentTheme="dark";loader=new Ao;animationFrameId=null;defaultCameraPos=new D(30,40,35);defaultTarget=new D(0,0,0);init(t="scad3dContainer",e="scad3dCanvas"){if(this.container=typeof t==="string"?document.getElementById(t):t,this.canvas=typeof e==="string"?document.getElementById(e):e,!this.container&&this.canvas)this.container=this.canvas.parentElement;if(!this.container||!this.canvas)return console.warn("Scad3DViewer: Container or Canvas element not found",{containerIdOrEl:t,canvasIdOrEl:e}),!1;let n=this.container.clientWidth||600,i=this.container.clientHeight||450,s=typeof document<"u"&&document.documentElement.getAttribute("data-theme")==="light"||this.currentTheme==="light";this.currentTheme=s?"light":"dark",this.scene=new Zs;let r=s?16777215:395539;this.scene.background=new It(r),this.scene.fog=new Kn(r,35,160),this.camera=new Ie(45,n/i,0.1,1000),this.camera.position.copy(this.defaultCameraPos),this.renderer=new So({canvas:this.canvas,antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setSize(n,i),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ls,this.controls=new To(this.camera,this.canvas),this.controls.enableDamping=!0,this.controls.dampingFactor=0.05,this.controls.maxPolarAngle=Math.PI/2+0.1,this.controls.minDistance=2,this.controls.maxDistance=500,this.controls.target.copy(this.defaultTarget);let a=new Li(16777215,2.2);a.position.set(-40,60,-30),a.castShadow=!0,a.shadow.mapSize.width=2048,a.shadow.mapSize.height=2048,this.scene.add(a);let o=new Li(3718648,1.1);o.position.set(40,30,40),this.scene.add(o);let l=new Li(3462041,0.5);return l.position.set(0,-30,0),this.scene.add(l),this.gridHelper=new ni(300,150,61695,1976635),this.gridHelper.position.y=0,this.scene.add(this.gridHelper),this.axesHelper=new sr(10),this.axesHelper.position.set(0,0.05,0),this.scene.add(this.axesHelper),this.scene.add(this.modelGroup),new ResizeObserver(()=>{this.resize()}).observe(this.container),this.animate(),!0}animate=()=>{if(this.animationFrameId=requestAnimationFrame(this.animate),this.controls)this.controls.autoRotate=this.isAutoRotate,this.controls.autoRotateSpeed=2,this.controls.update();if(this.renderer&&this.scene&&this.camera)this.renderer.render(this.scene,this.camera)};clearModel(){if(!this.scene)return;while(this.modelGroup.children.length>0){let t=this.modelGroup.children[0];if(this.modelGroup.remove(t),t.geometry)t.geometry.dispose();if(t.material)if(Array.isArray(t.material))t.material.forEach((e)=>e.dispose());else t.material.dispose()}if(this.currentMesh){if(this.scene.remove(this.currentMesh),this.currentMesh.geometry)this.currentMesh.geometry.dispose();this.currentMesh=null}this.materials=[],this.modelGroup.position.set(0,0,0),this.modelGroup.rotation.set(0,0,0)}loadColoredMeshes(t,e=!1){if(!this.scene||!t||t.length===0)return!1;this.clearModel();for(let s of t){let r=null;if(s.buffer)r=this.loader.parse(s.buffer);else if(s.stlBase64){let h=atob(s.stlBase64),m=h.length,v=new Uint8Array(m);for(let b=0;b<m;b++)v[b]=h.charCodeAt(b);r=this.loader.parse(v.buffer)}if(!r)continue;r.computeVertexNormals(),r.rotateX(-Math.PI/2);let[a=0.06,o=0.72,l=0.51,c=1]=s.color,u=new Qi({color:new It(a,o,l),opacity:c,transparent:c<1,roughness:0.42,metalness:0.1,wireframe:this.isWireframe,side:ze}),d=new Ne(r,u);d.castShadow=!0,d.receiveShadow=!0,this.materials.push(u),this.modelGroup.add(d)}if(this.modelGroup.children.length===0)return!1;let n=new en().setFromObject(this.modelGroup),i=new D;if(n.getCenter(i),this.modelGroup.position.set(-i.x,-n.min.y,-i.z),!e)this.fitCameraToObject(this.modelGroup);else this.updateGridForMesh(this.modelGroup);return!0}applyGeometry(t,e=!1){if(!this.scene)return;this.clearModel(),t.computeVertexNormals(),t.rotateX(-Math.PI/2),t.center(),t.computeBoundingBox();let n=t.boundingBox;t.translate(0,-n.min.y,0);let i=new Qi({color:1096065,roughness:0.38,metalness:0.12,wireframe:this.isWireframe,side:ze});if(this.currentMesh=new Ne(t,i),this.currentMesh.castShadow=!0,this.currentMesh.receiveShadow=!0,this.materials.push(i),this.modelGroup.add(this.currentMesh),!e)this.fitCameraToObject(this.modelGroup);else this.updateGridForMesh(this.modelGroup)}async loadModel(t,e){if(!this.scene)return!1;if(e)e(!0);try{let n=t.includes("?")?`${t}&format=colored`:`${t}?format=colored`,i=await fetch(n);if((i.headers.get("Content-Type")||"").includes("application/json")){let o=await i.json();if(o&&o.format==="colored-mesh-bundle"&&Array.isArray(o.meshes)){let l=this.loadColoredMeshes(o.meshes,!1);if(e)e(!1);return l}}let r=await i.arrayBuffer(),a=this.loader.parse(r);if(this.applyGeometry(a,!1),e)e(!1);return!0}catch(n){if(console.error("Scad3DViewer: Failed to load model from "+t,n),e)e(!1);return!1}}loadModelFromBuffer(t,e=!0){if(!this.scene)return!1;try{if(typeof t==="string"){let n=JSON.parse(t);if(n&&n.format==="colored-mesh-bundle"&&Array.isArray(n.meshes))return this.loadColoredMeshes(n.meshes,e)}else if(t instanceof ArrayBuffer){let n=new Uint8Array(t,0,Math.min(t.byteLength,20));if(String.fromCharCode(...n).trim().startsWith("{")){let r=new TextDecoder().decode(t),a=JSON.parse(r);if(a&&a.format==="colored-mesh-bundle"&&Array.isArray(a.meshes))return this.loadColoredMeshes(a.meshes,e)}let s=this.loader.parse(t);return this.applyGeometry(s,e),!0}return!1}catch(n){return console.error("Scad3DViewer: Failed to parse buffer",n),!1}}updateGridForMesh(t){if(!this.scene)return;let e=new en().setFromObject(t),n=new D;e.getSize(n);let i=Math.max(n.x,n.y,n.z,2);if(this.gridHelper){this.scene.remove(this.gridHelper);let s=Math.max(Math.ceil(i*3.5/10)*10,180),r=Math.max(Math.round(s/2),60);this.gridHelper=new ni(s,r,61695,1976635),this.gridHelper.position.y=0,this.scene.add(this.gridHelper)}}fitCameraToObject(t,e=0.55){if(!this.camera||!this.controls)return;let n=new en().setFromObject(t),i=new D,s=new D;n.getCenter(i),n.getSize(s);let r=Math.max(s.x,s.y,s.z,2),a=this.camera.fov*(Math.PI/180),o=Math.abs(r/(2*Math.tan(a/2)))*e;o=Math.max(o,6);let l=new D(1.1,1.25,1.35).normalize();this.camera.position.copy(i).add(l.multiplyScalar(o)),this.camera.lookAt(i),this.controls.target.copy(i),this.controls.minDistance=o*0.1,this.controls.maxDistance=o*8,this.controls.update(),this.defaultCameraPos.copy(this.camera.position),this.defaultTarget.copy(i),this.updateGridForMesh(t)}resetCamera(){if(!this.camera||!this.controls)return;this.camera.position.copy(this.defaultCameraPos),this.controls.target.copy(this.defaultTarget),this.controls.update()}toggleWireframe(){this.isWireframe=!this.isWireframe;for(let t of this.materials)t.wireframe=this.isWireframe;return this.isWireframe}toggleAutoRotate(){return this.isAutoRotate=!this.isAutoRotate,this.isAutoRotate}resize(){if(!this.container||!this.renderer||!this.camera)return;let t=this.container.clientWidth||600,e=this.container.clientHeight||450;if(t===0||e===0)return;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)}setTheme(t){if(this.currentTheme=t,!this.scene)return;if(t==="light"){if(this.scene.background=new It(16777215),this.scene.fog=new Kn(16777215,35,160),this.gridHelper)if(this.scene.remove(this.gridHelper),this.gridHelper.geometry.dispose(),Array.isArray(this.gridHelper.material))this.gridHelper.material.forEach((n)=>n.dispose());else this.gridHelper.material.dispose();this.gridHelper=new ni(300,150,988970,14870768),this.gridHelper.position.y=0,this.scene.add(this.gridHelper)}else{if(this.scene.background=new It(395539),this.scene.fog=new Kn(395539,35,140),this.gridHelper)if(this.scene.remove(this.gridHelper),this.gridHelper.geometry.dispose(),Array.isArray(this.gridHelper.material))this.gridHelper.material.forEach((n)=>n.dispose());else this.gridHelper.material.dispose();this.gridHelper=new ni(300,150,61695,1976635),this.gridHelper.position.y=0,this.scene.add(this.gridHelper)}}dispose(){if(this.animationFrameId!==null)cancelAnimationFrame(this.animationFrameId);if(this.renderer)this.renderer.dispose();if(this.controls)this.controls.dispose()}}if(typeof window<"u")window.Scad3DViewer=wo,window.Scad3DViewerInstance=new wo;export{wo as Scad3DViewer};
