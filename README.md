TreeView-Problem
=======================
v0.0
Created a small program to highlight a problem I'm having with a TreeController serving a ListView.
I want to have a menu show up that contains one submenu:
    item 1
    item 2
    item 3
        item 3a
        item 3b
    item 4
    item 5

I purposely put all the code into the resources/main_page.js file for this example.

The menu is contained in a TreeController as an array of TreeMenuItem objects. One of the objects has an array
of child TreeMenuItem objects.

A ListView is created that binds to the treeMenuController.content property and extends a ListViewItem as it's
exampleView.

Items 1-5 draw as expected, but the submeu (3a,3b) does not.  I set TreeMenuItem.isExpandable to true for
all node hoping that they would all draw.

Also, when I bind to the treeMenuController.arrangedObjects property, nothing displays.

What am I doing wrong?

v0.1
Changed to make root node an actual object instead of an array [] per Keating.  Also
sourced array from TreeController.arrangedObjects instead of TreeController.content.
Now, the full tree displays, but when I collapse item 3, all nodes frow that one down disappear.
Do I need to listen for changes and redraw?