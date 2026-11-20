
document.addEventListener('DOMContentLoaded',()=>{
 document.querySelectorAll('[data-demo-form]').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();alert('Demo only — connect this form to your real email or booking system before publishing.');}));
});
