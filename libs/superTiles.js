var superTiles = {
    activate : function () {
        $('.superTiles').each(function () {
            var obj = $(this);
            obj.css({
                'background-position': '0 0',
                '-webkit-transition': 'background-position 1s',
                transition: 'background-position 1s ease',
                width: obj.attr('width'),
                height: obj.attr('height'),
                background: 'url(' + obj.attr('data-superTiles') + ')'
            });
            obj.attr('data-superToggle', 'true');
            setInterval(function(){
                if (obj.attr('data-superToggle') === 'true') {
                    obj.css('background-position', '-' + obj.attr('width') + 'px 0');
                    obj.attr('data-superToggle', 'false');
                }
                else {
                    obj.css('background-position', obj.attr('width') + 'px 0');
                    obj.attr('data-superToggle', 'true');
                };
            }, superTiles.getRandom ());
        });
    },
    getRandom : function (){
		return Math.floor(Math.random()*(6000-2000)+2000);
	}
};
