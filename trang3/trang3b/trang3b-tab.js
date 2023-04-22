const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item-hs");
const panes = $$(".tab-pane-hs");


// SonDN fixed - Active size wrong size on first load.
// Original post: https://www.facebook.com/groups/649972919142215/?multi_permalinks=1175881616551340


tabs.forEach((tab, index) => {
    const pane = panes[index];

    tab.onclick = function () {
        $(".tab-item-hs.active").classList.remove("active");
        $(".tab-pane-hs.active").classList.remove("active");


        this.classList.add("active");
        pane.classList.add("active");
    };
});
