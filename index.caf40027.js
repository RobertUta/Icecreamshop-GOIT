const e=document.getElementById("btn-prev"),t=document.getElementById("btn-next"),c=document.querySelectorAll(".slide"),s=document.querySelectorAll(".dot"),o=document.querySelectorAll(".feedback");let d=0;const l=e=>{(e=>{for(const e of c)e.classList.remove("active");c[e].classList.add("active")})(e),(e=>{for(const e of s)e.classList.remove("active_dot");s[e].classList.add("active_dot")})(e),(e=>{for(const e of o)e.classList.remove("active");o[e].classList.add("active")})(e)};s.forEach(((e,t)=>{e.addEventListener("click",(()=>{d=t,l(d)}))})),t.addEventListener("click",(()=>{d==c.length-1?(d=0,l(d)):(d++,l(d))})),e.addEventListener("click",(()=>{0==d?(d=c.length-1,l(d)):(d--,l(d))}));
//# sourceMappingURL=index.caf40027.js.map
