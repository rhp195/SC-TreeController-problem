// ==========================================================================
// Project:   TreeviewProblem - mainPage
// Copyright: @2013 My Company, Inc.
// ==========================================================================
/*globals TreeviewProblem */
TreeviewProblem.TreeMenuItem = SC.Object.extend(SC.TreeItemContent, {
    title: null,
    isExpanded: false,
    submenu: null,
    
    treeItemChildren: function() { return this.get('submenu'); }
});

TreeviewProblem.treeMenuController = SC.TreeController.create( {

    treeItemIsExpandedKey: 'isExpanded',
    treeItemChildrenKey:   'submenu',
    allowsSelection: true,
    allowsMultipleSelection: false,
    allowsEmptySelection: true,

    content: [
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
});

// This page describes the main user interface for your application.
TreeviewProblem.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page
  // load.
    mainPane: SC.MainPane.design({
        childViews: ['treeMenuView'],
        
        treeMenuView: SC.ListView.design({
            rowHeight: 30,
            layout: { width: 100, top: 0, left: 0},
            contentBinding: 'TreeviewProblem.treeMenuController.content',
            exampleView: SC.ListItemView.extend({
                layout: { height: 30, width: 100 },
                contentValueKey: 'title'
            })
        })
    })
});
