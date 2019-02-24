import "./index.css";//加载css
import "../iconfont/iconfont.css";//加载字体图标库
import bg from "./a.png"
var el = document.createElement("div");
var i = document.createElement("i");
el.innerText="webpack start";
el.style.width="400px";
el.style.height="600px";
el.style.background="red";
el.style.backgroundImage="url("+bg+")";
i.className="iconfont icon-icon-1";
i.style.color="red";
i.style.fontSize="40px";
el.appendChild(i);

document.body.appendChild(el)