const links = [
  {
    text: 'Twitter',
    href: 'https://twitter.com/tmegos',
  },
  {
    text: 'GitHub',
    href: 'https://github.com/megos',
  },
  {
    text: 'GitLab',
    href: 'https://gitlab.com/megos',
  },
  {
    text: 'Speaker Deck',
    href: 'https://speakerdeck.com/megos',
  },
  {
    text: 'Hatena Blog',
    href: 'https://tmegos.hatenablog.jp',
  },
  {
    text: 'LAPRAS',
    href: 'https://lapras.com/public/R051YPL',
  },
]

window.addEventListener('DOMContentLoaded', () => {
  const linkList = document.querySelector('.js-links-list')
  links.forEach((link) => {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.href = link.href
    a.text = link.text
    a.target = '_blank'
    li.appendChild(a)
    linkList.appendChild(li)
  })
})
