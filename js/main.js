let open = false;

$('.lnb_btn').click(function () {
  if (!open) {
    $('#lnb').css('left', '0');
    $('#wrap').css('left', '274px');
    $(this).find('img').attr({
      'src': 'img2/x_icon.png',
      'alt': '메뉴닫기'
    });
    $('.cover').fadeIn(400);
    open = true;
  } else {
    $('#lnb').css('left', '-274px');
    $('#wrap').css('left', '0');
    $(this).find('img').attr({
      'src': 'img2/hamburger_icon.png',
      'alt': '메뉴열기'
    });
    $('.cover').fadeOut(400);
    open = false;
  }
});



// 검색버튼 .search_btn 
const searchBtn = document.querySelector('.search_btn');
const searchBox = document.querySelector('.search-box');
const searchCloseBtn = document.querySelector('.search-close-btn');
searchBtn.addEventListener('click', function() {
  searchBox.classList.add('active');
});
// 검색버튼 쪽 닫기 누르면 없어짐 .search_btn 
searchCloseBtn.addEventListener('click', function() {
  searchBox.classList.remove('active');
});


// lnb 메뉴 서브메뉴 토글
function toggleSubMenu(menu) {
  const submenu = document.querySelector(`.submenu[data-menu="${menu}"]`);
  if (submenu) {
    const allSubmenus = document.querySelectorAll('.submenu');
    allSubmenus.forEach((item) => {
      if (item !== submenu) {
        item.classList.remove('active');
      }
    });
    submenu.classList.toggle('active');
  }
}

// lnb 메뉴 .lnb-item 클릭 시 열림
const lnbItems = document.querySelectorAll('.lnb-item');
lnbItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const menu = item.getAttribute('data-menu');
    toggleSubMenu(menu);
  });
});



// .submenu 에 마우스 올리면 언더라인
const subMenuItems = document.querySelectorAll('.submenu a');
subMenuItems.forEach((item) => {
  item.addEventListener('mouseenter', () => {
    item.style.color = '#0B9975'; 
    item.style.position = 'relative'; 
    const underline = document.createElement('div'); 
    underline.classList.add('underline'); 
    item.appendChild(underline); 
    animateUnderline(underline); 
  });

// 마우스 없어지면 언더라인 없어짐
  item.addEventListener('mouseleave', () => {
    item.style.color = ''; 
    const underline = item.querySelector('.underline');
    if (underline) {
      item.removeChild(underline); 
    }
  });
});

// 언더라인 효과 함수
function animateUnderline(underline) {
  const duration = 500; 
  const lineWidth = 100; 
  underline.style.width = '0'; 
  underline.style.height = '2px'; 
  underline.style.backgroundColor = '#0B9975'; 
  underline.style.position = 'absolute'; 
  underline.style.bottom = '0'; 
  underline.style.left = '0'; 

  setTimeout(() => {
    underline.style.width = `${lineWidth}%`;
    underline.style.transition = `width ${duration}ms linear`;
  }, 0);
}

// 메인 비주얼 슬라이더

$('.slider').slick({
  autoplay: true, // 
  autoplaySpeed: 1000, 
  arrows: true, 
  dots: true, 
});