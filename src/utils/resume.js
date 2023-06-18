const resumeAlert = () => {
    const resumeButtons = document.querySelectorAll('#resume')
    
    resumeButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Lucas, 21, é um brasileiro graduando em Ciência da Computação pela UFAL, apaixonado por front-end e entusiasta de UI/UX. Atualmente, desenvolvedor da ITAN Labs, trabalhou em múltiplos projetos pessoais e também num sistema para própria universidade usando algumas das tecnologias que domina, como: HTML, CSS, JavaScript e ReactJS. Lucas está disponível para discutir ideias e iniciar novos projetos, basta entrar em contato! =]')
        })
    })
}


export default resumeAlert