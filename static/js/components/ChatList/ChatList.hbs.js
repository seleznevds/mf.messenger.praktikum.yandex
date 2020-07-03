export const template = `
<div class="chat-list-container" data-component-id={{__COMPONENT_ID__}}>
        <ul class="chat-list">      
            {{#each chats }}
                <li class="chat-item {{#ifCond id '==' ../selected}} chat-item-selected {{/ifCond}}" data-id={{id}}>
                    <div class="chat-item-image-container" title={{lastMessageAuthor}}"><img src="{{img}}"
                            class="chat-item-image" alt="{{name}}"></div>
                    <div class="chat-item-summary">
                        <div class="chat-item-date-container">
                            <div class="chat-item-name" title="{{name}}">{{name}}</div>
                            <div>{{getFormattedTimeOrDay date}}</div>
                        </div>
                        <div class="chat-item-last-message"><span title="{{lastMessageAuthor}}" class="chat-item-author-name">{{lastMessageAuthor}}: </span><span
                                class="chat-item-last-message-text">{{lastMessage}}</span>
                        </div>
                    </div>
                </li>
            {{else}}
            <li class="chat-empty-list-element">ddd</li>
            {{/each}}
        </ul>        
    </div>
`;