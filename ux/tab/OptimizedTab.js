Ext.define('Ux.tab.OptimizedTab', {
    extend : 'Ext.Container',
    xtype  : 'optimized-tab',

    config : {
        /**
         * @cfg {String} title
         * The title of the card that this tab is bound to.
         * @accessor
         */
        title : null,

        /**
         * Keeps track of the items when deactivated to be readded when activated.
         * @private
         */
        optimizedItems : null
    },

    constructor : function (config) {
        var me = this;

        config.optimizedItems = config.items || me.config.items;
        config.items = null;

        me.callParent([config]);

        me.on({
            scope      : me,
            activate   : 'onTabActivate',
            deactivate : 'onTabDeactivate'
        });
    },

    onTabActivate : function (tab) {
        var items = tab.getOptimizedItems();

        if (!items) {
            return;
        }

        tab.add(items);
    },

    onTabDeactivate : function (tab) {
        var items = tab.getItems().items,
            i = 0,
            iLen = items.length,
            newItems = [];

        for (; i < iLen; i++) {
            newItems.push(items[i]);
        }

        tab.setOptimizedItems(newItems);

        tab.removeAll(false, true);
    }
});