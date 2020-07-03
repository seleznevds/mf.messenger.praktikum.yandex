const html = `
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
`;


const compiledTemplate = Handlebars.compile(html);

export const template = (context) => {
    return compiledTemplate(context);
};