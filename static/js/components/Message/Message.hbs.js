export const template = `
{{#with message}}
    <div class="message" data-component-id={{__COMPONENT_ID__}}>
        <div class="message-image-container">
        {{#if shouldDisplayAuthorBlock}}
            <img src="{{avatarImg}}" class="message-image" alt="{{author}}">
        {{/if}}
        
      </div>
        <div class="message-content">
            <div class="message-name-and-date">
                {{#if shouldDisplayAuthorBlock}}
                    <div class="message-name">{{author}}</div>
                {{else}}
                    <div></div>
                {{/if}}
                <div class="message-date">{{getFormattedTime date}}</div>
            </div>
            <div class="message-text">{{content}}</div>
        </div>
    </div>
{{/with}}`;