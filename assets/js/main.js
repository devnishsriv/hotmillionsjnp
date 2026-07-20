// ===== MENU DATA FOR SEARCH & DETAILS =====
const menuItems = [
  { name: 'Classic Butterscotch Cake', category: 'Cakes', price: '₹500+', desc: 'Our legendary butterscotch cake. Butter-cream layers studded with premium crunchy nougat.', tag: 'Best Seller', icon: 'mdi:cake-variant', img: 'https://picsum.photos/seed/m-butterscotch/350/250.jpg' },
  { name: 'Elegant Vanilla Dream Cake', category: 'Cakes', price: '₹400+', desc: 'Soft and fluffy layers of vanilla sponge layered with pure real vanilla bean cream.', tag: 'Classic', icon: 'mdi:cake-variant', img: 'https://picsum.photos/seed/m-vanilla/350/250.jpg' },
  { name: 'Decadent Chocolate Truffle', category: 'Cakes', price: '₹500+', desc: 'Rich chocolate sponge cake smothered in fine dark chocolate ganache glaze.', tag: 'Popular', icon: 'mdi:cake-variant', img: 'https://picsum.photos/seed/m-choc-truffle/350/250.jpg' },
  { name: 'Luxe Multi-Tier Wedding Cake', category: 'Cakes', price: '₹2,000+', desc: 'Bespoke design wedding cake tailored for your special day. Tiered structure with customized toppers.', tag: 'Signature', icon: 'mdi:cake-variant', img: 'https://picsum.photos/seed/m-wedding/350/250.jpg' },
  { name: 'Custom Theme Birthday Cake', category: 'Cakes', price: '₹600+', desc: 'Artistic fondant or whipped cream themed cake with characters, colors, and toys of your choice.', tag: 'Trending', icon: 'mdi:cake-variant', img: 'https://picsum.photos/seed/m-bday/350/250.jpg' },
  { name: 'Royal Red Velvet Cake', category: 'Cakes', price: '₹700+', desc: 'Exquisite red velvet sponge layered with smooth and tangy cream-cheese frosting.', tag: 'Premium', icon: 'mdi:cake-variant', img: 'https://picsum.photos/seed/m-redvelvet/350/250.jpg' },
  { name: 'Tropical Pineapple Sunshine Cake', category: 'Cakes', price: '₹450+', desc: 'Fresh whipped cream cake layered with juicy sweet pineapple pieces and cherries.', tag: 'Fresh', icon: 'mdi:cake-variant', img: 'https://picsum.photos/seed/m-pineapple/350/250.jpg' },
  
  { name: 'Fresh Butterscotch Pastry', category: 'Pastries', price: '₹80+', desc: 'Single-serve slice of our legendary buttery nougat butterscotch masterpiece.', tag: 'Fresh Batch', icon: 'mdi:cookie', img: 'https://picsum.photos/seed/m-p-butter/350/250.jpg' },
  { name: 'Vanilla Cream Pastry', category: 'Pastries', price: '₹70+', desc: 'Light, delicate slice of sponge filled with premium cream and fruit bits.', tag: 'Classic', icon: 'mdi:cookie', img: 'https://picsum.photos/seed/m-p-vanilla/350/250.jpg' },
  { name: 'Double Chocolate Fudge Pastry', category: 'Pastries', price: '₹80+', desc: 'A rich and chocolatey slice packed with premium melted fudge chips.', tag: 'Chocolatey', icon: 'mdi:cookie', img: 'https://picsum.photos/seed/m-p-choc/350/250.jpg' },
  { name: 'Black Forest Pastry', category: 'Pastries', price: '₹90+', desc: 'Traditional German slice layered with cherries, rich cream, and dark chocolate flakes.', tag: 'Beloved', icon: 'mdi:cookie', img: 'https://picsum.photos/seed/m-p-black/350/250.jpg' },
  
  { name: 'Artisan Assorted Chocolates', category: 'Chocolates', price: '₹200+', desc: 'A custom assortment of dark, milk, and white chocolates hand-tempered on site.', tag: 'Gift Idea', icon: 'mdi:candy', img: 'https://picsum.photos/seed/m-c-assorted/350/250.jpg' },
  { name: 'Gourmet Handcrafted Truffles', category: 'Chocolates', price: '₹300+', desc: 'Premium ganache centers rolled in cocoa powder, roasted nuts, or colorful sprinkles.', tag: 'Artisan', icon: 'mdi:candy', img: 'https://picsum.photos/seed/m-c-truffles/350/250.jpg' },
  { name: 'Premium Chocolate Gift Box', category: 'Chocolates', price: '₹500+', desc: 'Luxury golden gift packaging loaded with 16 signature handcrafted pralines.', tag: 'Gifting Special', icon: 'mdi:gift', img: 'https://picsum.photos/seed/m-c-box/350/250.jpg' },
  
  { name: 'Fresh Mozzarella Cheese', category: 'Savory', price: '₹250+', desc: 'Our famous house-prepared Italian mozzarella. Super soft, fresh, and perfect for melting.', tag: 'Local Pride', icon: 'mdi:cheese', img: 'https://picsum.photos/seed/m-s-mozzarella/350/250.jpg' },
  { name: 'Hot Mozzarella Cheese Pizza', category: 'Savory', price: '₹100+', desc: 'Golden, bubbly pan pizza topped with our signature fresh local cheese and tangy tomato sauce.', tag: 'Fresh Baked', icon: 'mdi:pizza', img: 'https://picsum.photos/seed/m-s-pizza/350/250.jpg' },
  { name: 'Crispy Veg Puff Patties', category: 'Savory', price: '₹30+', desc: 'Warm flaky puff pastry shell stuffed with spicy mashed potato, green peas and herbs.', tag: 'Snack King', icon: 'mdi:food-variant', img: 'https://picsum.photos/seed/m-s-patties/350/250.jpg' },
  { name: 'Crispy Paneer Puff Patties', category: 'Savory', price: '₹40+', desc: 'Rich golden puff pastry containing seasoned spiced paneer cubes.', tag: 'Spicy Delight', icon: 'mdi:food-variant', img: 'https://picsum.photos/seed/m-s-paneer/350/250.jpg' },
  { name: 'Artisan Milk Bread Slices', category: 'Savory', price: '₹30+', desc: 'Freshly baked super-soft loaf sliced and prepared daily. Zero preservatives.', tag: 'Daily Fresh', icon: 'mdi:bread-slice', img: 'https://picsum.photos/seed/m-s-bread/350/250.jpg' }
];

