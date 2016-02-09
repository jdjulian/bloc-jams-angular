//Angular Assignment 5 

(function() {
    function AlbumCtrl() {
        this.albumData = angular.copy(albumPicasso);
        }
    }
    
    angular
        .module('blocJams')
        .controller('AlbumCtrl', AlbumCtrl);
})();