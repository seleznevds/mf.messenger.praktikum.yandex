export const template = `
<div class="app-container" data-component-id={{__COMPONENT_ID__}}>
    {{{renderComponent Header}}}

<div class="main">
    {{{renderComponent ChatList chatListProps}}} 
    {{{renderComponent MessageScreen messageScreenProps}}}     
</div>
</div>
`;