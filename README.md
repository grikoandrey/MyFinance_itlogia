задачи:
1. Реализацию функционала для страниц авторизации и регистрации. На этих страницах пользователь входит в систему либо регистрируется. При наличии ошибок заполнения формы, они показываются при нажатии на кнопку, а сами поля меняют
2. цвет рамки на красный цвет. Функционал авторизации реализуется стандартными средствами обмена токенов (как в проекте с Quiz) и для этого вы должны использовать спецификацию по запросам из yaml файла. Помните о том, что для начала вам
3. нужно понять, как это работает, попробовать логику работы в postman на запросах, а затем - реализовывать в вашем проекте.
4. Реализация каркаса приложения и ядра (роутера). Вам необходимо реализовать основное ядро приложения, которое будет решать, какая страница открыта и что необходимо показать пользователю. Подобное было реализовано в проекте Quiz.
5. Если неавторизованный пользователь пытается открыть любую страницу, кроме регистрации или авторизации - его перебрасывает на авторизацию. После авторизации пользователя пускает на любую страницу (кроме регистрации).
6. Все страницы, кроме авторизации и регистрации, должны открываться через ядро, то есть отрисовка нужной страницы происходит именно за счет использования механизма роутинга в приложении, а не просто открытия html-файла в браузере.

Важно: для реализациии этой задачи создайте отдельную ветку в вашем репозитории на основе основной ветки проекта master/main, и назовите её step2. И продолжайте работать в рамках текущей ДЗ именно в этой ветке. 
В основной ветке (master/main) у вас будет находиться первая версия проекта, которая проверена/проверяется наставником. В новой ветке step2 реализуйте функционал по данной ДЗ, а далее загрузите его в удаленный репозиторий в 
такую же ветку step2 и сделайте Pull Request в основную ветку (master/main), но не осуществляйте слияние кода. Отправьте домашку на проверку наставнику: в основной ветке находится первый этап работы, а с ветки step2 открыт 
Pull Request в основную ветку и ожидает ревью от наставника. Наставник может дать правки как в самом Pull Request, либо в видеоразборе, в зависимости от ситуации. После того, как наставник дал добро на слияние веток, 
вы можете вмержить код из Pull Request в основную ветку на github и закрыть его.

реализовано на основе большого видео урока из 10 частей (Freelance Studio), dotenv отключил пока.

для проверки:
npm i

для запуска бэкенда
открыть второй терминал, перейти в папку .... cd backendp
npm start

фронт:
npm run dev

npm run build
npm run http-server
