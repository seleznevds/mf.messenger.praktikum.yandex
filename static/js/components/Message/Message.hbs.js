export const template = `
{{#with message}}
<div class="message" data-component-id={{__COMPONENT_ID__}}>
    <div class="message-image-container"><img src="{{avatarImg}}" class="message-image"
            alt="{{author}}"></div>
    <div class="message-content">
        <div class="message-name-and-date">
            <div class="message-name">{{author}}</div>
            <div class="message-date">{{getFormattedTime date}}</div>
        </div>
        <div class="message-text">{{content}}</div>
    </div>
</div>
{{/with}}`;