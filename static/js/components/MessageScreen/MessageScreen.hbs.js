export const template = `
<div class="messages-screen" data-component-id={{__COMPONENT_ID__}}>
        <div class="messages-screen-inner">
        
        {{#unless selectedChat}}
            <div class="chat-empty-placeholder">Выберите чат слева</div>
        {{/unless}}

        {{#if selectedChat}}
            {{#unless messages.length }}
                <div class="chat-empty-placeholder">Никто не написал в этот чат</div>
            {{/unless}}


            {{#if messages.length }}
                <div class="messages-list">
                    {{#each messages  as | message | }}
                        {{{renderComponent ../Message message}}}      
                    {{/each}}
                </div>   
            {{/if}}
        {{/if}}

      


       


            
            <div class="send-message-form">
                <div class="message-textarea-container">
                    <textarea class="message-textarea"></textarea>
                </div>
                <button class="message-submit-button" title="Отправить" disabled=""></button>
            </div>
        </div>
    </div>
`;