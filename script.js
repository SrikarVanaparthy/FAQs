
const inputGps = document.querySelectorAll('.input-grp');

inputGps.forEach((group) => {
    const plusIcon = group.querySelector('.fa-plus');
    const minusIcon = group.querySelector('.fa-minus');
    const content = group.querySelector('p');

    plusIcon.addEventListener('click', () => {
        content.style.display = 'block';
        minusIcon.style.display = 'inline';
        plusIcon.style.display = 'none';
    });

    minusIcon.addEventListener('click', () => {
        content.style.display = 'none';
        minusIcon.style.display = 'none';
        plusIcon.style.display = 'inline';
    });
    const container = document.querySelector('.container');
    container.style.height = 'auto';
});
