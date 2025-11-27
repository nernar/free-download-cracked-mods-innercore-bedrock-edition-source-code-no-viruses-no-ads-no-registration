var MODS_PER_PAGE = 10;
var MOD_PAGE_UI_OFFSET_TOP = 0;
var MOD_PAGE_UI_OFFSET_BOTTOM = 75;
var MOD_TITLE_UI_SIZE = 180;
var MOD_PAGE_UI_LIKES_Y = 90;
var UPPER_BAR_HEIGHT = 60;
var UPPER_BAR_PADDING_TOP = 5;
var UPPER_BAR_PADDING_BOTTOM = 15;
var NAV_BAR_HEIGHT = 60;
var SORT_TEXT_Y = 11;
var element = {sortBtn: new FramedButton({x: 650, y: 20}, 340, 60, {onClick: function () {
    if (!UpperBar.mode) {
        CurrentState.nextSort();
        refreshModList(0);
    }
}}), searchBtn: {type: "image", x: 10, y: 20, z: 8, height: 1000, scale: 1.2, bitmap: "mod_browser_search_field", clicker: {onClick: function () {
    var ctx = UI.getContext();
    var builder = new AlertDialog.Builder(ctx);
    builder.setTitle(locale.mod_search);
    var input = new EditText(ctx);
    input.setText(CurrentState.search);
    builder.setView(input);
    builder.setPositiveButton("OK", new DialogInterface.OnClickListener({onClick: function () {
        CurrentState.search = input.getText().toString();
        TabList.header.elements.searchText.text = CurrentState.search;
        refreshModList(0);
    }}));
    builder.setNegativeButton(locale.cancel, new DialogInterface.OnClickListener({onClick: function () {
    }}));
    builder.show();
}}}, goToNextImg: {type: "image", bitmap: "mod_browser_icon_next", x: 865, y: 16, z: 1, scale: 3}, goToNextBtn: new FramedButton({x: 770, y: 5, z: 0}, 230, 70, {onClick: function () {
    if (!UpperBar.mode) {
        nextPage();
    }
}}), installAll: new FramedButton({x: 330, y: 10}, 340, 70, {onClick: function () {
    openUpdatePage();
}}), returnImg: {type: "image", bitmap: "mod_browser_icon_back", x: 90, y: 16, z: 1, scale: 3}, returnBtn: new FramedButton({x: 0, y: 5}, 230, 70, {onClick: function () {
    refreshUpdatesList();
}})};
var TabList = {header: {drawing: [{type: "color", color: Color.rgb(149, 134, 129)}], elements: {searchText: {type: "text", x: 20, y: 30, z: 10, text: locale.search, font: fonts.upperBarLeft}, sortText: {type: "text", x: 816, y: SORT_TEXT_Y, z: 10, text: "sort", font: fonts.upperBar}, modTitle: {type: "text", x: 500, y: 8, z: 10, text: "", font: fonts.modTitle}, sortBtn: element.sortBtn, searchBtn: element.searchBtn}}, body: {drawing: [{type: "color", color: Color.argb(255, 80, 80, 80)}], elements: {}}, footer: {drawing: [{type: "color", color: Color.rgb(149, 134, 129)}], elements: {goToPrevImg: element.returnImg, goToPrevBtn: new FramedButton({x: 0, y: 5, z: 0}, 230, 70, {onClick: function () {
    if (UpperBar.mode) {
        if (TabList.body.elements.screensSlider && TabList.body.elements.screensSlider.visible) {
            TabList.body.elements.screensSlider.visible = false;
        } else {
            currPage();
        }
    } else {
        prevPage();
    }
}}), goToNextImg: element.goToNextImg, goToNextBtn: element.goToNextBtn, pageText: {type: "text", x: 500, y: 0, text: locale.page + ":", font: fonts.upperBar}}}};
var TabUpdate = {header: {drawing: [{type: "color", color: Color.rgb(149, 134, 129)}], elements: {modTitle: {type: "text", x: 500, y: 8, z: 10, text: locale.mod_updates, font: fonts.modTitle}}}, body: {drawing: [{type: "color", color: Color.argb(255, 80, 80, 80)}], elements: {}}, footer: {drawing: [{type: "color", color: Color.rgb(149, 134, 129)}], elements: {installAll: element.installAll, installAllText: {type: "text", x: 500, y: 13, z: 10, text: locale.update_all, font: fonts.upperBar}}}};

