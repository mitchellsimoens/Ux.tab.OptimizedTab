Ux.tab.OptimizedTab
===================

An item of Ext.tab.Panel for ST2 that will add/remove it's items on activate/deactivate

When a tab has been deactivated, the items will be removed but not destroyed and will be cached.

When a tab is activated, the items that have been cached will be added. If the items are actual
components then they will be simply added and rendered.