// ===== LOADING SCREEN =====
window.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    const isHome = window.location.pathname === '/' || window.location.pathname.endsWith('index.html');
    let navType = 'navigate';
    if (window.performance) {
      const navEntries = performance.getEntriesByType('navigation');
      if (navEntries.length > 0) {
        navType = navEntries[0].type;
      } else if (performance.navigation) {
        navType = performance.navigation.type === 1 ? 'reload' : 'navigate';
      }
    }
    
    const isSameSite = document.referrer && document.referrer.startsWith(window.location.origin);
    const isReload = navType === 'reload';
    
    // Only show loader if on home page AND (it's a reload OR it's a fresh visit)
    const shouldShowLoader = isHome && (isReload || !isSameSite);
    
    if (shouldShowLoader) {
      const tl = gsap.timeline();
      const loaderParticles = document.getElementById('loaderParticles');
      if (loaderParticles) {
        for(let i=0;i<30;i++){
          const p = document.createElement('div');
          p.className = 'particle';
          p.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*100}%;width:${2+Math.random()*4}px;height:${2+Math.random()*4}px;background:rgba(201,169,110,${0.1+Math.random()*0.3});animation:float ${3+Math.random()*4}s ease-in-out infinite ${Math.random()*2}s`;
          loaderParticles.appendChild(p);
        }
      }
      
      tl.to('#loaderLogo',{opacity:1,y:0,duration:0.4,ease:'power3.out'})
        .to('#loaderHindi',{opacity:1,y:0,duration:0.3,ease:'power3.out'},'-=0.2')
        .to('#loaderProgress',{opacity:1,duration:0.2},'-=0.1')
        .to('#loaderFill',{width:'100%',duration:0.6,ease:'power2.inOut'},'-=0.1')
        .to('#loader',{opacity:0,visibility:'hidden',duration:0.4,ease:'power2.inOut'},'+=0.1')
        .call(()=>{ 
          loader.classList.add('hidden'); 
          initAnimations(); 
        });
    } else {
      loader.style.display = 'none';
      initAnimations();
    }
  } else {
    initAnimations();
  }
});

// ===== MOBILE MENU =====
const mobileMenuBtn=document.getElementById('mobileMenuBtn');
const mobileMenu=document.getElementById('mobileMenu');
let menuOpen=false;
if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click',()=>{
    menuOpen=!menuOpen;
    mobileMenu.style.maxHeight=menuOpen?'400px':'0';
    mobileMenuBtn.querySelector('iconify-icon').setAttribute('icon',menuOpen?'mdi:close':'mdi:menu');
  });
  document.querySelectorAll('.mobile-link').forEach(l=>{
    l.addEventListener('click',()=>{
      menuOpen=false;
      mobileMenu.style.maxHeight='0';
      mobileMenuBtn.querySelector('iconify-icon').setAttribute('icon','mdi:menu');
    });
  });
}

// ===== NAVBAR SCROLL =====
window.addEventListener('scroll',()=>{
  const navbar=document.getElementById('navbar');
  if (navbar) {
    const st=window.scrollY;
    if(st>100){
      navbar.classList.add('glass');
      navbar.style.borderBottom='1px solid rgba(160,32,64,0.05)';
    }else{
      navbar.classList.remove('glass');
      navbar.style.borderBottom='none';
    }
  }
});

// ===== SEARCH =====
function toggleSearch(){
  const modal=document.getElementById('searchModal');
  if (modal) {
    modal.classList.toggle('open');
    if(modal.classList.contains('open')){
      const input = document.getElementById('searchInput');
      if (input) input.focus();
      document.body.style.overflow='hidden';
    }else{
      document.body.style.overflow='';
    }
  }
}

const searchInput = document.getElementById('searchInput');
if (searchInput) {
  searchInput.addEventListener('input',(e)=>{
    const query=e.target.value.toLowerCase().trim();
    const results=document.getElementById('searchResults');
    if(!results) return;
    if(!query){results.innerHTML='';return;}
    const filtered=menuItems.filter(i=>i.name.toLowerCase().includes(query)||i.category.toLowerCase().includes(query));
    results.innerHTML=filtered.length?filtered.map(i=>`
      <div class="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition cursor-pointer" onclick="toggleSearch(); window.location.href='menu.html?search=' + encodeURIComponent('${i.name}')">
        <iconify-icon icon="${i.icon}" width="24" class="text-gold-400"></iconify-icon>
        <div class="flex-1">
          <div class="text-white font-medium text-sm">${i.name}</div>
          <div class="text-white/30 text-xs">${i.category}</div>
        </div>
        <div class="text-gold-400 text-sm font-semibold">${i.price}</div>
      </div>
    `).join(''):'<div class="text-white/30 text-center py-8">No items found</div>';
  });
}

document.addEventListener('keydown',(e)=>{
  if(e.key==='Escape') {
    const modal=document.getElementById('searchModal');
    if (modal && modal.classList.contains('open')) toggleSearch();
  }
  if((e.metaKey||e.ctrlKey)&&e.key==='k'){
    e.preventDefault();
    toggleSearch();
  }
});

// ===== TOAST =====
function showToast(msg){
  const toast=document.getElementById('toast');
  if (toast) {
    toast.textContent=msg;
    toast.classList.add('show');
    setTimeout(()=>toast.classList.remove('show'),3000);
  }
}

// ===== ORDER FORM =====
const orderForm = document.getElementById('orderForm');
if (orderForm) {
  orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('🎉 Order inquiry received! We\'ll call you shortly.');
    e.target.reset();
  });
}

// ===== NEWSLETTER =====
const newsletterForm = document.querySelector('form[onsubmit="handleNewsletter(event)"]') || document.getElementById('newsletterForm');
if (newsletterForm) {
  newsletterForm.removeAttribute('onsubmit');
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('✨ Subscribed! Sweet updates coming your way.');
    e.target.reset();
  });
}

// ===== MAIN ANIMATIONS (After Loader) =====
function initAnimations(){
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    return;
  }
  
  gsap.registerPlugin(ScrollTrigger);

  // Initialize Lenis for smooth scrolling
  if (typeof Lenis !== 'undefined') {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }

  // Hero text reveal
  if (document.querySelector('.reveal-text .char')) {
    gsap.to('.reveal-text .char',{
      y:0,opacity:1,duration:0.8,ease:'power3.out',stagger:0.05,delay:0.2
    });
  }

  // Hero fade elements
  if (document.querySelector('.hero-fade')) {
    gsap.to('.hero-fade',{
      opacity:1,y:0,duration:0.8,ease:'power3.out',stagger:0.15,delay:0.8
    });
  }

  // Hero visual
  if (document.querySelector('.hero-visual')) {
    gsap.to('.hero-visual',{
      opacity:1,scale:1,duration:1.2,ease:'power3.out',delay:0.5
    });
  }

  // About section
  if (document.querySelector('.about-visual')) {
    gsap.to('.about-visual',{
      scrollTrigger:{trigger:'#about',start:'top 80%'},
      opacity:1,x:0,duration:1,ease:'power3.out'
    });
  }
  if (document.querySelector('.about-content')) {
    gsap.to('.about-content',{
      scrollTrigger:{trigger:'#about',start:'top 80%'},
      opacity:1,x:0,duration:1,ease:'power3.out',delay:0.2
    });
  }

  // Timeline items
  if (document.querySelector('.timeline-item')) {
    gsap.utils.toArray('.timeline-item').forEach((item,i)=>{
      gsap.to(item,{
        scrollTrigger:{trigger:item,start:'top 85%'},
        opacity:1,y:0,duration:0.8,ease:'power3.out',delay:i*0.15
      });
    });
  }

  // Menu section
  if (document.querySelector('.menu-header')) {
    gsap.to('.menu-header',{
      scrollTrigger:{trigger:'#menu',start:'top 80%'},
      opacity:1,y:0,duration:0.8,ease:'power3.out'
    });
  }
  if (document.querySelector('.menu-card')) {
    gsap.utils.toArray('.menu-card').forEach((card,i)=>{
      gsap.to(card,{
        scrollTrigger:{trigger:card,start:'top 85%'},
        opacity:1,y:0,duration:0.8,ease:'power3.out',delay:i*0.1
      });
    });
  }

  // Products/Specialties header
  if (document.querySelector('.products-header')) {
    gsap.to('.products-header',{
      scrollTrigger:{trigger:'#specialties',start:'top 80%'},
      opacity:1,y:0,duration:0.8,ease:'power3.out'
    });
  }

  // Stacking cards (Legendary Specialties Showcase)
  if (document.querySelector('.stack-card')) {
    const cards = gsap.utils.toArray('.stack-card');
    cards.forEach((card, i) => {
      // Set correct stacking z-index dynamically and transform origin
      card.style.zIndex = (i + 1) * 10;
      card.style.transformOrigin = 'center top';
      
      // 1. Entry Animation: smooth scroll-controlled fade-in and slide-up as it enters
      gsap.fromTo(card, 
        { opacity: 0, y: 80, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          scrollTrigger: {
            trigger: card,
            start: 'top 95%',
            end: 'top 40%',
            scrub: 1, // adds gorgeous inertial smooth easing
          }
        }
      );

      // 2. Stacking Depth Animation: scale down & fade out older cards as subsequent cards stack over them
      if (i < cards.length - 1) {
        gsap.to(card, {
          scale: 0.93 - (i * 0.02),
          opacity: 0.45,
          y: -15, // elegant top-aligned offset
          scrollTrigger: {
            trigger: cards[i + 1], // Triggered by the next card's scroll position
            start: 'top 85%',      // Start shrinking as next card approaches
            end: 'top 12vh',       // Fully shrunk when next card is sticky
            scrub: 1,              // adds gorgeous inertial smooth easing
          }
        });
      }
    });
  }

  // Testimonials
  if (document.querySelector('.testimonials-header')) {
    gsap.to('.testimonials-header',{
      scrollTrigger:{trigger:'#testimonials',start:'top 80%'},
      opacity:1,y:0,duration:0.8,ease:'power3.out'
    });
  }
  if (document.querySelector('.testimonial-card')) {
    gsap.utils.toArray('.testimonial-card').forEach((card,i)=>{
      gsap.to(card,{
        scrollTrigger:{trigger:card,start:'top 85%'},
        opacity:1,y:0,duration:0.8,ease:'power3.out',delay:i*0.1
      });
    });
  }
  if (document.querySelector('.testimonials-summary')) {
    gsap.to('.testimonials-summary',{
      scrollTrigger:{trigger:'.testimonials-summary',start:'top 85%'},
      opacity:1,y:0,duration:0.8,ease:'power3.out'
    });
  }

  // Team
  if (document.querySelector('.team-header')) {
    gsap.to('.team-header',{
      scrollTrigger:{trigger:'#team',start:'top 80%'},
      opacity:1,y:0,duration:0.8,ease:'power3.out'
    });
  }
  if (document.querySelector('.team-card')) {
    gsap.utils.toArray('.team-card').forEach((card,i)=>{
      gsap.to(card,{
        scrollTrigger:{trigger:card,start:'top 85%'},
        opacity:1,y:0,duration:0.8,ease:'power3.out',delay:i*0.1
      });
    });
  }

  // FAQ
  if (document.querySelector('.faq-header')) {
    gsap.to('.faq-header',{
      scrollTrigger:{trigger:'#faq',start:'top 80%'},
      opacity:1,y:0,duration:0.8,ease:'power3.out'
    });
  }
  if (document.querySelector('.faq-item')) {
    gsap.utils.toArray('.faq-item').forEach((item,i)=>{
      gsap.to(item,{
        scrollTrigger:{trigger:item,start:'top 90%'},
        opacity:1,y:0,duration:0.6,ease:'power3.out',delay:i*0.08
      });
    });
  }

  // Contact
  if (document.querySelector('.contact-header')) {
    gsap.to('.contact-header',{
      scrollTrigger:{trigger:'#contact',start:'top 80%'},
      opacity:1,y:0,duration:0.8,ease:'power3.out'
    });
  }
  if (document.querySelector('.contact-form')) {
    gsap.to('.contact-form',{
      scrollTrigger:{trigger:'.contact-form',start:'top 80%'},
      opacity:1,x:0,duration:0.8,ease:'power3.out'
    });
  }
  if (document.querySelector('.contact-info')) {
    gsap.to('.contact-info',{
      scrollTrigger:{trigger:'.contact-info',start:'top 80%'},
      opacity:1,x:0,duration:0.8,ease:'power3.out',delay:0.2
    });
  }

  // Counter animation
  if (document.querySelector('.counter-value')) {
    gsap.utils.toArray('.counter-value').forEach(counter=>{
      const target=parseInt(counter.dataset.target);
      ScrollTrigger.create({
        trigger:counter,
        start:'top 85%',
        onEnter:()=>{
          gsap.to({val:0},{
            val:target,
            duration:2,
            ease:'power2.out',
            onUpdate:function(){counter.textContent=Math.round(this.targets()[0].val);}
          });
        },
        once:true
      });
    });
  }

  // Parallax on scroll
  if (document.querySelector('[data-speed]')) {
    gsap.utils.toArray('[data-speed]').forEach(el=>{
      const speed=parseFloat(el.dataset.speed);
      gsap.to(el,{
        y:()=>speed*100,
        ease:'none',
        scrollTrigger:{trigger:el,start:'top bottom',end:'bottom top',scrub:true}
      });
    });
  }
}

// ===== FAQ TOGGLER =====
function toggleFaq(el){
  const wasOpen=el.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));
  if(!wasOpen)el.classList.add('open');
}

// ===== SMOOTH ANCHOR SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',(e)=>{
    const href = a.getAttribute('href');
    if (href === "#") return;
    const target=document.querySelector(href);
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth',block:'start'});
    }
  });
});

// ===== 3D CARD TILT ON MOUSE =====
document.querySelectorAll('.testimonial-card,.menu-card,.specialty-card').forEach(card=>{
  card.addEventListener('mousemove',(e)=>{
    const rect=card.getBoundingClientRect();
    const x=(e.clientX-rect.left)/rect.width-0.5;
    const y=(e.clientY-rect.top)/rect.height-0.5;
    card.style.transform=`perspective(1000px) rotateY(${x*8}deg) rotateX(${-y*8}deg) translateY(-4px)`;
  });
  card.addEventListener('mouseleave',()=>{
    card.style.transform='perspective(1000px) rotateY(0) rotateX(0) translateY(0)';
  });
});

// ===== MAGNETIC BUTTONS =====
document.querySelectorAll('.magnetic-btn').forEach(btn=>{
  btn.addEventListener('mousemove',(e)=>{
    const rect=btn.getBoundingClientRect();
    const x=e.clientX-rect.left-rect.width/2;
    const y=e.clientY-rect.top-rect.height/2;
    btn.style.transform=`translate(${x*0.2}px,${y*0.2}px)`;
  });
  btn.addEventListener('mouseleave',()=>{
    btn.style.transform='translate(0,0)';
  });
});

// ===== HERO PARTICLES =====
const heroParticles = document.getElementById('heroParticles');
if (heroParticles) {
  for(let i=0;i<40;i++){
    const p=document.createElement('div');
    p.className='particle';
    const size=2+Math.random()*6;
    const isGold=Math.random()>0.5;
    p.style.cssText=`left:${Math.random()*100}%;top:${Math.random()*100}%;width:${size}px;height:${size}px;background:${isGold?'rgba(201,169,110,0.2)':'rgba(160,32,64,0.1)'};animation:float ${4+Math.random()*6}s ease-in-out infinite ${Math.random()*3}s`;
    heroParticles.appendChild(p);
  }
}

// ===== INTERACTIVE MENU CATALOG =====
let activeFilter = 'All';

function renderCatalog() {
  const grid = document.getElementById('catalogGrid');
  if (!grid) return;
  
  const searchInput = document.getElementById('catalogSearch');
  const searchQuery = searchInput ? searchInput.value.toLowerCase().trim() : '';
  
  let items = menuItems;
  
  // Filter by category
  if (activeFilter !== 'All') {
    items = items.filter(item => item.category === activeFilter);
  }
  
  // Filter by search query
  if (searchQuery) {
    items = items.filter(item => 
      item.name.toLowerCase().includes(searchQuery) || 
      (item.desc && item.desc.toLowerCase().includes(searchQuery))
    );
  }
  
  if (items.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full text-center py-20 text-brand-800/40 font-display text-xl">
        <iconify-icon icon="mdi:cookie-alert" width="48" class="block mx-auto mb-4 text-gold-400"></iconify-icon>
        No delicious items match your search. Try another category!
      </div>
    `;
    return;
  }
  
  grid.innerHTML = items.map(item => {
    const waText = encodeURIComponent(`Hi Hot Millions Bakery! I want to order "${item.name}" from your catalog (Price: ${item.price}). Please confirm availability!`);
    return `
      <div class="bg-white rounded-3xl border border-brand-100 shadow-xl shadow-brand-500/5 p-4 flex flex-col justify-between group specialty-card hover:-translate-y-2 transition-all duration-300">
        <div>
          <div class="relative rounded-2xl overflow-hidden aspect-[4/3] mb-4 bg-brand-50">
            <img src="${item.img || 'https://picsum.photos/seed/bakery/350/250.jpg'}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="${item.name}">
            ${item.tag ? `<span class="absolute top-3 left-3 bg-brand-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md">${item.tag}</span>` : ''}
            <span class="absolute bottom-3 right-3 bg-cream-50/90 backdrop-blur-md border border-brand-100 px-2.5 py-1 rounded-xl text-xs font-bold text-brand-800 shadow-sm">${item.category}</span>
          </div>
          <h3 class="font-display text-lg font-bold text-brand-800 tracking-tight leading-snug">${item.name}</h3>
          <p class="text-brand-700/60 text-xs mt-2 leading-relaxed">${item.desc || ''}</p>
        </div>
        <div class="mt-4 pt-4 border-t border-brand-100/50 flex items-center justify-between">
          <div>
            <span class="text-brand-500 font-display text-lg font-bold">${item.price}</span>
            <span class="text-[9px] text-brand-600/40 block leading-none">Starting from</span>
          </div>
          <a href="https://wa.me/919140893400?text=${waText}" target="_blank" class="inline-flex items-center gap-1 bg-green-500 hover:bg-green-600 text-white px-3.5 py-2 rounded-xl text-xs font-bold shadow-md shadow-green-500/10 hover:shadow-green-500/20 transition-all">
            <iconify-icon icon="mdi:whatsapp" width="16"></iconify-icon>
            <span>Order</span>
          </a>
        </div>
      </div>
    `;
  }).join('');
}

