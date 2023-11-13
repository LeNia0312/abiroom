/*
document.addEventListener('DOMContentLoaded', function(){
  // タブに対してクリックイベントを適用
  const tabs = document.getElementsByClassName('tab');
  for(let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', tabSwitch);
  }

  // タブをクリックすると実行する関数
  function tabSwitch(){
    // タブのclassの値を変更
    document.getElementsByClassName('is-active')[0].classList.remove('is-active');
    this.classList.add('is-active');
    // コンテンツのclassの値を変更
    document.getElementsByClassName('is-show')[0].classList.remove('is-show');
    const arrayTabs = Array.prototype.slice.call(tabs);
    const index = arrayTabs.indexOf(this);
    document.getElementsByClassName('panel')[index].classList.add('is-show');
  };
});
*/


    $(function(){
        //tabをクリックしたときの動作
        $('.tab li').click(function(){
            //クリックしたタブのindexを取得
            var index = $('.tab li').index(this);
 
            $('.list .inner').hide().removeClass('active');
            $('.list .inner').eq(index).fadeIn().addClass('active');
 
            $('.tab li').removeClass('active');
            $(this).addClass('active');
        });
 
        //ページャーをクリックしたときの動作
        $('.tab_sub li').click(function(){
            //クリックしたページャーのindexを取得
            var index = $('.inner.active .tab_sub li').index(this);
 
            $('.inner.active .tab_sub li').removeClass('active');
            $(this).addClass('active');
 
            //テーブル操作
            $('.inner.active table').hide().removeClass('active');
            $('.inner.active table').eq(index).fadeIn().addClass('active');
        });
    });
