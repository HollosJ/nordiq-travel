const cursor=document.getElementById("cursor"),hoverables=document.querySelectorAll(".hoverable");document.addEventListener("mousemove",e=>{cursor.style.left=e.clientX-20+"px",cursor.style.top=e.clientY-20+"px"}),hoverables.forEach(e=>{e.addEventListener("mouseenter",()=>{cursor.classList.add("active")}),e.addEventListener("mouseleave",()=>{cursor.classList.remove("active")})});
const nav_toggle=document.getElementById("nav__toggle"),nav_wrapper=document.getElementById("nav__wrapper");nav_toggle.addEventListener("click",()=>{nav_wrapper.classList.toggle("active")});const nav_btns=document.querySelectorAll(".nav__item");nav_btns.forEach(e=>{e.addEventListener("click",()=>{nav_wrapper.classList.remove("active")})});
const stories=[{img:"img/storiesimg1.jpg",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium maxime, recusandae explicabo voluptate similique unde dolore illum earum eveniet consequuntur quis reprehenderit suscipit voluptatibus inventore eaque blanditiis sit tempora exercitationem, repudiandae magni provident maiores. Eligendi sapiente saepe id non eos exercitationem amet harum, dolores reprehenderit suscipit! Ab mollitia beatae amet!"},{img:"img/storiesimg2.jpg",text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor temporibus qui vitae odio aspernatur! Cupiditate dolores, ullam tenetur harum quia tempora totam quidem porro, a nisi consequuntur accusantium commodi blanditiis minus consectetur dolor! Corporis facilis mollitia voluptate quam dolorum quaerat?"},{img:"img/storiesimg3.jpg",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quaerat earum velit ex laudantium placeat. Incidunt omnis dolorem tempore, praesentium, ea suscipit repellat officia ab, eum tempora ducimus! Culpa quos et fugit similique fugiat, cupiditate praesentium, labore assumenda facilis odio recusandae minima neque alias mollitia obcaecati reprehenderit consequatur nemo aperiam blanditiis."}],storyImg=document.getElementById("story__img"),storyText=document.getElementById("story__text"),dots=document.querySelectorAll(".dot");let i=0,time=1e4;changeImg=()=>{storyImg.src=stories[i].img,storyText.innerText=`"${stories[i].text}"`,dots.forEach(e=>{e.classList.remove("active")}),dots[i].classList.add("active"),i<stories.length-1?i++:i=0,setTimeout("changeImg()",time)},window.onload=changeImg;