function setFilter(cat) {
  activeFilter = cat;
  
  // Highlight active tab
  document.querySelectorAll('.tab-btn').forEach(btn => {
    if (btn.getAttribute('data-category') === cat) {
      btn.className = "tab-btn px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-brand-500 text-white shadow-md transition-all";
    } else {
      btn.className = "tab-btn px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-white text-brand-800/70 border border-brand-100 hover:bg-brand-50 transition-all";
    }
  });
  
  renderCatalog();
}

// Watch live typing if element exists
const catalogSearch = document.getElementById('catalogSearch');
if (catalogSearch) {
  catalogSearch.addEventListener('input', renderCatalog);
}

// ===== CAKE CUSTOMIZER =====
function scrollToCustomizer(flavour, category) {
  const customizer = document.getElementById('customizerSection');
  if (customizer) {
    customizer.scrollIntoView({ behavior: 'smooth' });
  }
  
  // Set values in selectors
  if (flavour) {
    const flavourSelect = document.getElementById('cakeFlavour');
    if (flavourSelect) {
      for (let i = 0; i < flavourSelect.options.length; i++) {
        if (flavourSelect.options[i].value.includes(flavour)) {
          flavourSelect.selectedIndex = i;
          break;
        }
      }
    }
  }
  
  if (category) {
    const categorySelect = document.getElementById('cakeCategory');
    if (categorySelect) {
      for (let i = 0; i < categorySelect.options.length; i++) {
        if (categorySelect.options[i].value.includes(category)) {
          categorySelect.selectedIndex = i;
          break;
        }
      }
    }
  }
}

