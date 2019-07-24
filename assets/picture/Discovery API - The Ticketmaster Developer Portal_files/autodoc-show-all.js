
(function() {
  let showContent = function(me) {
    let copy = $('.copy-json', $(me).parent().parent()).html();
    let proxyItem_s = document.createElement('div');
    proxyItem_s.setAttribute('style', 'overflow-y:auto;');
    proxyItem_s.className = 'nested-list-static';
    proxyItem_s.innerHTML = copy;
    return proxyItem_s;
  };

  let copyHandler = function(me) {
    let html = showContent(me).outerHTML;
    let proxyItem = document.createElement('div');
    proxyItem.innerHTML = html;
    me.dataset.clipboardText = proxyItem.textContent.replace(/^\s+|\s+$/gm, '');// replace spaces to 1 space
  };

  let clickHandler = function() {
    copyHandler(this);

    let title = $(this).data('modal-title'),
      content = showContent(this),
      copyBtnText = $(this).data('clipboard-text'),
      $modal = $('.fs-modal'),
      $modalTitle = $('#modal-title', $modal),
      $modalBody = $('.modal-body', $modal);

    $modalTitle.html(title);
    $modalBody.html(content);
    $('.fs-modal .modal-body .copy-btn-fs').attr('data-clipboard-text', copyBtnText);

    $modalBody.delegate('.lang-selector a', 'click', function() {
      $('.aside.lang-selector a').eq($(this).index()).click();
      $(this).parent().children().removeClass('active');
      $(this).addClass('active');
      $(this).parents().closest('.modal-body').children().removeClass('tab-active');
      $(this).parents().closest('.modal-body').children().eq($(this).index() + 1).addClass('tab-active');
    });
  };

  $('#main-block').on('click', '.js_show-modal', clickHandler );
})();
