sed -i 's/id="hero" class="relative min-h-screen flex items-center"/id="hero" class="relative min-h-screen flex items-center overflow-hidden"/g' index.html
sed -i 's/absolute inset-16 rounded-full  shadow-2xl/absolute inset-16 rounded-full overflow-hidden shadow-2xl/g' index.html
sed -i 's/<div class="py-6 bg-brand-800 ">/<div class="py-6 bg-brand-800 overflow-hidden">/g' index.html
sed -i 's/id="about" class="relative "/id="about" class="relative overflow-hidden"/g' index.html
sed -i 's/id="storySection" class="py-24 relative  bg-white"/id="storySection" class="py-24 relative overflow-hidden bg-white"/g' index.html
sed -i 's/<div class="py-24 bg-cream-50 relative ">/<div class="py-24 bg-cream-50 relative overflow-hidden">/g' index.html
sed -i 's/id="team" class="py-24 bg-white relative "/id="team" class="py-24 bg-white relative overflow-hidden"/g' index.html
sed -i 's/id="menu" class="py-24 bg-white relative "/id="menu" class="py-24 bg-white relative overflow-hidden"/g' index.html
sed -i 's/sticky top-0 rounded-tr-\[3rem\] rounded-tl-\[3rem\] "/sticky top-0 rounded-tr-[3rem] rounded-tl-[3rem] overflow-hidden"/g' index.html
sed -i 's/w-full bg-brand-950 "/w-full bg-brand-950 overflow-hidden"/g' index.html
sed -i 's/w-full bg-brand-900 pb-20 "/w-full bg-brand-900 pb-20 overflow-hidden"/g' index.html
sed -i 's/id="customizerSection" class="py-24 bg-cream-50 relative  border-t/id="customizerSection" class="py-24 bg-cream-50 relative overflow-hidden border-t/g' index.html
sed -i 's/id="testimonials" class="py-24 md:py-32 relative "/id="testimonials" class="py-24 md:py-32 relative overflow-hidden"/g' index.html
sed -i 's/rounded-3xl  border border-brand-100 shadow-xl/rounded-3xl overflow-hidden border border-brand-100 shadow-xl/g' index.html
sed -i 's/py-20 bg-brand-900 text-white relative  grain/py-20 bg-brand-900 text-white relative overflow-hidden grain/g' index.html
sed -i 's/<footer class="bg-brand-900 text-white relative  border-t/<footer class="bg-brand-900 text-white relative overflow-hidden border-t/g' index.html
