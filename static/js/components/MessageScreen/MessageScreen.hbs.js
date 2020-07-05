export const formTemplate = `
<form>
    <div class="message-textarea-container">
        <textarea class="message-textarea" name="message">{{values.message}}</textarea>
        {{#ifCond errors.message '&&' errors.message.length}}<div class="form-error">{{errors.message}}</div>{{/ifCond}}
    </div>
    <button type="submit" class="message-submit-button" title="Отправить" ></button>
</form>
`;


export const template = `
<div class="messages-screen" data-component-id={{__COMPONENT_ID__}}>
        <div class="messages-screen-inner">          
            <div class="messages-list">
                {{#if selectedChat}}
                    {{#if messages.length }}                    
                            {{#each messages  as | messageContainer | }}
                                {{#if messageContainer.message.shouldDisplayDateLabel}}                        
                                    <div class="messages-date-block">{{getFormattedTimeOrDay messageContainer.message.date}}</div>
                                {{/if}}
                                {{{renderComponent ../Message messageContainer}}}      
                            {{/each}}                    
                    {{else}}  
                        <div class="chat-empty-placeholder">Никто не написал в этот чат</div>    
                    {{/if}}
                {{else}} 
                    <div class="chat-empty-placeholder">Выберите чат слева</div>   
                {{/if}}  
            </div> 
            <div class="send-message-form">
                {{{renderComponent Form formProps}}} 
            </div>
        </div>
    </div>
`;