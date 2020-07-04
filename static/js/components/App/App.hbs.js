export const template = `
<div class="{{#if addWrapperClassName}}app-container{{/if}}" data-component-id={{__COMPONENT_ID__}}>
    {{{renderComponent Component }}}   
</div>
`;