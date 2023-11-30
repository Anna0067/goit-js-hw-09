let t;const e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");e.addEventListener("click",(function(){e.disabled=!0,t=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),n.addEventListener("click",(function(){e.disabled=!1,clearInterval(t)}));
//# sourceMappingURL=01-color-switcher.ef9371ea.js.map
