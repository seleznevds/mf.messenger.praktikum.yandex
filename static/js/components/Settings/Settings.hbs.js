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
                <div class="form-element">Фио</div>
                <div class="form-element">
                    <input type="text" class="text-input" name="fio value="" />
                    <div class=" form-error">Текст ошибки</div>

            </div>
            <div class="form-element">Логин</div>
            <div class="form-element">
                <input type="text" class="text-input" name="login" value="" />
            </div>
            <div class="form-element">Email</div>
            <div class="form-element">
                <input type="email" class="text-input" name="email" value="" />
            </div>
            <div class="form-element">Пароль</div>
            <div class="form-element">
                <input type="password" class="text-input" name="password" autocomplete="current-password"
                    value="" />
            </div>
            <div class="form-element">Пароль ещё раз</div>
            <div class="form-element">
                <input type="password" class="text-input" name="password_confirm" value="" />
            </div>
            <div class="form-element">
                <button class="button" type="submit">Изменить настройки</button>
            </div>
        </div>
        </div>
    </div>
</div>
`;