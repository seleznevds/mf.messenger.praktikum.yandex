const html = `<div class="menu-container" id={{id}}>
<div class="menu-button"></div>
<ul class="menu">
    <li class="menu-item"><a href="/">Чат</a></li>
    <li class="menu-item"><a href="/settings.html">Настройки</a></li>
    <li class="menu-item"><a href="/registration.html">Регистрация</a></li>
    <li class="menu-item"><a href="/authorization.html">Авторизация</a></li>
    <li class="menu-item"><a href="/404.html">404</a></li>
    <li class="menu-item"><a href="/500.html">500</a></li>
</ul>
</div> 
`;

const compiledTemplate = Handlebars.compile(html);


export const template = (context) => {
    return compiledTemplate(context);
};