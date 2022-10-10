// Аккордеон
const accordionItems = document.querySelectorAll(".accordion__heading");
if(accordionItems){
	accordionItems.forEach(function(item){
		item.addEventListener("click", function (e) {
			if (!item.classList.contains('active')) {

				// Закрываем другие пункты
				let allItems = item.closest(".accordion").querySelectorAll(".accordion__heading.active");
				allItems.forEach(function(item){
					item.classList.remove('active');
					let height = item.nextElementSibling.clientHeight + 'px';
					item.nextElementSibling.style.height = height;
					setTimeout(function () {
						item.nextElementSibling.style.height = '0px';
					}, 0);
					setTimeout(function () {
						itemContent.style.display = 'none';
					}, 500);
				});

				// Открываем выбранный пункт
				item.classList.add("active");
				let itemContent = item.nextElementSibling;
				itemContent.style.display = "block";
				itemContent.style.height = 'auto';
				let height = itemContent.clientHeight + 'px';
				itemContent.style.height = '0px';
				setTimeout(function () {
					itemContent.style.height = height;
				}, 0);

			}else{

				// Закрываем выбранный пункт
				item.classList.remove("active");
				let height = item.nextElementSibling.clientHeight + 'px';
				item.nextElementSibling.style.height = height;
				setTimeout(function () {
					item.nextElementSibling.style.height = '0px';
				}, 0);
				setTimeout(function () {
					itemContent.style.display = 'none';
				}, 500);
			};
		});
	});
};

