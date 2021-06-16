$(document).ready(function () {

    /** Cria arrays de variáveis */

    var slideCategoria = new Array();
    var slideInativo = new Array();
    var slideAtivo = new Array();
    var ultimoSlide = new Array();

    var qtdAnunciosSlide, qtdArtigosSlide;

    /** Define a largura atual da janela */

    var larguraJanela = $(window).width();

    /** Larguras de tela */

    var telaPequena = 640;
    var telaMedia = 940;

    /** Quantidade de itens em telas menores */

    var slidesTelaP = 1;
    var slidesTelaM = 2;

    if (larguraJanela <= telaPequena) {
        qtdAnunciosSlide = slidesTelaP;
        qtdArtigosSlide = slidesTelaP;
    }
    else if (larguraJanela > telaPequena && larguraJanela <= telaMedia) {
        qtdAnunciosSlide = slidesTelaM;
        qtdArtigosSlide = slidesTelaM;
    }
    else {
        qtdAnunciosSlide = 3;
        qtdArtigosSlide = 3;
    }

    /** Variáveis da função do slide automático */

    var auto = new Array();
    var duracaoSlide = new Array;

    duracaoSlide["banner"] = 5000;
    duracaoSlide["vitrine"] = 10000;
    duracaoSlide["noticias"] = 10000;

    /** Quais slides mudam automaticamente */

    var autoSlidesArr = ["banner"];

    /** Quantidade de itens */

    var qtdAnuncios = vitrineJSON.length;
    var qtdArtigos = noticiasJSON.length;
    var qtdBanners = bannerJSON.length;
    var qtdTags = tagsJSON.length;

    /** Slide que será mostrado */

    var indSlideAtivo = 1;

    var slideCategoria = ["banner", "vitrine", "noticias"];

    /**
     * BANNER
     */

    function criaBanners(qtdBanners) {

        /** Loop que gera os banners */

        for (var i = 0; i < qtdBanners; i++) {

            var tituloBanner = bannerJSON[i].titulo;
            var imagemBanner = bannerJSON[i].imagem;
            var call_to_actionBanner = bannerJSON[i].call_to_action;

            var n = i + 1;

            var bannerHTML = '<img src="' + imagemBanner + '" alt="Imagem do banner">\
                            <div class="titulo-imagem">' + tituloBanner + '</div >\
                            <div class="cta">\
                                <a class="cta-btn" href="'+ call_to_actionBanner + '">Saiba Mais</a>\
                            </div>';

            var bDivSlides = $("<div>", { "class": "slides fade", "s-index": n });
            $(".banner .slideshow").append(bDivSlides);

            $('.banner .slides[s-index="' + n + '"]');

            $('.banner .slides[s-index="' + n + '"]').append(bannerHTML);

            $('.banner .dots-container').append('<span class="dot" id="banner" s-index="' + n + '"></span>');

        };

    }

    /**
     * VITRINE
     */

    function criaVitrine(qtdAnunciosSlide, qtdAnuncios) {

        /** Cria o primeiro slide */

        var vSliderIdx = 1;

        var vDivSlides = $("<div>", { "class": "slides fade", "s-index": vSliderIdx });
        $(".vitrine .slideshow").append(vDivSlides);
        $('.vitrine .dots-container').append('<span class="dot" id="vitrine" s-index="' + vSliderIdx + '"></span>')

        /** Loop que gera os anúncios */

        for (var i = 0; i < qtdAnuncios; i++) {

            var bairroImovel = vitrineJSON[i].bairro;
            var cidadeImovel = vitrineJSON[i].cidade;
            var ufImovel = vitrineJSON[i].UF;
            var tipoImovel = vitrineJSON[i].tipo;
            var metragemImovel = vitrineJSON[i].metragem;
            var quartosImovel = vitrineJSON[i].quartos;
            var vagasImovel = vitrineJSON[i].vagas;
            var banheirosImovel = vitrineJSON[i].banheiros;
            var capaImovel = vitrineJSON[i].capa;
            var linkImovel = vitrineJSON[i].link;

            var n = i + 1;

            var anuncioHTML = '<div class="anuncio">\
        <div class="capa">\
                        <img src ="'+ capaImovel + '" alt="Imagem do anúncio">\
                        </div>\
                        <div class="tipo-imovel">\
                        '+ tipoImovel + '\
                        </div>\
                        <div class="local">\
                        '+ bairroImovel + ' - ' + ufImovel + '\
                        </div>\
                        <div class="info">\
                            <div class="quartos">\
                                <div class="icone">\
                                    <img src="assets/quartos-icone.png" title="Quartos" alt="Ícone de quarto">\
                                </div>\
                                <div class="qtd">'+ quartosImovel + '</div>\
                            </div>\
                            <div class="vagas">\
                                <div class="icone">\
                                    <img src="assets/vagas-icone.png" title="Vagas" alt="Ícone de vaga">\
                                </div>\
                                <div class="qtd">'+ vagasImovel + '</div>\
                            </div>\
                            <div class="metragem">\
                                <div class="icone">\
                                    <img src="assets/metragem-icone.png" title="Metragem" alt="Ícone de metragem">\
                                </div>\
                                <div class="qtd">'+ metragemImovel + '</div>\
                            </div>\
                        </div>\
                        <div class="cta"><a href="'+ linkImovel + '">Veja mais</a></div>\
                        </div>';

            $('.vitrine .slides[s-index="' + vSliderIdx + '"]').append(anuncioHTML);

            /** Cria um novo slide */

            if (n % qtdAnunciosSlide === 0 && n < qtdAnuncios) {

                vSliderIdx++;

                var s = $("<div>", { "class": "slides fade", "s-index": vSliderIdx });
                $(".vitrine .slideshow").append(s);
                $('.vitrine .dots-container').append('<span class="dot" id="vitrine" s-index="' + vSliderIdx + '"></span>')

            }

        }

    }

    /**
     * NOTÍCIAS
     */

    function criaNoticias(qtdArtigosSlide, qtdArtigos) {

        var nSliderIdx = 1;

        var nDivSlides = $("<div>", { "class": "slides fade", "s-index": nSliderIdx });
        $(".noticias .slideshow").append(nDivSlides);
        $('.noticias .dots-container').append('<span class="dot" id="noticias" s-index="' + nSliderIdx + '"></span>')

        for (var i = 0; i < qtdArtigos; i++) {

            var tituloArtigo = noticiasJSON[i].titulo;
            var sumarioArtigo = noticiasJSON[i].sumario;
            var capaArtigo = noticiasJSON[i].capa;
            var linkArtigo = noticiasJSON[i].link;

            var n = i + 1;

            var artigoHTML = '<div class="artigo">\
            <div class="capa">\
                            <img src="'+ capaArtigo + '" alt="Imagem da notícia">\
                        </div>\
                        <div class="artigo-texto">\
                            <div class="titulo-artigo">\
                                <a href="'+ linkArtigo + '">' + tituloArtigo + '</a>\
                            </div>\
                            <div class="sumario">'+ sumarioArtigo + '</div >\
                        </div >\
        <div class="cta">\
            <a href="'+ linkArtigo + '">Leia mais</a>\
        </div>\
        </div>';

            $('.noticias .slides[s-index="' + nSliderIdx + '"]').append(artigoHTML);

            if (n % qtdArtigosSlide === 0 && n < qtdArtigos) {

                nSliderIdx++;

                var s = $("<div>", { "class": "slides fade", "s-index": nSliderIdx });
                $(".noticias .slideshow").append(s);
                $('.noticias .dots-container').append('<span class="dot" id="noticias" s-index="' + nSliderIdx + '"></span>')

            }

        }

    }

    /** 
     * TAGS
     */

    function criaTags(qtdTags) {

        for (var i = 0; i < qtdTags; i++) {

            var txtTag = tagsJSON[i].tag;
            var linkTag = tagsJSON[i].link;

            var tagsHTML = '<div class="tag"><a href="' + linkTag + '">' + txtTag + '</a></div>';

            $(".cloud-tags .container").append(tagsHTML);
        }

    }

    /**
     * FUNCIONAMENTO DOS SLIDES
     */

    /** Próximo slide */

    function proxSlide(tipoSlide) {
        slideInativo[tipoSlide] = slideAtivo[tipoSlide];
        if (slideAtivo[tipoSlide] == ultimoSlide[tipoSlide]) {
            slideAtivo[tipoSlide] = 1;
        }
        else {
            slideAtivo[tipoSlide]++;
        }
        showSlides(slideAtivo[tipoSlide], slideInativo[tipoSlide], tipoSlide);
    }

    /** Slide anterior */

    function antSlide(tipoSlide) {
        slideInativo[tipoSlide] = slideAtivo[tipoSlide];
        if (slideAtivo[tipoSlide] == 1) {
            slideAtivo[tipoSlide] = ultimoSlide[tipoSlide];
        }
        else {
            slideAtivo[tipoSlide]--;
        }
        showSlides(slideAtivo[tipoSlide], slideInativo[tipoSlide], tipoSlide);
    }

    /** Muda o slide ao clicar no ponto correspondente */

    function mudaSlide(dotSel, tipoSlide) {
        if (dotSel == slideAtivo[tipoSlide]) {
            return false;
        }
        else {
            slideInativo[tipoSlide] = slideAtivo[tipoSlide];
            slideAtivo[tipoSlide] = dotSel;
            showSlides(slideAtivo[tipoSlide], slideInativo[tipoSlide], tipoSlide);
        }
    }

    /** Exibe os slides */

    function showSlides(sa, si, tipoSlide) {

        if ($.inArray(tipoSlide, autoSlidesArr) !== -1) {
            clearTimeout(auto[tipoSlide]);
            autoSlide(tipoSlide);
        }

        $('.' + tipoSlide + ' .slides[s-index="' + sa + '"]').css('display', 'block');
        $('.' + tipoSlide + ' .slides[s-index="' + si + '"]').css('display', 'none');
        $('.' + tipoSlide + ' .dot[s-index="' + sa + '"]').addClass("active");
        $('.' + tipoSlide + ' .dot[s-index="' + si + '"]').removeClass("active");

    }

    /** Cria os slides */

    function criaSlides(indSlideAtivo) {

        criaBanners(qtdBanners);
        criaVitrine(qtdAnunciosSlide, qtdAnuncios);
        criaNoticias(qtdArtigosSlide, qtdArtigos);

        /** Define o slide ativo */

        slideAtivo["banner"] = indSlideAtivo;
        slideAtivo["vitrine"] = indSlideAtivo;
        slideAtivo["noticias"] = indSlideAtivo;

        ultimoSlide["banner"] = $('.banner .slides').length;
        ultimoSlide["vitrine"] = $('.vitrine .slides').length;
        ultimoSlide["noticias"] = $('.noticias .slides').length;

        /** Exibe os slides */

        $.each(slideCategoria, function (key, value) {

            showSlides(slideAtivo[value], "", value);

        })

    }

    $(document).on('click', '.prev', function () {
        antSlide(this.id);
    })

    $(document).on('click', '.next', function () {
        proxSlide(this.id);
    })

    $(document).on('click', '.dot', function () {

        var dotSel = $(this).attr("s-index");
        var tipoSlide = this.id;
        mudaSlide(dotSel, tipoSlide);

    });

    /** Ajusta a quantidade de itens por slide ao redimensionar a janela */

    $(window).on('resize', function () {

        var win = $(this); // this = window

        if (win.width() <= telaPequena && qtdAnunciosSlide > 1) {

            $('.slides').each(function () {
                $(this).remove();
            });

            $('.dot').each(function () {
                $(this).remove();
            });

            qtdAnunciosSlide = slidesTelaP;
            qtdArtigosSlide = slidesTelaP;

            criaSlides(indSlideAtivo);

        }
        if (win.width() <= telaMedia && win.width() > telaPequena && qtdAnunciosSlide != 2) {

            $('.slides').each(function () {
                $(this).remove();
            });

            $('.dot').each(function () {
                $(this).remove();
            });

            qtdAnunciosSlide = slidesTelaM;
            qtdArtigosSlide = slidesTelaM;

            criaSlides(indSlideAtivo);

        }
        if (win.width() > telaMedia && qtdAnunciosSlide < 3) {

            $('.slides').each(function () {
                $(this).remove();
            });

            $('.dot').each(function () {
                $(this).remove();
            });

            qtdAnunciosSlide = 3;
            qtdArtigosSlide = 3;

            criaSlides(indSlideAtivo);

        }

    });

    /** Muda automaticamente o banner */

    function autoSlide(tipoAutoSlide) {

        auto[tipoAutoSlide] = setTimeout(function () { proxSlide(tipoAutoSlide); }, duracaoSlide[tipoAutoSlide]);
    }

    for (var i = 0; i < autoSlidesArr; i++) {
        autoSlide(autoSlidesArr[i])
    }

    criaSlides(indSlideAtivo);

    criaTags(qtdTags);

})