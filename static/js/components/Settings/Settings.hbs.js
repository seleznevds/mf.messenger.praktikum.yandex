export const formTemplate = `   
    <form>
        <div class="form-element">Фио</div>
        <div class="form-element">
            <input type="text" class="text-input" name="fio" value="{{values.fio}}" />
            {{#ifCond errors.fio '&&' errors.fio.length}}<div class="form-error">{{errors.fio}}</div>{{/ifCond}}  
           

    </div>
    <div class="form-element">Логин</div>
    <div class="form-element">
        <input type="text" class="text-input" name="name" value="{{values.name}}" />
        {{#ifCond errors.name '&&' errors.name.length}}<div class="form-error">{{errors.name}}</div>{{/ifCond}}  
    </div>
    <div class="form-element">Email</div>
    <div class="form-element">
        <input class="text-input" name="email" value="{{values.email}}" />
        {{#ifCond errors.email '&&' errors.email.length}}<div class="form-error">{{errors.email}}</div>{{/ifCond}}
    </div>
    <div class="form-element">Пароль</div>
    <div class="form-element">
        <input type="password" class="text-input" name="password" autocomplete="current-password"
            value="{{values.password}}" />
        {{#ifCond errors.password '&&' errors.password.length}}<div class="form-error">{{errors.password}}</div>{{/ifCond}}
    </div>
    <div class="form-element">Пароль ещё раз</div>
    <div class="form-element">
        <input type="password" class="text-input" name="password_confirm" value="{{values.password_confirm}}" />
        {{#ifCond errors.password_confirm '&&' errors.password_confirm.length}}<div class="form-error">{{errors.password_confirm}}</div>{{/ifCond}}  
    </div>
    <div class="form-element">
        <button class="button" type="submit">Изменить настройки</button>       
    </div>
    </form>
`;


export const template = `
<div class="app-container" data-component-id={{__COMPONENT_ID__}}>
    {{{renderComponent Header}}}
    <div class="main main-settings">
        <div class="settings-container">
        <div class="settings-header">Настройки пользователя</div>
        <div class="settings">
            <div class="settings-avatar">
                <div class="settings-avatar-img"><img src="img/piter.png"></div>

                <a href="#" class="settings-avatar-change-link">Изменить аватар</a>
            </div>
            <div class="settings-fields">
                {{{renderComponent Form formProps}}} 
            </div>
        </div>
        </div>
    </div>
</div>
`;


