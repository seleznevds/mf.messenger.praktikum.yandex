export const template = `
<div class="messages-screen" data-component-id={{__COMPONENT_ID__}}>
        <div class="messages-screen-inner">          

            {{#if selectedChat}}
                {{#if messages.length }}
                    <div class="messages-list">
                        {{#each messages  as | messageContainer | }}
                            {{#if messageContainer.message.shouldDisplayDateLabel}}                        
                                <div class="messages-date-block">{{getFormattedTimeOrDay messageContainer.message.date}}</div>
                            {{/if}}
                            {{{renderComponent ../Message messageContainer}}}      
                        {{/each}}
                    </div> 
                {{else}}  
                    <div class="chat-empty-placeholder">Никто не написал в этот чат</div>    
                {{/if}}

            {{else}} 
                <div class="chat-empty-placeholder">Выберите чат слева</div>   
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