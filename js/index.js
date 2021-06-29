// SCROLL

//SMOOTH SCROLL WHEN CLICKED
// elm.scrollIntoView({ behavior: 'smooth', block: 'center' })
let navClick = document.getElementsByClassName('single_nav');
for(let i = 0; i < navClick.length; i++){
  navClick[i].addEventListener('click', function(e){
    let target = e.target.getAttribute('data-target');
    let targetContent = document.getElementById(target);
    targetContent.scrollIntoView({ behavior: 'smooth', block: 'center' });
  })
}


//SCROLL AWARE
function selectElementByClass(className) {
    return document.querySelector(`.${className}`);
  }

  const sections = [
    selectElementByClass('content_about_me'),
    selectElementByClass('content_skill'),
    selectElementByClass('content_portfolio'),
    selectElementByClass('content_contact'),
  ];
  
  
  const navItems = {
    content_about_me: selectElementByClass('nav_about_me'),
    content_skill: selectElementByClass('nav_skill'),
    content_portfolio: selectElementByClass('nav_portfolio'),
    content_contact: selectElementByClass('nav_contact')
  };

  // intersection observer setup
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.7,
  };
  
  function observerCallback(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // get the nav item corresponding to the id of the section
        // that is currently in view
        console.log(entry.target.id)
        //content_about_me
        //content_contact
        const navItem = navItems[entry.target.id];

        console.log(navItems);
        // add 'active' class on the navItem
        navItem.classList.add('nav_active');
        // remove 'active' class from any navItem that is not
        // same as 'navItem' defined above
        Object.values(navItems).forEach((item) => {
          if (item != navItem) {
            item.classList.remove('nav_active');
          }
        });
      }
    });
  }
  
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  
  sections.forEach((sec) => observer.observe(sec));

  

  // PORTFOLIO

  /*
  {
        title : 'Online Chat',
        description : 'Online chatting app with socket io, node js and postgresql. This Web App hosted on VPS with NGINX',
        github : 'https://money-manager-8787.netlify.app',
        link : 'https://www.cwuit.com',
        img : './images/money_manager.png'
    },
  */
//    <img class="portfolio_single" src="${PORTFOLIO[i].img}">
    let build = '';
    for(let i=0 ; i < PORTFOLIO.length; i++){
      build += `
      <div class="portfolio_single_wrapper">
        <div class="portfolio_single_title">${PORTFOLIO[i].title}</div>
        <div class="portfolio_single_inside_content">
        <img src="${PORTFOLIO[i].img}" class="portfolio_single_img">
        <div>
        <div class="portfolio_description_single">${PORTFOLIO[i].description}</div>
        
        <div class="portfolio_stack_list">`;
        
        for(let j=0; j<PORTFOLIO[i].stacks.length; j++){
          build += `<div class="s_other" > ${PORTFOLIO[i].stacks[j]}</div>`
        }

        // build += `<span class="s_other s_${PORTFOLIO[i].stacks[j]}" > ${PORTFOLIO[i].stacks[j]}</span>`
      build +=
        `</div>
        
        
        </div>
        </div>
        <a target="_blank" class="github_btn" href="${PORTFOLIO[i].github}">Github</a>
        <a target="_blank" class="view_btn" href="${PORTFOLIO[i].link}">View</a>
      </div>
      `
    }

    let portfolio = document.getElementById('portfolio_content');
    portfolio.innerHTML = build;