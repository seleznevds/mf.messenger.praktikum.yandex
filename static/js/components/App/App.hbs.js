const html = `
<div class="app-container" id={{id}}>
<div class="header">
    <div class="logo"><a href="/"><img src="img/logo.png" width="76" height="51" ></a></div>
    {{{renderComponent Menu ParentComponent}}}       
</div>

<div class="main">
    <div class="chat-list-container">
        <ul class="chat-list">
            <li class="chat-item chat-item-selected">
                <div class="chat-item-image-container" title="Брайн"><img src="img/brian.jpg"
                        class="chat-item-image" alt="Чат 5 Чат крутых пацанов"></div>
                <div class="chat-item-summary">
                    <div class="chat-item-date-container">
                        <div class="chat-item-name" title="Чат 5 Чат крутых пацанов">Чат 5 Чат крутых
                            пацанов</div>
                        <div>28.04.2020</div>
                    </div>
                    <div class="chat-item-last-message"><span title="Брайн" class="chat-item-author-name">Брайн: </span><span
                            class="chat-item-last-message-text">Сообщение от крутого парня. Прочитай, не скучай</span>
                    </div>
                </div>
            </li>
            <li class="chat-item">
                <div class="chat-item-image-container" title="Брайн"><img src="img/brian.jpg"
                        class="chat-item-image" alt="Чат 5 Чат крутых пацанов"></div>
                <div class="chat-item-summary">
                    <div class="chat-item-date-container">
                        <div class="chat-item-name" title="Чат 5 Чат крутых пацанов">Чат 5 Чат крутых
                            пацанов</div>
                        <div>28.04.2020</div>
                    </div>
                    <div class="chat-item-last-message"><span title="Брайн" class="chat-item-author-name">Брайн: </span><span
                            class="chat-item-last-message-text">Сообщение от крутого парня. Прочитай, не скучай</span>
                    </div>
                </div>
            </li>
            <li class="chat-item">
                <div class="chat-item-image-container" title="Брайн"><img src="img/brian.jpg"
                        class="chat-item-image" alt="Чат 5 Чат крутых пацанов"></div>
                <div class="chat-item-summary">
                    <div class="chat-item-date-container">
                        <div class="chat-item-name" title="Чат 5 Чат крутых пацанов">Чат 5 Чат крутых
                            пацанов</div>
                        <div>28.04.2020</div>
                    </div>
                    <div class="chat-item-last-message"><span title="Брайн" class="chat-item-author-name">Брайн: </span><span
                            class="chat-item-last-message-text">Сообщение от крутого парня. Прочитай, не скучай</span>
                    </div>
                </div>
            </li>
            <li class="chat-item">
                <div class="chat-item-image-container" title="Брайн"><img src="img/brian.jpg"
                        class="chat-item-image" alt="Чат 5 Чат крутых пацанов"></div>
                <div class="chat-item-summary">
                    <div class="chat-item-date-container">
                        <div class="chat-item-name" title="Чат 5 Чат крутых пацанов">Чат 5 Чат крутых
                            пацанов</div>
                        <div>28.04.2020</div>
                    </div>
                    <div class="chat-item-last-message"><span title="Брайн" class="chat-item-author-name">Брайн: </span><span
                            class="chat-item-last-message-text">Сообщение от крутого парня. Прочитай, не скучай</span>
                    </div>
                </div>
            </li>
            <li class="chat-item">
                <div class="chat-item-image-container" title="Брайн"><img src="img/brian.jpg"
                        class="chat-item-image" alt="Чат 5 Чат крутых пацанов"></div>
                <div class="chat-item-summary">
                    <div class="chat-item-date-container">
                        <div class="chat-item-name" title="Чат 5 Чат крутых пацанов">Чат 5 Чат крутых
                            пацанов</div>
                        <div>28.04.2020</div>
                    </div>
                    <div class="chat-item-last-message"><span title="Брайн" class="chat-item-author-name">Брайн: </span><span
                            class="chat-item-last-message-text">Сообщение от крутого парня. Прочитай, не скучай</span>
                    </div>
                </div>
            </li>
            <li class="chat-item">
                <div class="chat-item-image-container" title="Брайн"><img src="img/brian.jpg"
                        class="chat-item-image" alt="Чат 5 Чат крутых пацанов"></div>
                <div class="chat-item-summary">
                    <div class="chat-item-date-container">
                        <div class="chat-item-name" title="Чат 5 Чат крутых пацанов">Чат 5 Чат крутых
                            пацанов</div>
                        <div>28.04.2020</div>
                    </div>
                    <div class="chat-item-last-message"><span title="Брайн" class="chat-item-author-name">Брайн: </span><span
                            class="chat-item-last-message-text">Сообщение от крутого парня. Прочитай, не скучай</span>
                    </div>
                </div>
            </li>
            <li class="chat-item">
                <div class="chat-item-image-container" title="Брайн"><img src="img/brian.jpg"
                        class="chat-item-image" alt="Чат 5 Чат крутых пацанов"></div>
                <div class="chat-item-summary">
                    <div class="chat-item-date-container">
                        <div class="chat-item-name" title="Чат 5 Чат крутых пацанов">Чат 5 Чат крутых
                            пацанов</div>
                        <div>28.04.2020</div>
                    </div>
                    <div class="chat-item-last-message"><span title="Брайн" class="chat-item-author-name">Брайн: </span><span
                            class="chat-item-last-message-text">Сообщение от крутого парня. Прочитай, не скучай</span>
                    </div>
                </div>
            </li>
            <li class="chat-item">
                <div class="chat-item-image-container" title="Лоис (жена Питера)"><img
                        src="img/Lois_Griffin.png" class="chat-item-image" alt="Классный чат"></div>
                <div class="chat-item-summary">
                    <div class="chat-item-date-container">
                        <div class="chat-item-name" title="Классный чат">Классный чат</div>
                        <div>28.04.2020</div>
                    </div>
                    <div class="chat-item-last-message"><span title="Лоис (жена Питера)" class="chat-item-author-name">Лоис (жена
                            Питера): </span><span class="chat-item-last-message-text">Сообщение от крутого парня. Прочитай, не
                            скучай</span>
                    </div>
                </div>
            </li>
            <li class="chat-item">
                <div class="chat-item-image-container" title=""><img src="img/piter.png" class="chat-item-image"
                        alt="Классный чат но без сообщений"></div>
                <div class="chat-item-summary">
                    <div class="chat-item-date-container">
                        <div class="chat-item-name" title="Классный чат но без сообщений">Классный чат но
                            без сообщений</div>
                        <div>28.04.2020</div>
                    </div>
                </div>
            </li>
            <li class="chat-item">
                <div class="chat-item-image-container" title="Питер"><img src="img/piter.png"
                        class="chat-item-image" alt="Классный чат"></div>
                <div class="chat-item-summary">
                    <div class="chat-item-date-container">
                        <div class="chat-item-name" title="Классный чат">Классный чат</div>
                        <div>28.04.2020</div>
                    </div>
                    <div class="chat-item-last-message"><span title="Питер" class="chat-item-author-name">Питер: </span><span
                            class="chat-item-last-message-text">Привет! Всем чмок в этом чате. Вокруг героя и его
                            груза разворачивается сложная интрига с участием множества Вокруг героя и его груза
                            разворачивается сложная интрига с участием множества</span></div>
                </div>
            </li>
            <li class="chat-item">
                <div class="chat-item-image-container" title="Стюи"><img src="img/stue.png"
                        class="chat-item-image" alt="Классный чат но без сообщений1"></div>
                <div class="chat-item-summary">
                    <div class="chat-item-date-container">
                        <div class="chat-item-name" title="Классный чат но без сообщений1">Классный чат но
                            без сообщений1</div>
                        <div>28.04.2020</div>
                    </div>
                    <div class="chat-item-last-message"><span title="Стюи" class="chat-item-author-name">Стюи: </span><span
                            class="chat-item-last-message-text">Сообщение от крутого парня. Прочитай, не скучай</span>
                    </div>
                </div>
            </li>
            <li class="chat-item ">
                <div class="chat-item-image-container" title="Питер"><img src="img/piter.png"
                        class="chat-item-image" alt="Классный чат"></div>
                <div class="chat-item-summary">
                    <div class="chat-item-date-container">
                        <div class="chat-item-name" title="Классный чат">Классный чат</div>
                        <div>04.04.2020</div>
                    </div>
                    <div class="chat-item-last-message"><span title="Питер" class="chat-item-author-name">Питер: </span><span
                            class="chat-item-last-message-text">Сообщение от крутого парня. Прочитай, не скучай</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <div class="messages-screen">
        <div class="messages-screen-inner">
            <div class="messages-list">
                <div class="messages-date-block">28.04.2020</div>
                <div class="message">
                    <div class="message-image-container"><img src="img/piter.png" class="message-image"
                            alt="Питер"></div>
                    <div class="message-content">
                        <div class="message-name-and-date">
                            <div class="message-name">Питер</div>
                            <div class="message-date">19:57:43</div>
                        </div>
                        <div class="message-text">Сообщение от крутого парня. Прочитай, не скучай</div>
                    </div>
                </div>
                <div class="message">
                    <div class="message-image-container"></div>
                    <div class="message-content">
                        <div class="message-name-and-date">
                            <div></div>
                            <div class="message-date">19:59:20</div>
                        </div>
                        <div class="message-text">Сообщение от крутого парня. Прочитай, не скучай <a href="#">Тестовая ссылка</a></div>
                    </div>
                </div>
                <div class="messages-date-block">29.04.2020</div>
                <div class="message">
                    <div class="message-image-container"><img src="img/piter.png" class="message-image"
                            alt="Питер"></div>
                    <div class="message-content">
                        <div class="message-name-and-date">
                            <div class="message-name">Питер</div>
                            <div class="message-date">19:57:43</div>
                        </div>
                        <div class="message-text">Сообщение от крутого парня. Прочитай, не скучай</div>
                    </div>
                </div>
                <div class="message">
                    <div class="message-image-container"></div>
                    <div class="message-content">
                        <div class="message-name-and-date">
                            <div></div>
                            <div class="message-date">19:59:20</div>
                        </div>
                        <div class="message-text">Сообщение от крутого парня. Прочитай, не скучай <a href="#">Тестовая ссылка</a></div>
                    </div>
                </div>

                <div class="message">
                    <div class="message-image-container"><img src="img/Lois_Griffin.png" class="message-image"
                            alt="Питер"></div>
                    <div class="message-content">
                        <div class="message-name-and-date">
                            <div class="message-name">Питер</div>
                            <div class="message-date">19:57:43</div>
                        </div>
                        <div class="message-text">Сообщение от крутого парня. Прочитай, не скучай</div>
                    </div>
                </div>
                <div class="message">
                    <div class="message-image-container"></div>
                    <div class="message-content">
                        <div class="message-name-and-date">
                            <div></div>
                            <div class="message-date">19:59:20</div>
                        </div>
                        <div class="message-text">Сообщение от крутого парня. Прочитай, не скучай <a href="#">Тестовая ссылка</a></div>
                    </div>
                </div>
                <div class="messages-date-block">28.04.2020</div>
                <div class="message">
                    <div class="message-image-container"><img src="img/piter.png" class="message-image"
                            alt="Питер"></div>
                    <div class="message-content">
                        <div class="message-name-and-date">
                            <div class="message-name">Питер</div>
                            <div class="message-date">19:57:43</div>
                        </div>
                        <div class="message-text">Сообщение от крутого парня. Прочитай, не скучай</div>
                    </div>
                </div>
                <div class="message">
                    <div class="message-image-container"></div>
                    <div class="message-content">
                        <div class="message-name-and-date">
                            <div></div>
                            <div class="message-date">19:59:20</div>
                        </div>
                        <div class="message-text">Сообщение от крутого парня. Прочитай, не скучай <a href="#">Тестовая ссылка</a></div>
                    </div>
                </div>
                <div class="messages-date-block">29.04.2020</div>
                <div class="message">
                    <div class="message-image-container"><img src="img/piter.png" class="message-image"
                            alt="Питер"></div>
                    <div class="message-content">
                        <div class="message-name-and-date">
                            <div class="message-name">Питер</div>
                            <div class="message-date">19:57:43</div>
                        </div>
                        <div class="message-text">Сообщение от крутого парня. Прочитай, не скучай</div>
                    </div>
                </div>
                <div class="message">
                    <div class="message-image-container"></div>
                    <div class="message-content">
                        <div class="message-name-and-date">
                            <div></div>
                            <div class="message-date">19:59:20</div>
                        </div>
                        <div class="message-text">Сообщение от крутого парня. Прочитай, не скучай <a href="#">Тестовая ссылка</a></div>
                    </div>
                </div>

                <div class="message">
                    <div class="message-image-container"><img src="img/Lois_Griffin.png" class="message-image"
                            alt="Питер"></div>
                    <div class="message-content">
                        <div class="message-name-and-date">
                            <div class="message-name">Питер</div>
                            <div class="message-date">19:57:43</div>
                        </div>
                        <div class="message-text">Сообщение от крутого парня. Прочитай, не скучай</div>
                    </div>
                </div>
                <div class="message">
                    <div class="message-image-container"></div>
                    <div class="message-content">
                        <div class="message-name-and-date">
                            <div></div>
                            <div class="message-date">19:59:20</div>
                        </div>
                        <div class="message-text">Сообщение от крутого парня. Прочитай, не скучай <a href="#">Тестовая ссылка</a></div>
                    </div>
                </div>
                <div class="messages-date-block">28.04.2020</div>
                <div class="message">
                    <div class="message-image-container"><img src="img/piter.png" class="message-image"
                            alt="Питер"></div>
                    <div class="message-content">
                        <div class="message-name-and-date">
                            <div class="message-name">Питер</div>
                            <div class="message-date">19:57:43</div>
                        </div>
                        <div class="message-text">Сообщение от крутого парня. Прочитай, не скучай</div>
                    </div>
                </div>
                <div class="message">
                    <div class="message-image-container"></div>
                    <div class="message-content">
                        <div class="message-name-and-date">
                            <div></div>
                            <div class="message-date">19:59:20</div>
                        </div>
                        <div class="message-text">Сообщение от крутого парня. Прочитай, не скучай <a href="#">Тестовая ссылка</a></div>
                    </div>
                </div>
                <div class="messages-date-block">29.04.2020</div>
                <div class="message">
                    <div class="message-image-container"><img src="img/piter.png" class="message-image"
                            alt="Питер"></div>
                    <div class="message-content">
                        <div class="message-name-and-date">
                            <div class="message-name">Питер</div>
                            <div class="message-date">19:57:43</div>
                        </div>
                        <div class="message-text">Сообщение от крутого парня. Прочитай, не скучай</div>
                    </div>
                </div>
                <div class="message">
                    <div class="message-image-container"></div>
                    <div class="message-content">
                        <div class="message-name-and-date">
                            <div></div>
                            <div class="message-date">19:59:20</div>
                        </div>
                        <div class="message-text">Сообщение от крутого парня. Прочитай, не скучай <a href="#">Тестовая ссылка</a></div>
                    </div>
                </div>

                <div class="message">
                    <div class="message-image-container"><img src="img/Lois_Griffin.png" class="message-image"
                            alt="Питер"></div>
                    <div class="message-content">
                        <div class="message-name-and-date">
                            <div class="message-name">Питер</div>
                            <div class="message-date">19:57:43</div>
                        </div>
                        <div class="message-text">Сообщение от крутого парня. Прочитай, не скучай</div>
                    </div>
                </div>
                <div class="message">
                    <div class="message-image-container"></div>
                    <div class="message-content">
                        <div class="message-name-and-date">
                            <div></div>
                            <div class="message-date">19:59:20</div>
                        </div>
                        <div class="message-text">Сообщение от крутого парня. Прочитай, не скучай <a href="#">Тестовая ссылка</a></div>
                    </div>
                </div>
                <div class="messages-date-block">28.04.2020</div>
                <div class="message">
                    <div class="message-image-container"><img src="img/piter.png" class="message-image"
                            alt="Питер"></div>
                    <div class="message-content">
                        <div class="message-name-and-date">
                            <div class="message-name">Питер</div>
                            <div class="message-date">19:57:43</div>
                        </div>
                        <div class="message-text">Сообщение от крутого парня. Прочитай, не скучай</div>
                    </div>
                </div>
                <div class="message">
                    <div class="message-image-container"></div>
                    <div class="message-content">
                        <div class="message-name-and-date">
                            <div></div>
                            <div class="message-date">19:59:20</div>
                        </div>
                        <div class="message-text">Сообщение от крутого парня. Прочитай, не скучай <a href="#">Тестовая ссылка</a></div>
                    </div>
                </div>
                <div class="messages-date-block">29.04.2020</div>
                <div class="message">
                    <div class="message-image-container"><img src="img/piter.png" class="message-image"
                            alt="Питер"></div>
                    <div class="message-content">
                        <div class="message-name-and-date">
                            <div class="message-name">Питер</div>
                            <div class="message-date">19:57:43</div>
                        </div>
                        <div class="message-text">Сообщение от крутого парня. Прочитай, не скучай</div>
                    </div>
                </div>
                <div class="message">
                    <div class="message-image-container"></div>
                    <div class="message-content">
                        <div class="message-name-and-date">
                            <div></div>
                            <div class="message-date">19:59:20</div>
                        </div>
                        <div class="message-text">Сообщение от крутого парня. Прочитай, не скучай <a href="#">Тестовая ссылка</a></div>
                    </div>
                </div>

                <div class="message">
                    <div class="message-image-container"><img src="img/Lois_Griffin.png" class="message-image"
                            alt="Питер"></div>
                    <div class="message-content">
                        <div class="message-name-and-date">
                            <div class="message-name">Питер</div>
                            <div class="message-date">19:57:43</div>
                        </div>
                        <div class="message-text">Сообщение от крутого парня. Прочитай, не скучай</div>
                    </div>
                </div>
                <div class="message">
                    <div class="message-image-container"></div>
                    <div class="message-content">
                        <div class="message-name-and-date">
                            <div></div>
                            <div class="message-date">19:59:20</div>
                        </div>
                        <div class="message-text">Сообщение от крутого парня. Прочитай, не скучай <a href="#">Тестовая ссылка</a></div>
                    </div>
                </div>



            </div>
            <div class="send-message-form">
                <div class="message-textarea-container">
                    <textarea class="message-textarea"></textarea>
                </div>
                <button class="message-submit-button" title="Отправить" disabled=""></button>
            </div>
        </div>
    </div>
</div>
`;


const compiledTemplate = Handlebars.compile(html);






export const template = (context) => {
    return compiledTemplate(context);
};