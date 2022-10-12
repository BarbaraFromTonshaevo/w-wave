// Подменный селект
let select = document.querySelectorAll(".select");
if(select){
  select.forEach(function(item){
    let $this = item;
    // Оборачиваем
    let selectWrap = document.createElement('div');
    selectWrap.setAttribute("class", "select-box");
    $this.parentNode.insertBefore(selectWrap, $this);
    selectWrap.appendChild($this);

    // Создаем новый селект
    let selectStyled = document.createElement('div');
    selectStyled.setAttribute("class", "select-styled");
    selectStyled.setAttribute("tabindex", "0");
    selectWrap.appendChild(selectStyled);

    // Создаем новый список
    let options = document.createElement('div');
    options.setAttribute("class", "select-options");
    selectWrap.appendChild(options);

    let optionsList = document.createElement('ul');
    options.appendChild(optionsList);

    // Добавляем в список пункты
    for(let i = 0; i < $this.length; i++){
      let text = $this.options[i].text;
      let option = document.createElement('li');
      option.innerText = text;
      option.setAttribute("tabindex", "0");
      optionsList.appendChild(option);

      // Клик на пункт
      option.addEventListener("keydown",(e)=>{
        if(e.keyCode === 13){
          clickOnOptions(e);
        }
      });
      option.addEventListener("click", function(e){
        clickOnOptions(e);
      });
      function clickOnOptions(e){
        option.closest("ul").querySelectorAll("li").forEach(function(item){
          item.classList.remove("choice");
        });
        option.classList.add("choice");
        let text = e.target.innerText;
        selectStyled.innerText = text;

        selectStyled.classList.remove("active");
        options.style.height = '0px';
        setTimeout(function () {//
					options.style.display = 'none';//
				}, 500);//

        // Имитируем клик на реальный селект
        $this.querySelectorAll("option").forEach(function(item){
          item.removeAttribute("selected");
        });
        $this.options[i].setAttribute("selected", "selected");
        let eventChange = new Event('change');
        $this.dispatchEvent(eventChange);
      }
    };

    // Выбранный пункт по умолчанию
    let startChoice = $this.querySelector("option[selected='selected']");
    let startText = startChoice.text;
    selectStyled.innerText = startText;
    let index = startChoice.index;
    optionsList.querySelector("li:nth-child(" +(index + 1)+ ")").classList.add("choice");
    // Enter на селект
    selectStyled.addEventListener("keydown",(e)=>{
      if(e.keyCode === 13){
        clickOnSelect(e);
      }
    });

    // Клик на селект
    selectStyled.addEventListener("click", function(e){
      clickOnSelect(e);
    });

    function clickOnSelect(e){
      closeSelects(e);
  
      if(!selectStyled.classList.contains("active")){
        selectStyled.classList.add("active");
        options.style.display = "block";//
        options.style.height = 'auto';
        let optionsHeight = options.clientHeight + 'px';
        options.style.height = '0px';
        setTimeout(function () {
          options.style.height = optionsHeight;
        }, 0);
      }else{
        selectStyled.classList.remove("active");
        options.style.height = '0px';
      };
    }
  });

  // Клик вне селекта
  document.addEventListener("click", function(e){
    if(!e.target.matches(".select-styled")){
      closeSelects(e);
    };
  });

  function closeSelects(e){
    if(e.target != document.querySelector(".select-styled.active")){
      document.querySelectorAll(".select-styled.active").forEach(function(item){
        item.classList.remove("active");
        item.nextElementSibling.style.height = '0px';
        setTimeout(function () {//
					item.nextElementSibling.style.display = 'none';//
				}, 500);//
      });
    };
  };
};