function generateWhatsAppOrder(e) {
  e.preventDefault();
  
  const category = document.getElementById('cakeCategory').value;
  const flavour = document.getElementById('cakeFlavour').value;
  const weight = document.getElementById('cakeWeight').value;
  const message = document.getElementById('cakeMessage').value || 'None';
  const requests = document.getElementById('cakeRequests').value || 'None';
  
  const formattedText = `Hi Hot Millions Bakery! 🎂
I'd like to make a Custom Cake inquiry:
• Category: ${category}
• Flavour: ${flavour}
• Weight: ${weight}
• Dedication Message: "${message}"
• Special Requests: "${requests}"

Please let me know the availability, pricing, and next steps!`;

  const waURL = `https://wa.me/919140893400?text=${encodeURIComponent(formattedText)}`;
  
  window.open(waURL, '_blank');
  showToast('🎉 Created WhatsApp custom cake enquiry successfully!');
}

// ===== CONTACT FORM =====
function handleFormSubmit(e) {
  e.preventDefault();
  
  const name = document.getElementById('contactName').value;
  const phone = document.getElementById('contactPhone').value;
  const subject = document.getElementById('contactSubject').value;
  const message = document.getElementById('contactMessage').value;
  
  const formattedText = `Hi Hot Millions! 📩
I have submitted a Contact Form Inquiry:
• Name: ${name}
• Phone: ${phone}
• Subject: ${subject}
• Message: "${message}"`;

  const waURL = `https://wa.me/919140893400?text=${encodeURIComponent(formattedText)}`;
  
  showToast('📩 Thank you, ' + name + '! Your inquiry is received.');
  
  setTimeout(() => {
    if (confirm('Would you also like to instantly send this message via WhatsApp to our staff for 2-minute replies?')) {
      window.open(waURL, '_blank');
    }
  }, 1000);
  
  const contactForm = document.getElementById('contactForm');
  if (contactForm) contactForm.reset();
}

// Set up listeners once elements are ready
window.addEventListener('DOMContentLoaded', () => {
  const customizerForm = document.getElementById('cakeCustomizerForm');
  if (customizerForm) {
    customizerForm.addEventListener('submit', generateWhatsAppOrder);
  }

  const contactFormEl = document.getElementById('contactForm');
  if (contactFormEl) {
    contactFormEl.addEventListener('submit', handleFormSubmit);
  }

  if (document.getElementById('catalogGrid')) {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    const searchParam = urlParams.get('search');
    
    if (searchParam) {
      const catalogSearch = document.getElementById('catalogSearch');
      if (catalogSearch) {
        catalogSearch.value = searchParam;
      }
    }
    
    if (categoryParam) {
      setFilter(categoryParam);
    } else {
      renderCatalog();
    }
  }
});
