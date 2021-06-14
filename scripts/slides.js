$(document).ready(function () {

    /** Gera os banners do topo dinamicamente de acordo com os dados JSON */

    var bannerSlidesHTML = $('.banner .slides').html();

    $.each(bannerJSON, function (key, value) {
        if (key == 0) {
            var i = 1;
            $('.banner .slides[s-index="' + i + '"]').css('background-image', 'url(' + bannerJSON[key].imagem + ')');
            $('.banner .slides[s-index="' + i + '"] .titulo-imagem').text(bannerJSON[key].titulo);
            $('.banner .slides[s-index="' + i + '"] .cta-btn').attr("href", bannerJSON[key].call_to_action);
        }
        else {
            var i = key + 1;
            var slides = $("<div>", { "class": "slides fade", "s-index": i });
            $(slides).append(bannerSlidesHTML).insertAfter(".banner .slides");
            $('.banner .slides[s-index="' + i + '"]').css('background-image', 'url(' + bannerJSON[key].imagem + ')');
            $('.banner .slides[s-index="' + i + '"] .titulo-imagem').text(bannerJSON[key].titulo);
            $('.banner .slides[s-index="' + i + '"] .cta-btn').attr("href", bannerJSON[key].call_to_action);

        }
    });

    var slideCategoria = new Array();

    slideCategoria = ["banner", "vitrine", "noticias"];

    /** Slide que não está mais ativo */

    var slideInativo = new Array();

    /** Define o slide ativo ao carregar a página */

    var slideAtivo = new Array();

    slideAtivo["banner"] = "1";
    slideAtivo["vitrine"] = "1";
    slideAtivo["noticias"] = "1";

    /** Exibe o slide e ativa o marcador/ponto do slide correspondente */

    $.each(slideCategoria, function (key, value) {
        $('.' + value + ' .slides[s-index="' + slideAtivo[value] + '"]').css('display', 'block');
        $('.' + value + ' .dot[s-index="' + slideAtivo[value] + '"]').addClass("active");
    });

    /** Armazena o último slide de cada categoria */

    var ultimoSlide = new Array();

    ultimoSlide["banner"] = $('.banner .slides').length;
    ultimoSlide["vitrine"] = $('.vitrine .slides').length;
    ultimoSlide["noticias"] = $('.noticias .slides').length;

    /** Slide anterior */

    $(".prev").click(function () {
        var tipoSlide = $(this).attr("s-tipo");
        slideInativo[tipoSlide] = slideAtivo[tipoSlide];
        if (slideAtivo[tipoSlide] == 1) {
            slideAtivo[tipoSlide] = ultimoSlide[tipoSlide];
        }
        else {
            slideAtivo[tipoSlide]--;
        }
        showSlides(slideAtivo[tipoSlide], slideInativo[tipoSlide], tipoSlide);
    });

    /** Próximo slide */

    $(".next").click(function () {
        var tipoSlide = $(this).attr("s-tipo");
        slideInativo[tipoSlide] = slideAtivo[tipoSlide];
        if (slideAtivo[tipoSlide] == ultimoSlide[tipoSlide]) {
            slideAtivo[tipoSlide] = 1;
        }
        else {
            slideAtivo[tipoSlide]++;
        }
        showSlides(slideAtivo[tipoSlide], slideInativo[tipoSlide], tipoSlide);
    });

    /** Muda o slide ao clicar no ponto correspondente */

    $(".dot").click(function () {
        var tipoSlide = $(this).attr("s-tipo");
        var dotSel = $(this).attr("s-index");
        if (dotSel == slideAtivo[tipoSlide]) {
            return false;
        }
        else {
            slideInativo[tipoSlide] = slideAtivo[tipoSlide];
            slideAtivo[tipoSlide] = dotSel;
            showSlides(slideAtivo[tipoSlide], slideInativo[tipoSlide], tipoSlide);
        }
    });

    /** Controla os slides */

    function showSlides(sa, si, tipoSlide) {

        $('.' + tipoSlide + ' .slides[s-index="' + sa + '"]').css('display', 'block');
        $('.' + tipoSlide + ' .slides[s-index="' + si + '"]').css('display', 'none');
        $('.' + tipoSlide + ' .dot[s-index="' + sa + '"]').addClass("active");
        $('.' + tipoSlide + ' .dot[s-index="' + si + '"]').removeClass("active");

    }

});