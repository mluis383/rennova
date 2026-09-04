const toggle=document.querySelector('.toggle'),nav=document.querySelector('nav');toggle.addEventListener('click',()=>nav.classList.toggle('open'));document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));document.querySelector('#year').textContent=new Date().getFullYear();document.querySelector('#form').addEventListener('submit',e=>{e.preventDefault();document.querySelector('#note').textContent='Mensagem registrada. Conecte um serviço de formulário antes da publicação para recebê-la por e-mail.'});

// Carrossel automático dos cards de serviços (.card-media). Funciona com qualquer
// quantidade de <img> dentro do container: se houver só 1 foto, permanece fixa;
// se houver 2 ou mais, elas trocam sozinhas em fade. Basta adicionar mais <img>
// dentro do .card-media no HTML para incluir novas fotos no futuro.
document.querySelectorAll('.card-media').forEach(media => {
    const slides = media.querySelectorAll('img');
    if (slides.length <= 1) return; // só 1 foto: fica fixa, sem carrossel

    if (![...slides].some(img => img.classList.contains('active'))) {
        slides[0].classList.add('active');
    }

    let current = [...slides].findIndex(img => img.classList.contains('active'));
    if (current < 0) current = 0;

    setInterval(() => {
        const next = (current + 1) % slides.length;
        slides[current].classList.remove('active');
        slides[next].classList.add('active');
        current = next;
    }, 4000);
});
