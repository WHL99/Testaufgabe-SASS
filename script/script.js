const checkBtn = document.querySelector('.check-btn');

checkBtn.addEventListener('click', function () {
    const checkMoreContent = document.querySelector('.check-more-content')
    const p = document.createElement('p')
    const list = [
        {
            content: `Um mit ihm Kontakt aufzunehmen, um offene Angelegenheiten zu klären`
        },
        {
            content: `Um seine Erfahrung mit Webseiten der Marke oder des Autohauses zu teilen`
        },
        {
            content: `Zu bestimmen, ob seine Antworten anonym bleiben sollen`
        },
    ];
    const ul = document.createElement('ul');

    p.innerText = `Der letzte Abschnitt der Umfrage bezieht sich auf das Einverständnis des Kunden. In diesem Abschnitt ersuchen wir den Kunden um die Verwendung seiner Daten für Folgendes:`

    for (let i = 0; i < list.length; i++) {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.innerText = list[i].content;
        li.appendChild(p);
        ul.appendChild(li);
    }
    checkMoreContent.append(p, ul)
    checkBtn.style.display = 'none'
})