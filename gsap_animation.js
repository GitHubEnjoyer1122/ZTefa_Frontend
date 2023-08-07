function openMenu(params) {
    gsap.fromTo('.sidebar-menu',{x: "0px"},{duration: 1, x: '-200px'});            
}

function closeMenuMobile(){
    gsap.fromTo('.sidebar-menu',{x: "-200px"},{duration: 1, x: '0px'});
}