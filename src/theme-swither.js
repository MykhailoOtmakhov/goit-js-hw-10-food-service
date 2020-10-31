const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  const bodyCont = document.querySelector('body')
  const switcher = document.querySelector('#theme-switch-toggle');
  switcher.addEventListener('change',onInputClick);    

  function onInputClick (evt) {
    if (evt.target.checked) {
        bodyCont.classList.add(Theme.DARK);
        bodyCont.classList.remove(Theme.LIGHT);
        localStorage.setItem('Theme', Theme.DARK);
      } else {
        bodyCont.classList.add(Theme.LIGHT);
        bodyCont.classList.remove(Theme.DARK);
        localStorage.setItem('Theme', Theme.LIGHT);
      }
    }
 
    document.addEventListener('DOMContentLoaded',themeChecker)
    function themeChecker(){
        if(localStorage.getItem('Theme')==='dark-theme'){
            bodyCont.classList.add(Theme.DARK);
            switcher.checked = true;
        }else{
            bodyCont.classList.add(Theme.LIGHT);
            switcher.checked = false;
        }
    }