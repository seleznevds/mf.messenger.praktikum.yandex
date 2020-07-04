export const template = `
<div class="centered-block" data-component-id={{__COMPONENT_ID__}}>            
    <div class="auth-page-logo"><a href="/"><img src="img/logo.png" alt="logo" width="152" height="102"></a></div>                
    <form>
        <div class="form-element form-header">Вход в чат</div>
        <div class="form-element">Email</div>
        <div class="form-element">
            <input type="text" class="text-input" name="email" autocomplete="username" value="{{values.email}}" />
            {{#ifCond errors.email '&&' errors.email.length}}<div class="form-error">{{errors.email}}</div>{{/ifCond}}            
        </div> 
        <div class="form-element">Пароль</div>
        <div class="form-element">
            <input type="password" class="text-input" name="password" autocomplete="current-password"
                value="{{values.password}}" />
                {{#ifCond errors.password '&&' errors.password.length}}<div class="form-error">{{errors.password}}</div>{{/ifCond}}  
        </div>
        <div class="form-element">
            <button class="button" type="submit">Авторизоваться</button>
        </div>
        <div class="form-element">
            <div class="button-link-container">
                <a class="button-link" href="/registration.html">Зарегистрироваться</a>
            </div>
        </div>
    </form>            
</div>
`;