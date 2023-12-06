function addOptions( fromId, toId ) {
    var fromEl = document.getElementById( fromId ),
        toEl = document.getElementById( toId );

    if ( fromEl.selectedIndex >= 0 ) {
        var index = toEl.options.length;

        for ( var i = 0; i < fromEl.options.length; i++ ) {
            if ( fromEl.options[ i ].selected ) {
                toEl.options[ index ] = fromEl.options[ i ];
                i--;
                index++
            }
        }
    }
}