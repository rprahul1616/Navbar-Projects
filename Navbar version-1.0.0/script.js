const toggleNavbarSideSection=()=>{
    const sideBar=document.querySelector('.nav-sidebar')
    if(sideBar.className.match('nav-sidebar-deactive'))
    {
        sideBar.classList.add('nav-sidebar-active');
        sideBar.classList.remove('nav-sidebar-deactive');
        
    }
    else if(sideBar.className.match('nav-sidebar-active'))
    {
        sideBar.classList.add('nav-sidebar-deactive');
        sideBar.classList.remove('nav-sidebar-active');
        
    }
}