//start preloader
$(window).on('load', () => {
    $(".preloader").fadeOut(800);
    $(".preloadContainer").delay(800).fadeOut(1000);
});
// end preloader

// start tabs
class Tabs {
    tabs(data) {
        // default tabs activated
        const button = $(data.tabsButtons)[data.defaultTab];
        const content = $(data.tabsContents)[data.defaultTab];
        $(button).addClass(data.activeCls);
        $(content).addClass(data.activeCls);
        $(data.tabsComp).on(data.eventName, (e) => {
            const id = e.target.dataset.id;

            if (id) {
                $(data.tabsButtons).each((i, button) => {
                    $(button).removeClass(data.activeCls);
                    $(e.target).addClass(data.activeCls);
                });
                $(data.tabsContents).each((i, tabsContent) => {
                    $(tabsContent).removeClass(data.activeCls);
                    $('#' + id).addClass(data.activeCls);
                });
            }
        })
    }
}
// end tabs

// dom content is loaded
$(() => {
    const TabCls = new Tabs;
    TabCls.tabs({
        tabsComp: '.tabsComp',
        tabsButtons: '.tabsButton>li',
        tabsContents: '.tabsContent',
        activeCls: 'activeTabCls',
        defaultTab: 0, // o to array Element postion
        eventName: 'click'
    });
});