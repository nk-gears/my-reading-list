let input=document.querySelector('#searchKey');
let count=document.querySelector('.count');
let apiList=document.querySelector('.apis');
let loaderHTML=document.querySelector('.loader');
let scrollToTopBtn=document.querySelector('#top');
document.querySelector('#searchKey').addEventListener('change',filterResults );

const renderLoader=()=>{
  let loader=`
      <div class="spinner-border spinner" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      `;
  loaderHTML.insertAdjacentHTML('beforeend',loader);
}

const clearLoader=()=>{
  let spinner=document.querySelector('.spinner');
  if(spinner){
    spinner.parentElement.removeChild(spinner);
  }

}

async function filterResults(){
      apiList.innerHTML="";
    //  count.textContent="";
     let searchText=input.value;

      window.results.forEach(el => {
        const hasMatch=(el.title.indexOf(searchText)>=0 ||
        el.description.indexOf(searchText)>=0 ||
        el.domain.indexOf(searchText)>=0 ||
        el.url.indexOf(searchText)>=0
        );

        if(hasMatch) displayApi(el);
      });

}

    const displayApi =(el)=>{

        let markup=`
        <div class="apibox card " data-aos="fade-up">
        <h4 class="mt-4">${el.domain}</h4>
        <p class="blue"><a class="article_link" target="_blank" href="${el.url}">${el.title}</a></p>
        <p><img width="150" src=${el.imageURL}></p>
        </div>
        `;

        apiList.insertAdjacentHTML('beforeend',markup)
}

//Scroll to top button

let displayScrollBtn =()=>{
    let y=window.scrollY;
      if (y > 200) {scrollToTopBtn.classList.replace("hide","show")}
      else{scrollToTopBtn.classList.replace("show","hide");}
  }
window.addEventListener('scroll', displayScrollBtn);

scrollToTopBtn.addEventListener('click',function(){
  window.scrollTo({
    top:0,
    left:0,
    behavior:'smooth'
  })
});

//todo
// update portfolio with this project