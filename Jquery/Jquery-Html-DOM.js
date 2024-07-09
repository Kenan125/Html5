//Jquery $
//Jquery, uzun yillardir kullanilan en populer javascript kutuphanesidir.

//Kullanabilmemiz icin download edilerek sayfaya link verilmesi yada bir CDN linkinin sayfaya eklenmesi gerekir.

//jquery.com veya cdnjs.com sayfalarindan


$.ad = "Ali";   //this gorur
$.soyad = "Uçar";

$.product = {
    name: "televizyon",
    price: 22000
}

$.sonuc = $.product.name


//javascript komutlarinin html sayfasi yuklendikten sonra calismasi icin document.onload = alert("Sayfa yuklendi.")
//Jquery komutlarinin html sayfasi yuklendikten sonra calismasi icin;
/* $(document).ready(function(){
    alert("Sayfa yuklendi.")
}) */

//Jquery events (olaylar)
//click. show, hide, mouseenter, mouseleave, dbclick gibi

$(document).ready(function(){
    $('#text').text('Sayfa yuklendi.') //id'si text olan paragrafin yazisini degistirir.
    $('#text').html('<em>Sayfa yuklendi.</em>') //id'si text olan paragraf
    $('#degistir').click(function(){
        $('#text').hide(2000);
    })

})
$(document).ready(function(){
    $('#sonuc').mouseenter(function(){
        $(this).css('background', 'yellow');
    })
    $('#sonuc').mouseleave(function(){

        $(this).css('background', 'red');
})
})


$(document).ready(function(){
    $('goster')
})
console.log($.sonuc)