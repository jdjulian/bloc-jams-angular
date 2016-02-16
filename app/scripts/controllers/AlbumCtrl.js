//Angular Assignment 5 

(function() {
    function AlbumCtrl(Fixtures) {
        this.albumData = Fixtures.getAlbum();
         }
                                
    angular
        .module('blocJams')
        .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
})();



   
            
    
       
        
