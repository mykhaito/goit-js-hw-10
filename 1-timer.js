import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                     */import{f,i as h}from"./assets/vendor-BbbuE1sJ.js";let a=null;const r=document.querySelector("button[data-start]"),u=document.querySelector("#datetime-picker"),n={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")},y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t<=new Date?(h.error({title:"Error",message:"Please choose a date in the future"}),r.disabled=!0):(a=t,r.disabled=!1)}};function p(e){const d=Math.floor(e/864e5),i=Math.floor(e%864e5/36e5),l=Math.floor(e%864e5%36e5/6e4),m=Math.floor(e%864e5%36e5%6e4/1e3);return{days:d,hours:i,minutes:l,seconds:m}}f(u,y);r.addEventListener("click",()=>{if(!a)return;r.disabled=!0,u.disabled=!0;const e=setInterval(()=>{const s=a-new Date;if(s<=0){clearInterval(e),c(0),u.disabled=!1;return}c(s)},1e3)});function c(e){const t=p(e);n.days.textContent=o(t.days),n.hours.textContent=o(t.hours),n.minutes.textContent=o(t.minutes),n.seconds.textContent=o(t.seconds)}function o(e){return String(e).padStart(2,"0")}
//# sourceMappingURL=1-timer.js.map
