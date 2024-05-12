document.addEventListener('DOMContentLoaded', ()=> {
//* esto cambiara todo el doctype de la pagina
    const swictherTheme = document.querySelector('.main__check');
    /**identificamos el main__check */
    const root = document.documentElement;
    /**identificamos el root como un elemento */

    if (root.getAttribute('data-theme')=== 'dark')  {
        swictherTheme.checked = true;
    }

    swictherTheme.addEventListener('click', ToggleTheme) 
    /**hacemos el evento al oprimir y llamamos el metodo */

    function ToggleTheme() {
        const setTheme = swictherTheme.checked ? 'dark' : 'light';


        root.setAttribute('data-theme', setTheme);
        //aqui se hace el cambio de atributo que tendra el data-theme mediente el cambio del setTheme
        localStorage.setItem('theme', setTheme);
    }
})
