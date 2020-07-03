const html = `
<div class="app-container" id={{id}}>
<div class="header">
    <div class="logo"><a href="/"><img src="img/logo.png" width="76" height="51" ></a></div>
    {{{renderComponent Menu ParentComponent}}}       
</div>

<div class="main">
    {{{renderComponent ChatList ParentComponent chatList selectedChat handleChatSelect}}} 
    {{{renderComponent MessageScreen ParentComponent messages}}}     
</div>
`;


const compiledTemplate = Handlebars.compile(html);






export const template = (context) => {
    return compiledTemplate(context);
};