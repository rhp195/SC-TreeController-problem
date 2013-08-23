// ==========================================================================
// Project:   TreeviewProblem - mainPage
// Copyright: @2013 My Company, Inc.
// ==========================================================================
/*globals TreeviewProblem */
TreeviewProblem.TreeMenuItem = SC.Object.extend(SC.TreeItemContent, {
    title: null,
    isExpanded: true,
    submenu: null,
    
    treeItemChildren: function()
    {
        return this.get('submenu');
    }.property()
});

TreeviewProblem.treeMenuController = SC.TreeController.create( {

    treeItemIsExpandedKey: 'isExpanded',
    treeItemChildrenKey:   'submenu',
    
    content: TreeviewProblem.TreeMenuItem.create({
        title: 'root',
        isExpanded: true, // the root node MUST be expanded!
        submenu: [
            TreeviewProblem.TreeMenuItem.create({title: 'item 1'}),
            TreeviewProblem.TreeMenuItem.create({title: 'item 2'}),
            TreeviewProblem.TreeMenuItem.create({
                title: 'item 3',
                submenu: [
                    TreeviewProblem.TreeMenuItem.create({title: 'item 3a'}),
                    TreeviewProblem.TreeMenuItem.create({title: 'item 3b'})
                ]
            }),
            TreeviewProblem.TreeMenuItem.create({title: 'item 4'}),
            TreeviewProblem.TreeMenuItem.create({title: 'item 5'})
        ]
    })
});

// This page describes the main user interface for your application.
TreeviewProblem.mainPage = SC.Page.design({

    mainPane: SC.MainPane.design({
        childViews: ['treeMenuView'],
        
        treeMenuView: SC.ListView.design({
            rowHeight: 30,
            layout: { width: 100, top: 0, left: 0},
            contentBinding: 'TreeviewProblem.treeMenuController.arrangedObjects',
            exampleView: SC.ListItemView.extend({
                layout: { height: 30, width: 100 },
                contentValueKey: 'title'
            })
        })
    })
});
