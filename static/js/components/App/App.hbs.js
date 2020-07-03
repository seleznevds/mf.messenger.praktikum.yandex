export const template = `
<div class="app-container" data-component-id={{__COMPONENT_ID__}}>
<div class="header">
    <div class="logo"><a href="/"><img src="img/logo.png" width="76" height="51" ></a></div>
    {{{renderComponent Menu }}}       
</div>

<div class="main">
    {{{renderComponent ChatList chatListProps}}} 
    {{{renderComponent MessageScreen messageScreenProps}}}     
</div>
</div>
`;