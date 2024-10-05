const views = document.querySelectorAll("#view");

var observer = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
          observer.unobserve(entry)
        }
    });

} 
);

views.forEach(card =>{
    observer.observe(card);
});