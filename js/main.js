//For nav bar 

window.addEventListener("scroll" , () => 
{
    document.querySelector("nav").classList.toggle("window_scroll" , window.scrollY > 0);
});



// for Faqs

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq =>
{
    faq.addEventListener("click" , () =>
    {
        faq.classList.toggle("open");

        // to change icon to + to -
        const icon = faq.querySelector(".faq_icon i");
        if(icon.className === "uil uil-plus")
        {
            icon.className = "uil uil-minus";
        }
        else
        {
            icon.className = "uil uil-plus";
        }
    })
})


// for responsive nav Button / bar


const menu = document.querySelector(".nav_menu");
const menubtn = document.querySelector("#open-menu-btn");
const closebtn = document.querySelector("#close-menu-btn");

menubtn.addEventListener("click" , () =>
{
    menu.style.display = "flex";
    closebtn.style.display = "inline-block";
    menubtn.style.display = "none";
}); 

//For Closing

closebtn.addEventListener("click" , () =>
{
    menu.style.display = "none";
    closebtn.style.display = "none";
    menubtn.style.display = "inline-block";
});
