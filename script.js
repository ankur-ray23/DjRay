var typed= new Typed(".typing", {
    strings:["Data Scientist", "Coder","Swimmer", "Photography Enthusiast"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})


const nav = document.querySelector(".nav"),
    navList=nav.querySelectorAll("li"),
    totalNavList=navList.length,
    allSection=document.querySelectorAll(".section"),
    totalSection=allSection.length;
    for (let i=0; i<totalNavList; i++)
    {
        const a=navList[i].querySelector("a");
        a.addEventListener("click",function()
        {
            removeBackSection();
            for (let j=0;j<totalNavList;j++)
            {
                if (navList[j].querySelector("a").classList.contains("active"))
                {
                    addBackSection(j);
                    // allSection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this);
            if (window.innerWidth<1237)
            {
                asideSectionTogglerBtn();
            }
        })
    }
    function removeBackSection()
    {
        for (let i=0; i<totalSection; i++)
        {
            allSection[i].classList.remove("back-section");
        }
    }
    function addBackSection(num)
    {
        allSection[num].classList.add("back-section");
    }
    function showSection(element)
    {
        for (let i=0; i<totalSection; i++)
        {
            allSection[i].classList.remove("active");
        }    
        const target =element.getAttribute("href").split("#")[1];
        document.querySelector("#"+target).classList.add("active")

    }
    function updateNav(element)
    {
        for (let i=0; i<totalNavList ;i++)
        {
            navList[i].querySelector("a").classList.remove("active");
            const target=element.getAttribute("href").split("#")[1];
            if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
            {
                navList[i].querySelector("a").classList.add("active");
            }
        }

    }
    document.querySelector(".hire-me").addEventListener("click", function()
    {
        const sectionIndex = this.getAttribute("data-section-index");
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);

    })

    const navTogglerBtn=document.querySelector(".nav-toggler"),
        aside=document.querySelector(".aside");
        navTogglerBtn.addEventListener("click", () =>
        {
            asideSectionTogglerBtn();
        })
        function asideSectionTogglerBtn()
        {
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
            for (let i=0; i<totalSection; i++)
            {
                allSection[i].classList.toggle("open")
            }
        }
    
    // function changeActiveSectionOnScroll() {
    //     const scrollY = window.scrollY;
    //     allSection.forEach((section, index) => {
    //         const sectionTop = section.offsetTop;
    //         const sectionHeight = section.offsetHeight;
    
    //         if (scrollY >= sectionTop - sectionHeight / 3 && scrollY < sectionTop + sectionHeight - sectionHeight / 3) {
    //             for (let i = 0; i < totalSection; i++) {
    //                 allSection[i].classList.remove("active");
    //                 allSection[i].classList.remove("back-section");
    //                 navList[i].querySelector("a").classList.remove("active");
    //             }
    //             section.classList.add("active");
    //             navList[index].querySelector("a").classList.add("active");
    //             if (index > 0) {
    //                 allSection[index - 1].classList.add("back-section");
    //             }
    //         }
    //     });
    // }
    
    // window.addEventListener('scroll', changeActiveSectionOnScroll);

    const scriptURL = 'https://script.google.com/macros/s/AKfycbw2gqNpI93A10L3rzfD4jWhCpYniFwpBRLThTUiMQokqMsk3miZNGy19yf5S2fXSC9hlg/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg=document.getElementById("msg")

    form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML="Form Submitted Successfully"
            setTimeout(function(){
                msg.innerHTML=""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })
    document.addEventListener('touchstart', function(event) {
        event.preventDefault();
    }, { passive: false });

