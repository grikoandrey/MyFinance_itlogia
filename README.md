задачи:
1. Реализацию функционала для страниц авторизации и регистрации. На этих страницах пользователь входит в систему либо регистрируется. При наличии ошибок заполнения формы, они показываются при нажатии на кнопку, а сами поля меняют
2. цвет рамки на красный цвет. Функционал авторизации реализуется стандартными средствами обмена токенов (как в проекте с Quiz) и для этого вы должны использовать спецификацию по запросам из yaml файла. Помните о том, что для начала вам
3. нужно понять, как это работает, попробовать логику работы в postman на запросах, а затем - реализовывать в вашем проекте.
4. Реализация каркаса приложения и ядра (роутера). Вам необходимо реализовать основное ядро приложения, которое будет решать, какая страница открыта и что необходимо показать пользователю. Подобное было реализовано в проекте Quiz.
5. Если неавторизованный пользователь пытается открыть любую страницу, кроме регистрации или авторизации - его перебрасывает на авторизацию. После авторизации пользователя пускает на любую страницу (кроме регистрации).
6. Все страницы, кроме авторизации и регистрации, должны открываться через ядро, то есть отрисовка нужной страницы происходит именно за счет использования механизма роутинга в приложении, а не просто открытия html-файла в браузере.
------------------------------------------------------
В данном ДЗ вы работаете над 3 этапом проекта. Этот этап включает в себя реализацию всего оставшегося функционала проекта согласно ТЗ, дизайн-макету, спецификации.
------------------------------------------------------
реализовано на основе большого видео урока из 10 частей (Freelance Studio), dotenv отключил пока.
------------------------------------------------------
- не стал добавлять функционал по изменению баланса, так как это не логично.
- по умолчанию сделал фильтр на ВСЕ, так как это нагляднее
- добавил в БД несколько позиций и изменил даты на новые
------------------------------------------------------
для проверки:
npm i

для запуска бэкенда
открыть второй терминал, перейти в папку .... cd backendp / 
npm start

фронт:
npm run dev

npm run build / 
npm run http-server
