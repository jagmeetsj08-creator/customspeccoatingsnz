document.getElementById("year").textContent=new Date().getFullYear();

const photos=document.getElementById("photos");
const files=document.getElementById("files");
if(photos){
  photos.addEventListener("change",()=>{
    files.innerHTML="";
    [...photos.files].forEach(f=>{
      const d=document.createElement("div");
      d.style.cssText="font-size:9px;color:#f4d000;margin-top:3px";
      d.textContent="✓ "+f.name;
      files.appendChild(d);
    });
  });
}
