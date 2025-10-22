const members = [
  { name: 'Dr. Germano Fenner', role: 'Coordenador', photo: 'img/person1.jpg', bio: 'Pesquisador em riscos e crises corporativas, cibernéticas e governança de TIC.' },
  { name: 'Jônatas Fernandes', role: 'Pesquisador', photo: 'img/person2.jpg', bio: 'Pesquisador em crises cibernéticas e inteligência artificial.' },
  { name: 'Maria Rita', role: 'Pesquisadora', photo: 'img/person4.jpg', bio: 'Pesquisadora em técnicas de OCR e ICR para detecção de fraudes documentais' },
  { name: 'Mizael Gomes', role: 'Pesquisador', photo: 'img/', bio: 'Pesquisador em riscos cibernéticos e machine learning.' },
  { name: 'Suziane Brandão', role: 'Pesquisadora', photo: 'img/person3.jpg', bio: 'Pesquisadora em riscos SAC e inteligência artificial.' },
]

const publications = [
  { title: 'Práticas em Contabilidade e Gestão', year: 2024, link: 'https://editorarevistas.mackenzie.br/index.php/pcg/article/view/17264' },
]

const achievements = [
  { title: 'Participação ativa no Congresso de Gestão de Riscos (GRC) da Universidade de São Paulo (USP) desde 2022.', date: '2025' },
  { title: 'Todos os membros do grupo possuem bolsa de pesquisa apoiada pelo CNPq.', date: '2025' },
  { title: 'Apresentação de trabalho no 13º IFBae - Grenoble, França (Um Modelo de Apoio a Gestão de Riscos Cibernéticos e Possibilidade de OCorrência em Empresas - Uma Abordagem com Regressão Logística e Machine Learning).', date: '2025' },
  { title: 'Apresentação de trabalho no 11º European Risk Conference - Berlim, Alemanha: (Cyber Risk Management: Agents, Relationship and Risks).', date: '2025' },
  { title: 'Artigo publicado na revista Mackenzie: (Revisão Sistemática da Literatura Sobre Riscos Associados à Gestão do Conhecimento Disperso na Inovação Aberta).', date: '2024' },
]

const editais = [
  { title: 'Seleção de Novos Membros 2025', deadline: '2025-11-30', link: '#' }
]

function init(){
  document.getElementById('year').textContent = new Date().getFullYear()
  // esconder assistente se o usuário já fechou antes
  try{
    const hidden = localStorage.getItem('assistantHidden')
    if(hidden === '1'){
      const aw = document.querySelector('.assistant-widget')
      if(aw) aw.style.display = 'none'
    }
  }catch(e){
    alert("Erro, por favor recarregue a página")
  }
  const mg = document.getElementById('members-grid')
  if (mg) {
    members.forEach(m => {
      const card = document.createElement('div')
      card.className = 'card'
      card.innerHTML = `
      <img src="${m.photo}" alt="${m.name}" />
      <div class="info">
        <div class="name">${m.name}</div>
        <div class="role">${m.role}</div>
        <div class="bio">${m.bio}</div>
      </div>
    `
      mg.appendChild(card)
    })
  }

  // publicar lista de publicações 
  const pl = document.getElementById('pub-list')
  if (pl) {
    // ordenar por ano mais recente
    let listToShow = publications.slice().sort((a,b)=> (b.year||0) - (a.year||0))
    const attr = pl.getAttribute('data-limit')
    if(attr){
      const n = parseInt(attr,10)
      if(!isNaN(n)) listToShow = listToShow.slice(-n)
    } else {
      // mostra as 3 mais recentes no index
      const path = (location.pathname || '').toLowerCase()
      const isIndex = path.endsWith('index.html') || path.endsWith('/') || path === ''
      if(isIndex) listToShow = listToShow.slice(0,3)
    }

    listToShow.forEach(p =>{
      const li = document.createElement('li')
      li.innerHTML = `<strong>${p.title}</strong> <div class=\"meta\">${p.year} • <a href=\"${p.link}\">ver</a></div>`
      pl.appendChild(li)
    })
  }

  // conquistas
  const al = document.getElementById('ach-list')
  if (al) {
    // ordenar por data/ano mais recente
    let achToShow = achievements.slice().sort((a,b)=> {
      const ay = parseInt(a.date,10) || 0
      const by = parseInt(b.date,10) || 0
      return by - ay
    })
    const aAttr = al.getAttribute('data-limit')
    if(aAttr){
      const n = parseInt(aAttr,10)
      if(!isNaN(n)) achToShow = achToShow.slice(0,n)
    } else {
      const path = (location.pathname || '').toLowerCase()
      const isIndex = path.endsWith('index.html') || path.endsWith('/') || path === ''
      if(isIndex) achToShow = achToShow.slice(0,3)
    }

    achToShow.forEach(a =>{
      const li = document.createElement('li')
      li.innerHTML = `<strong>${a.title}</strong> <div class=\"meta\">${a.date}</div>`
      al.appendChild(li)
    })
  }

  // editais
  const el = document.getElementById('editais-list')
  if (el) {
    editais.forEach(e=>{
      const li = document.createElement('li')
      li.innerHTML = `<strong>${e.title}</strong> <div class=\"meta\">Deadline: ${e.deadline} • <a href=\"${e.link}\">inscreva-se</a></div>`
      el.appendChild(li)
    })
  }
}

document.addEventListener('DOMContentLoaded', init)

// fechar widget
document.addEventListener('click', function(e){
  const btn = e.target.closest && e.target.closest('.assistant-close')
  if(btn){
    const aw = document.querySelector('.assistant-widget')
    if(aw) aw.style.display = 'none'
    try{ localStorage.setItem('assistantHidden','1') }catch(e){}
  }
})

// ripple eletrônico nos links da navbar
document.addEventListener('click', function(e){
  const a = e.target.closest && e.target.closest('.main-nav a')
  if(!a) return

  // permitir abrir em nova aba ou com modificadores
  if(e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || (a.target && a.target === '_blank')) return

  e.preventDefault()
  // remover ripple antigo
  const old = a.querySelector('.ripple')
  if(old) old.remove()

  const rect = a.getBoundingClientRect()
  const ripple = document.createElement('span')
  ripple.className = 'ripple'
  const size = Math.max(rect.width, rect.height)
  ripple.style.width = ripple.style.height = size + 'px'
  const x = e.clientX - rect.left - size/2
  const y = e.clientY - rect.top - size/2
  ripple.style.left = x + 'px'
  ripple.style.top = y + 'px'
  a.appendChild(ripple)
  a.classList.add('ripple-animate')

  setTimeout(()=>{
    window.location.href = a.href
  }, 420)
})
