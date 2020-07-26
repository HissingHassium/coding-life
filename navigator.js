function clearActive(navSelector, itemSelector) {
    let navItemSelector = (navSelector.trim() + '>li.nav-item>' + itemSelector.trim()).trim();
    // console.log(navItemSelector);
    let navItems = [];
    let tmp = $(navItemSelector);
    // console.log(navItems);
    for (let i = 0; i < tmp.length; i++) {
        tmp[i].classList.remove('active');
    }
}
$('ul#navbar>li.nav-item>a.nav-link').click(function () {
    if (this.classList.contains('active'))
        return;
    clearActive('ul#navbar', 'a.nav-link');
    this.classList.add('active');
    tab.currentActive=this.id;
    // $('div#debug-info>span#currentActiveTab')[0].innerText = this.id
    console.log(this.id)
})
