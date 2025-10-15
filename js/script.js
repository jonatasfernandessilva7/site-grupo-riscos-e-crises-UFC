const members = [
  { name: 'Dr. Germano Fenner', role: 'Coordenador', photo: 'img/person1.jpg', bio: 'Pesquisador em riscos e crises corporativas, cibernéticas e governança de TIC.' },
  { name: 'Jônatas Fernandes', role: 'Pesquisador', photo: 'img/person2.jpg', bio: 'Pesquisador em crises cibernéticas e inteligência artificial.' },
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
  // popular membros apenas se o container existir nesta página
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

  // publicar lista de publicações se o elemento existir
  const pl = document.getElementById('pub-list')
  if (pl) {
    publications.forEach(p =>{
      const li = document.createElement('li')
      li.innerHTML = `<strong>${p.title}</strong> <div class=\"meta\">${p.year} • <a href=\"${p.link}\">ver</a></div>`
      pl.appendChild(li)
    })
  }

  // conquistas
  const al = document.getElementById('ach-list')
  if (al) {
    achievements.forEach(a =>{
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
