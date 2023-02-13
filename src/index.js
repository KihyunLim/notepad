import "/src/assets/css/app.scss";

console.log('index.js!!');

window.onload = () => {
  document.querySelectorAll('img').forEach(($item) => {
    if ($item.src === '' && $item.classList.length === 0) {
      $item.parentElement.classList.add('hide');
    }
  });

  const loadedBodyWidth = document.querySelector('body').getBoundingClientRect().width;
  console.log('loadedBodyWidth :', loadedBodyWidth);
  if (loadedBodyWidth <= 800) {
    document.querySelector('#saveNote').classList.add('hide');
    document.querySelector('#hideMenu').classList.add('hide');
  }
  window.addEventListener('resize', () => {
    const resizedBodyWidth = document.querySelector('body').getBoundingClientRect().width;
    console.log('resizedBodyWidth :', resizedBodyWidth);

    // 나중에 채우긴 할 듯
  }, true);

  document.querySelector('#title').addEventListener('click', () => {
    document.querySelector('#dim').classList.add('dimmed');
    document.querySelector('#loadingSpinner').classList.remove('hide');

    setTimeout(() => {
      document.querySelector('#dim').classList.remove('dimmed');
      document.querySelector('#loadingSpinner').classList.add('hide');
    }, 5000);
  });

  document.querySelectorAll('.moveWriteNote').forEach(($item) => {
    $item.addEventListener('click', () => {
      window.location.href = '/write.html';
    });
  });
  
  document.querySelector('.post').addEventListener('click', () => {
    window.location.href = '/detail.html';
  });
  document.querySelector('#showMenu').addEventListener('click', () => {
    document.querySelector('#showMenu').classList.add('hide');
    document.querySelector('#hideMenu').classList.remove('hide');
    document.querySelector('#menuMain').classList.remove('hide');
  });
  document.querySelector('#hideMenu').addEventListener('click', () => {
    document.querySelector('#hideMenu').classList.add('hide');
    document.querySelector('#menuMain').classList.add('hide');
    document.querySelector('#showMenu').classList.remove('hide');
  });
  document.querySelector('#showBookmarkList').addEventListener('click', () => {
    document.querySelector('#hideMenu').classList.add('hide');
    document.querySelector('#menuMain').classList.add('hide');
    document.querySelector('#showMenu').classList.remove('hide');

    document.querySelector('#dim').classList.add('dimmed');
    document.querySelector('#popupBookmarkList').classList.remove('hide');
  });

  document.querySelector('#showPopupSetting').addEventListener('click', () => {
    document.querySelector('#dim').classList.add('dimmed');
    document.querySelector('#popupAuth').classList.remove('hide');
  });
  
  document.querySelector('#dim').addEventListener('click', (e) => {
    if (e.target.classList.contains('closePopup')) {
      document.querySelector('#dim').classList.remove('dimmed');
      e.target.closest('.popup').classList.add('hide');
    } else if (e.target.classList.contains('buttonOk')) {
      e.target.closest('.popup').classList.add('hide');

      if (e.target.closest('.popup').id === 'popupAuth') {
        document.querySelector('#popupBookmark').classList.remove('hide');
      } else {
        document.querySelector('#dim').classList.remove('dimmed');
      }
    } else if (e.target.classList.contains('selectedColor')) {
      if (!e.target.parentElement.querySelector('.palette')) {
        const $palette = document.createElement('div');
        $palette.classList.add('palette');
    
        const colorList = [
          'palette__color--deep-red',
          'palette__color--red',
          'palette__color--orrange',
          'palette__color--light-green',
          'palette__color--green',
          'palette__color--light-blue',
          'palette__color--blue',
          'palette__color--deep-blue',
          'palette__color--puple',
          'palette__color--grey',
        ];
        colorList.forEach((color) => {
          const $paletteColor = document.createElement('div');
          $paletteColor.classList.add('paletteColor', color);
    
          $palette.append($paletteColor);
        });
    
        e.target.parentElement.append($palette);
  
        $palette.style.top = `${(e.target.getBoundingClientRect().top + 40)}px`;
        $palette.style.left = `${(e.target.getBoundingClientRect().left)}px`;
  
        $palette.addEventListener('click', (ePalette) => {
          if (ePalette.target.classList.contains('paletteColor')) {
            const $selectedColor = ePalette.target.closest('.bookmarkItem').querySelector('.selectedColor');
            let selectedColor = '';
            $selectedColor.classList.forEach((v) => {
              if (v.indexOf('palette__color--') === 0) {
                selectedColor = v;
              }
            });
            let changeColor = '';
            ePalette.target.classList.forEach((v) => {
              if (v.indexOf('palette__color--') === 0) {
                changeColor = v;
              }
            });
  
            $selectedColor.classList.replace(selectedColor, changeColor);
            $palette.remove();
          }
        })
      }
    }
  });
}